---
title: "Check cryspy.in"
weight: 100
---

2025年6月16日 更新

詳細は [入力ファイル]({{< ref "/input" >}})のページも見ること．

`cryspy.in`をもう一度チェックしてみよう．ここでの例は選んだ`calc_code`に応じて，準備したものと少し異なるかもしれない．
```
[basic]
algo = RS
calc_code = ASE
tot_struc = 5
nstage = 1
njob = 5
jobcmd = zsh
jobfile = job_cryspy

[structure]
atype = Cu
nat = 8

[ASE]
ase_python = ase_in.py

[option]
```


## [basic] section

- `algo`: アルゴリズム．ランダムサーチの場合は`RS`を使う．
- `calc_code`: 構造最適化のコード． `VASP`, `QE`, `OMX`, `soiap`, `LAMMPS`, `ASE`から選択．
- `tot_struc`: 構造数．この場合初回実行で5構造ランダムに生成される．
- `nstage`: ステージ数
- `njob`: 同時にサブミットするジョブの数．この例では2つのスロットを設定，言い換えると，2構造ずつ最適化を行う．
- `jobcmd`: ジョブを実行または投入するコマンド． `bash`, `zsh`, `qsub`など
- `jobfile`: ジョブファイルのファイル名


## [structure] section
- `atype`: Atom type. Na8Cl8の例： `atype = Na Cl`.
- `nat`: atypeに応じた原子数． Na8Cl8の例： `nat = 8 8`
