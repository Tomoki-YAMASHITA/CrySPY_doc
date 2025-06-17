---
title: "Clean"
weight: 20
---

2024 Dec. 22 updated


CrySPY has a simple clean (just move files) function.
It is useful when you want to start over from the beginning.
The following files are cleaned up:
- cryspy.stat
- log_cryspy
- err_cryspy
- lock_cryspy
- data/*
- work/*
- tmp_gen_struc/*

To clean up, run cryspy with `-c` or `--clean` option as:

``` zsh
$ ls
calc_in  cryspy.in  cryspy.stat  data  err_cryspy  log_cryspy
```

``` zsh
$ cryspy -c
Are you sure you want to clean the data? 'yes' or 'no' [y/n]: y
```

``` zsh
$ ls
calc_in  cryspy.in  trash
```

``` zsh
$ ls trash
20230318_100728
```

Files other than `calc_in/*` and `cryspy.in` are moved to trash and grouped into a directory named by date and time.
If you do not need them, you can delete them manually.