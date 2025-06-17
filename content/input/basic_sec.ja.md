---
title: "[basic] section"
weight: 20
---

2025年3月6日 更新

| Name | Value | Default | Description |
| ---- | ----- | ------- | ----------- |
| `algo` | `RS`, `EA`, `EA-vc`, `BO`, `LAQA` |   | アルゴリズム |
| `calc_code` | `VASP`, `QE`, `OMX`, `soiap`, `LAMMPS`, `ASE` |  | 構造最適化の計算コード |
| `tot_struc` | int |   | 構造数．EAやEA-vcの場合は使用されない．|
| `nstage`    | int |   | ステージ数 |
| `njob`      | int |   | 同時に投入するジョブの数 |
| `jobcmd`    | str |   | ジョブを投入するコマンド，例えばqsubやsbatch |
| `jobfile`   | str |   | ジョブファイルのファイル名 |
