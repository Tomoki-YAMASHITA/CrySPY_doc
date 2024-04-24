---
title: "LAQA"
weight: 40
---

May 15th, 2023

{{% notice info %}}
CrySPYの基本的な使い方に関してははじめに[Tutorial > Random Search (RS)]({{< ref "tutorial/random/" >}})を見ること．  
ここではCrySPY 1.1.0以上を想定している．  
{{% /notice %}}


ここで利用しているファイルは[CrySPY Utility > Examples > qe_Si16_LAQA]({{< ref "cryspy_utility/examples/qe_si16_laqa" >}})からダウンロードできる．
このチュートリアルでは，50個だけ初期構造を生成しているが，本来LAQAでは，もっと多くの構造を生成しておいてそこから良い候補を選択することでシミュレーションを進める．


## Input

### cryspy.in

`cryspy.in`の例．

```
[basic]
algo = LAQA
calc_code = QE
tot_struc = 50
nstage = 1
njob = 10
jobcmd = qsub
jobfile = job_cryspy

[structure]
natot = 16
atype = Si
nat = 16
mindist_1 = 1.5

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  80

[LAQA]
nselect_laqa = 4

[option]
```

- LAQAでは`nstage`は1にする必要がある．
- [LAQA]セクションの`nselect_laqa`だけ新しく設定する必要がある． `nselect_laqa`は一回の選択で選ばれる候補の数．


下記のように`wf`や`ws`を指定すれば，LAQAのスコアにおける重みも変えられる．
省略した場合，デフォルトでは0.1と10.0がそれぞれ使われる．
スコアの詳細については[Searching algorithms > LAQA]({{< ref "searching_algo/laqa" >}})を見ること．

```
[LAQA]
nselect_laqa = 4
wf = 0.1
ws = 10.0
```

### calc_in/pwscf.in_1

```
&control
    calculation = 'vc-relax'
    pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/'
    outdir='./outdir/'
    nstep = 10
/

&system
    ibrav = 0
    nat = 16
    ntyp = 1
    ecutwfc = 40
    ecutrho = 200
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
  Si -1.0 si_pbe_v1.uspp.F.UPF
```

- `nstep`で1回の選択で何ステップ構造最適化を進めるかをコントロールする．(VASPでは`NSW`)

### calc_in/job_cryspy

```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si_CrySPY_ID
#$ -pe smp 20
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS pw.x -nk 4 < pwscf.in > pwscf.out

if [ -e "CRASH" ]; then
    sed -i -e '3 s/^.*$/skip/' stat_job
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```

- ジョブスクリプトはいつも使っているものと同じ


## Run

{{% notice tip %}}
自動化スクリプトも用意してある．このページの最下部参照．
{{% /notice %}}

`cryspy`と打って1回目の実行．

```
cryspy &
```

この入力ファイルではまず50構造生成されるので`log_cryspy`を見て確認する．

```
2023/05/13 13:02:07
CrySPY 1.1.0
Start cryspy.py
Number of MPI processes: 1

Read input file, cryspy.in
Save input data in cryspy.stat

# --------- Generate initial structures
# ------ mindist
Si - Si 1.5
Structure ID      0 was generated. Space group: 165 --> 165 P-3c1
Structure ID      1 was generated. Space group:  66 -->  66 Cccm
Structure ID      2 was generated. Space group: 146 --> 146 R3
Structure ID      3 was generated. Space group:  82 -->  82 I-4
Structure ID      4 was generated. Space group: 162 --> 162 P-31m
...
...
...
Structure ID     47 was generated. Space group:  90 -->  90 P42_12
Structure ID     48 was generated. Space group: 214 --> 214 I4_132
Structure ID     49 was generated. Space group:  23 -->  23 I222

Elapsed time for structure generation: 0:00:10.929030


# ---------- Initialize LAQA
# ---------- Selection 0
selected_id: 50 IDs
```

LAQAでは，はじめに全ての初期構造の最適化ジョブを実行する．
完全に最適化を終わらせるわけではなく，ここでは`nstep = 10`にしているので，10ステップだけ実行される．
`cryspy`コマンドを繰り返して，初期構造全てについて10ステップの最適化を完了させる．
必要であれば，`njob`の値を上げておけば一度に多くのジョブがサブミットされる．

初めの最適化が全て終わると，  `log_cryspy`の最後に`LAQA is ready`と表示される．

```
2023/05/13 13:23:31
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status
ID     41: Stage 1 Done!

LAQA is ready
```

この状態で`cryspy` を実行すると，最初の選択が始まる．

```
2023/05/13 13:23:33
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status

Backup data

# ---------- Selection 1
selected_id: 37 8 10 48
```

`nselect_laqa`で設定された構造の数だけ選択される．
`cryspy`をもう一度実行するとそれらのジョブ（次の10ステップ）がサブミットされる．

```
cryspy &
```

```
2023/05/13 13:23:36
CrySPY 1.1.0
Restart cryspy.py
Number of MPI processes: 1



# ---------- job status
ID     37: submit job, Stage 1
ID      8: submit job, Stage 1
ID     10: submit job, Stage 1
ID     48: submit job, Stage 1
```

あとはこれを何度も繰り返し行うことでスコアに応じて選択された構造の最適化が10ステップずつ進行する．
ある程度の構造の最適化が完全に完了するまで進めて，止めたいタイミングでストップする．


## Status

シミュレーションの途中でスコアの確認がしたければ次のファイルを見ると良い：

- ./data/LAQA_status

他にもLAQAに関数ファイルがいくつか出力される：

- ./data_LAQA_bias
- ./data_LAQA_energy
- ./data_LAQA_score
- ./data_LAQA_selected_id
- ./data_LAQA_step

## Analysis and visualization

ここではCrySPYのデータをローカルPCで解析する．
スパコンやワークステーションで計算を行ったら，ローカルPCにデータをダウンロードしておく．
今後必要なければ，ファイルサイズが大きい`work`と`backup`ディレクトリは削除しておいて良い．
pklデータはgzipしておくとファイルサイズを減らすことができる．


### jupyter notebook
ダウンロードした結果のdata/ディレクトリに移動して，`cryspy_analyzer_LAQA.ipynb`を[CrySPY utility]({{< ref "/installation/utility" >}})からコピーする．

このjupyter notebookを順番に実行していけば下記のようなグラフとgif画像が作成できる．
この例では，アニメーションのために全ての構造の最適化を完全に完了させた．
（全て最適化を完了させるとランダムサーチと計算量が変わらないのでLAQAの優位性はない）

![fig_LAQA](/images/LAQA/LAQA.gif?width=40vw)

このグラフはエネルギーを最適化ステップの関数として示している．
赤い線は最終的にエネルギーが低かった3つの構造を表しており，中でも一番安定だった構造はダイアモンド構造に到達している．
安定になる構造はかなり早い段階で選択されて構造最適化が完了していることがわかる．

{{% notice info %}}
algo = LAQAでは[option]セクションの下記の二つは自動的にTrueになる．
- force_step_flag = True
- stress_step_flag = True

原子に働く力とストレスのデータは1ステップごとに収集される．
エネルギーと構造データは1ステップごとではなく，選択ごとに収集される．
つまり，この場合は10ステップおきにエネルギーと構造データは保存される．
もし1ステップごとのデータが欲しいのであれば，手動で下記の設定を追加すること．
```
[option]
energy_step_flag = True
struc_step_flag = True
```
{{% /notice %}}


## Auto script

何度も繰り返しcryspyを実行するのは面倒に感じたかもしれない．
下記のようなスクリプトを使えば自動化できる．

[repeat_cryspy]({{< ref "/cryspy_utility/scripts/repeat" >}})
