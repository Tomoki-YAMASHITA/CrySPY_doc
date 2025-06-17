---
title: "Random structure generation with MPI"
weight: 100
---

2023/10/21 update

{{% notice info %}}
CrySPYの基本的な使い方に関しては[チュートリアル > Random Search (RS)]({{< relref "random/" >}})を見ること．
{{% /notice %}}

{{% notice info %}}
動作環境:  
- CrySPY ~~1.1.0~~ 1.2.3 or later
- mpi4py
- MPI library (Open MPI, Intel MPI, MPICH, etc.)
{{% /notice %}}
{{% notice warning %}}
1.1.0 <= CrySPY <=1.2.2ではバグがあった．
MPIを使ったジョブをbashやzshで実行するとき（e.g., `jobcmd = zsh`, `jobfile = job_cryspy`），MPIのジョブが流れない．
qsubやsbatchでジョブスケジューラーを使う場合は問題ない。
このバグはバージョン1.2.3で修正．
{{% /notice %}}

## mpi4py
mpi4pyのインストールがまだであればインストールする．

``` bash
pip install mpi4py
```

## 入力ファイル
`cryspy.in`はいつもと同じで変更する必要はない．ここでは下記の設定でMPIを使った構造生成を行う．

```
[basic]
algo = RS
calc_code = soiap
tot_struc = 100
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Si
nat = 8

[soiap]
soiap_infile = soiap.in
soiap_outfile = soiap.out
soiap_cif = initial.cif

[option]
```
`tot_struc`，`atype`，`nat`以外の変数は構造生成に関係がないのでここでは無視して良い．

## 実行

4並列で実行する場合，`mpiexec -n`を使う．`-p`オプションも必要．
``` bash
mpiexec -n 4 cryspy -p
```
In 1.1.0 <= CrySPY <= 1.2.2では下記のコマンド (`-p`オプションは使用しない)
``` bash
mpiexec -n 4 cryspy
```



ジョブスケジューラーなどにサブミットするときは自分でジョブファイルを作る．下記は一例．

```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
#$ -N n_nproc
#$ -pe smp 4

mpirun -np $NSLOTS ~/.local/bin/cryspy
```

実行スクリプト`cryspy`のpathなどは適宜編集すること．



## 結果

CrySPYはシンプルに構造生成タスクをプロセス数で分割している．
- Rank 0: IDs 0 -- 24
- Rank 1: IDs 25 -- 49
- Rank 2: IDs 50 -- 74
- Rank 3: IDs 75 -- 99

構造が生成された順番でログが出力される．

```
2023/04/24 22:47:51
CrySPY 1.1.0
Start cryspy.py
Number of MPI processes: 4

Read input file, cryspy.in
Save input data in cryspy.stat

# --------- Generate initial structures
# ------ mindist
Si - Si 1.11
Structure ID     25 was generated. Space group: 138 --> 123 P4/mmm
Structure ID     75 was generated. Space group:  99 -->  99 P4mm
Structure ID      0 was generated. Space group: 127 --> 123 P4/mmm
Structure ID      1 was generated. Space group:  61 -->  61 Pbca
Structure ID     50 was generated. Space group:  38 -->  38 Amm2
Structure ID     51 was generated. Space group: 134 --> 123 P4/mmm
Structure ID     26 was generated. Space group: 111 --> 123 P4/mmm
Structure ID      2 was generated. Space group:   9 -->   9 Cc
Structure ID      3 was generated. Space group:  80 -->  80 I4_1
Structure ID      4 was generated. Space group: 107 --> 107 I4mm
Structure ID      5 was generated. Space group:  75 -->  75 P4
Structure ID     76 was generated. Space group: 108 --> 108 I4cm
Structure ID     77 was generated. Space group: 100 --> 100 P4bm
Structure ID     27 was generated. Space group: 207 --> 221 Pm-3m
```

しかし，`init_POSCARS`では，構造生成が全て終わった後に出力しているのでID順になっている．

```
ID_0
1.0
   2.9636956737951818    0.0000000000000002    0.0000000000000002
   0.0000000000000000    2.9636956737951818    0.0000000000000002
   0.0000000000000000    0.0000000000000000    6.2634106638053080
Si
8
direct
  -0.1602734164607877   -0.1602734164607877   -0.0000000000000000 Si
   0.1602734164607877    0.1602734164607877    0.5000000000000000 Si
   0.6602734164607877    0.3397265835392123    0.7500000000000000 Si
   0.3397265835392122    0.6602734164607877    0.2500000000000000 Si
   0.4469739273741755    0.4469739273741755   -0.0000000000000000 Si
   0.5530260726258245    0.5530260726258244    0.5000000000000000 Si
   0.0530260726258245    0.9469739273741754    0.7500000000000000 Si
   0.9469739273741754    0.0530260726258245    0.2500000000000000 Si
ID_1
1.0
   7.2751506682509657    0.0000000000000004    0.0000000000000004
   0.0000000000000000    7.2751506682509657    0.0000000000000004
   0.0000000000000000    0.0000000000000000    5.1777634169924873
Si
8
direct
  -0.3845341807505553   -0.3845341807505553    0.4999999999999999 Si
   0.3845341807505553    0.3845341807505553    0.5000000000000000 Si
   0.3845341807505553   -0.3845341807505553    0.0000000000000000 Si
  -0.3845341807505553    0.3845341807505553   -0.0000000000000000 Si
   0.0000000000000000    0.5000000000000000    0.2500000000000000 Si
   0.5000000000000000    0.0000000000000000    0.7500000000000000 Si
   0.0000000000000000    0.5000000000000000    0.7500000000000000 Si
   0.5000000000000000    0.0000000000000000    0.2500000000000000 Si
ID_2
1.0
  -4.3660398676292269   -4.3660398676292269    0.0000000000000000
  -4.3660398676292269   -0.0000000000000003   -4.3660398676292269
   0.0000000000000000   -4.3660398676292269   -4.3660398676292269
Si
8
direct
   0.8700001548800920    0.8700001548800920    0.1299998451199080 Si
   0.1299998451199080    0.1299998451199080    0.8700001548800920 Si
   0.8700001548800920    0.1299998451199080    0.8700001548800920 Si
   0.1299998451199080    0.8700001548800920    0.1299998451199080 Si
   0.1299998451199080    0.8700001548800920    0.8700001548800920 Si
   0.8700001548800920    0.1299998451199080    0.1299998451199080 Si
   0.7500000000000000    0.7500000000000000    0.7500000000000000 Si
   0.2500000000000000    0.2500000000000000    0.2500000000000000 Si
```


{{% notice note %}}
ランダム構造生成以外の部分はMPIを使っても並列化されていないので意味はない．
{{% /notice %}}

{{% notice info %}}
See also [Features > Structure generation with MPI parallelization]({{< ref "features/mpi" >}})
{{% /notice %}}