---
title: "repeat_cryspy"
weight: 90
---

`cryspy`を何度も実行するのが面倒な時は，下記の自動スクリプトが便利．
これは5分間に1回`cryspy`を実行する例．

``` bash
#!/bin/bash

set -e

while :
do
    cryspy -n
    LOG_LASTLINE=`tail -n 1 log_cryspy`
    if  [ "$LOG_LASTLINE" = "Done all structures!" ]
    then
        exit 0
    # ---------- for EA
    elif [ "${LOG_LASTLINE:0:17}" = "Reached maxgen_ea" ]
    then
        exit 0
    elif [ "$LOG_LASTLINE" = "EA is ready" ]
    then
        cryspy -n    # EA
        LOG_LASTLINE=`tail -n 1 log_cryspy`
        if [ "${LOG_LASTLINE:0:17}" = "Reached maxgen_ea" ]
        then
            exit 0
        fi
        cryspy -n    # submit jobs
    # ---------- for BO
    elif [ "${LOG_LASTLINE:0:21}" = "Reached max_select_bo" ]
    then
        exit 0
    elif [ "$LOG_LASTLINE" = "BO is ready" ]
    then
        cryspy -n    # selection
        LOG_LASTLINE=`tail -n 1 log_cryspy`
        if [ "${LOG_LASTLINE:0:21}" = "Reached max_select_bo" ]
        then
            exit 0
        fi
        cryspy -n    # submit jobs
    # ---------- for LAQA
    elif [ "$LOG_LASTLINE" = "LAQA is ready" ]
    then
        cryspy -n    # selection
        cryspy -n    # submit jobs
    fi
    sleep 300    # seconds
done
```