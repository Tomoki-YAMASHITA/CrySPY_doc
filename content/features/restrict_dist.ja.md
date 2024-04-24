---
title: "Restriction on interatomic distances"
weight: 60
---


2024年4月23日 更新

構造生成時に原子間距離の制限を行うことができる．
下記はA-B 2元系における[structure]セクションの最低原子間距離の設定例．

``` zsh
[structure]
natot = 8
atype = A B
nat = 4 4
mindist_1 = 2.0 1.8
mindist_2 = 1.8 1.5
```

原子A-A，B-BおよびA-B間の最低原子間距離がそれぞれ2.0，1.8および1.5 Åに設定されている．
原子間距離がこの値よりも小さい構造は自動的に棄却される．

３元系では `mindist_1`，`mindist_2`および`mindist_3`が必要になる．
mindistの行列は対称行列でなければならない．

## Example: Na8Cl8

### Without mindist

cryspy.in
``` zsh
[basic]
algo = RS
calc_code = VASP
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 16
atype = Na Cl
nat = 8 8

[VASP]
kppvol = 40 80

[option]
```

log_cryspy
``` bash
[2024-04-23 13:46:28,598][cryspy_init][INFO] 


Start CrySPY 1.2.3


[2024-04-23 13:46:28,598][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2024-04-23 13:46:28,598][read_input][INFO] Save input data in cryspy.stat
[2024-04-23 13:46:28,599][gen_init_struc][INFO] # ------ mindist
[2024-04-23 13:46:28,601][struc_util][INFO] Na - Na: 1.66
[2024-04-23 13:46:28,602][struc_util][INFO] Na - Cl: 1.3399999999999999
[2024-04-23 13:46:28,602][struc_util][INFO] Cl - Cl: 1.02
...
```

![fig_mindist](/images/mindist/mindist.png?width=20vw)

PyXtalのデフォルト設定では，上の図のように原子同士が近すぎる場合があるので，mindistを設定することをすすめる．
DFT計算もやりやすくなるであろう．

## With mindist

cryspy.in
``` bash
[basic]
algo = RS
calc_code = VASP
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 16
atype = Na Cl
nat = 8 8
mindist_1 = 2.5 1.5
mindist_2 = 1.5 2.5

[VASP]
kppvol = 40 80

[option]
```

log_cryspy
``` bash
[2024-04-23 14:06:21,955][cryspy_init][INFO] 


Start CrySPY 1.2.3


[2024-04-23 14:06:21,955][cryspy_init][INFO] # ---------- Read input file, cryspy.in
[2024-04-23 14:06:21,956][read_input][INFO] Save input data in cryspy.stat
[2024-04-23 14:06:21,956][gen_init_struc][INFO] # ------ mindist
[2024-04-23 14:06:21,956][struc_util][INFO] Na - Na: 2.5
[2024-04-23 14:06:21,956][struc_util][INFO] Na - Cl: 1.5
[2024-04-23 14:06:21,956][struc_util][INFO] Cl - Cl: 2.5
```


イオン結晶のような場合には，カチオン同士，アニオン同士が離れるような設定をしておくと良い．
