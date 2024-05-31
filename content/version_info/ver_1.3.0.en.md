---
title: "Version 1.3.0"
weight: 970
---
## Important change
### Common
- working directory name  
  work000000 --> work0
- We used to pickle data by grouping several data into tuples, but we changed it to pickle each item individually.  
  For example, rs_id_data.pkl --> id_queueing.pkl and id_running.pkl

### BO
- Using cal_fingerprint program is obsolete. [dscribe](https://singroup.github.io/dscribe/latest)<i class="fas fa-external-link-alt"></i> is required instead.
  + `fppath` and `fp_rmin` in cryspy.in are obsolete.
- Changed the Bayesian optimization library from COMBO to [PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i>
- See [Installation > CrySPY > CrySPY 1.3.0 or later]({{< ref "installation/cryspy/cryspy_1.3.md" >}})

## Fixed
### soiap
- support for recent pymatgen

## Added
- Random structure generation and structure generation by EA are now available as libraries. see [Features > As library]({{< ref "features/as_library" >}})

## for developer
- We stopped using global variables (rin), now uses dataclass for input data.
- Many of the input variables were lists, but we changed them to tuples.