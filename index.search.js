var relearn_search_index = [
  {
    "content": "About CrySPY CrySPY is a crystal structure prediction tool written in Python, distributed under the MIT License.\nTable of contents Crystal structure prediction Searching algorithms Interface Logo ",
    "description": "",
    "tags": null,
    "title": "About CrySPY",
    "uri": "/about/index.html"
  },
  {
    "content": "Table of contents ase_chgnet_Sr4Co4O12 ase_Cu8_RS soiap_Si8_RS soiap_Si8_RS_mindist qe_Si8_RS qe_benzene_2_RS_mol qe_Si16_LAQA ",
    "description": "",
    "tags": null,
    "title": "Examples",
    "uri": "/cryspy_utility/examples/index.html"
  },
  {
    "content": "2023 July 21 update\nScript to extract structures from init_struc_data.pkl or opt_struc_data.pkl. This script can print stucture information and output cif files.\nOne can specify structure ID(s) using -i option. Top k structures (the k most stable structures) can be extracted using -t option. -a option is for outputting all the structures. (note that many cif files will be output.) Symmetrized cif files can be generated with -s option. Structure information is printed with -p. If you use -p option, cif files are not output.\nUsage usage: extract_struc.py [-h] [-p] [-a] [-i [INDEX ...]] [-t TOP] [-r] [-s] infile positional arguments: infile input file options: -h, --help show this help message and exit -p, --print flag for print -a, --all_id flag for all structures -i [INDEX ...], --index [INDEX ...] structure ID -t TOP, --top TOP top k structures -r, --rank flag for rank in file names -s, --symmetrized flag for symmetrized structure Examples Print The -p option can be used in combination with any option except for -s option.\npython3 extract_struc.py -p init_struc_data.pkl -i 0 1 or if you put the script in your PATH, you can omit python3\nextract_struc.py -p init_struc_data.pkl -i 0 1 ID 0 Full Formula (Na8 Cl8) Reduced Formula: NaCl abc : 6.823618 6.823618 7.566454 angles: 90.000000 90.000000 96.650518 pbc : True True True Sites (16) # SP a b c --- ---- -------- -------- -------- 0 Na 0 0 1 1 Na 0 0 0.5 2 Na 0.704707 0.295293 0.75 3 Na 0.295293 0.704707 0.25 4 Na 0.5 0 1 5 Na 0.5 0 0.5 6 Na 0 0.5 0.5 7 Na 0 0.5 0 8 Cl 0.5 0.5 0 9 Cl 0.5 0.5 0.5 10 Cl 0.484753 0.515247 0.75 11 Cl 0.515247 0.484753 0.25 12 Cl 0.828247 0.171753 0.851096 13 Cl 0.171753 0.828247 0.351096 14 Cl 0.828247 0.171753 0.648904 15 Cl 0.171753 0.828247 0.148904 ID 1 Full Formula (Na8 Cl8) Reduced Formula: NaCl abc : 8.145021 8.145021 4.324235 angles: 90.000000 90.000000 120.000000 pbc : True True True Sites (16) # SP a b c --- ---- --------- --------- -------- 0 Na 0.666667 0.333333 0.736206 1 Na 0.666667 0.333333 0.263794 2 Na 0.913147 0.086853 0.5 3 Na 0.913147 0.826295 0.5 4 Na 0.173705 0.086853 0.5 5 Na 0.77711 0.22289 0 6 Na 0.77711 0.55422 0 7 Na 0.44578 0.22289 0 8 Cl 0.027675 0.423376 0.5 9 Cl -0.423376 -0.395701 0.5 10 Cl 0.395701 -0.027675 0.5 11 Cl -0.423376 -0.027675 0.5 12 Cl 0.395701 0.423376 0.5 13 Cl 0.027675 -0.395701 0.5 14 Cl 0.333333 0.666667 0.5 15 Cl 0 0 0 Structure ID python3 extract_struc.py init_struc_data.pkl -i 7 10 12 7.cif, 10.cif, and 12.cif are output.\nFor symmetrized cif,\npython3 extract_struc.py init_struc_data.pkl -i 7 10 12 -s Top k structures Info rslt_data.pkl is required in the same directory as the input.\nLet us suppose a cryspy_rslt_energy_asc file is as follows:\nSpg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 9 110 I4_1cd 110 I4_1cd -1284.708037 NaN not_yet 16 4 P2_1 4 P2_1 -1284.693651 NaN done 97 92 P4_12_12 91 P4_122 -1284.692494 NaN done 8 57 Pbcm 57 Pbcm -1284.668504 NaN done 81 19 P2_12_12_1 19 P2_12_12_1 -1284.635684 NaN done ... Top k(=3) structures can be extracted with:\npython3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 In this example, rlst_data.pkl must be in ./data/pkl_data/. 9.cif, 16.cif, and 97.cif are output.\nThe rank can be included in cif file names with -r option:\npython3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -r 1_9.cif, 2_16.cif, and 3_97.cif are output.\nFor symmetrized cif:\npython3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -rs All the structures You should make a directory.\nmkdir init_cifs cd init_cifs python3 extract_struc.py init_struc_data.pkl -a For symmetrized cif,\npython3 extract_struc.py init_struc_data.pkl -as ",
    "description": "",
    "tags": null,
    "title": "extract_struc.py",
    "uri": "/cryspy_utility/scripts/extract_struc/index.html"
  },
  {
    "content": "Version information Table of contents Version 1.2.0 Version 1.1.1 Version 1.1.0 Version 1.0.0 Version 0.10.3 or earlier ",
    "description": "",
    "tags": null,
    "title": "Version information",
    "uri": "/version_info/index.html"
  },
  {
    "content": "Download ase_chgnet_Sr4Co4O12.tar.gz cryspy.in [basic] algo = RS calc_code = ASE tot_struc = 10 nstage = 1 njob = 2 jobcmd = bash jobfile = job_cryspy [structure] natot = 20 atype = Sr Co O nat = 4 4 12 mindist_1 = 2.2 2.0 1.8 mindist_2 = 2.0 2.2 1.5 mindist_3 = 1.8 1.5 2.0 [ASE] ase_python = chgnet_in.py [option] calc_in/ chgnet_in.py_1 from chgnet.model import StructOptimizer from pymatgen.core import Structure # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory structure = Structure.from_file('POSCAR') # ---------- relax relaxer = StructOptimizer() result = relaxer.relax(atoms=structure, fmax=0.01, steps=2000) # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format # ------ energy traj = result['trajectory'] e = traj.compute_energy() # eV/cell with open('log.tote', mode='w') as f: f.write(str(e)) # ------ struc opt_struc = result[\"final_structure\"] opt_struc.to(fmt='poscar', filename='CONTCAR') job_cryspy #!/bin/sh # ---------- ASE python3 chgnet_in.py # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "ase_chgnet_Sr4Co4O12",
    "uri": "/cryspy_utility/examples/ase_chgnet_sr4co4o12/index.html"
  },
  {
    "content": "2023 July 10\nASE provides interfaces to different codes. ASE also includes Pure Python EMT calculator, which is suitable for testing CrySPY because of its fast and easy structure optimization.\nIn this tutorial, we try to use CrySPY in your local PC (Mac or Linux). The target system is Cu 8 atoms.\nAssumption Here, we assume the following conditions:\nCrySPY 1.2.0 or later in your local PC CrySPY job filename: job_cryspy ase input filename: ase_in.py Input files Move to your working directory, and copy the example files by one of the following methods.\nDownload from cryspy_utility/examples/ase_Cu8_RS Copy from CrySPY utility that you installed cd ase_Cu8_RS tree . ├── calc_in │ ├── ase_in.py_1 │ └── job_cryspy └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = ASE tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Cu nat = 8 [ASE] ase_python = ase_in.py [option] In [basic] section, jobcmd = zsh can be changed to jobcmd = sh or jobcmd = bash in accordance with your environment. CrySPY runs zsh job_cryspy as a background job internally.\n[ASE] section is required when you use ASE.\nYou can name the following files whatever you want:\njobfile: job_cryspy ase_python: ase_in.py The other input variables are discussed later.\ncalc_in directory The job file and input files for ASE are prepared in this directory.\nJob file The name of the job file must match the value of jobfile in cryspy.in. The example of job file (here, job_cryspy) is shown below.\n#!/bin/sh # ---------- ASE python3 ase_in.py # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job You can specify the input (ase_in.py) file names, but it must match the values of ase_python in cryspy.in. You must add sed -i -e '3 s/^.*$/done/' stat_job at the end of the file in CrySPY.\nNote sed -i -e '3 s/^.*$/done/' stat_job is required at the end of the job file.\nTip In the job file of CrySPY, the string CrySPY_ID is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\nInput for ASE Input files based on the number of stages (nstage in cryspy.in) are required. Name the input file(s) with a suffix _x. Here x means the stage number.\nWe are using nstage = 1 in this ASE tutorial, so we need only ase_in.py_1. ase_in.py_1 is listed below. Refer to the ASE documentation for details.\nfrom ase.constraints import ExpCellFilter, StrainFilter from ase.calculators.emt import EMT from ase.calculators.lj import LennardJones from ase.optimize.sciopt import SciPyFminCG from ase.optimize import BFGS from ase.spacegroup.symmetrize import FixSymmetry import numpy as np from ase.io import read, write # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory atoms = read('POSCAR', format='vasp') # ---------- setting and run atoms.calc = EMT() atoms.set_constraint([FixSymmetry(atoms)]) atoms = ExpCellFilter(atoms, hydrostatic_strain=False) opt = BFGS(atoms) #opt=SciPyFminCG(atoms) opt.run() # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format e = atoms.atoms.get_total_energy() with open('log.tote', mode='w') as f: f.write(str(e)) write('CONTCAR', atoms.atoms, format='vasp') Unlike VASP and QE, the ASE input (python script) is more flexible. CrySPY has two rules:\nEnergy is output in units of eV/cell to log.tote file. CrySPY reads the last line of it. Optimized structure is output to `CONTCAR`` file in the VASP format. Running CrySPY Go to Running CrySPY\n",
    "description": "",
    "tags": null,
    "title": "ASE in your local PC",
    "uri": "/tutorial/random/ase/index.html"
  },
  {
    "content": "Download ase_Cu8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = ASE tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Cu nat = 8 [ASE] ase_python = ase_in.py [option] calc_in/ ase_in.py_1 from ase.constraints import ExpCellFilter, StrainFilter from ase.calculators.emt import EMT from ase.calculators.lj import LennardJones from ase.optimize.sciopt import SciPyFminCG from ase.optimize import BFGS from ase.spacegroup.symmetrize import FixSymmetry import numpy as np from ase.io import read, write # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory atoms = read('POSCAR', format='vasp') # ---------- setting and run atoms.calc = EMT() atoms.set_constraint([FixSymmetry(atoms)]) atoms = ExpCellFilter(atoms, hydrostatic_strain=False) opt = BFGS(atoms) #opt=SciPyFminCG(atoms) opt.run() # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format e = atoms.atoms.get_total_energy() with open('log.tote', mode='w') as f: f.write(str(e)) write('CONTCAR', atoms.atoms, format='vasp') job_cryspy #!/bin/sh # ---------- ASE python3 ase_in.py # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "ase_Cu8_RS",
    "uri": "/cryspy_utility/examples/ase_cu8_rs/index.html"
  },
  {
    "content": "2023 July 10\nCrySPY 1.2.0 adopts logging library of Python. CrySPY logs are output to both the screen and files(log_cryspy and err_cryspy).\nlog –\u003e screen and log_cryspy error and warning –\u003e screen and err_cryspy Here is the example:\n[2023-07-10 18:40:54,389][cryspy_init][INFO] Start CrySPY 1.2.0 [2023-07-10 18:40:54,389][cryspy_init][INFO] # ---------- Read input file, cryspy.in [2023-07-10 18:40:54,390][read_input][INFO] Save input data in cryspy.stat [2023-07-10 18:40:54,391][cryspy_init][INFO] # ---------- Initial structure generation [2023-07-10 18:40:54,391][cryspy_init][INFO] Number of MPI processes: 1 [2023-07-10 18:40:54,391][gen_init_struc][INFO] # ------ mindist [2023-07-10 18:40:54,395][struc_util][INFO] Cu - Cu: 1.32 [2023-07-10 18:40:54,395][gen_init_struc][INFO] # ------ generate structures [2023-07-10 18:40:54,481][gen_pyxtal][INFO] Structure ID 0 was generated. Space group: 1 --\u003e 1 P1 [2023-07-10 18:40:54,493][gen_pyxtal][INFO] Structure ID 1 was generated. Space group: 28 --\u003e 28 Pma2 [2023-07-10 18:40:54,498][gen_pyxtal][INFO] Structure ID 2 was generated. Space group: 29 --\u003e 29 Pca2_1 [2023-07-10 18:40:54,704][gen_pyxtal][INFO] Structure ID 3 was generated. Space group: 137 --\u003e 137 P4_2/nmc [2023-07-10 18:40:54,725][gen_pyxtal][INFO] Structure ID 4 was generated. Space group: 212 --\u003e 214 I4_132 [2023-07-10 18:40:54,800][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.408367 If you want to run cryspy as a background job, or if you use the auto script, and do NOT want it to output to the screen, execute it with the -n option as follow:\ncryspy -n ",
    "description": "",
    "tags": null,
    "title": "Logging",
    "uri": "/features/logging/index.html"
  },
  {
    "content": "CrySPY has a simple backup function. The following files are backed up:\ncryspy.in cryspy.stat log_cryspy err_cryspy calc_in/* data/* ext/* work/* are NOT included.\n(v1.1.0 or later) above files are copied to a directory named by date and time in “backup” directory. Previous backups are NOT automatically deleted. (v1.0.0) only one generation is backed up, and previous backups will be deleted. Auto backup The timing of the automatic backup is as follows:\nbefore going to next selection (BO, LAQA) or next generation (EA) append structures Manual backup To manually back up, run cryspy with -b or --backup option as:\ncryspy -b This command only performs backups, unlike the normal execution.\n",
    "description": "",
    "tags": null,
    "title": "Backup",
    "uri": "/features/backup/index.html"
  },
  {
    "content": "Table of contents Initial and optimized structure data Result data ",
    "description": "",
    "tags": null,
    "title": "Common data",
    "uri": "/data_format/common_data/index.html"
  },
  {
    "content": " Input Elements The number of atoms Output Stable structure (global minimum) ",
    "description": "",
    "tags": null,
    "title": "Crystal structure prediction",
    "uri": "/about/csp/index.html"
  },
  {
    "content": "Energy step data is saved in energy_step_data.pkl if you set energy_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\nWarning energy_step_flag = True is currently available only with VASP, QE, and soiap.\nInfo In soiap, energy_step_data is collected only if loopa == 1. This is because other data (struc, force, and stress) are output only when loopa == 1. See, https://github.com/nbsato/soiap/blob/master/doc/instructions.md\nData format type: dict key: structure ID value: list of energy step data in each stage string form {0: [array([-3.4439912 , -3.55040935, -3.66697038, ..]), array([-4.0613393 , -4.05445631, -4.06159641, …]), …],\n1: [array([-2.68209823, -2.69012487, -2.68364907, ..]), array([-2.79140967, -2.79183827, -2.79206508, …]), …],\n…} unit of energy eV/atom How to access import pickle with open('energy_step_data.pkl', 'rb') as f: energy_step_data = pickle.load(f) # energy_step_data[ID][stage][step] # energy_step_data[ID][0] \u003c-- stage 1 # energy_step_data[ID][1] \u003c-- stage 2 # # in LAQA # energy_step_data[ID][selection][step] # energy_step_data[ID][0] \u003c-- 1st selection # energy_step_data[ID][1] \u003c-- 2nd selection # ---------- energy step data of ID 3, stage 1 cid = 3 # ID stage = 1 # stage energy_step_data[cid][stage-1][:10] # show only 10 enegies in jupyter array([-3.4439912 , -3.55040935, -3.66697038, -3.77192063, -3.84320717, -3.80679245, -3.84633935, -3.87374706, -3.89123193, -3.90422926]) ",
    "description": "",
    "tags": null,
    "title": "Energy step data",
    "uri": "/data_format/optional_data/energy_step/index.html"
  },
  {
    "content": "CrySPY uses the configparser module to read input file, cryspy.in . cryspy.in consists of sections, led by a [section] header and followed by name = value or name : value entries. Section names and values are case sensitive, but names are not. Lines beginning with # or ; are ignored and may be used to provide comments. Accepted bool values are 1, yes, true, and on, which cause this method to return True, and 0, no, false, and off, which cause it to return False. These string values for bool are checked in a case-insensitive manner. Some values are given in a space-separated manner.\nInfo See configparser in detail.\nNote section name: case sensitive\nname: case insensitive\nvalue: case sensitive except for bool\n",
    "description": "",
    "tags": null,
    "title": "File format",
    "uri": "/input/format/index.html"
  },
  {
    "content": "Initial and optimized structure data are saved in init_struc_data.pkl and opt_struc_data.pkl, respectively. pymatgen library is required to analyze these data files.\nData format type: dict key: structure ID value: structure data string form {0: Structure Summary …,\n1: Structure Summary …, …} structure data format pymatgen.core.structure.Structure How to access import pickle with open('init_struc_data.pkl', 'rb') as f: init_struc_data = pickle.load(f) with open('opt_struc_data.pkl', 'rb') as f: opt_struc_data = pickle.load(f) # struc_step_data[ID] # # # ---------- structure step data of ID 0 cid = 0 # ID init_struc_data[cid] # to show initial structure of ID 0 Structure Summary Lattice abc : 5.727301 5.727301 4.405757 angles : 90.0 90.0 90.0 volume : 144.5175386563631 A : 5.727301 0.0 0.0 B : 0.0 5.727301 0.0 C : 0.0 0.0 4.405757 PeriodicSite: Si (0.2506, 5.4767, 1.1014) [0.0438, 0.9562, 0.2500] PeriodicSite: Si (2.6130, 3.1143, 1.1014) [0.4562, 0.5438, 0.2500] PeriodicSite: Si (3.1143, 0.2506, 1.1014) [0.5438, 0.0438, 0.2500] PeriodicSite: Si (5.4767, 2.6130, 1.1014) [0.9562, 0.4562, 0.2500] PeriodicSite: Si (5.4767, 0.2506, 3.3043) [0.9562, 0.0438, 0.7500] PeriodicSite: Si (3.1143, 2.6130, 3.3043) [0.5438, 0.4562, 0.7500] PeriodicSite: Si (2.6130, 5.4767, 3.3043) [0.4562, 0.9562, 0.7500] PeriodicSite: Si (0.2506, 3.1143, 3.3043) [0.0438, 0.5438, 0.7500] ",
    "description": "",
    "tags": null,
    "title": "Initial and optimized structure data",
    "uri": "/data_format/common_data/init_opt_struc_data/index.html"
  },
  {
    "content": "Installation Note You need (CrySPY + Python environment + structure optimizer) in your workstation, super computer, etc.\nTable of contents System requirements Python Structure optimizer find_wy (optional) CrySPY CrySPY 1.0.0 or later CrySPY 0.10.3 or earlier CrySPY utility (optional) ",
    "description": "",
    "tags": null,
    "title": "Installation",
    "uri": "/installation/index.html"
  },
  {
    "content": "Python CrySPY 1.1.0 or later Python \u003e= 3.8 PyXtal (\u003e= 0.5.3) (optional) mpi4py (optional, required if algo is BO) COMBO If you install cryspy with pip, necessary libraries such as PyXtal will be installed automatically. Go to Installation \u003e CrySPY. Manual installation of COMBO is required when using Bayesian optimization.\nCrySPY 1.0.0 Python \u003e= 3.8 PyXtal (\u003e= 0.5.3) (optional, required if algo is BO) COMBO Info [2023 April 22] How to instlal PyXtal (pyshtools) on arm64 MacOS is figured out. See Arm64 on MacOS (without Rosseta 2)\n[2023 March 15] On MacOS, it is difficult to install PyXtal in the arm64 environment, so it is recommended to use the x86_64 environment with Rosetta 2.\nCrySPY 0.10.0 – 0.10.3 Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.\nPython 3.x.x COMBO PyXtal (\u003e= 0.2.2) (PyXtal requires pymatgen) pymatgen (\u003e= 2022.x.x) CrySPY 0.9.2 Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.\nPython 3.x.x COMBO pymatgen (\u003e= 2022.x.x) PyXtal (\u003e= 0.2.2) Info [2021 July 15] If you use PyXtal \u003e= 0.2.9, update CrySPY to the version 0.10.0 or later.\nInfo [2021 March 18] There is a breaking change in pymatgen 2022.x.x. CrySPY 0.9.2 and PyXtal 0.2.2 support this change in pymatgen.\nInfo [2021 Feb. 5] PyXtal depends on numba, but numba does not support Python 3.9. So you should use Python 3.8.x for a while.\n[2021 March 18] Currently numba supports Python 3.9.x.\nInfo [2021 Feb. 7] PyXtal requires SciPy, but the latest version of SciPy (v1.6.0) might include a bug for deepcopy. You should use SciPy v1.5.4 for a while.\n[2021 March 18] This bug has been fixed in SciPy v1.6.1.\nCrySPY 0.9.0 – 0.9.1 Python 3.8.x COMBO pymatgen (\u003c= 2021.x.x) PyXtal 0.1.6 - 0.2.1 CrySPY 0.8.0 or earlier See the old document which is included CrySPY itself.\n",
    "description": "",
    "tags": null,
    "title": "Python",
    "uri": "/installation/requirements/python/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "Random search (RS)",
    "uri": "/searching_algo/rs/index.html"
  },
  {
    "content": " Info ASE is easy to start for beginners because when you install CrySPY (csp-cryspy), ASE is also automatically installed.\nPreparation of input files Follow any one of the examples and then go to “Running CrySPY” section.\nASE in your local PC soiap in your local PC VASP QE OpenMX LAMMPS External program Running CrySPY Check cryspy.in (version 0.10.3 or earlier) Script to run First run Submit job Check results Append structures Analysis and visualization Loading external data Only if calc_code == ext.\nLoad external data ",
    "description": "",
    "tags": null,
    "title": "Random Search (RS)",
    "uri": "/tutorial/random/index.html"
  },
  {
    "content": "Table of contents extract_struc.py pos2pkl.py kpt_check.py repeat_cryspy ",
    "description": "",
    "tags": null,
    "title": "Scripts",
    "uri": "/cryspy_utility/scripts/index.html"
  },
  {
    "content": "soiap is Structure Optimization with InterAtomic Potential. It is suitable for testing CrySPY because of its fast structure optimization. See instructions to install soiap.\nIn this tutorial, we try to use CrySPY in your local PC (Mac or Linux). The target system is Si 8 atoms.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py CrySPY job filename: job_cryspy soiap executable file: ~/local/soiap-0.3.0/src/soiap soiap input filename: soiap.in soiap output filename: soiap.out soiap input structure filename: initial.cif Input files Move to your working directory, and copy input example files by one of the following methods.\nDownload from cryspy_utility/examples/soiap_Si8_RS Copy from CrySPY utility that you installed (only version 0.10.3 or earlier) cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/soiap_RS_Si8 . cd soiap_RS_Si8 tree . ├── calc_in │ ├── job_cryspy │ └── soiap.in_1 └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] In [basic] section, jobcmd = zsh can be changed to jobcmd = sh or jobcmd = bash in accordance with your environment. CrySPY runs zsh job_cryspy as a background job internally.\n[soiap] section is required when you use soiap.\nYou can name the following files whatever you want:\njobfile soiap_infile soiap_outfile soiap_cif The other input variables are discussed later.\ncalc_in directory The job file and input files for soiap are prepared in this directory.\nJob file The name of the job file must match the value of jobfile in cryspy.in. The example of job file (here, job_cryspy) is shown below.\n#!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in 2\u003e\u00261 \u003e soiap.out # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job Change /path/to/soiap into right path suitable for your environment. You can specify the input (soiap.in) and output (soiap.out) file names, but they must match the values of soiap_infile and soiap_outfile in cryspy.in. The job file is written in the same way as the one you usually use except for the last line. You must add sed -i -e '3 s/^.*$/done/' stat_job at the end of the file in CrySPY.\nNote sed -i -e '3 s/^.*$/done/' stat_job is required at the end of the job file.\nTip In the job file of CrySPY, the string “CrySPY_ID” is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\nInput for soiap Input files based on the number of stages (nstage in cryspy.in) are required. Name the input file(s) with a suffix _x. Here x means the stage number.\nWe are using nstage = 1, so we need only soiap.in_1.\nsoiap.in_1 is listed below.\ncrystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 100 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones The input structure file is specified at the first line. Use the same name as the value of soiap_cif in cryspy.in.\nRunning CrySPY Go to Running CrySPY\n",
    "description": "",
    "tags": null,
    "title": "soiap in your local PC",
    "uri": "/tutorial/random/soiap/index.html"
  },
  {
    "content": "Download soiap_Si8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] calc_in/ soiap.in_1 crystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 1000 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones job_cryspy #!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in \u003e soiap.out 2\u003e\u00261 # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "soiap_Si8_RS",
    "uri": "/cryspy_utility/examples/soiap_si8_rs/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = crystal",
    "uri": "/structure_generation/crystal/index.html"
  },
  {
    "content": "System requirements Note You need (CrySPY + Python environment + structure optimizer) in your workstation, super computer, etc.\nTable of contents Python Structure optimizer find_wy (optional) ",
    "description": "",
    "tags": null,
    "title": "System requirements",
    "uri": "/installation/requirements/index.html"
  },
  {
    "content": " Info For mindist, see also Features \u003e Restriction on interatomic distances.\nDownload soiap_Si8_RS_mindist.tar.gz cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.0 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] calc_in/ soiap.in_1 crystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 1000 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones job_cryspy #!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in \u003e soiap.out 2\u003e\u00261 # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "soiap_Si8_RS_mindist",
    "uri": "/cryspy_utility/examples/soiap_si8_rs_mindist/index.html"
  },
  {
    "content": " Name Value Default Description algo RS, EA, BO, LAQA Algorithm calc_code VASP, QE, OMX, soiap, LAMMPS Caluculation code for structure optimization tot_struc int The total number of structures nstage int The number of stages njob int The number of jobs running at the same time. jobcmd str Command to submit jobs such as qsub and sbatch. jobfile str File name of the job file. ",
    "description": "",
    "tags": null,
    "title": "[basic] section",
    "uri": "/input/basic_sec/index.html"
  },
  {
    "content": "CrySPY has a simple clean (just move files) function. It is useful when you want to start over from the beginning. The following files are cleaned up:\ncryspy.stat log_cryspy err_cryspy lock_cryspy data/* work/* ext/* tmp_calc_FP/* tmp_gen_struc/* To clean up, run cryspy with -c or --clean option as:\n$ ls calc_in cryspy.in cryspy.stat data err_cryspy log_cryspy $ cryspy -c Are you sure you want to clean the data? 'yes' or 'no' [y/n]: y $ ls calc_in cryspy.in trash $ ls trash 20230318_100728 Files other than calc_in/* and cryspy.in are moved to trash and grouped into a directory named by date and time. If you do not need them, you can delete them manually.\n",
    "description": "",
    "tags": null,
    "title": "Clean",
    "uri": "/features/clean/index.html"
  },
  {
    "content": "CrySPY pip CrySPY 1.0.0 or later can be installed by pip.\npip install csp-cryspy The executable script, cryspy, is automatically installed in your PATH. You can check by\nwhich cryspy Editable mode If you want to change the source code of CrySPY, you can use pip’s editable mode (-e option).\ngit clone https://github.com/Tomoki-YAMASHITA/CrySPY.git pip install -e ./CrySPY Instead of git clone, you can download the compressed file from the release page\ncal_fingerprint (optional) cal_fingerprint is a program to calculate structure descriptors and is required if algo is BO. From CrySPY 1.0.0, the cal_fingerprint program is included in CrySPY utility. See Instllation/CrySPY_utility/Compile cal_fingerprint for compilation.\nPut the executable file of cal_fingerprint in your PATH. Or, specify the path of the executable file in cryspy.in as follows:\n[BO] fppath = /xxx/xxx/xxx/cal_fingerprint Arm64 on MacOS (without Rosseta 2) Install miniforge3 (We do not know how to install pyshtools with homebrew python.) Install pymatgen (numpy is also installed), fftw by conda conda install pymatgen conda install fftw Build pyshtools from the source code. PyXtal needs pyshtools. pip3 install pyshtools --no-binary pyshtools Install CrySPY pip3 install csp-cryspy ",
    "description": "",
    "tags": null,
    "title": "CrySPY 1.0.0 or later",
    "uri": "/installation/cryspy/cryspy_1.0/index.html"
  },
  {
    "content": "EA\n",
    "description": "",
    "tags": null,
    "title": "Evolutionary Algorithm (EA)",
    "uri": "/tutorial/ea/index.html"
  },
  {
    "content": "2023 July 23 update\nScript to convert structre data into init_struc_data.pkl. The default input format is init_POSCARS. Single structure data such as POSCAR and cif files can be optionally converted. Output is init_struc_data.pkl. Structure data can be added to an already existing init_struc_data.pkl. The structure ID is not taken into account and is newly assigned. If the number of atoms is different, an error is generated.\ninit_struc_data.pkl can be loaded at the start of the simulation in CrySPY.\nYou can remove and sort species with -f option. Note that without this option, pymatgen will sort the species in electronegativity order!\nUsage usage: pos2pkl.py [-h] [-s [SINGLE ...]] [-f [FILTER ...]] [-p] [infile ...] positional arguments: infile input file: init_POSCARS options: -h, --help show this help message and exit -s [SINGLE ...], --single [SINGLE ...] input file: single structure file (POSCAR, cif) -f [FILTER ...], --filter [FILTER ...] filter (sort): remove species and sort -p, --permit_diff_comp flag for permitting different composition Examples init_POSCARS –\u003e init_struc_data.pkl It can be used to convert init_POSCARS generated by CrySPY to init_struc_data.pkl in another machine such as a supercomputer. Multiple input files can be converted.\npython3 pos2pkl.py init_POSCARS If you put the pos2pkl.py in your PATH, you can omit python3.\npos2pkl.py init_POSCARS Composition: Na8 Cl8 Converted. The number of structures: 4 Save init_struc_data.pkl Multiple inputs:\npython3 pos2pkl.py init_POSCARS init_POSCARS2 init_POSCARS3 Composition: Na8 Cl8 Converted. The number of structures: 12 Save init_struc_data.pkl If init_struc_data.pkl already exists in the current directory and you want to append to it:\npython3 pos2pkl.py init_POSCARS init_struc_data.pkl already exists. Append to init_struc_data.pkl? [y/n]: y Load init_struc_data Composition: Na8 Cl8 The number of structures: 12 Converted. The number of structures: 16 Save init_struc_data.pkl POSCAR or cif –\u003e init_struc_data.pkl Single structure data such as POSCAR and cif files can also be converted. -s/--single option is required.\npython3 pos2pkl.py -s POSCAR test.cif Composition: Na8 Cl8 Converted. The number of structures: 2 Save init_struc_data.pkl init_POSCARS, POSCAR –\u003e init_struc_data.pkl python3 pos2pkl.py init_POSCARS -s POSCAR Composition: Na8 Cl8 Converted. The number of structures: 5 Save init_struc_data.pkl Warning The following is wrong. The init_POSCARS is also treated as a single structure.\npython3 pos2pkl.py -s POSCAR init_POSCARS Filter (remove and sort) Here we consider a cif file with the composition of Sr8 Co8 O20 X4, including 4 dummy atoms (X4). -f/--filter option can be used to remove and sort species. Specify the same as atype in cryspy.in.\npython3 pos2pkl.py -s Sr8Co8O20X4.cif -f Sr Co O Removed species: {'X0+'} Composition: Sr8 Co8 O20 Converted. The number of structures: 1 Save init_struc_data.pkl With extract_struc.py you can see how it was registered in init_struc_data.pkl.\npython3 extract_struc.py init_struc_data.pkl -pa ID 0 Full Formula (Sr8 Co8 O20) Reduced Formula: Sr2Co2O5 ... -f option can allow you to sort.\npython3 pos2pkl.py -s Sr8Co8O20X4.cif -f O Co Removed species: {'Sr', 'X0+'} Composition: O20 Co8 Converted. The number of structures: 1 Save init_struc_data.pkl ",
    "description": "",
    "tags": null,
    "title": "pos2pkl.py",
    "uri": "/cryspy_utility/scripts/pos2pkl/index.html"
  },
  {
    "content": "Download qe_Si8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = QE tot_struc = 5 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 80 [option] calc_in/ pwscf.in_1 \u0026control title = 'Si8' calculation = 'relax' nstep = 100 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF pwscf.in_2 \u0026control title = 'Si8' calculation = 'vc-relax' nstep = 200 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_Si8_RS",
    "uri": "/cryspy_utility/examples/qe_si8_rs/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Random Search (RS)",
    "uri": "/data_format/rs_data/index.html"
  },
  {
    "content": "Common result data such as space group, energies, etc. are saved in rslt_data.pkl. pandas library is required to analyze this data file.\nData format type: pandas.core.frame.DataFrame row lable: structure ID string form see blow How to access import pickle with open('rslt_data.pkl', 'rb') as f: rslt_data = pickle.load(f) # ---------- sort by Energy # top 5 rslt_data.sort_values(by=['E_eV_atom']).head(5) Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done ",
    "description": "",
    "tags": null,
    "title": "Result data",
    "uri": "/data_format/common_data/rslt_data/index.html"
  },
  {
    "content": "The following searching algorithms are available in CrySPY:\nRandom Search (RS) Evolutionary Algorithm (EA) Bayesian Optimization (BO) Look Ahead based on Quadratic Approximation (LAQA) In a nutshell Random Search (RS) Random.\nEvolutionary Algorithm (EA) EA for crystal structure prediction has been developed by Oganov's group.\nWe also employ EA in CrySPY, and support the following:\nSelection methods Tournament selection Roulette selection Elite selection Evolutionary operations Crossover Permutation Strain etc. Survival of the fittest Dedupe structures in survival of the fittest Bayesian Optimization (BO) One of the selection-type algorithms.\nLook Ahead based on Quadratic Approximation (LAQA) One of the selection-type algorithms.\n",
    "description": "",
    "tags": null,
    "title": "Searching algorithms",
    "uri": "/about/algorithms/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = mol",
    "uri": "/structure_generation/mol/index.html"
  },
  {
    "content": "Structure optimizer At least one optimizer is required.\nFirst-principles calculation VASP QUANTUM ESPRESSO OpenMX (CrySPY 0.9.0 or later) Interatomic potential soiap LAMMPS Other ASE (CrySPY 1.2.0 or later) ",
    "description": "",
    "tags": null,
    "title": "Structure optimizer",
    "uri": "/installation/requirements/struc_opt/index.html"
  },
  {
    "content": "Structure step data is saved in struc_step_data.pkl if you set struc_step_flag = True in [option] section of cryspy.in. pymatgen library is required to analyze this data file.\nWarning struc_step_flag = True is currently available only with VASP, QE, and soiap.\nInfo struc_step_data includes initial structures. For example, struc_step_data[cid][0][0] is the initial structure of ID = cid.\nData format type: dict key: structure ID value: list of structure step data in each stage string form {0: [[Structure Summary …, Structure Summary, …], […], …],\n1: [[Structure Summary …, Structure Summary, …], […], …], …} structure data format pymatgen.core.structure.Structure How to access import pickle with open('struc_step_data.pkl', 'rb') as f: struc_step_data = pickle.load(f) # struc_step_data[ID][stage][step] # struc_step_data[ID][0] \u003c-- stage 1 # struc_step_data[ID][1] \u003c-- stage 2 # # # in LAQA # struc_step_data[ID][selection][step] # struc_step_data[ID][0] \u003c-- 1st selection # struc_step_data[ID][1] \u003c-- 2nd selection # ---------- structure step data of ID 3, stage 1, step 4 cid = 0 # ID stage = 1 # stage step = 0 # step index (start from 0) struc_step_data[cid][stage-1][step] # to show initial structure of ID 0 at stage 1 in jupyter Structure Summary Lattice abc : 5.727301 5.727301 4.405757 angles : 90.0 90.0 90.0 volume : 144.5175386563631 A : 5.727301 0.0 0.0 B : 0.0 5.727301 0.0 C : 0.0 0.0 4.405757 PeriodicSite: Si (0.2506, 5.4767, 1.1014) [0.0438, 0.9562, 0.2500] PeriodicSite: Si (2.6130, 3.1143, 1.1014) [0.4562, 0.5438, 0.2500] PeriodicSite: Si (3.1143, 0.2506, 1.1014) [0.5438, 0.0438, 0.2500] PeriodicSite: Si (5.4767, 2.6130, 1.1014) [0.9562, 0.4562, 0.2500] PeriodicSite: Si (5.4767, 0.2506, 3.3043) [0.9562, 0.0438, 0.7500] PeriodicSite: Si (3.1143, 2.6130, 3.3043) [0.5438, 0.4562, 0.7500] PeriodicSite: Si (2.6130, 5.4767, 3.3043) [0.4562, 0.9562, 0.7500] PeriodicSite: Si (0.2506, 3.1143, 3.3043) [0.0438, 0.5438, 0.7500] ",
    "description": "",
    "tags": null,
    "title": "Structure step data",
    "uri": "/data_format/optional_data/struc_step/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "VASP",
    "uri": "/tutorial/random/vasp/index.html"
  },
  {
    "content": " Name Value Default Description struc_mode crystal, mol, mol_bs crystal Structure generation mode natot int The total number of atoms. atype atomic symbol [atomic symbol …] Atom type. e.g. atype = Na Cl. nat int [int …] The number of atoms in each atom type. e.g. nat = 8 8. mol_file str [str …], None None Path of molecule files or molecule names. nmol int [int …], None None The number of molecules. timeout_mol float 120.0 Time out for molecular structure generation. rot_mol random, random_mol, random_wyckoff random_wyckoff Mode for rotation of molecules. nrot int 20 Maximum number of trials to rotate molecules in mol_bs vol_factor float float 1.0 1.0 Minimum and maximum values of volume factor. vol_mu float, None None Mean of volume if you want specify the volume of cells. vol_sigma float, None None Standard deviation of volume if you want specify the volume of cells. mindist (mindist_?) float [float …], None None Constraint on minimum interatomic distance [Å]. mindist_factor float 1.0 Scaling factor for mindist. mindist_mol_bs (mindist_mol_bs_?) float [float …], None None Constraint on minimum intermolecular distance [Å]. mindist_mol_bs_factor float 1.0 Scaling factor for mindist_mol_bs. symprec float, 0.01 Precision for symmetry finding. spgnum all, space group number, 0 all Constraint on space group. If all, 1–230. If 0, random structure without space group information (no symmetry). use_find_wy bool False Structure generation with find_wy. fwpath str, None None Path of find_wy minlen float, None None Only used with find_wy or spgnum = 0. Minimum length of lattice vector [Å]. maxlen float, None None Only used with find_wy or spgnum = 0. Maximum length of lattice vector [Å]. dangle float, None None Only used with find_wy or spgnum = 0. Delta angle for alpha, beta, and gamma in degree unit. maxcnt int 50 Only used with find_wy or spgnum = 0. Maximum number of trials to determine atom positions. ",
    "description": "",
    "tags": null,
    "title": "[structure] section",
    "uri": "/input/structure_sec/index.html"
  },
  {
    "content": "BO\n",
    "description": "",
    "tags": null,
    "title": "Bayesian Optimization (BO)",
    "uri": "/tutorial/bo/index.html"
  },
  {
    "content": "CrySPY CrySPY (\u003e= 1.0.0) is available in PyPI. You can install by pip.\nTable of contents CrySPY 1.0.0 or later CrySPY 0.10.3 or earlier ",
    "description": "",
    "tags": null,
    "title": "CrySPY",
    "uri": "/installation/cryspy/index.html"
  },
  {
    "content": "Installation of CrySPY is very simple. Just download it!\nDownload You can put the source code of CrySPY in an arbitrary directory. For example, let us put the source code in ~/CrySPY_root/CrySPY-x.x.x (x.x.x means the version). Use git or download the compressed file.\nGit mkdir ~/CrySPY_root cd ~/CrySPY_root git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git CrySPY-x.x.x zip or tar.gz file Download the source as a zip or tar.gz file from GitHub release .\nThen put the source like ~/CrySPY_root/CrySPY-x.x.x\nDirectory tree Directory tree in ~/CrySPY_root/CrySPY-x.x.x/:\nCrySPY-x.x.x ├── CHANGELOG.md ├── CrySPY/ │ ├── BO/ │ ├── EA/ │ ├── IO/ │ ├── LAQA/ │ ├── RS/ │ ├── __init__.py │ ├── calc_dscrpt/ │ ├── f-fingerprint/ │ ├── find_wy/ │ ├── gen_struc/ │ ├── interface/ │ ├── job/ │ └── start/ │ └── utility.py ├── LICENSE ├── README.md ├── cryspy.py ├── docs/ ├── example/ └── utility/ Info Main script is cryspy.py.\nSetup (optional) find_wy (optional) When you use find_wy, put the executable file of find_wy in ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/, so that the executable file path is ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy.\ncd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy cp ~/local/find_wy/find_wy . Compile cal_fingerprint (optional) When you use Bayesian optimization, compile cal_fingerpirnt program which calculates structure descriptors.\ncd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/f-fingerprint emacs Makefile make Make sure that the executable file of cal_fingerprint exists in ~/CrySPY_root/CrySPY-x.x.x/CrySPY/f-fingerprint/.\n",
    "description": "",
    "tags": null,
    "title": "CrySPY 0.10.3 or earlier",
    "uri": "/installation/cryspy/cryspy_0.10/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Evolutionary algorithm (EA)",
    "uri": "/data_format/ea_data/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "Evolutionary algorithm (EA)",
    "uri": "/searching_algo/ea/index.html"
  },
  {
    "content": "CrySPY have utilized find_wy to generate a random structure for a given space group (symmetry). However, CrySPY employs PyXtal library for structure generation as default since version 0.9.0. You can skip to install find_wy in CrySPY 0.9.0 or later, but you may use find_wy. For CrySPY 0.8.x or earlier, find_wy is required to generate a random structure for a given space group.\nInfo You can skip to install find_wy in CrySPY 0.9.0 or later.\nInstallation of find_wy m_tspace First you need compile m_tspace for find_wy. Check these sites to compile it.\nm_tspace Wiki of m_tspace Download the source code of m_tspace in an arbitrary directory. For example:\n$ mkdir -p ~/local $ cd ~/local $ git clone https://github.com/nim-hrkn/m_tspace.git Additional two files are required to compile m_tspace. Download the following files in ~/local/m_tspace from TSPASE:\ntsp98.f prmtsp.f $ cd m_tspace $ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f $ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f Edit the makefile and run the make command. If you use ifort, you had better delete -check all option and use -O2 option.\n$ emacs makefile $ head -n 4 makefile #FC=gfortran #FFLAGS=-g -cpp -DUSE_GEN -ffixed-line-length-255 FC=ifort FFLAGS=-O2 -g -traceback -cpp -DUSE_GEN -132 $ make If you used gfortran, you might face the following problem:\ntsp98.f:9839:32: CALL SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 1 Error: Actual argument contains too few elements for dummy argument 'ntab' (12/48) at (1) make: *** [tsp98.o] Error 1 Then change the source file of tsp98.f like this (line 9925):\nBefore:\n9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7 9914: C 9915: C IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN 9916: C TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0 9917: C ELSE 9918: C IND=-1 9919: C 9920: C 1993/12/25 9921: C BY S.TANAKA AND A. YANASE 9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7 9923: C 9924: SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 9925: DIMENSION NTAB(48),JG(48),JGT(48) After:\n9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7 9914: C 9915: C IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN 9916: C TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0 9917: C ELSE 9918: C IND=-1 9919: C 9920: C 1993/12/25 9921: C BY S.TANAKA AND A. YANASE 9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7 9923: C 9924: SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 9925: DIMENSION NTAB(12),JG(48),JGT(48) If you succeed in compiling, you get m_tsp.a.\nfind_wy Check these sites to compile find_wy:\nfind_wy Wiki of find_wy Download the source code of find_wy in an arbitrary directory. For example:\n$ mkdir -p ~/local $ cd ~/local $ git clone https://github.com/nim-hrkn/find_wy.git Edit make.inc and set the path to the m_tsp.a that you just prepared.\n$ cd find_wy $ emacs make.inc $ head -n 4 make.inc TSPPATH=~/local/m_tspace #INCPATH = -I $(TSPPATH) TSP=$(TSPPATH)/m_tsp.a You can delete -check all option and use -O2 option. Then run the make command.\n$ make When you get the executable file of find_wy, run the following command for test:\n$ ./find_wy input_sample/input_si4o8.txt If there is no problem, POS_WY_SKEL_ALL.json file is generated.\nExecutable file of find_wy CrySPY 1.0.0 or later Put the executable file of find_wy in your PATH. Or, specify the path of the executable file in cryspy.in as follows:\n[structure] use_find_wy = True fwpath = /xxx/xxx/xxx/find_wy CrySPY 0.10.3 or earlier When you use find_wy, put the executable file of find_wy in ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/, so that the executable file path is ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy.\n",
    "description": "",
    "tags": null,
    "title": "find_wy (optional)",
    "uri": "/installation/requirements/find_wy/index.html"
  },
  {
    "content": "Force step data is saved in force_step_data.pkl if you set force_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\nWarning force_step_flag = True is currently available only with VASP, QE, and soiap.\nData format type: dict key: structure ID value: list of force step data in each stage string form {0: [array([[ 0.26314927, -0.26314927, -0. ], […], …[…]]), array([[…], …, […]]), …], 1: [array([[ 0. , 0. , 0. ], […], …[…]]), array([[…], …, […]]), …],\n…} unit of force eV/Å How to access import pickle with open('force_step_data.pkl', 'rb') as f: force_step_data = pickle.load(f) # force_step_data[ID][stage][step][atom] # force_step_data[ID][0] \u003c-- stage 1 # force_step_data[ID][1] \u003c-- stage 2 # # in LAQA # force_step_data[ID][selection][step][atom] # force_step_data[ID][0] \u003c-- 1st selection # force_step_data[ID][1] \u003c-- 2nd selection # ---------- force step data of ID 3, stage 1 cid = 0 # ID stage = 1 # stage force_step_data[cid][stage-1][:3] # to show only 3 steps in jupyter [array([[ 0.26314927, -0.26314927, -0. ], [-0.26314927, 0.26314927, -0. ], [ 0.26314927, 0.26314927, 0. ], [-0.26314927, -0.26314927, -0. ], [-0.26314927, 0.26314927, -0. ], [ 0.26314927, -0.26314927, 0. ], [-0.26314927, -0.26314927, -0. ], [ 0.26314927, 0.26314927, 0. ]]), array([[-0.12103692, 0.12103692, 0. ], [ 0.12103692, -0.12103692, -0. ], [-0.12103692, -0.12103692, -0. ], [ 0.12103692, 0.12103692, 0. ], [ 0.12103692, -0.12103692, -0. ], [-0.12103692, 0.12103692, 0. ], [ 0.12103692, 0.12103692, 0. ], [-0.12103692, -0.12103692, -0. ]]), array([[-0.29801618, 0.29801618, 0. ], [ 0.29801618, -0.29801618, -0. ], [-0.29801618, -0.29801618, -0. ], [ 0.29801618, 0.29801618, 0. ], [ 0.29801618, -0.29801618, -0. ], [-0.29801618, 0.29801618, 0. ], [ 0.29801618, 0.29801618, 0. ], [-0.29801618, -0.29801618, -0. ]])] step = 0 # step index (start from 0) atom = 2 # atom index (start from 0) force_step_data[cid][stage-1][step][atom] array([0.26314927, 0.26314927, 0. ]) ",
    "description": "",
    "tags": null,
    "title": "Force step data",
    "uri": "/data_format/optional_data/force_step/index.html"
  },
  {
    "content": "CrySPY is interfaced with several structure optimizers:\nFirst-principles calculation VASP Quantum Espresso OpenMX (CrySPY 0.9.0 or later) Interatomic potential soiap LAMMPS Other ASE (CrySPY 1.2.0 or later) At least one optimizer is required.\n",
    "description": "",
    "tags": null,
    "title": "Interface",
    "uri": "/about/interface/index.html"
  },
  {
    "content": "In this tutorial, we try to use CrySPY in a machine with a job scheduler system such as PBS. Here we employ QUANTUM ESPRESSO. (QE). The target system is Si 8 atoms.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py CrySPY job command: qsub CrySPY job filename: job_cryspy QE executable file: /usr/local/qe-6.5/bin/pw.x QE input filename: pwscf.in QE output filename: pwscf.out Input files Move to your working directory, and copy input example files by one of the following methods.\nDownload from cryspy_utility/examples/qe_Si8_RS Copy from CrySPY utility that you installed (only version 0.10.3 or earlier) cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/QE_Si8_RS . cd QE_RS_Si8 tree . ├── calc_in │ ├── job_cryspy │ ├── pwscf.in_1 │ └── pwscf.in_2 └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = QE tot_struc = 5 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 80 [option] In [basic] section, jobcmd = qsub can be changed in accordance with your environment. CrySPY runs qsub job_cryspy as a background job internally in this setting.\nWe adopt a stage-based system for structure optimization calculations. Here, we use nstage = 2. For example, users can configure the following settings. In the first stage, only the ionic positions are relaxed, fixing the cell shape, with low k-point grid density. Next, the ionic positions and cell shape are fully relaxed with high accuracy in the second stage.\n[QE] section is required when you use QE. You have to specify k-point grid density (Å^-3) for each stage in kppvol.\nYou can name the following files whatever you want:\njobfile qe_infile qe_outfile The other input variables are discussed later.\ncalc_in directory The job file and input files for QE are prepared in this directory.\nJob file The name of the job file must match the value of jobfile in cryspy.in. The example of job file (here, job_cryspy) is shown below.\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/done/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job Change pw.x to appropriate path suitable for your environment. You can specify the input (pwscf.in) and output (pwscf.out) file names, but they must match the values of qe_infile and qe_outfile in cryspy.in.\nThe job file is written in the same way as the one you usually use except for the last line. You must add sed -i -e '3 s/^.*$/done/' stat_job at the end of the file in CrySPY.\nNote sed -i -e '3 s/^.*$/done/' stat_job is required at the end of the job file.\nTip In the job file of CrySPY, the string “CrySPY_ID” is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\nInput for QE Input files based on the number of stages (nstage in cryspy.in) are required. Name the input file(s) with a suffix _x. Here x means the stage number.\nWe are using nstage = 2, so we need pwscf.in_1 and pwscf.in_2. For example, users can configure the following settings. In the first stage, only the ionic positions are relaxed, fixing the cell shape. Next, the ionic positions and cell shape are fully relaxed in the second stage.\npwscf.in_1 is listed below.\n\u0026control title = 'Si8' calculation = 'relax' nstep = 100 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF Change pseudo_dir to your suitable directory. Inputs for structure data and k-point such as ATOMIC_POSITIONS and K_POINTS are automatically appended by CrySPY with pymatgen. Users do not have to prepare them in pwscf.in_x.\nRunning CrySPY Go to Running CrySPY\n",
    "description": "",
    "tags": null,
    "title": "QE",
    "uri": "/tutorial/random/qe/index.html"
  },
  {
    "content": "CrySPY uses pyxtal in normal molecular crystal structure generation mode (struc_mode = mol). The molecules are arranged to fit a point group at a selected Wykoff position in the space group to keep the symmetry. (Sometimes it takes a long time to generate.)\nIn mol_bs mode (bs means break symmetry), dummy atoms are placed in Wykoff positions as in ordinary crystals, and then the dummy atoms are replaced by molecules without considering symmetry and rotated randomly. The structure generation is relatively fast.\nunder construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = mol_bs",
    "uri": "/structure_generation/mol_bs/index.html"
  },
  {
    "content": "Tutorial Info Beginners are encouraged to start with a random search. You can find examaple files in cryspy_utility.\nTable of contents Random Search (RS) Evolutionary Algorithm (EA) Bayesian Optimization (BO) LAQA Molecular crystal structure prediction Random structure generation with MPI ",
    "description": "",
    "tags": null,
    "title": "Tutorial",
    "uri": "/tutorial/index.html"
  },
  {
    "content": "Searching algorithms Table of contents Random search (RS) Evolutionary algorithm (EA) Bayesian optimizaion (BO) LAQA ",
    "description": "",
    "tags": null,
    "title": "Seaching algorithms",
    "uri": "/searching_algo/index.html"
  },
  {
    "content": "Structure generation CrySPY currently has three random structure generation modes: crystal (default), mol, and mol_bs. PyXtal (or find_wy) is used for the structure generation.\nTable of contents struc_mode = crystal struc_mode = mol struc_mode = mol_bs ",
    "description": "",
    "tags": null,
    "title": "Structure generation",
    "uri": "/structure_generation/index.html"
  },
  {
    "content": "Features Table of contents Logging Backup Clean Restriction on interatomic distances CrySPY_ID in job files Structure generation with MPI parallelization ",
    "description": "",
    "tags": null,
    "title": "Features",
    "uri": "/features/index.html"
  },
  {
    "content": "[VASP] section is required only if you use VASP (calc_code = VASP)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage force_gamma bool False If true, force gamma-centered mesh. ",
    "description": "",
    "tags": null,
    "title": "[VASP] section",
    "uri": "/input/vasp_sec/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Bayesian Optimization (BO)",
    "uri": "/data_format/bo_data/index.html"
  },
  {
    "content": "Setting up Python environment in your local PC is useful to analyze CrySPY results. Utility tools (jupyter notebook and python scripts) are available for analysis and visualization. Input examples are also included in CrySPY utility.\nInfo See also cryspy_utility\nYou need several Python libraries such as\njupyter NumPy pandas matplotlib pymatgen Download CrySPY utility Git $ git clone https://github.com/Tomoki-YAMASHITA/CrySPY_utility.git zip Go to CrySPY utility and click green Code button, then choose Download ZIP.\nCompile cal_fingerprint When you use Bayesian optimization, compile cal_fingerpirnt program which calculates structure descriptors. A Fortran compiler is needed. Install in the environment where CrySPY is used, such as a workstations and supercomputers.\ncd CrySPY_utility/f-fingerprint emacs Makefile make See also Instllation/CrySPY.\n",
    "description": "",
    "tags": null,
    "title": "CrySPY utility (optional)",
    "uri": "/installation/utility/index.html"
  },
  {
    "content": "Input file Description of the input file, cryspy.in.\nTable of contents File format [basic] section [structure] section [VASP] section [QE] section [OMX] section [soaip] section [LAMMPS] section [ASE] section [EA] section [BO] section [LAQA] section [option] section ",
    "description": "",
    "tags": null,
    "title": "Input file",
    "uri": "/input/index.html"
  },
  {
    "content": "May 15th, 2023\nInfo First, see Tutorial \u003e Random Search (RS) for basic usage of CrySPY.\nHere, we assume CrySPY 1.1.0 or later.\nThe example files used here can be downloaded from CrySPY Utility \u003e Examples \u003e qe_Si16_LAQA. In this tutorial, only 50 initial structures are generated, but originally, LAQA is designed to select candidates from many more structures.\nInput cryspy.in Here is an example of cryspy.in.\n[basic] algo = LAQA calc_code = QE tot_struc = 50 nstage = 1 njob = 10 jobcmd = qsub jobfile = job_cryspy [structure] natot = 16 atype = Si nat = 16 mindist_1 = 1.5 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 80 [LAQA] nselect_laqa = 4 [option] nstage must be 1 in LAQA You have to write nselect_laqa in [LAQA] section. nselect_laqa is the number of candidates you select at one time. If you want to change the value of the weight for LAQA score, edit wf and ws as below. If omitted, the default values are used (0.1 and 10.0, respectively). See, Searching algorithms \u003e LAQA for the score.\n[LAQA] nselect_laqa = 4 wf = 0.1 ws = 10.0 calc_in/pwscf.in_1 \u0026control calculation = 'vc-relax' pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/' outdir='./outdir/' nstep = 10 / \u0026system ibrav = 0 nat = 16 ntyp = 1 ecutwfc = 40 ecutrho = 200 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si -1.0 si_pbe_v1.uspp.F.UPF nstep controls how many steps of structure optimization can proceed in one selection. (NSW for VASP) calc_in/job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si_CrySPY_ID #$ -pe smp 20 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job The job file is the same as the usual way. Run Tip An automatic script is also available. See the bottom of this page.\nJust type cryspy for the 1st run.\ncryspy \u0026 Check log_cryspy. 50 random structures are generated.\n2023/05/13 13:02:07 CrySPY 1.1.0 Start cryspy.py Number of MPI processes: 1 Read input file, cryspy.in Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.5 Structure ID 0 was generated. Space group: 165 --\u003e 165 P-3c1 Structure ID 1 was generated. Space group: 66 --\u003e 66 Cccm Structure ID 2 was generated. Space group: 146 --\u003e 146 R3 Structure ID 3 was generated. Space group: 82 --\u003e 82 I-4 Structure ID 4 was generated. Space group: 162 --\u003e 162 P-31m ... ... ... Structure ID 47 was generated. Space group: 90 --\u003e 90 P42_12 Structure ID 48 was generated. Space group: 214 --\u003e 214 I4_132 Structure ID 49 was generated. Space group: 23 --\u003e 23 I222 Elapsed time for structure generation: 0:00:10.929030 # ---------- Initialize LAQA # ---------- Selection 0 selected_id: 50 IDs In LAQA, jobs of structure optimization for all structures are submitted once at the beginning. Note that only 10 steps are proceeded here since we set nstep = 10. Repeat cryspy command until all of these (10 steps) are completed. If necessary, you can also submit all jobs at once by increasing the value of njob.\nAfter all the initial optimizations, LAQA is ready is displayed at the end of log_cryspy.\n2023/05/13 13:23:31 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status ID 41: Stage 1 Done! LAQA is ready Next cryspy run will make the first selection.\n2023/05/13 13:23:33 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status Backup data # ---------- Selection 1 selected_id: 37 8 10 48 Here, only the number set in nselect_laqa will be selected. Type cryspy to submit the jobs (next 10 steps).\ncryspy \u0026 2023/05/13 13:23:36 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status ID 37: submit job, Stage 1 ID 8: submit job, Stage 1 ID 10: submit job, Stage 1 ID 48: submit job, Stage 1 Then, by repeating this over and over again, the optimization of the structure selected according to the score advances by 10 steps each time. Proceed until several structures are completed, and finish (stop) when you like.\nStatus If you want to check the LAQA score during the simulation, you can look at the status file:\n./data/LAQA_status Other files for LAQA will be output:\n./data_LAQA_bias ./data_LAQA_energy ./data_LAQA_score ./data_LAQA_selected_id ./data_LAQA_step Analysis and visualization It is assumed here that you analyze and visualize CrySPY data in your local PC. If you use CrySPY in super computers or workstations, download the data in your local PC. You can delete the work and backup directory if you do not need it because the file size could be very large. You may gzip the pkl data to decrease the file size.\njupyter notebook Move to the data/ directory in results you just downloaded. Then copy cryspy_analyzer_LAQA.ipynb from CrySPY utility.\nYou can obtain the graph and animation with the notebook. In the gif below, all of the optimizations were completed. This is just for animation. (When all of the optimizations are completed, the computational cost is the same as random search.)\nThis graph shows the energy as a function of optimization step. The red lines indicate three structures with the lowest energy. The most stable one reached diamond structure. The structures that eventually become stable were selected at an early stage.\nInfo If algo = LAQA, the followings are automatically set in the [option] section.\nforce_step_flag = True stress_step_flag = True Force and stress data are collected step by step. Energy and structure data are NOT. They are collected for each selection. In other words, in this case, energy and structure data are saved once every 10 steps. If you want to collect energy and structure data step by step, manually set up as follows:\n[option] energy_step_flag = True struc_step_flag = True Auto script You may find it tedious to run cryspy over and over again. The auto script could help you.\nrepeat_cryspy\n",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/tutorial/laqa/index.html"
  },
  {
    "content": "PNG (transparent background) JPG ",
    "description": "",
    "tags": null,
    "title": "Logo",
    "uri": "/about/logo/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "OpenMX",
    "uri": "/tutorial/random/omx/index.html"
  },
  {
    "content": "Stress step data is saved in stress_step_data.pkl if you set stress_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\nWarning stress_step_flag = True is currently available only with VASP, QE, and soiap.\nData format type: dict key: structure ID value: list of stress step data in each stage string form {0: [array([[-0.16770062, 0. , 0. ], […], […]]), array([[…], ]…], […]]), …], 1: [array([[ 0.39260083, -0. , -0. ], […], […]]), array([[…], […], […]]), …],\n…} unit of stress eV/(Å**3) How to access import pickle with open('stress_step_data.pkl', 'rb') as f: stress_step_data = pickle.load(f) # stress_step_data[ID][stage][step][atom] # stress_step_data[ID][0] \u003c-- stage 1 # stress_step_data[ID][1] \u003c-- stage 2 # # in LAQA # stress_step_data[ID][selection][step][atom] # stress_step_data[ID][0] \u003c-- 1st selection # stress_step_data[ID][1] \u003c-- 2nd selection # ---------- stress step data of ID 3, stage 1 cid = 0 # ID stage = 1 # stage stress_step_data[cid][stage-1][:3] # to show only 3 steps in jupyter [array([[-0.16770062, 0. , 0. ], [ 0. , -0.16770062, -0. ], [ 0. , 0. , 0.21823358]]), array([[-0.16020785, -0. , -0. ], [-0. , -0.16020785, 0. ], [-0. , 0. , 0.18646321]]), array([[-0.13572003, -0. , 0. ], [-0. , -0.13572003, 0. ], [-0. , 0. , 0.15953926]])] ",
    "description": "",
    "tags": null,
    "title": "Stress step data",
    "uri": "/data_format/optional_data/stress_step/index.html"
  },
  {
    "content": "[QE] section is required only if you use QE (calc_code = QE)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage qe_infile str File name of QE input file. qe_outfile str File name of QE output file. ",
    "description": "",
    "tags": null,
    "title": "[QE] section",
    "uri": "/input/qe_sec/index.html"
  },
  {
    "content": "Data format All pickle data are stored in the ./data/pkl_data/ directory.\nTable of contents Common data Initial and optimized structure data Result data Random Search (RS) Evolutionary algorithm (EA) Bayesian Optimization (BO) LAQA Optional data Energy step data Structure step data Force step data Stress step data ",
    "description": "",
    "tags": null,
    "title": "Data format",
    "uri": "/data_format/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "LAMMPS",
    "uri": "/tutorial/random/lammps/index.html"
  },
  {
    "content": "[OMX] section is required only if you use OpenMX (calc_code = OMX)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage OMX_infile str File name of OpenMX input file. OMX_outfile str File name of OpenMX output file. ValenceElectrons str float float [str float float …] The number of initial charges for up and down spin states. ValenceElectrons e.g. in NaCl: ValenceElectrons = Na 4.5 4.5 Cl 3.5 3.5.\n",
    "description": "",
    "tags": null,
    "title": "[OMX] section",
    "uri": "/input/omx_sec/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "Bayesian optimizaion (BO)",
    "uri": "/searching_algo/bo/index.html"
  },
  {
    "content": "CrySPY Utility See Installation/CrySPY utility to download. Some (but not all) examples can also be downloaded from this document site.\nTable of contents Examples ase_chgnet_Sr4Co4O12 ase_Cu8_RS soiap_Si8_RS soiap_Si8_RS_mindist qe_Si8_RS qe_benzene_2_RS_mol qe_Si16_LAQA Scripts extract_struc.py pos2pkl.py kpt_check.py repeat_cryspy ",
    "description": "",
    "tags": null,
    "title": "CrySPY Utility",
    "uri": "/cryspy_utility/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/data_format/laqa_data/index.html"
  },
  {
    "content": "You can restrict the interatomic distance in structure generation. Here is an example of [structure] section in the input file to limit minimum interatomic distance for a A-B binary system.\n[structure] natot = 8 atype = A B nat = 4 4 mindist_1 = 2.0 1.8 mindist_2 = 1.8 1.5 This means that minimum interatomic distances of A-A, A-B, and B-B are limited to 2.0, 1.8, and 1.5 Å, respectively. Structures with interatomic distances shorter than these values are automatically eliminated.\nFor ternary systems, you will need mindist_1, mindist_2, and mindist_3.\n",
    "description": "",
    "tags": null,
    "title": "Restriction on interatomic distances",
    "uri": "/features/restrict_dist/index.html"
  },
  {
    "content": "[soiap] section is required only if you use soiap (calc_code = soiap)\nName Value Default Description soiap_infile str File name of soiap input file. soiap_outfile str File name of soiap output file. soiap_cif str File name of soiap CIF-formatted initial structure. ",
    "description": "",
    "tags": null,
    "title": "[soaip] section",
    "uri": "/input/soiap_sec/index.html"
  },
  {
    "content": "kpt_check.py can check a k-point mesh with a given kppvol. This script supports POSCAR, CONTCAR, and init_struc_data.pkl. pymatgen library is required.\nAfter generating initial structures, you can try to see how much the value of kppvol should be.\nUsage python3 kpt_check.py [-h] [-w] [-n NSTRUC] infile kppvol positional arguments: infile input file: POSCAR or CONTCAR or init_struc_data.pkl kppvol kppvol optional arguments: -h, --help show this help message and exit -w, --write write KPOINTS -n NSTRUC, --nstruc NSTRUC number of structure to check Example POSCAR with a given kppvol $ python3 kpt_check.py POSCAR 100 a = 10.689217 b = 10.689217 c = 10.730846 Lattice vector 10.689217 0.000000 0.000000 0.000000 10.689217 0.000000 0.000000 0.000000 10.730846 kppvol: 100 k-points: [2, 2, 2] Write KPOINTS file You can generate a KPOINTS file using -w option.\n$ python3 kpt_check.py -w POSCAR 100 $ cat KPOINTS pymatgen 4.7.6+ generated KPOINTS with grid density = 607 / atom 0 Monkhorst 2 2 2 Check k-point meshes for init_struc_data.pkl In checking k-point meshes for init_struc_data.pkl, first five structures are automatically checked in the default setting. You can change the number of structures using -n option.\n$ python3 kpt_check.py -n 3 init_struc_data.pkl 100 # ---------- 0th structure a = 8.0343076893 b = 8.03430768936 c = 9.1723323373 Lattice vector 8.034308 0.000000 0.000000 -4.017154 6.957915 0.000000 0.000000 0.000000 9.172332 kppvol: 100 k-points: [3, 3, 3] # ---------- 1th structure a = 9.8451944096 b = 9.84519440959 c = 6.8764313585 Lattice vector 9.845194 0.000000 0.000000 -4.922597 8.526188 0.000000 0.000000 0.000000 6.876431 kppvol: 100 k-points: [3, 3, 4] # ---------- 2th structure a = 7.5760383679 b = 7.57603836797 c = 6.6507478296 Lattice vector 7.576038 0.000000 0.000000 -3.788019 6.561042 0.000000 0.000000 0.000000 6.650748 kppvol: 100 k-points: [4, 4, 4] ",
    "description": "",
    "tags": null,
    "title": "kpt_check.py",
    "uri": "/cryspy_utility/scripts/kpt_check/index.html"
  },
  {
    "content": "Table of contents Energy step data Structure step data Force step data Stress step data ",
    "description": "",
    "tags": null,
    "title": "Optional data",
    "uri": "/data_format/optional_data/index.html"
  },
  {
    "content": "[LAMMPS] section is required only if you use LAMMPS (calc_code = LAMMPS)\nName Value Default Description lammps_infile str File name of LAMMPS input file. lammps_outfile str File name of LAMMPS output file. lammps_potential str [str …], None None Potential. lammps_data str File name of LAMMPS data file. ",
    "description": "",
    "tags": null,
    "title": "[LAMMPS] section",
    "uri": "/input/lammps_sec/index.html"
  },
  {
    "content": "Score $ L $ $$ L = -E + w_F \\frac{F^2}{2\\Delta F} + w_S S. $$ Symbol Note $$ E $$ Energy (eV/atom) $$ w_F $$ Weight of the force term. Default: $ w_F = 0.1$ $$ F $$ Averaged norm of the atomic force (eV/Å) $$ \\Delta F $$ Absolute difference of $ F $ from the previous step. $ \\Delta F = 1$ for the first step. $ \\Delta F = 10^{-6}$ if $ \\Delta F \\le 10^{-6} $. $$ w_S $$ Weight of the stress term. Default: $ w_S = 10.0$ $$ S $$ Average of the absolute values of the components of the stress tensor (eV/Å^3). Reference K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda, npj Comput. Mater. 4, 32 (2018).\nhttps://www.nature.com/articles/s41524-018-0090-y T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).\nhttps://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335 ",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/searching_algo/laqa/index.html"
  },
  {
    "content": " Info First, see Tutorial \u003e Random Search (RS) for basic usage of CrySPY.\nIn this section, we give a tutorial on the molecular structure generation part only. Since version 0.9.0, CrySPY has been able to generate random molecular crystal structures using PyXtal.\nYou need to use a pre-defined molecular by PyXtal’s database (see, https://pyxtal.readthedocs.io/en/latest/Usage.html?highlight=benzene#pyxtal-molecule-pyxtal-molecule)) or create molecule files that define molecular structures.\nPre-defined molecule PyXtal currently supports C60, H2O, CH4, NH3, benzene, naphthalene, anthracene, tetracene, pentacene, coumarin, resorcinol, benzamide, aspirin, ddt, lindane, glycine, glucose, and ROY.\nLet us generate molecular crystal structures that consist of 2 benzenes.\nMove to your working directory, and copy input example files by one of the following methods.\nDownload from CrySPY Utility \u003e Examples \u003e qe_benzene_2_RS_mol Copy from CrySPY utility that you installed (only version 0.10.3 or earlier) cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_benzene_2_RS_mol . Take a look at cryspy.in.\n$ cat cryspy.in [basic] algo = RS calc_code = QE tot_struc = 6 nstage = 2 njob = 2 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 24 atype = H C nat = 12 12 mol_file = benzene nmol = 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] In generating molecular crystal structures, you have to set struc_mode = mol in the [structure] section. Molecule file(s) and the number of molecule(s) are specified as:\nmol_file = benzene nmol = 2 Run CrySPY and see the initial structures (./data/init_POSCARS).\nUser-defined molecule Move to your working directory, and copy input example files for 2 formula units of Li3PS4.\nversion 1.0.0 or later Copy from CrySPY utility version 0.10.3 or earlier cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_Li3PS4_2fu_RS_mol . $ cd QE_Li3PS4_2fu_RS_mol $ ls Li.xyz PS4.xyz calc_in/ cryspy.in Molecule files of Li and PS4 are included. Supported formats in PyXtal are .xyz, .gjf, .g03, .g09, .com, .inp, .out, and pymatgen’s JSON serialized molecules.\n$ cat Li.xyz 1 New structure Li 0.000 0.000 0.000 $ cat PS4.xyz 5 New structure P 0.000000 0.000000 0.000000 S 1.200000 1.200000 -1.200000 S 1.200000 -1.200000 1.200000 S -1.200000 1.200000 1.200000 S -1.200000 -1.200000 -1.200000 Check cryspy.in.\n$ cat cryspy.in [basic] algo = RS calc_code = QE tot_struc = 4 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] A single atom (Li atom in this case) is treated as a molecule in the molecular crystal structure generation mode. In this example, a random molecular structure is composed of six Li molecules (atoms) and two PS4 molecules specified as:\nmol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 In mol_file, set relative path of molecule files from cryspy.in. Here the molecule files are placed in the same directory.\nRun CrySPY and see the initial structures (./data/init_POSCARS).\ntimeout_mol Molecular crystal structure generation can be time consuming because PyXtal calculates the molecule directions according to a specified space group. Sometimes molecular crystal structure generation gets stuck. So we set a time limit on the single structure generation. The time limit (timeout_mol) is set to 120 seconds by default. If the limit is insufficient, you have to increase it as (see last line):\nstruc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 timeout_mol = 300.0 Volume of unit cell You can control the volume of unit cells by changing the value(s) of scaling factor, vol_factor, in cryspy.in. By default, vol_factor is set to 1.0. It is also possible to specify a range of factors. Set minimum and maximum values as follows:\nstruc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 timeout_mol = 300.0 vol_factor = 0.8 1.5 ",
    "description": "",
    "tags": null,
    "title": "Molecular crystal structure prediction",
    "uri": "/tutorial/mol/index.html"
  },
  {
    "content": "Download qe_benzene_2_RS_mol.tar.gz cryspy.in [basic] algo = RS calc_code = QE tot_struc = 6 nstage = 2 njob = 2 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 24 atype = H C nat = 12 12 mol_file = benzene nmol = 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] calc_in/ pwscf.in_1 \u0026control title = '2 benzene' calculation = 'relax' nstep = 30 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./outdir/' / \u0026system ibrav = 0 nat = 24 ntyp = 2 ecutwfc = 35.00 ecutrho = 300.00 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES H 1.008 H.pbe-kjpaw_psl.1.0.0.UPF C 12.01 C.pbe-n-kjpaw_psl.1.0.0.UPF pwscf.in_2 \u0026control title = '2 benzene' calculation = 'vc-relax' nstep = 200 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./outdir/' / \u0026system ibrav = 0 nat = 24 ntyp = 2 ecutwfc = 46.00 ecutrho = 326.00 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES H 1.008 H.pbe-kjpaw_psl.1.0.0.UPF C 12.01 C.pbe-n-kjpaw_psl.1.0.0.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N bz_CrySPY_ID #$ -pe smp 8 mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out # for QE if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_benzene_2_RS_mol",
    "uri": "/cryspy_utility/examples/qe_benzene_2_rs_mol/index.html"
  },
  {
    "content": "[ASE] section is required only if you use ASE (calc_code = ASE)\nName Value Default Description ase_python str File name of ASE input file. ",
    "description": "",
    "tags": null,
    "title": "[ASE] section",
    "uri": "/input/ase_sec/index.html"
  },
  {
    "content": "[EA] section is required only if you use EA (algo = EA)\nName Value Default Description n_pop int Population from second generation. n_crsov int The number of structures generated by crossover. n_perm int The number of structures generated by permutation. n_strain int The number of structures generated by strain. n_rand int The number of structures generated randomly. n_elite int The number of elite structures. fit_reverse bool False If False, minimal search. n_fittest int None The number of structures which can survive. slct_func TNM, RLT Select function. t_size int 3 Only used with slct_func = TNM. Tournament size. a_rlt float 10.0 Only used with slct_func = RLT. Parameter for linear scaling. b_rlt float 1.0 Only used with slct_func = RLT. Parameter for linear scaling. crs_lat equal, random equal How to mix lattice vectors. nat_diff_tole int 4 Tolerance for difference in the number of atoms in crossover. ntimes int 1 The number of times in permutation. sigma_st float 0.5 Standard deviation for strain. maxcnt_ea int 50 Maximum number of trials in EA. maxgen_ea int 0 Maximum generation. emax_ea float None Upper limit of energy in selecting parents. emin_ea float None Lower limit of energy in selecting parents. ",
    "description": "",
    "tags": null,
    "title": "[EA] section",
    "uri": "/input/ea/index.html"
  },
  {
    "content": "Available from CrySPY 0.11.0.\nIf you use an external program not supported by CrySPY, the optimized energy and structure data can be loaded semi-manually in CrySPY. You have to prepare two files, ext_opt_struc_data.pkl and ext_energy_data.pkl.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.11.0/cryspy.py (calc_in directory is not required.)\nInput files Move to your working directory, and copy input example files.\nversion 1.0.0 or later Copy from CrySPY utility version 0.10.3 or earlier cp -r ~/CrySPY_root/CrySPY-0.9.0/example/ext_Si8_RS . cd ext_Si8_RS tree . └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = ext tot_struc = 5 [structure] natot = 8 atype = Si nat = 8 [option] If calc_code == ext, nstage, njob, jobcmd, and jobfile are ignored.\nRunning CrySPY This mode is different from the normal use of CrySPY. Go to Load external data.\n",
    "description": "",
    "tags": null,
    "title": "External program",
    "uri": "/tutorial/random/external/index.html"
  },
  {
    "content": "You may find it tedious to run cryspy over and over again. This auto script could help you. This runs cryspy once every 5 minutes.\n#!/bin/bash set -e while : do cryspy -n LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"$LOG_LASTLINE\" = \"Done all structures!\" ] then exit 0 # ---------- for EA elif [ \"${LOG_LASTLINE:0:17}\" = \"Reached maxgen_ea\" ] then exit 0 elif [ \"$LOG_LASTLINE\" = \"EA is ready\" ] then cryspy -n # EA LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"${LOG_LASTLINE:0:17}\" = \"Reached maxgen_ea\" ] then exit 0 fi cryspy -n # submit jobs # ---------- for BO elif [ \"${LOG_LASTLINE:0:21}\" = \"Reached max_select_bo\" ] then exit 0 elif [ \"$LOG_LASTLINE\" = \"BO is ready\" ] then cryspy -n # selection LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"${LOG_LASTLINE:0:21}\" = \"Reached max_select_bo\" ] then exit 0 fi cryspy -n # submit jobs # ---------- for LAQA elif [ \"$LOG_LASTLINE\" = \"LAQA is ready\" ] then cryspy -n # selection cryspy -n # submit jobs fi sleep 5m done ",
    "description": "",
    "tags": null,
    "title": "repeat_cryspy",
    "uri": "/cryspy_utility/scripts/repeat/index.html"
  },
  {
    "content": "[BO] section is required only if you use BO (algo = BO)\nName Value Default Description nselect_bo int The number of structures to be selected at once. score TS, EI, PI Acquisition function. num_rand_basis int If 0, Gaussian process. The number of basis function. cdev float 0.001 Cutoff of deviation for standardization. dscrpt FP Descriptor for structures. fppath str, None None Only used with dscrpt = FP. Path of cal_fingerprint. fp_rmin float 0.5 Only used with dscrpt = FP. Minimum cutoff of r in fingerprint. fp_rmax float 5.0 Only used with dscrpt = FP. Maximum cutoff of r in fingerprint. fp_npoints int 20 Only used with dscrpt = FP. Number of discretized points for each pair in fingerprint. fp_sigma float 1.0 Only used with dscrpt = FP. Sigma parameter [Å] in Gaussian smearing function. max_select_bo int 0 Maximum number of selection. manual_select_bo int [int …] [] Structure IDs to be selected manually. emax_bo float None Upper limit of energy in BO. emin_bo float None Lower limit of energy in BO. ",
    "description": "",
    "tags": null,
    "title": "[BO] section",
    "uri": "/input/bo/index.html"
  },
  {
    "content": "See Input file in detail.\nLet’s take a look at cryspy.in again. This may be slightly different depending on calc_code you chose.\n[basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] [basic] section algo: Algorithm. Set RS for Random Search. calc_code: Structure optimizer. Choose from VASP, QE, OMX, soiap, LAMMPS tot_struc: The total number of structures. In this case, 5 random structures are generated at 1st run. nstage: The number of stages. It’s up to you. njob: The number of jobs running at the same time. In this example, CrySPY sets 2 slots for structure optimization, in other words, optimizes every 2 structures. jobcmd: Command for jobs. Use bash, zsh, qsub, and so on. jobfile: File name of the job file. [structure] section natot: The total number of atoms. e.g. for Na8Cl8: natot = 16. atype: Atom type. e.g. for Na8Cl8: atype = Na Cl. nat: The number of each atom. e.g. for Na8Cl8: nat = 8 8 ",
    "description": "",
    "tags": null,
    "title": "Check cryspy.in",
    "uri": "/tutorial/random/cryspy_in/index.html"
  },
  {
    "content": "In the job file of CrySPY, the string “CrySPY_ID” is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "CrySPY_ID in job files",
    "uri": "/features/cryspy_id/index.html"
  },
  {
    "content": "Download qe_Si16_LAQA.tar.gz cryspy.in [basic] algo = LAQA calc_code = QE tot_struc = 50 nstage = 1 njob = 10 jobcmd = qsub jobfile = job_cryspy [structure] natot = 16 atype = Si nat = 16 mindist_1 = 1.5 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 80 [LAQA] nselect_laqa = 4 [option] calc_in/ pwscf.in_1 \u0026control calculation = 'vc-relax' pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/' outdir='./outdir/' nstep = 10 / \u0026system ibrav = 0 nat = 16 ntyp = 1 ecutwfc = 40 ecutrho = 200 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si -1.0 si_pbe_v1.uspp.F.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si_CrySPY_ID #$ -pe smp 20 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_Si16_LAQA",
    "uri": "/cryspy_utility/examples/qe_si16_laqa/index.html"
  },
  {
    "content": "May 15th, 2023\nInfo First, see Tutorial \u003e Random Search (RS) for basic usage of CrySPY.\nInfo Requirements:\nCrySPY 1.1.0 or later mpi4py MPI library (Open MPI, Intel MPI, MPICH, etc.) mpi4py Install mpi4py if it is not already installed.\npip install mpi4py Input cryspy.in is the same as normal usage and does not need to be changed. Here we try structure generation with MPI using the following settings:\n[basic] algo = RS calc_code = soiap tot_struc = 100 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] All except tot_struc, natot, atype, and nat are irrelevant for structure generation and can be ignored here.\nRun If you want to generate structures with 4 MPI processes, just use mpiexec -n:\nmpiexec -n 4 cryspy If you submit the job with a job scheduler system, make the job file. Here is an example:\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash #$ -N n_nproc #$ -pe smp 4 mpirun -np $NSLOTS ~/.local/bin/cryspy Please edit the location of the executable script cryspy.\nResult CrySPY simply divides the task (number of structures) by the number of processes:\nRank 0: IDs 0 – 24 Rank 1: IDs 25 – 49 Rank 2: IDs 50 – 74 Rank 3: IDs 75 – 99 CrySPY outputs the log in the order they are generated as follows:\n2023/04/24 22:47:51 CrySPY 1.1.0 Start cryspy.py Number of MPI processes: 4 Read input file, cryspy.in Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.11 Structure ID 25 was generated. Space group: 138 --\u003e 123 P4/mmm Structure ID 75 was generated. Space group: 99 --\u003e 99 P4mm Structure ID 0 was generated. Space group: 127 --\u003e 123 P4/mmm Structure ID 1 was generated. Space group: 61 --\u003e 61 Pbca Structure ID 50 was generated. Space group: 38 --\u003e 38 Amm2 Structure ID 51 was generated. Space group: 134 --\u003e 123 P4/mmm Structure ID 26 was generated. Space group: 111 --\u003e 123 P4/mmm Structure ID 2 was generated. Space group: 9 --\u003e 9 Cc Structure ID 3 was generated. Space group: 80 --\u003e 80 I4_1 Structure ID 4 was generated. Space group: 107 --\u003e 107 I4mm Structure ID 5 was generated. Space group: 75 --\u003e 75 P4 Structure ID 76 was generated. Space group: 108 --\u003e 108 I4cm Structure ID 77 was generated. Space group: 100 --\u003e 100 P4bm Structure ID 27 was generated. Space group: 207 --\u003e 221 Pm-3m However, the order in init_POSCARS is by structure ID since CrySPY outputs after all structures have been generated.\nID_0 1.0 2.9636956737951818 0.0000000000000002 0.0000000000000002 0.0000000000000000 2.9636956737951818 0.0000000000000002 0.0000000000000000 0.0000000000000000 6.2634106638053080 Si 8 direct -0.1602734164607877 -0.1602734164607877 -0.0000000000000000 Si 0.1602734164607877 0.1602734164607877 0.5000000000000000 Si 0.6602734164607877 0.3397265835392123 0.7500000000000000 Si 0.3397265835392122 0.6602734164607877 0.2500000000000000 Si 0.4469739273741755 0.4469739273741755 -0.0000000000000000 Si 0.5530260726258245 0.5530260726258244 0.5000000000000000 Si 0.0530260726258245 0.9469739273741754 0.7500000000000000 Si 0.9469739273741754 0.0530260726258245 0.2500000000000000 Si ID_1 1.0 7.2751506682509657 0.0000000000000004 0.0000000000000004 0.0000000000000000 7.2751506682509657 0.0000000000000004 0.0000000000000000 0.0000000000000000 5.1777634169924873 Si 8 direct -0.3845341807505553 -0.3845341807505553 0.4999999999999999 Si 0.3845341807505553 0.3845341807505553 0.5000000000000000 Si 0.3845341807505553 -0.3845341807505553 0.0000000000000000 Si -0.3845341807505553 0.3845341807505553 -0.0000000000000000 Si 0.0000000000000000 0.5000000000000000 0.2500000000000000 Si 0.5000000000000000 0.0000000000000000 0.7500000000000000 Si 0.0000000000000000 0.5000000000000000 0.7500000000000000 Si 0.5000000000000000 0.0000000000000000 0.2500000000000000 Si ID_2 1.0 -4.3660398676292269 -4.3660398676292269 0.0000000000000000 -4.3660398676292269 -0.0000000000000003 -4.3660398676292269 0.0000000000000000 -4.3660398676292269 -4.3660398676292269 Si 8 direct 0.8700001548800920 0.8700001548800920 0.1299998451199080 Si 0.1299998451199080 0.1299998451199080 0.8700001548800920 Si 0.8700001548800920 0.1299998451199080 0.8700001548800920 Si 0.1299998451199080 0.8700001548800920 0.1299998451199080 Si 0.1299998451199080 0.8700001548800920 0.8700001548800920 Si 0.8700001548800920 0.1299998451199080 0.1299998451199080 Si 0.7500000000000000 0.7500000000000000 0.7500000000000000 Si 0.2500000000000000 0.2500000000000000 0.2500000000000000 Si Note Except for the random structure generation part, there is no point in using MPI because it is not parallelized.\nInfo See also Features \u003e Structure generation with MPI parallelization\n",
    "description": "",
    "tags": null,
    "title": "Random structure generation with MPI",
    "uri": "/tutorial/mpi/index.html"
  },
  {
    "content": "[LAQA] section is required only if you use LAQA (algo = LAQA)\nName Value Default Description nselect_laqa int The number of structures to be selected at once. wf float 0.1 Weight of the force term. ws float 10.0 Weight of the stress term. Info See also Searching algorithms \u003e LAQA\nInfo If algo = LAQA, the followings are automatically set in the [option] section.\nforce_step_flag = True stress_step_flag = True Force and stress data are collected step by step. Energy and structure data are NOT. They are collected for each selection. In other words, in this case, energy and structure data are saved once every 10 steps. If you want to collect energy and structure data step by step, manually set up as follows:\n[option] energy_step_flag = True struc_step_flag = True ",
    "description": "",
    "tags": null,
    "title": "[LAQA] section",
    "uri": "/input/laqa/index.html"
  },
  {
    "content": " Note For version 1.0.0 or later, skip this page. The executable script is automatically installed.\nAssumption Here, we assume the following condition:\nCrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py Make script Let’s make a convenient shell script to avoid typing long commands over and over again. Here, we create the script, cryspy (any file name will do).\n$ emacs cryspy $ chmod 744 cryspy $ cat cryspy #!/bin/sh python3 -u ~/CrySPY_root/CrySPY-0.9.0/cryspy.py 1\u003e\u003e log 2\u003e\u003e err -u option (unbuffered option) can be omitted.\nYou can put this script in your $PATH, or just use like bash ./cryspy.\n",
    "description": "",
    "tags": null,
    "title": "Script to run",
    "uri": "/tutorial/random/script_to_run/index.html"
  },
  {
    "content": "2023 July 10, update\nMake sure you have the following in your working directory.\ncalc_in/ (cryspy) cryspy.in $ ls calc_in/ cryspy.in Then, run CyrSPY!\ncryspy If you use old version (0.10.3 or earlier):\nbash ./cryspy At the first run, CrySPY goes into structure generation mode. CrySPY stops after 5 structure generation.\nIf it worked properly, the following output appears on the screen:\n[2023-07-10 18:40:54,389][cryspy_init][INFO] Start CrySPY 1.2.0 [2023-07-10 18:40:54,389][cryspy_init][INFO] # ---------- Read input file, cryspy.in [2023-07-10 18:40:54,390][read_input][INFO] Save input data in cryspy.stat [2023-07-10 18:40:54,391][cryspy_init][INFO] # ---------- Initial structure generation [2023-07-10 18:40:54,391][cryspy_init][INFO] Number of MPI processes: 1 [2023-07-10 18:40:54,391][gen_init_struc][INFO] # ------ mindist [2023-07-10 18:40:54,395][struc_util][INFO] Cu - Cu: 1.32 [2023-07-10 18:40:54,395][gen_init_struc][INFO] # ------ generate structures [2023-07-10 18:40:54,481][gen_pyxtal][INFO] Structure ID 0 was generated. Space group: 1 --\u003e 1 P1 [2023-07-10 18:40:54,493][gen_pyxtal][INFO] Structure ID 1 was generated. Space group: 28 --\u003e 28 Pma2 [2023-07-10 18:40:54,498][gen_pyxtal][INFO] Structure ID 2 was generated. Space group: 29 --\u003e 29 Pca2_1 [2023-07-10 18:40:54,704][gen_pyxtal][INFO] Structure ID 3 was generated. Space group: 137 --\u003e 137 P4_2/nmc [2023-07-10 18:40:54,725][gen_pyxtal][INFO] Structure ID 4 was generated. Space group: 212 --\u003e 214 I4_132 [2023-07-10 18:40:54,800][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.408367 cryspy 4.35s user 1.04s system 145% cpu 3.697 total Several output files are also generated.\n(cryspy.out): Short log. only version 0.10.3 or earlier. cryspy.stat: Status file. data/init_POSCARS: Initial struture file in POSCAR format. You can open this file using VESTA data/pkl_data: Directory to save pickled data. log_cryspy: log. err_cryspy: error and warning. Let’s take a look at cryspy.stat file.\n... (omit) ... [status] id_queueing = 0 1 2 3 4 Structure ID 0 – 4 are queueing because we just generated structures, and have not submitted yet.\nTip Check the initial structures, if the distance between atoms is too close, you should set the mindist in cryspy.in.\n",
    "description": "",
    "tags": null,
    "title": "Firsrt run",
    "uri": "/tutorial/random/first_run/index.html"
  },
  {
    "content": "2023 July 10, update\nContinue CrySPY continues the simulation if you have cryspy.stat file.\nTip Continue if you have crypy.stat\nStart from the beginning if you don’t have cryspy.stat\nSubmit job Run CyrSPY again.\ncryspy Check the screen or log_cryspy file.\n[2023-07-10 18:52:51,859][cryspy_restart][INFO] Restart CrySPY 1.2.0 [2023-07-10 18:52:51,869][ctrl_job][INFO] # ---------- job status [2023-07-10 18:52:51,904][ctrl_job][INFO] ID 0: submit job, Stage 1 [2023-07-10 18:52:51,931][ctrl_job][INFO] ID 1: submit job, Stage 1 And also cryspy.stat file.\n... (omit) ... [status] id_queueing = 2 3 4 id 0 = Stage 1 id 1 = Stage 1 CrySPY submitted two jobs for structure ID 0 and 1 as you set njob = 2 in cryspy.in. Calculations are performed in the work directory. These directory names correspond to their structure ID.\ntree -d work work ├── 000000 ├── 000001 └── fin When the two jobs are done, run CrySPY again.\ncryspy [2023-07-10 18:55:01,053][cryspy_restart][INFO] Restart CrySPY 1.2.0 [2023-07-10 18:55:01,058][ctrl_job][INFO] # ---------- job status [2023-07-10 18:55:01,058][ctrl_job][INFO] ID 0: Stage 1 Done! [2023-07-10 18:55:01,093][ctrl_job][INFO] collect results: E = -0.00696997755502915 eV/atom [2023-07-10 18:55:01,132][ctrl_job][INFO] ID 1: Stage 1 Done! [2023-07-10 18:55:01,133][ctrl_job][INFO] collect results: E = 0.4934076667166454 eV/atom [2023-07-10 18:55:01,144][cryspy][INFO] recheck 1 [2023-07-10 18:55:01,145][ctrl_job][INFO] # ---------- job status [2023-07-10 18:55:01,153][ctrl_job][INFO] ID 2: submit job, Stage 1 [2023-07-10 18:55:01,161][ctrl_job][INFO] ID 3: submit job, Stage 1 If you set nstage = 2 (more than 2), new jobs on stage 2 for ID 0 and 1 are submitted. If you set nstage = 1, CrySPY collects calculation data of ID 0 and 1, then submits next ID’s jobs. Directories of the finished structure are moved to the fin directory.\nRepeat cryspy several times until all 5 structures are done. You can delete the work directory when the simulation is done if you do not need it.\n",
    "description": "",
    "tags": null,
    "title": "Submit job",
    "uri": "/tutorial/random/submit_job/index.html"
  },
  {
    "content": "Move to data directory. There should be a few more files.\n$ cd data $ ls cryspy_rslt cryspy_rslt_energy_asc init_POSCARS opt_POSCARS pkl_data/ cryspy_rslt: Result file. cryspy_rslt_energy_asc: Result file sorted in energy ascending order. init_POSCARS: Initial struture file in POSCAR format. opt_POSCARS: Optimized structure file in POSCAR format. pkl_data/: Directory to save pickled data. The results are written to text files, cryspy_rslt and cryspy_rslt_energy_asc (and also saved in pickle data in pkl_data directory).\nEach result appends to cryspy_rslt file in the order in which one finished earlier.\ncat cryspy_rslt Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet Info Not ID order in cryspy_rslt\nIn cryspy_rslt_energy_asc file, the results are sorted in energy ascending order.\ncat cryspy_rslt_energy_asc Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done Spg_num and Spg_sym show space group information on initial structures. Spg_num_opt and Spg_sym_opt are those of optimized structures. The last column Opt indicates whether or not optimization reached required accuracy.\n",
    "description": "",
    "tags": null,
    "title": "Check results",
    "uri": "/tutorial/random/result/index.html"
  },
  {
    "content": "Of course only 5 structures are not enough to find stable structures. You can append structures whenever you want. Here let’s append more 5 structures.\nFor Si-Si mindist, the default value of 1.11 Å is used in the first structure generation (see log_cryspy), which is a little too close. Let us try to set the mindist to 2.0 Å.\nInfo For mindist, see also Features \u003e Restriction on interatomic distances.\nEdit cryspy.in and change the value of tot_struc into 10, and add mindist_1 = 2.0\nemacs cryspy.in cat cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 10 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.0 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] Then run cryspy, and check log_cryspy file.\ncryspy \u0026 cat log_cryspy ... (omit) ... 2023/03/19 00:01:47 CrySPY 1.0.0 Restart cryspy.py Changed tot_struc from 5 to 10 Changed mindist from None to [[2.0]] Backup data # ---------- Append structures # ------ mindist Si - Si 2.0 Structure ID 5 was generated. Space group: 218 --\u003e 221 Pm-3m Structure ID 6 was generated. Space group: 86 --\u003e 129 P4/nmm Structure ID 7 was generated. Space group: 129 --\u003e 129 P4/nmm Structure ID 8 was generated. Space group: 191 --\u003e 191 P6/mmm Structure ID 9 was generated. Space group: 31 --\u003e 31 Pmn2_1 Remember that CrySPY goes into structure generation mode whenever you change the value of tot_struc. In this mode, CrySPY does not do any other action such as collecting data, submitting jobs, and so on.\nNote Structure generation mode whenever you change the value of tot_struc.\nFrom version 1.0.0, CrySPY automatically backs up when adding structures. See features/backup.\nRepeat cryspy \u0026 several times until all appended structures are done. The auto script may help you.\nrepeat_cryspy\n",
    "description": "",
    "tags": null,
    "title": "Append structures",
    "uri": "/tutorial/random/append/index.html"
  },
  {
    "content": "Download the data It is assumed here that you analyze and visualize CrySPY data in your local PC. If you use CrySPY in super computers or workstations, download the data in your local PC. You can delete the work and backup directory if you do not need it because the file size could be very large.\njupyter notebook Move to the data/ directory in results you just download. Then copy cryspy_analyzer_RS.ipynb from CrySPY utility.\n$ ls calc_in/ cryspy.in cryspy.stat data/ err_cryspy log_cryspy $ cd data $ ls cryspy_rslt cryspy_rslt_energy_asc init_POSCARS opt_CIFS.cif opt_POSCARS pkl_data/ cp /path/to/CrySPY_utility/cryspy_analyzer_RS.ipynb . Run jupyter. (VScode, jupyter lab, jupyter notebook, and so on.) You can get the following figure by simply running the steps in order.\n",
    "description": "",
    "tags": null,
    "title": "Analysis and visualization",
    "uri": "/tutorial/random/analysis_visualization/index.html"
  },
  {
    "content": " Name Value Default Description stop_chkpt int 0 CrySPY stops at a specified check point. load_struc_flag bool False If True, load initial structures from ./data/pkl_data/init_struc_data.pkl. stop_next_struc bool False If True, CrySPY does not submit jobs for next structures, but jobs for next stage are submitted. recalc int [int …] (empty list) Specify structure IDs if you want to recalculate or continue optimization. append_struc_ea bool False If True, append structures by EA. energy_step_flag bool False If True, save energy_step_data in ./data/pkl_data/energy_step_data.pkl. struc_step_flag bool False If True, save struc_step_data in ./data/pkl_data/struc_step_data.pkl. force_step_flag bool False If True, save force_step_data in ./data/pkl_data/force_step_data.pkl. stress_step_flag bool False If True, save stress_step_data in ./data/pkl_data/stress_step_data.pkl. ",
    "description": "",
    "tags": null,
    "title": "[option] section",
    "uri": "/input/option/index.html"
  },
  {
    "content": "Random structure generation using MPI has been available since version 1.1.0. You need to install mpi4py in your Python environment for MPI parallelization. Of course, an MPI library such as Open MPI, Intel MPI, and MPICH is required for your workstation.\nInfo Requirements:\nCrySPY 1.1.0 or later mpi4py MPI library (Open MPI, Intel MPI, MPICH, etc.) The figure below shows the relationship between elapsed time and the number of processes for 1000 structures of Si8 with the following setting:\n[basic] algo = RS calc_code = soiap tot_struc = 1000 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.2 The structure generation is taking a long time because of a slightly stricter setting like mindset_1 = 2.2. The structure generation was performed 10 times for each number of processes.\n",
    "description": "",
    "tags": null,
    "title": "Structure generation with MPI parallelization",
    "uri": "/features/mpi/index.html"
  },
  {
    "content": "You need only cryspy.in.\n$ ls cryspy.in Then, run CyrSPY.\ncryspy \u0026 At the first run, CrySPY goes into structure generation mode as usual. CrySPY stops after 5 structure generation.\nIf it worked properly, log_cryspy would look like this.\n2022/07/14 19:41:41 CrySPY 1.0.0 Start cryspy.py Read input file, cryspy.in Write input data in cryspy.out Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.11 Structure ID 0 was generated. Space group: 88 --\u003e 141 I4_1/amd Structure ID 1 was generated. Space group: 101 --\u003e 101 P4_2cm Structure ID 2 was generated. Space group: 204 --\u003e 229 Im-3m Structure ID 3 was generated. Space group: 199 --\u003e 199 I2_13 Structure ID 4 was generated. Space group: 12 --\u003e 12 C2/m Unlike normal use, a directory named ext was created. Only the stat_job file exists in ext/.\n$ cat ext/stat_job out If you run cryspy when “out” is written in the stat_job file, queueing structure files (cif format) are exported in ext/queue.\ncryspy \u0026 $ ls ext/queue 0.cif 1.cif 2.cif 3.cif 4.cif The number in the file name is structure ID. The fist line of stat_job was automatically changed.\n$ cat ext/stat_job submitted Perform structure optimization and energy evaluation in an external program using the output cif files. Once that calculation is done, prepare the optimized structure and energy data in the pickle data format, ext_opt_struc_data.pkl and ext_energy_data.pkl.\nThe data format of ext_opt_struc_data.pkl is the same as init_struc_data.pkl and opt_struc_data.pkl, see Data format/Initial and optimized structure data.\nThe data format of ext_energy_data.pkl is similar to ext_opt_struc_data.pkl. Just change the value from the structure data into the energy. An example of the energy data (dict type) is shown below.\nkey: structure ID value: energy {0: -0.7139331910805997, 1: -0.5643404689832622, 2: -0.5832404287259171, 3: -0.535037327286169, 4: -0.6316663459586607} The ext/calc_data directory should be automatically generated, so put the two pickle files here.\n$ ls ext/calc_data ext_energy_data.pkl ext_opt_struc_data.pkl When ready, replace the first line of the stat_job file with “done” and run CrySPY.\n$ emacs /ext/stat_job $ cat /ext/stat_job done cryspy \u0026 CrySPY collects the result data.\n",
    "description": "",
    "tags": null,
    "title": "Load external data",
    "uri": "/tutorial/random/ext_load_data/index.html"
  },
  {
    "content": "ASE interface ASE interface is now available.\nSee also\nTutorial \u003e Random Search (RS) \u003e ASE in your local PC Adoption of logging CrySPY logs are output to both the screen and files (log_cryspy and err_cryspy).\nSee also\nFeatures \u003e Logging ",
    "description": "",
    "tags": null,
    "title": "Version 1.2.0",
    "uri": "/version_info/ver_1.2.0/index.html"
  },
  {
    "content": "Bug fix for spg_error In random structure generation, when a structure cannot be generated for a certain space group, the space group number is recorded in the variable sgp_error, and the number is skipped thereafter, but a bug was found in which the number was registered incorrectly in rare cases. Therefore, this spg_error function has been removed.\n",
    "description": "",
    "tags": null,
    "title": "Version 1.1.1",
    "uri": "/version_info/ver_1.1.1/index.html"
  },
  {
    "content": "Parallelization with MPI Random structure generation using MPI has been available.\nSee also\nTutorial \u003e Random structure generation with MPI Features \u003e Structure generation with MPI parallelization LAQA Updated score formula to take into account the stress term (T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).).\nSee also\nTutorial \u003e LAQA Input file \u003e [LAQA] section CrySPY Utility \u003e Examples \u003e qe_Si16_LAQA Backup Files are copied to the directory named by the date and time in “backup” directory.\nSee features/backup in detail.\n",
    "description": "",
    "tags": null,
    "title": "Version 1.1.0",
    "uri": "/version_info/ver_1.1.0/index.html"
  },
  {
    "content": "Install and run CrySPY is now available in PyPI. You can install by\npip install csp-cryspy The executable script, cryspy is automatically installed in your PATH. To run CrySPY, just type cryspy:\ncryspy \u0026 CrySPY stops once before going to next selection (BO, LAQA) or next generation (EA). For example, EA case:\n[old version]\ncryspy run check jobs (finish current generation?) structure generation by EA automatically starts [CrySPY 1.0.0]\ncryspy run check jobs (finish current generation?) stop cryspy run auto backup structure generation by EA automatically starts Auto and manual backup Automatically backup:\nbefore going to next selection or next generation structure generation To manually back up:\ncryspy -b See features/backup in detail.\nClean cryspy -c See features/clean in detail.\nDirectory tree Changed the directory tree.\ngenstruc/RS –\u003e RS/ genstruc/EA –\u003e EA/ genstruc/struc_util.py –\u003e util/ utility.py –\u003e util/ IO Fixed standard output file and standard error file: log_cryspy and err_cryspy cryspy.out is obsoleted Moved to CrySPY Utility With the change in installation method, examples and cal_fingerprint have been moved to the CrySPY Utility.\nCOMBO The python library COMBO is now optional in CrySPY. If you do not use Bayesian optimizaion, you do not need to install it.\nNew calc_code ext: see tutorial/random/ext_load_data cryspy.in fppath New input variable for cal_fingerprint. See Instllation/cryspy/cryspy_1.0\nfwpath New input variable for find_wy. See Instllation/requirements/find_wy\nmindist mindist can be omitted in cryspy.in mindist_ea is obsoleted added mindist_mol_bs and mindist_mol_bs_factor in cryspy.in ",
    "description": "",
    "tags": null,
    "title": "Version 1.0.0",
    "uri": "/version_info/ver_1.0.0/index.html"
  },
  {
    "content": " [2022 May 17] version 0.10.3 released Bug fixed: LAMMPS IO. [2022 January 24] version 0.10.2 released Added nrot: maximum number of times to rotate molecules in mol_bs [2021 September 30] version 0.10.1 released Fixed the problem of numpy.random.seed in multiprocessing [2021 July 25] version 0.10.0 released Support PyXtal 0.2.9 or later LAQA can be used with QE Upper and lower limits of energy for EA and BO [2021 July 13] paper published Our paper on CrySPY software has been published in STAM:Methods [2021 March 18] version 0.9.2 released Support pymatgen v2022. [2021 February 7] version 0.9.0 released Interfaced with OpenMX Employ PyXtal library to generate initial structures If you use PyXtal (default), find_wy program is not required LAQA can be used with soiap Change the name: [lattice] section –\u003e [structure] section Several input variables move to [structure] section natot: [basic] –\u003e [structure] atype: [basic] –\u003e [structure] nat: [basic] –\u003e [structure] maxcnt: [option] –\u003e [structure] symprec: [option] –\u003e [structure] spgnum: [option] –\u003e [structure] New features Molecular crystal structure generation Scale volume [2020 March 19] paper published Our paper on adjusting the descriptor for CSP Bayesian optimization has been published in Physical Review Materials [2020 February 16] version 0.8.0 released Migrate to Python 3 CrySPY logo created Change several variable names and data formats Change style of output for energy: eV/cell –\u003e eV/atom IDs of working directories corresponds to structure IDs New features recalculation manual select in BO [2018 December 5] version 0.7.0 released New features Evolutionary algorithm [2018 August 20] version 0.6.4 released [2018 July 2] version 0.6.3 released [2018 June 26] Version 0.6.2 released [2018 March 1] Version 0.6.1 released [2018 January 9] paper published Our paper on CrySPY has been published in Physical Review Materials ",
    "description": "",
    "tags": null,
    "title": "Version 0.10.3 or earlier",
    "uri": "/version_info/ver_0.10.3/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
