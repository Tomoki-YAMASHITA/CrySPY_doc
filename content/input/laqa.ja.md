---
title: "[LAQA] section"
weight: 110
---

 LAQA (`algo = LAQA`)を使う場合，[LAQA]セクションが必要．

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `nselect_laqa` | int |  | 1度の選択で選ばれる構造の数．  |
| `wf` | float | 0.1  | 力の項の重み．  |
| `ws` | float | 10.0  | ストレス項の重み．  |

{{% notice info %}}
See also [Searching algorithms > LAQA]({{< ref "searching_algo/laqa" >}})
{{% /notice %}}

{{% notice info %}}
algo = LAQAでは[option]セクションの下記の二つは自動的にTrueになる．
- force_step_flag = True
- stress_step_flag = True

原子に働く力とストレスのデータは1ステップごとに収集される．
エネルギーと構造データは1ステップごとではなく，選択ごとに収集される．
つまり，この場合は10ステップおきにエネルギーと構造データは保存される．
もし1ステップごとのデータが欲しいのであれば，手動で下記の設定を追加すること．
```
[option]
energy_step_flag = True
struc_step_flag = True
```
{{% /notice %}}