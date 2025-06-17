---
title: "[LAQA] section"
weight: 110
---

[LAQA] section is required only if you use LAQA (`algo = LAQA`)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `nselect_laqa` | int |  | The number of structures to be selected at once.  |
| `wf` | float | 0.1  | Weight of the force term.  |
| `ws` | float | 10.0  | Weight of the stress term.  |

{{% notice info %}}
See also [Search algorithms > LAQA]({{< ref "search_algo/laqa" >}})
{{% /notice %}}

{{% notice info %}}
If algo = LAQA, the followings are automatically set in the [option] section.
- force_step_flag = True
- stress_step_flag = True

Force and stress data are collected step by step.
Energy and structure data are NOT. They are collected for each selection.
In other words, in this case, energy and structure data are saved once every 10 steps.
If you want to collect energy and structure data step by step, manually set up as follows:
```
[option]
energy_step_flag = True
struc_step_flag = True
```
{{% /notice %}}