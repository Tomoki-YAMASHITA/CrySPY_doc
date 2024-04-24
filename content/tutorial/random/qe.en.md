---
title: "QE"
weight: 30
---

2024 April 24, updated

In this tutorial, we try to use CrySPY in a machine with a job scheduler system such as PBS.
Here we employ QUANTUM ESPRESSO. (QE).
The target system is Si 8 atoms.

## Assumption

Here, we assume the following conditions:

- CrySPY job command: `qsub`
- CrySPY job filename: `job_cryspy`
- QE executable file: `/usr/local/qe-6.5/bin/pw.x`
- QE input filename: `pwscf.in`
- QE output filename: `pwscf.out`


## Input files
Move to your working directory, and copy input example files by one of the following methods.

- Download from [cryspy_utility/examples/qe_Si8_RS]({{< ref "/cryspy_utility/examples/qe_Si8_RS" >}})
- Copy from CrySPY utility that you installed
- (only version 0.10.3 or earlier) `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/QE_Si8_RS .`



``` zsh
cd QE_RS_Si8
tree
```

``` zsh
.
├── calc_in
│   ├── job_cryspy
│   ├── pwscf.in_1
│   └── pwscf.in_2
└── cryspy.in
```


### cryspy.in
`cryspy.in` is the input file of CrySPY.

```
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

In `[basic]` section, `jobcmd = qsub` can be changed in accordance with your environment.
CrySPY runs `qsub job_cryspy` as a background job internally in this setting.

We adopt a stage-based system for structure optimization calculations.
Here, we use `nstage = 2`.
For example, users can configure the following settings.
In the first stage, only the ionic positions are relaxed, fixing the cell shape, with low k-point grid density.
Next, the ionic positions and cell shape are fully relaxed with high accuracy in the second stage.



`[QE]` section is required when you use QE.
You have to specify k-point grid density (Å^-3) for each stage in `kppvol`.

{{% notice style="info" %}}
See [Input file > Kpoint]({{< ref "input/kpoint" >}}) for details of `kppvol`
{{% /notice %}}

You can name the following files whatever you want:

- `jobfile`
- `qe_infile`
- `qe_outfile`

The other input variables are discussed later.



### calc_in directory

The job file and input files for QE are prepared in this directory.


#### Job file

The name of the job file must match the value of `jobfile` in `cryspy.in`.
The example of job file (here, `job_cryspy`) is shown below.

``` zsh
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

Change `/path/to/pw.x` to the appropriate path suitable for your environment.
You can specify the input (`pwscf.in`) and output (`pwscf.out`) file names,
but they must match the values of `qe_infile` and `qe_outfile` in `cryspy.in`.

The job file is written in the same way as the one you usually use except for the last line.
You must add `sed -i -e '3 s/^.*$/done/' stat_job` at the end of the file in CrySPY.

{{% notice note %}}
`sed -i -e '3 s/^.*$/done/' stat_job` is required at the end of the job file.
{{% /notice %}}

{{% notice tip %}}
In the job file of CrySPY, the string "CrySPY_ID" is automatically replaced with the structure ID.
When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name.
For example, in the PBS system, `#PBS -N Si_CrySPY_ID` in ID 10 is replaced with `#PBS -N Si_10`.
Note that starting with a number will result in an error.
You should add a prefix like `Si_`.
{{% /notice %}}


#### Input for QE

Input files based on the number of stages (`nstage` in `cryspy.in`) are required.
Name the input file(s) with a suffix `_x`.
Here `x` means the stage number.

We are using `nstage = 2`, so we need `pwscf.in_1` and `pwscf.in_2`.
Here, `pwscf.in_1` is set to fix the cell and relax only the ionic positions, while `pwscf.in_2` is configured to fully relax both the cell and ionic positions.

`pwscf.in_1`
``` fortran
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

`pwscf.in_2`
``` fortran
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


Change `pseudo_dir` to your suitable directory.
Inputs for structure data and k-point such as `ATOMIC_POSITIONS` and `K_POINTS` are automatically appended by CrySPY with pymatgen.
Users do not have to prepare them in `pwscf.in_x`.


## Running CrySPY

Go to [Running CrySPY]({{< relref "../random/#running-cryspy" >}})
