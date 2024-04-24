---
title: "CrySPY 1.0.0 or later"
weight: 20
---

## CrySPY
### pip
CrySPY 1.0.0 or later can be installed by pip.

``` bash
pip install csp-cryspy
```

The executable script, `cryspy`, is automatically installed in your PATH. You can check by

``` bash
which cryspy
```

### Editable mode
If you want to change the source code of CrySPY, you can use pip's editable mode (-e option).

``` bash
git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git
pip install -e ./CrySPY
```

Instead of git clone, you can download the compressed file from the [release page](https://github.com/Tomoki-YAMASHITA/CrySPY/releases)<i class="fas fa-external-link-alt"></i>

## cal_fingerprint (optional)
cal_fingerprint is a program to calculate structure descriptors and is required if algo is BO.
From CrySPY 1.0.0, the cal_fingerprint program is included in CrySPY utility.
See [Instllation/CrySPY_utility/Compile cal_fingerprint]({{< relref "../utility.md/#compile-cal_fingerprint" >}}) for compilation.

Put the executable file of `cal_fingerprint` in your PATH. Or, specify the path of the executable file in `cryspy.in` as follows:
```
[BO]
fppath = /xxx/xxx/xxx/cal_fingerprint
```

## Arm64 on MacOS (without Rosseta 2)

{{% notice style="info" %}}
In PyXtal, starting from version 0.6.3, pyshtools is no longer mandatory. Therefore, you can ignore the information written below if you are using a recent version of PyXtal.
{{% /notice %}}

1. Install [miniforge3](https://github.com/conda-forge/miniforge)<i class="fas fa-external-link-alt"></i> (We do not know how to install pyshtools with homebrew python.)
2. Install pymatgen, pyshtools by conda (recent versions of pyshtools are available in conda-forge)
``` bash
conda install pymatgen
conda install pyshtools
```
3. Install CrySPY
``` bash
pip3 install csp-cryspy
```