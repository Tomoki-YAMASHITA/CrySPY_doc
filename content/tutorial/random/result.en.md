---
title: "Check results"
weight: 160
---

Move to `data` directory. There should be a few more files.
``` zsh
$ cd data
$ ls
cryspy_rslt  cryspy_rslt_energy_asc  init_POSCARS  opt_POSCARS  pkl_data/
```

- `cryspy_rslt`: Result file.
- `cryspy_rslt_energy_asc`: Result file sorted in energy ascending order.
- `init_POSCARS`: Initial struture file in POSCAR format.
- `opt_POSCARS`: Optimized structure file in POSCAR format.
- `pkl_data/`: Directory to save pickled data.


The results are written to text files, `cryspy_rslt` and `cryspy_rslt_energy_asc` (and also saved in pickle data in `pkl_data` directory).


Each result appends to `cryspy_rslt` file in the order in which one finished earlier.

``` zsh
cat cryspy_rslt
```

``` txt
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
0      139  I4/mmm          139      I4/mmm  -3.000850     NaN     done
1       98  I4_122           12        C2/m  -3.978441     NaN  not_yet
2       16    P222           16        P222  -3.348616     NaN  not_yet
3       36  Cmc2_1           36      Cmc2_1  -3.520306     NaN  not_yet
4       36  Cmc2_1            4        P2_1  -3.304168     NaN  not_yet
```

{{% notice info %}}
Not ID order in `cryspy_rslt`
{{% /notice %}}



In `cryspy_rslt_energy_asc` file, the results are sorted in energy ascending order.

``` zsh
cat cryspy_rslt_energy_asc
```

``` txt
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
1       98  I4_122           12        C2/m  -3.978441     NaN  not_yet
3       36  Cmc2_1           36      Cmc2_1  -3.520306     NaN  not_yet
2       16    P222           16        P222  -3.348616     NaN  not_yet
4       36  Cmc2_1            4        P2_1  -3.304168     NaN  not_yet
0      139  I4/mmm          139      I4/mmm  -3.000850     NaN     done
```

`Spg_num` and `Spg_sym` show space group information on initial structures.
`Spg_num_opt` and `Spg_sym_opt` are those of optimized structures.
The last column `Opt` indicates whether or not optimization reached required accuracy.
