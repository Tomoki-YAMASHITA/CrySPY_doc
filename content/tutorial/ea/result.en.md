---
title: "Check results"
weight: 200
---

## cryspy_rslt
The following is an example of `cryspy_rslt` after completing calculations up to the third generation.
In EA, generation information (`Gen`) is also included.

``` bash
    Gen  Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
0     1      214  I4_132          230       Ia-3d   1.168743     NaN  no_file
1     1      198   P2_13          198       P2_13  -0.005303     NaN  no_file
2     1       95  P4_322           95      P4_322   0.389566     NaN  no_file
3     1       27    Pcc2           27        Pcc2   0.014898     NaN  no_file
4     1       60    Pbcn           60        Pbcn   0.044852     NaN  no_file
5     1      116   P-4c2          116       P-4c2   0.403246     NaN  no_file
6     1      187   P-6m2          187       P-6m2   1.054706     NaN  no_file
7     1      161     R3c          160         R3m   0.115009     NaN  no_file
8     1      146      R3          146          R3   0.152535     NaN  no_file
9     1       60    Pbcn           47        Pmmm  -0.005676     NaN  no_file
10    2        1      P1            1          P1   0.026070     NaN  no_file
11    2        1      P1            7          Pc   0.005898     NaN  no_file
12    2        1      P1            1          P1   0.005208     NaN  no_file
13    2        1      P1            1          P1   0.005506     NaN  no_file
14    2        1      P1            1          P1   0.024364     NaN  no_file
15    2      146      R3          146          R3   0.011525     NaN  no_file
16    2        1      P1            1          P1   0.014590     NaN  no_file
17    2        1      P1            1          P1   0.015236     NaN  no_file
18    2        1      P1            2         P-1  -0.012335     NaN  no_file
19    2       86  P4_2/n          140      I4/mcm   0.274548     NaN  no_file
20    3        1      P1            1          P1   0.013611     NaN  no_file
21    3        1      P1           10        P2/m  -0.014166     NaN  no_file
22    3        1      P1            1          P1   0.019472     NaN  no_file
23    3        1      P1            1          P1   0.011641     NaN  no_file
24    3        1      P1            1          P1   0.000297     NaN  no_file
25    3        1      P1            1          P1   0.005596     NaN  no_file
26    3        1      P1            1          P1   0.013374     NaN  no_file
27    3        1      P1            2         P-1   0.005055     NaN  no_file
28    3        2     P-1           12        C2/m  -0.012396     NaN  no_file
29    3      182  P6_322          182      P6_322   0.711472     NaN  no_file
```

## ea_info
The EA parameters used in each generation are recorded in `ea_info`.
``` bash
Gen Population Crossover Permutation Strain Random Elite crs_lat slct_func
  1         10         0           0      0     10     0  random       TNM
  2         10         5           2      2      1     1  random       TNM
  3         10         5           2      2      1     1  random       TNM
```

## ea_origin
Information about the structure generation method and parent individuals is output to `ea_origin`.
``` bash
Gen Struc_ID   Operation   Parent
  1        0      random     None
  1        1      random     None
  1        2      random     None
  1        3      random     None
  1        4      random     None
  1        5      random     None
  1        6      random     None
  1        7      random     None
  1        8      random     None
  1        9      random     None
  2       10   crossover   (3, 1)
  2       11   crossover   (3, 1)
  2       12   crossover   (1, 4)
  2       13   crossover   (1, 3)
  2       14   crossover   (7, 1)
  2       15 permutation     (1,)
  2       16 permutation     (3,)
  2       17      strain     (3,)
  2       18      strain     (1,)
  2       19      random     None
  2        9       elite    elite
  3       20   crossover (18, 12)
  3       21   crossover  (12, 9)
  3       22   crossover (12, 18)
  3       23   crossover  (18, 9)
  3       24   crossover (13, 18)
  3       25 permutation    (18,)
  3       26 permutation     (9,)
  3       27      strain    (18,)
  3       28      strain    (18,)
  3       29      random     None
  3       18       elite    elite
```