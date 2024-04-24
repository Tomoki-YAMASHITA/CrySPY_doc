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
| {{< math >}}$$ E $${{< /math >}} | エネルギー（eV/atom） |
| {{< math >}}$$ w_F $${{< /math >}} | 力の項の重み. Default: {{< math >}}$ w_F = 0.1${{< /math >}} |
| {{< math >}}$$ F $${{< /math >}} | 原子に働く力の平均ノルム（eV/Å） |
| {{< math >}}$$ \Delta F $${{< /math >}} | 一つ前のステップからの{{< math >}}$ F ${{< /math >}}の差の絶対値．はじめのステップでは {{< math >}}$ \Delta F = 1${{< /math >}}． {{< math >}}$ \Delta F = 10^{-6}${{< /math >}} if {{< math >}}$ \Delta F \le 10^{-6} ${{< /math >}}.|
| {{< math >}}$$ w_S $${{< /math >}} | ストレス項の重み．Default: {{< math >}}$ w_S = 10.0${{< /math >}} |
| {{< math >}}$$ S $${{< /math >}} |  ストレステンソルにおける成分の絶対値平均（eV/Å^3）．|



## Reference
* K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda, npj Comput. Mater. **4**, 32 (2018).
    - https://www.nature.com/articles/s41524-018-0090-y

* T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. **2**, 84 (2022).
    - https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335