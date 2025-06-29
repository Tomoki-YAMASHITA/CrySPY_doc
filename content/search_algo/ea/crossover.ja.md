---
title: "Crossover"
weight: 100
---

## 概要
交叉(cross over)は，2つの親構造のスライスされた領域を交換することで，新たな構造（子個体）を生成する進化的操作である．
この操作により，構造の多様性が促進され，局所的に安定な特徴が遺伝することが可能となる．
構造探索において低エネルギー構造を効率的に探索するための主要な手法のひとつである．


## 手順

1. 親候補から異なる個体を2つ選択
2. ランダムに並進操作
3. 格子ベクトルをランダムに選択
4. 中央付近で親構造を切断
5. 切断された半分を交換
6. 原子数の多い子構造を選択
7. ボーダー付近で原子数の調整
8. 最小原子間距離のチェック

![fig_EA_crossover](/images/EA/EA_crossover.svg?width=20vw)

###  4. 中央付近で親構造を切断
切断ポイントは中央付近で，下記のように毎回少し変化させる．
``` python
slice_point = np.clip(np.random.normal(loc=0.5, scale=0.1), 0.3, 0.7)
```

以降のステップで失敗した場合，このステップ4に戻って再開する場合がある．
ただし，再開可能な回数は`maxcnt_ea`で上限が決められており，それを過ぎた場合は親の選択からやり直す．


### 5. 切断された半分を交換
`crs_lat`が`random`の時，子構造の格子ベクトルは2つの親構造のうちのどちらか一方をそのまま引き継ぐ．
`crs_lat`が`equal`の場合は，親構造の格子ベクトルの平均を使う．
デフォルトは`random`．


### 6. 原子数の多い子構造を選択
親構造を入れ替えると，通常二つの原子数の異なる構造が得られる．
とりあえず，原子数の多い構造を採用する．

![fig_EA_crossover_natoms](/images/EA/EA_crossover_natoms.svg?width=30vw)

ただし，原子数が元の構造のものと大きく違う場合はステップ4（中央付近で親構造を切断）からやり直す．
その許容量は`nat_diff_tole`で決める．
デフォルト値は4で，その場合それぞれの元素において原子数の差が±4まで許容される．
上の図の場合，元の構造と比較すると，青の原子は-1で，緑の原子は+2になっている．


### 7. ボーダー付近で原子数の調整
#### 削除
原子数を調整する際，まずは原子の削除から行う．
下の図に示すように，`mindist`で定義される最小原子間距離を満たしていない原子から優先的に削除される．

![fig_EA_crossover_rm_mindist](/images/EA/EA_crossover_rm_mindist.svg?width=20vw)

以下のように，もし原子の削除が完了しても最小原子間距離の制限にかかる原子がある場合，ステップ4（中央付近で親構造を切断）からやり直す．

![fig_EA_crossover_rm_mindist2](/images/EA/EA_crossover_rm_mindist2.svg?width=20vw)

最小原子間距離の制限にかかる原子が無く，さらに原子を削除する必要がある場合は，下の図に示すようにボーダーから近い原子から削除する．切断ポイントに加えて内部座標が0のところもボーダーであることに注意．

![fig_EA_crossover_rm_border](/images/EA/EA_crossover_rm_border.svg?width=20vw)

#### 追加

原子が不足しているときは，その原子をボーダー付近に追加する．
選択されている軸に沿った内部座標は下記のように決める．
ここでmeanは切断ポイントの座標か0である．

``` python
coords[axis] = np.random.normal(loc=mean, scale=0.08)
```
座標の残りの二つの成分はランダムに決められる．
最小原子間距離のチェックを行いながら，元の組成と一致するまで原子を追加する．

![fig_EA_crossover_addition](/images/EA/EA_crossover_addition.svg?width=20vw)

