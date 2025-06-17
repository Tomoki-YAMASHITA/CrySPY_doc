---
title: "組成可変型進化的アルゴリズム (EA-vc)"
weight: 35
---

2025 April 4

## 概要
CrySPY 1.4.0 以降，組成固定型EAを拡張した組成可変型EA（EA-vc）が利用可能になった．
サポートしているインターフェースはこちらを確認すること（[インターフェース]({{< ref "interface/" >}})）．
全体の流れは[組成固定型EA]({{< ref "search_algo/ea" >}})と類似しているが，EA-vcでは異なる組成に対応するために，適応度の評価方法と子個体の生成方法が異なる．
ここでは，元のEAから変更された部分について説明する．

## 手順
1. 個体群（population）の初期化
2. 適応度（fitness）の評価
3. 自然選択
4. 親個体の選択
5. 次世代の生成
6. ステップ2（適応度の評価）に戻り繰り返す

## 個体群（population）の初期化
第一世代では，`n_pop` で指定された数のランダム構造が生成される．
EAおよびEA-vcでは `tot_struc` は使用されない．
EA-vcでは，各原子種の原子数は，ユーザーが定義した範囲内でランダムに決定される．
各原子種ごとの原子数の最小値（`ll_nat`）および最大値（`ul_nat`）は，以下のように `cryspy.in` で指定することができる．
``` python
[structure]
atype = Cu Au
ll_nat = 0 0
ul_nat = 8 8
```

## 適応度（fitness）の評価
異なる原子数を持つ構造の全エネルギーを直接比較することには意味がないため，異なる組成間の相安定性を評価するために，形成エネルギーから計算された凸包（convex hull）が用いられる．
形成エネルギー，凸包，相図に関する情報はオンラインで参照できる．
例えば，[Materials Project Documentation](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds)<i class="fas fa-external-link-alt"></i> を参照のこと．
EA-vcでは，適応度は energy above hull（hull distanceとも呼ばれる）として定義されている．

![fig_EA-vc_phase_diagram_binary.svg](/images/EA-vc/EA-vc_phase_diagram_binary.svg?width=30vw)

### 形成エネルギー
形成エネルギーは，基準となる安定な単体のエネルギー（eV/atom）に基づいて計算され，これらは `cryspy.in` の `end_point` で指定される．
例えば，Cu–Auの2元系の場合，`end_point` にはfcc-Cuおよびfcc-Auの1原子あたりのエネルギー（eV/atom）をこの順で記述する必要がある．
構造探索中に，`end_point` と同じ組成を持つ構造が見つかり，そのエネルギーが対応する `end_point` の値よりも低かったとしても，形成エネルギーの計算には依然として `cryspy.in` に定義された元の `end_point` の値が用いられることに注意すること．

### 凸包（Convex hull）
ある構造の形成エネルギーと，その組成におけるconvex hull上のエネルギーとの差は，energy above hull（hull distanceとも呼ばれる）と呼ばれる．
この値は，同じ組成における最も安定な相の組み合わせと比べて，その構造の形成エネルギーがどれだけ高いかを示している．
hull distanceが0の構造はconvex hull上にあり，熱力学的に安定である．

[組成固定型EA]({{< ref "search_algo/ea" >}})とは異なり，EA-vcではconvex hullの計算時に構造の1原子あたりのエネルギーに基づいてフィルタリングを行い，以下の条件を用いる：
  {{< math >}}$$ \mathrm{emin\_ea} \le E \le \mathrm{emax\_ea} $${{< /math >}}  
このフィルタリングは形成エネルギーではなく，あくまで1原子あたりの全エネルギーに基づいて行われることに注意すること．

convex hullの計算には，[pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> の[PhaseDiagram](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.phase_diagram.PhaseDiagram)<i class="fas fa-external-link-alt"></i>クラスを使用している．
形成エネルギーの場合とは異なり，`end_point` と同じ組成を持つ構造が対応する `end_point` の値よりも低いエネルギーを持っていた場合，その構造がconvex hullおよびhull distanceを計算する際の基準として使用される．


## 自然選択
下図に示すように，EA-vcではhull distanceが0の安定構造が複数得られる場合がある．
このような場合，複数の個体がhull distanceにおいて同率の最上位ランクを占めることになる．
`n_elite`で指定されたエリート構造の数が，同率ランクの個体数より少ない場合，選択には任意性が生じる．
現在のところ，CrySPYではhull distanceが0.001 eV/atom未満の個体の中から，`n_elite` 個をランダムに選択している．
hull distanceが 0.001 eV/atom未満の個体数が `n_elite` より少ない場合には，通常通り，適応度に基づくランキングによってエリート構造が選択される．
エリート個体を選択する際にも，[pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> の[StructureMatcher](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.structure_matcher.StructureMatcher)<i class="fas fa-external-link-alt"></i>クラスを用いて重複構造を排除している．

![fig_EA-vc_elite.svg](/images/EA-vc/EA-vc_elite.svg?width=30vw)

エリート個体は，過去の世代で得られた最良の構造に基づいて選択される．
しかし，hull distanceは世代ごとに変化する可能性があるため，自然選択を行う前に，現在のconvex hullを用いてエリート個体のhull distanceを再計算している．

[Convex hull]({{< relref "#convex-hull" >}})セクションで述べたように，EA-vcでは，`emin_ea`および`emax_ea`は自然選択では使用されない．


## 親個体の選択
親個体の選択方法は[組成固定型EA]({{< ref "search_algo/ea" >}})と同様である．

## 次世代の生成

### 進化的操作
crossover（vc）の操作は，[組成固定型EAのもの]({{< ref "search_algo/ea/crossover" >}})とわずかに異なるが，[permutation]({{< ref "search_algo/ea/permutation" >}})および[strain]({{< ref "search_algo/ea/strain" >}})は同一である．
EA-vcでは，組成可変にするためにいくつかの新しい操作が導入されている．


- [Crossover (vc)]({{< relref "crossover-vc.md" >}})
- [Addition]({{< relref "addition.md" >}})
- [Elimination]({{< relref "elimination.md" >}})
- [Substitution]({{< relref "substitution.md" >}})


### 個体群の数
crossover，permutation，strain，addition，elimination，substitution，およびランダム生成による構造の合計は，`n_pop` と等しくなければならない．
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_add` + `n_elim` + `n_subs`+ `n_rand`
