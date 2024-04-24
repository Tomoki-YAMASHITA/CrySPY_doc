---
title: "Backup"
weight: 10
---

CrySPY has a simple backup function.
The following files are backed up:
- cryspy.in
- cryspy.stat
- log_cryspy
- err_cryspy
- calc_in/*
- data/*
- ext/*

work/* are NOT included.

- (v1.1.0 or later) above files are copied to a directory named by date and time in "backup" directory. Previous backups are NOT automatically deleted.
- (v1.0.0) only one generation is backed up, and previous backups will be deleted.


## Auto backup
The timing of the automatic backup is as follows:
- before going to next selection (BO, LAQA) or next generation (EA)
- append structures

## Manual backup
To manually back up, run cryspy with `-b` or `--backup` option as:
```
cryspy -b
```
This command only performs backups, unlike the normal execution.