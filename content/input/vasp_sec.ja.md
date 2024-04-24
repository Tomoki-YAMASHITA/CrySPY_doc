---
title: "[VASP] section"
weight: 40
---

VASPを使う場合は(`calc_code = VASP`)[VASP]セクションが必要になる．

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `kppvol` | int [int ...] |  | 各ステージにおける逆格子空間でのÅ**(-3)あたりのグリッド密度．|
| `force_gamma` | bool | `False` | Trueなら常にガンマ点を通るメッシュを使う． |

## kppvol and force gamma
- [Input file > Kpoint]({{< ref "input/kpoint" >}})