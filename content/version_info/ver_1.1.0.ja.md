---
title: "Version 1.1.0"
weight: 988
---
## MPI並列
MPIを用いたランダム構造生成が利用可能．

詳細は下記を参照．
- [Tutorial > Random structure generation with MPI]({{< ref "tutorial/mpi" >}})
- [Features > Structure generation with MPI parallelization]({{< ref "features/mpi" >}})

## LAQA
ストレス項を考慮に入れたスコアが利用できるように更新 (T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).)．

詳細は下記を参照．
- [Tutorial > LAQA]({{< ref "tutorial/laqa" >}})
- [Input file > [LAQA] section ]({{< ref "input/laqa" >}})
- [CrySPY Utility > Examples > qe_Si16_LAQA]({{< ref "cryspy_utility/examples/qe_si16_laqa" >}})


## Backup
日付でディレクトリを作ることでバックアップの履歴が残るように変更．
詳細は[features/backup]({{< relref "../features/backup" >}})．
