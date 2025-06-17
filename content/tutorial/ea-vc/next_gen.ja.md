---
title: "次世代の生成"
weight: 100
---

2025年6月16日

## 初回実行
`cryspy`を実行すると，構造生成モードになり，第一世代のランダム構造が生成されて，一旦プログラムは終了する．
``` bash
cryspy
```
出力をみると，`ll_nat`と`ul_nat`の範囲の原子数で構造が生成されているのが確認できる．
``` bash
...
[2025-06-16 10:04:45,648][cryspy_init][INFO] # ---------- Initial structure generation
[2025-06-16 10:04:45,648][rs_gen][INFO] # ------ mindist
[2025-06-16 10:04:45,650][struc_util][INFO] Cu - Cu: 1.32
[2025-06-16 10:04:45,650][struc_util][INFO] Cu - Ag: 1.385
[2025-06-16 10:04:45,650][struc_util][INFO] Cu - Au: 1.34
[2025-06-16 10:04:45,650][struc_util][INFO] Ag - Ag: 1.45
[2025-06-16 10:04:45,650][struc_util][INFO] Ag - Au: 1.405
[2025-06-16 10:04:45,650][struc_util][INFO] Au - Au: 1.36
[2025-06-16 10:04:45,650][rs_gen][INFO] # ------ generate structures
[2025-06-16 10:04:45,659][gen_pyxtal][WARNING] Compoisition [1 4] not compatible with symmetry 34:     spg = 34 retry.
[2025-06-16 10:04:45,662][gen_pyxtal][WARNING] Compoisition [ 2  2 12] not compatible with symmetry 39:     spg = 39 retry.
[2025-06-16 10:04:45,691][gen_pyxtal][INFO] Structure ID      0: (3, 1, 2) Space group:  82 --> 119 I-4m2
[2025-06-16 10:04:45,694][gen_pyxtal][WARNING] Compoisition [6 6 2] not compatible with symmetry 57:     spg = 57 retry.
[2025-06-16 10:04:45,749][gen_pyxtal][INFO] Structure ID      1: (1, 8, 5) Space group:  71 -->  71 Immm
[2025-06-16 10:04:45,857][gen_pyxtal][INFO] Structure ID      2: (3, 7, 8) Space group: 174 --> 174 P-6
...
```

`cryspy.stat`を見ると，EAでは現在の世代の情報が追加されている．
``` bash
[status]
generation = 1
id_queueing = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
```


## 構造最適化
何度か`cryspy`を実行して，第一世代の構造最適化を終わらせると，下記のように出力される．
``` bash
...
[2025-06-16 10:25:56,962][ctrl_job][INFO] Done generation 1
[2025-06-16 10:25:56,962][ctrl_job][INFO] Calculate convex hull for generation 1
[2025-06-16 10:25:57,854][ctrl_job][INFO] 
EA is ready
```

## 凸包
この時点で，`./data/convex_hull/`にhull distanceの情報とconvex hullのグラフが出力されている．

- hull_dist_all_gen_1
``` bash
    ID    hull distance (eV/atom)    Num_atom
     7                   0.000000    (0, 2, 6)
    14                   0.036510    (1, 7, 6)
    17                   0.064702    (0, 1, 5)
    19                   0.113649    (0, 0, 8)
    16                   0.168530    (6, 4, 8)
     9                   0.186497    (8, 4, 6)
     1                   0.187379    (1, 8, 5)
    11                   0.233893    (4, 5, 4)
     3                   0.273365    (6, 5, 5)
    10                   0.326759    (1, 4, 4)
     2                   0.330749    (3, 7, 8)
     8                   0.359543    (6, 2, 7)
     4                   0.404169    (4, 4, 2)
    18                   0.422989    (0, 6, 8)
    13                   0.428456    (0, 6, 3)
     5                   0.444792    (7, 4, 7)
     6                   0.464305    (7, 7, 7)
    12                   0.556654    (3, 0, 0)
    15                   0.560062    (6, 7, 1)
     0                   0.644278    (3, 1, 2)
```

- conv_hull_gen_1.svg
![conv_hull_gen_1.svg](/images/tutorial/EA-vc/3d/conv_hull_gen_1.svg?width=40vw)

## 次世代生成
準備ができた状態でもう一度`cryspy`を実行すると，[バックアップ]({{< ref "features/backup" >}})が実行されてから，次世代構造の生成が始まる．
``` bash
cryspy
```
``` bash
...
[2025-06-16 10:37:19,860][ctrl_job][INFO] Done generation 1
[2025-06-16 10:37:20,136][utility][INFO] Backup data
[2025-06-16 10:37:20,173][ea_next_gen][INFO] # ---------- Evolutionary algorithm
[2025-06-16 10:37:20,174][ea_next_gen][INFO] Generation 2
[2025-06-16 10:37:20,174][ea_next_gen][INFO] # ------ natural selection
[2025-06-16 10:37:20,177][ea_next_gen][INFO] ranking without duplication (including elite):
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID      7, fitness:    0.00000
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     14, fitness:    0.03651
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     17, fitness:    0.06470
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     19, fitness:    0.11365
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     16, fitness:    0.16853
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID      9, fitness:    0.18650
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID      1, fitness:    0.18738
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     11, fitness:    0.23389
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID      3, fitness:    0.27336
[2025-06-16 10:37:20,177][ea_next_gen][INFO] Structure ID     10, fitness:    0.32676
[2025-06-16 10:37:20,177][ea_next_gen][INFO] # ------ Generate children
[2025-06-16 10:37:20,177][ea_child][INFO] # -- mindist
[2025-06-16 10:37:20,179][struc_util][INFO] Cu - Cu: 1.32
[2025-06-16 10:37:20,179][struc_util][INFO] Cu - Ag: 1.385
[2025-06-16 10:37:20,179][struc_util][INFO] Cu - Au: 1.34
[2025-06-16 10:37:20,179][struc_util][INFO] Ag - Ag: 1.45
[2025-06-16 10:37:20,179][struc_util][INFO] Ag - Au: 1.405
[2025-06-16 10:37:20,179][struc_util][INFO] Au - Au: 1.36
[2025-06-16 10:37:20,217][crossover][INFO] Structure ID     20 (0, 4, 7) was generated from     19 and     14 by crossover. Space group:   1 P1
[2025-06-16 10:37:20,219][crossover][INFO] Structure ID     21 (0, 1, 7) was generated from      7 and     17 by crossover. Space group:   1 P1
[2025-06-16 10:37:20,221][crossover][INFO] Structure ID     22 (3, 0, 8) was generated from     16 and     19 by crossover. Space group:   1 P1
[2025-06-16 10:37:20,225][crossover][INFO] Structure ID     23 (0, 1, 7) was generated from      7 and     17 by crossover. Space group:   1 P1
...
[2025-06-16 10:37:20,809][ea_next_gen][INFO] # ------ Select elites
[2025-06-16 10:37:20,809][ea_next_gen][INFO] Structure ID      7 keeps as the elite
[2025-06-16 10:37:20,809][ea_next_gen][INFO] Structure ID     14 keeps as the elite
```

あとは`cryspy`の実行を繰り返せば，探索が進む．