---
title: "soiap in your local PC"
weight: 10
---


[soiap](https://github.com/nbsato/soiap)<i class="fas fa-external-link-alt"></i> is Structure Optimization with InterAtomic Potential.
It is suitable for testing CrySPY because of its fast structure optimization.
See [instructions](https://github.com/nbsato/soiap/blob/master/doc/instructions.md)<i class="fas fa-external-link-alt"></i> to install soiap.

In this tutorial, we try to use CrySPY in your local PC (Mac or Linux).
The target system is Si 8 atoms.

## Assumption

Here, we assume the following conditions:

- (only version 0.10.3 or earlier) CrySPY main script: `~/CrySPY_root/CrySPY-0.9.0/cryspy.py`
- CrySPY job filename: `job_cryspy`
- soiap executable file: `~/local/soiap-0.3.0/src/soiap`
- soiap input filename: `soiap.in`
- soiap output filename: `soiap.out`
- soiap input structure filename: `initial.cif`


## Input files
Move to your working directory, and copy input example files by one of the following methods.

- Download from [cryspy_utility/examples/soiap_Si8_RS]({{< ref "/cryspy_utility/examples/soiap_Si8_RS" >}})
- Copy from CrySPY utility that you installed
- (only version 0.10.3 or earlier) `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/soiap_RS_Si8 .`



``` zsh
cd soiap_RS_Si8
tree
```

``` zsh
.
├── calc_in
│   ├── job_cryspy
│   └── soiap.in_1
└── cryspy.in
```


### cryspy.in
`cryspy.in` is the input file of CrySPY.

```
[basic]
algo = RS
calc_code = soiap
tot_struc = 5
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8

[soiap]
soiap_infile = soiap.in
soiap_outfile = soiap.out
soiap_cif = initial.cif

[option]
```

In `[basic]` section, `jobcmd = zsh` can be changed to `jobcmd = sh` or `jobcmd = bash` in accordance with your environment.
CrySPY runs `zsh job_cryspy` as a background job internally.


`[soiap]` section is required when you use soiap.

You can name the following files whatever you want:

- `jobfile`
- `soiap_infile`
- `soiap_outfile`
- `soiap_cif`


The other input variables are discussed later.




### calc_in directory

The job file and input files for soiap are prepared in this directory.


#### Job file


The name of the job file must match the value of `jobfile` in `cryspy.in`.
The example of job file (here, `job_cryspy`) is shown below.

``` zsh
#!/bin/sh

# ---------- soiap
EXEPATH=/path/to/soiap
$EXEPATH/soiap soiap.in 2>&1 > soiap.out

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

Change `/path/to/soiap` into right path suitable for your environment.
You can specify the input (`soiap.in`) and output (`soiap.out`) file names,
but they must match the values of `soiap_infile` and `soiap_outfile` in `cryspy.in`.
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


#### Input for soiap

Input files based on the number of stages (`nstage` in `cryspy.in`) are required.
Name the input file(s) with a suffix `_x`.
Here `x` means the stage number.

We are using `nstage = 1`, so we need only `soiap.in_1`.


`soiap.in_1` is listed below.

``` fortran
crystal initial.cif ! CIF file for the initial structure
symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize

md_mode_cell 3 ! cell-relaxation method
               ! 0: FIRE, 2: quenched MD, or 3: RFC5
number_max_relax_cell 100 ! max. number of the cell relaxation
number_max_relax 1 ! max. number of the atom relaxation
max_displacement 0.1 ! max. displacement of atoms in Bohr

external_stress_v 0.0 0.0 0.0 ! external pressure in GPa

th_force 5d-5 ! convergence threshold for the force in Hartree a.u.
th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u.

force_field 1 ! force field
              ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2,
              ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or
              ! 6: Lennard-Jones
```
The input structure file is specified at the first line.
Use the same name as the value of `soiap_cif` in `cryspy.in`.


## Running CrySPY

Go to [Running CrySPY]({{< relref "../random/#running-cryspy" >}})
