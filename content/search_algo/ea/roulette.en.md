---
title: "Roulette selection"
weight: 1100
---

## Overview
Roulette selection is a probabilistic method used to select parent individuals from the candidate parents based on their fitness.
In roulette selection, each individual’s chance of being selected is proportional to its fitness.

## How it works
1. When `fit_reverse` is set to  `False` (default), corresponding to minimization mode where energy is used as fitness, the fitness values of the candidate parents are multiplied by –1.
2. The fitness values {{< math >}}$ f_i ${{< /math >}} are linearly scaled into {{< math >}}$ f'_i ${{< /math >}} using the following equation, where {{< math >}}$ a ${{< /math >}} and {{< math >}}$ b ${{< /math >}} are parameters specified by `a_rlt` and `b_rlt`, respectively (with the condition that {{< math >}}$ a > b ${{< /math >}}).
{{< math >}}$$ f_i' = \frac{a - b}{f_{\mathrm{max}} - f_{\mathrm{min}}} f_i + \frac{b f_{\mathrm{max}} - a f_{\mathrm{min}}}{f_{\mathrm{max}} - f_{\mathrm{min}}} $${{< /math >}}
3. The scaled fitness values {{< math >}}$ f_i’ ${{< /math >}} are converted into selection probabilities using the following equation:
  {{< math >}}$$ p_i = \frac{f_i’}{\sum_k f_k’} $${{< /math >}}
Each probability {{< math >}}$ p_i ${{< /math >}} represents the likelihood of selecting the {{< math >}}$ i ${{< /math >}}-th individual.
4. Parent individuals are then selected one by one according to the probabilities {{< math >}}$ p_i ${{< /math >}} using roulette wheel sampling, until the required number of parents is obtained.

## Advantages
- All individuals have a non-zero chance of being selected  
- Selection pressure can be adjusted by scaling the fitness values

## Notes
- By default, `a_rlt = 10.0` and `b_rlt = 1.0`
- Proper scaling of fitness values is important to ensure meaningful selection pressure.The figure below shows examples of {{< math >}}$ p_i ${{< /math >}} when {{< math >}}$ a ${{< /math >}} is relatively small (left) and relatively large (right).
If {{< math >}}$ a ${{< /math >}} is too small, the selection pressure becomes weak, making it more difficult to favor individuals with higher fitness.



![fig_EA_roulette](/images/EA/EA_roulette.svg?width=20vw)