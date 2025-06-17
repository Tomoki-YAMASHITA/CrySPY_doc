---
title: "インタラクティブモード (Jupyter Notebook)"
weight: 120
---

2025年3月6日

{{% notice info %}}
動作環境:  
- CrySPY 1.4.0以上
- [Jupyter](https://jupyter.org)<i class="fas fa-external-link-alt"></i>
- ASE対応の構造最適化計算ソフト（汎用機械学習ポテンシャルなど）
- [nglview](https://github.com/nglviewer/nglview)<i class="fas fa-external-link-alt"></i> (optional)
{{% /notice %}}

## 準備
CrySPYをインストールすれば[ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i>は自動的にインストールされている．
ワークステーションやローカルPCで[Jupyter](https://jupyter.org)<i class="fas fa-external-link-alt"></i>を使えるようにしておく．
このチュートリアルでは，構造最適化に[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html)<i class="fas fa-external-link-alt"></i>を用いる．このEMTポテンシャルの精度は悪く，デモ用のものなので注意．

exampleのノートブックには汎用機械学習ポテンシャルの[CHGNet](https://chgnet.lbl.gov)<i class="fas fa-external-link-alt"></i>を使用するコードも書いてあるので，CHGNetを試したい場合は事前にpipでインストールしておく．


## 入力ファイル
どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピー
してきても良い．

- [CrySPY_utility/examples/interactive](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/interactive)からダウンロード
- インストールしておいたCrySPY utilityからコピーする

インタラクティブモードでも，`cryspy.in`を入力ファイルとして使用する．
インタラクティブモードでは`calc_in`ディレクトリは使用しない．
`input_examples`ディレクトリの中に，いくつかの入力ファイル例が入っているので参考にしてほしい．

ここではEA-vcを用いた下記の`cryspy.in`を使用する．EA-vcについてはEA-vcのチュートリアルを見ること．
``` python
[basic]
algo = EA-vc
calc_code = ASE
nstage = 1
njob = 10
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu Au
ll_nat = 0 0
ul_nat = 8 8

[ASE]
ase_python = ase_in.py

[EA]
n_pop = 20
n_crsov = 5
n_perm = 2
n_strain = 2
n_rand = 2
n_add = 3
n_elim = 3
n_subs = 3
target = random
n_elite = 2
n_fittest = 10
slct_func = TNM
t_size = 2
maxgen_ea = 5
end_point = 0.0 0.0

[option]
```

## ノートブック
`cryspy_interactive.ipynb`を開いて，上から実行していく．

### Check current working directory
最初のセルはファイルやcryspy.inの中身を確認しているだけ．

``` python
!pwd
print()
!ls
print()
!cat cryspy.in
```

### Import
コメントアウトされているものは今回は無視して，CrySPYのインタラクティブモードで核となるライブラリをインポートするセルを実行する．
``` python
# ---------- import
from cryspy.interactive import action
```

### Initialize CrySPY
このセルは通常の初回実行に対応している．`cryspy.in`を読み込んで初期構造が生成される．
``` python
# ---------- initial structure generation
action.initialize()
```

### Set calculator
このセルでASEのcalculatorをセットする．ここではASEのEMTを用いる．

``` python
# ---------- EMT in ASE
from ase.calculators.emt import EMT
calculator = EMT()

# ---------- CHGNet
#from chgnet.model import CHGNetCalculator
#calculator = CHGNetCalculator()
```

### Restart CrySPY
このセルを実行すると，先ほど生成した初期構造の最適化が始まる．
インタラクティブモードでは一つ一つ順番に構造最適化計算を行う．その際に進捗バーも表示される．
``` python
# ---------- structure optimization
action.restart(
    njob=20,    # njob=0: njob in cryspy.in will be used
    calculator=calculator,
    optimizer='BFGS',    # 'FIRE', 'BFGS' or 'LBFGS'
    symmetry=True,       # default: True
    fmax=0.01,           # default: 0.01 eV/Å
    steps=2000,          # default: 2000
)
```

- njob: 一度の実行で最適化計算を行う構造数．0の場合は`cryspy.in`に書いてある値が使用される．
- calculator: 先に設定したcalculatorを代入
- optimizer: `FIRE`, `BFGS`, `LBFGS`から選択．文字列で指定する．
- symmetry: Trueなら対称性を維持した構造最適化を行う
- fmax: 収束判定に使われる原子に働く力の最大値（eV/Å）
- steps: 最大最適化ステップ数

`njob`の値を小さくしている場合は，何度かこのセルを実行して，全ての初期構造の最適化を終了させる．
EA-vcを用いている場合，すべて終わると以下のように表示される．

``` text
EA is ready
```


もう一度このセルを実行すると世代交代が行われるので，次世代の構造生成が終了したら，あとは同様にこのセルの実行を繰り返す．

### Show results
このセルを実行すると，`cryspy_rslt_energy_asc`などのファイルを表示できる．

``` bash
# ---------- show results
#!cat ./data/cryspy_rslt    # Order of structure optimization completion
!cat ./data/cryspy_rslt_energy_asc    # show energy ascending order
#!sed -n 2,4p ./data/cryspy_rslt    # show i--jth lines
#!tail -n 5 ./data/cryspy_rslt    # show last 5 lines
```

### Structure visualization
初期構造や最適化済みの構造をインタラクティブに可視化できる．
``` python
from ase.visualize import view
atoms = action.get_atoms('opt', cid=0)    # 'init' or 'opt'
view(atoms, viewer='ngl')    # viewer = 'ngl', 'ase', or 'x3d'
```
`action.get_atoms('opt', cid=0)`のところで`opt`を`init`に変えると，初期構造が確認できる．
`cid`で構造IDを指定する．
ASEの機能を使用しているので`viewer`には`ngl`, `ase`, `x3d`が利用できる．
`ngl`を使うには[nglview](https://github.com/nglviewer/nglview)<i class="fas fa-external-link-alt"></i>のインストールが必要なのでpipでインストールしておく．

![fig_struc_visu](/images/interactive/struc_visu.png?width=40vw)


### Energy plot for RS, EA
ランダムサーチ（RS）や進化的アルゴリズム（EA）の場合，下記画像のようなエネルギーグラフを表示できる．
EA-vcの場合は原子数が異なるので単純にエネルギーを比較できないので，後述のconvex hullプロットを使う．

``` python
fig, ax = action.plot_E(
              title=None,
              ymax=2.0,
              ymin=-0.5,
              markersize=12,
              marker_edge_width=1.0,
              marker_edge_color='black',
              alpha=1.0,
          )
```

![fig_eplot](/images/interactive/energy_plot_rs_ea.png?width=40vw)


### Convex hull plot for EA-vc
#### Interactive plot using Plotly
EA-vcの場合は[Plotly](https://plotly.com/python/)<i class="fas fa-external-link-alt"></i>を用いたconvex hullのインタラクティブプロットが利用できる．
CrySPYをインストールすればPlotlyは自動的にインストールされている．
このconvex hullプロットはpymatgenの機能を用いている．

``` python
action.interactive_plot_convex_hull(cgen=None, show_unstable=0.2, ternary_style='2d')
```
- cgen: どの世代までプロットするかを指定．Noneであれば最新の世代までプロットされる．
- show_unstable: 描画するhull distanceの最大値．
- ternary_style
  - 2元系: ternary_style = '2d'
  - 3元系: ternary_style = '2d', '3d'
  - 4元系: ternary_style = '3d'


![fig_convplot](/images/interactive/conv_hull_plotly.png?width=40vw)


2元系ではなく，3元系や4元系で計算しているときは下記のようなインタラクティブプロットが得られる．
左から順に，3元系（ternary_style = '2d'），3元系（ternary_style = '3d'），4元系（ternary_style = '3d'）のプロット

![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly2d_ternary.png?classes=inline&width=20vw)
![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly3d_ternary.png?classes=inline&width=20vw)
![fig_conv_plotly3d_ternary](/images/interactive/conv_hull_plotly3d_quaternary.png?classes=inline&width=20vw)


#### Binary system using matplotlib
このセルを実行すると，matplotlibを用いて2元系のconvex hullをプロットできる．
``` python
fig, ax = action.plot_convex_hull_binary(
              cgen=None,
              show_max=0.2,
              label_stable=True,
              vmax=0.2,
              bottom_margin=0.02,
          )
fig    # to show plot in jupyter
```

- cgen: どの世代までプロットするかを指定．Noneであれば最新の世代までプロットされる．
- show_max: 描画するhull distanceの最大値．
- label_stable: 安定相のラベルを表示するかどうか．
- vmax: カラーバーのhull distaceの最大値．
- bottom_margin: y軸の下部のマージン．

![fig_convplotmat](/images/interactive/conv_hull_matplot.png?width=40vw)


### Ternary system using matplotlib
もし3元系の探索をしている場合は，このセルを実行することでmatplotlibを使ったconvex hullのプロットができる．
``` python
fig, ax = action.plot_convex_hull_ternary(
              cgen=None,
              show_max=0.2,
              label_stable=True,
              vmax=0.2,
          )
fig    # to show plot in jupyter
```
- cgen: どの世代までプロットするかを指定．Noneであれば最新の世代までプロットされる．
- show_max: 描画するhull distanceの最大値．
- label_stable: 安定相のラベルを表示するかどうか．
- vmax: カラーバーのhull distaceの最大値．

例えば以下のようなプロットが得られる．

![fig_convplotmat](/images/interactive/conv_hull_matplot_ternary.png?width=40vw)