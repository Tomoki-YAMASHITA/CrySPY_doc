---
title: "Kpoint"
weight: 500
---

2024 April 22

CrySPY automatically generates the k-point setting using the [`pymatgen.io.vasp.Kpoints.automatic_density_by_vol`](https://pymatgen.org/pymatgen.io.vasp.html)<i class="fas fa-external-link-alt"></i> function from [pymatgen](https://pymatgen.org)<i class="fas fa-external-link-alt"></i>.
An example in `cryspy.in` with `nstage = 2` is as follows:

``` bash
[VASP]
kppvol = 40 120
```
- stage 1: kppvol = 40
- stage 2: kppvol = 120

kppvol means a grid density per Å{{< math >}}${}^{-3} ${{< /math >}} of reciprocal cell.  
VASP: gamma centered meshes are used for hexagonal cells and face-centered cells; otherwise, Monkhorst-Pack grids are employed.  
QE and OMX: only a k-mesh is provided, no offset.


## What is the appropriate value for kppvol?

Here are the guidelines. We use VESTA for visualizing crystal structures.

### Primitive cell of diamond Si
![fig_prim_diamond](/images/kpoint/prim_diamond.png?width=10vw)

a = b = c = 3.836 Å

| kppvol | k-mesh  |
|:----:|:-----:|
| 0      | [1, 1, 1]   |
| 20     | [4, 4, 4]   |
| 40     | [6, 6, 6]   |
| 60     | [7, 7, 7]   |
| 80     | [7, 7, 7]   |
| 100    | [8, 8, 8]   |
| 120    | [9, 9, 9]   |
| 140    | [9, 9, 9]   |
| 160    | [9, 9, 9]   |
| 180    | [10, 10, 10]   |
| 200    | [10, 10, 10]   |
| 400    | [13, 13, 13]   |
| 600    | [15, 15, 15]   |
| 800    | [17, 17, 17]   |

### Conventional cell of diamond Si
![fig_conv_diamond](/images/kpoint/conv_diamond.png?width=10vw)

a = b = c = 5.431 Å

| kppvol | k-mesh  |
|:----:|:-----:|
| 0      | [1, 1, 1]   |
| 20     | [3, 3, 3]   |
| 40     | [3, 3, 3]   |
| 60     | [4, 4, 4]   |
| 80     | [4, 4 ,4]   |
| 100    | [5, 5, 5]   |
| 120    | [5, 5, 5]   |
| 140    | [6, 6, 6]   |
| 160    | [6, 6, 6]   |
| 180    | [6, 6, 6]   |
| 200    | [6, 6, 6]   |
| 400    | [8, 8, 8]   |
| 600    | [9, 9, 9]   |
| 800    | [10, 10, 10]   |

### Nd2Fe14B
![fig_Nd2Fe12B](/images/kpoint/Nd2Fe14B.png?width=10vw)

a = b = 8.804 Å  
c = 12.205 Å

| kppvol | k-mesh  |
|:----:|:-----:|
| 0      | [1, 1, 1]   |
| 20     | [1, 1, 1]   |
| 40     | [2, 2, 1]   |
| 60     | [2, 2, 2]   |
| 80     | [3, 3 ,2]   |
| 100    | [3, 3, 2]   |
| 120    | [3, 3, 2]   |
| 140    | [3, 3, 2]   |
| 160    | [3, 3, 2]   |
| 180    | [4, 4, 2]   |
| 200    | [4, 4, 3]   |
| 400    | [5, 5, 3]   |
| 600    | [6, 6, 4]   |
| 800    | [6, 6, 4]   |