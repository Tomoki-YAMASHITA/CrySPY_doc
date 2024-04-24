---
title: "LAQA"
weight: 80
---

## Score {{< math >}}$ L ${{< /math >}}

```math { align="center" }
$$ L = -E + w_F \frac{F^2}{2\Delta F} + w_S S.   $$
```

| Symbol | Note |
| ---- | ----- |
| {{< math >}}$$ E $${{< /math >}} | Energy (eV/atom) |
| {{< math >}}$$ w_F $${{< /math >}} | Weight of the force term. Default: {{< math >}}$ w_F = 0.1${{< /math >}} |
| {{< math >}}$$ F $${{< /math >}} | Averaged norm of the atomic force (eV/Å) |
| {{< math >}}$$ \Delta F $${{< /math >}} | Absolute difference of {{< math >}}$ F ${{< /math >}} from the previous step. {{< math >}}$ \Delta F = 1${{< /math >}} for the first step.  {{< math >}}$ \Delta F = 10^{-6}${{< /math >}} if {{< math >}}$ \Delta F \le 10^{-6} ${{< /math >}}.|
| {{< math >}}$$ w_S $${{< /math >}} | Weight of the stress term. Default: {{< math >}}$ w_S = 10.0${{< /math >}} |
| {{< math >}}$$ S $${{< /math >}} |  Average of the absolute values of the components of the stress tensor (eV/Å^3).|



## Reference
* K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda, npj Comput. Mater. **4**, 32 (2018).
    - https://www.nature.com/articles/s41524-018-0090-y

* T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. **2**, 84 (2022).
    - https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335