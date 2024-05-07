---
title: "Version 1.2.4"
weight: 977
---
## バグ修正
- ASE interface: `e.args[0]` --> `str(e.args[0])`
- ext mode: noprint
- njob ( see also [FAQ > シミュレーションの途中でnjobを変えることはできますか？ ]({{< relref "/faq/change_njob" >}}))

## EA
- default value of `cls_lat`: `equal` --> `random`

## EA-vc
- test version of variable composition EA (EA-vc). only binary system for now.