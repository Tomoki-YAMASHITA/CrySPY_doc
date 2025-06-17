---
title: "Evolutionary algorithm (EA)"
weight: 30
---

2025 April 2

## Background
Evolutionary algorithms (EAs) are metaheuristic methods inspired by the theory of evolution.
EA can effectively generate new structures (offspring) by inheriting the local environments of the stable structures (parents) explored so far.
Oganov group’s [USPEX](https://uspex-team.org/en)<i class="fas fa-external-link-alt"></i> is a well-known software, and there are others such as [XtalOpt](http://xtalopt.github.io)<i class="fas fa-external-link-alt"></i>.
For example, there are previous studies such as the following papers.

- T. S. Bush, C. R. A. Catlow, and P. D. Battle, J. Mater. Chem. **5**, 1269 (1995).
- A. R. Oganov and C. W. Glass, J. Chem. Phys. **124**, 244704 (2006).
- A. R. Oganov, A. O. Lyakhov, and M. Valle, Acc. Chem. Res. **44**, 227 (2011).
- A. O. Lyakhov, A. R. Oganov, H. T. Stokes, and Q. Zhu, Comput. Phys. Commun. **184**, 1172 (2013).

![fig_EA_pes](/images/EA/EA_pes.svg?width=30vw)


## Procedure
1. Initialize population
2. Evaluate fitness
3. Natural selection
4. Select parents
5. Create next generation
6. Repeat from step 2: Evaluate fitness

## Initialize population
In the first generation, a set of random structures is generated according to the number specified by `n_pop`.
`tot_struc` is not used in EA or EA-vc.

## Evaluate fitness
Currently, energy is the only property that can be used as fitness in CrySPY.
By setting `fit_reverse = False`, the algorithm is configured to search for the minimum value.
The `fit_reverse` setting is designed for future cases where fitness may be based on properties other than energy.


## Natural selection
DFT calculations occasionally fail and produce extremely unreasonable energy values.
`emax_ea` and `emin_ea` can be used to filter out structures with unreasonably low (or high) energy values:
  {{< math >}}$$ \mathrm{emin\_ea} \le E \ (\mathrm{eV/atom}) \le \mathrm{emax\_ea} $${{< /math >}}
For example, if `emin_ea` is set, any structure with an energy lower than that value will be ignored.


In natural selection, the current population and elite individuals preserved from previous generations are first ranked based on fitness.
The number of elite individuals used here is specified by `n_elite`.
Only the top `n_fittest` individuals among the current population and elite individuals are selected, while all others are eliminated.
During the natural selection process, duplicates are removed using the [StructureMatcher](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.structure_matcher.StructureMatcher)<i class="fas fa-external-link-alt"></i> class provided by [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i>, and then the top `n_fittest` individuals are selected.
`n_fittest` is often set to about half of `n_pop` (the population size).
Note that in the current implementation, if `n_fittest = 0`, all individuals are retained.
The figure below shows an example of the natural selection process when `n_fittest = 5`.


![fig_EA_natural_selection](/images/EA/EA_natural_selection.svg?width=20vw)

## Select parents
Two parent selection methods are implemented in CrySPY to select a single parent individual from the candidate parents.
Both methods are designed so that individuals with higher fitness have a higher probability of being selected.
Setting `slct_func = TNM` enables tournament selection, while `slct_func = RLT` enables roulette selection.
Tournament selection requires fewer parameters and is easier to use.

- [Tournament selection (TNM)]({{< relref "tournament.md" >}})
- [Roulette selection (RLT)]({{< relref "roulette.md" >}})


## Create next generation
The next generation consists of offspring produced by evolutionary operations on candidate parents, along with some randomly generated structures.
Random structures are added in each generation to maintain diversity and to help escape from local minima.

### Evolutionary operations
Here, we introduce the operations of the fixed-composition EA implemented in CrySPY.

- [Crossover]({{< relref "crossover.md" >}})
- [Permutation]({{< relref "permutation.md" >}})
- [Strain]({{< relref "strain.md" >}})


### Population size
The sum of structures from crossover, permutation, strain, and random generation must be equal to `n_pop`.
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_rand`
