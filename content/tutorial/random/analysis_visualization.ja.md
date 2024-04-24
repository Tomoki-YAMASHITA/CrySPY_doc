---
title: "Analysis and visualization"
weight: 190
---

## Download the data

It is assumed here that you analyze and visualize CrySPY data in your local PC.
If you use CrySPY in super computers or workstations, download the data in your local PC.
You can delete the `work` and `backup` directory if you do not need it because the file size could be very large.


## jupyter notebook

Move to the `data/` directory in results you just download.
Then copy `cryspy_analyzer_RS.ipynb` from [CrySPY utility]({{< ref "/installation/utility.md" >}}).

``` zsh
$ ls
calc_in/ cryspy.in cryspy.stat  data/  err_cryspy  log_cryspy
```

``` zsh
$ cd data
$ ls
cryspy_rslt  cryspy_rslt_energy_asc  init_POSCARS  opt_CIFS.cif  opt_POSCARS  pkl_data/
```

``` zsh
cp /path/to/CrySPY_utility/cryspy_analyzer_RS.ipynb .
```

Run jupyter. (VScode, jupyter lab, jupyter notebook, and so on.)
You can get the following figure by simply running the steps in order.

![RS for Si8](/images/tutorial/Si8_RS.png?width=40vw)



