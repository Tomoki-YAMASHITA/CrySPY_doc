---
title: "Result data"
weight: 20
---

Common result data such as space group, energies, etc. are saved in `rslt_data.pkl`. [pandas](https://pandas.pydata.org)<i class="fas fa-external-link-alt"></i> library is required to analyze this data file.



## Data format

- type: pandas.core.frame.DataFrame
    + row lable: structure ID
- string form
    + see blow
    
## How to access

``` python
import pickle
with open('rslt_data.pkl', 'rb') as f:
   rslt_data = pickle.load(f)


# ---------- sort by Energy
# top 5
rslt_data.sort_values(by=['E_eV_atom']).head(5)
```

``` txt
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
1       98  I4_122           12        C2/m  -3.978441     NaN  not_yet
3       36  Cmc2_1           36      Cmc2_1  -3.520306     NaN  not_yet
2       16    P222           16        P222  -3.348616     NaN  not_yet
4       36  Cmc2_1            4        P2_1  -3.304168     NaN  not_yet
0      139  I4/mmm          139      I4/mmm  -3.000850     NaN     done
```

