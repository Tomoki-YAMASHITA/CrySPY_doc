---
title: "Permutation"
weight: 200
---

## Overview
Permutation is an evolutionary operation that generates new structures (offspring) by modifying the atomic arrangement within a single structure.
It enables the exploration of alternative configurations without changing the lattice or the overall composition.

## How it works
The positions of atoms of different elements are swapped.
The number of swaps can be specified by `ntimes`, which is set to 1 by default.
After the swap, a minimum interatomic distance check is performed.

![fig_EA_permutation](/images/EA/EA_permutation.svg?width=20vw)