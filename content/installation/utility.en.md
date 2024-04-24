---
title: "CrySPY utility (optional)"
weight: 40
---

Setting up Python environment in your local PC is useful to analyze CrySPY results.
Utility tools (jupyter notebook and python scripts) are available for analysis and visualization.
Input examples are also included in CrySPY utility.

{{% notice style="info" %}}
See also [cryspy_utility]({{< ref "/cryspy_utility" >}})
{{% /notice %}}

You need several Python libraries such as

- [jupyter](https://jupyter.org/)<i class="fas fa-external-link-alt"></i>
- [NumPy](https://numpy.org/)<i class="fas fa-external-link-alt"></i>
- [pandas](https://pandas.pydata.org/)<i class="fas fa-external-link-alt"></i>
- [matplotlib](https://matplotlib.org/)<i class="fas fa-external-link-alt"></i>
- [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i>


## Download CrySPY utility

### Git

``` zsh
$ git clone https://github.com/Tomoki-YAMASHITA/CrySPY_utility.git
```

### zip

Go to [CrySPY utility](https://github.com/Tomoki-YAMASHITA/CrySPY_utility)<i class="fas fa-external-link-alt"></i> and click green `Code` button, then choose `Download ZIP`.


## Compile cal_fingerprint
When you use Bayesian optimization, compile `cal_fingerpirnt` program which calculates structure descriptors.
A Fortran compiler is needed.
Install in the environment where CrySPY is used, such as a workstations and supercomputers.

``` bash
cd CrySPY_utility/f-fingerprint
emacs Makefile
make
```

See also [Instllation/CrySPY]({{< ref "installation/cryspy/" >}}).