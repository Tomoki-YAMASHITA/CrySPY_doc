---
title: "[structure] section"
weight: 30
---

2024 May 22, updated

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `struc_mode` | `crystal`, `mol`, `mol_bs` | `crystal`   | Structure generation mode |
| `natot` | int |  | The total number of atoms. |
| `atype` | atomic symbol [atomic symbol ...] |   | Atom type. e.g. `atype = Na Cl`. |
| `nat`   | int [int ...] |   | The number of atoms in each atom type. e.g. `nat = 8 8`. |
| `mindist` (`mindist_?`)   | float [float ...] | `None` | Constraint on minimum interatomic distance [Å]. |
| `mindist_factor` | float | 1.0 | Scaling factor for `mindist`. |
| `vol_factor`  | float | 1.0 | Minimum and maximum values of volume factor. |
| `vol_mu`   | float | `None` | Mean of volume if you want specify the volume of cells. |
| `vol_sigma`| float | `None` | Standard deviation of volume if you want specify the volume of cells. |
| `symprec`   | float | 0.01 | Precision for symmetry finding. |
| `spgnum`   | `all`, space group number, 0 | `all` | Constraint on space group. If `all`, 1--230. If 0, random structure without space group information (no symmetry). |
| `use_find_wy`  | bool | `False` | Structure generation with find_wy. |

## mindist
- [Features > Restriction on interatomic distances ]({{< ref "features/restrict_dist" >}})

---------

if `algo` is `EA-vc`
(EA-vc is still beta version)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `ll_nat`   | int [int ...] |   | Lower limit of `nat`. e.g. `ll_nat = 1 1`. |
| `ul_nat`   | int [int ...] |   | Upper limit of `nat`. e.g. `ul_nat = 8 8`. |

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
