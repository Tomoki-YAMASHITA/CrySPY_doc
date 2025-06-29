---
title: "トーナメント選択"
weight: 1000
---

## 概要
トーナメント選択は，適応度に基づいて候補の中から親個体を選ぶための手法である．
この手法は，個体群内の選択圧と多様性のバランスをとるように設計されている．
下の図は，`n_fittest = 10`，`t_size = 3`の場合の例を示す．


![fig_EA_tournament](/images/EA/EA_tournament.svg?width=20vw)


## 手順
1.	親個体候補から，所定の数（`t_size`）の個体をランダムに選択
2.	その中で，最も適応度の高い（すなわち，エネルギーが最も低い）個体が親として選ばれる
3.	この処理を繰り返し，必要な数の親個体が選ばれるまで続ける


## 利点
- シンプルで効率的
- パラメータは1つだけ (`t_size`)
- `t_size`を変えることで選択圧を調整可能

## 注意
- `t_size`はデフォルトで3
- `t_size`が小さいと，多様性が促進される
- `t_size`が大きいと，選択圧が増して，選択確率がより適応度に依存する
- ルーレット選択とは異なり，トーナメント選択では下位の（`t_size` - 1）個の個体が選択されることはない