---
title: "Restriction on interatomic distances"
weight: 60
---

2024 April 23, updated

You can restrict the interatomic distance in structure generation.
Here is an example of [structure] section in the input file to limit minimum interatomic distance for a A-B binary system.

``` zsh
[structure]
natot = 8
atype = A B
nat = 4 4
mindist_1 = 2.0 1.8
mindist_2 = 1.8 1.5
```
This means that minimum interatomic distances of A-A, A-B, and B-B are limited to 2.0, 1.8, and 1.5 Å, respectively.
Structures with interatomic distances shorter than these values are automatically eliminated.

For ternary systems, you will need `mindist_1`, `mindist_2`, and `mindist_3`.
Mindist matrix must be a symmetric matrix.

## Example: Na8Cl8

### Without mindist

cryspy.in
``` zsh
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

[VASP]
kppvol = 40 80

[option]
```

log_cryspy
``` bash
[2024-04-23 13:46:28,598][cryspy_init][INFO] 


Start CrySPY 1.2.3


[2024-04-23 13:46:28,598][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2024-04-23 13:46:28,598][read_input][INFO] Save input data in cryspy.stat
[2024-04-23 13:46:28,599][gen_init_struc][INFO] # ------ mindist
[2024-04-23 13:46:28,601][struc_util][INFO] Na - Na: 1.66
[2024-04-23 13:46:28,602][struc_util][INFO] Na - Cl: 1.3399999999999999
[2024-04-23 13:46:28,602][struc_util][INFO] Cl - Cl: 1.02
...
```

![fig_mindist](/images/mindist/mindist.png?width=20vw)

In the default settings of PyXtal, atoms can sometimes be too close to each other, as shown in the figure above,
so it is recommended to set the mindist parameter.
That would help simplify DFT calculations.

## With mindist

cryspy.in
``` bash
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

log_cryspy
``` bash
[2024-04-23 14:06:21,955][cryspy_init][INFO] 


Start CrySPY 1.2.3


[2024-04-23 14:06:21,955][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2024-04-23 14:06:21,956][read_input][INFO] Save input data in cryspy.stat
[2024-04-23 14:06:21,956][gen_init_struc][INFO] # ------ mindist
[2024-04-23 14:06:21,956][struc_util][INFO] Na - Na: 2.5
[2024-04-23 14:06:21,956][struc_util][INFO] Na - Cl: 1.5
[2024-04-23 14:06:21,956][struc_util][INFO] Cl - Cl: 2.5
```

In cases like ionic crystals, it is advisable to set up the configuration in such a way that cations and anions are kept apart from each other.