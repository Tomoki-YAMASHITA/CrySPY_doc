---
title: "Enthalpy"
weight: 300
---

2023/10/18

{{% notice info %}}
Requirements:
- CrySPY 1.2.2 or later
- VASP or QE
{{% /notice %}}

When performing CSP at high pressure, enthalpy results can be collected instead of total energy.
Not yet compatible with softwares other than VASP and QE.

`E_eV_atom` in `cryspy_rslt` and `cryspy_rslt_energy_asc` turns into enthalpy (eV/atom). Here is the example of CSP results under 40 GPa pressure for Sr4O4.
CsCl-type structure (ID 5) is more stable than NaCl-type (ID 6).
``` bash
   Spg_num Spg_sym  Spg_num_opt Spg_sym_opt  E_eV_atom  Magmom      Opt
5       26  Pmc2_1          221       Pm-3m  -2.276790     NaN     done
6      225   Fm-3m          225       Fm-3m  -2.244800     NaN     done
1      101  P4_2cm          107        I4mm  -2.181115     NaN     done
4      123  P4/mmm          123      P4/mmm  -2.034509     NaN  not_yet
3       20  C222_1           63        Cmcm  -0.686541     NaN     done
2       75      P4           75          P4  -0.008713     NaN  not_yet
9       51    Pmma           47        Pmmm   0.096430     NaN     done
8       65    Cmmm          123      P4/mmm   1.099657     NaN     done
0      187   P-6m2          187       P-6m2   1.292124     NaN     done
7       53    Pmna           53        Pmna   5.153504     NaN  not_yet
```

## VASP

CrySPY reads energy (enthalpy) from a `OSZICAR` file.
This automatically changes to enthalpy when `PSTRESS` is set in `INCAR_x` as follows:

``` bash
PSTRESS = 400
```

You do not have to do anything in `cryspy.in`.
`energy_step_flag` is also supported for enthalpy.

Example: [CrySPY utility > examples > qe_Sr4O4_RS_pv_term](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/qe_Sr4O4_RS_pv_term)

## QE
Add `pv_term = True` in the QE section of `cryspy.in` to use enthalpy:

``` python
[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol =  40  80
pv_term = True
```
Don't forget to write `press` in the QE input:
``` bash
 &cell
    press = 400
 /
```

{{% notice warning %}}
In QE, `energy_step_flag` is not supported yet for enthalpy.
{{% /notice %}}

