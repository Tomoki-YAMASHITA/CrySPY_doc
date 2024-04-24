---
title: "Version 1.1.1"
weight: 986
---
## Bug fix for spg_error
In random structure generation, when a structure cannot be generated for a certain space group, the space group number is recorded in the variable `sgp_error`, and the number is skipped thereafter, but a bug was found in which the number was registered incorrectly in rare cases. Therefore, this spg_error function has been removed.