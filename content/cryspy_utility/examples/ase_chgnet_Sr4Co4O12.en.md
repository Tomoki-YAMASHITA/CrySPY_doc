---
title: "ase_chgnet_Sr4Co4O12"
weight: 6
---

## Download
{{% button href="/examples/ase_chgnet_RS_Sr4Co4O12.tar.gz" icon="download" %}}ase_chgnet_RS_Sr4Co4O12.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = ASE
tot_struc = 10
nstage = 1
njob = 2
jobcmd = bash
jobfile = job_cryspy

[structure]
natot = 20
atype = Sr Co O
nat = 4  4  12
mindist_1 = 2.2  2.0  1.8
mindist_2 = 2.0  2.2  1.5
mindist_3 = 1.8  1.5  2.0

[ASE]
ase_python = chgnet_in.py

[option]
```

## calc_in/

### chgnet_in.py_1
``` python
from chgnet.model import StructOptimizer
from pymatgen.core import Structure


# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
structure = Structure.from_file('POSCAR')

# ---------- relax
relaxer = StructOptimizer()
result = relaxer.relax(atoms=structure, fmax=0.01, steps=2000)

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
# ------ energy
traj = result['trajectory']
e = traj.compute_energy()   # eV/cell
with open('log.tote', mode='w') as f:
    f.write(str(e))
# ------ struc
opt_struc = result["final_structure"]
opt_struc.to(fmt='poscar', filename='CONTCAR')
```

### job_cryspy
``` bash
#!/bin/sh

# ---------- ASE
python3 chgnet_in.py

# ---------- for error
if [ ! -f "log.tote" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```