---
title: "qe_Si8_RS"
weight: 80
---

## Download
{{% button href="/examples/qe_Si8_RS.tar.gz" icon="download" %}}qe_Si8_RS.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = QE
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80

[option]
```

## calc_in/

### pwscf.in_1
``` bash
 &control
    title = 'Si8'
    calculation = 'relax'
    nstep = 100
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```

### pwscf.in_2
``` bash
 &control
    title = 'Si8'
    calculation = 'vc-relax'
    nstep = 200
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```
### job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si8_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS /path/to/pw.x < pwscf.in > pwscf.out


if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```