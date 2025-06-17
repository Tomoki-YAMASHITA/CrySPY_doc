---
title: "Strain"
weight: 300
---

## Overview
Strain is an evolutionary operation that generates a new structure (offspring) by applying a small random distortion to the lattice of a parent structure.
It helps to explore nearby regions of the configuration space while preserving atomic connectivity and composition.
This operator is useful for fine-tuning structural candidates and escaping local minima.


## How it works

The lattice vectors are {{< math >}}$ \mathbf{a} ${{< /math >}} transformed to {{< math >}}$ \mathbf{a}' ${{< /math >}} by applying a strain matrix, as follows:

{{< math >}}$$
\mathbf{a}' = \begin{pmatrix}
1 + \eta_1 & \frac{1}{2} \eta_6 & \frac{1}{2} \eta_5 \\
\frac{1}{2} \eta_6 & 1 + \eta_2 & \frac{1}{2} \eta_4 \\
\frac{1}{2} \eta_5 & \frac{1}{2} \eta_4 & 1 + \eta_3
\end{pmatrix} \mathbf{a}.
$${{< /math >}}

Here,  {{< math >}}$ \eta_i ${{< /math >}} are given by a Gaussinan distribution {{< math >}}$ \mathcal{N}\left( 0, \ \sigma_{\mathrm{st}}^2 \right) ${{< /math >}}.
{{< math >}}$ \sigma_{\mathrm{st}} ${{< /math >}} is specified by the input parameter `sigma_st` (by default, `sigma_st` = 0.5).
As shown in the figure below, the lattice is deformed and then rescaled to restore the original volume.
Finally, the minimum interatomic distance constraint is checked.

![fig_EA_strain](/images/EA/EA_strain.svg?width=20vw)
