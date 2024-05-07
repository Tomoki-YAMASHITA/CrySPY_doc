---
title: "Can I change njob in the middle of the simulation?"
weight: 100
---

2024 May 7

## Can I change njob in the middle of the simulation?
Yes, you can change whenever you want.

Below is an example of how the behavior changes when you reduce njob.  

{{% notice style="warning" %}}
In CriSPY version 1.2.3 and earlier, there is a bug, so it is recommended to avoid reducing njobs.
{{% /notice %}}

Currently, with `njob = 4`, jobs for structures with IDs 0, 1, 2, and 3 are running.  
Let's say we chage `njob` from 4 to 2.

``` bash
$ cryspy
[2024-04-28 18:27:41,847][cryspy_restart][INFO] 


Restart CrySPY 1.2.4


[2024-04-28 18:27:41,848][read_input][INFO] Changed njob from 4 to 2
[2024-04-28 18:27:42,335][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:27:42,335][ctrl_job][INFO] ID      0: still queueing or running
[2024-04-28 18:27:42,335][ctrl_job][INFO] ID      1: still queueing or running
```

We reduced `njob` to 2, so we checked IDs 0, 1 and ignored IDs 2, 3.

``` bash
$ cryspy
[2024-04-28 18:29:25,250][cryspy_restart][INFO] 


Restart CrySPY 1.2.4


[2024-04-28 18:29:25,744][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:29:25,744][ctrl_job][INFO] ID      0: Stage 1 Done!
[2024-04-28 18:29:25,757][ctrl_job][INFO]     submitted job, ID      0 Stage 2
[2024-04-28 18:29:25,758][ctrl_job][INFO] ID      1: Stage 1 Done!
[2024-04-28 18:29:25,767][ctrl_job][INFO]     submitted job, ID      1 Stage 2
```

Once the jobs for IDs 1 and 2 are finished, we will then proceed to check the next two jobs (IDs 2 and 3).

``` bash
$ cryspy
[2024-04-28 18:31:30,830][cryspy_restart][INFO]


Restart CrySPY 1.2.4


[2024-04-28 18:31:31,329][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:31:31,329][ctrl_job][INFO] ID      0: Stage 2 Done!
[2024-04-28 18:31:31,329][collect_vasp][WARNING]     Structure ID 0, could not obtain energy from OSZICAR
[2024-04-28 18:31:31,333][ctrl_job][INFO]     collect results: E = nan eV/atom
[2024-04-28 18:31:31,341][ctrl_job][INFO] ID      1: Stage 2 Done!
[2024-04-28 18:31:31,341][collect_vasp][WARNING]     Structure ID 1, could not obtain energy from OSZICAR
[2024-04-28 18:31:31,342][ctrl_job][INFO]     collect results: E = nan eV/atom
[2024-04-28 18:31:31,347][cryspy][INFO] 

recheck 1

[2024-04-28 18:31:31,347][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:31:31,347][ctrl_job][INFO] ID      2: Stage 1 Done!
[2024-04-28 18:31:31,358][ctrl_job][INFO]     submitted job, ID      2 Stage 2
[2024-04-28 18:31:31,358][ctrl_job][INFO] ID      3: Stage 1 Done!
[2024-04-28 18:31:31,368][ctrl_job][INFO]     submitted job, ID      3 Stage 2
```
