+++
title = "extract_struc.py"
weight = 20
chapter = false
+++

2023 April 16 update

Link: [CrySPY_utility/script/extract_struc.py](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/blob/master/script/extract_struc.py)

`init_struc_data.pkl`や`opt_struc_data.pkl`から構造ごとにcifファイルを出力するスクリプト．
ファイル出力せず，構造情報を画面にプリントすることも可能．

`-i`オプションでインデックス（構造ID)を（複数）指定できる．
`-t`オプションでエネルギーが低い順番に指定した構造数のcifファイルを出力可能．
`-a`オプションの場合は全ての構造をcifファイルに出力する．数が多い場合はディレクトリを作成してそこに移動してから実行したほうが良い．
`-s`オプションをつけると対称性（空間群）の情報を付けられる．ただし，セルや原子数が変わるので注意．
対称性の情をつける際，`--tolerance`オプションでtoleranceを変えられる（デフォルトは0.01）．
`-p`オプションをつけるとファイル出力せずに，画面にプリントする．
gzipしたファイルもそのまま読み込み可能(e.g., `opt_struc_data.pkl.gz`)．

## 更新履歴
- 2024 April 16: --tolerance option, gzip
- 2023 July 21: --print option

## 使い方
``` zsh
python3 extract_struc.py -h
```
このスクリプトをPATHが通ったところにおけば`python3`を省略できる
``` zsh
extract_struc.py -h
```
``` zsh
usage: extract_struc.py [-h] [-p] [-a] [-i [INDEX ...]] [-t TOP] [-r] [-s] [--tolerance TOLERANCE] infile

positional arguments:
  infile                input file

options:
  -h, --help            show this help message and exit
  -p, --print           just print, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -ps
  -a, --all_id          all structures, e.g., extract_struc.py opt_struc_data.pkl -as
  -i [INDEX ...], --index [INDEX ...]
                        structure ID, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
  -t TOP, --top TOP     top k structures, e.g. (k = 3), extract_struc.py opt_struc_data.pkl -t 3 -s
  -r, --rank            add rank in file names, e.g., extract_struc.py opt_struc_data.pkl -t 3 -rs
  -s, --symmetrized     symmetrized structure, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
  --tolerance TOLERANCE
                        tolerance for symmetrization (default 0.01), e.g., extract_struc.py opt_struc_data.pkl -i 0 1 -s --tolerance 0.01
```

## 例
### プリント

`-p`オプションは`-s`以外のオプションと組み合わせて使用することができる．

``` bash
extract_struc.py -p opt_struc_data.pkl -i 0 1
```

``` bash
ID 0
Full Formula (Na8 Cl8)
Reduced Formula: NaCl
abc   :   6.823618   6.823618   7.566454
angles:  90.000000  90.000000  96.650518
pbc   :       True       True       True
Sites (16)
  #  SP           a         b         c
---  ----  --------  --------  --------
  0  Na    0         0         1
  1  Na    0         0         0.5
  2  Na    0.704707  0.295293  0.75
  3  Na    0.295293  0.704707  0.25
  4  Na    0.5       0         1
  5  Na    0.5       0         0.5
  6  Na    0         0.5       0.5
  7  Na    0         0.5       0
  8  Cl    0.5       0.5       0
  9  Cl    0.5       0.5       0.5
 10  Cl    0.484753  0.515247  0.75
 11  Cl    0.515247  0.484753  0.25
 12  Cl    0.828247  0.171753  0.851096
 13  Cl    0.171753  0.828247  0.351096
 14  Cl    0.828247  0.171753  0.648904
 15  Cl    0.171753  0.828247  0.148904

ID 1
Full Formula (Na8 Cl8)
Reduced Formula: NaCl
abc   :   8.145021   8.145021   4.324235
angles:  90.000000  90.000000 120.000000
pbc   :       True       True       True
Sites (16)
  #  SP            a          b         c
---  ----  ---------  ---------  --------
  0  Na     0.666667   0.333333  0.736206
  1  Na     0.666667   0.333333  0.263794
  2  Na     0.913147   0.086853  0.5
  3  Na     0.913147   0.826295  0.5
  4  Na     0.173705   0.086853  0.5
  5  Na     0.77711    0.22289   0
  6  Na     0.77711    0.55422   0
  7  Na     0.44578    0.22289   0
  8  Cl     0.027675   0.423376  0.5
  9  Cl    -0.423376  -0.395701  0.5
 10  Cl     0.395701  -0.027675  0.5
 11  Cl    -0.423376  -0.027675  0.5
 12  Cl     0.395701   0.423376  0.5
 13  Cl     0.027675  -0.395701  0.5
 14  Cl     0.333333   0.666667  0.5
 15  Cl     0          0         0
```

### 構造ID
``` zsh
extract_struc.py opt_struc_data.pkl -i 7 10 12
```
以下のファイルが出力される．

`7.cif`，`10.cif`，`12.cif`

対称性の情報ありの場合は`-s`オプションをつける．
``` zsh
extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
```

2024 April 16  
toleranceパラメーター（デフォルトは0.01）を指定する場合
``` zsh
extract_struc.py opt_struc_data.pkl -i 7 10 12 -s --tolerance 0.01
```

### Top k 構造
{{% notice info %}}
`rslt_data.pkl` がインプット（`init_struc_data.pkl`か`opt_struc_data.pkl`）と同じディレクトリに必要．
{{% /notice %}}

ここでは以下のようにファイルが存在して，
- ./data/pkl_data/opt_struc_data.pkl
- ./data/pkl_data/rslt_data.pkl

`cryspy_rslt_energy_asc`の中身が下記のものを仮定すると
``` text
    Spg_num     Spg_sym  Spg_num_opt Spg_sym_opt    E_eV_atom  Magmom      Opt
9       110      I4_1cd          110      I4_1cd -1284.708037     NaN  not_yet
16        4        P2_1            4        P2_1 -1284.693651     NaN     done
97       92    P4_12_12           91      P4_122 -1284.692494     NaN     done
8        57        Pbcm           57        Pbcm -1284.668504     NaN     done
81       19  P2_12_12_1           19  P2_12_12_1 -1284.635684     NaN     done
...
```
トップk (ここではk=3) の構造は下記コマンドで出力できる．
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3
```
ここでは`rlst_data.pkl`は`./data/pkl_data/`の中に存在しなければならない.
`9.cif`, `16.cif`, `97.cif`というファイルが出力される．

`-r`オプションを使うと，ファイル名に順位を含めることができる．
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -r
```
ファイル名は`1_9.cif`, `2_16.cif`, `3_97.cif`のようになる．

対称化されたcifの場合は下記のようにする．
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -rs
```


### 全構造
構造が多い場合はディレクトリを先に作った方が良い．

``` zsh
mkdir init_cifs
cd init_cifs
extract_struc.py /path/to/opt_struc_data.pkl -a
```

対称化する場合，
``` zsh
extract_struc.py /path/to/init_struc_data.pkl -as
```


### gzipファイル
2024 April 16  
gzipされたファイル（拡張子が`.gz`）も読み込み可能：
``` zsh
extract_struc.py opt_struc_data.pkl.gz -i 0 1 -s
```