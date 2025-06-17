---
title: "Interactive mode"
weight: 500
---

2025年3月6日

{{% notice info %}}
動作環境:  
- CrySPY 1.4.0以上
- [Jupyter](https://jupyter.org)<i class="fas fa-external-link-alt"></i>
- ASE対応の構造最適化計算ソフト（汎用機械学習ポテンシャルなど）
- [nglview](https://github.com/nglviewer/nglview)<i class="fas fa-external-link-alt"></i> (optional)
{{% /notice %}}

PCクラスタやスパコンなどの利用に慣れてない人でも使えるように，Jupyter Notebookを用いたインタラクティブモードが利用可能になった．
[ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i>を使った構造最適化計算を想定しているので，ASE対応の汎用機械学習ポテンシャルなどが使える．

詳細な使い方は[チュートリアル > インタラクティブモード（Jupyter Notebook）]({{< ref "tutorial/interactive.md" >}})を見ること．

![fig_struc_visu](/images/interactive/struc_visu.png?classes=inline&width=20vw)
![fig_eplot](/images/interactive/energy_plot_rs_ea.png?classes=inline&width=20vw)
![fig_convplot](/images/interactive/conv_hull_plotly.png?classes=inline&width=20vw)

![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly2d_ternary.png?classes=inline&width=20vw)
![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly3d_ternary.png?classes=inline&width=20vw)
![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly3d_quaternary.png?classes=inline&width=20vw)

![fig_convplotmat](/images/interactive/conv_hull_matplot.png?classes=inline&width=20vw)
![fig_convplotmat](/images/interactive/conv_hull_matplot_ternary.png?classes=inline&width=20vw)