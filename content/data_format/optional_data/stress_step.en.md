---
title: "Stress step data"
weight: 40
---

Stress step data is saved in `stress_step_data.pkl` if you set `stress_step_flag = True` in `[option]` section of `cryspy.in`. NumPy library is required to analyze this data file.


{{% notice warning %}}
`stress_step_flag = True` is currently available only with VASP, QE, and soiap. 
{{% /notice %}}



## Data format

- type: dict
    + key: structure ID
    + value: list of stress step data in each stage
- string form
    + {0: [array([[-0.16770062,  0.        ,  0.        ], [...], [...]]), array([[...], ]...], [...]]), ...],    
    1: [array([[ 0.39260083, -0.        , -0.        ], [...], [...]]), array([[...], [...], [...]]), ...],  
    ...}
- unit of stress
    + eV/(Å**3)

## How to access

``` python
import pickle
with open('stress_step_data.pkl', 'rb') as f:
    stress_step_data = pickle.load(f)

# stress_step_data[ID][stage][step][atom]
# stress_step_data[ID][0] <-- stage 1
# stress_step_data[ID][1] <-- stage 2
#
# in LAQA
# stress_step_data[ID][selection][step][atom]
# stress_step_data[ID][0] <-- 1st selection
# stress_step_data[ID][1] <-- 2nd selection

# ---------- stress step data of ID 3, stage 1
cid = 0      # ID
stage = 1    # stage
stress_step_data[cid][stage-1][:3]    # to show only 3 steps in jupyter 
```

``` txt
[array([[-0.16770062,  0.        ,  0.        ],
        [ 0.        , -0.16770062, -0.        ],
        [ 0.        ,  0.        ,  0.21823358]]),
 array([[-0.16020785, -0.        , -0.        ],
        [-0.        , -0.16020785,  0.        ],
        [-0.        ,  0.        ,  0.18646321]]),
 array([[-0.13572003, -0.        ,  0.        ],
        [-0.        , -0.13572003,  0.        ],
        [-0.        ,  0.        ,  0.15953926]])]
```

