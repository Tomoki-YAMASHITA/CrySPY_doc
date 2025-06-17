---
title: "soiap on your local PC"
weight: 10
---

2025年3月6日 更新

[soiap](https://github.com/nbsato/soiap)<i class="fas fa-external-link-alt"></i>は原子間ポテンシャルを使用した計算ができるソフトウェアであり，計算が軽いのでCrySPYのテストにちょうど良い．
soiapのインストールや詳細は[instructions](https://github.com/nbsato/soiap/blob/master/doc/instructions.md)<i class="fas fa-external-link-alt"></i>を参照．

このチュートリアルでは，MacやLinuxのローカルPC上でCrySPYを試す．
テストシステムはSi 8原子．

## Assumption
ここでは次のような条件を想定している：

- (only version 0.10.3 or earlier) CrySPY main script: `~/CrySPY_root/CrySPY-0.9.0/cryspy.py`
- CrySPY job filename: `job_cryspy`
- soiap executable file: `~/local/soiap-0.3.0/src/soiap`
- soiap input filename: `soiap.in`
- soiap output filename: `soiap.out`
- soiap input structure filename: `initial.cif`


## Input files
どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピーしてきても良い．

- Download from [Cryspy_utility/examples/soiap_Si8_RS](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/soiap_Si8_RS)
- Copy from CrySPY utility that you installed
- (only version 0.10.3 or earlier) `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/soiap_RS_Si8 .`



``` zsh
cd soiap_RS_Si8
tree
```

``` zsh
.
├── calc_in
│   ├── job_cryspy
│   └── soiap.in_1
└── cryspy.in
```


### cryspy.in
`cryspy.in`がCrySPYの入力ファイル．

```
[basic]
algo = RS
calc_code = soiap
tot_struc = 5
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
`[basic]` セクションの`jobcmd = zsh`は環境に合わせて`jobcmd = sh`や`jobcmd = bash`等に変更する． CrySPYは内部でバックグラウンドジョブとして`zsh job_cryspy`を実行する．

soiapを使う場合は`[soiap]`セクションが必要となる．下記のファイル名は好きなように変えても良い．

- `jobfile`
- `soiap_infile`
- `soiap_outfile`
- `soiap_cif`


他の入力変数については後で説明を行う．


### calc_in directory

soiapのジョブファイルや入力ファイルはこのディレクトリに準備する．

#### Job file

ジョブファイルの名前は`cryspy.in`の`jobfile`に一致させる必要がある．
ジョブファイルの例は下記の通り．

``` zsh
#!/bin/sh

# ---------- soiap
EXEPATH=/path/to/soiap
$EXEPATH/soiap soiap.in 2>&1 > soiap.out

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```

`/path/to/soiap`はsoiapの実行ファイルのpathに変えること．
入力ファイル（`soiap.in`）と出力ファイル（`soiap.out`）は`cryspy.in`で指定した`soiap_infile`と`soiap_outfile`に合わせること．
最後の行以外は普段使っているようなジョブスクリプトで良いが，
CrySPYではジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`としておくルールになっている．

{{% notice note %}}
ジョブファイルの最後の行は`sed -i -e '3 s/^.*$/done/' stat_job`と書いておく．
{{% /notice %}}

{{% notice tip %}}
CrySPYのジョブファイルの`CrySPY_ID`という文字列は自動的に構造IDに置き換わるようになっている．
PBSやSLURMといったジョブスケジューラーを使う場合，ジョブ名に`CrySPY_ID`と書いておくとどの構造のジョブなのかが分かり便利である．
例えば，PBSでは`#PBS -N Si_CrySPY_ID`のように書いておくと，ジョブをサブミットする際，`#PBS -N Si_10`のように置き換わる．
注意点として，ジョブ名を数字から始めるとエラーとなることが多いので，`Si_`のように何か文字列を頭につけておくこと．
{{% /notice %}}


#### Input for soiap

ステージ数(`nstage` in `cryspy.in`)に応じた数のインプットファイルが必要となる．
インプットファイル名の語尾に`_x`をつけて準備する．
ここで`x`はステージ数．

soiapのチュートリアルでは`nstage = 1`を用いるので，インプットファイルは`soiap.in_1`の一つだけが必要．
`soiap.in_1`は例えば下記の通り．

``` fortran
crystal initial.cif ! CIF file for the initial structure
symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize

md_mode_cell 3 ! cell-relaxation method
               ! 0: FIRE, 2: quenched MD, or 3: RFC5
number_max_relax_cell 100 ! max. number of the cell relaxation
number_max_relax 1 ! max. number of the atom relaxation
max_displacement 0.1 ! max. displacement of atoms in Bohr

external_stress_v 0.0 0.0 0.0 ! external pressure in GPa

th_force 5d-5 ! convergence threshold for the force in Hartree a.u.
th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u.

force_field 1 ! force field
              ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2,
              ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or
              ! 6: Lennard-Jones
```
1行目に書く初期構造ファイル（`initial.cif`）は`cryspy.in`の`soiap_cif`の値と揃える．

## CrySPY実行

ここまで準備ができたら[CrySPY実行]({{< relref "../random/#running-cryspy" >}})へ進む．
