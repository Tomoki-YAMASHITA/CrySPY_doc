---
title: "[structure] section"
weight: 30
---

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `struc_mode` | `crystal`, `mol`, `mol_bs` | `crystal`   | Structure generation mode |
| `natot` | int |  | The total number of atoms. |
| `atype` | atomic symbol [atomic symbol ...] |   | Atom type. e.g. `atype = Na Cl`. |
| `nat`   | int [int ...] |   | The number of atoms in each atom type. e.g. `nat = 8 8`. |
| `mol_file`  | str [str ...], `None` | `None` | Path of molecule files or molecule names. |
| `nmol`      | int [int ...], `None` | `None` | The number of molecules. |
| `timeout_mol` | float | 120.0 | Time out for molecular structure generation. |
| `rot_mol`   | `random`, `random_mol`, `random_wyckoff` | `random_wyckoff` | Mode for rotation of molecules. |
| `nrot`   | int | 20 | Maximum number of trials to rotate molecules in `mol_bs` |
| `vol_factor`  | float float | 1.0 1.0 | Minimum and maximum values of volume factor. |
| `vol_mu`   | float, `None` | `None` | Mean of volume if you want specify the volume of cells. |
| `vol_sigma`| float, `None` | `None` | Standard deviation of volume if you want specify the volume of cells. |
| `mindist` (`mindist_?`)   | float [float ...], `None` | `None` | Constraint on minimum interatomic distance [Å]. |
| `mindist_factor` | float | 1.0 | Scaling factor for `mindist`. |
| `mindist_mol_bs` (`mindist_mol_bs_?`)   | float [float ...], `None` | `None` | Constraint on minimum intermolecular distance [Å]. |
| `mindist_mol_bs_factor` | float | 1.0 | Scaling factor for `mindist_mol_bs`. |
| `symprec`   | float, | 0.01 | Precision for symmetry finding. |
| `spgnum`   | `all`, space group number, 0 | `all` | Constraint on space group. If `all`, 1--230. If 0, random structure without space group information (no symmetry). |
| `use_find_wy`  | bool | `False` | Structure generation with find_wy. |
| `fwpath`  | str, `None` | `None` | Path of find_wy |
| `minlen`   | float, `None` | `None` | Only used with find_wy or `spgnum = 0`. Minimum length of lattice vector [Å]. |
| `maxlen`   | float, `None` | `None` | Only used with find_wy or `spgnum = 0`. Maximum length of lattice vector [Å]. |
| `dangle`   | float, `None` | `None` | Only used with find_wy or `spgnum = 0`. Delta angle for alpha, beta, and gamma in degree unit. |
| `maxcnt`   | int | 50 |  Only used with find_wy or `spgnum = 0`. Maximum number of trials to determine atom positions. |

## mindist
- [Features > Restriction on interatomic distances ]({{< ref "features/restrict_dist" >}})