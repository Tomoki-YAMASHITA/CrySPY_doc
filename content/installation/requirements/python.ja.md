---
title: "Python"
weight: 10
---

## Python

### CrySPY 1.1.0 or later

+ Python >= 3.8
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.5.3)
  - (optional) mpi4py
  - (optional, required if algo is BO) [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>

If you install cryspy with pip, necessary libraries such as PyXtal will be installed automatically.
Go to [Installation > CrySPY]({{< relref "installation/cryspy" >}}).
Manual installation of COMBO is required when using Bayesian optimization.

### CrySPY 1.0.0

+ Python >= 3.8
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.5.3)
  - (optional, required if algo is BO) [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>

{{% notice info %}}
[2023 April 22] PyXtal (pyshtools)をarm64のMacOSにインストールする方法がわかった．[Arm64 on MacOS (without Rosseta 2)]({{< relref "installation/cryspy/cryspy_1.0.md#arm64-on-macos-without-rosseta-2" >}})を参照．  
[2023 March 15]
MacOSのarm64環境でのpyxtalのインストールが難しいので，Rosetta 2を使用してx86_64環境での利用が推奨．
{{% /notice %}}

### CrySPY 0.10.0 -- 0.10.3
Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.

+ Python 3.x.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.2.2)
  - (PyXtal requires pymatgen) [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (>= 2022.x.x)

### CrySPY 0.9.2

Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.

+ Python 3.x.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (>= 2022.x.x)
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.2.2)

{{% notice info %}}
[2021 July 15]
PyXtal 0.2.9以上を使う場合は，CrySPYを0.10.0以上にアップデートすること．
{{% /notice %}}

{{% notice info %}}
[2021 March 18]
pymatgen 2022.x.x.でbreaking changeがあって，importの書き方等が変わった． CrySPY 0.9.2とPyXtal 0.2.2はpymatgen 2022をサポート．
{{% /notice %}}

{{% notice info %}}
[2021 Feb. 5]
PyXtalを使うにはnumbaが必要だが，numbaは現在のところPython 3.9に対応していないのでしばらくはPython 3.9ではなくPython 3.8を利用する．  
[2021 March 18]
numbaがPython 3.9.xをサポート．CrySPYもPython 3.9で動作可能
{{% /notice %}}

{{% notice info %}}
[2021 Feb. 7]
PyXtalではSciPyが使われているが, 最新のSciPy(v1.6.0)ではdeepcopyを使うとバグが出る．
SciPyはv1.5.4を利用する．  
[2021 March 18] 上記バグはSciPy 1.6.1で修正された．
{{% /notice %}}

### CrySPY 0.9.0 -- 0.9.1

+ Python 3.8.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (<= 2021.x.x)
  - [PyXtal 0.1.6 - 0.2.1](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i>



### CrySPY 0.8.0 or earlier

CrySPY本体に同梱されている古いドキュメントを見ること．


