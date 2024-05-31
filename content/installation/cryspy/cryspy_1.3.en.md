---
title: "CrySPY 1.3.0 or later"
weight: 18
---

## CrySPY
### pip

``` bash
pip3 install csp-cryspy
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
pip3 install -e ./CrySPY
```

Instead of git clone, you can download the compressed file from the [release page](https://github.com/Tomoki-YAMASHITA/CrySPY/releases)<i class="fas fa-external-link-alt"></i>

## PHYSBO and DScribe (option)
If you use Bayesian optimization, [PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i> and
[DScribe](https://singroup.github.io/dscribe/latest/#)<i class="fas fa-external-link-alt"></i> are required.

``` bash
pip3 install physbo dscribe
```


{{% notice style="info" %}}
cal_fingerprint program and COMBO are obsolete.
{{% /notice %}}

