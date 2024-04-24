---
title: "Load external data"
weight: 900
---

You need only `cryspy.in`.

``` zsh
$ ls
cryspy.in
```

Then, run CyrSPY.

``` zsh
cryspy &
```

At the first run, CrySPY goes into structure generation mode as usual.
CrySPY stops after 5 structure generation.

If it worked properly, `log_cryspy` would look like this.
``` txt
2022/07/14 19:41:41
CrySPY 1.0.0
Start cryspy.py

Read input file, cryspy.in
Write input data in cryspy.out
Save input data in cryspy.stat

# --------- Generate initial structures
# ------ mindist
Si - Si 1.11
Structure ID      0 was generated. Space group:  88 --> 141 I4_1/amd
Structure ID      1 was generated. Space group: 101 --> 101 P4_2cm
Structure ID      2 was generated. Space group: 204 --> 229 Im-3m
Structure ID      3 was generated. Space group: 199 --> 199 I2_13
Structure ID      4 was generated. Space group:  12 -->  12 C2/m
```

Unlike normal use, a directory named `ext` was created.
Only the `stat_job` file exists in `ext/`.

``` zsh
$ cat ext/stat_job
out
```

If you run cryspy when "out" is written in the `stat_job` file, queueing structure files (cif format) are exported in `ext/queue`.


``` zsh
cryspy &
```

``` zsh
$ ls ext/queue
0.cif  1.cif  2.cif  3.cif  4.cif
```

The number in the file name is structure ID.
The fist line of `stat_job` was automatically changed.

``` zsh
$ cat ext/stat_job
submitted
```

Perform structure optimization and energy evaluation in an external program using the output cif files.
Once that calculation is done, prepare the optimized structure and energy data in the pickle data format, `ext_opt_struc_data.pkl` and `ext_energy_data.pkl`.


The data format of `ext_opt_struc_data.pkl` is the same as `init_struc_data.pkl` and `opt_struc_data.pkl`, see [Data format/Initial and optimized structure data]({{< ref "/data_format/common_data/init_opt_struc_data.md" >}}).


The data format of `ext_energy_data.pkl` is similar to `ext_opt_struc_data.pkl`. Just change the value from the structure data into the energy.
An example of the energy data (dict type) is shown below.
- key: structure ID
- value: energy

``` txt
{0: -0.7139331910805997,
 1: -0.5643404689832622,
 2: -0.5832404287259171,
 3: -0.535037327286169,
 4: -0.6316663459586607}
 ```


The `ext/calc_data` directory should be automatically generated, so put the two pickle files here.

``` zsh
$ ls ext/calc_data
ext_energy_data.pkl  ext_opt_struc_data.pkl
```

When ready, replace the first line of the `stat_job` file with "done" and run CrySPY.

``` zsh
$ emacs /ext/stat_job
$ cat /ext/stat_job
done
```

``` zsh
cryspy &
```

CrySPY collects the result data.
