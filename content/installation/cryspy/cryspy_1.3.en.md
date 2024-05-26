---
title: "CrySPY 1.3.0 or later"
weight: 18
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

## DScribe (option)
If you use Bayesian optimization, [DScribe](https://singroup.github.io/dscribe/latest/#)<i class="fas fa-external-link-alt"></i> is required to calculate structure descriptors.

``` bash
pip install dscribe
```

## cal_fingerprint (obsolete)

{{% notice style="info" %}}
cal_fingerprint is obsolete.
{{% /notice %}}

