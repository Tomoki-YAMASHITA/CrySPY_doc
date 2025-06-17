---
title: "Molecular crystal structure prediction"
weight: 80
---

{{% notice info %}}
First, see [Tutorial > Random Search (RS)]({{< relref "random/" >}}) for basic usage of CrySPY.
{{% /notice %}}

In this section, we give a tutorial on the molecular structure generation part only.
Since version 0.9.0, CrySPY has been able to generate random molecular crystal structures using [PyXtal](https://github.com/qzhu2017/PyXtal)<i class="fas fa-external-link-alt"></i>.

You need to use a pre-defined molecular by PyXtal's database (see, https://pyxtal.readthedocs.io/en/latest/Usage.html?highlight=benzene#pyxtal-molecule-pyxtal-molecule)<i class="fas fa-external-link-alt"></i>)
or create molecule files that define molecular structures.


## Pre-defined molecule
PyXtal currently supports `C60`, `H2O`, `CH4`, `NH3`, `benzene`, `naphthalene`, `anthracene`, `tetracene`, `pentacene`, `coumarin`, `resorcinol`, `benzamide`, `aspirin`, `ddt`, `lindane`, `glycine`, `glucose`, and `ROY`.

Let us generate molecular crystal structures that consist of 2 benzenes.

Move to your working directory, and copy input example files by one of the following methods.

- Download from [CrySPY utility > examples > qe_benzene_2_RS_mol](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/examples/qe_benzene_2_RS_mol)
- Copy from CrySPY utility that you installed
- (only version 0.10.3 or earlier) `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_benzene_2_RS_mol .`


Take a look at `cryspy.in`.

``` zsh
$ cat cryspy.in
[basic]
algo = RS
calc_code = QE
tot_struc = 6
nstage = 2
njob = 2
jobcmd = qsub
jobfile = job_cryspy

[structure]
struc_mode = mol
atype = H C
nat = 12 12
mol_file = benzene
nmol = 2

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol = 40  60

[option]

```

In generating molecular crystal structures, you have to set `struc_mode = mol` in the `[structure]` section.
Molecule file(s) and the number of molecule(s) are specified as:

- mol_file = benzene
- nmol = 2

Run CrySPY and see the initial structures (`./data/init_POSCARS`).


## User-defined molecule

Move to your working directory, and copy input example files for 2 formula units of Li3PS4.

- version 1.0.0 or later
  - Copy from CrySPY utility
- version 0.10.3 or earlier
  - `cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_Li3PS4_2fu_RS_mol .`

``` zsh
$ cd QE_Li3PS4_2fu_RS_mol
$ ls
Li.xyz  PS4.xyz  calc_in/  cryspy.in
```

Molecule files of Li and PS4 are included. Supported formats in PyXtal are `.xyz`, `.gjf`, `.g03`, `.g09`, `.com`, `.inp`, `.out`, and pymatgen’s `JSON` serialized molecules.

``` zsh
$ cat Li.xyz
1
New structure
 Li  0.000  0.000  0.000
```

``` zsh
$ cat PS4.xyz
5
New structure
 P    0.000000    0.000000    0.000000
 S    1.200000    1.200000   -1.200000
 S    1.200000   -1.200000    1.200000
 S   -1.200000    1.200000    1.200000
 S   -1.200000   -1.200000   -1.200000
```

Check `cryspy.in`.

``` zsh
$ cat cryspy.in
[basic]
algo = RS
calc_code = QE
tot_struc = 4
nstage = 2
njob = 1
jobcmd = qsub
jobfile = job_cryspy

[structure]
struc_mode = mol
atype = Li P S
nat = 6 2 8
mol_file = ./Li.xyz  ./PS4.xyz
nmol = 6 2

[QE]
qe_infile = pwscf.in
qe_outfile = pwscf.out
kppvol = 40  60

[option]

```

A single atom (Li atom in this case)  is treated as a molecule in the molecular crystal structure generation mode.
In this example, a random molecular structure is composed of six Li molecules (atoms) and two PS4 molecules specified as:

- mol_file = ./Li.xyz  ./PS4.xyz
- nmol = 6 2

In `mol_file`, set relative path of molecule files from `cryspy.in`.
Here the molecule files are placed in the same directory.


Run CrySPY and see the initial structures (`./data/init_POSCARS`).


## timeout_mol
Molecular crystal structure generation can be time consuming because PyXtal calculates the molecule directions according to a specified space group.
Sometimes molecular crystal structure generation gets stuck.
So we set a time limit on the single structure generation.
The time limit (`timeout_mol`) is set to 120 seconds by default.
If the limit is insufficient, you have to increase it as (see last line):

``` zsh
struc_mode = mol
atype = Li P S
nat = 6 2 8
mol_file = ./Li.xyz  ./PS4.xyz
nmol = 6 2
timeout_mol = 300.0
```

## Volume of unit cell

You can control the volume of unit cells by changing the value(s) of scaling factor, `vol_factor`, in `cryspy.in`.
By default, `vol_factor` is set to `1.0`.
It is also possible to specify a range of factors.
Set minimum and maximum values as follows:
``` zsh
struc_mode = mol
atype = Li P S
nat = 6 2 8
mol_file = ./Li.xyz  ./PS4.xyz
nmol = 6 2
timeout_mol = 300.0
vol_factor = 0.8 1.5
```

