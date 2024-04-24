---
title: "Version 0.10.3 or earlier"
weight: 1000
---

+ [2022 May 17] version 0.10.3 released
  - Bug fixed: LAMMPS IO.
+ [2022 January 24] version 0.10.2 released
  - Added nrot: maximum number of times to rotate molecules in mol_bs
+ [2021 September 30] version 0.10.1 released
  - Fixed the problem of numpy.random.seed in multiprocessing
+ [2021 July 25] version 0.10.0 released
  - Support PyXtal 0.2.9 or later
  - LAQA can be used with QE
  - Upper and lower limits of energy for EA and BO
+ [2021 July 13] paper published
  - Our paper on CrySPY software has been published in [STAM:Methods](https://www.tandfonline.com/doi/full/10.1080/27660400.2021.1943171)<i class="fas fa-external-link-alt"></i>
+ [2021 March 18] version 0.9.2 released
  - Support pymatgen v2022.
+ [2021 February 7] version 0.9.0 released
  - Interfaced with [OpenMX](http://www.openmx-square.org/)<i class="fas fa-external-link-alt"></i>
  - Employ [PyXtal](https://pyxtal.readthedocs.io/en/latest)<i class="fas fa-external-link-alt"></i> library to generate initial structures
  - If you use PyXtal (default), [find_wy](https://github.com/nim-hrkn/find_wy)<i class="fas fa-external-link-alt"></i> program is not required
  - LAQA can be used with soiap
  - Change the name: [lattice] section –> [structure] section
  - Several input variables move to [structure] section
    * natot: [basic] –> [structure]
    * atype: [basic] –> [structure]
    * nat: [basic] –> [structure]
    * maxcnt: [option] –> [structure]
    * symprec: [option] –> [structure]
    * spgnum: [option] –> [structure]
  - New features
    * Molecular crystal structure generation
    * Scale volume
+ [2020 March 19] paper published
  - Our paper on adjusting the descriptor for CSP Bayesian optimization has been published in [Physical Review Materials](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.4.033801)<i class="fas fa-external-link-alt"></i>
+ [2020 February 16] version 0.8.0 released
  - Migrate to Python 3
  - CrySPY logo created
  - Change several variable names and data formats
  - Change style of output for energy: eV/cell –> eV/atom
  - IDs of working directories corresponds to structure IDs
  - New features
    * recalculation
    * manual select in BO
+ [2018 December 5] version 0.7.0 released
  - New features
    * Evolutionary algorithm
+ [2018 August 20] version 0.6.4 released
+ [2018 July 2] version 0.6.3 released
+ [2018 June 26] Version 0.6.2 released
+ [2018 March 1] Version 0.6.1 released
+ [2018 January 9] paper published
  - Our paper on CrySPY has been published in [Physical Review Materials](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.2.013803)<i class="fas fa-external-link-alt"></i>

