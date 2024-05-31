---
title: "CrySPY 1.3.0 or later"
weight: 18
---

## CrySPY
### pip

``` bash
pip install csp-cryspy
```
**PyPIではcryspyではなく，csp-cryspyという名前なので注意．**
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


## PHYSBO and DScribe (option)
ベイズ最適化を使う場合は， [PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i>と
[DScribe](https://singroup.github.io/dscribe/latest/#)<i class="fas fa-external-link-alt"></i>が必要．

``` bash
pip3 install physbo dscribe
```


{{% notice style="info" %}}
cal_fingerprint program and COMBO are obsolete.
{{% /notice %}}


