+++
title = "repeat_cryspy"
weight = 10
chapter = false
+++

Link: [CrySPY_utility/script/repeat_cryspy](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/blob/master/script/repeat_cryspy)

You may find it tedious to run `cryspy` over and over again. The automated script could help you.  
This automated script runs `cryspy` every 5 minutes by default.
The time interval can be adjusted by editing the following part of the script.
``` python
    sleep 300    # seconds
```

## Usage
1. copy repeat_cryspy to the working directory
2. (optional) edit the time interval in repeat_cryspy
3. run the script

You can use the nohup command to keep the job running even after logging out.

[bash]
``` bash
nohup ./repeat_cryspy &
```

[zsh]
``` zsh
nohup ./repeat_cryspy &!
```