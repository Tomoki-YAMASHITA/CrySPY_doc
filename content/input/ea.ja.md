---
title: "[EA] section"
weight: 90
---

2025年6月15日　更新

- [EA] section is required only if you use EA or EA-vc
- See also [CrySPY > Search algorithms > EA]({{< ref "search_algo/ea" >}})

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `n_pop`   | int |  | Population (see also [Population size]({{< ref "search_algo/ea#population-size" >}}))|
| `n_crsov` | int |  | Number of offspring created by [crossover]({{< ref "search_algo/ea/crossover" >}}) |
| `n_perm`  | int |  | Number of offspring created by [permutation]({{< ref "search_algo/ea/permutation" >}}) |
| `n_strain`  | int |  | Number of offspring created by [strain]({{< ref "search_algo/ea/strain" >}}) |
| `n_rand`  | int |  | Number of structures created randomly |
| `n_elite` | int |  | Number of elite individuals (see also [Natural selection]({{< ref "search_algo/ea#natural-selection" >}})) |
| `fit_reverse` | bool | `False`  | If `False`, minimal search (see also [Evaluate fitness]({{< ref "search_algo/ea#evaluate-fitness" >}})) |
| `n_fittest` | int | 0  | Number of individuals that remain [natural selection]({{< ref "search_algo/ea#natural-selection" >}}). If set to 0, all individuals are retained. |
| `slct_func` | `TNM`, `RLT` |  | Function to [select parents]({{< ref "search_algo/ea#select-parents" >}}) |
| `t_size` | int  | 3 | Tournament size. Used only used `slct_func = TNM`. (see also [Tournament selection]({{< ref "search_algo/ea/tournament" >}})) |
| `a_rlt` | float | 10.0 | Parameter for linear scaling. Used only with `slct_func = RLT`.  (see also [Roulette selection]({{< ref "search_algo/ea/roulette" >}})) |
| `b_rlt` | float | 1.0 | Parameter for linear scaling. Used only with `slct_func = RLT`.  (see also [Roulette selection]({{< ref "search_algo/ea/roulette" >}})) |
| `crs_lat` | `equal`, `random` | `random` | How to mix lattice vectors (see also [crossover > 5. Swap the sliced halves]({{< ref "search_algo/ea/crossover#5-swap-the-sliced-halves" >}})) |
| `nat_diff_tole` | int | 4  | Tolerance for difference in the number of atoms in [crossover]({{< ref "search_algo/ea/crossover" >}}). (see also [crossover > 6. Select the offspring with more atoms]({{< ref "search_algo/ea/crossover#6-select-the-offspring-with-more-atoms" >}}))|
| `ntimes` | int  | 1 | Number of times in [permutation]({{< ref "search_algo/ea/permutation" >}}). |
| `sigma_st` | float  | 0.5 | Standard deviation for [strain]({{< ref "search_algo/ea/strain" >}}). |
| `maxcnt_ea` | int | 50 | Maximum number of trials in EA. |
| `maxgen_ea` | int | 0 | Maximum generation. If set to 0, no upper limit is applied. |
| `emax_ea` | float | `None` | Energy upper limit (eV/atom) for [natural selection]({{< ref "search_algo/ea#natural-selection" >}}). |
| `emin_ea` | float | `None` | Energy lower limit (eV/atom) for [natural selection]({{< ref "search_algo/ea#natural-selection" >}}). |

-----------

- EA-vc requires the following additional variables on top of the standard EA.
- Note that in EA-vc, `emax_ea` and `emin_ea` are used not in natural selection but when computing the [convex hull]({{< ref "search_algo/ea-vc#convex-hull" >}}).
- See also [CrySPY > Search algorithms > EA-vc]({{< ref "search_algo/ea-vc" >}})
- See also [CrySPY > Tutorial > EA-vc > Analysis and visualization]({{< ref "tutorial/ea-vc/analysis_visualization" >}}) for the convex hull plot.

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `n_add`   | int |  | Number of offspring created by addition.  |
| `n_elim` | int |  | Number of offspring created by elimination. |
| `n_subs`  | int |  | Number of offspring created by substitution. |
| `target`  | str | `random` | Target. Only `random` for now.  |
| `end_point`  | (float, ..., float) |  | Energy of end points for formation energy.  |
| `emax_ea` | float | `None` | Energy upper limit (eV/atom) for computing the [convex hull]({{< ref "search_algo/ea-vc#convex-hull" >}}). |
| `emin_ea` | float | `None` | Energy lower limit (eV/atom) for computing the [convex hull]({{< ref "search_algo/ea-vc#convex-hull" >}}). |
| `show_max` | float | 0.2 | When plotting the convex hull, the maximum value of the y-axis (for binary systems) or the maximum hull distance (for ternary systems) is set by show_max. |
| `lable_stable` | bool | `True` | Whether to show stable compositions when plotting the convex hull. |
| `vmax` | float | 0.2 | Maximum value of the colorbar representing hull distance. |
| `bottom_margin` | float | 0.02 | Bottom margin of the y-axis for binary convex hull plot. |
| `fig_format` | str | `svg` | Figure format for convex hull plot: `svg`, `png`, or `pdf`. |