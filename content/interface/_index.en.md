+++
title = "Interface"
weight = 31
chapter = true
####pre = "<b>1. </b>"
+++


# Interface

2025 June 16

CrySPY supports multiple structure optimizers:

+ First-principles calculation
  - [VASP](https://www.vasp.at)<i class="fas fa-external-link-alt"></i>
  - [Quantum Espresso](http://www.quantum-espresso.org)<i class="fas fa-external-link-alt"></i>
  - [OpenMX](http://www.openmx-square.org/)<i class="fas fa-external-link-alt"></i> (CrySPY 0.9.0 or later)
+ Interatomic potential
  - [soiap](https://github.com/nbsato/soiap)<i class="fas fa-external-link-alt"></i>
  - [LAMMPS](http://lammps.sandia.gov)<i class="fas fa-external-link-alt"></i>
+ Other (Machine learning potentials and other models that support ASE)
  - [ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i> (CrySPY 1.2.0 or later)
  - [Interactive mode（ASE）]({{< ref "features/interactive_mode" >}})（CrySPY 1.4.0 or later）

At least one optimizer is required.

## Algorithm compatibility

CrySPY 1.4.0  
Developing additional interfaces for EA-vc.

|      | RS   | EA   | EA-vc| BO  | LAQA |
| ---- |:----:|:----:|:----:|:----:|:----:|
| VASP | ✓    | ✓    |  ×   | ✓   | ✓    |
| Quantum Espresso | ✓    | ✓    |  ×   | ✓   | ✓    |
| OpenMX | ✓    | ✓    |  ×   | ✓   | ×    |
| soiap | ✓    | ✓    |  ×   | ✓   | ✓    |
| LAMMPS | ✓    | ✓    |  ×   | ✓   | ×    |
| ASE | ✓    | ✓    |  ✓   | ✓   | ×    |
| Interactive (ASE) | ✓    | ✓    |  ✓   | ×   | ×    |


## Option compatibility


|      | energy_step_flag   | struc_step_flag  | force_step_flag | stress_step_flag |
| ---- |:----:|:----:|:----:|:----:|
| VASP | ✓    | ✓    |  ✓   | ✓   |
| Quantum Espresso | ✓    | ✓    |  ✓   | ✓   |
| OpenMX | ×    | ×    |  ×   | ×   |
| soiap | ✓    | ✓    |  ✓   | ✓   |
| LAMMPS | ×    | ×    |  ×   | ×   |
| ASE | ×    | ×    |  ×   | ×   |