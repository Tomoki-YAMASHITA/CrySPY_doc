---
title: "soiap_Si8_RS"
weight: 10
---

## Download
{{% button href="/examples/soiap_Si8_RS.tar.gz" icon="download" %}}soiap_Si8_RS.tar.gz{{% /button %}}

## cryspy.in
``` python
[basic]
algo = RS
calc_code = soiap
tot_struc = 5
nstage = 1
njob = 2
jobcmd = zsh
jobfile = job_cryspy

[structure]
natot = 8
atype = Si
nat = 8

[soiap]
soiap_infile = soiap.in
soiap_outfile = soiap.out
soiap_cif = initial.cif

[option]
```

## calc_in/

### soiap.in_1
``` bash
crystal initial.cif ! CIF file for the initial structure
symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize

md_mode_cell 3 ! cell-relaxation method
               ! 0: FIRE, 2: quenched MD, or 3: RFC5
number_max_relax_cell 1000 ! max. number of the cell relaxation
number_max_relax 1 ! max. number of the atom relaxation
max_displacement 0.1 ! max. displacement of atoms in Bohr

external_stress_v 0.0 0.0 0.0 ! external pressure in GPa

th_force 5d-5 ! convergence threshold for the force in Hartree a.u.
th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u.

force_field 1 ! force field
              ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2,
              ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or
              ! 6: Lennard-Jones
```

### job_cryspy
``` bash
#!/bin/sh

# ---------- soiap
EXEPATH=/path/to/soiap
$EXEPATH/soiap soiap.in > soiap.out 2>&1

# ---------- CrySPY
sed -i -e '3 s/^.*$/done/' stat_job
```