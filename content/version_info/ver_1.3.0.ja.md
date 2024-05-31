---
title: "Version 1.3.0"
weight: 970
---
## Important change
### Common
- workingディレクトリ名の変更  
  work000000 --> work0
- いくつかのデータをタプルにまとめてpickle化して保存していたが，それぞれ個別にデータをpickle化するように変更  
  For example, rs_id_data.pkl --> id_queueing.pkl and id_running.pkl

### BO
- cal_fingerprintプログラムの使用を廃止．代わりに[dscribe](https://singroup.github.io/dscribe/latest)<i class="fas fa-external-link-alt"></i>が必要．
  + cryspy.inの`fppath`と`fp_rmin`も合わせて廃止．
- ベイズ最適化のライブラリをCOMBOから後継の[PHYSBO](https://www.pasums.issp.u-tokyo.ac.jp/physbo/en/about)<i class="fas fa-external-link-alt"></i>へ変更
- See [Installation > CrySPY > CrySPY 1.3.0 or later]({{< ref "installation/cryspy/cryspy_1.3.md" >}})

## Fixed
### soiap
- 最近のpymatgenで動くように修正

## Added
- ランダム構造生成と進化的アルゴリズムによる構造生成はライブラリとして使用可能に．see [Features > As library]({{< ref "features/as_library" >}})

## for developer
- グローバル変数を廃止 (rin), 入力変数にはdataclassを採用
- リストとして使っていた入力変数の多くはタプルに変更