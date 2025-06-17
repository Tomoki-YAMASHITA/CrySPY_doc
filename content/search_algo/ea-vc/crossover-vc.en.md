---
title: "Crossover (vc)"
weight: 100
---

The variable-composition crossover is almost the same as the [fixed-composition version]({{< ref "search_algo/ea/crossover" >}}), but it differs in that the adjustment of the number of atoms is minimized.

In [step 6 of the fixed-composition crossover]({{< ref "search_algo/ea/crossover#6-select-the-offspring-with-more-atoms" >}}), the difference in the number of atoms in each atom type is calculated directly.
In contrast, in crossover (vc), the difference is calculated based on the allowed range defined by `ll_nat` and `ul_nat`.
For example:
``` python
ll_nat = [4, 4, 4]
ul_nat = [8, 8, 8]
offspring_nat = [2, 6, 12]
nat_diff = [-2, 0, 4]
```

If this difference in the number of atoms (`nat_diff` in the example above) exceeds the allowed tolerance (`nat_diff_tole`), the operation is retried.
Otherwise, the number of atoms is adjusted to fall within the range defined by `ll_nat` and `ul_nat`.