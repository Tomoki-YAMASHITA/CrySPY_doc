---
title: "Energy step data"
weight: 10
---

Energy step data is saved in `energy_step_data.pkl` if you set `energy_step_flag = True` in `[option]` section of `cryspy.in`. NumPy library is required to analyze this data file.


{{% notice warning %}}
`energy_step_flag = True` is currently available only with VASP, QE, and soiap. 
{{% /notice %}}

{{% notice info %}}
In soiap, `energy_step_data` is collected only if `loopa == 1`.
This is because other data (struc, force, and stress) are output only when `loopa == 1`.
See, https://github.com/nbsato/soiap/blob/master/doc/instructions.md

{{% /notice %}}


## Data format

- type: dict
    + key: structure ID
    + value: list of energy step data in each stage
- string form
    + {0: [array([-3.4439912 , -3.55040935, -3.66697038, ..]), array([-4.0613393 , -4.05445631, -4.06159641, ...]), ...],  
    1: [array([-2.68209823, -2.69012487, -2.68364907, ..]), array([-2.79140967, -2.79183827, -2.79206508, ...]), ...],  
    ...}
- unit of energy
    + eV/atom

## How to access

``` python
import pickle
with open('energy_step_data.pkl', 'rb') as f:
    energy_step_data = pickle.load(f)

# energy_step_data[ID][stage][step]
# energy_step_data[ID][0] <-- stage 1
# energy_step_data[ID][1] <-- stage 2
#
# in LAQA
# energy_step_data[ID][selection][step]
# energy_step_data[ID][0] <-- 1st selection
# energy_step_data[ID][1] <-- 2nd selection

# ---------- energy step data of ID 3, stage 1
cid = 3      # ID
stage = 1    # stage
energy_step_data[cid][stage-1][:10]    # show only 10 enegies in jupyter
```

``` txt
array([-3.4439912 , -3.55040935, -3.66697038, -3.77192063, -3.84320717,
       -3.80679245, -3.84633935, -3.87374706, -3.89123193, -3.90422926])
```

