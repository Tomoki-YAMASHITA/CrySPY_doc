---
title: "CrySPY 1.0.0 or later"
weight: 20
---

## CrySPY
### pip
CrySPY 1.0.0以降はpipを使ってインストール可能になった．

``` bash
pip install csp-cryspy
```
pipでインストールすると，実行スクリプトの`cryspy`が自動的にPATHが通ったところにインストールされる．
下記コマンドでチェックできる．

``` bash
which cryspy
```

### 編集可能モード
CrySPYのソースコードを編集したい時は，pipの編集可能モード（-e オプション）を使うのが便利．

``` bash
git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git
pip install -e ./CrySPY
```
git cloneの代わりに，[release page](https://github.com/Tomoki-YAMASHITA/CrySPY/releases)<i class="fas fa-external-link-alt"></i>から圧縮ファイルをダウンロードしてもよい．


## cal_fingerprint (optional)
cal_fingerprintプログラムは構造記述子を計算するためのもので，アルゴリズにベイズ最適化を使う場合は必須．
CrySPY 1.0.0からはcal_fingerprintプログラムはCrySPY utilityに含まれている．
コンパイルについてはこちらを参照：[Instllation/CrySPY_utility/Compile cal_fingerprint]({{< relref "../utility.md/#compile-cal_fingerprint" >}})．

実行ファイル`cal_fingerprint`をPATHが通ったところに置く，もしくは下記のように`cryspy.in`で実行ファイルのpathを指定する．
```
[BO]
fppath = /xxx/xxx/xxx/cal_fingerprint
```


## Arm64 on MacOS (without Rosseta 2)

{{% notice style="info" %}}
PyXtalではversion 0.6.3からpyshtoolsが必須ではなくなったので，最近のバージョンのpyxtalを使う場合は以下に書いてあることは無視して良い
{{% /notice %}}

1. [miniforge3](https://github.com/conda-forge/miniforge)<i class="fas fa-external-link-alt"></i>をインストール（homebrew pythonでpyshtoolsをインストールする方法が今のところ不明）
2. condaでpymatgen，pyshtoolsをインストール（最近のバージョンのpyshtoolsはconda-forgeからインストール可能になった）
``` bash
conda install pymatgen
conda install pyshtools
```
3. CrySPYをインストール
``` bash
pip3 install csp-cryspy
```