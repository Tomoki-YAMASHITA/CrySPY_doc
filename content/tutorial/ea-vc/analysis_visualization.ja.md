---
title: "解析と可視化"
weight: 300
---

## 凸包の自動プロット
EA-vcでは2元系および3元系の探索シミュレーションの場合，凸包のグラフは各世代の計算終了時に自動プロットされる．
自分でもっと編集したい場合はJupyterでカスタマイズできる．
4元系の時はJupyterを用いたplotly（pymatgenに必要なのでインストールされているはず）の可視化が利用可能．
ここではいくつか例を示しておく．

### 2元系

![conv_hull_gen_3_with_desc.svg](/images/tutorial/EA-vc/2d/conv_hull_gen_3_with_desc.svg?width=40vw)

上図は3世代まで探索した時の例で，赤文字は説明のために追加した．
凸包プロットに関する入力ファイルの設定は以下が関係する．括弧内はデフォルト値．

- `show_max`：y軸上限（0.2）
- `label_stable`：安定相の組成を表示するかどうか（True）
- `vmax`：右のカラーバーの最大値（0.2）
- `bottom_margin`：最小値とy軸下限の間のマージン（0.02）．
- `fig_format`：図のファイルフォーマット．svg, png, pdfに対応．（svg）

マーカー上の十字の印は最新世代の探索結果を示している．

### 3元系

![conv_hull_gen_3_with_desc.svg](/images/tutorial/EA-vc/3d/conv_hull_gen_3_with_desc.svg?width=40vw)

上図は3世代まで探索した時の例で，赤文字は説明のために追加した．
凸包プロットに関する入力ファイルの設定は以下が関係する．括弧内はデフォルト値．

- `show_max`：hull distanceがshow_max以下のものだけをプロット（0.2）
- `label_stable`：安定相の組成を表示するかどうか（True）
- `vmax`：右のカラーバーの最大値（0.2）
- `bottom_margin`：3元系では無関係
- `fig_format`：図のファイルフォーマット．svg, png, pdfに対応．（svg）

マーカーの十字の印は最新世代の探索結果を示している．


## データのダウンロード
ここでは，CrySPYのデータをローカルPCで解析・可視化することを前提としている．
CrySPYをスーパーコンピュータやワークステーションで使用している場合は，データをローカルPCにダウンロードすること．
`work` や `backup` ディレクトリは，ファイルサイズが非常に大きくなる可能性があるため，不要であれば削除してよい．


## Jupyter notebook

先ほどダウンロードした結果の中にある `data/` ディレクトリに移動する．
その後，[CrySPY utilityがローカルにダウンロード]({{< ref "/installation/utility.md" >}}) してある場合は `cryspy_analyzer_EA-vc.ipynb` をコピーする．
またはGitHubから直接ダウンロードしてくる（[CrySPY_utility/notebook/](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/notebook)）．

Jupyter notebookファイルには，CrySPYのコードと同じ関数が書かれており，自由に凸包のプロットをカスタマイズできる．
適宜順番に実行していき，下記のどちらかを選ぶと自動プロットと同じものが得られる

- Binary system, matplotlib
- Ternary system, matplotlib

途中にある

- Interactive plot using Plotly

では，2元系，3元系および4元系において，Plotlyを用いたインタラクティブプロットができる．
プロット例は[CrySPY > チュートリアル > インタラクティブモード（Jupyter Notebook） #Interactive plot using Plotly]({{< ref "tutorial/interactive#interactive-plot-using-plotly" >}})を参考にすること．
