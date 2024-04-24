---
title: "Initial and optimized structure data"
weight: 10
---

Initial and optimized structure data are saved in `init_struc_data.pkl` and `opt_struc_data.pkl`, respectively. [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> library is required to analyze these data files.



## Data format

- type: dict
    + key: structure ID
    + value: structure data
- string form
    + {0: Structure Summary ...,  
    1:  Structure Summary ...,    
    ...}
- structure data format
    + [pymatgen.core.structure.Structure](https://pymatgen.org/pymatgen.core.structure.html#pymatgen.core.structure.Structure)<i class="fas fa-external-link-alt"></i>

## How to access

``` python
import pickle
with open('init_struc_data.pkl', 'rb') as f:
   init_struc_data = pickle.load(f)
with open('opt_struc_data.pkl', 'rb') as f:
   opt_struc_data = pickle.load(f)

# struc_step_data[ID]
#
#

# ---------- structure step data of ID 0
cid = 0      # ID
init_struc_data[cid]    # to show initial structure of ID 0
```

``` txt
Structure Summary
Lattice
    abc : 5.727301 5.727301 4.405757
 angles : 90.0 90.0 90.0
 volume : 144.5175386563631
      A : 5.727301 0.0 0.0
      B : 0.0 5.727301 0.0
      C : 0.0 0.0 4.405757
PeriodicSite: Si (0.2506, 5.4767, 1.1014) [0.0438, 0.9562, 0.2500]
PeriodicSite: Si (2.6130, 3.1143, 1.1014) [0.4562, 0.5438, 0.2500]
PeriodicSite: Si (3.1143, 0.2506, 1.1014) [0.5438, 0.0438, 0.2500]
PeriodicSite: Si (5.4767, 2.6130, 1.1014) [0.9562, 0.4562, 0.2500]
PeriodicSite: Si (5.4767, 0.2506, 3.3043) [0.9562, 0.0438, 0.7500]
PeriodicSite: Si (3.1143, 2.6130, 3.3043) [0.5438, 0.4562, 0.7500]
PeriodicSite: Si (2.6130, 5.4767, 3.3043) [0.4562, 0.9562, 0.7500]
PeriodicSite: Si (0.2506, 3.1143, 3.3043) [0.0438, 0.5438, 0.7500]
```

