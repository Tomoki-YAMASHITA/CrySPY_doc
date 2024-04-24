---
title: "ase_Cu8_RS"
weight: 8
---

## Download
{{% button href="/examples/ase_Cu8_RS.tar.gz" icon="download" %}}ase_Cu8_RS.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = ASE
tot_struc = 5
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Cu
nat = 8

[ASE]
ase_python = ase_in.py

[option]
```

## calc_in/

### ase_in.py_1
``` python
from ase.constraints import ExpCellFilter, StrainFilter
from ase.calculators.emt import EMT
from ase.calculators.lj import LennardJones
from ase.optimize.sciopt import SciPyFminCG
from ase.optimize import BFGS
from ase.spacegroup.symmetrize import FixSymmetry
import numpy as np
from ase.io import read, write

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR', format='vasp')

# ---------- setting and run
atoms.calc = EMT()
atoms.set_constraint([FixSymmetry(atoms)])
atoms = ExpCellFilter(atoms, hydrostatic_strain=False)
opt = BFGS(atoms)
#opt=SciPyFminCG(atoms)
opt.run()

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
e = atoms.atoms.get_total_energy()
with open('log.tote', mode='w') as f:
    f.write(str(e))

write('CONTCAR', atoms.atoms, format='vasp')
```

### job_cryspy
``` bash
#!/bin/sh

# ---------- ASE
python3 ase_in.py

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```