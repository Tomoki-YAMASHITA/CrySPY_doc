---
title: "シミュレーションの途中でnjobを変えることはできますか？"
weight: 100
---

2024年5月7日

## シミュレーションの途中でnjobを変えることはできますか？

いつでも変えられます．

下記はnjobを減らした時の例です．

{{% notice style="warning" %}}
CriSPYのバージョンが1.2.3以下ではバグがあるので，njobを減らすのは避けること．
{{% /notice %}}

今，`njob = 4`でID 0, 1, 2, 3のジョブが流れているところで，`njob`を4から2に変更したとする．

``` bash
$ cryspy
[2024-04-28 18:27:41,847][cryspy_restart][INFO] 


Restart CrySPY 1.2.4


[2024-04-28 18:27:41,848][read_input][INFO] Changed njob from 4 to 2
[2024-04-28 18:27:42,335][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:27:42,335][ctrl_job][INFO] ID      0: still queueing or running
[2024-04-28 18:27:42,335][ctrl_job][INFO] ID      1: still queueing or running
```

`njob`を2に減らしたので，ID 0, 1だけチェックして，ID 2, 3は無視．

``` bash
$ cryspy
[2024-04-28 18:29:25,250][cryspy_restart][INFO] 


Restart CrySPY 1.2.4


[2024-04-28 18:29:25,744][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:29:25,744][ctrl_job][INFO] ID      0: Stage 1 Done!
[2024-04-28 18:29:25,757][ctrl_job][INFO]     submitted job, ID      0 Stage 2
[2024-04-28 18:29:25,758][ctrl_job][INFO] ID      1: Stage 1 Done!
[2024-04-28 18:29:25,767][ctrl_job][INFO]     submitted job, ID      1 Stage 2
```

ID 1, 2のジョブが終わったので，次の2つのジョブ（ID 2, 3）をチェックしに行く．

``` bash
$ cryspy
[2024-04-28 18:31:30,830][cryspy_restart][INFO]


Restart CrySPY 1.2.4


[2024-04-28 18:31:31,329][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:31:31,329][ctrl_job][INFO] ID      0: Stage 2 Done!
[2024-04-28 18:31:31,329][collect_vasp][WARNING]     Structure ID 0, could not obtain energy from OSZICAR
[2024-04-28 18:31:31,333][ctrl_job][INFO]     collect results: E = nan eV/atom
[2024-04-28 18:31:31,341][ctrl_job][INFO] ID      1: Stage 2 Done!
[2024-04-28 18:31:31,341][collect_vasp][WARNING]     Structure ID 1, could not obtain energy from OSZICAR
[2024-04-28 18:31:31,342][ctrl_job][INFO]     collect results: E = nan eV/atom
[2024-04-28 18:31:31,347][cryspy][INFO] 

recheck 1

[2024-04-28 18:31:31,347][ctrl_job][INFO] # ---------- job status
[2024-04-28 18:31:31,347][ctrl_job][INFO] ID      2: Stage 1 Done!
[2024-04-28 18:31:31,358][ctrl_job][INFO]     submitted job, ID      2 Stage 2
[2024-04-28 18:31:31,358][ctrl_job][INFO] ID      3: Stage 1 Done!
[2024-04-28 18:31:31,368][ctrl_job][INFO]     submitted job, ID      3 Stage 2
```
