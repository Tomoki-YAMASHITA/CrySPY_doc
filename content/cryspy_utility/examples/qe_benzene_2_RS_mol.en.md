---
title: "qe_benzene_2_RS_mol"
weight: 84
---

## Download
{{% button href="/examples/qe_benzene_2_RS_mol.tar.gz" icon="download" %}}qe_benzene_2_RS_mol.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = QE
tot_struc = 6
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
struc_mode = mol
natot = 24
atype = H C
nat = 12 12
mol_file = benzene
nmol = 2

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol = 40  60

[option]
```

## calc_in/

### pwscf.in_1
``` bash
 &control
    title = '2 benzene'
    calculation = 'relax'
    nstep = 30
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./outdir/'
 /

 &system
    ibrav = 0
    nat = 24
    ntyp = 2
    ecutwfc = 35.00
    ecutrho = 300.00
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
   H  1.008  H.pbe-kjpaw_psl.1.0.0.UPF
   C  12.01  C.pbe-n-kjpaw_psl.1.0.0.UPF
```

### pwscf.in_2
``` bash
 &control
    title = '2 benzene'
    calculation = 'vc-relax'
    nstep = 200
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./outdir/'
 /

 &system
    ibrav = 0
    nat = 24
    ntyp = 2
    ecutwfc = 46.00
    ecutrho = 326.00
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
   H  1.008  H.pbe-kjpaw_psl.1.0.0.UPF
   C  12.01  C.pbe-n-kjpaw_psl.1.0.0.UPF
```
### job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N bz_CrySPY_ID
#$ -pe smp 20

# ---------- qe run
mpirun -np $NSLOTS /path/to/pw.x  < pwscf.in > pwscf.out

# ---------- qe if crash
if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

# ---------- cryspy
sed -i -e '3 s/^.*$/done/' stat_job
```