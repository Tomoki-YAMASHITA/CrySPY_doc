---
title: "Force step data"
weight: 30
---

Force step data is saved in `force_step_data.pkl` if you set `force_step_flag = True` in `[option]` section of `cryspy.in`. NumPy library is required to analyze this data file.


{{% notice warning %}}
`force_step_flag = True` is currently available only with VASP, QE, and soiap. 
{{% /notice %}}



## Data format

- type: dict
    + key: structure ID
    + value: list of force step data in each stage
- string form
    + {0: [array([[ 0.26314927, -0.26314927, -0.        ], [...], ...[...]]), array([[...], ..., [...]]), ...],    
    1: [array([[ 0.        ,  0.        ,  0.        ], [...], ...[...]]), array([[...], ..., [...]]), ...],  
    ...}
- unit of force
    + eV/Å

## How to access

``` python
import pickle
with open('force_step_data.pkl', 'rb') as f:
    force_step_data = pickle.load(f)

# force_step_data[ID][stage][step][atom]
# force_step_data[ID][0] <-- stage 1
# force_step_data[ID][1] <-- stage 2
#
# in LAQA
# force_step_data[ID][selection][step][atom]
# force_step_data[ID][0] <-- 1st selection
# force_step_data[ID][1] <-- 2nd selection

# ---------- force step data of ID 3, stage 1
cid = 0      # ID
stage = 1    # stage
force_step_data[cid][stage-1][:3]    # to show only 3 steps in jupyter 
```

``` txt
[array([[ 0.26314927, -0.26314927, -0.        ],
        [-0.26314927,  0.26314927, -0.        ],
        [ 0.26314927,  0.26314927,  0.        ],
        [-0.26314927, -0.26314927, -0.        ],
        [-0.26314927,  0.26314927, -0.        ],
        [ 0.26314927, -0.26314927,  0.        ],
        [-0.26314927, -0.26314927, -0.        ],
        [ 0.26314927,  0.26314927,  0.        ]]),
 array([[-0.12103692,  0.12103692,  0.        ],
        [ 0.12103692, -0.12103692, -0.        ],
        [-0.12103692, -0.12103692, -0.        ],
        [ 0.12103692,  0.12103692,  0.        ],
        [ 0.12103692, -0.12103692, -0.        ],
        [-0.12103692,  0.12103692,  0.        ],
        [ 0.12103692,  0.12103692,  0.        ],
        [-0.12103692, -0.12103692, -0.        ]]),
 array([[-0.29801618,  0.29801618,  0.        ],
        [ 0.29801618, -0.29801618, -0.        ],
        [-0.29801618, -0.29801618, -0.        ],
        [ 0.29801618,  0.29801618,  0.        ],
        [ 0.29801618, -0.29801618, -0.        ],
        [-0.29801618,  0.29801618,  0.        ],
        [ 0.29801618,  0.29801618,  0.        ],
        [-0.29801618, -0.29801618, -0.        ]])]
```

``` python
step = 0     # step index (start from 0)
atom = 2     # atom index (start from 0)
force_step_data[cid][stage-1][step][atom]
```
``` txt
array([0.26314927, 0.26314927, 0.        ])
```
