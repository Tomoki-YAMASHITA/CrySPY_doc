---
title: "find_wy (オプション)"
weight: 30
---

CrySPYではこれまで，任意の空間群（対称性）持つ構造を生成するために[find_wy](https://github.com/nim-hrkn/find_wy)<i class="fas fa-external-link-alt"></i>を利用してきた．しかし，CrySPY 0.9.0からはデフォルトでは[PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i>ライブラリを採用している．
CrySPY 0.9.0 以上で構造生成にPyXtalを使う場合は，find_wyのインストールはスキップできる．
従来通りfind_wyを利用することももちろん可能である．
CrySPY 0.8.0 以前のものでは，空間群を考慮した構造生成にはfind_wyのインストールが必要となる．

{{% notice info %}}
CrySPY 0.9.0 以上ではfind_wyのインストールはスキップできる．
{{% /notice %}}



## find_wyのインストール

### m_tspace

find_wyをコンパイルするためには，まずは[m_tspace](https://github.com/nim-hrkn/m_tspace)<i class="fas fa-external-link-alt"></i>をコンパイルして，ライブラリを生成する必要がある．詳細は以下のm_tspaceのサイトを参照すること．
 - [m_tspace](https://github.com/nim-hrkn/m_tspace)<i class="fas fa-external-link-alt"></i>
 - [Wiki of m_tspace](https://github.com/nim-hrkn/m_tspace/wiki)<i class="fas fa-external-link-alt"></i>

m_tspace のソースをgitでダウンロードしてくる．ダウンロード先は例えば

``` bash
$ mkdir -p ~/local
$ cd ~/local
$ git clone https://github.com/nim-hrkn/m_tspace.git
```

m_tspace のコンパイルにはさらに二つのファイルが必要となる．

[TSPASE](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/)<i class="fas fa-external-link-alt"></i>
から下記ファイルを`~/local/m_tspace`にダウンロードする:

- <i class="far fa-file-alt"></i> [tsp98.f](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f)
- <i class="far fa-file-alt"></i> [prmtsp.f](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f)

``` bash
$ cd m_tspace
$ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f
$ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f
```

makefileをコンパイラに合わせて編集して，makeする．
コンパイラに`ifort`を使う場合は，`-check all`オプションを消さないとうまく動かない．また`-O2`オプションを設定する．

``` bash
$ emacs makefile
$ head -n 4 makefile
#FC=gfortran
#FFLAGS=-g -cpp -DUSE_GEN -ffixed-line-length-255
FC=ifort
FFLAGS=-O2 -g -traceback -cpp -DUSE_GEN -132
$ make
```

`gfortran`を使う場合は，以下のようなエラーに遭遇するかもしれない．

```
tsp98.f:9839:32:

       CALL SUBGRP(MG,JG,MGT,JGT,NTAB,IND)
                                1
Error: Actual argument contains too few elements for dummy argument 'ntab' (12/48) at (1)
make: *** [tsp98.o] Error 1
```

その時は`tsp98.f`を以下のように書き換える(9925行目):

Before:
``` fortran
9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7
9914: C
9915: C    IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN
9916: C          TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0
9917: C    ELSE
9918: C          IND=-1
9919: C
9920: C                 1993/12/25
9921: C                   BY  S.TANAKA AND A. YANASE
9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7
9923: C
9924:       SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND)
9925:       DIMENSION NTAB(48),JG(48),JGT(48)
```

After:
``` fortran
9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7
9914: C
9915: C    IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN
9916: C          TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0
9917: C    ELSE
9918: C          IND=-1
9919: C
9920: C                 1993/12/25
9921: C                   BY  S.TANAKA AND A. YANASE
9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7
9923: C
9924:       SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND)
9925:       DIMENSION NTAB(12),JG(48),JGT(48)
```

コンパイルに成功すれば`m_tsp.a`というライブラリができる．



### find_wy

詳細はfind_wyのサイトをチェックすること:
 - [find_wy](https://github.com/nim-hrkn/find_wy)<i class="fas fa-external-link-alt"></i>
 - [Wiki of find_wy](https://github.com/nim-hrkn/find_wy/wiki)<i class="fas fa-external-link-alt"></i>

find_wyのソースをgitでクローンしてくる．例えば:

``` bash
$ mkdir -p ~/local
$ cd ~/local
$ git clone https://github.com/nim-hrkn/find_wy.git
```

`make.inc`を編集して，先ほど用意した`m_tsp.a`のパスを設定する．

``` bash
$ cd find_wy
$ emacs make.inc
$ head -n 4 make.inc
TSPPATH=~/local/m_tspace
#INCPATH = -I $(TSPPATH)
TSP=$(TSPPATH)/m_tsp.a
```

ここでも`-check all`を削除して`-O2`オプションを付けた方が良い．
準備できたら`make`する．

``` bash
$ make
```

コンパイルできてfind_wyの実行ファイルが得られたら，実行してテストする．

``` bash
$ ./find_wy input_sample/input_si4o8.txt
```

問題なければ`POS_WY_SKEL_ALL.json`などのファイルが生成される．




## find_wyの実行ファイル
### CrySPY 1.0.0 or later
PATHが通ったところにfind_wyの実行ファイルを置く．もしくは下記のように`cryspy.in`で実行ファイルのpathを指定する.
```
[structure]
use_find_wy = True
fwpath = /xxx/xxx/xxx/find_wy
```

### CrySPY 0.10.3 or earlier
CrySPYでfind_wyを構造生成に用いる場合は所定の位置にfind_wyの実行ファイルを置いておく必要がるので，CrySPY本体をダウンロード後にfind_wyの実行ファイルをコピーしておく．CrySPYは任意のディレクトリに設置できるので，例えば`~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy`．

