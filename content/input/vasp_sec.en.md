---
title: "[VASP] section"
weight: 40
---

2024 April 22

[VASP] section is required only if you use VASP (`calc_code = VASP`)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `kppvol` | int [int ...] |  | Grid density per Å**(-3) of reciprocal cell in each stage. |
| `force_gamma` | bool | `False` | If true, force gamma-centered mesh. |

## kppvol and force gamma
- [Input file > Kpoint]({{< ref "input/kpoint" >}})