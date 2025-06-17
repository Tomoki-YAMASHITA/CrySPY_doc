+++
title = "pos2pkl.py"
weight = 40
chapter = false
+++

2023年7月23日更新

あらかじめ用意した構造のテキストデータを`init_struc_data.pkl`に変換するスクリプト．
入力のデフォルトは`init_POSCARS`形式．オプションでPOSCARやcifファイルなどのシングル構造データも変換可能．
出力は`init_struc_data.pkl`．
すでに存在する`init_struc_data.pkl`に構造データを追加することもできる．
構造IDは考慮されず，新しく割り振られる．
原子数が異なる場合はエラーが出る．

`init_struc_data.pkl`はCrySPYでシミュレーション開始時にロードすることが可能．

`-f`オプションで原子種の削除とソートが可能．このオプションを指定しないとpymatgenが勝手に電気陰性度の順番で並び替えるので注意！

## 使い方
``` zsh
usage: pos2pkl.py [-h] [-s [SINGLE ...]] [-f [FILTER ...]] [-p] [infile ...]

positional arguments:
  infile                input file: init_POSCARS

options:
  -h, --help            show this help message and exit
  -s [SINGLE ...], --single [SINGLE ...]
                        input file: single structure file (POSCAR, cif)
  -f [FILTER ...], --filter [FILTER ...]
                        filter (sort): remove species and sort
  -p, --permit_diff_comp
                        flag for permitting different composition
```

## 例
### init_POSCARS --> init_struc_data.pkl
CrySPYで構造生成後に出力される`init_POSCARS`をスパコン等の別のマシンに移すような場合に使える．複数のファイルを変換可能．

``` zsh
python3 pos2pkl.py init_POSCARS
```
`pos2pkl.py`をPATHが通ったところにおけば，`python3`は省略可能.
``` bash
pos2pkl.py init_POSCARS
```
``` bash
Composition: Na8 Cl8

Converted. The number of structures: 4
Save init_struc_data.pkl
```

複数の入力ファイルの場合．
``` zsh
python3 pos2pkl.py init_POSCARS init_POSCARS2 init_POSCARS3
```
``` bash
Composition: Na8 Cl8

Converted. The number of structures: 12
Save init_struc_data.pkl
```

カレントディレクトリにすでに`init_struc_data.pkl`が存在し，それに追加する場合．
``` zsh
python3 pos2pkl.py init_POSCARS
```
``` bash
init_struc_data.pkl already exists.
Append to init_struc_data.pkl? [y/n]: y

Load init_struc_data
Composition: Na8 Cl8
The number of structures: 12

Converted. The number of structures: 16
Save init_struc_data.pkl
```

### POSCAR or cif --> init_struc_data.pkl
POSCARファイルやcifファイル等の構造が一つだけのデータも変換可能．`-s/--single`オプションが必要．

``` zsh
python3 pos2pkl.py -s POSCAR test.cif
```
``` bash
Composition: Na8 Cl8

Converted. The number of structures: 2
Save init_struc_data.pkl
```

### init_POSCARS, POSCAR --> init_struc_data.pkl

``` zsh
python3 pos2pkl.py init_POSCARS -s POSCAR
```
``` bash
Composition: Na8 Cl8

Converted. The number of structures: 5
Save init_struc_data.pkl
```

{{% notice warning %}}
下記は間違い．`init_POSCARS`もシングル構造として取り扱われてしまう．
{{% /notice %}}

``` zsh
python3 pos2pkl.py -s POSCAR init_POSCARS
```

### Filter (remove and sort)
次のような組成のcifファイルを考える：Sr8 Co8 O20 X4．これはダミー原子(X4)を4原子含んでいる．
`-f/--filter`オプションは原子種を削除したり，ソートするのに使える．
`cryspy.in`の`atype`と同じように指定する．

``` bash
python3 pos2pkl.py -s Sr8Co8O20X4.cif -f Sr Co O
```
``` bash
Removed species: {'X0+'}
Composition: Sr8 Co8 O20

Converted. The number of structures: 1
Save init_struc_data.pkl
```

[extract_struc.py]({{< ref "/cryspy_utility/extract_struc" >}})を使えば，
`init_struc_data.pkl`にどのように登録されたのか確認できる．

``` bash
python3 extract_struc.py init_struc_data.pkl -pa
```
``` bash
ID 0
Full Formula (Sr8 Co8 O20)
Reduced Formula: Sr2Co2O5
...
```

`-f`オプションでソートもできる．
``` bash
python3 pos2pkl.py -s Sr8Co8O20X4.cif -f O Co 
```
``` bash
Removed species: {'Sr', 'X0+'}
Composition: O20 Co8

Converted. The number of structures: 1
Save init_struc_data.pkl
```