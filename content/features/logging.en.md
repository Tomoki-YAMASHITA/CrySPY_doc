---
title: "Logging"
weight: 8
---

2023 July 10

CrySPY 1.2.0 adopts logging library of Python.
CrySPY logs are output to both the screen and files(`log_cryspy` and `err_cryspy`).

- log --> screen and `log_cryspy`
- error and warning --> screen and `err_cryspy`

Here is the example:
``` bash
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
```

If you want to run cryspy as a background job, or if you use the auto script ([repeat_cryspy]({{< ref "cryspy_utility/scripts/repeat" >}})), and do NOT want it to output to the screen, run cryspy with the `-n` option as follow:
``` bash
cryspy -n
```
