---
title: "External program"
weight: 90
---

Available from CrySPY 0.11.0.

If you use an external program not supported by CrySPY, the optimized energy and structure data can be loaded semi-manually in CrySPY.
You have to prepare two files, `ext_opt_struc_data.pkl` and `ext_energy_data.pkl`.




## Assumption

Here, we assume the following conditions:

- (version 0.10.3 or earlier) CrySPY main script: `~/CrySPY_root/CrySPY-0.11.0/cryspy.py`

(`calc_in` directory is not required.)

## Input files
Move to your working directory, and copy input example files.

- version 1.0.0 or later
  - Copy from CrySPY utility
- version 0.10.3 or earlier
  - `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/ext_Si8_RS .`

``` zsh
cd ext_Si8_RS
tree
```
``` zsh
.
└── cryspy.in
```


### cryspy.in
`cryspy.in` is the input file of CrySPY.

```
[basic]
algo = RS
calc_code = ext
tot_struc = 5

[structure]
natot = 8
atype = Si
nat = 8

[option]
```

If `calc_code == ext`, `nstage`, `njob`, `jobcmd`, and `jobfile` are ignored.






## Running CrySPY

This mode is different from the normal use of CrySPY.
Go to [Load external data]({{< relref "./ext_load_data" >}}).
