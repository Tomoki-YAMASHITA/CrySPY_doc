---
title: "Check cryspy.in"
weight: 100
---

See [Input file]({{< ref "/input" >}}) in detail.

Let's take a look at `cryspy.in` again.
This may be slightly different depending on `calc_code` you chose.
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


## [basic] section

- `algo`: Algorithm. Set `RS` for Random Search.
- `calc_code`: Structure optimizer. Choose from `VASP`, `QE`, `OMX`, `soiap`, `LAMMPS`
- `tot_struc`: The total number of structures. In this case, 5 random structures are generated at 1st run.
- `nstage`: The number of stages. It's up to you.
- `njob`: The number of jobs running at the same time. In this example, CrySPY sets 2 slots for structure optimization, in other words, optimizes every 2 structures.
- `jobcmd`: Command for jobs. Use `bash`, `zsh`, `qsub`, and so on.
- `jobfile`: File name of the job file.


## [structure] section
- `natot`: The total number of atoms. e.g. for Na8Cl8: `natot = 16`.
- `atype`: Atom type. e.g. for Na8Cl8: `atype = Na Cl`.
- `nat`: The number of each atom. e.g. for Na8Cl8: `nat = 8 8`
