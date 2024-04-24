---
title: "[basic] section"
weight: 20
---

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `algo` | `RS`, `EA`, `BO`, `LAQA` |   | Algorithm |
| `calc_code` | `VASP`, `QE`, `OMX`, `soiap`, `LAMMPS` |  | Caluculation code for structure optimization |
| `tot_struc` | int |   | The total number of structures |
| `nstage`    | int |   | The number of stages |
| `njob`      | int |   | The number of jobs running at the same time. |
| `jobcmd`    | str |   | Command to submit jobs such as qsub and sbatch. |
| `jobfile`   | str |   | File name of the job file. |
