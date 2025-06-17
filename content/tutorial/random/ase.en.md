---
title: "ASE on your local PC"
weight: 8
---

2025 June 16, updated

[ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i> provides interfaces to different codes.
ASE also includes [Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>, which is suitable for testing CrySPY because of its fast and easy structure optimization.

In this tutorial, we try to use CrySPY in your local PC (Mac or Linux).
The target system is Cu 8 atoms.

## Assumption

Here, we assume the following conditions:

- CrySPY 1.2.0 or later in your local PC
- CrySPY job filename: `job_cryspy`
- ase input filename: `ase_in.py`

## Input files
Move to your working directory, and copy the example files by one of the following methods.

- Download from [CrySPY_utility/examples/ase_Cu8_RS](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_Cu8_RS)
- Copy from CrySPY utility that you installed


``` zsh
cd ase_Cu8_RS
tree
```

``` zsh
.
├── calc_in
│   ├── ase_in.py_1
│   └── job_cryspy
└── cryspy.in
```


### cryspy.in
`cryspy.in` is the input file of CrySPY.

``` python
[basic]
algo = RS
calc_code = ASE
tot_struc = 5
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu
nat = 8

[ASE]
ase_python = ase_in.py

[option]
```

In `[basic]` section, `jobcmd = zsh` can be changed to `jobcmd = sh` or `jobcmd = bash` in accordance with your environment.
CrySPY runs `zsh job_cryspy` as a background job internally.


`[ASE]` section is required when you use ASE.

You can name the following files whatever you want:

- `jobfile`: `job_cryspy`
- `ase_python`: `ase_in.py`


The other input variables are discussed later.




### calc_in directory

The job file and input files for ASE are prepared in this directory.


#### Job file


The name of the job file must match the value of `jobfile` in `cryspy.in`.
The example of job file (here, `job_cryspy`) is shown below.

``` zsh
#!/bin/sh

# ---------- ASE
python3 ase_in.py

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

You can specify the input (`ase_in.py`) file names,
but it must match the values of `ase_python` in `cryspy.in`.
You must add `sed -i -e '3 s/^.*$/done/' stat_job` at the end of the file in CrySPY.

{{% notice note %}}
`sed -i -e '3 s/^.*$/done/' stat_job` is required at the end of the job file.
{{% /notice %}}

{{% notice tip %}}
In the job file of CrySPY, the string `CrySPY_ID` is automatically replaced with the structure ID.
When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name.
For example, in the PBS system, `#PBS -N Si_CrySPY_ID` in ID 10 is replaced with `#PBS -N Si_10`.
Note that starting with a number will result in an error.
You should add a prefix like `Si_`.
{{% /notice %}}


#### Input for ASE

Input files based on the number of stages (`nstage` in `cryspy.in`) are required.
Name the input file(s) with a suffix `_x`.
Here `x` means the stage number.

We are using `nstage = 1` in this ASE tutorial, so we need only `ase_in.py_1`.
`ase_in.py_1` is listed below.
Refer to the ASE documentation for details.

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

Unlike VASP and QE, the ASE input (python script) is more flexible.
CrySPY has two rules:

1. Energy is output in units of eV/cell to `log.tote` file. CrySPY reads the last line of it.
2. Optimized structure is output to `CONTCAR` file in the VASP format.


## Running CrySPY

Go to [Running CrySPY]({{< relref "../random/#running-cryspy" >}})
