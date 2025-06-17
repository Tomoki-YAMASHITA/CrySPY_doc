---
title: "解析と可視化"
weight: 300
---

## データのダウンロード
ここでは，CrySPYのデータをローカルPCで解析・可視化することを前提としている．
CrySPYをスーパーコンピュータやワークステーションで使用している場合は，データをローカルPCにダウンロードすること．
`work` や `backup` ディレクトリは，ファイルサイズが非常に大きくなる可能性があるため，不要であれば削除してよい．


## Jupyter notebook

先ほどダウンロードした結果の中にある `data/` ディレクトリに移動する．
その後，[CrySPY utilityがローカルにダウンロード]({{< ref "/installation/utility.md" >}}) してある場合は `cryspy_analyzer_EA.ipynb` をコピーする．
またはGitHubから直接ダウンロードしてくる（[CrySPY_utility/notebook/](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/notebook)）．
Jupyter を起動し（VScode，Jupyter Lab，Jupyter Notebook など），
セルを順番に実行するだけで，以下のような図を得ることができる．

![Cu8Au8_EA](/images/tutorial/Cu8Au8_EA.svg?width=40vw)



