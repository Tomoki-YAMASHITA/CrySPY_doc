---
title: "ASE on your local PC"
weight: 8
---

2026年6月16日 更新

[ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i>は様々なコードのインターフェースを提供しているPythonライブラリであり，
[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>というシンプルなEMTの計算も実行できる．CrySPYさえインストールしてあれば，精度はともかく簡単に計算できるので，CrySPYのテストにちょうど良い．

このチュートリアルでは，MacやLinuxなどのOSのローカルPCを用いてCu 8原子の構造探索を試す．

## Assumption

ここでは次のような条件を想定している：

- CrySPY 1.2.0 or later in your local PC
- CrySPY job filename: `job_cryspy`
- ase input filename: `ase_in.py`

## Input files
どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピーしてきても良い．

- Download from [CrySPY_utility/examples/ase_Cu8_RS](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_Cu8_RS)
- Copy from CrySPY utility that you installed


``` zsh
cd ase_Cu8_RS
tree
```

``` zsh
.
├── calc_in
│   ├── ase_in.py_1
│   └── job_cryspy
└── cryspy.in
```


### cryspy.in
`cryspy.in`はCrySPYの入力ファイル．

``` python
[basic]
algo = RS
calc_code = ASE
tot_struc = 5
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu
nat = 8

[ASE]
ase_python = ase_in.py

[option]
```

`[basic]` セクションの`jobcmd = zsh`は環境に合わせて`jobcmd = sh`や`jobcmd = bash`等に変更する．
CrySPYは内部でバックグラウンドジョブとして`zsh job_cryspy`を実行する．


ASEを使う場合は，`[ASE]`セクションが必要．
下記の二つのファイル名は好きなように変えても良い．

- `jobfile`: `job_cryspy`
- `ase_python`: `ase_in.py`

他の入力変数については後で説明を行う．


### calc_in directory

ASEのジョブファイルや入力ファイルはこのディレクトリに準備する．

#### Job file

ジョブファイルの名前は`cryspy.in`の`jobfile`に一致させる必要がある．
ジョブファイルの例は下記の通り．

``` zsh
#!/bin/sh

# ---------- ASE
python3 ase_in.py

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

`ase_in.py`というファイル名も自由に変えられるが， `cryspy.in`の`ase_python`の値と一致させておく必要がある．
CrySPYではジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`としておくルールになっている．

{{% notice note %}}
ジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`と書いておく．
{{% /notice %}}

{{% notice tip %}}
CrySPYのジョブファイルの`CrySPY_ID`という文字列は自動的に構造IDに置き換わるようになっている．
PBSやSLURMといったジョブスケジューラーを使う場合，ジョブ名に`CrySPY_ID`と書いておくとどの構造のジョブなのかが分かり便利である．
例えば，PBSでは`#PBS -N Si_CrySPY_ID`のように書いておくと，ジョブをサブミットする際，`#PBS -N Si_10`のように置き換わる．
注意点として，ジョブ名を数字から始めるとエラーとなることが多いので，`Si_`のように何か文字列を頭につけておくこと．
{{% /notice %}}


#### Input for ASE

ステージ数(`nstage` in `cryspy.in`)に応じた数のインプットファイルが必要となる．
インプットファイル名の語尾に`_x`をつけて準備する．
ここで`x`はステージ数．

ASEのチュートリアルでは`nstage = 1`を用いるので，ASEのインプットファイルは`ase_in.py_1`の一つだけが必要．
`ase_in.py_1`は例えば下記の通り（ASEの使い方の詳細は公式のドキュメントを見ること）．


``` python
from ase.constraints import FixSymmetry
from ase.filters import FrechetCellFilter
from ase.calculators.emt import EMT
from ase.optimize import BFGS
import numpy as np
from ase.io import read, write

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR', format='vasp')

# ---------- setting and run
atoms.calc = EMT()
atoms.set_constraint([FixSymmetry(atoms)])
cell_filter = FrechetCellFilter(atoms, hydrostatic_strain=False)
opt = BFGS(cell_filter)
opt.run(fmax=0.01, steps=2000)

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
e = cell_filter.atoms.get_total_energy()
with open('log.tote', mode='w') as f:
    f.write(str(e))

# ------ write structure
opt_atoms = cell_filter.atoms.copy()
opt_atoms.set_constraint(None)    # remove constraint for pymatgen
write('CONTCAR', opt_atoms, format='vasp', direct=True)
```

ASEはVASPやQEなどと違って，入力ファイル（python script）は自分で書くことになるので自由度がある．
CrySPYでは2つのルールを設けている．

1. エネルギーはeV/cellの単位で`log.tote`というファイルに出力する．CrySPYはこのファイルの最後の行を読む．
2. 最適化後の構造データは`CONTCAR`というファイルにVASPフォーマットで出力する．


## CrySPY実行

ここまで準備ができたら[CrySPY実行]({{< relref "../random/#running-cryspy" >}})へ進む．
