---
title: "Searching algorithms"
weight: 20
---

The following searching algorithms are available in CrySPY:

- Random Search (RS)
- Evolutionary Algorithm (EA)
- Bayesian Optimization (BO)
- Look Ahead based on Quadratic Approximation (LAQA)

## In a nutshell

### Random Search (RS)

Random.

### Evolutionary Algorithm (EA)

EA for crystal structure prediction has been developed by [Oganov\'s group](https://uspex-team.org/en/uspex/overview)<i class="fas fa-external-link-alt"></i>.  
We also employ EA in CrySPY, and support the following:

+ Selection methods
  - Tournament selection
  - Roulette selection
  - Elite selection
+ Evolutionary operations
  - Crossover
  - Permutation
  - Strain
+ etc.
  - Survival of the fittest
  - Dedupe structures in survival of the fittest


### Bayesian Optimization (BO)

One of the selection-type algorithms.

![fig_BO](/images/BO/BO.png?width=40vw)


### Look Ahead based on Quadratic Approximation (LAQA)

One of the selection-type algorithms.

![fig_LAQA](/images/LAQA/laqa_concept.png?width=30vw)

![fig_LAQA](/images/LAQA/LAQA.gif?width=40vw)

