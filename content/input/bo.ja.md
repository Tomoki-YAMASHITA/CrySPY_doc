---
title: "[BO] section"
weight: 100
---

[BO] section is required only if you use BO (`algo = BO`)

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `nselect_bo` | int |  | The number of structures to be selected at once.  |
| `score` | `TS`, `EI`, `PI` |   | Acquisition function.  |
| `num_rand_basis` | int |   | If `0`, Gaussian process. The number of basis function.  |
| `cdev` | float | 0.001  | Cutoff of deviation for standardization.  |
| `dscrpt` | `FP` |   | Descriptor for structures. |
| `fppath` | str, `None` | `None`  | Only used with `dscrpt = FP`. Path of cal_fingerprint. |
| `fp_rmin` | float  | 0.5  | Only used with `dscrpt = FP`. Minimum cutoff of *r* in fingerprint. |
| `fp_rmax` | float  | 5.0  | Only used with `dscrpt = FP`. Maximum cutoff of *r* in fingerprint. |
| `fp_npoints` | int  | 20  | Only used with `dscrpt = FP`. Number of discretized points for each pair in fingerprint. |
| `fp_sigma` | float  | 1.0  | Only used with `dscrpt = FP`. Sigma parameter [Å] in Gaussian smearing function. |
| `max_select_bo` | int  | 0  | Maximum number of selection. |
| `manual_select_bo` | int [int ...]  | [] | Structure IDs to be selected manually. |
| `emax_bo` | float | `None` | Upper limit of energy in BO. |
| `emin_bo` | float | `None` | Lower limit of energy in BO. |
