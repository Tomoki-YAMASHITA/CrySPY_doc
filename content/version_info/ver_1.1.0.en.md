---
title: "Version 1.1.0"
weight: 988
---
## Parallelization with MPI
Random structure generation using MPI has been available.

See also
- [Tutorial > Random structure generation with MPI]({{< ref "tutorial/mpi" >}})
- [Features > Structure generation with MPI parallelization]({{< ref "features/mpi" >}})

## LAQA
Updated score formula to take into account the stress term (T. Yamashita and H. Sekine, Sci. Technol. Adv. Mater. Meth. 2, 84 (2022).).

See also
- [Tutorial > LAQA]({{< ref "tutorial/laqa" >}})
- [Input file > [LAQA] section ]({{< ref "input/laqa" >}})
- [CrySPY Utility > Examples > qe_Si16_LAQA]({{< ref "cryspy_utility/examples/qe_si16_laqa" >}})


## Backup
Files are copied to the directory named by the date and time in "backup" directory.  
See [features/backup]({{< relref "../features/backup" >}}) in detail.
