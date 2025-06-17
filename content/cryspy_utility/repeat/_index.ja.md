+++
title = "repeat_cryspy"
weight = 10
chapter = false
+++

リンク: [CrySPY_utility/script/repeat_cryspy](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/blob/master/script/repeat_cryspy)


`cryspy`を何度も手動で実行するのが面倒な時は，自動化スクリプトが利用できる．  
この自動化スクリプトはデフォルトで5分に1回`cryspy`を実行する．
インターバルの時間はスクリプトの下記の部分を編集することで調整できます．
``` python
    sleep 300    # seconds
```

## 使い方
1. repeat_cryspyを作業ディレクトリにコピー
2. (optional) インターバルの時間を変更
3. repeat_cryspyを実行

ログアウトしてもジョブを実行し続けるためには，`nohup`コマンドを使う.


[bash]
``` bash
nohup ./repeat_cryspy &
```

[zsh]
``` zsh
nohup ./repeat_cryspy &!
```