---
title: "VASP"
weight: 20
---

2025年3月6日 更新

このチュートリアルでは，PBSなどのジョブスケジューラーを備えたPCクラスターを想定してCrySPYを試す．第一原理計算のVASPを用いて，Na8Cl8（16原子）の構造探索を行う．


## Assumption

ここでは次のような条件を想定している：

- CrySPY 1.2.0 or later in your PC cluster
- CrySPY job command: `qsub`
- CrySPY job filename: `job_cryspy`
- executable file, vasp_std in your PC cluster

## Input files
どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピーしてきても良い．

- Download from [Cryspy_utility/examples/vasp_Na8Cl8_RS](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/vasp_Na8Cl8_RS)
- Copy from CrySPY utility that you installed

``` zsh
cd vasp_Na8Cl8_RS
tree
```

``` zsh
.
├── calc_in
│   ├── INCAR_1
│   ├── INCAR_2
│   ├── POTCAR
│   ├── POTCAR_is_dummy
│   └── job_cryspy
└── cryspy.in
```


### cryspy.in
`cryspy.in`はCrySPYの入力ファイル．

```
[basic]
algo = RS
calc_code = VASP
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
atype = Na Cl
nat = 8 8
mindist_1 = 2.5 1.5
mindist_2 = 1.5 2.5

[VASP]
kppvol = 40 80

[option]
```

`[basic]` セクションの`jobcmd = qsub`は環境に合わせて変更する．
CrySPYは内部でバックグラウンドジョブとして`qsub job_cryspy`を実行する．
下記のファイル名は好きなように変えても良い．

- `jobfile`

構造最適化計算はステージ制を採用しており，ここでは`nstage = 2`を用いている．
例えば，最初のステージでは，セルを固定し内部座標だけ緩和する設定で，k点も少ない計算を実行し，2ステージ目でセルも含めてフルに構造緩和して，精度も高めるようなことが可能となっている．

VASPを使う場合は，`[VASP]`セクションが必要．
ここでは各ステージにおけるk点のグリッド密度（Å^-3）を`kppvol`に指定する必要がある．


{{% notice style="info" %}}
`kppvol`の詳細はこちら --> [Input file > Kpoint]({{< ref "input/kpoint" >}})
{{% /notice %}}



他のインプット変数に関しては後ほど説明する．



### calc_in directory

ジョブファイルやVASPのインプットをこのディレクトリに置く．

#### Job file

ジョブファイルの名前は`cryspy.in`の`jobfile`に一致させる必要がある．
ジョブファイルの例は下記の通り．

``` zsh
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Na8Cl8_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q
####$ -q ibis3.q
####$ -q ibis4.q

# ---------- vasp
VASPROOT=/usr/local/vasp/vasp.6.4.2/bin
mpirun -np $NSLOTS $VASPROOT/vasp_std

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

`VASPROOT`は環境に合わせて変更する．普段VASPのジョブを流しているジョブファイルを使えば良い．ただし，CrySPYではジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`としておくルールになっている．

{{% notice note %}}
ジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`と書いておく．
{{% /notice %}}

{{% notice tip %}}
CrySPYのジョブファイルの`CrySPY_ID`という文字列は自動的に構造IDに置き換わるようになっている．
PBSやSLURMといったジョブスケジューラーを使う場合，ジョブ名に`CrySPY_ID`と書いておくとどの構造のジョブなのかが分かり便利である．
例えば，PBSでは`#PBS -N Si_CrySPY_ID`のように書いておくと，ジョブをサブミットする際，`#PBS -N Si_10`のように置き換わる．
注意点として，ジョブ名を数字から始めるとエラーとなることが多いので，`Si_`のように何か文字列を頭につけておくこと．
{{% /notice %}}



#### Input for VASP

ステージ数(`nstage` in `cryspy.in`)に応じた数のインプットファイルが必要となる．
インプットファイル名の語尾に`_x`をつけて準備する．
ここで`x`はステージ数．

今は`nstage = 2`を用いているので，`INCAR_1`と`INCAR_2`が必要となる．
ここでは，`INCAR_1`はセルを固定して内部座標だけ緩和する設定，`INCAR_2`はセルも含めてフルに緩和する設定になっている．

`INCAR_1`
``` bash
SYSTEM = NaCl
!!!LREAL = Auto
Algo = Fast
NSW = 40

LWAVE = .FALSE.
!LCHARG = .FALSE.

ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 2

EDIFF = 1e-5
EDIFFG = -0.01
```

`INCAR_2`
``` bash
SYSTEM = NaCl
!!LREAL = Auto
Algo = Fast
NSW = 200

ENCUT = 341

!!LWAVE = .FALSE.
!!LCHARG = .FALSE.


ISPIN =  1

ISMEAR = 0
SIGMA = 0.1

IBRION = 2
ISIF = 3

EDIFF = 1e-5
EDIFFG = -0.01
```

CrySPYは`POSCAR`と`KPOINTS`ファイルを自動生成する．
`POTCAR`ファイルはユーザーが準備する必要がある．
このexampleに含まれている`POTCAR`は空のファイルなので，各自で準備すること．

{{% notice warning %}}
exampleに含まれている`POTCAR`は空のファイル．配布できない．
{{% /notice %}}


## CrySPY実行

ここまで準備ができたら[CrySPY実行]({{< relref "../random/#running-cryspy" >}})に進む．