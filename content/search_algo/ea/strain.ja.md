---
title: "Strain"
weight: 300
---
## 概要
歪み（strain）は，親構造の格子に対して小さなランダムな変形を加えることで，新たな構造（子個体）を生成する進化的操作である．
この操作により，原子の接続関係や組成を保持しつつ，構造空間の近傍領域を探索することが可能となる．
構造候補の微調整や，局所的な最小値からの脱出にも有効である．
## 手順
以下の歪み行列を用いて，格子ベクトル{{< math >}}$ \mathbf{a} ${{< /math >}}を変形させる．

{{< math >}}$$
\mathbf{a}' = \begin{pmatrix}
1 + \eta_1 & \frac{1}{2} \eta_6 & \frac{1}{2} \eta_5 \\
\frac{1}{2} \eta_6 & 1 + \eta_2 & \frac{1}{2} \eta_4 \\
\frac{1}{2} \eta_5 & \frac{1}{2} \eta_4 & 1 + \eta_3
\end{pmatrix} \mathbf{a}.
$${{< /math >}}

ここで，{{< math >}}$ \eta_i ${{< /math >}}はガウス分布{{< math >}}$ \mathcal{N}\left( 0, \ \sigma_{\mathrm{st}}^2 \right) ${{< /math >}}から決まる値で，{{< math >}}$ \sigma_{\mathrm{st}} ${{< /math >}}は入力パラメーター`sigma_st`で指定できる（デフォルトは`sigma_st` = 0.5）．
下の図に示すように，格子を変形させた後は，元の体積に戻す．
最後に最小原子間距離の制限をチェックする．

![fig_EA_strain](/images/EA/EA_strain.svg?width=20vw)
