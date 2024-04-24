---
title: "[option] section"
weight: 200
---


| Name               | Value         | Default      | Description                                                                                      |
| ----               | -----         | -------      | -----------                                                                                      |
| `stop_chkpt`       | int           | 0            | CrySPY stops at a specified check point.                                                         |
| `load_struc_flag`  | bool          | `False`      | If True, load initial structures from `./data/pkl_data/init_struc_data.pkl`.                     |
| `stop_next_struc`  | bool          | `False`      | If True, CrySPY does not submit jobs for next structures, but jobs for next stage are submitted. |
| `recalc`           | int [int ...] | (empty list) | Specify structure IDs if you want to recalculate or continue optimization.                       |
| `append_struc_ea`  | bool          | `False`      | If True, append structures by EA.                                                                |
| `energy_step_flag` | bool          | `False`      | If True, save energy_step_data in `./data/pkl_data/energy_step_data.pkl`.                        |
| `struc_step_flag`  | bool          | `False`      | If True, save struc_step_data in `./data/pkl_data/struc_step_data.pkl`.                          |
| `force_step_flag`  | bool          | `False`      | If True, save force_step_data in `./data/pkl_data/force_step_data.pkl`.                          |
| `stress_step_flag` | bool          | `False`      | If True, save stress_step_data in `./data/pkl_data/stress_step_data.pkl`.                        |

