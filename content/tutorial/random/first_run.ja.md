---
title: "Firsrt run"
weight: 130
---

2023 July 10, update

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
[2023-07-10 18:40:54,389][cryspy_init][INFO] 


Start CrySPY 1.2.0


[2023-07-10 18:40:54,389][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2023-07-10 18:40:54,390][read_input][INFO] Save input data in cryspy.stat
[2023-07-10 18:40:54,391][cryspy_init][INFO] # ---------- Initial structure generation
[2023-07-10 18:40:54,391][cryspy_init][INFO] Number of MPI processes: 1
[2023-07-10 18:40:54,391][gen_init_struc][INFO] # ------ mindist
[2023-07-10 18:40:54,395][struc_util][INFO] Cu - Cu: 1.32
[2023-07-10 18:40:54,395][gen_init_struc][INFO] # ------ generate structures
[2023-07-10 18:40:54,481][gen_pyxtal][INFO] Structure ID      0 was generated. Space group:   1 -->   1 P1
[2023-07-10 18:40:54,493][gen_pyxtal][INFO] Structure ID      1 was generated. Space group:  28 -->  28 Pma2
[2023-07-10 18:40:54,498][gen_pyxtal][INFO] Structure ID      2 was generated. Space group:  29 -->  29 Pca2_1
[2023-07-10 18:40:54,704][gen_pyxtal][INFO] Structure ID      3 was generated. Space group: 137 --> 137 P4_2/nmc
[2023-07-10 18:40:54,725][gen_pyxtal][INFO] Structure ID      4 was generated. Space group: 212 --> 214 I4_132
[2023-07-10 18:40:54,800][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.408367
cryspy  4.35s user 1.04s system 145% cpu 3.697 total
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
...
(omit)
...
[status]
id_queueing = 0 1 2 3 4
```
Structure ID 0 -- 4 are queueing because we just generated structures, and have not submitted yet.

{{% notice tip %}}
Check the initial structures, if the distance between atoms is too close, you should set the `mindist` in `cryspy.in`.
{{% /notice %}}