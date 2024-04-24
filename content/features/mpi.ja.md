---
title: "MPI並列化を用いた構造生成"
weight: 200
---
2023/10/21 update

CrySPYのバージョン1.1.0（1.2.3以上の利用を推奨）からは，MPIを用いたランダム構造生成が可能になった．
MPIを使うにはPython環境にmpi4pyをインストールする必要がある．
当然，計算に利用するワークステーション等にMPIライブラリ（Open MPI，Intel MPI，MPICHなど）も必要である．

{{% notice info %}}
MPIを使うのに下記が必要  
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

下の図にSi8原子1000構造をランダムに生成するのにかかった時間とMPIプロセス数の関係を示す．下記のセッティングを使った．
```
[basic]
algo = RS
calc_code = soiap
tot_struc = 1000
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8
mindist_1 = 2.2
```
`mindset_1 = 2.2`のように厳し目に設定して，わざと時間がかかるようにしてある．
それぞれのプロセス数において10回ずつ実行して，平均を線で結んでいる．

![fig_MPI](/images/MPI/elapsed_time_ibis.png)


## Run
``` bash
mpiexec -n 4 cryspy -p
```


{{% notice info %}}
See also [Tutorial > Random structure generation with MPI]({{< relref "tutorial/mpi" >}})
{{% /notice %}}