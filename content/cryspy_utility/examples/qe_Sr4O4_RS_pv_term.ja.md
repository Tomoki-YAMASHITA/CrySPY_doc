---
title: "qe_Sr4O4_RS_pv_term"
weight: 85
---

## Download
{{% button href="/examples/qe_Sr4O4_RS_pv_term.tar.gz" icon="download" %}}qe_Sr4O4_RS_pv_term.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = QE
tot_struc = 10
nstage = 2
njob = 4
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 8
atype = Sr O
nat = 4 4

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80
pv_term = True

[option]
```

## calc_in/

### pwscf.in_1
``` python
 &control
    title = 'SrO'
    calculation = 'relax'
    nstep = 100
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 2
    ecutwfc = 40
    ecutrho = 200
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
    press = 400
 /

ATOMIC_SPECIES
  Sr  -1.0  sr_pbe_v1.uspp.F.UPF
   O  -1.0  o_pbe_v1.2.uspp.F.UPF
```

### pwscf.in_2
``` python
 &control
    title = 'SrO'
    calculation = 'vc-relax'
    nstep = 200
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 2
    ecutwfc = 40
    ecutrho = 200
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
    press = 400
 /

ATOMIC_SPECIES
  Sr  -1.0  sr_pbe_v1.uspp.F.UPF
   O  -1.0  o_pbe_v1.2.uspp.F.UPF
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