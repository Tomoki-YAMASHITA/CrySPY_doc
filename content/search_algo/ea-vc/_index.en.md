---
title: "Variable-composition evolutionary algorithm (EA-vc)"
weight: 35
---

2025 April 4

## Overview
Since CrySPY 1.4.0, a variable-composition EA (EA-vc) has been available as an extension of the [fixed-composition EA]({{< ref "search_algo/ea" >}}).
Refer to the following page for the supported interfaces ([Interface]({{< ref "interface/" >}})).
Although the overall flow is similar to the fixed-composition EA, EA-vc differs in how fitness is evaluated and how offspring are generated in order to handle varying compositions.
Here, we describe the parts that have been modified from the original EA.


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
In EA-vc, the number of atoms for each atom type is randomly determined within a user-defined range.
The minimum (`ll_nat`) and maximum (`ul_nat`) number of atoms per type can be specified in `cryspy.in` as shown below.
``` python
[structure]
atype = Cu Au
ll_nat = 0 0
ul_nat = 8 8
```

## Evaluate fitness
The convex hull computed from formation energies is used to evaluate the phase stability of different compositions, since directly comparing total energies of structures with different numbers of atoms is not meaningful.
Information on formation energy, the convex hull, and phase diagrams can be found online.
For example, see [Materials Project Documentation](https://docs.materialsproject.org/methodology/materials-methodology/thermodynamic-stability/phase-diagrams-pds)<i class="fas fa-external-link-alt"></i>.
In EA-vc, the fitness is defined as the energy above hull (also referred to as hull distance).

![fig_EA-vc_phase_diagram_binary.svg](/images/EA-vc/EA-vc_phase_diagram_binary.svg?width=30vw)

### Formation energy
Formation energy is calculated based on the reference energies (in eV/atom) of stable pure elements, which are specified as `end_point` in `cryspy.in`.
For example, in the case of the Cu–Au binary system, the `end_point` should contain the per-atom energies (in eV/atom) of fcc-Cu and fcc-Au, in that order.
Note that even if a structure with the same composition as `end_point` is found during the structure search and has a total energy lower than the corresponding `end_point` value, the formation energy is still currently calculated based on the original `end_point` values defined in `cryspy.in`.

### Convex hull
The energy difference between a given structure’s formation energy and the convex hull is called the energy above hull, also known as the hull distance.
This value indicates how much higher the formation energy of a structure is compared to the most stable combination of phases at the same composition.
Structures with a hull distance of zero are on the convex hull and are thus thermodynamically stable.

Unlike in the [fixed-composition EA]({{< ref "search_algo/ea" >}}), EA-vc filters structures based on their per-atom energy when computing the convex hull, using the condition:
  {{< math >}}$$ \mathrm{emin\_ea} \le E \le \mathrm{emax\_ea} $${{< /math >}}
Note that this filtering is based only on the total energy per atom, not on the formation energy.

To compute the convex hull, CrySPY uses the [PhaseDiagram](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.phase_diagram.PhaseDiagram)<i class="fas fa-external-link-alt"></i> class provided by the [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> library.
Unlike in the case of formation energy, if a structure with the same composition as a pure element has a total energy lower than the corresponding `end_point` value, that structure is used as the reference for computing the convex hull and hull distance.


## Natural selection
As shown in the figure below, EA-vc can produce multiple stable structures (i.e., with a hull distance of 0).
In such cases, multiple individuals share the top rank in terms of hull distance.
If the number of elite structures specified by `n_elite` is smaller than the number of equally ranked individuals, the selection becomes non-deterministic.
Currently, CrySPY randomly selects `n_elite` individuals from those with a hull distance less than 0.001 eV/atom.
If the number of individuals with a hull distance less than 0.001 eV/atom is smaller than `n_elite`, elite structures are selected in the usual way, based on fitness ranking.
When selecting elite individuals as well, duplicate structures are removed using the [StructureMatcher](https://pymatgen.org/pymatgen.analysis.html#pymatgen.analysis.structure_matcher.StructureMatcher)<i class="fas fa-external-link-alt"></i> class provided by the [pymatgen](https://pymatgen.org/)<i class="fas fa-external-link-alt"></i> library.
![fig_EA-vc_elite.svg](/images/EA-vc/EA-vc_elite.svg?width=30vw)


Elite individuals are selected based on the best structures from previous generations.
However, because hull distance can vary from one generation to the next, the values for elite individuals are recalculated using the current convex hull before natural selection is applied.

As described in the [Convex hull]({{< relref "#convex-hull" >}}) section, `emin_ea` and `emax_ea` are not used for natural selection in EA-vc.


## Select parents
The method for selecting parents is the same as in the [fixed-composition EA]({{< ref "search_algo/ea" >}}).

## Create next generation

### Evolutionary operations
The crossover (vc) operation is slightly different from [that in the fixed-composition EA]({{< ref "search_algo/ea/crossover" >}}), while [permutation]({{< ref "search_algo/ea/permutation" >}}) and [strain]({{< ref "search_algo/ea/strain" >}}) are the same.
EA-vc introduces several new operations to enable compositional variation.

- [Crossover (vc)]({{< relref "crossover-vc.md" >}})
- [Addition]({{< relref "addition.md" >}})
- [Elimination]({{< relref "elimination.md" >}})
- [Substitution]({{< relref "substitution.md" >}})


### Population size
The sum of structures from crossover, permutation, strain, addition, elimination, substitution, and random generation must be equal to `n_pop`.
- `n_pop` = `n_crsov` + `n_perm` + `n_strain` + `n_add` + `n_elim` + `n_subs`+ `n_rand`
