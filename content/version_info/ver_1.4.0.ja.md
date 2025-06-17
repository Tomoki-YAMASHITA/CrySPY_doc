---
title: "Version 1.4.0"
weight: 960
---
## Important change
### New algorithm: EA-vc
- 現在，インターフェースはASEのみに対応．VASPなど順次対応予定．[CrySPY > インターフェース]({{< ref "interface" >}})
- [CrySPY > チュートリアル > 組成可変型進化的アルゴリズム（EA-VC）]({{< ref "tutorial/ea-vc" >}})
- [CrySPY > 探索アルゴリズム > 組成可変型進化的アルゴリズム（EA-VC）]({{< ref "search_algo/ea-vc" >}})

### インタラクティブモード
- Jupyter環境からRS, EA, EA-vcが利用可能
- インターフェースはASEのみに対応
- [CrySPY > チュートリアル > インタラクティブモード (Jupyter Notebook)]({{< ref "tutorial/interactive" >}})
- [CrySPY > 機能 > Interactive mode]({{< ref "features/interactive_mode" >}})

### EA
- EAでは`tot_struc`を不使用にした．第1世代の構造数も`n_pop`を利用するように変更

### 構造最適化後の原子間距離チェック
- cryspy.inの[option]セクションに`check_mindist_opt`を追加．
- デフォルトで`check_mindist_opt = True`．
- 構造最適化後に最小原子間距離の制限を満たしているかチェックする．

### Common
- `cryspy.in`の`natot`を廃止
- Ctrl_extの廃止


## Fixed
- BOで`score`に`TS`を使うときのバグを修正
- その他いくつかマイナー修正