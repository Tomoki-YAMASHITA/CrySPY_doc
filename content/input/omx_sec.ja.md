---
title: "[OMX] section"
weight: 60
---

[OMX] section is required only if you use OpenMX (`calc_code = OMX`)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `kppvol` | int [int ...] |  | Grid density per Å**(-3) of reciprocal cell in each stage |
| `OMX_infile` | str |  | File name of OpenMX input file. |
| `OMX_outfile` | str |  | File name of OpenMX output file. |
| `ValenceElectrons` | str float float [str float float ...] |  | The number of initial charges for up and down spin states. |

## kppvol
- [Input file > Kpoint]({{< ref "input/kpoint" >}})

## ValenceElectrons
e.g. in NaCl: `ValenceElectrons = Na 4.5 4.5 Cl 3.5 3.5`.


