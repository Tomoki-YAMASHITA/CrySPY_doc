---
title: "Random structure generation with MPI"
weight: 100
---

Oct. 21 2023, update

{{% notice info %}}
First, see [Tutorial > Random Search (RS)]({{< relref "random/" >}}) for basic usage of CrySPY.
{{% /notice %}}

{{% notice info %}}
Requirements:  
- CrySPY ~~1.1.0~~ 1.2.3 or later
- mpi4py
- MPI library (Open MPI, Intel MPI, MPICH, etc.)
{{% /notice %}}

{{% notice warning %}}
1.1.0 <= CrySPY <=1.2.2 has a bug.
When you use bash (zsh) to run a job with MPI (e.g., `jobcmd = zsh`, `jobfile = job_cryspy`),
the MPI job does not run. There is no problem when you use a job scheduler (qsub, sbatch).
It has already fixed in version 1.2.3.
{{% /notice %}}

## mpi4py
Install mpi4py if it is not already installed.

``` bash
pip install mpi4py
```

## Input
`cryspy.in` is the same as normal usage and does not need to be changed.
Here we try structure generation with MPI using the following settings:

```
[basic]
algo = RS
calc_code = soiap
tot_struc = 100
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Si
nat = 8

[soiap]
soiap_infile = soiap.in
soiap_outfile = soiap.out
soiap_cif = initial.cif

[option]
```
All except `tot_struc`, `atype`, and `nat` are irrelevant for structure generation and can be ignored here.

## Run

If you want to generate structures with 4 MPI processes, just use `mpiexec -n` (with `-p`` option):
``` bash
mpiexec -n 4 cryspy -p
```

In 1.1.0 <= CrySPY <= 1.2.2, use (without `-p`` option)
``` bash
mpiexec -n 4 cryspy
```

If you submit the job with a job scheduler system, make the job file. Here is an example:
```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
#$ -N n_nproc
#$ -pe smp 4


mpirun -np $NSLOTS ~/.local/bin/cryspy
```

Please edit the location of the executable script `cryspy`.



## Result

CrySPY simply divides the task (number of structures) by the number of processes:
- Rank 0: IDs 0 -- 24
- Rank 1: IDs 25 -- 49
- Rank 2: IDs 50 -- 74
- Rank 3: IDs 75 -- 99

CrySPY outputs the log in the order they are generated as follows:

```
2023/04/24 22:47:51
CrySPY 1.1.0
Start cryspy.py
Number of MPI processes: 4

Read input file, cryspy.in
Save input data in cryspy.stat

# --------- Generate initial structures
# ------ mindist
Si - Si 1.11
Structure ID     25 was generated. Space group: 138 --> 123 P4/mmm
Structure ID     75 was generated. Space group:  99 -->  99 P4mm
Structure ID      0 was generated. Space group: 127 --> 123 P4/mmm
Structure ID      1 was generated. Space group:  61 -->  61 Pbca
Structure ID     50 was generated. Space group:  38 -->  38 Amm2
Structure ID     51 was generated. Space group: 134 --> 123 P4/mmm
Structure ID     26 was generated. Space group: 111 --> 123 P4/mmm
Structure ID      2 was generated. Space group:   9 -->   9 Cc
Structure ID      3 was generated. Space group:  80 -->  80 I4_1
Structure ID      4 was generated. Space group: 107 --> 107 I4mm
Structure ID      5 was generated. Space group:  75 -->  75 P4
Structure ID     76 was generated. Space group: 108 --> 108 I4cm
Structure ID     77 was generated. Space group: 100 --> 100 P4bm
Structure ID     27 was generated. Space group: 207 --> 221 Pm-3m
```

However, the order in `init_POSCARS` is by structure ID since CrySPY outputs after all structures have been generated.

```
ID_0
1.0
   2.9636956737951818    0.0000000000000002    0.0000000000000002
   0.0000000000000000    2.9636956737951818    0.0000000000000002
   0.0000000000000000    0.0000000000000000    6.2634106638053080
Si
8
direct
  -0.1602734164607877   -0.1602734164607877   -0.0000000000000000 Si
   0.1602734164607877    0.1602734164607877    0.5000000000000000 Si
   0.6602734164607877    0.3397265835392123    0.7500000000000000 Si
   0.3397265835392122    0.6602734164607877    0.2500000000000000 Si
   0.4469739273741755    0.4469739273741755   -0.0000000000000000 Si
   0.5530260726258245    0.5530260726258244    0.5000000000000000 Si
   0.0530260726258245    0.9469739273741754    0.7500000000000000 Si
   0.9469739273741754    0.0530260726258245    0.2500000000000000 Si
ID_1
1.0
   7.2751506682509657    0.0000000000000004    0.0000000000000004
   0.0000000000000000    7.2751506682509657    0.0000000000000004
   0.0000000000000000    0.0000000000000000    5.1777634169924873
Si
8
direct
  -0.3845341807505553   -0.3845341807505553    0.4999999999999999 Si
   0.3845341807505553    0.3845341807505553    0.5000000000000000 Si
   0.3845341807505553   -0.3845341807505553    0.0000000000000000 Si
  -0.3845341807505553    0.3845341807505553   -0.0000000000000000 Si
   0.0000000000000000    0.5000000000000000    0.2500000000000000 Si
   0.5000000000000000    0.0000000000000000    0.7500000000000000 Si
   0.0000000000000000    0.5000000000000000    0.7500000000000000 Si
   0.5000000000000000    0.0000000000000000    0.2500000000000000 Si
ID_2
1.0
  -4.3660398676292269   -4.3660398676292269    0.0000000000000000
  -4.3660398676292269   -0.0000000000000003   -4.3660398676292269
   0.0000000000000000   -4.3660398676292269   -4.3660398676292269
Si
8
direct
   0.8700001548800920    0.8700001548800920    0.1299998451199080 Si
   0.1299998451199080    0.1299998451199080    0.8700001548800920 Si
   0.8700001548800920    0.1299998451199080    0.8700001548800920 Si
   0.1299998451199080    0.8700001548800920    0.1299998451199080 Si
   0.1299998451199080    0.8700001548800920    0.8700001548800920 Si
   0.8700001548800920    0.1299998451199080    0.1299998451199080 Si
   0.7500000000000000    0.7500000000000000    0.7500000000000000 Si
   0.2500000000000000    0.2500000000000000    0.2500000000000000 Si
```


{{% notice note %}}
Except for the random structure generation part, there is no point in using MPI because it is not parallelized.
{{% /notice %}}

{{% notice info %}}
See also [Features > Structure generation with MPI parallelization]({{< ref "features/mpi" >}})
{{% /notice %}}