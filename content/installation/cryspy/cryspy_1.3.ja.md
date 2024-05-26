---
title: "CrySPY 1.3.0 or later"
weight: 18
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


## DScribe (option)
ベイズ最適化を使う場合は，結晶構造の記述子の計算に[DScribe](https://singroup.github.io/dscribe/latest/#)<i class="fas fa-external-link-alt"></i>が必要．

``` bash
pip install dscribe
```

## cal_fingerprint (obsolete)

{{% notice style="info" %}}
cal_fingerprintの使用をやめた
{{% /notice %}}

