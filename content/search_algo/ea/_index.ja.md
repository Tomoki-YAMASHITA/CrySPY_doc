---
title: "進化的アルゴリズム (EA)"
weight: 30
---

2025 April 2

## 背景
進化的アルゴリズム（EA）は，進化論に着想を得たメタヒューリスティックな手法である．
EA は，これまでに探索された安定構造（親構造）の局所環境を受け継ぐことで，新たな構造（子個体）を効果的に生成することができる．
Oganov グループの [USPEX](https://uspex-team.org/en)<i class="fas fa-external-link-alt"></i> はよく知られたソフトウェアであり，そのほかにも [XtalOpt](http://xtalopt.github.io)<i class="fas fa-external-link-alt"></i> などがある．
先行研究の例は以下の通り．

- T. S. Bush, C. R. A. Catlow, and P. D. Battle, J. Mater. Chem. **5**, 1269 (1995).
- A. R. Oganov and C. W. Glass, J. Chem. Phys. **124**, 244704 (2006).
- A. R. Oganov, A. O. Lyakhov, and M. Valle, Acc. Chem. Res. **44**, 227 (2011).
- A. O. Lyakhov, A. R. Oganov, H. T. Stokes, and Q. Zhu, Comput. Phys. Commun. **184**, 1172 (2013).

![fig_EA_pes](/images/EA/EA_pes.svg?width=30vw)


## 手順
1. 個体群（population）の初期化
2. 適応度（fitness）の評価
3. 自然選択
4. 親個体の選択
5. 次世代の生成
6. ステップ2（適応度の評価）に戻り繰り返す

## 個体群（population）の初期化
第一世代では，`n_pop` で指定された数のランダム構造が生成される．
EAおよびEA-vcにおいては，`tot_struc` は使用されない．

## 適応度（fitness）の評価
現在，CrySPYにおいて適応度として使用できるのはエネルギーのみである．
`fit_reverse = False` に設定することで，最小値探索モードになるよう構成されている．
この `fit_reverse` の設定は，将来的にエネルギー以外の物性を適応度として用いる場合に備えて用意されている．


## 自然選択
DFT計算では，まれに失敗して極端に不合理なエネルギー値が得られることがある．
`emax_ea` および `emin_ea` を用いることで，極端に高い（または低い）エネルギーを持つ構造を除外することができる:
  {{< math >}}$$ \mathrm{emin\_ea} \le E \ (\mathrm{eV/atom}) \le \mathrm{emax\_ea} $${{< /math >}}
たとえば，`emin_ea` を設定すると，その値よりも低いエネルギーを持つ構造は無視される．

自然選択では，まず現在の個体群と，過去の世代から保持されたエリート個体が，適応度に基づいてランク付けされる．
ここで使用されるエリート個体の数は，`n_elite`で指定される．
現在の個体群とエリート個体の中から，適応度の高い順に `n_fittest`の数の個体が選択され，それ以外は淘汰される．
自然選択の過程では，[pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> の[StructureMatcher](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.structure_matcher.StructureMatcher)<i class="fas fa-external-link-alt"></i> クラスにより重複を除去し，上位`n_fittest`の数の個体を選択している．
`n_fittest` は，`n_pop`（個体群サイズ）の約半分に設定されることが多い．
現在の実装では，`n_fittest = 0` の場合，すべての個体が保持される仕様になっている．
下の図は`n_fittest = 5`の場合の自然選択の例を示している．


![fig_EA_natural_selection](/images/EA/EA_natural_selection.svg?width=20vw)

## 親個体の選択
親候補の個体の中から1つの親個体を選択するために，CrySPYでは2種類の選択手法が実装されている．
いずれの手法も，適応度の高い個体がより高い確率で選ばれるように設計されている．
`slct_func = TNM`を設定するとトーナメント選択が，`slct_func = RLT`を設定するとルーレット選択が使用される．
トーナメント選択はパラメータが少なく，簡単に使用できる点が利点である．


- [Tournament selection (TNM)]({{< relref "tournament.md" >}})
- [Roulette selection (RLT)]({{< relref "roulette.md" >}})


## 次世代の生成
次世代は，親候補の個体に対して進化的操作を適用して生成された子個体と，一部のランダム構造から構成される．
ランダム構造は，多様性を維持し，局所的最小からの脱出を促すために各世代で追加される．

### 進化的操作
ここでは，CrySPYに実装されている，組成固定型EAの進化的操作を紹介する．
- [Crossover]({{< relref "crossover.md" >}})
- [Permutation]({{< relref "permutation.md" >}})
- [Strain]({{< relref "strain.md" >}})


### 個体群の数
crossover, permutation, strainおよびランダムに生成された構造数の合計が`n_pop`と等しくなければならない．
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand`
