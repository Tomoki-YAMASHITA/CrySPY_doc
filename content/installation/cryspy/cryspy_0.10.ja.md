---
title: "CrySPY 0.10.3 or earlier"
weight: 30
---

CrySPYのインストールはシンプルで，ダウンロードするだけで良い．


## ダウンロード
CrySPYは任意の場所に置いて良い．ここでは例として`~/CrySPY_root/CrySPY-x.x.x` (x.x.x はバージョン番号)にダウンロードすることにする．
gitコマンドを使うか，リリースページから圧縮ファイルをダウンロードする．

### Git

``` bash
mkdir ~/CrySPY_root
cd ~/CrySPY_root
git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git CrySPY-x.x.x
```

### zip or tar.gz file
zip または tar.gz ファイルをここからダウンロードする．{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY/releases" icon="fas fa-download" %}} GitHub release {{% /button %}}.  
ダウンロードして展開したソースを`~/CrySPY_root/CrySPY-x.x.x`に置く．




## ディレクトリ構成

`~/CrySPY_root/CrySPY-x.x.x/`のディレクトリ構成:

``` bash
CrySPY-x.x.x
├── CHANGELOG.md
├── CrySPY/
│   ├── BO/
│   ├── EA/
│   ├── IO/
│   ├── LAQA/
│   ├── RS/
│   ├── __init__.py
│   ├── calc_dscrpt/
│   ├── f-fingerprint/
│   ├── find_wy/
│   ├── gen_struc/
│   ├── interface/
│   ├── job/
│   └── start/
│   └── utility.py
├── LICENSE
├── README.md
├── cryspy.py
├── docs/
├── example/
└── utility/
```

{{% notice info %}}
`cryspy.py`がメインスクリプト．
{{% /notice %}}



## セットアップ (オプション)

### find_wy (オプション)
find_wyを使う時は，find_wyの実行ファイルを（例えば）`~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/`以下に置く必要がある．
つまり`~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy`.

``` bash
cd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy
cp ~/local/find_wy/find_wy .
```


### cal_fingerprintのコンパイル (オプション)
ベイズ最適化を使う場合は，構造の記述子を計算するためのプログラムである`cal_fingerpirnt`をコンパイルする必要がある．

``` bash
cd ~/CrySPY_root/x.x.x/CrySPY/f-fingerprint
emacs Makefile
make
```

`cal_fingerprint`の実行ファイルが例えば`~/CrySPY_root/x.x.x/CrySPY/f-fingerprint/`以下にあるようにする．
コンパイルすれば自動的にそうなるはず．
