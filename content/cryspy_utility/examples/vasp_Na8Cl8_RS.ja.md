---
title: "vasp_Na8Cl8_RS"
weight: 70
---

## Download
{{% button href="/examples/vasp_Na8Cl8_RS.tar.gz" icon="download" %}}vasp_Na8Cl8_RS.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = VASP
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 16
atype = Na Cl
nat = 8 8
mindist_1 = 2.5 1.5
mindist_2 = 1.5 2.5

[VASP]
kppvol = 40 80

[option]
```

## calc_in/

### INCAR_1
``` python
SYSTEM = NaCl
!!!LREAL = Auto
Algo = Fast
NSW = 40

LWAVE = .FALSE.
!LCHARG = .FALSE.

ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 2

EDIFF = 1e-5
EDIFFG = -0.01
```


### INCAR_2
``` python
SYSTEM = NaCl
!!LREAL = Auto
Algo = Fast
NSW = 200

ENCUT = 341

!!LWAVE = .FALSE.
!!LCHARG = .FALSE.


ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 3

EDIFF = 1e-5
EDIFFG = -0.01
```

### job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Na8Cl8_CrySPY_ID
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