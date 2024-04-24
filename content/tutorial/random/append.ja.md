---
title: "Append structures"
weight: 180
---

Of course only 5 structures are not enough to find stable structures.
You can append structures whenever you want.
Here let's append more 5 structures.

For Si-Si `mindist`, the default value of 1.11 Å is used in the first structure generation (see `log_cryspy`), which is a little too close.
Let us try to set the mindist to 2.0 Å.

{{% notice style="info" %}}
For `mindist`, see also [Features > Restriction on interatomic distances]({{< ref "/features/restrict_dist" >}}).
{{% /notice %}}

Edit `cryspy.in` and change the value of `tot_struc` into `10`, and add `mindist_1 = 2.0`

``` zsh
emacs cryspy.in
cat cryspy.in
```

``` txt
[basic]
algo = RS
calc_code = soiap
tot_struc = 10
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8
mindist_1 = 2.0

[soiap]
soiap_infile = soiap.in
soiap_outfile = soiap.out
soiap_cif = initial.cif

[option]
```

Then run cryspy, and check `log_cryspy` file.

``` zsh
cryspy &
cat log_cryspy
```

``` txt
...
(omit)
...

2023/03/19 00:01:47
CrySPY 1.0.0
Restart cryspy.py


Changed tot_struc from 5 to 10
Changed mindist from None to [[2.0]]

Backup data

# ---------- Append structures
# ------ mindist
Si - Si 2.0
Structure ID      5 was generated. Space group: 218 --> 221 Pm-3m
Structure ID      6 was generated. Space group:  86 --> 129 P4/nmm
Structure ID      7 was generated. Space group: 129 --> 129 P4/nmm
Structure ID      8 was generated. Space group: 191 --> 191 P6/mmm
Structure ID      9 was generated. Space group:  31 -->  31 Pmn2_1
```

Remember that CrySPY goes into structure generation mode whenever you change the value of `tot_struc`.
In this mode, CrySPY does not do any other action such as collecting data, submitting jobs, and so on.


{{% notice note %}}
Structure generation mode whenever you change the value of `tot_struc`.  
From version 1.0.0, CrySPY automatically backs up when adding structures.
See [features/backup]({{< ref "/features/backup.md" >}}).
{{% /notice %}}


Repeat `cryspy &` several times until all appended structures are done.
The auto script may help you.

[repeat_cryspy]({{< ref "/cryspy_utility/scripts/repeat" >}})