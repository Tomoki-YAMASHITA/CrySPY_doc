---
title: "Structure generation with MPI parallelization"
weight: 200
---

Oct. 21 2023, update

Random structure generation using MPI has been available since version 1.1.0 ( using CrySPY >= 1.2.3 is better).
You need to install mpi4py in your Python environment for MPI parallelization.
Of course, an MPI library such as Open MPI, Intel MPI, and MPICH is required for your workstation.

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

The figure below shows the relationship between elapsed time and the number of processes for 1000 structures of Si8 with the following setting:
```
[basic]
algo = RS
calc_code = soiap
tot_struc = 1000
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8
mindist_1 = 2.2
```
The structure generation is taking a long time because of a slightly stricter setting like `mindset_1 = 2.2`.
The structure generation was performed 10 times for each number of processes.

![fig_MPI](/images/MPI/elapsed_time_ibis.png)

## Run
``` bash
mpiexec -n 4 cryspy -p
```

{{% notice info %}}
See also [Tutorial > Random structure generation with MPI]({{< relref "tutorial/mpi" >}})
{{% /notice %}}