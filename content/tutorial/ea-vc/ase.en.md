---
title: "ASE on your local PC (Cu-Ag-Au)"
weight: 10
---

2025 June 16


The files used in this tutorial can be downloaded from [CrySPY_utility/examples/ase_Cu-Ag-Au_EA-vc](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_Cu-Ag-Au_EA-vc).
This tutorial demonstrates a test run on a local machine using ASE’s lightweight [Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>.
The target system is the ternary Cu-Ag-Au system.


## cryspy.in

Example of `cryspy.in`.
``` python
[basic]
algo = EA-vc
calc_code = ASE
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu Ag Au
ll_nat = 0 0 0
ul_nat = 8 8 8

[ASE]
ase_python = ase_in.py

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
end_point = 0.0 0.0 0.0
maxgen_ea = 0

[option]
```
- Use `algo = EA-vc`.
- When using a bash environment, set `jobcmd` to bash.
- In the [structure] section, use `ll_nat` to specify the minimum number of atoms for each element, and `ul_nat` for the maximum.
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand` + `n_add` + `n_elim` + `n_subs`
- The `end_point` field should be set to the energy per atom (eV/atom) for each pure element—Cu, Ag, and Au. When using ASE’s [Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>, the energies of the pure elements are zero, so enter 0.0 in each case. (For an example using CHGNet, refer to [ASE-CHGNet（Cu-Au）]({{< ref "tutorial/ea-vc/ase_chgnet" >}}).)
- For the parameters in the [EA] section, refer to [CrySPY > Input file > [EA] Section]({{< ref "input/ea" >}}) and [CrySPY > Search algorithms > Variable-composition evolutionary algorithm (EA-vc)]({{< ref "search_algo/ea-vc" >}}).
- Refer also to [CrySPY > Tutorial > Variable-composition evolutionary algorithm (EA-VC) > Analysis and Visualization]({{< ref "tutorial/ea-vc/analysis_visualization" >}}) for the parameters of the automatically generated convex hull plot.


## calc_in/
The contents under `calc_in/` are the same as those in [Tutorial > Random Search (RS) > ASE on your local PC]({{< ref "tutorial/random/ase" >}}).
### calc_in/ase_in.py_1
``` python
from ase.constraints import FixSymmetry
from ase.filters import FrechetCellFilter
from ase.calculators.emt import EMT
from ase.optimize import BFGS
import numpy as np
from ase.io import read, write

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR', format='vasp')

# ---------- setting and run
atoms.calc = EMT()
atoms.set_constraint([FixSymmetry(atoms)])
cell_filter = FrechetCellFilter(atoms, hydrostatic_strain=False)
opt = BFGS(cell_filter)
opt.run(fmax=0.01, steps=2000)

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
e = cell_filter.atoms.get_total_energy()
with open('log.tote', mode='w') as f:
    f.write(str(e))

# ------ write structure
opt_atoms = cell_filter.atoms.copy()
opt_atoms.set_constraint(None)    # remove constraint for pymatgen
write('CONTCAR', opt_atoms, format='vasp', direct=True)
```

### calc_in/job_cryspy
``` bash
#!/bin/sh

# ---------- ASE
python3 ase_in.py > out.log

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```