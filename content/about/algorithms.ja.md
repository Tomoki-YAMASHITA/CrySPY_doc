---
title: "探索アルゴリズム"
weight: 20
---

CrySPYでは以下の探索アルゴリズムが使用可能．

- ランダムサーチ (RS)
- 進化的アルゴリズム (EA)
- ベイズ最適化 (BO)
- LAQA

## 概略

### ランダムサーチ (RS)

ランダム．

### 進化的アルゴリズム (EA)

進化的アルゴリズムを用いた結晶構造探索手法は[Oganovグループ](https://uspex-team.org/en/uspex/overview)<i class="fas fa-external-link-alt"></i>によって開発された．  
CrySPYでも効率的な探索が可能な進化的アルゴリズムを採用した．以下のようなことができる．

+ 親の選択方法
  - トーナメント選択
  - ルーレット選択
  - エリート選択
+ 進化的操作
  - 交叉
  - 置換
  - ひずみ
+ etc.
  - 適者生存
  - 適者生存の中で重複した構造の排除


### ベイズ最適化 (BO)

選択型アルゴリズムの一種．

![fig_BO](/images/BO/BO.png?width=40vw)


### LAQA

選択型アルゴリズムの一種．

![fig_LAQA](/images/LAQA/laqa_concept.png?width=30vw)

![fig_LAQA](/images/LAQA/LAQA.gif?width=40vw)

