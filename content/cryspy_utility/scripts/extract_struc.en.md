---
title: "extract_struc.py"
weight: 5
---

2023 April 16 update

Script to extract structures from `init_struc_data.pkl` or `opt_struc_data.pkl`.
This script can print stucture information and output cif files.

One can specify structure ID(s) using `-i` option.
Top k structures (the k most stable structures) can be extracted using `-t` option.
`-a` option is for outputting all the structures.
(note that many cif files will be output.)
Symmetrized cif files can be generated with `-s` option.
When outputting a symmetrized CIF file, you can also specify a tolerance with `--tolerance`.
Structure information is printed with `-p`.
If you use `-p` option, cif files are not output.
You can also read a gzipped file (e.g., `opt_struc_data.pkl.gz`).

## Update History
- 2024 April 16: --tolerance option, gzip
- 2023 July 21: --print option

## Usage
``` zsh
python3 extract_struc.py -h
```
or if you put the script in your PATH, you can omit `python3`
``` zsh
extract_struc.py -h
```
``` zsh
usage: extract_struc.py [-h] [-p] [-a] [-i [INDEX ...]] [-t TOP] [-r] [-s] [--tolerance TOLERANCE] infile

positional arguments:
  infile                input file

options:
  -h, --help            show this help message and exit
  -p, --print           just print, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -ps
  -a, --all_id          all structures, e.g., extract_struc.py opt_struc_data.pkl -as
  -i [INDEX ...], --index [INDEX ...]
                        structure ID, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
  -t TOP, --top TOP     top k structures, e.g. (k = 3), extract_struc.py opt_struc_data.pkl -t 3 -s
  -r, --rank            add rank in file names, e.g., extract_struc.py opt_struc_data.pkl -t 3 -rs
  -s, --symmetrized     symmetrized structure, e.g., extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
  --tolerance TOLERANCE
                        tolerance for symmetrization (default 0.01), e.g., extract_struc.py opt_struc_data.pkl -i 0 1 -s --tolerance 0.01
```

## Examples
### Print

The `-p` option can be used in combination with any option except for `-s` option.

``` bash
extract_struc.py -p opt_struc_data.pkl -i 0 1
```

``` bash
ID 0
Full Formula (Na8 Cl8)
Reduced Formula: NaCl
abc   :   6.823618   6.823618   7.566454
angles:  90.000000  90.000000  96.650518
pbc   :       True       True       True
Sites (16)
  #  SP           a         b         c
---  ----  --------  --------  --------
  0  Na    0         0         1
  1  Na    0         0         0.5
  2  Na    0.704707  0.295293  0.75
  3  Na    0.295293  0.704707  0.25
  4  Na    0.5       0         1
  5  Na    0.5       0         0.5
  6  Na    0         0.5       0.5
  7  Na    0         0.5       0
  8  Cl    0.5       0.5       0
  9  Cl    0.5       0.5       0.5
 10  Cl    0.484753  0.515247  0.75
 11  Cl    0.515247  0.484753  0.25
 12  Cl    0.828247  0.171753  0.851096
 13  Cl    0.171753  0.828247  0.351096
 14  Cl    0.828247  0.171753  0.648904
 15  Cl    0.171753  0.828247  0.148904

ID 1
Full Formula (Na8 Cl8)
Reduced Formula: NaCl
abc   :   8.145021   8.145021   4.324235
angles:  90.000000  90.000000 120.000000
pbc   :       True       True       True
Sites (16)
  #  SP            a          b         c
---  ----  ---------  ---------  --------
  0  Na     0.666667   0.333333  0.736206
  1  Na     0.666667   0.333333  0.263794
  2  Na     0.913147   0.086853  0.5
  3  Na     0.913147   0.826295  0.5
  4  Na     0.173705   0.086853  0.5
  5  Na     0.77711    0.22289   0
  6  Na     0.77711    0.55422   0
  7  Na     0.44578    0.22289   0
  8  Cl     0.027675   0.423376  0.5
  9  Cl    -0.423376  -0.395701  0.5
 10  Cl     0.395701  -0.027675  0.5
 11  Cl    -0.423376  -0.027675  0.5
 12  Cl     0.395701   0.423376  0.5
 13  Cl     0.027675  -0.395701  0.5
 14  Cl     0.333333   0.666667  0.5
 15  Cl     0          0         0
```


### Structure ID
``` bash
extract_struc.py opt_struc_data.pkl -i 7 10 12
```

`7.cif`, `10.cif`, and `12.cif` are output.


For symmetrized cif,
``` zsh
extract_struc.py opt_struc_data.pkl -i 7 10 12 -s
```

2024 April 16  
With the tolerance parameter (default 0.01)
``` zsh
extract_struc.py opt_struc_data.pkl -i 7 10 12 -s --tolerance 0.01
```

### Top k structures

{{% notice info %}}
`rslt_data.pkl` is required in the same directory as the input.
{{% /notice %}}

Let us suppose
- ./data/pkl_data/opt_struc_data.pkl
- ./data/pkl_data/rslt_data.pkl

and `cryspy_rslt_energy_asc` file is as follows:
``` text
    Spg_num     Spg_sym  Spg_num_opt Spg_sym_opt    E_eV_atom  Magmom      Opt
9       110      I4_1cd          110      I4_1cd -1284.708037     NaN  not_yet
16        4        P2_1            4        P2_1 -1284.693651     NaN     done
97       92    P4_12_12           91      P4_122 -1284.692494     NaN     done
8        57        Pbcm           57        Pbcm -1284.668504     NaN     done
81       19  P2_12_12_1           19  P2_12_12_1 -1284.635684     NaN     done
...
```
Top k(=3) structures can be extracted with:
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3
```
In this example, `rlst_data.pkl` must be in `./data/pkl_data/`.
`9.cif`, `16.cif`, and `97.cif` are output.

The rank can be included in cif file names with `-r` option:
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -r
```
`1_9.cif`, `2_16.cif`, and `3_97.cif` are output.

For symmetrized cif:
``` zsh
extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -rs
```


### All the structures
You should make a directory.

``` zsh
mkdir init_cifs
cd init_cifs
extract_struc.py /path/to/opt_struc_data.pkl -a
```

For symmetrized cif,
``` zsh
extract_struc.py /path/to/init_struc_data.pkl -as
```


### Gzipped files
2024 April 16  
Gzipped files (end with `.gz`) can be read:
``` zsh
extract_struc.py opt_struc_data.pkl.gz -i 0 1 -s
```