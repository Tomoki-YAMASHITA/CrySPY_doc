---
title: "Version 1.2.3"
weight: 979
---
## MPI
- バグ修正
- MPIを使うときは `-p`オプションが必要
``` bash
mpiexec -n 4 cryspy -p
```

See also
- [機能 > MPI並列化を用いた構造生成 ]({{< relref "/Features/mpi" >}})

