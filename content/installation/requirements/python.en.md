---
title: "Python"
weight: 10
---

## Python

### CrySPY 1.3.0 or later
+ Python >= 3.8
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.5.3)
  - (optional) mpi4py
  - (optional, required if algo is BO) [PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i> (Not COMBO)
  - (optional, required if algo is BO) [dscribe](https://singroup.github.io/dscribe/latest)<i class="fas fa-external-link-alt"></i>

If you install csp-cryspy with pip, necessary libraries such as PyXtal, pymatgen, and ASE will be installed automatically.
Go to [Installation > CrySPY]({{< relref "installation/cryspy" >}}) for detail.

#### Quick install
``` bash
pip3 install csp-cryspy dscribe physbo
```


### CrySPY 1.1.0 -- 1.2.5

+ Python >= 3.8
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.5.3)
  - (optional) mpi4py
  - (optional, required if algo is BO) [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>

If you install csp-cryspy with pip, necessary libraries such as PyXtal will be installed automatically.
Go to [Installation > CrySPY]({{< relref "installation/cryspy" >}}).
Manual installation of COMBO is required when using Bayesian optimization.


### CrySPY 1.0.0

+ Python >= 3.8
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.5.3)
  - (optional, required if algo is BO) [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>

{{% notice info %}}
[2023 April 22] How to instlal PyXtal (pyshtools) on arm64 MacOS is figured out. See [Arm64 on MacOS (without Rosseta 2)]({{< relref "installation/cryspy/cryspy_1.0.md#arm64-on-macos-without-rosseta-2" >}})  
[2023 March 15]
On MacOS, it is difficult to install PyXtal in the arm64 environment, so it is recommended to use the x86_64 environment with Rosetta 2.
{{% /notice %}}


### CrySPY 0.10.0 -- 0.10.3
Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.

+ Python 3.x.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.2.2)
  - (PyXtal requires pymatgen) [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (>= 2022.x.x)


### CrySPY 0.9.2

Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.

+ Python 3.x.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (>= 2022.x.x)
  - [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> (>= 0.2.2)


{{% notice info %}}
[2021 July 15]
If you use PyXtal >= 0.2.9, update CrySPY to the version 0.10.0 or later.
{{% /notice %}}


{{% notice info %}}
[2021 March 18]
There is a breaking change in pymatgen 2022.x.x. CrySPY 0.9.2 and PyXtal 0.2.2 support this change in pymatgen.
{{% /notice %}}


{{% notice info %}}
[2021 Feb. 5]
PyXtal depends on numba, but numba does not support Python 3.9.
So you should use Python 3.8.x for a while.  
[2021 March 18]
Currently numba supports Python 3.9.x.
{{% /notice %}}

{{% notice info %}}
[2021 Feb. 7]
PyXtal requires SciPy, but the latest version of SciPy (v1.6.0) might include a bug for deepcopy.
You should use SciPy v1.5.4 for a while.  
[2021 March 18]
This bug has been fixed in SciPy v1.6.1.
{{% /notice %}}

### CrySPY 0.9.0 -- 0.9.1

+ Python 3.8.x
  - [COMBO](https://github.com/Tomoki-YAMASHITA/combo3)<i class="fas fa-external-link-alt"></i>
  - [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> (<= 2021.x.x)
  - [PyXtal 0.1.6 - 0.2.1](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i>



### CrySPY 0.8.0 or earlier

See the old document which is included CrySPY itself.
