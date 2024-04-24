---
title: "QE"
weight: 30
---

2024 April 24，日本語化

このチュートリアルでは，PBSなどのジョブスケジューラーを備えたPCクラスターを想定してCrySPYを試す．第一原理計算のQUANTUM ESPRESSOを用いて，Si 8原子の構造探索を行う．

## Assumption

ここでは次のような条件を想定している：

- CrySPY job command: `qsub`
- CrySPY job filename: `job_cryspy`
- QE executable file: `/usr/local/qe-6.5/bin/pw.x`
- QE input filename: `pwscf.in`
- QE output filename: `pwscf.out`


## Input files
どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピーしてきても良い．

- Download from [cryspy_utility/examples/qe_Si8_RS]({{< ref "/cryspy_utility/examples/qe_Si8_RS" >}})
- Copy from CrySPY utility that you installed



``` zsh
cd QE_RS_Si8
tree
```

``` zsh
.
├── calc_in
│   ├── job_cryspy
│   ├── pwscf.in_1
│   └── pwscf.in_2
└── cryspy.in
```


### cryspy.in
`cryspy.in`はCrySPYの入力ファイル．

```
[basic]
algo = RS
calc_code = QE
tot_struc = 5
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80

[option]
```

`[basic]` セクションの`jobcmd = qsub`は環境に合わせて変更する．
CrySPYは内部でバックグラウンドジョブとして`qsub job_cryspy`を実行する．

構造最適化計算はステージ制を採用しており，ここでは`nstage = 2`を用いている．
例えば，最初のステージでは，セルを固定し内部座標だけ緩和する設定で，k点も少ない計算を実行し，2ステージ目でセルも含めてフルに構造緩和して，精度も高めるようなことが可能となっている．

QEを使う場合は，`[QE]`セクションが必要．
ここでは各ステージにおけるk点のグリッド密度（Å^-3）を`kppvol`に指定する必要がある．


{{% notice style="info" %}}
`kppvol`の詳細はこちら --> [Input file > Kpoint]({{< ref "input/kpoint" >}})
{{% /notice %}}

下記のファイル名は好きなように変えても良い．

- `jobfile`
- `qe_infile`
- `qe_outfile`

他のインプット変数に関しては後ほど説明する．



### calc_in directory

ジョブファイルやQEのインプットをこのディレクトリに置く．

#### Job file

ジョブファイルの名前は`cryspy.in`の`jobfile`に一致させる必要がある．
ジョブファイルの例は下記の通り．


``` zsh
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si8_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS /path/to/pw.x < pwscf.in > pwscf.out


if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```

`/path/to/pw.x`は環境に合わせて変更する．
入力（`pwscf.in`）出力（`pwscf.out`）ファイルの名前は好きに変えて良いが，`cryspy.in`の`qe_infile`と`qe_outfile`に合わせる必要がある．
普段VASPのジョブを流しているジョブファイルを使えば良い．ただし，CrySPYではジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`としておくルールになっている．

{{% notice note %}}
ジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`と書いておく．
{{% /notice %}}

{{% notice tip %}}
CrySPYのジョブファイルの`CrySPY_ID`という文字列は自動的に構造IDに置き換わるようになっている．
PBSやSLURMといったジョブスケジューラーを使う場合，ジョブ名に`CrySPY_ID`と書いておくとどの構造のジョブなのかが分かり便利である．
例えば，PBSでは`#PBS -N Si_CrySPY_ID`のように書いておくと，ジョブをサブミットする際，`#PBS -N Si_10`のように置き換わる．
注意点として，ジョブ名を数字から始めるとエラーとなることが多いので，`Si_`のように何か文字列を頭につけておくこと．
{{% /notice %}}



#### Input for QE

ステージ数(`nstage` in `cryspy.in`)に応じた数のインプットファイルが必要となる．
インプットファイル名の語尾に`_x`をつけて準備する．
ここで`x`はステージ数．

今は`nstage = 2`を用いているので，`pwscf.in_1`と`pwscf.in_2`が必要となる．
ここでは，`pwscf.in_1`はセルを固定して内部座標だけ緩和する設定，`pwscf.in_2`はセルも含めてフルに緩和する設定になっている．

`pwscf.in_1`

``` fortran
 &control
    title = 'Si8'
    calculation = 'relax'
    nstep = 100
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```


`pwscf.in_2`
``` fortran
 &control
    title = 'Si8'
    calculation = 'vc-relax'
    nstep = 200
    restart_mode = 'from_scratch',
    pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/'
    outdir='./out.d/'
 /

 &system
    ibrav = 0
    nat = 8
    ntyp = 1
    ecutwfc = 44.0
    occupations = 'smearing'
    degauss = 0.01
 /

 &electrons
 /

 &ions
 /

 &cell
 /

ATOMIC_SPECIES
  Si  28.086  Si.pbe-n-kjpaw_psl.1.0.0.UPF
```


`pseudo_dir`は各自の環境に合わせて変更する．
Inputs for structure data and k-point such as インプットファイルの`ATOMIC_POSITIONS`と`K_POINTS`はCrySPYがpymatgenを用いて自動生成するのでユーザーが書く必要はない．


## CrySPY実行

ここまで準備ができたら[CrySPY実行]({{< relref "../random/#running-cryspy" >}})に進む．

