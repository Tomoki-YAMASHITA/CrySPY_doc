---
title: "次世代の生成"
weight: 100
---

2025年4月6日

## 初回実行
`cryspy`を実行すると，構造生成モードになり，第一世代のランダム構造が生成されて，一旦プログラムは終了する．
``` bash
cryspy
```
出力
``` bash
...
[2025-04-06 09:15:34,720][ea_init][INFO] # ---------- Initialize evolutionary algorithm
[2025-04-06 09:15:34,720][ea_init][INFO] # ------ Generation 1
[2025-04-06 09:15:34,720][ea_init][INFO] 10 structures by random
```

`cryspy.stat`を見ると，EAでは現在の世代の情報が追加されている．
``` bash
[status]
generation = 1
id_queueing = 0 1 2 3 4 5 6 7 8 9
```


## 構造最適化
何度か`cryspy`を実行して，第一世代の構造最適化を終わらせると，下記のように出力される．
``` bash
...
[2025-04-06 09:20:26,218][ctrl_job][INFO] Done generation 1
[2025-04-06 09:20:26,218][ctrl_job][INFO] 
EA is ready
```

## 次世代生成
準備ができた状態でもう一度`cryspy`を実行すると，[バックアップ]({{< ref "features/backup" >}})が実行されてから，次世代構造の生成が始まる．
``` bash
cryspy
```
``` bash
...
[2025-04-06 09:35:11,546][cryspy_restart][INFO] read input, cryspy.in
[2025-04-06 09:35:11,554][ctrl_job][INFO] # ---------- job status
[2025-04-06 09:35:11,554][ctrl_job][INFO] Done generation 1
[2025-04-06 09:35:11,554][utility][INFO] Backup data
[2025-04-06 09:35:11,611][ea_next_gen][INFO] # ---------- Evolutionary algorithm
[2025-04-06 09:35:11,611][ea_next_gen][INFO] Generation 2
[2025-04-06 09:35:11,613][ea_next_gen][INFO] # ------ natural selection
[2025-04-06 09:35:11,687][ea_next_gen][INFO] ranking without duplication (including elite):
[2025-04-06 09:35:11,687][ea_next_gen][INFO] Structure ID      1, fitness:   -0.00530
[2025-04-06 09:35:11,687][ea_next_gen][INFO] Structure ID      3, fitness:    0.01490
[2025-04-06 09:35:11,687][ea_next_gen][INFO] Structure ID      4, fitness:    0.04485
[2025-04-06 09:35:11,687][ea_next_gen][INFO] Structure ID      7, fitness:    0.11501
[2025-04-06 09:35:11,687][ea_next_gen][INFO] Structure ID      8, fitness:    0.15254
[2025-04-06 09:35:11,687][ea_next_gen][INFO] # ------ Generate children
[2025-04-06 09:35:11,687][ea_child][INFO] # -- mindist
[2025-04-06 09:35:11,689][struc_util][INFO] Cu - Cu: 1.32
[2025-04-06 09:35:11,689][struc_util][INFO] Cu - Au: 1.34
[2025-04-06 09:35:11,689][struc_util][INFO] Au - Au: 1.36
[2025-04-06 09:35:11,740][crossover][INFO] Structure ID     10 (8, 8) was generated from      3 and      1 by crossover. Space group:   1 P1
[2025-04-06 09:35:11,764][crossover][WARNING] remove_within_mindist: some atoms within mindist. retry.
[2025-04-06 09:35:11,774][crossover][INFO] Structure ID     11 (8, 8) was generated from      3 and      1 by crossover. Space group:   1 P1
[2025-04-06 09:35:11,789][crossover][INFO] Structure ID     12 (8, 8) was generated from      1 and      4 by crossover. Space group:   1 P1
[2025-04-06 09:35:11,833][crossover][INFO] Structure ID     13 (8, 8) was generated from      1 and      3 by crossover. Space group:   1 P1
[2025-04-06 09:35:11,852][crossover][WARNING] mindist in _add_border_line: Cu - Cu, 0.567032320824818. retry.
[2025-04-06 09:35:11,861][crossover][INFO] Structure ID     14 (8, 8) was generated from      7 and      1 by crossover. Space group:   1 P1
[2025-04-06 09:35:11,875][permutation][INFO] Structure ID     15 (8, 8) was generated from      1 by permutation. Space group: 146 R3
[2025-04-06 09:35:11,888][permutation][INFO] Structure ID     16 (8, 8) was generated from      3 by permutation. Space group:   1 P1
[2025-04-06 09:35:11,890][strain][WARNING] mindist in strain: Cu - Cu, 1.3050485787603692. retry.
[2025-04-06 09:35:11,903][strain][INFO] Structure ID     17 (8, 8) was generated from      3 by strain. Space group:   1 P1
[2025-04-06 09:35:11,917][strain][INFO] Structure ID     18 (8, 8) was generated from      1 by strain. Space group:   1 P1
[2025-04-06 09:35:12,513][ea_child][INFO] # ------ Random structure generation
[2025-04-06 09:35:12,513][rs_gen][INFO] # ------ mindist
[2025-04-06 09:35:12,515][struc_util][INFO] Cu - Cu: 1.32
[2025-04-06 09:35:12,515][struc_util][INFO] Cu - Au: 1.34
[2025-04-06 09:35:12,515][struc_util][INFO] Au - Au: 1.36
[2025-04-06 09:35:12,516][rs_gen][INFO] # ------ generate structures
[2025-04-06 09:35:12,530][gen_pyxtal][INFO] Structure ID     19: (8, 8) Space group:  86 -->  86 P4_2/n
[2025-04-06 09:35:12,533][ea_next_gen][INFO] # ------ Select elites
[2025-04-06 09:35:12,533][ea_next_gen][INFO] Structure ID      9 keeps as the elite
```

あとは`cryspy`の実行を繰り返せば，探索が進む．