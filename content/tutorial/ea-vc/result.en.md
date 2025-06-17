---
title: "Check results"
weight: 200
---

This section focuses on the differences from the EA method.

## cryspy_rslt
Below is an example of a `cryspy_rslt` file after completing calculations up to the third generation.
In EA-vc, formation energy (`Ef_eV_atom`) and number of atoms (`Num_atom`) are also included.

``` bash
    Gen  Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Ef_eV_atom   Num_atom  Magmom      Opt
0     1      119   I-4m2          119       I-4m2   0.639865    0.639865  (3, 1, 2)     NaN  no_file
1     1       71    Immm           71        Immm   0.182650    0.182650  (1, 8, 5)     NaN  no_file
2     1      174     P-6          187       P-6m2   0.324864    0.324864  (3, 7, 8)     NaN  no_file
3     1       71    Immm           71        Immm   0.269227    0.269227  (6, 5, 5)     NaN  no_file
4     1       12    C2/m           65        Cmmm   0.401521    0.401521  (4, 4, 2)     NaN  no_file
7     1      123  P4/mmm          123      P4/mmm  -0.009930   -0.009930  (0, 2, 6)     NaN  no_file
10    1      107    I4mm          107        I4mm   0.320875    0.320875  (1, 4, 4)     NaN  no_file
5     1      121   I-42m          121       I-42m   0.439643    0.439643  (7, 4, 7)     NaN  no_file
6     1      115   P-4m2          115       P-4m2   0.459892    0.459892  (7, 7, 7)     NaN  no_file
8     1       81     P-4           81         P-4   0.354247    0.354247  (6, 2, 7)     NaN  no_file
9     1       11  P2_1/m           11      P2_1/m   0.182084    0.182084  (8, 4, 6)     NaN  no_file
11    1       10    P2/m           10        P2/m   0.229819    0.229819  (4, 5, 4)     NaN  no_file
```

## nat_data
Information on the number of atoms is also included in `nat_data`.
``` bash
    ID    ('Cu', 'Ag', 'Au')
     0    (3, 1, 2)
     1    (1, 8, 5)
     2    (3, 7, 8)
     3    (6, 5, 5)
     4    (4, 4, 2)
     5    (7, 4, 7)
     6    (7, 7, 7)
     7    (0, 2, 6)
     8    (6, 2, 7)
     9    (8, 4, 6)
    10    (1, 4, 4)
...
```

## hull_dist_all_gen_x
For example, after the third generation is completed, the hull distance data is output to the file `./convex_hull/hull_dist_all_gen_3`.
``` bash
    ID    hull distance (eV/atom)    Num_atom
    43                   0.000000    (0, 2, 5)
    42                   0.000000    (0, 5, 5)
    48                   0.000000    (0, 1, 5)
    46                   0.000009    (0, 1, 5)
    28                   0.000011    (0, 1, 5)
    41                   0.000360    (0, 4, 6)
    47                   0.001838    (0, 1, 5)
    36                   0.001992    (1, 1, 6)
    21                   0.002544    (0, 1, 7)
    23                   0.002551    (0, 1, 7)
    24                   0.002795    (0, 4, 7)
```

## conv_hull_gen_x.svg

The convex hull plot at the end of generation 3 is saved as `./convex_hull/conv_hull_gen_3.svg`.
Although svg is the default format, it can be changed to pdf or png by modifying the `fig_format` in the input file.

![conv_hull_gen_3.svg](/images/tutorial/EA-vc/3d/conv_hull_gen_3.svg?width=40vw)
