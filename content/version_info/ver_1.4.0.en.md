---
title: "Version 1.4.0"
weight: 960
---
## Important change
### New algorithm: EA-vc
- Currently, only the ASE interface is supported. Support for VASP and others is planned. [CrySPY > Interface]({{< ref "interface" >}})
- [CrySPY > Tutorial > Variable-composition evolutionary algorithm (EA-vc)]({{< ref "tutorial/ea-vc" >}})
- [CrySPY > Search algorithms > Variable-composition evolutionary algorithm (EA-vc)]({{< ref "search_algo/ea-vc" >}})

### Interactive mode
- RS, EA, and EA-vc can be run from the Jupyter environment.
- Only the ASE interface is supported.
- [CrySPY > Tutorial > Interactive mode (Jupyter Notebook)]({{< ref "tutorial/interactive" >}})
- [CrySPY > Features > Interactive mode]({{< ref "features/interactive_mode" >}})

### EA
- `tot_struc` is no longer used in EA. The number of structures in the first generation is now determined by `n_pop`.

### Interatomic distance check after structrue optimization
- Added `check_mindist_opt` to the [option] section in `cryspy.in`.
- Default: `check_mindist_opt = True`.
- After structure relaxation, a check is performed to ensure that the minimum interatomic distance constraint is satisfied.

### Common
- The `natot` parameter in `cryspy.in` has been removed.
- Ctrl_ext has been removed.


## Fixed
- Fixed a bug related to using `TS` as the `score` in BO.
- Several other minor fixes.