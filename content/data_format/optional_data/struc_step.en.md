---
title: "Structure step data"
weight: 20
---

Structure step data is saved in `struc_step_data.pkl` if you set `struc_step_flag = True` in `[option]` section of `cryspy.in`. [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> library is required to analyze this data file.


{{% notice warning %}}
`struc_step_flag = True` is currently available only with VASP, QE, and soiap. 
{{% /notice %}}

{{% notice info %}}
`struc_step_data` includes initial structures.
For example, `struc_step_data[cid][0][0]` is the initial structure of ID = cid.
{{% /notice %}}


## Data format

- type: dict
    + key: structure ID
    + value: list of structure step data in each stage
- string form
    + {0: [[Structure Summary ..., Structure Summary, ...], [...], ...],  
    1:  [[Structure Summary ..., Structure Summary, ...], [...], ...],    
    ...}
- structure data format
    + [pymatgen.core.structure.Structure](https://pymatgen.org/pymatgen.core.structure.html#pymatgen.core.structure.Structure)<i class="fas fa-external-link-alt"></i>

## How to access

``` python
import pickle
with open('struc_step_data.pkl', 'rb') as f:
    struc_step_data = pickle.load(f)

# struc_step_data[ID][stage][step]
# struc_step_data[ID][0] <-- stage 1
# struc_step_data[ID][1] <-- stage 2
#
#
# in LAQA
# struc_step_data[ID][selection][step]
# struc_step_data[ID][0] <-- 1st selection
# struc_step_data[ID][1] <-- 2nd selection

# ---------- structure step data of ID 3, stage 1, step 4
cid = 0      # ID
stage = 1    # stage
step = 0     # step index (start from 0)
struc_step_data[cid][stage-1][step]    # to show initial structure of ID 0 at stage 1 in jupyter
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

