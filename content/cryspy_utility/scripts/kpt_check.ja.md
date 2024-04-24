---
title: "kpt_check.py"
weight: 70
---

`kpt_check.py`は`kppvol`を入力した際にkメッシュがどれくらいになるかをチェックすることができる．
`POSCAR`，`CONTCAR`，および`init_struc_data.pkl`が読み込み可能．
pymatgenライブラリが必要．

初期構造を生成後に，`kppvol`の値をどれくらいにしたら良いか色々試すことができる．（下記の最後の例を参照）

## 使い方
``` zsh
python3 kpt_check.py -h
```
このスクリプトをPATHが通ったところにおけば`python3`を省略できる
``` zsh
kpt_check.py -h
```
``` bash
usage: kpt_check.py [-h] [-w] [-n NSTRUC] infile kppvol

positional arguments:
  infile                input file: POSCAR, CONTCAR, or init_struc_data.pkl
  kppvol                kppvol

options:
  -h, --help            show this help message and exit
  -w, --write           write KPOINTS
  -n NSTRUC, --nstruc NSTRUC
                        number of structure to check
```

## 例

### POSCARとkppvol

``` bash
kpt_check.py POSCAR 100
```
``` bash
a = 10.689217
b = 10.689217
c = 10.730846
    Lattice vector
10.689217 0.000000 0.000000
0.000000 10.689217 0.000000
0.000000 0.000000 10.730846

kppvol:  100
k-points:  [2, 2, 2]
```

### KPOINTSファイルの生成

`POSCAR`および`CONTCAR`を入力とする際は，`-w`オプションを使用することで`KPOINTS`ファイルを生成できる．

``` bash
kpt_check.py -w POSCAR 100
```
``` bash
$ cat KPOINTS
pymatgen 4.7.6+ generated KPOINTS with grid density = 607 / atom
0
Monkhorst
2 2 2
```

### init_struc_data.pklとkppvol

`init_struc_data.pkl`の初期構造データに任意の`kppvol`の値を適用した場合のkメッシュを調べることが可能．
デフォルト設定でははじめの5構造をチェックする．
`-n`を使うとチェックする構造数も変えられる．

``` bash
kpt_check.py -n 3 init_struc_data.pkl 100
```
``` bash
# ---------- 0th structure
a = 8.0343076893
b = 8.03430768936
c = 9.1723323373
    Lattice vector
8.034308 0.000000 0.000000
-4.017154 6.957915 0.000000
0.000000 0.000000 9.172332

kppvol:  100
k-points:  [3, 3, 3]


# ---------- 1th structure
a = 9.8451944096
b = 9.84519440959
c = 6.8764313585
    Lattice vector
9.845194 0.000000 0.000000
-4.922597 8.526188 0.000000
0.000000 0.000000 6.876431

kppvol:  100
k-points:  [3, 3, 4]


# ---------- 2th structure
a = 7.5760383679
b = 7.57603836797
c = 6.6507478296
    Lattice vector
7.576038 0.000000 0.000000
-3.788019 6.561042 0.000000
0.000000 0.000000 6.650748

kppvol:  100
k-points:  [4, 4, 4]
```
