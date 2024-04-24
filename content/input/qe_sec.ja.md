---
title: "[QE] section"
weight: 50
---

[QE] section is required only if you use QE (`calc_code = QE`)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `kppvol` | int [int ...] |  | Grid density per Å**(-3) of reciprocal cell in each stage |
| `qe_infile` | str |  | File name of QE input file. |
| `qe_outfile` | str |  | File name of QE output file. |
| `pv_term` | bool | `False` | If true, read enthalpy instead of total energy. |

## kppvol
- [Input file > Kpoint]({{< ref "input/kpoint" >}})

## pv_term
- [Features > Enthalpy > QE]({{< ref "Features/enthalpy.md#qe" >}})
