---
title: "Enthalpy"
weight: 300
---

2023/10/18

{{% notice info %}}
Requirements:
- CrySPY 1.2.2 or later
- VASP or QE
{{% /notice %}}

高圧化における構造探索を行う時に, エネルギーの代わりにエンタルピーを使うことができる．
VASPとQE以外はまだ未対応．

`cryspy_rslt`や`cryspy_rslt_energy_asc`の`E_eV_atom`の箇所がエンタルピー（eV/atom）に変わる．
下記は40 GPaにおけるSr4O4の構造探索の結果の例．
高圧下ではCsCl型構造（ID 5）がNaCl型構造よりも安定になっている．
``` bash
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
5       26  Pmc2_1          221       Pm-3m  -2.276790     NaN     done
6      225   Fm-3m          225       Fm-3m  -2.244800     NaN     done
1      101  P4_2cm          107        I4mm  -2.181115     NaN     done
4      123  P4/mmm          123      P4/mmm  -2.034509     NaN  not_yet
3       20  C222_1           63        Cmcm  -0.686541     NaN     done
2       75      P4           75          P4  -0.008713     NaN  not_yet
9       51    Pmma           47        Pmmm   0.096430     NaN     done
8       65    Cmmm          123      P4/mmm   1.099657     NaN     done
0      187   P-6m2          187       P-6m2   1.292124     NaN     done
7       53    Pmna           53        Pmna   5.153504     NaN  not_yet
```

## VASP

CrySPYでは`OSZICAR`からエネルギー（エンタルピー）を読んでいる．
これは`PSTRESS`が`INCAR_x`で以下のようにセットされると自動的にエンタルピーに変わる:

``` bash
PSTRESS = 400
```

`cryspy.in`では特に何もする必要はない．
`energy_step_flag`のオプションも使用可能でエンタルピーを読み込める．

Example: [CrySPY utility > examples > qe_Sr4O4_RS_pv_term](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/qe_Sr4O4_RS_pv_term)

## QE
エンタルピーを読むためには`cryspy.in`のQEセクションで`pv_term = True`をつける:

``` python
[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80
pv_term = True
```
QEの入力ファイルでも`press`の設定を忘れずに:
``` bash
 &cell
    press = 400
 /
```

{{% notice warning %}}
QEでは`energy_step_flag`オプションでエンタルピーを読むことにまだ未対応．
{{% /notice %}}

