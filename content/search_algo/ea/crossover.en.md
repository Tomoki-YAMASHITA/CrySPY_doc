---
title: "Crossover"
weight: 100
---

## Overview
Crossover is an evolutionary operation that creates a new structure (offspring) by exchanging sliced regions between two parent structures.
This promotes structural diversity and enables the inheritance of locally stable features.
It is one of the main operators used to explore low-energy configurations in structure search.

## How it works

1. Select two distinct individuals from the candidate parents
2. Perform a random translation
3. Randomly select a lattice vector
4. Slice the parents near the center
5. Swap the sliced halves
6. Select the offspring with more atoms
7. Adjust the number of atoms near the border
8. Perform a minimum interatomic distance check

![fig_EA_crossover](/images/EA/EA_crossover.svg?width=20vw)

###  4. Slice the parents near the center
The slice point is placed near the center and slightly varied each time.
``` python
slice_point = np.clip(np.random.normal(loc=0.5, scale=0.1), 0.3, 0.7)
```

If any of the subsequent steps fail, the process may be restarted from step 4.
However, the number of retries is limited to `maxcnt_ea`, and if this limit is exceeded, the parent selection step is repeated.


### 5. Swap the sliced halves
When `crs_lat` is set to `random`, the lattice vectors of one of the two parent structures are randomly selected.
When `crs_lat` is set to `equal`, the average of the lattice vectors of the two parent structures is used.
The default is `random`.

### 6. Select the offspring with more atoms
Swapping the sliced parts of the parent structures results in two structures with different numbers of atoms.
Temporarily, we select the structure with more atoms.

![fig_EA_crossover_natoms](/images/EA/EA_crossover_natoms.svg?width=30vw)

However, if the composition differs too much from the target, the process restarts from step 4 (Slice the parents near the center).
The tolerance for the difference in the number of atoms is set by `nat_diff_tole`.
The default value of `nat_diff_tole` is 4, which allows a tolerance of ±4 atoms per element.
In the figure above, the number of blue atoms is -1 and the number of green atoms is +2 relative to the original composition.

### 7. Adjust the number of atoms near the border
#### Deletion
When adjusting the number of atoms, the process starts with atom deletion.
The number of green atoms is excessive and needs to be reduced.
As illustrated in the figure below, atoms that do not satisfy the minimum interatomic distance defined by `mindist` are preferentially removed.

![fig_EA_crossover_rm_mindist](/images/EA/EA_crossover_rm_mindist.svg?width=20vw)

As shown below, if atoms that violate the minimum interatomic distance remain after the deletion process, the procedure is restarted from step 4 (Slice the parents near the center).

![fig_EA_crossover_rm_mindist2](/images/EA/EA_crossover_rm_mindist2.svg?width=20vw)


If there are no atoms violating the minimum interatomic distance but atoms still need to be deleted, atoms are removed in order of increasing distance from the border, as shown in the figure below. Note that, in addition to the central slicing point, positions with internal coordinates of 0 are also considered borders.

![fig_EA_crossover_rm_border](/images/EA/EA_crossover_rm_border.svg?width=20vw)

#### Addition

When atoms are lacking, the missing atoms are added near the border.
The internal coordinate along the selected axis is determined as shown below.
Here, mean refers to either the slice point or 0.
``` python
coords[axis] = np.random.normal(loc=mean, scale=0.08)
```
The remaining two components of the coordinate are determined randomly.
Atoms are added until the target number is reached, while checking for violations of the minimum interatomic distance.

![fig_EA_crossover_addition](/images/EA/EA_crossover_addition.svg?width=20vw)

