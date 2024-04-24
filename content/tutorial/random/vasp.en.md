---
title: "VASP"
weight: 20
---

2024 April 24

In this tutorial, we try to use CrySPY in a PC cluster with a job scheduler system such as PBS.
Here we employ VASP.
The target system is Na8Cl8, 16 atoms.

## Assumption

Here, we assume the following conditions:

- CrySPY 1.2.0 or later in your PC cluster
- CrySPY job command: `qsub`
- CrySPY job filename: `job_cryspy`
- executable file, vasp_std in your PC cluster

## Input files
Move to your working directory, and copy the example files by one of the following methods.

- Download from [cryspy_utility/examples/vasp_Na8Cl8_RS]({{< ref "/cryspy_utility/examples/vasp_Na8Cl8_RS" >}})
- Copy from CrySPY utility that you installed

``` zsh
cd vasp_Na8Cl8_RS
tree
```

``` zsh
.
├── calc_in
│   ├── INCAR_1
│   ├── INCAR_2
│   ├── POTCAR
│   ├── POTCAR_is_dummy
│   └── job_cryspy
└── cryspy.in
```


### cryspy.in
`cryspy.in` is the input file of CrySPY.

```
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

In `[basic]` section, `jobcmd = qsub` can be changed in accordance with your environment.
CrySPY runs `qsub job_cryspy` as a background job internally in this setting.
You can name the following file whatever you want:

- `jobfile`


We adopt a stage-based system for structure optimization calculations.
Here, we use `nstage = 2`.
For example, users can configure the following settings.
In the first stage, only the ionic positions are relaxed, fixing the cell shape, with low k-point grid density.
Next, the ionic positions and cell shape are fully relaxed with high accuracy in the second stage.

`[VASP]` section is required when you use VASP.
You have to specify k-point grid density (Å^-3) for each stage in `kppvol`.

{{% notice style="info" %}}
See [Input file > Kpoint]({{< ref "input/kpoint" >}}) for details of `kppvol`
{{% /notice %}}


The other input variables are discussed later.


### calc_in directory

The job file and input files for VASP are prepared in this directory.


#### Job file

The name of the job file must match the value of `jobfile` in `cryspy.in`.
The example of job file (here, `job_cryspy`) is shown below.

``` zsh
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

Change `VASPROOT` to the appropriate path suitable for your environment.
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

#### Input for VASP

Input files based on the number of stages (`nstage` in `cryspy.in`) are required.
Name the input file(s) with a suffix `_x`.
Here `x` means the stage number.

We are using `nstage = 2`, so we need `INCAR_1` and `INCAR_2`.
Here, `INCAR_1` is set to fix the cell and relax only the ionic positions, while `INCAR_2` is configured to fully relax both the cell and ionic positions.


`INCAR_1`
``` bash
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

`INCAR_2`
``` bash
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

CrySPY automatically generates `POSCAR` and `KPOINTS` files.
You have to prepare `POTCAR` file yourself.
The `POTCAR` included in this example file is empty, so please be aware of that.

{{% notice warning %}}
`POTCAR` in this example is empty. We cannot distribute it.
{{% /notice %}}


## Running CrySPY

Go to [Running CrySPY]({{< relref "../random/#running-cryspy" >}})