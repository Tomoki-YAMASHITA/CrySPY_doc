---
title: "ASE-CHGNet（Cu-Au）"
weight: 20
---

2025 June 16

{{% notice info %}}
[CHGNet](https://chgnet.lbl.gov)<i class="fas fa-external-link-alt"></i> needs to be installed.
{{% /notice %}}

The files used in this tutorial can be downloaded from [CrySPY_utility/examples/ase_chgnet_Cu-Au_EA-vc](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_chgnet_Cu-Au_EA-vc).
In this tutorial, we assume that a computing cluster with a job scheduler is used together with the machine learning potential [CHGNet](https://chgnet.lbl.gov)<i class="fas fa-external-link-alt"></i>.
The calculation can also be performed on a local PC, so if you prefer this, please modify the input settings accordingly.
The target system is the binary Cu-Au system.


## Pre-calculation
In EA-vc, the per-atom energies of each elemental phase must be used as the reference in the `end_point` setting of `cryspy.in`, so they need to be calculated beforehand.
There should be two directories inside the example.
``` bash
Au-fcc
├── POSCAR
├── chgnet_in.py
└── job_cryspy
```
``` bash
Cu-fcc
├── POSCAR
├── chgnet_in.py
└── job_cryspy
```
Each directory contains a crystal structure file (`POSCAR`), a Python script (`chgnet_in.py`) to perform structure relaxation and calculate energy, and a job script (`job_cryspy`).
Please modify these files according to your computing environment.


Submit the job (replace the job submission command as appropriate for your system).
``` bash
cd Au-fcc
qsub job_cryspy
cd ../Cu-fcc
qsub job_cryspy
cd ..
```

When the calculations finish successfully, a file named `end_point` will be created in each directory, containing the energy per atom (eV/atom) after structure relaxation.

``` bash
cat Au-fcc/end_point
-3.2357187271118164
```
``` bash
cat Cu_fcc/end_point
-4.083529472351074
```

These values are then used as input for the `cryspy.in` file.

## cryspy.in

``` python
[basic]
algo = EA-vc
calc_code = ASE
nstage = 1
njob = 20
jobcmd = qsub
jobfile = job_cryspy

[structure]
atype = Cu Au
ll_nat = 0 0
ul_nat = 8 8

[ASE]
ase_python = chgnet_in.py

[EA]
n_pop = 20
n_crsov = 5
n_perm = 2
n_strain = 2
n_rand = 2
n_add = 3
n_elim = 3
n_subs = 3
target = random
n_elite = 2
n_fittest = 10
slct_func = TNM
t_size = 2
maxgen_ea = 0
end_point = -4.08352709  -3.23571777

[option]
```

- Use `algo = EA-vc`.
- Change `jobcmd` according to your computing environment.
- In the [structure] section, use `ll_nat` to specify the minimum number of atoms for each element, and `ul_nat` for the maximum.
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand` + `n_add` + `n_elim` + `n_subs`
- In the `end_point`, enter the per-atom energies (in eV/atom) of each pure element—Cu, Ag, and Au. Use the values obtained from the pre-calculations, and make sure the order follows that of `atype`.
- For the parameters in the [EA] section, refer to [CrySPY > Input file > [EA] Section]({{< ref "input/ea" >}}) and [CrySPY > Search algorithms > Variable-composition evolutionary algorithm (EA-vc)]({{< ref "search_algo/ea-vc" >}}).
- Refer also to [CrySPY > Tutorial > Variable-composition evolutionary algorithm (EA-VC) > Analysis and Visualization]({{< ref "tutorial/ea-vc/analysis_visualization" >}}) for the parameters of the automatically generated convex hull plot.


## calc_in/
The contents under calc_in/ are the same as those in [Tutorial > Random Search (RS) > ASE on your local PC]({{< ref "tutorial/random/ase" >}}), with minor modifications for CHGNet.
Be sure to adjust paths such as the Python executable in the job script to match your computing environment.
Be sure to adjust the Python executable path in the job script.

### calc_in/chgnet_in.py_1
``` python
# ---------- import
from ase.constraints import FixSymmetry
from ase.filters import FrechetCellFilter
from ase.io import read, write
from ase.optimize import FIRE, BFGS, LBFGS
from chgnet.model import CHGNetCalculator

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR')

# ---------- set up
atoms.calc = CHGNetCalculator()
atoms.set_constraint([FixSymmetry(atoms)])
cell_filter = FrechetCellFilter(atoms)
opt = BFGS(cell_filter, trajectory='opt.traj')

# ---------- run
opt.run(fmax=0.01, steps=2000)

# ---------- write structure
write('opt_struc.vasp', cell_filter.atoms, format='vasp', direct=True)

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
# ------ energy
e = cell_filter.atoms.get_total_energy()    # eV/cell
with open('log.tote', mode='w') as f:
    f.write(str(e))

# ------ struc
opt_atoms = cell_filter.atoms.copy()
opt_atoms.set_constraint(None)    # remove constraint for pymatgen
write('CONTCAR', opt_atoms, format='vasp', direct=True)
```

### calc_in/job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N CuAu_CrySPY_ID
#$ -pe smp 2

# ---------- OpenMP
export OMP_NUM_THREADS=2

# ---------- ASE
/usr/local/Python-3.10.13/bin/python3 chgnet_in.py > out.log

# --------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```