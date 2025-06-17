---
title: "Submit job"
weight: 150
---

2024年4月21日更新，日本語化

## 計算再開

CrySPYは`cryspy.stat`ファイルがあれば自動的に計算を再開する．

{{% notice tip %}}
`crypy.stat`があれば続きから再開．  
はじめから計算をしたければ`cryspy.stat`を削除する．
{{% /notice %}}



## ジョブの投入

cryspyをもう一度実行する．

``` zsh
cryspy
```

画面か`log_cryspy`ファイルに下記のように出力される．


``` txt
[2023-07-10 18:52:51,859][cryspy_restart][INFO] 


Restart CrySPY 1.2.0


[2023-07-10 18:52:51,869][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:52:51,904][ctrl_job][INFO] ID      0: submit job, Stage 1
[2023-07-10 18:52:51,931][ctrl_job][INFO] ID      1: submit job, Stage 1
```


`cryspy.stat`でステータスが確認できる．

``` txt
...
(omit)
...
[status]
id_queueing = 2 3 4
id      0 = Stage 1
id      1 = Stage 1
```
`cryspy.in`で`njob = 2`に設定されているので，CrySPYは構造ID 0と1の二つのジョブをサブミットした．
計算は`work`ディレクトリの中で行われる．各構造IDのディレクトリが作られる．
``` zsh
tree -d work
```
``` txt
work
├── 000000
├── 000001
└── fin
```

二つのジョブが終了したら，もう一度cryspyを実行する．


``` zsh
cryspy
```
``` zsh
[2023-07-10 18:55:01,053][cryspy_restart][INFO] 


Restart CrySPY 1.2.0


[2023-07-10 18:55:01,058][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:55:01,058][ctrl_job][INFO] ID      0: Stage 1 Done!
[2023-07-10 18:55:01,093][ctrl_job][INFO]     collect results: E = -0.00696997755502915 eV/atom
[2023-07-10 18:55:01,132][ctrl_job][INFO] ID      1: Stage 1 Done!
[2023-07-10 18:55:01,133][ctrl_job][INFO]     collect results: E = 0.4934076667166454 eV/atom
[2023-07-10 18:55:01,144][cryspy][INFO] 

recheck 1

[2023-07-10 18:55:01,145][ctrl_job][INFO] # ---------- job status
[2023-07-10 18:55:01,153][ctrl_job][INFO] ID      2: submit job, Stage 1
[2023-07-10 18:55:01,161][ctrl_job][INFO] ID      3: submit job, Stage 1
```
もし`nstage = 2`のようにnstageを2以上に設定していれば，ID 0と1のstage 2のジョブがサブミットされる．
今回は`nstage = 1`なので，ID 0と1の計算データを収集して，次のIDのジョブをサブミットする．
計算が終わった構造のディレクトリは`fin`ディレクトリに移動される．

5構造全ての計算が終わるまで`cryspy`を繰り返し実行する．
すべての計算が終わって，計算結果の詳細が必要なければ`work`ディレクトリを削除しても良い．

何度も何度もcryspyを繰り返し実行する時は，自動スクリプト（[repeat_cryspy]({{< ref "/cryspy_utility/repeat" >}})）が役に立つ．