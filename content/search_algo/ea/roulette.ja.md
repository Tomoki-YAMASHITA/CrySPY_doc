---
title: "ルーレット選択"
weight: 1100
---

## 概要
ルーレット選択は，適応度に基づいて親候補の個体の中から親個体を選ぶための確率的手法である．
ルーレット選択においては，各個体の選ばれる確率はその適応度に比例する．

## 手順
1. `fit_reverse` が `False`（デフォルト）に設定されている場合，これはエネルギーを適応度として用いる最小化モードに対応しており，親候補の適応度には –1 が掛けられる．  
2. 適応度 {{< math >}}$ f_i ${{< /math >}} は，以下の式により線形スケーリングされて {{< math >}}$ f'_i ${{< /math >}} に変換される．ここで，{{< math >}}$ a ${{< /math >}} および {{< math >}}$ b ${{< /math >}} は，それぞれ `a_rlt` および `b_rlt` で指定されるパラメータであり，{{< math >}}$ a > b ${{< /math >}} でなければならない．  
{{< math >}}$$ f_i' = \frac{a - b}{f_{\mathrm{max}} - f_{\mathrm{min}}} f_i + \frac{b f_{\mathrm{max}} - a f_{\mathrm{min}}}{f_{\mathrm{max}} - f_{\mathrm{min}}} $${{< /math >}}  
3. スケーリング後の適応度 {{< math >}}$ f'_i ${{< /math >}} は，次式により選択確率に変換される：  
{{< math >}}$$ p_i = \frac{f_i'}{\sum_k f_k'} $${{< /math >}}  
各 {{< math >}}$ p_i ${{< /math >}} は，{{< math >}}$ i ${{< /math >}} 番目の個体が選ばれる確率を表す．  
4. 親個体は，{{< math >}}$ p_i ${{< /math >}} に基づいてルーレット選択により1つずつ選ばれ，必要な数に達するまで繰り返される．


## 利点
- すべての個体が非ゼロの確率で選ばれる可能性がある  
- 適応度のスケーリングによって選択圧を調整できる

## 注意
- デフォルトでは `a_rlt = 10.0`，`b_rlt = 1.0` 
- 意味のある選択圧を得るためには，適応度のスケーリングが重要である．
  下の図は，{{< math >}}$ a ${{< /math >}} が比較的小さい場合（左）と比較的大きい場合（右）における {{< math >}}$ p_i ${{< /math >}} の例を示している．  
  {{< math >}}$ a ${{< /math >}} が小さすぎると選択圧が弱くなり，適応度の高い個体が優先されにくくなる．

![fig_EA_roulette](/images/EA/EA_roulette.svg?width=20vw)