---
title: "ASE on your local PC (Cu-Ag-Au)"
weight: 10
---

2025年6月16日


ここで利用しているファイルは[CrySPY_utility/examples/ase_Cu-Ag-Au_EA-vc](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_Cu-Ag-Au_EA-vc)からダウンロードできる．
このチュートリアルでは，計算が軽いASEの[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>を用いてローカルPCで動作確認を行う．対象となるシステムは3元系のCu-Ag-Au.


## cryspy.in

`cryspy.in`の例．
``` python
[basic]
algo = EA-vc
calc_code = ASE
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu Ag Au
ll_nat = 0 0 0
ul_nat = 8 8 8

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
end_point = 0.0 0.0 0.0
maxgen_ea = 0

[option]
```
- `algo = EA-vc` を使用．
- bash環境では`jobcmd`をbashに変更．
- [structure]セクションでは，`ll_nat`で各元素の原子数の最小値，`ul_nat`で最大値を指定．
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand` + `n_add` + `n_elim` + `n_subs`
- `end_point`にはCu, Ag, Auにおける各単体の1原子当たりのエネルギー（eV/atom）を入力．ASEの[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>は単体のエネルギーが0になるので今回は0.0．（CHGNetを使う場合の例は[ASE-CHGNet（Cu-Au）]({{< ref "tutorial/ea-vc/ase_chgnet" >}})）
- [EA]セクションのパラメータについては，[CrySPY > 入力ファイル > [EA] section]({{< ref "input/ea" >}})および[CrySPY > 探索アルゴリズム > 組成可変型進化的アルゴリズム（EA-vc）]({{< ref "search_algo/ea-vc" >}})を見ること．
- 自動的にプロットされる凸包グラフのパラメータは[チュートリアル > 組成可変型進化的アルゴリズム（EA-VC） > 解析と可視化]({{< ref "tutorial/ea-vc/analysis_visualization" >}})も参考にすること．


## calc_in/
calc_in/以下は[チュートリアル > ランダムサーチ（RS） > ASE in your local PC]({{< ref "tutorial/random/ase" >}})と同様
### calc_in/ase_in.py_1
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

### calc_in/job_cryspy
``` bash
#!/bin/sh

# ---------- ASE
python3 ase_in.py > out.log

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```