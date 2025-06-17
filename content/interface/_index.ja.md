+++
title = "インターフェース"
weight = 31
chapter = true
####pre = "<b>1. </b>"
+++


# Interface

2025 June 16

CrySPYはエネルギー計算や構造最適化に外部のソフトウェアを利用する． 以下のソフトウェアを利用可能：

+ 第一原理計算
  - [VASP](https://www.vasp.at)<i class="fas fa-external-link-alt"></i>
  - [Quantum Espresso](http://www.quantum-espresso.org)<i class="fas fa-external-link-alt"></i>
  - [OpenMX](http://www.openmx-square.org/)<i class="fas fa-external-link-alt"></i> (CrySPY 0.9.0 or later)
+ 原子間ポテンシャル
  - [soiap](https://github.com/nbsato/soiap)<i class="fas fa-external-link-alt"></i>
  - [LAMMPS](http://lammps.sandia.gov)<i class="fas fa-external-link-alt"></i>
+ その他（ASEに対応している機械学習ポテンシャルやその他ソフトが利用可能）
  - [ASE](https://wiki.fysik.dtu.dk/ase/)<i class="fas fa-external-link-alt"></i> (CrySPY 1.2.0 or later)
  - [インタラクティブモード（ASE）]({{< ref "features/interactive_mode" >}})（CrySPY 1.4.0 or later）

少なくともいずれか一つは必要．

## アルゴリズム互換性

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


## オプション互換性


|      | energy_step_flag   | struc_step_flag  | force_step_flag | stress_step_flag |
| ---- |:----:|:----:|:----:|:----:|
| VASP | ✓    | ✓    |  ✓   | ✓   |
| Quantum Espresso | ✓    | ✓    |  ✓   | ✓   |
| OpenMX | ×    | ×    |  ×   | ×   |
| soiap | ✓    | ✓    |  ✓   | ✓   |
| LAMMPS | ×    | ×    |  ×   | ×   |
| ASE | ×    | ×    |  ×   | ×   |