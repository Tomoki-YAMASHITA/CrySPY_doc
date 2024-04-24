---
title: "CrySPY_ID in job files"
weight: 100
---

In the job file of CrySPY, the string "CrySPY_ID" is automatically replaced with the structure ID.
When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name.
For example, in the PBS system, `#PBS -N Si_CrySPY_ID` in ID 10 is replaced with `#PBS -N Si_10`.
Note that starting with a number will result in an error.
You should add a prefix like `Si_`.

```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si8_CrySPY_ID
#$ -pe smp 8
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS pw.x -nk 4 -nb 2 < pwscf.in > pwscf.out


if [ -e "CRASH" ]; then
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```