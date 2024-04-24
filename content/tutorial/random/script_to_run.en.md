---
title: "Script to run"
weight: 110
---

{{% notice note %}}
For version 1.0.0 or later, skip this page. The executable script is automatically installed.
{{% /notice %}}

## Assumption

Here, we assume the following condition:

- CrySPY main script: `~/CrySPY_root/CrySPY-0.9.0/cryspy.py`


## Make script

Let's make a convenient shell script to avoid typing long commands over and over again.
Here, we create the script, `cryspy` (any file name will do).

``` zsh
$ emacs cryspy
$ chmod 744 cryspy
$ cat cryspy
```

``` sh
#!/bin/sh

python3 -u ~/CrySPY_root/CrySPY-0.9.0/cryspy.py 1>> log 2>> err
```

`-u` option (unbuffered option) can be omitted.


You can put this script in your $PATH, or just use like `bash ./cryspy`.
