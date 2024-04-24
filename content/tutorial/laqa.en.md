---
title: "LAQA"
weight: 40
---

May 15th, 2023

{{% notice info %}}
First, see [Tutorial > Random Search (RS)]({{< ref "tutorial/random/" >}}) for basic usage of CrySPY.  
Here, we assume CrySPY 1.1.0 or later.  
{{% /notice %}}


The example files used here can be downloaded from [CrySPY Utility > Examples > qe_Si16_LAQA]({{< ref "cryspy_utility/examples/qe_si16_laqa" >}}).
In this tutorial, only 50 initial structures are generated, but originally, LAQA is designed to select candidates from many more structures.


## Input

### cryspy.in

Here is an example of `cryspy.in`.

```
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

- `nstage` must be 1 in LAQA
- You have to write `nselect_laqa` in [LAQA] section. `nselect_laqa` is the number of candidates you select at one time.


If you want to change the value of the weight for LAQA score, edit `wf` and `ws` as below.
If omitted, the default values are used (0.1 and 10.0, respectively).
See, [Searching algorithms > LAQA]({{< ref "searching_algo/laqa" >}}) for the score.

```
[LAQA]
nselect_laqa = 4
wf = 0.1
ws = 10.0
```

### calc_in/pwscf.in_1

```
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

- `nstep` controls how many steps of structure optimization can proceed in one selection. (`NSW` for VASP)

### calc_in/job_cryspy

```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS pw.x -nk 4 < pwscf.in > pwscf.out

if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```

- The job file is the same as the usual way.


## Run

{{% notice tip %}}
An automatic script is also available. See the bottom of this page.
{{% /notice %}}

Just type `cryspy` for the 1st run.

```
cryspy &
```

Check `log_cryspy`.
50 random structures are generated.

```
2023/05/13 13:02:07
CrySPY 1.1.0
Start cryspy.py
Number of MPI processes: 1

Read input file, cryspy.in
Save input data in cryspy.stat

# --------- Generate initial structures
# ------ mindist
Si - Si 1.5
Structure ID      0 was generated. Space group: 165 --> 165 P-3c1
Structure ID      1 was generated. Space group:  66 -->  66 Cccm
Structure ID      2 was generated. Space group: 146 --> 146 R3
Structure ID      3 was generated. Space group:  82 -->  82 I-4
Structure ID      4 was generated. Space group: 162 --> 162 P-31m
...
...
...
Structure ID     47 was generated. Space group:  90 -->  90 P42_12
Structure ID     48 was generated. Space group: 214 --> 214 I4_132
Structure ID     49 was generated. Space group:  23 -->  23 I222

Elapsed time for structure generation: 0:00:10.929030


# ---------- Initialize LAQA
# ---------- Selection 0
selected_id: 50 IDs
```

In LAQA, jobs of structure optimization for all structures are submitted once at the beginning.
Note that only 10 steps are proceeded here since we set `nstep = 10`.
Repeat `cryspy` command until all of these (10 steps) are completed.
If necessary, you can also submit all jobs at once by increasing the value of `njob`.


After all the initial optimizations, `LAQA is ready` is displayed at the end of `log_cryspy`.

```
2023/05/13 13:23:31
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status
ID     41: Stage 1 Done!

LAQA is ready
```

Next cryspy run will make the first selection.

```
2023/05/13 13:23:33
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status

Backup data

# ---------- Selection 1
selected_id: 37 8 10 48
```

Here, only the number set in `nselect_laqa` will be selected.
Type `cryspy` to submit the jobs (next 10 steps).

```
cryspy &
```

```
2023/05/13 13:23:36
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status
ID     37: submit job, Stage 1
ID      8: submit job, Stage 1
ID     10: submit job, Stage 1
ID     48: submit job, Stage 1
```

Then, by repeating this over and over again, the optimization of the structure selected according to the score advances by 10 steps each time.
Proceed until several structures are completed, and finish (stop) when you like.


## Status

If you want to check the LAQA score during the simulation, you can look at the status file:

- ./data/LAQA_status

Other files for LAQA will be output:

- ./data_LAQA_bias
- ./data_LAQA_energy
- ./data_LAQA_score
- ./data_LAQA_selected_id
- ./data_LAQA_step

## Analysis and visualization

It is assumed here that you analyze and visualize CrySPY data in your local PC.
If you use CrySPY in super computers or workstations, download the data in your local PC.
You can delete the `work` and `backup` directory if you do not need it because the file size could be very large.
You may gzip the pkl data to decrease the file size.

### jupyter notebook
Move to the data/ directory in results you just downloaded.
Then copy `cryspy_analyzer_LAQA.ipynb` from [CrySPY utility]({{< ref "/installation/utility" >}}).

You can obtain the graph and animation with the notebook.
In the gif below, all of the optimizations were completed. This is just for animation.
(When all of the optimizations are completed, the computational cost is the same as random search.)

![fig_LAQA](/images/LAQA/LAQA.gif?width=40vw)

This graph shows the energy as a function of optimization step.
The red lines indicate three structures with the lowest energy.
The most stable one reached diamond structure.
The structures that eventually become stable were selected at an early stage.

{{% notice info %}}
If algo = LAQA, the followings are automatically set in the [option] section.
- force_step_flag = True
- stress_step_flag = True

Force and stress data are collected step by step.
Energy and structure data are NOT. They are collected for each selection.
In other words, in this case, energy and structure data are saved once every 10 steps.
If you want to collect energy and structure data step by step, manually set up as follows:
```
[option]
energy_step_flag = True
struc_step_flag = True
```
{{% /notice %}}


## Auto script

You may find it tedious to run cryspy over and over again.
The auto script could help you.


[repeat_cryspy]({{< ref "/cryspy_utility/scripts/repeat" >}})