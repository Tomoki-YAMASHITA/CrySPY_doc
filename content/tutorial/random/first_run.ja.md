---
title: "Firsrt run"
weight: 130
---

2025 March 6, updated

Make sure you have the following in your working directory.

- calc_in/
- (cryspy)
- cryspy.in


``` zsh
$ ls
calc_in/  cryspy.in
```


Then, run CyrSPY!
``` zsh
cryspy
```

If you use old version (0.10.3 or earlier):
``` zsh
bash ./cryspy
```

At the first run, CrySPY goes into structure generation mode.
CrySPY stops after 5 structure generation.

If it worked properly, the following output appears on the screen:
``` text
[2025-03-06 18:52:21,495][cryspy_init][INFO] 


Start CrySPY 1.4.0


[2025-03-06 18:52:21,495][cryspy_init][INFO] # ---------- Library version info
[2025-03-06 18:52:21,495][cryspy_init][INFO] pandas version: 2.2.2
[2025-03-06 18:52:21,495][cryspy_init][INFO] pymatgen version: 2025.1.24
[2025-03-06 18:52:21,495][cryspy_init][INFO] pyxtal version: 1.0.6
[2025-03-06 18:52:21,495][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2025-03-06 18:52:21,496][write_input][INFO] [basic]
[2025-03-06 18:52:21,496][write_input][INFO] algo = RS
[2025-03-06 18:52:21,496][write_input][INFO] calc_code = ASE
[2025-03-06 18:52:21,496][write_input][INFO] tot_struc = 5
[2025-03-06 18:52:21,496][write_input][INFO] nstage = 1
[2025-03-06 18:52:21,496][write_input][INFO] njob = 2
[2025-03-06 18:52:21,496][write_input][INFO] jobcmd = zsh
[2025-03-06 18:52:21,496][write_input][INFO] jobfile = job_cryspy
...
(omitted)
...
[2025-03-06 18:52:21,497][rs_gen][INFO] # ---------- Initial structure generation
[2025-03-06 18:52:21,497][rs_gen][INFO] # ------ mindist
[2025-03-06 18:52:21,498][struc_util][INFO] Cu - Cu: 1.32
[2025-03-06 18:52:21,498][rs_gen][INFO] # ------ generate structures
[2025-03-06 18:52:21,519][gen_pyxtal][INFO] Structure ID      0: (8,) Space group:  31 -->  31 Pmn2_1
[2025-03-06 18:52:21,525][gen_pyxtal][INFO] Structure ID      1: (8,) Space group: 198 --> 198 P2_13
[2025-03-06 18:52:21,554][gen_pyxtal][INFO] Structure ID      2: (8,) Space group:   4 -->   4 P2_1
[2025-03-06 18:52:21,580][gen_pyxtal][INFO] Structure ID      3: (8,) Space group: 193 --> 191 P6/mmm
[2025-03-06 18:52:21,581][gen_pyxtal][WARNING] Compoisition [8] not compatible with symmetry 172:     spg = 172 retry.
[2025-03-06 18:52:21,625][gen_pyxtal][INFO] Structure ID      4: (8,) Space group:  64 -->  64 Cmce
[2025-03-06 18:52:22,013][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.516183
```


Several output files are also generated.

- (`cryspy.out`): Short log. only version 0.10.3 or earlier.
- `cryspy.stat`: Status file.
- `data/init_POSCARS`: Initial struture file in POSCAR format.
You can open this file using [VESTA](https://jp-minerals.org/vesta/en/)<i class="fas fa-external-link-alt"></i>
- `data/pkl_data`: Directory to save pickled data.
- `log_cryspy`: log.
- `err_cryspy`: error and warning.


Let's take a look at `cryspy.stat` file.

``` txt
[status]
id_queueing = 0 1 2 3 4
```
Structure ID 0 -- 4 are queueing because we just generated structures, and have not submitted yet.

{{% notice tip %}}
Check the initial structures, if the distance between atoms is too close, you should set the `mindist` in `cryspy.in`.
{{% /notice %}}