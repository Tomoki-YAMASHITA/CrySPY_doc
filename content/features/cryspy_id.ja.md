---
title: "ジョブファイルのCrySPY_ID"
weight: 100
---

CrySPYのジョブファイルで，"CrySPY_ID"という文字列は自動的に構造IDに置換される．
PBSやSLURMなどのジョブスケジューラーを使う時，ジョブ名に構造IDを使うと便利である．
例えばPBSでは， `#PBS -N Si_CrySPY_ID`が`#PBS -N Si_10`に置き換わる
大抵の場合，ジョブ名は数字から始められないことが多いので，`Si_`のように英字から始めておくと良い．

```
#!/bin/sh
#$ -cwd
#$ -V -S /bin/bash
####$ -V -S /bin/zsh
#$ -N Si8_CrySPY_ID
#$ -pe smp 8
####$ -q ibis1.q
####$ -q ibis2.q

mpirun -np $NSLOTS pw.x -nk 4 -nb 2 < pwscf.in > pwscf.out


if [ -e "CRASH" ]; then
    exit 1
fi

sed -i -e '3 s/^.*$/done/' stat_job
```