---
title: "qe_Si16_LAQA"
weight: 88
---

## Download
{{% button href="/examples/qe_Si16_LAQA.tar.gz" icon="download" %}}qe_Si16_LAQA.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = LAQA
calc_code = QE
tot_struc = 50
nstage = 1
njob = 10
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 16
atype = Si
nat = 16
mindist_1 = 1.5

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  80

[LAQA]
nselect_laqa = 4

[option]
```

## calc_in/

### pwscf.in_1
``` bash
&control
    calculation = 'vc-relax'
    pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/'
    outdir='./outdir/'
    nstep = 10
/

&system
    ibrav = 0
    nat = 16
    ntyp = 1
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
/

ATOMIC_SPECIES
  Si -1.0 si_pbe_v1.uspp.F.UPF
```


### job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si_CrySPY_ID
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