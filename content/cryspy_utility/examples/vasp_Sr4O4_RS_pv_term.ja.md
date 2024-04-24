---
title: "vasp_Sr4O4_RS_pv_term"
weight: 75
---

## Download
{{% button href="/examples/vasp_Sr4O4_RS_pv_term.tar.gz" icon="download" %}}vasp_Sr4O4_RS_pv_term.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = VASP
tot_struc = 10
nstage = 2
njob = 4
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 8
atype = Sr O
nat = 4 4

[VASP]
kppvol = 40 80

[option]
```

## calc_in/

### INCAR_1
``` python
SYSTEM = SrO
Algo = Fast
NSW = 60

LWAVE = .FALSE.
!LCHARG = .FALSE.

ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 2

EDIFF = 1e-5
EDIFFG = -0.01

PSTRESS = 400
```

### INCAR_2
``` python
SYSTEM = NaCl
LREAL = Auto
Algo = Fast
NSW = 200

ENCUT = 520

!!LWAVE = .FALSE.
!!LCHARG = .FALSE.


ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 3

EDIFF = 1e-5
EDIFFG = -0.01

PSTRESS = 400
```

### job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N SrO_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q
####$ -q ibis3.q
####$ -q ibis4.q

# ---------- vasp
VASPROOT=/usr/local/vasp/vasp.6.4.2/bin
mpirun -np $NSLOTS $VASPROOT/vasp_std

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```