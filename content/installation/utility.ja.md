---
title: "CrySPYユーティリティ (オプション)"
weight: 40
---

ローカルPCにPython環境を構築しておくと，計算結果の解析および可視化を行うのに便利である．
jupyter notebookやPythonスクリプトなどのユーティリティツールが利用できる．
入力ファイルのexamplesもCrySPYユーティリティに含まれている．

{{% notice style="info" %}}
See also [cryspy_utility]({{< ref "/cryspy_utility" >}})
{{% /notice %}}

ユーティリティツールを使うには以下のライブラリ等が必要になる．

- [jupyter](https://jupyter.org/)<i class="fas fa-external-link-alt"></i>
- [NumPy](https://numpy.org/)<i class="fas fa-external-link-alt"></i>
- [pandas](https://pandas.pydata.org/)<i class="fas fa-external-link-alt"></i>
- [matplotlib](https://matplotlib.org/)<i class="fas fa-external-link-alt"></i>
- [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i>


## ユーティリティツールのダウンロード

### Git

``` zsh
$ git clone https://github.com/Tomoki-YAMASHITA/CrySPY_utility.git
```

### zip

[CrySPY utility](https://github.com/Tomoki-YAMASHITA/CrySPY_utility)<i class="fas fa-external-link-alt"></i>へ飛んで，緑の`Code`と書かれたボタンをクリック，`Download ZIP`を選んでダウンロード.

## Compile cal_fingerprint
ベイズ最適化を使うときは構造記述子を計算するための`cal_fingerpirnt`プログラムをコンパイルする．
Fortranコンパイラが必要になる．
ワークステーションやスパコンなどのCrySPYを用いる環境にインストールする．

``` bash
cd CrySPY_utility/f-fingerprint
emacs Makefile
make
```

実行ファイルの扱いに関しては[Installation/CrySPY]({{< ref "installation/cryspy/" >}})も参照.