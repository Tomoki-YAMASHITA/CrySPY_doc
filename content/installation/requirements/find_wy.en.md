---
title: "find_wy (optional)"
weight: 30
---

CrySPY have utilized [find_wy](https://github.com/nim-hrkn/find_wy)<i class="fas fa-external-link-alt"></i> to generate a random structure for a given space group (symmetry).
However, CrySPY employs [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i> library for structure generation as default since version 0.9.0.
You can skip to install find_wy in CrySPY 0.9.0 or later, but you may use find_wy.
For CrySPY 0.8.x or earlier, find_wy is required to generate a random structure for a given space group.

{{% notice info %}}
You can skip to install find_wy in CrySPY 0.9.0 or later.
{{% /notice %}}



## Installation of find_wy

### m_tspace

First you need compile [m_tspace](https://github.com/nim-hrkn/m_tspace)<i class="fas fa-external-link-alt"></i> for find_wy.
Check these sites to compile it.
 - [m_tspace](https://github.com/nim-hrkn/m_tspace)<i class="fas fa-external-link-alt"></i>
 - [Wiki of m_tspace](https://github.com/nim-hrkn/m_tspace/wiki)<i class="fas fa-external-link-alt"></i>

Download the source code of m_tspace in an arbitrary directory. For example:

``` bash
$ mkdir -p ~/local
$ cd ~/local
$ git clone https://github.com/nim-hrkn/m_tspace.git
```

Additional two files are required to compile m_tspace.
Download the following files in `~/local/m_tspace` from [TSPASE](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/)<i class="fas fa-external-link-alt"></i>:

- <i class="far fa-file-alt"></i> [tsp98.f](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f)
- <i class="far fa-file-alt"></i> [prmtsp.f](http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f)

``` bash
$ cd m_tspace
$ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f
$ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f
```

Edit the makefile and run the make command.
If you use `ifort`, you had better delete `-check all` option and use `-O2` option.

``` bash
$ emacs makefile
$ head -n 4 makefile
#FC=gfortran
#FFLAGS=-g -cpp -DUSE_GEN -ffixed-line-length-255
FC=ifort
FFLAGS=-O2 -g -traceback -cpp -DUSE_GEN -132
$ make
```

If you used `gfortran`, you might face the following problem:

```
tsp98.f:9839:32:

       CALL SUBGRP(MG,JG,MGT,JGT,NTAB,IND)
                                1
Error: Actual argument contains too few elements for dummy argument 'ntab' (12/48) at (1)
make: *** [tsp98.o] Error 1
```

Then change the source file of `tsp98.f` like this (line 9925):

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

If you succeed in compiling, you get `m_tsp.a`.



### find_wy

Check these sites to compile find_wy:
 - [find_wy](https://github.com/nim-hrkn/find_wy)<i class="fas fa-external-link-alt"></i>
 - [Wiki of find_wy](https://github.com/nim-hrkn/find_wy/wiki)<i class="fas fa-external-link-alt"></i>

Download the source code of find_wy in an arbitrary directory. For example:

``` bash
$ mkdir -p ~/local
$ cd ~/local
$ git clone https://github.com/nim-hrkn/find_wy.git
```

Edit `make.inc` and set the path to the `m_tsp.a` that you just prepared.

``` bash
$ cd find_wy
$ emacs make.inc
$ head -n 4 make.inc
TSPPATH=~/local/m_tspace
#INCPATH = -I $(TSPPATH)
TSP=$(TSPPATH)/m_tsp.a
```

You can delete `-check all` option and use `-O2` option.
Then run the make command.

``` bash
$ make
```

When you get the executable file of find_wy, run the following command for test:

``` bash
$ ./find_wy input_sample/input_si4o8.txt
```

If there is no problem, `POS_WY_SKEL_ALL.json` file is generated.




## Executable file of find_wy
### CrySPY 1.0.0 or later
Put the executable file of `find_wy` in your PATH. Or, specify the path of the executable file in `cryspy.in` as follows:
```
[structure]
use_find_wy = True
fwpath = /xxx/xxx/xxx/find_wy
```

### CrySPY 0.10.3 or earlier
When you use find_wy, put the executable file of find_wy in `~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/`, so that the executable file path is `~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy`.

