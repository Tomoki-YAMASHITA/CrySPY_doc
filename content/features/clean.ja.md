---
title: "クリーン"
weight: 20
---

CrySPYはシンプルなクリーン機能を備えている．
初めからやり直したい時に便利となる．
以下のファイルがクリーン（実際はファイルを移動するだけ）される．

- cryspy.stat
- log_cryspy
- err_cryspy
- lock_cryspy
- data/*
- work/*
- ext/*
- tmp_calc_FP/*
- tmp_gen_struc/*

クリーンする場合は`-c` または `--clean` オプションをつけてcryspyを実行する:

``` zsh
$ ls
calc_in  cryspy.in  cryspy.stat  data  err_cryspy  log_cryspy
```

``` zsh
$ cryspy -c
Are you sure you want to clean the data? 'yes' or 'no' [y/n]: y
```

``` zsh
$ ls
calc_in  cryspy.in  trash
```

``` zsh
$ ls trash
20230318_100728
```

`calc_in/*` と `cryspy.in` 以外のファイルがtrashの中の日付と時間で名前づけられたディレクトリに移動します．
必要なければ手動で削除してください．