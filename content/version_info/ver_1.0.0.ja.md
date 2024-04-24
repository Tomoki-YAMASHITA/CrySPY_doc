---
title: "Version 1.0.0"
weight: 990
---
## Install and run
CrySPY is now available in PyPI. You can install by
``` bash
pip install csp-cryspy
```
The executable script, `cryspy` is automatically installed in your PATH.
To run CrySPY, just type cryspy:
``` bash
cryspy &
```

CrySPY stops once before going to next selection (BO, LAQA) or next generation (EA).
For example, EA case:

[old version]  
- cryspy run
  + check jobs (finish current generation?)
  + structure generation by EA automatically starts

[CrySPY 1.0.0]  
- cryspy run
  + check jobs (finish current generation?)
  + stop
- cryspy run
  + auto backup
  + structure generation by EA automatically starts

## Auto and manual backup
Automatically backup:
- before going to next selection or next generation
- structure generation

To manually back up:
```
cryspy -b
```
See [features/backup]({{< relref "../features/backup.md" >}}) in detail.

## Clean
```
cryspy -c
```
See [features/clean]({{< relref "../features/clean.md" >}}) in detail.

## Directory tree
Changed the directory tree.
- genstruc/RS --> RS/
- genstruc/EA --> EA/
- genstruc/struc_util.py --> util/
- utility.py --> util/

## IO
- Fixed standard output file and standard error file: `log_cryspy` and `err_cryspy`
- `cryspy.out` is obsoleted

## Moved to CrySPY Utility
With the change in installation method, examples and cal_fingerprint have been moved to the CrySPY Utility.

## COMBO
The python library COMBO is now optional in CrySPY.
If you do not use Bayesian optimizaion, you do not need to install it.

## New calc_code
- ext: see [tutorial/random/ext_load_data]({{< relref "../tutorial/random/ext_load_data.md" >}})


## cryspy.in
### fppath
New input variable for cal_fingerprint. See [Instllation/cryspy/cryspy_1.0]({{< relref "../installation/cryspy/cryspy_1.0.md/#cal_fingerprint-optional" >}})

### fwpath
New input variable for find_wy. See [Instllation/requirements/find_wy]({{< relref "../installation/requirements/find_wy.md/#cal_fingerprint-optional" >}})

### mindist
- `mindist` can be omitted in `cryspy.in`
- `mindist_ea` is obsoleted
- added `mindist_mol_bs` and `mindist_mol_bs_factor` in `cryspy.in`