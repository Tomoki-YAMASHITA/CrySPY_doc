---
title: "ASE-CHGNet（Cu-Au）"
weight: 20
---

2025年6月16日

{{% notice info %}}
[CHGNet](https://chgnet.lbl.gov)<i class="fas fa-external-link-alt"></i>のインストールが必要
{{% /notice %}}

ここで利用しているファイルは[CrySPY_utility/examples/ase_chgnet_Cu-Au_EA-vc](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_chgnet_Cu-Au_EA-vc)からダウンロードできる．
このチュートリアルでは，機械学習ポテンシャルの[CHGNet](https://chgnet.lbl.gov)<i class="fas fa-external-link-alt"></i>を用いてジョブスケジューラーを備えた計算機クラスタで行うことを想定している．
手持ちのPCでも十分動作するので，そうしたい場合は入力を適宜変更すること．
対象となるシステムは2元系のCu-Au.


## 事前計算
EA-vcでは`cryspy.in`で`end_point`として，各元素単体の1原子当たりのエネルギーを基準として用いるため，事前に計算する必要がある．
exampleファイルの中に二つのディレクトリがあるはず．
``` bash
Au-fcc
├── POSCAR
├── chgnet_in.py
└── job_cryspy
```
``` bash
Cu-fcc
├── POSCAR
├── chgnet_in.py
└── job_cryspy
```
結晶構造データ（`POSCAR`）とその構造最適化を行いエネルギーを求めるpythonスクリプト（`chgnet_in.py`）およびジョブスクリプト（`job_cryspy`）があるので適宜使用する計算機の環境に合わせて編集すること．

ジョブを実行する（ジョブサブミットのコマンドは適宜読み替えること）．
``` bash
cd Au-fcc
qsub job_cryspy
cd ../Cu-fcc
qsub job_cryspy
cd ..
```

計算が無事に終わったら，それぞれのディレクトリに`end_point`というファイルができており，ここに構造最適化後の1原子あたりのエネルギー（eV/atom）が出力されている．

``` bash
cat Au-fcc/end_point
-3.2357187271118164
```
``` bash
cat Cu_fcc/end_point
-4.083529472351074
```

これらを`cryspy.in`での入力に用いる．

## cryspy.in

`cryspy.in`の例．
``` python
[basic]
algo = EA-vc
calc_code = ASE
nstage = 1
njob = 20
jobcmd = qsub
jobfile = job_cryspy

[structure]
atype = Cu Au
ll_nat = 0 0
ul_nat = 8 8

[ASE]
ase_python = chgnet_in.py

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
maxgen_ea = 0
end_point = -4.08352709  -3.23571777

[option]
```
- `algo = EA-vc` を使用．
- `jobcmd`は計算機環境に合わせて変更すること．
- [structure]セクションでは，`ll_nat`で各元素の原子数の最小値，`ul_nat`で最大値を指定．
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand` + `n_add` + `n_elim` + `n_subs`
- `end_point`にはCu, Ag, Auにおける各単体の1原子当たりのエネルギー（eV/atom）を入力．事前計算しておいた値を入力．`atype`の順番．
- [EA]セクションのパラメータについては，[入力ファイル > [EA] section]({{< ref "input/ea" >}})および[探索アルゴリズム > 組成可変型進化的アルゴリズム（EA-vc）]({{< ref "search_algo/ea-vc" >}})を見ること．
- 自動的にプロットされる凸包グラフのパラメータは[チュートリアル > 組成可変型進化的アルゴリズム（EA-VC） > 解析と可視化]({{< ref "tutorial/ea-vc/analysis_visualization" >}})も参考にすること．


## calc_in/
calc_in/以下は[チュートリアル > ランダムサーチ（RS） > ASE in your local PC]({{< ref "tutorial/random/ase" >}})と同様であるが，少しだけCHGNet用に変更している．
ジョブスクリプトのpython本体のpathも計算機環境に合わせること．
### calc_in/chgnet_in.py_1
``` python
# ---------- import
from ase.constraints import FixSymmetry
from ase.filters import FrechetCellFilter
from ase.io import read, write
from ase.optimize import FIRE, BFGS, LBFGS
from chgnet.model import CHGNetCalculator

# ---------- input structure
# CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory
atoms = read('POSCAR')

# ---------- set up
atoms.calc = CHGNetCalculator()
atoms.set_constraint([FixSymmetry(atoms)])
cell_filter = FrechetCellFilter(atoms)
opt = BFGS(cell_filter, trajectory='opt.traj')

# ---------- run
opt.run(fmax=0.01, steps=2000)

# ---------- write structure
write('opt_struc.vasp', cell_filter.atoms, format='vasp', direct=True)

# ---------- opt. structure and energy
# [rule in ASE interface]
# output file for energy: 'log.tote' in eV/cell
#                         CrySPY reads the last line of 'log.tote'
# output file for structure: 'CONTCAR' in vasp format
# ------ energy
e = cell_filter.atoms.get_total_energy()    # eV/cell
with open('log.tote', mode='w') as f:
    f.write(str(e))

# ------ struc
opt_atoms = cell_filter.atoms.copy()
opt_atoms.set_constraint(None)    # remove constraint for pymatgen
write('CONTCAR', opt_atoms, format='vasp', direct=True)
```

### calc_in/job_cryspy
``` bash
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N CuAu_CrySPY_ID
#$ -pe smp 2

# ---------- OpenMP
export OMP_NUM_THREADS=2

# ---------- ASE
/usr/local/Python-3.10.13/bin/python3 chgnet_in.py > out.log

# --------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```