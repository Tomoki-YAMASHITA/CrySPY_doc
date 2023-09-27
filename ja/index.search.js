var relearn_search_index = [
  {
    "content": "CrySPYについて CrySPYは機械学習を利用したPython製の結晶構造探索ツールであり，クリスピーと読む．オープンソース．\n目次 結晶構造探索 探索アルゴリズム インターフェース ロゴ ",
    "description": "",
    "tags": null,
    "title": "CrySPYについて",
    "uri": "/ja/about/index.html"
  },
  {
    "content": "Table of contents ase_chgnet_Sr4Co4O12 ase_Cu8_RS soiap_Si8_RS soiap_Si8_RS_mindist qe_Si8_RS qe_benzene_2_RS_mol qe_Si16_LAQA ",
    "description": "",
    "tags": null,
    "title": "Examples",
    "uri": "/ja/cryspy_utility/examples/index.html"
  },
  {
    "content": "2023年7月21日更新\ninit_struc_data.pklやopt_struc_data.pklから構造ごとにcifファイルを出力するスクリプト． ファイル出力せず，構造情報を画面にプリントすることも可能．\n-iオプションでインデックス（構造ID)を（複数）指定できる． -tオプションでエネルギーが低い順番に指定した構造数のcifファイルを出力可能． -aオプションの場合は全ての構造をcifファイルに出力する．数が多い場合はディレクトリを作成してそこに移動してから実行したほうが良い． -sオプションをつけると対称性（空間群）の情報を付けられる．ただし，セルや原子数が変わるので注意． -pオプションをつけるとファイル出力せずに，画面にプリントする．\n使い方 usage: extract_struc.py [-h] [-p] [-a] [-i [INDEX ...]] [-t TOP] [-r] [-s] infile positional arguments: infile input file options: -h, --help show this help message and exit -p, --print flag for print -a, --all_id flag for all structures -i [INDEX ...], --index [INDEX ...] structure ID -t TOP, --top TOP top k structures -r, --rank flag for rank in file names -s, --symmetrized flag for symmetrized structure 例 プリント -pオプションは-s以外のオプションと組み合わせて使用することができる．\npython3 extract_struc.py -p init_struc_data.pkl -i 0 1 このスクリプトをPATHが通ったところにおけばpython3を省略できる\nextract_struc.py -p init_struc_data.pkl -i 0 1 ID 0 Full Formula (Na8 Cl8) Reduced Formula: NaCl abc : 6.823618 6.823618 7.566454 angles: 90.000000 90.000000 96.650518 pbc : True True True Sites (16) # SP a b c --- ---- -------- -------- -------- 0 Na 0 0 1 1 Na 0 0 0.5 2 Na 0.704707 0.295293 0.75 3 Na 0.295293 0.704707 0.25 4 Na 0.5 0 1 5 Na 0.5 0 0.5 6 Na 0 0.5 0.5 7 Na 0 0.5 0 8 Cl 0.5 0.5 0 9 Cl 0.5 0.5 0.5 10 Cl 0.484753 0.515247 0.75 11 Cl 0.515247 0.484753 0.25 12 Cl 0.828247 0.171753 0.851096 13 Cl 0.171753 0.828247 0.351096 14 Cl 0.828247 0.171753 0.648904 15 Cl 0.171753 0.828247 0.148904 ID 1 Full Formula (Na8 Cl8) Reduced Formula: NaCl abc : 8.145021 8.145021 4.324235 angles: 90.000000 90.000000 120.000000 pbc : True True True Sites (16) # SP a b c --- ---- --------- --------- -------- 0 Na 0.666667 0.333333 0.736206 1 Na 0.666667 0.333333 0.263794 2 Na 0.913147 0.086853 0.5 3 Na 0.913147 0.826295 0.5 4 Na 0.173705 0.086853 0.5 5 Na 0.77711 0.22289 0 6 Na 0.77711 0.55422 0 7 Na 0.44578 0.22289 0 8 Cl 0.027675 0.423376 0.5 9 Cl -0.423376 -0.395701 0.5 10 Cl 0.395701 -0.027675 0.5 11 Cl -0.423376 -0.027675 0.5 12 Cl 0.395701 0.423376 0.5 13 Cl 0.027675 -0.395701 0.5 14 Cl 0.333333 0.666667 0.5 15 Cl 0 0 0 構造ID $ python3 extract_struc.py init_struc_data.pkl -i 7 10 12 以下のファイルが出力される．\n7.cif，10.cif，12.cif\n対称性の情報ありの場合は-sオプションをつける．\n$ python3 extract_struc.py init_struc_data.pkl -i 7 10 12 -s エネルギーの低い構造 情報 rslt_data.pkl がインプット（init_struc_data.pklかopt_struc_data.pkl）と同じディレクトリに必要．\n以下のcryspy_rslt_energy_ascを仮定すると\nSpg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 9 110 I4_1cd 110 I4_1cd -1284.708037 NaN not_yet 16 4 P2_1 4 P2_1 -1284.693651 NaN done 97 92 P4_12_12 91 P4_122 -1284.692494 NaN done 8 57 Pbcm 57 Pbcm -1284.668504 NaN done 81 19 P2_12_12_1 19 P2_12_12_1 -1284.635684 NaN done ... トップk (ここではk=3) の構造は下記コマンドで出力できる．\n$ python3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 ここではrlst_data.pklは./data/pkl_data/の中に存在しなければならない. 9.cif, 16.cif, 97.cifというファイルが出力される．\n-rオプションを使うと，ファイル名に順位を含めることができる．\n$ python3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -r ファイル名は1_9.cif, 2_16.cif, 3_97.cifのようになる．\n対称化されたcifの場合は下記のようにする．\n$ python3 extract_struc.py ./data/pkl_data/opt_struc_data.pkl -t 3 -rs 全構造 構造が多い場合はディレクトリを先に作った方が良い．\n$ mkdir init_cifs $ cd init_cifs $ python3 extract_struc.py init_struc_data.pkl -a 対称化する場合，\n$ python3 extract_struc.py init_struc_data.pkl -as ",
    "description": "",
    "tags": null,
    "title": "extract_struc.py",
    "uri": "/ja/cryspy_utility/scripts/extract_struc/index.html"
  },
  {
    "content": "バージョン情報 目次 Version 1.2.1 Version 1.2.0 Version 1.1.1 Version 1.1.0 Version 1.0.0 Version 0.10.3 or earlier ",
    "description": "",
    "tags": null,
    "title": "バージョン情報",
    "uri": "/ja/version_info/index.html"
  },
  {
    "content": "Download ase_chgnet_RS_Sr4Co4O12.tar.gz cryspy.in [basic] algo = RS calc_code = ASE tot_struc = 10 nstage = 1 njob = 2 jobcmd = bash jobfile = job_cryspy [structure] natot = 20 atype = Sr Co O nat = 4 4 12 mindist_1 = 2.2 2.0 1.8 mindist_2 = 2.0 2.2 1.5 mindist_3 = 1.8 1.5 2.0 [ASE] ase_python = chgnet_in.py [option] calc_in/ chgnet_in.py_1 from chgnet.model import StructOptimizer from pymatgen.core import Structure # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory structure = Structure.from_file('POSCAR') # ---------- relax relaxer = StructOptimizer() result = relaxer.relax(atoms=structure, fmax=0.01, steps=2000) # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format # ------ energy traj = result['trajectory'] e = traj.compute_energy() # eV/cell with open('log.tote', mode='w') as f: f.write(str(e)) # ------ struc opt_struc = result[\"final_structure\"] opt_struc.to(fmt='poscar', filename='CONTCAR') job_cryspy #!/bin/sh # ---------- ASE python3 chgnet_in.py # ---------- for error if [ ! -f \"log.tote\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "ase_chgnet_Sr4Co4O12",
    "uri": "/ja/cryspy_utility/examples/ase_chgnet_sr4co4o12/index.html"
  },
  {
    "content": "2023 July 10\nASEは様々なコードのインターフェースを提供しているPythonライブラリであり， Pure Python EMT calculatorというシンプルなEMTの計算も実行できる．CrySPYさえインストールしてあれば，精度はともかく簡単に計算できるので，CrySPYのテストにちょうど良い．\nこのチュートリアルでは，MacやLinuxなどのOSのローカルPCを用いてCu 8原子の構造探索を試す．\nAssumption ここでは次のような条件を想定している：\nCrySPY 1.2.0 or later in your local PC CrySPY job filename: job_cryspy ase input filename: ase_in.py Input files どこか適当なワーキングディレクトリに移動して，まずはexampleをコピーしてくる．下記のどちらからコピーしてきても良い．\nDownload from cryspy_utility/examples/ase_Cu8_RS Copy from CrySPY utility that you installed cd ase_Cu8_RS tree . ├── calc_in │ ├── ase_in.py_1 │ └── job_cryspy └── cryspy.in cryspy.in cryspy.inはCrySPYの入力ファイル．\n[basic] algo = RS calc_code = ASE tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Cu nat = 8 [ASE] ase_python = ase_in.py [option] [basic] セクションのjobcmd = zshは環境に合わせてjobcmd = shやjobcmd = bash等に変更する． CrySPYは内部でバックグラウンドジョブとしてzsh job_cryspyを実行する．\nASEを使う場合は，[ASE]セクションが必要． 下記の二つのファイル名は好きなように変えても良い．\njobfile: job_cryspy ase_python: ase_in.py 他の入力変数については後で説明を行う．\ncalc_in directory ASEのジョブファイルや入力ファイルはこのディレクトリに準備する．\nJob file ジョブファイルの名前はcryspy.inのjobfileに一致させる必要がある． ジョブファイルの例は下記の通り．\n#!/bin/sh # ---------- ASE python3 ase_in.py # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ase_in.pyというファイル名も自由に変えられるが， cryspy.inのase_pythonの値と一致させておく必要がある． CrySPYではジョブファイルの最後の行はsed -i -e '3 s/^.*$/done/' stat_jobとしておくルールになっている．\nメモ ジョブファイルの最後の行はsed -i -e '3 s/^.*$/done/' stat_jobと書いておく．\nヒント CrySPYのジョブファイルのCrySPY_IDという文字列は自動的に構造IDに置き換わるようになっている． PBSやSLURMといったジョブスケジューラーを使う場合，ジョブ名にCrySPY_IDと書いておくとどの構造のジョブなのかが分かり便利である． 例えば，PBSでは#PBS -N Si_CrySPY_IDのように書いておくと，ジョブをサブミットする際，#PBS -N Si_10のように置き換わる． 注意点として，ジョブ名を数字から始めるとエラーとなることが多いので，Si_のように何か文字列を頭につけておくこと．\nInput for ASE ステージ数(nstage in cryspy.in)に応じた数のインプットファイルが必要となる． インプットファイル名の語尾に_xをつけて準備する． ここでxはステージ数．\nASEのチュートリアルではnstage = 1を用いるので，ASEのインプットファイルはase_in.py_1の一つだけが必要． ase_in.py_1は例えば下記の通り（ASEの使い方の詳細は公式のドキュメントを見ること）．\nfrom ase.constraints import ExpCellFilter, StrainFilter from ase.calculators.emt import EMT from ase.calculators.lj import LennardJones from ase.optimize.sciopt import SciPyFminCG from ase.optimize import BFGS from ase.spacegroup.symmetrize import FixSymmetry import numpy as np from ase.io import read, write # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory atoms = read('POSCAR', format='vasp') # ---------- setting and run atoms.calc = EMT() atoms.set_constraint([FixSymmetry(atoms)]) atoms = ExpCellFilter(atoms, hydrostatic_strain=False) opt = BFGS(atoms) #opt=SciPyFminCG(atoms) opt.run() # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format e = atoms.atoms.get_total_energy() with open('log.tote', mode='w') as f: f.write(str(e)) write('CONTCAR', atoms.atoms, format='vasp') ASEはVASPやQEなどと違って，入力ファイル（python script）は自分で書くことになるので自由度がある． CrySPYでは2つのルールを設けている．\nエネルギーはeV/cellの単位でlog.toteというファイルに出力する．CrySPYはこのファイルの最後の行を読む． 最適化後の構造データはCONTCARというファイルにVASPフォーマットで出力する． Running CrySPY ここまで準備ができたらRunning CrySPYへ進む．\n",
    "description": "",
    "tags": null,
    "title": "ASE in your local PC",
    "uri": "/ja/tutorial/random/ase/index.html"
  },
  {
    "content": "Download ase_Cu8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = ASE tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Cu nat = 8 [ASE] ase_python = ase_in.py [option] calc_in/ ase_in.py_1 from ase.constraints import ExpCellFilter, StrainFilter from ase.calculators.emt import EMT from ase.calculators.lj import LennardJones from ase.optimize.sciopt import SciPyFminCG from ase.optimize import BFGS from ase.spacegroup.symmetrize import FixSymmetry import numpy as np from ase.io import read, write # ---------- input structure # CrySPY outputs 'POSCAR' as an input file in work/xxxxxx directory atoms = read('POSCAR', format='vasp') # ---------- setting and run atoms.calc = EMT() atoms.set_constraint([FixSymmetry(atoms)]) atoms = ExpCellFilter(atoms, hydrostatic_strain=False) opt = BFGS(atoms) #opt=SciPyFminCG(atoms) opt.run() # ---------- opt. structure and energy # [rule in ASE interface] # output file for energy: 'log.tote' in eV/cell # CrySPY reads the last line of 'log.tote' # output file for structure: 'CONTCAR' in vasp format e = atoms.atoms.get_total_energy() with open('log.tote', mode='w') as f: f.write(str(e)) write('CONTCAR', atoms.atoms, format='vasp') job_cryspy #!/bin/sh # ---------- ASE python3 ase_in.py # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "ase_Cu8_RS",
    "uri": "/ja/cryspy_utility/examples/ase_cu8_rs/index.html"
  },
  {
    "content": "2023 July 10\nCrySPY 1.2.0からPython標準ライブラリのloggingを採用． CrySPYのログは画面とファイル(log_cryspy and err_cryspy)の両方に出力される．\nlog –\u003e screen and log_cryspy error and warning –\u003e screen and err_cryspy ログの例:\n[2023-07-10 18:40:54,389][cryspy_init][INFO] Start CrySPY 1.2.0 [2023-07-10 18:40:54,389][cryspy_init][INFO] # ---------- Read input file, cryspy.in [2023-07-10 18:40:54,390][read_input][INFO] Save input data in cryspy.stat [2023-07-10 18:40:54,391][cryspy_init][INFO] # ---------- Initial structure generation [2023-07-10 18:40:54,391][cryspy_init][INFO] Number of MPI processes: 1 [2023-07-10 18:40:54,391][gen_init_struc][INFO] # ------ mindist [2023-07-10 18:40:54,395][struc_util][INFO] Cu - Cu: 1.32 [2023-07-10 18:40:54,395][gen_init_struc][INFO] # ------ generate structures [2023-07-10 18:40:54,481][gen_pyxtal][INFO] Structure ID 0 was generated. Space group: 1 --\u003e 1 P1 [2023-07-10 18:40:54,493][gen_pyxtal][INFO] Structure ID 1 was generated. Space group: 28 --\u003e 28 Pma2 [2023-07-10 18:40:54,498][gen_pyxtal][INFO] Structure ID 2 was generated. Space group: 29 --\u003e 29 Pca2_1 [2023-07-10 18:40:54,704][gen_pyxtal][INFO] Structure ID 3 was generated. Space group: 137 --\u003e 137 P4_2/nmc [2023-07-10 18:40:54,725][gen_pyxtal][INFO] Structure ID 4 was generated. Space group: 212 --\u003e 214 I4_132 [2023-07-10 18:40:54,800][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.408367 CrySPYをバックグラウンドジョブとして実行する場合や，自動スクリプトを使う場合などで，画面に出力させたくないときは下記のように-n オプションをつけて実行する．\ncryspy -n ",
    "description": "",
    "tags": null,
    "title": "Logging",
    "uri": "/ja/features/logging/index.html"
  },
  {
    "content": "Table of contents Initial and optimized structure data Result data ",
    "description": "",
    "tags": null,
    "title": "Common data",
    "uri": "/ja/data_format/common_data/index.html"
  },
  {
    "content": "Energy step data is saved in energy_step_data.pkl if you set energy_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\n警告 energy_step_flag = True is currently available only with VASP, QE, and soiap.\n情報 In soiap, energy_step_data is collected only if loopa == 1. This is because other data (struc, force, and stress) are output only when loopa == 1. See, https://github.com/nbsato/soiap/blob/master/doc/instructions.md\nData format type: dict key: structure ID value: list of energy step data in each stage string form {0: [array([-3.4439912 , -3.55040935, -3.66697038, ..]), array([-4.0613393 , -4.05445631, -4.06159641, …]), …],\n1: [array([-2.68209823, -2.69012487, -2.68364907, ..]), array([-2.79140967, -2.79183827, -2.79206508, …]), …],\n…} unit of energy eV/atom How to access import pickle with open('energy_step_data.pkl', 'rb') as f: energy_step_data = pickle.load(f) # energy_step_data[ID][stage][step] # energy_step_data[ID][0] \u003c-- stage 1 # energy_step_data[ID][1] \u003c-- stage 2 # # in LAQA # energy_step_data[ID][selection][step] # energy_step_data[ID][0] \u003c-- 1st selection # energy_step_data[ID][1] \u003c-- 2nd selection # ---------- energy step data of ID 3, stage 1 cid = 3 # ID stage = 1 # stage energy_step_data[cid][stage-1][:10] # show only 10 enegies in jupyter array([-3.4439912 , -3.55040935, -3.66697038, -3.77192063, -3.84320717, -3.80679245, -3.84633935, -3.87374706, -3.89123193, -3.90422926]) ",
    "description": "",
    "tags": null,
    "title": "Energy step data",
    "uri": "/ja/data_format/optional_data/energy_step/index.html"
  },
  {
    "content": "CrySPY uses the configparser module to read input file, cryspy.in . cryspy.in consists of sections, led by a [section] header and followed by name = value or name : value entries. Section names and values are case sensitive, but names are not. Lines beginning with # or ; are ignored and may be used to provide comments. Accepted bool values are 1, yes, true, and on, which cause this method to return True, and 0, no, false, and off, which cause it to return False. These string values for bool are checked in a case-insensitive manner. Some values are given in a space-separated manner.\n情報 See configparser in detail.\nメモ section name: case sensitive\nname: case insensitive\nvalue: case sensitive except for bool\n",
    "description": "",
    "tags": null,
    "title": "File format",
    "uri": "/ja/input/format/index.html"
  },
  {
    "content": "Initial and optimized structure data are saved in init_struc_data.pkl and opt_struc_data.pkl, respectively. pymatgen library is required to analyze these data files.\nData format type: dict key: structure ID value: structure data string form {0: Structure Summary …,\n1: Structure Summary …, …} structure data format pymatgen.core.structure.Structure How to access import pickle with open('init_struc_data.pkl', 'rb') as f: init_struc_data = pickle.load(f) with open('opt_struc_data.pkl', 'rb') as f: opt_struc_data = pickle.load(f) # struc_step_data[ID] # # # ---------- structure step data of ID 0 cid = 0 # ID init_struc_data[cid] # to show initial structure of ID 0 Structure Summary Lattice abc : 5.727301 5.727301 4.405757 angles : 90.0 90.0 90.0 volume : 144.5175386563631 A : 5.727301 0.0 0.0 B : 0.0 5.727301 0.0 C : 0.0 0.0 4.405757 PeriodicSite: Si (0.2506, 5.4767, 1.1014) [0.0438, 0.9562, 0.2500] PeriodicSite: Si (2.6130, 3.1143, 1.1014) [0.4562, 0.5438, 0.2500] PeriodicSite: Si (3.1143, 0.2506, 1.1014) [0.5438, 0.0438, 0.2500] PeriodicSite: Si (5.4767, 2.6130, 1.1014) [0.9562, 0.4562, 0.2500] PeriodicSite: Si (5.4767, 0.2506, 3.3043) [0.9562, 0.0438, 0.7500] PeriodicSite: Si (3.1143, 2.6130, 3.3043) [0.5438, 0.4562, 0.7500] PeriodicSite: Si (2.6130, 5.4767, 3.3043) [0.4562, 0.9562, 0.7500] PeriodicSite: Si (0.2506, 3.1143, 3.3043) [0.0438, 0.5438, 0.7500] ",
    "description": "",
    "tags": null,
    "title": "Initial and optimized structure data",
    "uri": "/ja/data_format/common_data/init_opt_struc_data/index.html"
  },
  {
    "content": "Python CrySPY 1.1.0 or later Python \u003e= 3.8 PyXtal (\u003e= 0.5.3) (optional) mpi4py (optional, required if algo is BO) COMBO If you install cryspy with pip, necessary libraries such as PyXtal will be installed automatically. Go to Installation \u003e CrySPY. Manual installation of COMBO is required when using Bayesian optimization.\nCrySPY 1.0.0 Python \u003e= 3.8 PyXtal (\u003e= 0.5.3) (optional, required if algo is BO) COMBO 情報 [2023 April 22] PyXtal (pyshtools)をarm64のMacOSにインストールする方法がわかった．Arm64 on MacOS (without Rosseta 2)を参照．\n[2023 March 15] MacOSのarm64環境でのpyxtalのインストールが難しいので，Rosetta 2を使用してx86_64環境での利用が推奨．\nCrySPY 0.10.0 – 0.10.3 Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.\nPython 3.x.x COMBO PyXtal (\u003e= 0.2.2) (PyXtal requires pymatgen) pymatgen (\u003e= 2022.x.x) CrySPY 0.9.2 Tested with Homebrew Python 3.8.x and 3.9.x on Mac and Python 3.8.x on Linux.\nPython 3.x.x COMBO pymatgen (\u003e= 2022.x.x) PyXtal (\u003e= 0.2.2) 情報 [2021 July 15] PyXtal 0.2.9以上を使う場合は，CrySPYを0.10.0以上にアップデートすること．\n情報 [2021 March 18] pymatgen 2022.x.x.でbreaking changeがあって，importの書き方等が変わった． CrySPY 0.9.2とPyXtal 0.2.2はpymatgen 2022をサポート．\n情報 [2021 Feb. 5] PyXtalを使うにはnumbaが必要だが，numbaは現在のところPython 3.9に対応していないのでしばらくはPython 3.9ではなくPython 3.8を利用する．\n[2021 March 18] numbaがPython 3.9.xをサポート．CrySPYもPython 3.9で動作可能\n情報 [2021 Feb. 7] PyXtalではSciPyが使われているが, 最新のSciPy(v1.6.0)ではdeepcopyを使うとバグが出る． SciPyはv1.5.4を利用する．\n[2021 March 18] 上記バグはSciPy 1.6.1で修正された．\nCrySPY 0.9.0 – 0.9.1 Python 3.8.x COMBO pymatgen (\u003c= 2021.x.x) PyXtal 0.1.6 - 0.2.1 CrySPY 0.8.0 or earlier CrySPY本体に同梱されている古いドキュメントを見ること．\n",
    "description": "",
    "tags": null,
    "title": "Python",
    "uri": "/ja/installation/requirements/python/index.html"
  },
  {
    "content": "Preparation of input files Follow any one of the examples and then go to “Running CrySPY” section.\nASE in your local PC soiap in your local PC VASP QE OpenMX LAMMPS External program Running CrySPY Check cryspy.in (version 0.10.3 or earlier) Script to run First run Submit job Check results Append structures Analysis and visualization Loading external data Only if calc_code == ext.\nLoad external data ",
    "description": "",
    "tags": null,
    "title": "Random Search (RS)",
    "uri": "/ja/tutorial/random/index.html"
  },
  {
    "content": "目次 extract_struc.py pos2pkl.py kpt_check.py repeat_cryspy ",
    "description": "",
    "tags": null,
    "title": "Scripts",
    "uri": "/ja/cryspy_utility/scripts/index.html"
  },
  {
    "content": "soiap is Structure Optimization with InterAtomic Potential. It is suitable for testing CrySPY because of its fast structure optimization. See instructions to install soiap.\nIn this tutorial, we try to use CrySPY in your local PC (Mac or Linux). The target system is Si 8 atoms.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py CrySPY job filename: job_cryspy soiap executable file: ~/local/soiap-0.3.0/src/soiap soiap input filename: soiap.in soiap output filename: soiap.out soiap input structure filename: initial.cif Input files Move to your working directory, and copy input example files by one of the following methods.\nDownload from cryspy_utility/examples/soiap_Si8_RS Copy from CrySPY utility that you installed (only version 0.10.3 or earlier) cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/soiap_RS_Si8 . cd soiap_RS_Si8 tree . ├── calc_in │ ├── job_cryspy │ └── soiap.in_1 └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] In [basic] section, jobcmd = zsh can be changed to jobcmd = sh or jobcmd = bash in accordance with your environment. CrySPY runs zsh job_cryspy as a background job internally.\n[soiap] section is required when you use soiap.\nYou can name the following files whatever you want:\njobfile soiap_infile soiap_outfile soiap_cif The other input variables are discussed later.\ncalc_in directory The job file and input files for soiap are prepared in this directory.\nJob file The name of the job file must match the value of jobfile in cryspy.in. The example of job file (here, job_cryspy) is shown below.\n#!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in 2\u003e\u00261 \u003e soiap.out # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job Change /path/to/soiap into right path suitable for your environment. You can specify the input (soiap.in) and output (soiap.out) file names, but they must match the values of soiap_infile and soiap_outfile in cryspy.in. The job file is written in the same way as the one you usually use except for the last line. You must add sed -i -e '3 s/^.*$/done/' stat_job at the end of the file in CrySPY.\nメモ sed -i -e '3 s/^.*$/done/' stat_job is required at the end of the job file.\nヒント In the job file of CrySPY, the string “CrySPY_ID” is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\nInput for soiap Input files based on the number of stages (nstage in cryspy.in) are required. Name the input file(s) with a suffix _x. Here x means the stage number.\nWe are using nstage = 1, so we need only soiap.in_1.\nsoiap.in_1 is listed below.\ncrystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 100 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones The input structure file is specified at the first line. Use the same name as the value of soiap_cif in cryspy.in.\nRunning CrySPY Go to Running CrySPY\n",
    "description": "",
    "tags": null,
    "title": "soiap in your local PC",
    "uri": "/ja/tutorial/random/soiap/index.html"
  },
  {
    "content": "Download soiap_Si8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] calc_in/ soiap.in_1 crystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 1000 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones job_cryspy #!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in \u003e soiap.out 2\u003e\u00261 # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "soiap_Si8_RS",
    "uri": "/ja/cryspy_utility/examples/soiap_si8_rs/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = crystal",
    "uri": "/ja/structure_generation/crystal/index.html"
  },
  {
    "content": "インストール メモ ワークステーションやスーパーコンピュータなどに (CrySPY + Python環境 + 構造最適化ソフト) が必要．\n目次 動作環境 Python 構造最適化ソフト find_wy (オプション) CrySPY CrySPY 1.0.0 or later CrySPY 0.10.3 or earlier CrySPYユーティリティ (オプション) ",
    "description": "",
    "tags": null,
    "title": "インストール",
    "uri": "/ja/installation/index.html"
  },
  {
    "content": "CrySPYはシンプルなバックアップ機能を備えている． バックアップの対象は以下のファイル：\ncryspy.in cryspy.stat log_cryspy err_cryspy calc_in/* data/* ext/* work/* は含まれいないので注意．\n(v1.1.0以降) 上記ファイルが日付と時間で名前づけられたディレクトリにコピーされる．以前のバックアップは自動的には削除されない． (v1.0.0) バックアップは1世代分のみであり，それより古いものは削除される． 自動バックアップ 自動的にバックアップされるタイミングは次の通り:\n次の選択に移るとき(BO, LAQA)か世代交代を行うとき (EA) 構造を追加するとき 手動バックアップ 手動でバックアップを行いたい場合は，-b または --backup オプションをつけて次のようにcryspyを実行する:\ncryspy -b このコマンドは通常の実行とは異なり，バックアップだけを行います．\n",
    "description": "",
    "tags": null,
    "title": "バックアップ",
    "uri": "/ja/features/backup/index.html"
  },
  {
    "content": " Input 元素 原子数 Output 最安定構造（グローバルミニマム） ",
    "description": "",
    "tags": null,
    "title": "結晶構造探索",
    "uri": "/ja/about/csp/index.html"
  },
  {
    "content": "動作環境 実際に構造最適化を行うワークステーションやスーパーコンピュータなどに下記環境をインストールする必要がある．\nCrySPY Python環境 構造最適化ソフト 目次 Python 構造最適化ソフト find_wy (オプション) ",
    "description": "",
    "tags": null,
    "title": "動作環境",
    "uri": "/ja/installation/requirements/index.html"
  },
  {
    "content": " 情報 For mindist, see also Features \u003e Restriction on interatomic distances.\nDownload soiap_Si8_RS_mindist.tar.gz cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.0 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] calc_in/ soiap.in_1 crystal initial.cif ! CIF file for the initial structure symmetry 1 ! 0: not symmetrize displacements of the atoms or 1: symmetrize md_mode_cell 3 ! cell-relaxation method ! 0: FIRE, 2: quenched MD, or 3: RFC5 number_max_relax_cell 1000 ! max. number of the cell relaxation number_max_relax 1 ! max. number of the atom relaxation max_displacement 0.1 ! max. displacement of atoms in Bohr external_stress_v 0.0 0.0 0.0 ! external pressure in GPa th_force 5d-5 ! convergence threshold for the force in Hartree a.u. th_stress 5d-7 ! convergence threshold for the stress in Hartree a.u. force_field 1 ! force field ! 1: Stillinger-Weber for Si, 2: Tsuneyuki potential for SiO2, ! 3: ZRL for Si-O-N-H, 4: ADP for Nd-Fe-B, 5: Jmatgen, or ! 6: Lennard-Jones job_cryspy #!/bin/sh # ---------- soiap EXEPATH=/path/to/soiap $EXEPATH/soiap soiap.in \u003e soiap.out 2\u003e\u00261 # ---------- CrySPY sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "soiap_Si8_RS_mindist",
    "uri": "/ja/cryspy_utility/examples/soiap_si8_rs_mindist/index.html"
  },
  {
    "content": " Name Value Default Description algo RS, EA, BO, LAQA Algorithm calc_code VASP, QE, OMX, soiap, LAMMPS Caluculation code for structure optimization tot_struc int The total number of structures nstage int The number of stages njob int The number of jobs running at the same time. jobcmd str Command to submit jobs such as qsub and sbatch. jobfile str File name of the job file. ",
    "description": "",
    "tags": null,
    "title": "[basic] section",
    "uri": "/ja/input/basic_sec/index.html"
  },
  {
    "content": "CrySPY pip CrySPY 1.0.0以降はpipを使ってインストール可能になった．\npip install csp-cryspy pipでインストールすると，実行スクリプトのcryspyが自動的にPATHが通ったところにインストールされる． 下記コマンドでチェックできる．\nwhich cryspy 編集可能モード CrySPYのソースコードを編集したい時は，pipの編集可能モード（-e オプション）を使うのが便利．\ngit clone https://github.com/Tomoki-YAMASHITA/CrySPY.git pip install -e ./CrySPY git cloneの代わりに，release pageから圧縮ファイルをダウンロードしてもよい．\ncal_fingerprint (optional) cal_fingerprintプログラムは構造記述子を計算するためのもので，アルゴリズにベイズ最適化を使う場合は必須． CrySPY 1.0.0からはcal_fingerprintプログラムはCrySPY utilityに含まれている． コンパイルについてはこちらを参照：Instllation/CrySPY_utility/Compile cal_fingerprint．\n実行ファイルcal_fingerprintをPATHが通ったところに置く，もしくは下記のようにcryspy.inで実行ファイルのpathを指定する．\n[BO] fppath = /xxx/xxx/xxx/cal_fingerprint Arm64 on MacOS (without Rosseta 2) miniforge3をインストール（homebrew pythonでpyshtoolsをインストールする方法が今のところ不明） condaでpymatgen (numpyもインストールされる), fftwをインストール conda install pymatgen conda install fftw pyshtoolsをソースからビルドする．pyshtoolsはPyXtalのインストールに必要． pip3 install pyshtools --no-binary pyshtools CrySPYをインストール pip3 install csp-cryspy ",
    "description": "",
    "tags": null,
    "title": "CrySPY 1.0.0 or later",
    "uri": "/ja/installation/cryspy/cryspy_1.0/index.html"
  },
  {
    "content": "EA\n",
    "description": "",
    "tags": null,
    "title": "Evolutionary Algorithm (EA)",
    "uri": "/ja/tutorial/ea/index.html"
  },
  {
    "content": "2023年7月23日更新\nあらかじめ用意した構造のテキストデータをinit_struc_data.pklに変換するスクリプト． 入力のデフォルトはinit_POSCARS形式．オプションでPOSCARやcifファイルなどのシングル構造データも変換可能． 出力はinit_struc_data.pkl． すでに存在するinit_struc_data.pklに構造データを追加することもできる． 構造IDは考慮されず，新しく割り振られる． 原子数が異なる場合はエラーが出る．\ninit_struc_data.pklはCrySPYでシミュレーション開始時にロードすることが可能．\n-fオプションで原子種の削除とソートが可能．このオプションを指定しないとpymatgenが勝手に電気陰性度の順番で並び替えるので注意！\n使い方 usage: pos2pkl.py [-h] [-s [SINGLE ...]] [-f [FILTER ...]] [-p] [infile ...] positional arguments: infile input file: init_POSCARS options: -h, --help show this help message and exit -s [SINGLE ...], --single [SINGLE ...] input file: single structure file (POSCAR, cif) -f [FILTER ...], --filter [FILTER ...] filter (sort): remove species and sort -p, --permit_diff_comp flag for permitting different composition 例 init_POSCARS –\u003e init_struc_data.pkl CrySPYで構造生成後に出力されるinit_POSCARSをスパコン等の別のマシンに移すような場合に使える．複数のファイルを変換可能．\npython3 pos2pkl.py init_POSCARS pos2pkl.pyをPATHが通ったところにおけば，python3は省略可能.\npos2pkl.py init_POSCARS Composition: Na8 Cl8 Converted. The number of structures: 4 Save init_struc_data.pkl 複数の入力ファイルの場合．\npython3 pos2pkl.py init_POSCARS init_POSCARS2 init_POSCARS3 Composition: Na8 Cl8 Converted. The number of structures: 12 Save init_struc_data.pkl カレントディレクトリにすでにinit_struc_data.pklが存在し，それに追加する場合．\npython3 pos2pkl.py init_POSCARS init_struc_data.pkl already exists. Append to init_struc_data.pkl? [y/n]: y Load init_struc_data Composition: Na8 Cl8 The number of structures: 12 Converted. The number of structures: 16 Save init_struc_data.pkl POSCAR or cif –\u003e init_struc_data.pkl POSCARファイルやcifファイル等の構造が一つだけのデータも変換可能．-s/--singleオプションが必要．\npython3 pos2pkl.py -s POSCAR test.cif Composition: Na8 Cl8 Converted. The number of structures: 2 Save init_struc_data.pkl init_POSCARS, POSCAR –\u003e init_struc_data.pkl python3 pos2pkl.py init_POSCARS -s POSCAR Composition: Na8 Cl8 Converted. The number of structures: 5 Save init_struc_data.pkl 警告 下記は間違い．init_POSCARSもシングル構造として取り扱われてしまう．\npython3 pos2pkl.py -s POSCAR init_POSCARS Filter (remove and sort) 次のような組成のcifファイルを考える：Sr8 Co8 O20 X4．これはダミー原子(X4)を4原子含んでいる． -f/--filterオプションは原子種を削除したり，ソートするのに使える． cryspy.inのatypeと同じように指定する．\npython3 pos2pkl.py -s Sr8Co8O20X4.cif -f Sr Co O Removed species: {'X0+'} Composition: Sr8 Co8 O20 Converted. The number of structures: 1 Save init_struc_data.pkl extract_struc.pyを使えば， init_struc_data.pklにどのように登録されたのか確認できる．\npython3 extract_struc.py init_struc_data.pkl -pa ID 0 Full Formula (Sr8 Co8 O20) Reduced Formula: Sr2Co2O5 ... -fオプションでソートもできる．\npython3 pos2pkl.py -s Sr8Co8O20X4.cif -f O Co Removed species: {'Sr', 'X0+'} Composition: O20 Co8 Converted. The number of structures: 1 Save init_struc_data.pkl ",
    "description": "",
    "tags": null,
    "title": "pos2pkl.py",
    "uri": "/ja/cryspy_utility/scripts/pos2pkl/index.html"
  },
  {
    "content": "Download qe_Si8_RS.tar.gz cryspy.in [basic] algo = RS calc_code = QE tot_struc = 5 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 80 [option] calc_in/ pwscf.in_1 \u0026control title = 'Si8' calculation = 'relax' nstep = 100 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF pwscf.in_2 \u0026control title = 'Si8' calculation = 'vc-relax' nstep = 200 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_Si8_RS",
    "uri": "/ja/cryspy_utility/examples/qe_si8_rs/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Random Search (RS)",
    "uri": "/ja/data_format/rs_data/index.html"
  },
  {
    "content": "Common result data such as space group, energies, etc. are saved in rslt_data.pkl. pandas library is required to analyze this data file.\nData format type: pandas.core.frame.DataFrame row lable: structure ID string form see blow How to access import pickle with open('rslt_data.pkl', 'rb') as f: rslt_data = pickle.load(f) # ---------- sort by Energy # top 5 rslt_data.sort_values(by=['E_eV_atom']).head(5) Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done ",
    "description": "",
    "tags": null,
    "title": "Result data",
    "uri": "/ja/data_format/common_data/rslt_data/index.html"
  },
  {
    "content": "under construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = mol",
    "uri": "/ja/structure_generation/mol/index.html"
  },
  {
    "content": "Structure step data is saved in struc_step_data.pkl if you set struc_step_flag = True in [option] section of cryspy.in. pymatgen library is required to analyze this data file.\n警告 struc_step_flag = True is currently available only with VASP, QE, and soiap.\n情報 struc_step_data includes initial structures. For example, struc_step_data[cid][0][0] is the initial structure of ID = cid.\nData format type: dict key: structure ID value: list of structure step data in each stage string form {0: [[Structure Summary …, Structure Summary, …], […], …],\n1: [[Structure Summary …, Structure Summary, …], […], …], …} structure data format pymatgen.core.structure.Structure How to access import pickle with open('struc_step_data.pkl', 'rb') as f: struc_step_data = pickle.load(f) # struc_step_data[ID][stage][step] # struc_step_data[ID][0] \u003c-- stage 1 # struc_step_data[ID][1] \u003c-- stage 2 # # # in LAQA # struc_step_data[ID][selection][step] # struc_step_data[ID][0] \u003c-- 1st selection # struc_step_data[ID][1] \u003c-- 2nd selection # ---------- structure step data of ID 3, stage 1, step 4 cid = 0 # ID stage = 1 # stage step = 0 # step index (start from 0) struc_step_data[cid][stage-1][step] # to show initial structure of ID 0 at stage 1 in jupyter Structure Summary Lattice abc : 5.727301 5.727301 4.405757 angles : 90.0 90.0 90.0 volume : 144.5175386563631 A : 5.727301 0.0 0.0 B : 0.0 5.727301 0.0 C : 0.0 0.0 4.405757 PeriodicSite: Si (0.2506, 5.4767, 1.1014) [0.0438, 0.9562, 0.2500] PeriodicSite: Si (2.6130, 3.1143, 1.1014) [0.4562, 0.5438, 0.2500] PeriodicSite: Si (3.1143, 0.2506, 1.1014) [0.5438, 0.0438, 0.2500] PeriodicSite: Si (5.4767, 2.6130, 1.1014) [0.9562, 0.4562, 0.2500] PeriodicSite: Si (5.4767, 0.2506, 3.3043) [0.9562, 0.0438, 0.7500] PeriodicSite: Si (3.1143, 2.6130, 3.3043) [0.5438, 0.4562, 0.7500] PeriodicSite: Si (2.6130, 5.4767, 3.3043) [0.4562, 0.9562, 0.7500] PeriodicSite: Si (0.2506, 3.1143, 3.3043) [0.0438, 0.5438, 0.7500] ",
    "description": "",
    "tags": null,
    "title": "Structure step data",
    "uri": "/ja/data_format/optional_data/struc_step/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "VASP",
    "uri": "/ja/tutorial/random/vasp/index.html"
  },
  {
    "content": "CrySPYはシンプルなクリーン機能を備えている． 初めからやり直したい時に便利となる． 以下のファイルがクリーン（実際はファイルを移動するだけ）される．\ncryspy.stat log_cryspy err_cryspy lock_cryspy data/* work/* ext/* tmp_calc_FP/* tmp_gen_struc/* クリーンする場合は-c または --clean オプションをつけてcryspyを実行する:\n$ ls calc_in cryspy.in cryspy.stat data err_cryspy log_cryspy $ cryspy -c Are you sure you want to clean the data? 'yes' or 'no' [y/n]: y $ ls calc_in cryspy.in trash $ ls trash 20230318_100728 calc_in/* と cryspy.in 以外のファイルがtrashの中の日付と時間で名前づけられたディレクトリに移動します． 必要なければ手動で削除してください．\n",
    "description": "",
    "tags": null,
    "title": "クリーン",
    "uri": "/ja/features/clean/index.html"
  },
  {
    "content": "構造最適化ソフト 少なくとも１つは必要．\n第一原理計算 VASP QUANTUM ESPRESSO OpenMX (CrySPY 0.9.0 以上) 原子間ポテンシャル soiap LAMMPS その他 ASE (CrySPY 1.2.0 or later) ",
    "description": "",
    "tags": null,
    "title": "構造最適化ソフト",
    "uri": "/ja/installation/requirements/struc_opt/index.html"
  },
  {
    "content": "CrySPYでは以下の探索アルゴリズムが使用可能．\nランダムサーチ (RS) 進化的アルゴリズム (EA) ベイズ最適化 (BO) LAQA 概略 ランダムサーチ (RS) ランダム．\n進化的アルゴリズム (EA) 進化的アルゴリズムを用いた結晶構造探索手法はOganovグループによって開発された．\nCrySPYでも効率的な探索が可能な進化的アルゴリズムを採用した．以下のようなことができる．\n親の選択方法 トーナメント選択 ルーレット選択 エリート選択 進化的操作 交叉 置換 ひずみ etc. 適者生存 適者生存の中で重複した構造の排除 ベイズ最適化 (BO) 選択型アルゴリズムの一種．\nLAQA 選択型アルゴリズムの一種．\n",
    "description": "",
    "tags": null,
    "title": "探索アルゴリズム",
    "uri": "/ja/about/algorithms/index.html"
  },
  {
    "content": " Name Value Default Description struc_mode crystal, mol, mol_bs crystal Structure generation mode natot int The total number of atoms. atype atomic symbol [atomic symbol …] Atom type. e.g. atype = Na Cl. nat int [int …] The number of atoms in each atom type. e.g. nat = 8 8. mol_file str [str …], None None Path of molecule files or molecule names. nmol int [int …], None None The number of molecules. timeout_mol float 120.0 Time out for molecular structure generation. rot_mol random, random_mol, random_wyckoff random_wyckoff Mode for rotation of molecules. nrot int 20 Maximum number of trials to rotate molecules in mol_bs vol_factor float float 1.0 1.0 Minimum and maximum values of volume factor. vol_mu float, None None Mean of volume if you want specify the volume of cells. vol_sigma float, None None Standard deviation of volume if you want specify the volume of cells. mindist (mindist_?) float [float …], None None Constraint on minimum interatomic distance [Å]. mindist_factor float 1.0 Scaling factor for mindist. mindist_mol_bs (mindist_mol_bs_?) float [float …], None None Constraint on minimum intermolecular distance [Å]. mindist_mol_bs_factor float 1.0 Scaling factor for mindist_mol_bs. symprec float, 0.01 Precision for symmetry finding. spgnum all, space group number, 0 all Constraint on space group. If all, 1–230. If 0, random structure without space group information (no symmetry). use_find_wy bool False Structure generation with find_wy. fwpath str, None None Path of find_wy minlen float, None None Only used with find_wy or spgnum = 0. Minimum length of lattice vector [Å]. maxlen float, None None Only used with find_wy or spgnum = 0. Maximum length of lattice vector [Å]. dangle float, None None Only used with find_wy or spgnum = 0. Delta angle for alpha, beta, and gamma in degree unit. maxcnt int 50 Only used with find_wy or spgnum = 0. Maximum number of trials to determine atom positions. ",
    "description": "",
    "tags": null,
    "title": "[structure] section",
    "uri": "/ja/input/structure_sec/index.html"
  },
  {
    "content": "BO\n",
    "description": "",
    "tags": null,
    "title": "Bayesian Optimization (BO)",
    "uri": "/ja/tutorial/bo/index.html"
  },
  {
    "content": "CrySPY CrySPY (\u003e= 1.0.0) is available in PyPI. You can install by pip.\nTable of contents CrySPY 1.0.0 or later CrySPY 0.10.3 or earlier ",
    "description": "",
    "tags": null,
    "title": "CrySPY",
    "uri": "/ja/installation/cryspy/index.html"
  },
  {
    "content": "CrySPYのインストールはシンプルで，ダウンロードするだけで良い．\nダウンロード CrySPYは任意の場所に置いて良い．ここでは例として~/CrySPY_root/CrySPY-x.x.x (x.x.x はバージョン番号)にダウンロードすることにする． gitコマンドを使うか，リリースページから圧縮ファイルをダウンロードする．\nGit mkdir ~/CrySPY_root cd ~/CrySPY_root git clone https://github.com/Tomoki-YAMASHITA/CrySPY.git CrySPY-x.x.x zip or tar.gz file zip または tar.gz ファイルをここからダウンロードする． GitHub release .\nダウンロードして展開したソースを~/CrySPY_root/CrySPY-x.x.xに置く．\nディレクトリ構成 ~/CrySPY_root/CrySPY-x.x.x/のディレクトリ構成:\nCrySPY-x.x.x ├── CHANGELOG.md ├── CrySPY/ │ ├── BO/ │ ├── EA/ │ ├── IO/ │ ├── LAQA/ │ ├── RS/ │ ├── __init__.py │ ├── calc_dscrpt/ │ ├── f-fingerprint/ │ ├── find_wy/ │ ├── gen_struc/ │ ├── interface/ │ ├── job/ │ └── start/ │ └── utility.py ├── LICENSE ├── README.md ├── cryspy.py ├── docs/ ├── example/ └── utility/ 情報 cryspy.pyがメインスクリプト．\nセットアップ (オプション) find_wy (オプション) find_wyを使う時は，find_wyの実行ファイルを（例えば）~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/以下に置く必要がある． つまり~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy.\ncd ~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy cp ~/local/find_wy/find_wy . cal_fingerprintのコンパイル (オプション) ベイズ最適化を使う場合は，構造の記述子を計算するためのプログラムであるcal_fingerpirntをコンパイルする必要がある．\ncd ~/CrySPY_root/x.x.x/CrySPY/f-fingerprint emacs Makefile make cal_fingerprintの実行ファイルが例えば~/CrySPY_root/x.x.x/CrySPY/f-fingerprint/以下にあるようにする． コンパイルすれば自動的にそうなるはず．\n",
    "description": "",
    "tags": null,
    "title": "CrySPY 0.10.3 or earlier",
    "uri": "/ja/installation/cryspy/cryspy_0.10/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Evolutionary algorithm (EA)",
    "uri": "/ja/data_format/ea_data/index.html"
  },
  {
    "content": "CrySPYではこれまで，任意の空間群（対称性）持つ構造を生成するためにfind_wyを利用してきた．しかし，CrySPY 0.9.0からはデフォルトではPyXtalライブラリを採用している． CrySPY 0.9.0 以上で構造生成にPyXtalを使う場合は，find_wyのインストールはスキップできる． 従来通りfind_wyを利用することももちろん可能である． CrySPY 0.8.0 以前のものでは，空間群を考慮した構造生成にはfind_wyのインストールが必要となる．\n情報 CrySPY 0.9.0 以上ではfind_wyのインストールはスキップできる．\nfind_wyのインストール m_tspace find_wyをコンパイルするためには，まずはm_tspaceをコンパイルして，ライブラリを生成する必要がある．詳細は以下のm_tspaceのサイトを参照すること．\nm_tspace Wiki of m_tspace m_tspace のソースをgitでダウンロードしてくる．ダウンロード先は例えば\n$ mkdir -p ~/local $ cd ~/local $ git clone https://github.com/nim-hrkn/m_tspace.git m_tspace のコンパイルにはさらに二つのファイルが必要となる．\nTSPASE から下記ファイルを~/local/m_tspaceにダウンロードする:\ntsp98.f prmtsp.f $ cd m_tspace $ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/tsp98.f $ wget http://phoenix.mp.es.osaka-u.ac.jp/~tspace/tspace_main/tsp07/prmtsp.f makefileをコンパイラに合わせて編集して，makeする． コンパイラにifortを使う場合は，-check allオプションを消さないとうまく動かない．また-O2オプションを設定する．\n$ emacs makefile $ head -n 4 makefile #FC=gfortran #FFLAGS=-g -cpp -DUSE_GEN -ffixed-line-length-255 FC=ifort FFLAGS=-O2 -g -traceback -cpp -DUSE_GEN -132 $ make gfortranを使う場合は，以下のようなエラーに遭遇するかもしれない．\ntsp98.f:9839:32: CALL SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 1 Error: Actual argument contains too few elements for dummy argument 'ntab' (12/48) at (1) make: *** [tsp98.o] Error 1 その時はtsp98.fを以下のように書き換える(9925行目):\nBefore:\n9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7 9914: C 9915: C IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN 9916: C TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0 9917: C ELSE 9918: C IND=-1 9919: C 9920: C 1993/12/25 9921: C BY S.TANAKA AND A. YANASE 9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7 9923: C 9924: SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 9925: DIMENSION NTAB(48),JG(48),JGT(48) After:\n9913: C SUBROUTINE SUBGRP ====*====3====*====4====*====5====*====6====*====7 9914: C 9915: C IF (JG(I),I=1,MG) IS A SUBGROUP OF (JGT(J),J=1,MGT) THEN 9916: C TABLE (NTAB(I),I=1,MG) IS MADE HERE AND IND=0 9917: C ELSE 9918: C IND=-1 9919: C 9920: C 1993/12/25 9921: C BY S.TANAKA AND A. YANASE 9922: C---*----1----*----2----*----3----*----4----*----5----*----6----*----7 9923: C 9924: SUBROUTINE SUBGRP(MG,JG,MGT,JGT,NTAB,IND) 9925: DIMENSION NTAB(12),JG(48),JGT(48) コンパイルに成功すればm_tsp.aというライブラリができる．\nfind_wy 詳細はfind_wyのサイトをチェックすること:\nfind_wy Wiki of find_wy find_wyのソースをgitでクローンしてくる．例えば:\n$ mkdir -p ~/local $ cd ~/local $ git clone https://github.com/nim-hrkn/find_wy.git make.incを編集して，先ほど用意したm_tsp.aのパスを設定する．\n$ cd find_wy $ emacs make.inc $ head -n 4 make.inc TSPPATH=~/local/m_tspace #INCPATH = -I $(TSPPATH) TSP=$(TSPPATH)/m_tsp.a ここでも-check allを削除して-O2オプションを付けた方が良い． 準備できたらmakeする．\n$ make コンパイルできてfind_wyの実行ファイルが得られたら，実行してテストする．\n$ ./find_wy input_sample/input_si4o8.txt 問題なければPOS_WY_SKEL_ALL.jsonなどのファイルが生成される．\nfind_wyの実行ファイル CrySPY 1.0.0 or later PATHが通ったところにfind_wyの実行ファイルを置く．もしくは下記のようにcryspy.inで実行ファイルのpathを指定する.\n[structure] use_find_wy = True fwpath = /xxx/xxx/xxx/find_wy CrySPY 0.10.3 or earlier CrySPYでfind_wyを構造生成に用いる場合は所定の位置にfind_wyの実行ファイルを置いておく必要がるので，CrySPY本体をダウンロード後にfind_wyの実行ファイルをコピーしておく．CrySPYは任意のディレクトリに設置できるので，例えば~/CrySPY_root/CrySPY-x.x.x/CrySPY/find_wy/find_wy．\n",
    "description": "",
    "tags": null,
    "title": "find_wy (オプション)",
    "uri": "/ja/installation/requirements/find_wy/index.html"
  },
  {
    "content": "Force step data is saved in force_step_data.pkl if you set force_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\n警告 force_step_flag = True is currently available only with VASP, QE, and soiap.\nData format type: dict key: structure ID value: list of force step data in each stage string form {0: [array([[ 0.26314927, -0.26314927, -0. ], […], …[…]]), array([[…], …, […]]), …], 1: [array([[ 0. , 0. , 0. ], […], …[…]]), array([[…], …, […]]), …],\n…} unit of force eV/Å How to access import pickle with open('force_step_data.pkl', 'rb') as f: force_step_data = pickle.load(f) # force_step_data[ID][stage][step][atom] # force_step_data[ID][0] \u003c-- stage 1 # force_step_data[ID][1] \u003c-- stage 2 # # in LAQA # force_step_data[ID][selection][step][atom] # force_step_data[ID][0] \u003c-- 1st selection # force_step_data[ID][1] \u003c-- 2nd selection # ---------- force step data of ID 3, stage 1 cid = 0 # ID stage = 1 # stage force_step_data[cid][stage-1][:3] # to show only 3 steps in jupyter [array([[ 0.26314927, -0.26314927, -0. ], [-0.26314927, 0.26314927, -0. ], [ 0.26314927, 0.26314927, 0. ], [-0.26314927, -0.26314927, -0. ], [-0.26314927, 0.26314927, -0. ], [ 0.26314927, -0.26314927, 0. ], [-0.26314927, -0.26314927, -0. ], [ 0.26314927, 0.26314927, 0. ]]), array([[-0.12103692, 0.12103692, 0. ], [ 0.12103692, -0.12103692, -0. ], [-0.12103692, -0.12103692, -0. ], [ 0.12103692, 0.12103692, 0. ], [ 0.12103692, -0.12103692, -0. ], [-0.12103692, 0.12103692, 0. ], [ 0.12103692, 0.12103692, 0. ], [-0.12103692, -0.12103692, -0. ]]), array([[-0.29801618, 0.29801618, 0. ], [ 0.29801618, -0.29801618, -0. ], [-0.29801618, -0.29801618, -0. ], [ 0.29801618, 0.29801618, 0. ], [ 0.29801618, -0.29801618, -0. ], [-0.29801618, 0.29801618, 0. ], [ 0.29801618, 0.29801618, 0. ], [-0.29801618, -0.29801618, -0. ]])] step = 0 # step index (start from 0) atom = 2 # atom index (start from 0) force_step_data[cid][stage-1][step][atom] array([0.26314927, 0.26314927, 0. ]) ",
    "description": "",
    "tags": null,
    "title": "Force step data",
    "uri": "/ja/data_format/optional_data/force_step/index.html"
  },
  {
    "content": "In this tutorial, we try to use CrySPY in a machine with a job scheduler system such as PBS. Here we employ QUANTUM ESPRESSO. (QE). The target system is Si 8 atoms.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py CrySPY job command: qsub CrySPY job filename: job_cryspy QE executable file: /usr/local/qe-6.5/bin/pw.x QE input filename: pwscf.in QE output filename: pwscf.out Input files Move to your working directory, and copy input example files by one of the following methods.\nversion 1.0.0 or later Copy from CrySPY utility version 0.10.3 or earlier cp -r ~/CrySPY_root/CrySPY-0.9.0/example/v0.9.0/QE_Si8_RS . cd QE_RS_Si8 tree . ├── calc_in │ ├── job_cryspy │ ├── pwscf.in_1 │ └── pwscf.in_2 └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = QE tot_struc = 5 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 80 [option] In [basic] section, jobcmd = qsub can be changed in accordance with your environment. CrySPY runs qsub job_cryspy as a background job internally in this setting.\nWe adopt a stage-based system for structure optimization calculations. Here, we use nstage = 2. For example, users can configure the following settings. In the first stage, only the ionic positions are relaxed, fixing the cell shape, with low k-point grid density. Next, the ionic positions and cell shape are fully relaxed with high accuracy in the second stage.\n[QE] section is required when you use QE. You have to specify k-point grid density (Å^-3) for each stage in kppvol.\nYou can name the following files whatever you want:\njobfile qe_infile qe_outfile The other input variables are discussed later.\ncalc_in directory The job file and input files for QE are prepared in this directory.\nJob file The name of the job file must match the value of jobfile in cryspy.in. The example of job file (here, job_cryspy) is shown below.\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/done/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job Change pw.x to appropriate path suitable for your environment. You can specify the input (pwscf.in) and output (pwscf.out) file names, but they must match the values of qe_infile and qe_outfile in cryspy.in.\nThe job file is written in the same way as the one you usually use except for the last line. You must add sed -i -e '3 s/^.*$/done/' stat_job at the end of the file in CrySPY.\nメモ sed -i -e '3 s/^.*$/done/' stat_job is required at the end of the job file.\nヒント In the job file of CrySPY, the string “CrySPY_ID” is automatically replaced with the structure ID. When you use a job scheduler such as PBS and SLURM, it is useful to set the structure ID to the job name. For example, in the PBS system, #PBS -N Si_CrySPY_ID in ID 10 is replaced with #PBS -N Si_10. Note that starting with a number will result in an error. You should add a prefix like Si_.\nInput for QE Input files based on the number of stages (nstage in cryspy.in) are required. Name the input file(s) with a suffix _x. Here x means the stage number.\nWe are using nstage = 2, so we need pwscf.in_1 and pwscf.in_2. For example, users can configure the following settings. In the first stage, only the ionic positions are relaxed, fixing the cell shape. Next, the ionic positions and cell shape are fully relaxed in the second stage.\npwscf.in_1 is listed below.\n\u0026control title = 'Si8' calculation = 'relax' nstep = 100 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./out.d/' / \u0026system ibrav = 0 nat = 8 ntyp = 1 ecutwfc = 44.0 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si 28.086 Si.pbe-n-kjpaw_psl.1.0.0.UPF Change pseudo_dir to your suitable directory. Inputs for structure data and k-point such as ATOMIC_POSITIONS and K_POINTS are automatically appended by CrySPY with pymatgen. Users do not have to prepare them in pwscf.in_x.\nRunning CrySPY Go to Running CrySPY\n",
    "description": "",
    "tags": null,
    "title": "QE",
    "uri": "/ja/tutorial/random/qe/index.html"
  },
  {
    "content": "CrySPY uses pyxtal in normal molecular crystal structure generation mode (struc_mode = mol). The molecules are arranged to fit a point group at a selected Wykoff position in the space group to keep the symmetry. (Sometimes it takes a long time to generate.)\nIn mol_bs mode (bs means break symmetry), dummy atoms are placed in Wykoff positions as in ordinary crystals, and then the dummy atoms are replaced by molecules without considering symmetry and rotated randomly. The structure generation is relatively fast.\nunder construction\n",
    "description": "",
    "tags": null,
    "title": "struc_mode = mol_bs",
    "uri": "/ja/structure_generation/mol_bs/index.html"
  },
  {
    "content": "CrySPYはエネルギー計算や構造最適化に外部のソフトウェアを利用する． 以下のソフトウェアを利用可能．\n第一原理計算 VASP Quantum Espresso OpenMX （CrySPY 0.9.0 以上） 原子間ポテンシャル soiap LAMMPS その他 ASE (CrySPY 1.2.0 or later) 少なくともどれか一つは必要．\n",
    "description": "",
    "tags": null,
    "title": "インターフェース",
    "uri": "/ja/about/interface/index.html"
  },
  {
    "content": "チュートリアル 情報 初心者の方はランダムサーチから始めると良い．Exampleファイルはこちら –\u003e cryspy_utility.\n目次 Random Search (RS) Evolutionary Algorithm (EA) Bayesian Optimization (BO) LAQA Molecular crystal structure prediction Random structure generation with MPI ",
    "description": "",
    "tags": null,
    "title": "チュートリアル",
    "uri": "/ja/tutorial/index.html"
  },
  {
    "content": "探索アルゴリズム 目次 LAQA ",
    "description": "",
    "tags": null,
    "title": "探索アルゴリズム",
    "uri": "/ja/searching_algo/index.html"
  },
  {
    "content": "構造生成 CrySPY currently has three random structure generation modes: crystal (default), mol, and mol_bs. PyXtal (or find_wy) is used for the structure generation.\n目次 struc_mode = crystal struc_mode = mol struc_mode = mol_bs ",
    "description": "",
    "tags": null,
    "title": "構造生成",
    "uri": "/ja/structure_generation/index.html"
  },
  {
    "content": "機能 目次 Logging バックアップ クリーン Restriction on interatomic distances ジョブファイルのCrySPY_ID MPI並列化を用いた構造生成 ",
    "description": "",
    "tags": null,
    "title": "機能",
    "uri": "/ja/features/index.html"
  },
  {
    "content": "[VASP] section is required only if you use VASP (calc_code = VASP)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage force_gamma bool False If true, force gamma-centered mesh. ",
    "description": "",
    "tags": null,
    "title": "[VASP] section",
    "uri": "/ja/input/vasp_sec/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "Bayesian Optimization (BO)",
    "uri": "/ja/data_format/bo_data/index.html"
  },
  {
    "content": "ローカルPCにPython環境を構築しておくと，計算結果の解析および可視化を行うのに便利である． jupyter notebookやPythonスクリプトなどのユーティリティツールが利用できる． 入力ファイルのexamplesもCrySPYユーティリティに含まれている．\n情報 See also cryspy_utility\nユーティリティツールを使うには以下のライブラリ等が必要になる．\njupyter NumPy pandas matplotlib pymatgen ユーティリティツールのダウンロード Git $ git clone https://github.com/Tomoki-YAMASHITA/CrySPY_utility.git zip CrySPY utilityへ飛んで，緑のCodeと書かれたボタンをクリック，Download ZIPを選んでダウンロード.\nCompile cal_fingerprint ベイズ最適化を使うときは構造記述子を計算するためのcal_fingerpirntプログラムをコンパイルする． Fortranコンパイラが必要になる． ワークステーションやスパコンなどのCrySPYを用いる環境にインストールする．\ncd CrySPY_utility/f-fingerprint emacs Makefile make 実行ファイルの扱いに関してはInstallation/CrySPYも参照.\n",
    "description": "",
    "tags": null,
    "title": "CrySPYユーティリティ (オプション)",
    "uri": "/ja/installation/utility/index.html"
  },
  {
    "content": "May 15th, 2023\n情報 CrySPYの基本的な使い方に関してははじめにTutorial \u003e Random Search (RS)を見ること．\nここではCrySPY 1.1.0以上を想定している．\nここで利用しているファイルはCrySPY Utility \u003e Examples \u003e qe_Si16_LAQAからダウンロードできる． このチュートリアルでは，50個だけ初期構造を生成しているが，本来LAQAでは，もっと多くの構造を生成しておいてそこから良い候補を選択することでシミュレーションを進める．\nInput cryspy.in cryspy.inの例．\n[basic] algo = LAQA calc_code = QE tot_struc = 50 nstage = 1 njob = 10 jobcmd = qsub jobfile = job_cryspy [structure] natot = 16 atype = Si nat = 16 mindist_1 = 1.5 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 80 [LAQA] nselect_laqa = 4 [option] LAQAではnstageは1にする必要がある． [LAQA]セクションのnselect_laqaだけ新しく設定する必要がある． nselect_laqaは一回の選択で選ばれる候補の数． 下記のようにwfやwsを指定すれば，LAQAのスコアにおける重みも変えられる． 省略した場合，デフォルトでは0.1と10.0がそれぞれ使われる． スコアの詳細についてはSearching algorithms \u003e LAQAを見ること．\n[LAQA] nselect_laqa = 4 wf = 0.1 ws = 10.0 calc_in/pwscf.in_1 \u0026control calculation = 'vc-relax' pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/' outdir='./outdir/' nstep = 10 / \u0026system ibrav = 0 nat = 16 ntyp = 1 ecutwfc = 40 ecutrho = 200 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si -1.0 si_pbe_v1.uspp.F.UPF nstepで1回の選択で何ステップ構造最適化を進めるかをコントロールする．(VASPではNSW) calc_in/job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si_CrySPY_ID #$ -pe smp 20 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ジョブスクリプトはいつも使っているものと同じ Run ヒント 自動化スクリプトも用意してある．このページの最下部参照．\ncryspyと打って1回目の実行．\ncryspy \u0026 この入力ファイルではまず50構造生成されるのでlog_cryspyを見て確認する．\n2023/05/13 13:02:07 CrySPY 1.1.0 Start cryspy.py Number of MPI processes: 1 Read input file, cryspy.in Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.5 Structure ID 0 was generated. Space group: 165 --\u003e 165 P-3c1 Structure ID 1 was generated. Space group: 66 --\u003e 66 Cccm Structure ID 2 was generated. Space group: 146 --\u003e 146 R3 Structure ID 3 was generated. Space group: 82 --\u003e 82 I-4 Structure ID 4 was generated. Space group: 162 --\u003e 162 P-31m ... ... ... Structure ID 47 was generated. Space group: 90 --\u003e 90 P42_12 Structure ID 48 was generated. Space group: 214 --\u003e 214 I4_132 Structure ID 49 was generated. Space group: 23 --\u003e 23 I222 Elapsed time for structure generation: 0:00:10.929030 # ---------- Initialize LAQA # ---------- Selection 0 selected_id: 50 IDs LAQAでは，はじめに全ての初期構造の最適化ジョブを実行する． 完全に最適化を終わらせるわけではなく，ここではnstep = 10にしているので，10ステップだけ実行される． cryspyコマンドを繰り返して，初期構造全てについて10ステップの最適化を完了させる． 必要であれば，njobの値を上げておけば一度に多くのジョブがサブミットされる．\n初めの最適化が全て終わると， log_cryspyの最後にLAQA is readyと表示される．\n2023/05/13 13:23:31 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status ID 41: Stage 1 Done! LAQA is ready この状態でcryspy を実行すると，最初の選択が始まる．\n2023/05/13 13:23:33 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status Backup data # ---------- Selection 1 selected_id: 37 8 10 48 nselect_laqaで設定された構造の数だけ選択される． cryspyをもう一度実行するとそれらのジョブ（次の10ステップ）がサブミットされる．\ncryspy \u0026 2023/05/13 13:23:36 CrySPY 1.1.0 Restart cryspy.py Number of MPI processes: 1 # ---------- job status ID 37: submit job, Stage 1 ID 8: submit job, Stage 1 ID 10: submit job, Stage 1 ID 48: submit job, Stage 1 あとはこれを何度も繰り返し行うことでスコアに応じて選択された構造の最適化が10ステップずつ進行する． ある程度の構造の最適化が完全に完了するまで進めて，止めたいタイミングでストップする．\nStatus シミュレーションの途中でスコアの確認がしたければ次のファイルを見ると良い：\n./data/LAQA_status 他にもLAQAに関数ファイルがいくつか出力される：\n./data_LAQA_bias ./data_LAQA_energy ./data_LAQA_score ./data_LAQA_selected_id ./data_LAQA_step Analysis and visualization ここではCrySPYのデータをローカルPCで解析する． スパコンやワークステーションで計算を行ったら，ローカルPCにデータをダウンロードしておく． 今後必要なければ，ファイルサイズが大きいworkとbackupディレクトリは削除しておいて良い． pklデータはgzipしておくとファイルサイズを減らすことができる．\njupyter notebook ダウンロードした結果のdata/ディレクトリに移動して，cryspy_analyzer_LAQA.ipynbをCrySPY utilityからコピーする．\nこのjupyter notebookを順番に実行していけば下記のようなグラフとgif画像が作成できる． この例では，アニメーションのために全ての構造の最適化を完全に完了させた． （全て最適化を完了させるとランダムサーチと計算量が変わらないのでLAQAの優位性はない）\nこのグラフはエネルギーを最適化ステップの関数として示している． 赤い線は最終的にエネルギーが低かった3つの構造を表しており，中でも一番安定だった構造はダイアモンド構造に到達している． 安定になる構造はかなり早い段階で選択されて構造最適化が完了していることがわかる．\n情報 algo = LAQAでは[option]セクションの下記の二つは自動的にTrueになる．\nforce_step_flag = True stress_step_flag = True 原子に働く力とストレスのデータは1ステップごとに収集される． エネルギーと構造データは1ステップごとではなく，選択ごとに収集される． つまり，この場合は10ステップおきにエネルギーと構造データは保存される． もし1ステップごとのデータが欲しいのであれば，手動で下記の設定を追加すること．\n[option] energy_step_flag = True struc_step_flag = True Auto script 何度も繰り返しcryspyを実行するのは面倒に感じたかもしれない． 下記のようなスクリプトを使えば自動化できる．\nrepeat_cryspy\n",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/ja/tutorial/laqa/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "OpenMX",
    "uri": "/ja/tutorial/random/omx/index.html"
  },
  {
    "content": "Stress step data is saved in stress_step_data.pkl if you set stress_step_flag = True in [option] section of cryspy.in. NumPy library is required to analyze this data file.\n警告 stress_step_flag = True is currently available only with VASP, QE, and soiap.\nData format type: dict key: structure ID value: list of stress step data in each stage string form {0: [array([[-0.16770062, 0. , 0. ], […], […]]), array([[…], ]…], […]]), …], 1: [array([[ 0.39260083, -0. , -0. ], […], […]]), array([[…], […], […]]), …],\n…} unit of stress eV/(Å**3) How to access import pickle with open('stress_step_data.pkl', 'rb') as f: stress_step_data = pickle.load(f) # stress_step_data[ID][stage][step][atom] # stress_step_data[ID][0] \u003c-- stage 1 # stress_step_data[ID][1] \u003c-- stage 2 # # in LAQA # stress_step_data[ID][selection][step][atom] # stress_step_data[ID][0] \u003c-- 1st selection # stress_step_data[ID][1] \u003c-- 2nd selection # ---------- stress step data of ID 3, stage 1 cid = 0 # ID stage = 1 # stage stress_step_data[cid][stage-1][:3] # to show only 3 steps in jupyter [array([[-0.16770062, 0. , 0. ], [ 0. , -0.16770062, -0. ], [ 0. , 0. , 0.21823358]]), array([[-0.16020785, -0. , -0. ], [-0. , -0.16020785, 0. ], [-0. , 0. , 0.18646321]]), array([[-0.13572003, -0. , 0. ], [-0. , -0.13572003, 0. ], [-0. , 0. , 0.15953926]])] ",
    "description": "",
    "tags": null,
    "title": "Stress step data",
    "uri": "/ja/data_format/optional_data/stress_step/index.html"
  },
  {
    "content": "PNG (背景透明) JPG ",
    "description": "",
    "tags": null,
    "title": "ロゴ",
    "uri": "/ja/about/logo/index.html"
  },
  {
    "content": "Input file 入力ファイルcryspy.inの解説.\n目次 File format [basic] section [structure] section [VASP] section [QE] section [OMX] section [soaip] section [LAMMPS] section [ASE] section [EA] section [BO] section [LAQA] section [option] section ",
    "description": "",
    "tags": null,
    "title": "入力ファイル",
    "uri": "/ja/input/index.html"
  },
  {
    "content": "[QE] section is required only if you use QE (calc_code = QE)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage qe_infile str File name of QE input file. qe_outfile str File name of QE output file. ",
    "description": "",
    "tags": null,
    "title": "[QE] section",
    "uri": "/ja/input/qe_sec/index.html"
  },
  {
    "content": "Coming soon.\n",
    "description": "",
    "tags": null,
    "title": "LAMMPS",
    "uri": "/ja/tutorial/random/lammps/index.html"
  },
  {
    "content": "データフォーマット CrySPYのデータは./data/pkl_data/ディレクトリに保存される．\n目次 Common data Initial and optimized structure data Result data Random Search (RS) Evolutionary algorithm (EA) Bayesian Optimization (BO) LAQA オプションデータ Energy step data Structure step data Force step data Stress step data ",
    "description": "",
    "tags": null,
    "title": "データフォーマット",
    "uri": "/ja/data_format/index.html"
  },
  {
    "content": "[OMX] section is required only if you use OpenMX (calc_code = OMX)\nName Value Default Description kppvol int [int …] Grid density per Å**(-3) of reciprocal cell in each stage OMX_infile str File name of OpenMX input file. OMX_outfile str File name of OpenMX output file. ValenceElectrons str float float [str float float …] The number of initial charges for up and down spin states. ValenceElectrons e.g. in NaCl: ValenceElectrons = Na 4.5 4.5 Cl 3.5 3.5.\n",
    "description": "",
    "tags": null,
    "title": "[OMX] section",
    "uri": "/ja/input/omx_sec/index.html"
  },
  {
    "content": "CrySPY Utility ダウンロードに関してはこちらのページ： Installation/CrySPY utility． 一部のexamplesはこのドキュメントサイトからもダウンロード可能．\n目次 Examples ase_chgnet_Sr4Co4O12 ase_Cu8_RS soiap_Si8_RS soiap_Si8_RS_mindist qe_Si8_RS qe_benzene_2_RS_mol qe_Si16_LAQA Scripts extract_struc.py pos2pkl.py kpt_check.py repeat_cryspy ",
    "description": "",
    "tags": null,
    "title": "CrySPY Utility",
    "uri": "/ja/cryspy_utility/index.html"
  },
  {
    "content": "Table of contents ",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/ja/data_format/laqa_data/index.html"
  },
  {
    "content": "You can restrict the interatomic distance in structure generation. Here is an example of [structure] section in the input file to limit minimum interatomic distance for a A-B binary system.\n[structure] natot = 8 atype = A B nat = 4 4 mindist_1 = 2.0 1.8 mindist_2 = 1.8 1.5 This means that minimum interatomic distances of A-A, A-B, and B-B are limited to 2.0, 1.8, and 1.5 Å, respectively. Structures with interatomic distances shorter than these values are automatically eliminated.\nFor ternary systems, you will need mindist_1, mindist_2, and mindist_3.\n",
    "description": "",
    "tags": null,
    "title": "Restriction on interatomic distances",
    "uri": "/ja/features/restrict_dist/index.html"
  },
  {
    "content": "[soiap] section is required only if you use soiap (calc_code = soiap)\nName Value Default Description soiap_infile str File name of soiap input file. soiap_outfile str File name of soiap output file. soiap_cif str File name of soiap CIF-formatted initial structure. ",
    "description": "",
    "tags": null,
    "title": "[soaip] section",
    "uri": "/ja/input/soiap_sec/index.html"
  },
  {
    "content": "kpt_check.pyはkppvolを入力した際にkメッシュがどれくらいになるかをチェックすることができる． POSCAR，CONTCAR，およびinit_struc_data.pklが読み込み可能． pymatgenライブラリが必要．\n初期構造を生成後に，kppvolの値をどれくらいにしたら良いか色々試すことができる．（下記の最後の例を参照）\n使い方 python3 kpt_check.py [-h] [-w] [-n NSTRUC] infile kppvol positional arguments: infile input file: POSCAR or CONTCAR or init_struc_data.pkl kppvol kppvol optional arguments: -h, --help show this help message and exit -w, --write write KPOINTS -n NSTRUC, --nstruc NSTRUC number of structure to check 例 POSCARとkppvol $ python3 kpt_check.py POSCAR 100 a = 10.689217 b = 10.689217 c = 10.730846 Lattice vector 10.689217 0.000000 0.000000 0.000000 10.689217 0.000000 0.000000 0.000000 10.730846 kppvol: 100 k-points: [2, 2, 2] KPOINTSファイルの生成 POSCARおよびCONTCARを入力とする際は，-wオプションを使用することでKPOINTSファイルを生成できる．\n$ python3 kpt_check.py -w POSCAR 100 $ cat KPOINTS pymatgen 4.7.6+ generated KPOINTS with grid density = 607 / atom 0 Monkhorst 2 2 2 init_struc_data.pklとkppvol init_struc_data.pklの初期構造データに任意のkppvolの値を適用した場合のkメッシュを調べることが可能． デフォルト設定でははじめの5構造をチェックする． -nを使うとチェックする構造数も変えられる．\n$ python3 kpt_check.py -n 3 init_struc_data.pkl 100 # ---------- 0th structure a = 8.0343076893 b = 8.03430768936 c = 9.1723323373 Lattice vector 8.034308 0.000000 0.000000 -4.017154 6.957915 0.000000 0.000000 0.000000 9.172332 kppvol: 100 k-points: [3, 3, 3] # ---------- 1th structure a = 9.8451944096 b = 9.84519440959 c = 6.8764313585 Lattice vector 9.845194 0.000000 0.000000 -4.922597 8.526188 0.000000 0.000000 0.000000 6.876431 kppvol: 100 k-points: [3, 3, 4] # ---------- 2th structure a = 7.5760383679 b = 7.57603836797 c = 6.6507478296 Lattice vector 7.576038 0.000000 0.000000 -3.788019 6.561042 0.000000 0.000000 0.000000 6.650748 kppvol: 100 k-points: [4, 4, 4] ",
    "description": "",
    "tags": null,
    "title": "kpt_check.py",
    "uri": "/ja/cryspy_utility/scripts/kpt_check/index.html"
  },
  {
    "content": "目次 Energy step data Structure step data Force step data Stress step data ",
    "description": "",
    "tags": null,
    "title": "オプションデータ",
    "uri": "/ja/data_format/optional_data/index.html"
  },
  {
    "content": "[LAMMPS] section is required only if you use LAMMPS (calc_code = LAMMPS)\nName Value Default Description lammps_infile str File name of LAMMPS input file. lammps_outfile str File name of LAMMPS output file. lammps_potential str [str …], None None Potential. lammps_data str File name of LAMMPS data file. ",
    "description": "",
    "tags": null,
    "title": "[LAMMPS] section",
    "uri": "/ja/input/lammps_sec/index.html"
  },
  {
    "content": "Score $ L $ $$ L = -E + w_F \\frac{F^2}{2\\Delta F} + w_S S. $$ Symbol Note $$ E $$ エネルギー（eV/atom） $$ w_F $$ 力の項の重み. Default: $ w_F = 0.1$ $$ F $$ 原子に働く力の平均ノルム（eV/Å） $$ \\Delta F $$ 一つ前のステップからの $ F $の差の絶対値．はじめのステップでは $ \\Delta F = 1$． $ \\Delta F = 10^{-6}$ if $ \\Delta F \\le 10^{-6} $. $$ w_S $$ ストレス項の重み．Default: $ w_S = 10.0$ $$ S $$ ストレステンソルにおける成分の絶対値平均（eV/Å^3）． Reference K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda, npj Comput. Mater. 4, 32 (2018).\nhttps://www.nature.com/articles/s41524-018-0090-y T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).\nhttps://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335 ",
    "description": "",
    "tags": null,
    "title": "LAQA",
    "uri": "/ja/searching_algo/laqa/index.html"
  },
  {
    "content": " 情報 First, see Tutorial \u003e Random Search (RS) for basic usage of CrySPY.\nIn this section, we give a tutorial on the molecular structure generation part only. Since version 0.9.0, CrySPY has been able to generate random molecular crystal structures using PyXtal.\nYou need to use a pre-defined molecular by PyXtal’s database (see, https://pyxtal.readthedocs.io/en/latest/Usage.html?highlight=benzene#pyxtal-molecule-pyxtal-molecule)) or create molecule files that define molecular structures.\nPre-defined molecule PyXtal currently supports C60, H2O, CH4, NH3, benzene, naphthalene, anthracene, tetracene, pentacene, coumarin, resorcinol, benzamide, aspirin, ddt, lindane, glycine, glucose, and ROY.\nLet us generate molecular crystal structures that consist of 2 benzenes.\nMove to your working directory, and copy input example files by one of the following methods.\nDownload from CrySPY Utility \u003e Examples \u003e qe_benzene_2_RS_mol Copy from CrySPY utility that you installed (only version 0.10.3 or earlier) cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_benzene_2_RS_mol . Take a look at cryspy.in.\n$ cat cryspy.in [basic] algo = RS calc_code = QE tot_struc = 6 nstage = 2 njob = 2 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 24 atype = H C nat = 12 12 mol_file = benzene nmol = 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] In generating molecular crystal structures, you have to set struc_mode = mol in the [structure] section. Molecule file(s) and the number of molecule(s) are specified as:\nmol_file = benzene nmol = 2 Run CrySPY and see the initial structures (./data/init_POSCARS).\nUser-defined molecule Move to your working directory, and copy input example files for 2 formula units of Li3PS4.\nversion 1.0.0 or later Copy from CrySPY utility version 0.10.3 or earlier cp -r ~/CrySPY_root/CrySPY-0.9.0/example/QE_Li3PS4_2fu_RS_mol . $ cd QE_Li3PS4_2fu_RS_mol $ ls Li.xyz PS4.xyz calc_in/ cryspy.in Molecule files of Li and PS4 are included. Supported formats in PyXtal are .xyz, .gjf, .g03, .g09, .com, .inp, .out, and pymatgen’s JSON serialized molecules.\n$ cat Li.xyz 1 New structure Li 0.000 0.000 0.000 $ cat PS4.xyz 5 New structure P 0.000000 0.000000 0.000000 S 1.200000 1.200000 -1.200000 S 1.200000 -1.200000 1.200000 S -1.200000 1.200000 1.200000 S -1.200000 -1.200000 -1.200000 Check cryspy.in.\n$ cat cryspy.in [basic] algo = RS calc_code = QE tot_struc = 4 nstage = 2 njob = 1 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] A single atom (Li atom in this case) is treated as a molecule in the molecular crystal structure generation mode. In this example, a random molecular structure is composed of six Li molecules (atoms) and two PS4 molecules specified as:\nmol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 In mol_file, set relative path of molecule files from cryspy.in. Here the molecule files are placed in the same directory.\nRun CrySPY and see the initial structures (./data/init_POSCARS).\ntimeout_mol Molecular crystal structure generation can be time consuming because PyXtal calculates the molecule directions according to a specified space group. Sometimes molecular crystal structure generation gets stuck. So we set a time limit on the single structure generation. The time limit (timeout_mol) is set to 120 seconds by default. If the limit is insufficient, you have to increase it as (see last line):\nstruc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 timeout_mol = 300.0 Volume of unit cell You can control the volume of unit cells by changing the value(s) of scaling factor, vol_factor, in cryspy.in. By default, vol_factor is set to 1.0. It is also possible to specify a range of factors. Set minimum and maximum values as follows:\nstruc_mode = mol natot = 16 atype = Li P S nat = 6 2 8 mol_file = ./Li.xyz ./PS4.xyz nmol = 6 2 timeout_mol = 300.0 vol_factor = 0.8 1.5 ",
    "description": "",
    "tags": null,
    "title": "Molecular crystal structure prediction",
    "uri": "/ja/tutorial/mol/index.html"
  },
  {
    "content": "Download qe_benzene_2_RS_mol.tar.gz cryspy.in [basic] algo = RS calc_code = QE tot_struc = 6 nstage = 2 njob = 2 jobcmd = qsub jobfile = job_cryspy [structure] struc_mode = mol natot = 24 atype = H C nat = 12 12 mol_file = benzene nmol = 2 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 40 60 [option] calc_in/ pwscf.in_1 \u0026control title = '2 benzene' calculation = 'relax' nstep = 30 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./outdir/' / \u0026system ibrav = 0 nat = 24 ntyp = 2 ecutwfc = 35.00 ecutrho = 300.00 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES H 1.008 H.pbe-kjpaw_psl.1.0.0.UPF C 12.01 C.pbe-n-kjpaw_psl.1.0.0.UPF pwscf.in_2 \u0026control title = '2 benzene' calculation = 'vc-relax' nstep = 200 restart_mode = 'from_scratch', pseudo_dir = '/usr/local/pslibrary.1.0.0/pbe/PSEUDOPOTENTIALS/' outdir='./outdir/' / \u0026system ibrav = 0 nat = 24 ntyp = 2 ecutwfc = 46.00 ecutrho = 326.00 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES H 1.008 H.pbe-kjpaw_psl.1.0.0.UPF C 12.01 C.pbe-n-kjpaw_psl.1.0.0.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N bz_CrySPY_ID #$ -pe smp 8 mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out # for QE if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_benzene_2_RS_mol",
    "uri": "/ja/cryspy_utility/examples/qe_benzene_2_rs_mol/index.html"
  },
  {
    "content": "[ASE] section is required only if you use ASE (calc_code = ASE)\nName Value Default Description ase_python str File name of ASE input file. ",
    "description": "",
    "tags": null,
    "title": "[ASE] section",
    "uri": "/ja/input/ase_sec/index.html"
  },
  {
    "content": "[EA] section is required only if you use EA (algo = EA)\nName Value Default Description n_pop int Population from second generation. n_crsov int The number of structures generated by crossover. n_perm int The number of structures generated by permutation. n_strain int The number of structures generated by strain. n_rand int The number of structures generated randomly. n_elite int The number of elite structures. fit_reverse bool False If False, minimal search. n_fittest int None The number of structures which can survive. slct_func TNM, RLT Select function. t_size int 3 Only used with slct_func = TNM. Tournament size. a_rlt float 10.0 Only used with slct_func = RLT. Parameter for linear scaling. b_rlt float 1.0 Only used with slct_func = RLT. Parameter for linear scaling. crs_lat equal, random equal How to mix lattice vectors. nat_diff_tole int 4 Tolerance for difference in the number of atoms in crossover. ntimes int 1 The number of times in permutation. sigma_st float 0.5 Standard deviation for strain. maxcnt_ea int 50 Maximum number of trials in EA. maxgen_ea int 0 Maximum generation. emax_ea float None Upper limit of energy in selecting parents. emin_ea float None Lower limit of energy in selecting parents. ",
    "description": "",
    "tags": null,
    "title": "[EA] section",
    "uri": "/ja/input/ea/index.html"
  },
  {
    "content": "Available from CrySPY 0.11.0.\nIf you use an external program not supported by CrySPY, the optimized energy and structure data can be loaded semi-manually in CrySPY. You have to prepare two files, ext_opt_struc_data.pkl and ext_energy_data.pkl.\nAssumption Here, we assume the following conditions:\n(version 0.10.3 or earlier) CrySPY main script: ~/CrySPY_root/CrySPY-0.11.0/cryspy.py (calc_in directory is not required.)\nInput files Move to your working directory, and copy input example files.\nversion 1.0.0 or later Copy from CrySPY utility version 0.10.3 or earlier cp -r ~/CrySPY_root/CrySPY-0.9.0/example/ext_Si8_RS . cd ext_Si8_RS tree . └── cryspy.in cryspy.in cryspy.in is the input file of CrySPY.\n[basic] algo = RS calc_code = ext tot_struc = 5 [structure] natot = 8 atype = Si nat = 8 [option] If calc_code == ext, nstage, njob, jobcmd, and jobfile are ignored.\nRunning CrySPY This mode is different from the normal use of CrySPY. Go to Load external data.\n",
    "description": "",
    "tags": null,
    "title": "External program",
    "uri": "/ja/tutorial/random/external/index.html"
  },
  {
    "content": "cryspyを何度も実行するのが面倒な時は，下記の自動スクリプトが便利． これは5分間に1回cryspyを実行する例．\n#!/bin/bash set -e while : do cryspy -n LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"$LOG_LASTLINE\" = \"Done all structures!\" ] then exit 0 # ---------- for EA elif [ \"${LOG_LASTLINE:0:17}\" = \"Reached maxgen_ea\" ] then exit 0 elif [ \"$LOG_LASTLINE\" = \"EA is ready\" ] then cryspy -n # EA LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"${LOG_LASTLINE:0:17}\" = \"Reached maxgen_ea\" ] then exit 0 fi cryspy -n # submit jobs # ---------- for BO elif [ \"${LOG_LASTLINE:0:21}\" = \"Reached max_select_bo\" ] then exit 0 elif [ \"$LOG_LASTLINE\" = \"BO is ready\" ] then cryspy -n # selection LOG_LASTLINE=`tail -n 1 log_cryspy` if [ \"${LOG_LASTLINE:0:21}\" = \"Reached max_select_bo\" ] then exit 0 fi cryspy -n # submit jobs # ---------- for LAQA elif [ \"$LOG_LASTLINE\" = \"LAQA is ready\" ] then cryspy -n # selection cryspy -n # submit jobs fi sleep 5m done ",
    "description": "",
    "tags": null,
    "title": "repeat_cryspy",
    "uri": "/ja/cryspy_utility/scripts/repeat/index.html"
  },
  {
    "content": "[BO] section is required only if you use BO (algo = BO)\nName Value Default Description nselect_bo int The number of structures to be selected at once. score TS, EI, PI Acquisition function. num_rand_basis int If 0, Gaussian process. The number of basis function. cdev float 0.001 Cutoff of deviation for standardization. dscrpt FP Descriptor for structures. fppath str, None None Only used with dscrpt = FP. Path of cal_fingerprint. fp_rmin float 0.5 Only used with dscrpt = FP. Minimum cutoff of r in fingerprint. fp_rmax float 5.0 Only used with dscrpt = FP. Maximum cutoff of r in fingerprint. fp_npoints int 20 Only used with dscrpt = FP. Number of discretized points for each pair in fingerprint. fp_sigma float 1.0 Only used with dscrpt = FP. Sigma parameter [Å] in Gaussian smearing function. max_select_bo int 0 Maximum number of selection. manual_select_bo int [int …] [] Structure IDs to be selected manually. emax_bo float None Upper limit of energy in BO. emin_bo float None Lower limit of energy in BO. ",
    "description": "",
    "tags": null,
    "title": "[BO] section",
    "uri": "/ja/input/bo/index.html"
  },
  {
    "content": "See Input file in detail.\nLet’s take a look at cryspy.in again. This may be slightly different depending on calc_code you chose.\n[basic] algo = RS calc_code = soiap tot_struc = 5 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] [basic] section algo: Algorithm. Set RS for Random Search. calc_code: Structure optimizer. Choose from VASP, QE, OMX, soiap, LAMMPS tot_struc: The total number of structures. In this case, 5 random structures are generated at 1st run. nstage: The number of stages. It’s up to you. njob: The number of jobs running at the same time. In this example, CrySPY sets 2 slots for structure optimization, in other words, optimizes every 2 structures. jobcmd: Command for jobs. Use bash, zsh, qsub, and so on. jobfile: File name of the job file. [structure] section natot: The total number of atoms. e.g. for Na8Cl8: natot = 16. atype: Atom type. e.g. for Na8Cl8: atype = Na Cl. nat: The number of each atom. e.g. for Na8Cl8: nat = 8 8 ",
    "description": "",
    "tags": null,
    "title": "Check cryspy.in",
    "uri": "/ja/tutorial/random/cryspy_in/index.html"
  },
  {
    "content": "Download qe_Si16_LAQA.tar.gz cryspy.in [basic] algo = LAQA calc_code = QE tot_struc = 50 nstage = 1 njob = 10 jobcmd = qsub jobfile = job_cryspy [structure] natot = 16 atype = Si nat = 16 mindist_1 = 1.5 [QE] qe_infile = pwscf.in qe_outfile = pwscf.out kppvol = 80 [LAQA] nselect_laqa = 4 [option] calc_in/ pwscf.in_1 \u0026control calculation = 'vc-relax' pseudo_dir = '/usr/local/gbrv/all_pbe_UPF_v1.5/' outdir='./outdir/' nstep = 10 / \u0026system ibrav = 0 nat = 16 ntyp = 1 ecutwfc = 40 ecutrho = 200 occupations = 'smearing' degauss = 0.01 / \u0026electrons / \u0026ions / \u0026cell / ATOMIC_SPECIES Si -1.0 si_pbe_v1.uspp.F.UPF job_cryspy #!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si_CrySPY_ID #$ -pe smp 20 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then sed -i -e '3 s/^.*$/skip/' stat_job exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "qe_Si16_LAQA",
    "uri": "/ja/cryspy_utility/examples/qe_si16_laqa/index.html"
  },
  {
    "content": "2023年5月15日\n情報 CrySPYの基本的な使い方に関してはチュートリアル \u003e Random Search (RS)を見ること．\n情報 動作環境:\nCrySPY 1.1.0 or later mpi4py MPI library (Open MPI, Intel MPI, MPICH, etc.) mpi4py mpi4pyのインストールがまだであればインストールする．\npip install mpi4py 入力ファイル cryspy.inはいつもと同じで変更する必要はない．ここでは下記の設定でMPIを使った構造生成を行う．\n[basic] algo = RS calc_code = soiap tot_struc = 100 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] tot_struc，natot，atype，nat以外の変数は構造生成に関係がないのでここでは無視して良い．\n実行 4並列で実行する場合，mpiexec -nを使う．\nmpiexec -n 4 cryspy ジョブスケジューラーなどにサブミットするときは自分でジョブファイルを作る．下記は一例．\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash #$ -N n_nproc #$ -pe smp 4 mpirun -np $NSLOTS ~/.local/bin/cryspy 実行スクリプトcryspyのpathなどは適宜編集すること．\n結果 CrySPYはシンプルに構造生成タスクをプロセス数で分割している．\nRank 0: IDs 0 – 24 Rank 1: IDs 25 – 49 Rank 2: IDs 50 – 74 Rank 3: IDs 75 – 99 構造が生成された順番でログが出力される．\n2023/04/24 22:47:51 CrySPY 1.1.0 Start cryspy.py Number of MPI processes: 4 Read input file, cryspy.in Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.11 Structure ID 25 was generated. Space group: 138 --\u003e 123 P4/mmm Structure ID 75 was generated. Space group: 99 --\u003e 99 P4mm Structure ID 0 was generated. Space group: 127 --\u003e 123 P4/mmm Structure ID 1 was generated. Space group: 61 --\u003e 61 Pbca Structure ID 50 was generated. Space group: 38 --\u003e 38 Amm2 Structure ID 51 was generated. Space group: 134 --\u003e 123 P4/mmm Structure ID 26 was generated. Space group: 111 --\u003e 123 P4/mmm Structure ID 2 was generated. Space group: 9 --\u003e 9 Cc Structure ID 3 was generated. Space group: 80 --\u003e 80 I4_1 Structure ID 4 was generated. Space group: 107 --\u003e 107 I4mm Structure ID 5 was generated. Space group: 75 --\u003e 75 P4 Structure ID 76 was generated. Space group: 108 --\u003e 108 I4cm Structure ID 77 was generated. Space group: 100 --\u003e 100 P4bm Structure ID 27 was generated. Space group: 207 --\u003e 221 Pm-3m しかし，init_POSCARSでは，構造生成が全て終わった後に出力しているのでID順になっている．\nID_0 1.0 2.9636956737951818 0.0000000000000002 0.0000000000000002 0.0000000000000000 2.9636956737951818 0.0000000000000002 0.0000000000000000 0.0000000000000000 6.2634106638053080 Si 8 direct -0.1602734164607877 -0.1602734164607877 -0.0000000000000000 Si 0.1602734164607877 0.1602734164607877 0.5000000000000000 Si 0.6602734164607877 0.3397265835392123 0.7500000000000000 Si 0.3397265835392122 0.6602734164607877 0.2500000000000000 Si 0.4469739273741755 0.4469739273741755 -0.0000000000000000 Si 0.5530260726258245 0.5530260726258244 0.5000000000000000 Si 0.0530260726258245 0.9469739273741754 0.7500000000000000 Si 0.9469739273741754 0.0530260726258245 0.2500000000000000 Si ID_1 1.0 7.2751506682509657 0.0000000000000004 0.0000000000000004 0.0000000000000000 7.2751506682509657 0.0000000000000004 0.0000000000000000 0.0000000000000000 5.1777634169924873 Si 8 direct -0.3845341807505553 -0.3845341807505553 0.4999999999999999 Si 0.3845341807505553 0.3845341807505553 0.5000000000000000 Si 0.3845341807505553 -0.3845341807505553 0.0000000000000000 Si -0.3845341807505553 0.3845341807505553 -0.0000000000000000 Si 0.0000000000000000 0.5000000000000000 0.2500000000000000 Si 0.5000000000000000 0.0000000000000000 0.7500000000000000 Si 0.0000000000000000 0.5000000000000000 0.7500000000000000 Si 0.5000000000000000 0.0000000000000000 0.2500000000000000 Si ID_2 1.0 -4.3660398676292269 -4.3660398676292269 0.0000000000000000 -4.3660398676292269 -0.0000000000000003 -4.3660398676292269 0.0000000000000000 -4.3660398676292269 -4.3660398676292269 Si 8 direct 0.8700001548800920 0.8700001548800920 0.1299998451199080 Si 0.1299998451199080 0.1299998451199080 0.8700001548800920 Si 0.8700001548800920 0.1299998451199080 0.8700001548800920 Si 0.1299998451199080 0.8700001548800920 0.1299998451199080 Si 0.1299998451199080 0.8700001548800920 0.8700001548800920 Si 0.8700001548800920 0.1299998451199080 0.1299998451199080 Si 0.7500000000000000 0.7500000000000000 0.7500000000000000 Si 0.2500000000000000 0.2500000000000000 0.2500000000000000 Si メモ ランダム構造生成以外の部分はMPIを使っても並列化されていないので意味はない．\n情報 See also Features \u003e Structure generation with MPI parallelization\n",
    "description": "",
    "tags": null,
    "title": "Random structure generation with MPI",
    "uri": "/ja/tutorial/mpi/index.html"
  },
  {
    "content": "CrySPYのジョブファイルで，“CrySPY_ID\"という文字列は自動的に構造IDに置換される． PBSやSLURMなどのジョブスケジューラーを使う時，ジョブ名に構造IDを使うと便利である． 例えばPBSでは， #PBS -N Si_CrySPY_IDが#PBS -N Si_10に置き換わる 大抵の場合，ジョブ名は数字から始められないことが多いので，Si_のように英字から始めておくと良い．\n#!/bin/sh #$ -cwd #$ -V -S /bin/bash ####$ -V -S /bin/zsh #$ -N Si8_CrySPY_ID #$ -pe smp 8 ####$ -q ibis1.q ####$ -q ibis2.q mpirun -np $NSLOTS pw.x -nk 4 -nb 2 \u003c pwscf.in \u003e pwscf.out if [ -e \"CRASH\" ]; then exit 1 fi sed -i -e '3 s/^.*$/done/' stat_job ",
    "description": "",
    "tags": null,
    "title": "ジョブファイルのCrySPY_ID",
    "uri": "/ja/features/cryspy_id/index.html"
  },
  {
    "content": "LAQA (algo = LAQA)を使う場合，[LAQA]セクションが必要．\nName Value Default Description nselect_laqa int 1度の選択で選ばれる構造の数． wf float 0.1 力の項の重み． ws float 10.0 ストレス項の重み． 情報 See also Searching algorithms \u003e LAQA\n情報 algo = LAQAでは[option]セクションの下記の二つは自動的にTrueになる．\nforce_step_flag = True stress_step_flag = True 原子に働く力とストレスのデータは1ステップごとに収集される． エネルギーと構造データは1ステップごとではなく，選択ごとに収集される． つまり，この場合は10ステップおきにエネルギーと構造データは保存される． もし1ステップごとのデータが欲しいのであれば，手動で下記の設定を追加すること．\n[option] energy_step_flag = True struc_step_flag = True ",
    "description": "",
    "tags": null,
    "title": "[LAQA] section",
    "uri": "/ja/input/laqa/index.html"
  },
  {
    "content": " メモ For version 1.0.0 or later, skip this page. The executable script is automatically installed.\nAssumption Here, we assume the following condition:\nCrySPY main script: ~/CrySPY_root/CrySPY-0.9.0/cryspy.py Make script Let’s make a convenient shell script to avoid typing long commands over and over again. Here, we create the script, cryspy (any file name will do).\n$ emacs cryspy $ chmod 744 cryspy $ cat cryspy #!/bin/sh python3 -u ~/CrySPY_root/CrySPY-0.9.0/cryspy.py 1\u003e\u003e log 2\u003e\u003e err -u option (unbuffered option) can be omitted.\nYou can put this script in your $PATH, or just use like bash ./cryspy.\n",
    "description": "",
    "tags": null,
    "title": "Script to run",
    "uri": "/ja/tutorial/random/script_to_run/index.html"
  },
  {
    "content": "2023 July 10, update\nMake sure you have the following in your working directory.\ncalc_in/ (cryspy) cryspy.in $ ls calc_in/ cryspy.in Then, run CyrSPY!\ncryspy If you use old version (0.10.3 or earlier):\nbash ./cryspy At the first run, CrySPY goes into structure generation mode. CrySPY stops after 5 structure generation.\nIf it worked properly, the following output appears on the screen:\n[2023-07-10 18:40:54,389][cryspy_init][INFO] Start CrySPY 1.2.0 [2023-07-10 18:40:54,389][cryspy_init][INFO] # ---------- Read input file, cryspy.in [2023-07-10 18:40:54,390][read_input][INFO] Save input data in cryspy.stat [2023-07-10 18:40:54,391][cryspy_init][INFO] # ---------- Initial structure generation [2023-07-10 18:40:54,391][cryspy_init][INFO] Number of MPI processes: 1 [2023-07-10 18:40:54,391][gen_init_struc][INFO] # ------ mindist [2023-07-10 18:40:54,395][struc_util][INFO] Cu - Cu: 1.32 [2023-07-10 18:40:54,395][gen_init_struc][INFO] # ------ generate structures [2023-07-10 18:40:54,481][gen_pyxtal][INFO] Structure ID 0 was generated. Space group: 1 --\u003e 1 P1 [2023-07-10 18:40:54,493][gen_pyxtal][INFO] Structure ID 1 was generated. Space group: 28 --\u003e 28 Pma2 [2023-07-10 18:40:54,498][gen_pyxtal][INFO] Structure ID 2 was generated. Space group: 29 --\u003e 29 Pca2_1 [2023-07-10 18:40:54,704][gen_pyxtal][INFO] Structure ID 3 was generated. Space group: 137 --\u003e 137 P4_2/nmc [2023-07-10 18:40:54,725][gen_pyxtal][INFO] Structure ID 4 was generated. Space group: 212 --\u003e 214 I4_132 [2023-07-10 18:40:54,800][cryspy_init][INFO] Elapsed time for structure generation: 0:00:00.408367 cryspy 4.35s user 1.04s system 145% cpu 3.697 total Several output files are also generated.\n(cryspy.out): Short log. only version 0.10.3 or earlier. cryspy.stat: Status file. data/init_POSCARS: Initial struture file in POSCAR format. You can open this file using VESTA data/pkl_data: Directory to save pickled data. log_cryspy: log. err_cryspy: error and warning. Let’s take a look at cryspy.stat file.\n... (omit) ... [status] id_queueing = 0 1 2 3 4 Structure ID 0 – 4 are queueing because we just generated structures, and have not submitted yet.\nヒント Check the initial structures, if the distance between atoms is too close, you should set the mindist in cryspy.in.\n",
    "description": "",
    "tags": null,
    "title": "Firsrt run",
    "uri": "/ja/tutorial/random/first_run/index.html"
  },
  {
    "content": "2023 July 10, update\nContinue CrySPY continues the simulation if you have cryspy.stat file.\nヒント Continue if you have crypy.stat\nStart from the beginning if you don’t have cryspy.stat\nSubmit job Run CyrSPY again.\ncryspy Check the screen or log_cryspy file.\n[2023-07-10 18:52:51,859][cryspy_restart][INFO] Restart CrySPY 1.2.0 [2023-07-10 18:52:51,869][ctrl_job][INFO] # ---------- job status [2023-07-10 18:52:51,904][ctrl_job][INFO] ID 0: submit job, Stage 1 [2023-07-10 18:52:51,931][ctrl_job][INFO] ID 1: submit job, Stage 1 And also cryspy.stat file.\n... (omit) ... [status] id_queueing = 2 3 4 id 0 = Stage 1 id 1 = Stage 1 CrySPY submitted two jobs for structure ID 0 and 1 as you set njob = 2 in cryspy.in. Calculations are performed in the work directory. These directory names correspond to their structure ID.\ntree -d work work ├── 000000 ├── 000001 └── fin When the two jobs are done, run CrySPY again.\ncryspy [2023-07-10 18:55:01,053][cryspy_restart][INFO] Restart CrySPY 1.2.0 [2023-07-10 18:55:01,058][ctrl_job][INFO] # ---------- job status [2023-07-10 18:55:01,058][ctrl_job][INFO] ID 0: Stage 1 Done! [2023-07-10 18:55:01,093][ctrl_job][INFO] collect results: E = -0.00696997755502915 eV/atom [2023-07-10 18:55:01,132][ctrl_job][INFO] ID 1: Stage 1 Done! [2023-07-10 18:55:01,133][ctrl_job][INFO] collect results: E = 0.4934076667166454 eV/atom [2023-07-10 18:55:01,144][cryspy][INFO] recheck 1 [2023-07-10 18:55:01,145][ctrl_job][INFO] # ---------- job status [2023-07-10 18:55:01,153][ctrl_job][INFO] ID 2: submit job, Stage 1 [2023-07-10 18:55:01,161][ctrl_job][INFO] ID 3: submit job, Stage 1 If you set nstage = 2 (more than 2), new jobs on stage 2 for ID 0 and 1 are submitted. If you set nstage = 1, CrySPY collects calculation data of ID 0 and 1, then submits next ID’s jobs. Directories of the finished structure are moved to the fin directory.\nRepeat cryspy several times until all 5 structures are done. You can delete the work directory when the simulation is done if you do not need it.\n",
    "description": "",
    "tags": null,
    "title": "Submit job",
    "uri": "/ja/tutorial/random/submit_job/index.html"
  },
  {
    "content": "Move to data directory. There should be a few more files.\n$ cd data $ ls cryspy_rslt cryspy_rslt_energy_asc init_POSCARS opt_POSCARS pkl_data/ cryspy_rslt: Result file. cryspy_rslt_energy_asc: Result file sorted in energy ascending order. init_POSCARS: Initial struture file in POSCAR format. opt_POSCARS: Optimized structure file in POSCAR format. pkl_data/: Directory to save pickled data. The results are written to text files, cryspy_rslt and cryspy_rslt_energy_asc (and also saved in pickle data in pkl_data directory).\nEach result appends to cryspy_rslt file in the order in which one finished earlier.\ncat cryspy_rslt Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet 情報 Not ID order in cryspy_rslt\nIn cryspy_rslt_energy_asc file, the results are sorted in energy ascending order.\ncat cryspy_rslt_energy_asc Spg_num Spg_sym Spg_num_opt Spg_sym_opt E_eV_atom Magmom Opt 1 98 I4_122 12 C2/m -3.978441 NaN not_yet 3 36 Cmc2_1 36 Cmc2_1 -3.520306 NaN not_yet 2 16 P222 16 P222 -3.348616 NaN not_yet 4 36 Cmc2_1 4 P2_1 -3.304168 NaN not_yet 0 139 I4/mmm 139 I4/mmm -3.000850 NaN done Spg_num and Spg_sym show space group information on initial structures. Spg_num_opt and Spg_sym_opt are those of optimized structures. The last column Opt indicates whether or not optimization reached required accuracy.\n",
    "description": "",
    "tags": null,
    "title": "Check results",
    "uri": "/ja/tutorial/random/result/index.html"
  },
  {
    "content": "Of course only 5 structures are not enough to find stable structures. You can append structures whenever you want. Here let’s append more 5 structures.\nFor Si-Si mindist, the default value of 1.11 Å is used in the first structure generation (see log_cryspy), which is a little too close. Let us try to set the mindist to 2.0 Å.\n情報 For mindist, see also Features \u003e Restriction on interatomic distances.\nEdit cryspy.in and change the value of tot_struc into 10, and add mindist_1 = 2.0\nemacs cryspy.in cat cryspy.in [basic] algo = RS calc_code = soiap tot_struc = 10 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.0 [soiap] soiap_infile = soiap.in soiap_outfile = soiap.out soiap_cif = initial.cif [option] Then run cryspy, and check log_cryspy file.\ncryspy \u0026 cat log_cryspy ... (omit) ... 2023/03/19 00:01:47 CrySPY 1.0.0 Restart cryspy.py Changed tot_struc from 5 to 10 Changed mindist from None to [[2.0]] Backup data # ---------- Append structures # ------ mindist Si - Si 2.0 Structure ID 5 was generated. Space group: 218 --\u003e 221 Pm-3m Structure ID 6 was generated. Space group: 86 --\u003e 129 P4/nmm Structure ID 7 was generated. Space group: 129 --\u003e 129 P4/nmm Structure ID 8 was generated. Space group: 191 --\u003e 191 P6/mmm Structure ID 9 was generated. Space group: 31 --\u003e 31 Pmn2_1 Remember that CrySPY goes into structure generation mode whenever you change the value of tot_struc. In this mode, CrySPY does not do any other action such as collecting data, submitting jobs, and so on.\nメモ Structure generation mode whenever you change the value of tot_struc.\nFrom version 1.0.0, CrySPY automatically backs up when adding structures. See features/backup.\nRepeat cryspy \u0026 several times until all appended structures are done. The auto script may help you.\nrepeat_cryspy\n",
    "description": "",
    "tags": null,
    "title": "Append structures",
    "uri": "/ja/tutorial/random/append/index.html"
  },
  {
    "content": "Download the data It is assumed here that you analyze and visualize CrySPY data in your local PC. If you use CrySPY in super computers or workstations, download the data in your local PC. You can delete the work and backup directory if you do not need it because the file size could be very large.\njupyter notebook Move to the data/ directory in results you just download. Then copy cryspy_analyzer_RS.ipynb from CrySPY utility.\n$ ls calc_in/ cryspy.in cryspy.stat data/ err_cryspy log_cryspy $ cd data $ ls cryspy_rslt cryspy_rslt_energy_asc init_POSCARS opt_CIFS.cif opt_POSCARS pkl_data/ cp /path/to/CrySPY_utility/cryspy_analyzer_RS.ipynb . Run jupyter. (VScode, jupyter lab, jupyter notebook, and so on.) You can get the following figure by simply running the steps in order.\n",
    "description": "",
    "tags": null,
    "title": "Analysis and visualization",
    "uri": "/ja/tutorial/random/analysis_visualization/index.html"
  },
  {
    "content": " Name Value Default Description stop_chkpt int 0 CrySPY stops at a specified check point. load_struc_flag bool False If True, load initial structures from ./data/pkl_data/init_struc_data.pkl. stop_next_struc bool False If True, CrySPY does not submit jobs for next structures, but jobs for next stage are submitted. recalc int [int …] (empty list) Specify structure IDs if you want to recalculate or continue optimization. append_struc_ea bool False If True, append structures by EA. energy_step_flag bool False If True, save energy_step_data in ./data/pkl_data/energy_step_data.pkl. struc_step_flag bool False If True, save struc_step_data in ./data/pkl_data/struc_step_data.pkl. force_step_flag bool False If True, save force_step_data in ./data/pkl_data/force_step_data.pkl. stress_step_flag bool False If True, save stress_step_data in ./data/pkl_data/stress_step_data.pkl. ",
    "description": "",
    "tags": null,
    "title": "[option] section",
    "uri": "/ja/input/option/index.html"
  },
  {
    "content": "CrySPYのバージョン1.1.0からは，MPIを用いたランダム構造生成が可能になった． MPIを使うにはPython環境にmpi4pyをインストールする必要がある． 当然，計算に利用するワークステーション等にMPIライブラリ（Open MPI，Intel MPI，MPICHなど）も必要である．\n情報 MPIを使うのに下記が必要\nCrySPY 1.1.0 or later mpi4py MPI library (Open MPI, Intel MPI, MPICH, etc.) 下の図にSi8原子1000構造をランダムに生成するのにかかった時間とMPIプロセス数の関係を示す．下記のセッティングを使った．\n[basic] algo = RS calc_code = soiap tot_struc = 1000 nstage = 1 njob = 2 jobcmd = zsh jobfile = job_cryspy [structure] natot = 8 atype = Si nat = 8 mindist_1 = 2.2 mindset_1 = 2.2のように厳し目に設定して，わざと時間がかかるようにしてある． それぞれのプロセス数において10回ずつ実行して，平均を線で結んでいる．\n",
    "description": "",
    "tags": null,
    "title": "MPI並列化を用いた構造生成",
    "uri": "/ja/features/mpi/index.html"
  },
  {
    "content": "You need only cryspy.in.\n$ ls cryspy.in Then, run CyrSPY.\ncryspy \u0026 At the first run, CrySPY goes into structure generation mode as usual. CrySPY stops after 5 structure generation.\nIf it worked properly, log_cryspy would look like this.\n2022/07/14 19:41:41 CrySPY 1.0.0 Start cryspy.py Read input file, cryspy.in Write input data in cryspy.out Save input data in cryspy.stat # --------- Generate initial structures # ------ mindist Si - Si 1.11 Structure ID 0 was generated. Space group: 88 --\u003e 141 I4_1/amd Structure ID 1 was generated. Space group: 101 --\u003e 101 P4_2cm Structure ID 2 was generated. Space group: 204 --\u003e 229 Im-3m Structure ID 3 was generated. Space group: 199 --\u003e 199 I2_13 Structure ID 4 was generated. Space group: 12 --\u003e 12 C2/m Unlike normal use, a directory named ext was created. Only the stat_job file exists in ext/.\n$ cat ext/stat_job out If you run cryspy when “out” is written in the stat_job file, queueing structure files (cif format) are exported in ext/queue.\ncryspy \u0026 $ ls ext/queue 0.cif 1.cif 2.cif 3.cif 4.cif The number in the file name is structure ID. The fist line of stat_job was automatically changed.\n$ cat ext/stat_job submitted Perform structure optimization and energy evaluation in an external program using the output cif files. Once that calculation is done, prepare the optimized structure and energy data in the pickle data format, ext_opt_struc_data.pkl and ext_energy_data.pkl.\nThe data format of ext_opt_struc_data.pkl is the same as init_struc_data.pkl and opt_struc_data.pkl, see Data format/Initial and optimized structure data.\nThe data format of ext_energy_data.pkl is similar to ext_opt_struc_data.pkl. Just change the value from the structure data into the energy. An example of the energy data (dict type) is shown below.\nkey: structure ID value: energy {0: -0.7139331910805997, 1: -0.5643404689832622, 2: -0.5832404287259171, 3: -0.535037327286169, 4: -0.6316663459586607} The ext/calc_data directory should be automatically generated, so put the two pickle files here.\n$ ls ext/calc_data ext_energy_data.pkl ext_opt_struc_data.pkl When ready, replace the first line of the stat_job file with “done” and run CrySPY.\n$ emacs /ext/stat_job $ cat /ext/stat_job done cryspy \u0026 CrySPY collects the result data.\n",
    "description": "",
    "tags": null,
    "title": "Load external data",
    "uri": "/ja/tutorial/random/ext_load_data/index.html"
  },
  {
    "content": "ASE interface Bug fixed for multiple stages.\n",
    "description": "",
    "tags": null,
    "title": "Version 1.2.1",
    "uri": "/ja/version_info/ver_1.2.1/index.html"
  },
  {
    "content": "ASE interface ASEインターフェースが利用可能．\nSee also\nチュートリアル \u003e Random Search (RS) \u003e ASE in your local PC Adoption of logging CrySPYのログは画面とファイル (log_cryspy and err_cryspy)の両方に出力\nSee also\n機能 \u003e Logging ",
    "description": "",
    "tags": null,
    "title": "Version 1.2.0",
    "uri": "/ja/version_info/ver_1.2.0/index.html"
  },
  {
    "content": "spg_errorのバグ修正 ランダム構造生成時，ある空間群で構造生成ができない時にsgp_errorという変数にその空間群番号を記録し，以降その番号はスキップするようにしていたが，ごく稀に間違って登録されてしまうバグが見つかった．よってこのspg_errorという機能は削除した．\n",
    "description": "",
    "tags": null,
    "title": "Version 1.1.1",
    "uri": "/ja/version_info/ver_1.1.1/index.html"
  },
  {
    "content": "MPI並列 MPIを用いたランダム構造生成が利用可能．\n詳細は下記を参照．\nTutorial \u003e Random structure generation with MPI Features \u003e Structure generation with MPI parallelization LAQA ストレス項を考慮に入れたスコアが利用できるように更新 (T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).)．\n詳細は下記を参照．\nTutorial \u003e LAQA Input file \u003e [LAQA] section CrySPY Utility \u003e Examples \u003e qe_Si16_LAQA Backup 日付でディレクトリを作ることでバックアップの履歴が残るように変更． 詳細はfeatures/backup．\n",
    "description": "",
    "tags": null,
    "title": "Version 1.1.0",
    "uri": "/ja/version_info/ver_1.1.0/index.html"
  },
  {
    "content": "Install and run CrySPY is now available in PyPI. You can install by\npip install csp-cryspy The executable script, cryspy is automatically installed in your PATH. To run CrySPY, just type cryspy:\ncryspy \u0026 CrySPY stops once before going to next selection (BO, LAQA) or next generation (EA). For example, EA case:\n[old version]\ncryspy run check jobs (finish current generation?) structure generation by EA automatically starts [CrySPY 1.0.0]\ncryspy run check jobs (finish current generation?) stop cryspy run auto backup structure generation by EA automatically starts Auto and manual backup Automatically backup:\nbefore going to next selection or next generation structure generation To manually back up:\ncryspy -b See features/backup in detail.\nClean cryspy -c See features/clean in detail.\nDirectory tree Changed the directory tree.\ngenstruc/RS –\u003e RS/ genstruc/EA –\u003e EA/ genstruc/struc_util.py –\u003e util/ utility.py –\u003e util/ IO Fixed standard output file and standard error file: log_cryspy and err_cryspy cryspy.out is obsoleted Moved to CrySPY Utility With the change in installation method, examples and cal_fingerprint have been moved to the CrySPY Utility.\nCOMBO The python library COMBO is now optional in CrySPY. If you do not use Bayesian optimizaion, you do not need to install it.\nNew calc_code ext: see tutorial/random/ext_load_data cryspy.in fppath New input variable for cal_fingerprint. See Instllation/cryspy/cryspy_1.0\nfwpath New input variable for find_wy. See Instllation/requirements/find_wy\nmindist mindist can be omitted in cryspy.in mindist_ea is obsoleted added mindist_mol_bs and mindist_mol_bs_factor in cryspy.in ",
    "description": "",
    "tags": null,
    "title": "Version 1.0.0",
    "uri": "/ja/version_info/ver_1.0.0/index.html"
  },
  {
    "content": " [2022 May 17] version 0.10.3 released Bug fixed: LAMMPS IO. [2022 January 24] version 0.10.2 released Added nrot: maximum number of times to rotate molecules in mol_bs [2021 September 30] version 0.10.1 released Fixed the problem of numpy.random.seed in multiprocessing [2021 July 25] version 0.10.0 released Support PyXtal 0.2.9 or later LAQA can be used with QE Upper and lower limits of energy for EA and BO [2021 July 13] paper published Our paper on CrySPY software has been published in STAM:Methods [2021 March 18] version 0.9.2 released Support pymatgen v2022. [2021 February 7] version 0.9.0 released Interfaced with OpenMX Employ PyXtal library to generate initial structures If you use PyXtal (default), find_wy program is not required LAQA can be used with soiap Change the name: [lattice] section –\u003e [structure] section Several input variables move to [structure] section natot: [basic] –\u003e [structure] atype: [basic] –\u003e [structure] nat: [basic] –\u003e [structure] maxcnt: [option] –\u003e [structure] symprec: [option] –\u003e [structure] spgnum: [option] –\u003e [structure] New features Molecular crystal structure generation Scale volume [2020 March 19] paper published Our paper on adjusting the descriptor for CSP Bayesian optimization has been published in Physical Review Materials [2020 February 16] version 0.8.0 released Migrate to Python 3 CrySPY logo created Change several variable names and data formats Change style of output for energy: eV/cell –\u003e eV/atom IDs of working directories corresponds to structure IDs New features recalculation manual select in BO [2018 December 5] version 0.7.0 released New features Evolutionary algorithm [2018 August 20] version 0.6.4 released [2018 July 2] version 0.6.3 released [2018 June 26] Version 0.6.2 released [2018 March 1] Version 0.6.1 released [2018 January 9] paper published Our paper on CrySPY has been published in Physical Review Materials ",
    "description": "",
    "tags": null,
    "title": "Version 0.10.3 or earlier",
    "uri": "/ja/version_info/ver_0.10.3/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/ja/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/ja/tags/index.html"
  }
]
