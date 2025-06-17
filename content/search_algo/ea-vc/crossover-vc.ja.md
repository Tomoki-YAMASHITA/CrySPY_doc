---
title: "Crossover (vc)"
weight: 100
---

組成可変型のcrossoverは，[組成固定型のバージョン]({{< ref "search_algo/ea/crossover" >}})とほとんど同じであるが，原子数の調整が最小限に抑えられている点が異なる．
[組成固定型crossoverのステップ6]({{< ref "search_algo/ea/crossover#6-select-the-offspring-with-more-atoms" >}})では，各原子種ごとの原子数の差を直接計算する．
一方，crossover（vc）では，`ll_nat` と `ul_nat` で定義された許容範囲に基づいて原子数の差を計算する．
例えば，次のようになる：

``` python
ll_nat = [4, 4, 4]
ul_nat = [8, 8, 8]
offspring_nat = [2, 6, 12]
nat_diff = [-2, 0, 4]
```

上記の例でいう `nat_diff` にあたる原子数の差が，許容値 `nat_diff_tole` を超えている場合は，この操作はやり直される．
そうでない場合は，原子数が `ll_nat` と `ul_nat` で定義された範囲に収まるように調整される．
