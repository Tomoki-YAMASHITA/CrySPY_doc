---
title: "print_pkl.py"
weight: 100
---

2024 May 31

`data/pkl_data/`にあるピクル化されたファイルをさっとチェックしたい時に`print_pkl.py`を使うと便利．

## Usage
``` zsh
python3 print_pkl.py xxxx.pkl
```
PATHが通っているところにこのpythonスクリプトを置いているなら`python3`は省略可能．
``` zsh
print_pkl.py xxxx.pkl
```

## Example
``` bash
print_pkl.py init_struc_data.pkl
```
```
Number of structures: 10
dict_keys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```


``` bash
print_pkl.py input_data.pkl 
```
```
[basic]
algo = RS
calc_code = ASE
tot_struc = 10
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
struc_mode = crystal
natot = 8
atype = ('Cu', 'Au')
nat = (4, 4)
mindist_factor = 1.0
vol_factor = 1.1
symprec = 0.01
spgnum = all
use_find_wy = False

[option]
stop_chkpt = 0
load_struc_flag = False
stop_next_struc = False
append_struc_ea = False
energy_step_flag = False
struc_step_flag = False
force_step_flag = False
stress_step_flag = False

[ASE]
kpt_flag = False
force_gamma = False
ase_python = ase_in.py
```


``` bash
print_pkl.py elite_struc.pkl
```
```
Number of structures: 2
dict_keys([3, 6])
```


``` bash
print_pkl.py elite_fitness.pkl
```
```
{3: -325.79973412221455, 6: -324.8381948581405}
```