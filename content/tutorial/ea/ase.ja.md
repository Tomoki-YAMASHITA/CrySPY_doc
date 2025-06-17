---
title: "ASE on your local PC"
weight: 10
---

2025年4月5日


ここで利用しているファイルは[CrySPY_utility/examples/ase_Cu8Au8_EA](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/ase_Cu8Au8_EA)からダウンロードできる．
このチュートリアルでは，計算が軽いASEの[Pure Python EMT calculator](https://wiki.fysik.dtu.dk/ase/ase/calculators/emt.html#ase.calculators.emt.EMT)<i class="fas fa-external-link-alt"></i>を用いてローカルPCで動作確認を行う．対象となるシステムはCu8Au8.


## cryspy.in

`cryspy.in`の例．
``` python
[basic]
algo = EA
calc_code = ASE
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu Au
nat = 8 8

[EA]
n_pop = 10
n_crsov = 5
n_perm = 2
n_strain = 2
n_rand = 1
n_elite = 1
n_fittest = 5
slct_func = TNM
t_size = 2
maxgen_ea = 0

[ASE]
ase_python = ase_in.py

[option]
```
- `algo = EA` を使用．
- bash環境では`jobcmd`をbashに変更．
- EAでは`tot_struc`は使用しない．構造数は`n_pop`で決まる．
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand`
- [EA]セクションのパラメータについては，[入力ファイル > [EA] section]({{< ref "input/ea" >}})および[探索アルゴリズム > 進化的アルゴリズム（EA）]({{< ref "search_algo/ea" >}})を見ること．


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