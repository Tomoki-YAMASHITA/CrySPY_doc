---
title: "[structure] section"
weight: 30
---

2025年3月6日 更新

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `struc_mode` | `crystal`, `mol`, `mol_bs` | `crystal`   | 構造生成モード |
| `atype` | atomic symbol [atomic symbol ...] |   | Atom type. e.g. `atype = Na Cl`. `EA-vc`では使用されない． |
| `nat`   | int [int ...] |   | atom typeに応じた原子数． e.g. `nat = 8 8`. |
| `mindist` (`mindist_?`)   | float [float ...] | `None` | 最小原子間距離の制限 [Å]. |
| `mindist_factor` | float | 1.0 | `mindist`のスケーリング係数 |
| `vol_factor`  | float | 1.0 | 体積スケーリング係数 |
| `vol_mu`   | float | `None` | 体積の平均．体積を指定したい場合に使用 |
| `vol_sigma`| float | `None` | 体積の標準偏差．体積を指定したい場合に使用 |
| `symprec`   | float | 0.01 | 対称性を見つける際の精度 |
| `spgnum`   | `all`, space group number, 0 | `all` | 空間群の制限．`all`であれば1--230の全て．0であれば空間群情報のない（対称性のない）ランダム構造生成 |
| `use_find_wy`  | bool | `False` | find_wyを使用して構造生成する際のオプション |

## mindist
- [機能 > 原子間距離の制限 ]({{< ref "features/restrict_dist" >}})

---------

if `algo` is `EA-vc`

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `ll_nat`   | int [int ...] |   | `nat`の下限. e.g. `ll_nat = 0 0`. |
| `ul_nat`   | int [int ...] |   | `nat`の上限. e.g. `ul_nat = 8 8`. |

----------------

if `struc_mode` is `mol` or `mol_bs`
| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `mol_file`  | str [str ...] |  | Path of molecule files or molecule names. |
| `nmol`      | int [int ...] |  | The number of molecules. |
| `timeout_mol` | float | `None` | Time out for molecular structure generation. |
| `rot_mol`   | `random`, `random_mol`, `random_wyckoff` | `random_wyckoff` | Only used in `mol_bs`. Mode for rotation of molecules. |
| `nrot`   | int | 20 | Only used in `mol_bs`. Maximum number of trials to rotate molecules. |
| `mindist_mol_bs` (`mindist_mol_bs_?`)   | float [float ...] | `None` | Only used in `mol_bs`. Constraint on minimum intermolecular distance [Å]. |
| `mindist_mol_bs_factor` | float | 1.0 | Only used in `mol_bs`. Scaling factor for `mindist_mol_bs`. |

------------------

if `use_find_wy` is `True` or `spgnum` = 0
| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `fwpath`  | str | `None` | Only used with find_wy. Path of find_wy. If `None`, `fwpath` is automatically searched in your $PATH. |
| `minlen`   | float |  | Only used with find_wy or `spgnum = 0`. Minimum length of lattice vector [Å]. |
| `maxlen`   | float |  | Only used with find_wy or `spgnum = 0`. Maximum length of lattice vector [Å]. |
| `dangle`   | float |  | Only used with find_wy or `spgnum = 0`. Delta angle for alpha, beta, and gamma in degree unit. |
| `maxcnt`   | int | 50 |  Only used with find_wy or `spgnum = 0`. Maximum number of trials to determine atom positions. |
