---
title: "Submit job"
weight: 150
---

2023 July 10, update

## Continue

CrySPY continues the simulation if you have `cryspy.stat` file.

{{% notice tip %}}
Continue if you have `crypy.stat`  
Start from the beginning if you don't have `cryspy.stat`
{{% /notice %}}



## Submit job

Run CyrSPY again.

``` zsh
cryspy
```

Check the screen or `log_cryspy` file.


``` txt
[2023-07-10 18:52:51,859][cryspy_restart][INFO] 


Restart CrySPY 1.2.0


[2023-07-10 18:52:51,869][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:52:51,904][ctrl_job][INFO] ID      0: submit job, Stage 1
[2023-07-10 18:52:51,931][ctrl_job][INFO] ID      1: submit job, Stage 1
```


And also `cryspy.stat` file.

``` txt
...
(omit)
...
[status]
id_queueing = 2 3 4
id      0 = Stage 1
id      1 = Stage 1
```
CrySPY submitted two jobs for structure ID 0 and 1 as you set `njob = 2` in `cryspy.in`.
Calculations are performed in the `work` directory.
These directory names correspond to their structure ID.

``` zsh
tree -d work
```
``` txt
work
├── 000000
├── 000001
└── fin
```


When the two jobs are done, run CrySPY again.

``` zsh
cryspy
```
``` zsh
[2023-07-10 18:55:01,053][cryspy_restart][INFO] 


Restart CrySPY 1.2.0


[2023-07-10 18:55:01,058][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:55:01,058][ctrl_job][INFO] ID      0: Stage 1 Done!
[2023-07-10 18:55:01,093][ctrl_job][INFO]     collect results: E = -0.00696997755502915 eV/atom
[2023-07-10 18:55:01,132][ctrl_job][INFO] ID      1: Stage 1 Done!
[2023-07-10 18:55:01,133][ctrl_job][INFO]     collect results: E = 0.4934076667166454 eV/atom
[2023-07-10 18:55:01,144][cryspy][INFO] 

recheck 1

[2023-07-10 18:55:01,145][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:55:01,153][ctrl_job][INFO] ID      2: submit job, Stage 1
[2023-07-10 18:55:01,161][ctrl_job][INFO] ID      3: submit job, Stage 1
```
If you set `nstage = 2` (more than 2), new jobs on stage 2 for ID 0 and 1 are submitted.
If you set `nstage = 1`, CrySPY collects calculation data of ID 0 and 1, then submits next ID's jobs.
Directories of the finished structure are moved to the `fin` directory.



Repeat `cryspy` several times until all 5 structures are done.
You can delete the `work` directory when the simulation is done if you do not need it.

The auto script ([repeat_cryspy]({{< ref "/cryspy_utility/repeat" >}})) may help you.