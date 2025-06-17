---
title: "Substitution"
weight: 400
---


Substitutionは，2つの異なる原子種をランダムに選択する操作である．
2つの異なる原子種の1つは，現在の原子数が `ll_nat` で指定された下限を上回っているもので，もう1つは `ul_nat` で指定された上限を下回っている原子種である．
前者の原子を1つ，後者の原子に置き換える．
最終的に，`mindist` で指定される最小原子間距離の制限をチェックし，問題がなければその構造を子個体として採用する．

![fig_EA-vc_substitution.svg](/images/EA-vc/EA-vc_substitution.svg?width=20vw)


