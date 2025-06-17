---
title: "CrySPY 1.3.0 or later"
weight: 18
---

## CrySPY
### pip

``` bash
pip install csp-cryspy
```
**Please note that the name is csp-cryspy on PyPI, not cryspy.**
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

## PHYSBO and DScribe (optional)
If you use Bayesian optimization, [PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i> and
[DScribe](https://singroup.github.io/dscribe/latest/#)<i class="fas fa-external-link-alt"></i> are required.

``` bash
pip install physbo dscribe
```


{{% notice style="info" %}}
cal_fingerprint program and COMBO are obsolete.
{{% /notice %}}

## mpi4py (optional)
When performing [random structure generation with MPI parallelization]({{< ref "features/mpi" >}}), mpi4py is required.
``` bash
pip install mpi4py
```

## Jupyter and nglview (optional)
For analysis on a local PC or in interactive mode, [Jupyter](https://jupyter.org)<i class="fas fa-external-link-alt"></i> is required.
If you want to visualize crystal structures using [nglview](https://github.com/nglviewer/nglview)<i class="fas fa-external-link-alt"></i> in interactive mode,
install nglview by pip.
``` bash
pip install nglview
```