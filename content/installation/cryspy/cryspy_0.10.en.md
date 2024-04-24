---
title: "CrySPY 0.10.3 or earlier"
weight: 30
---

Installation of CrySPY is very simple.
Just download it!

## Download
You can put the source code of CrySPY in an arbitrary directory.
For example, let us put the source code in `~/CrySPY_root/CrySPY-x.x.x` (x.x.x means the version).
Use git or download the compressed file.

### Git

``` bash
mkdir ~/CrySPY_root
cd ~/CrySPY_root
git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git CrySPY-x.x.x
```

### zip or tar.gz file
Download the source as a zip or tar.gz file from {{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY/releases" icon="fas fa-download" %}} GitHub release {{% /button %}}.  
Then put the source like `~/CrySPY_root/CrySPY-x.x.x` 




## Directory tree

Directory tree in `~/CrySPY_root/CrySPY-x.x.x/`:

``` bash
CrySPY-x.x.x
├── CHANGELOG.md
├── CrySPY/
│   ├── BO/
│   ├── EA/
│   ├── IO/
│   ├── LAQA/
│   ├── RS/
│   ├── __init__.py
│   ├── calc_dscrpt/
│   ├── f-fingerprint/
│   ├── find_wy/
│   ├── gen_struc/
│   ├── interface/
│   ├── job/
│   └── start/
│   └── utility.py
├── LICENSE
├── README.md
├── cryspy.py
├── docs/
├── example/
└── utility/
```

{{% notice info %}}
Main script is `cryspy.py`.
{{% /notice %}}



## Setup (optional)

### find_wy (optional)
When you use find_wy, put the executable file of find_wy in `~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/`, so that the executable file path is `~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy`.

``` bash
cd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy
cp ~/local/find_wy/find_wy .
```


### Compile cal_fingerprint (optional)
When you use Bayesian optimization, compile `cal_fingerpirnt` program which calculates structure descriptors.

``` bash
cd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/f-fingerprint
emacs Makefile
make
```

Make sure that the executable file of `cal_fingerprint` exists in `~/CrySPY_root/CrySPY-x.x.x/CrySPY/f-fingerprint/`.
