---
title: "Tournament selection"
weight: 1000
---

## Overview
Tournament selection is a method used to choose parent individuals from the candidate parents based on their fitness.
It is designed to balance selection pressure and diversity in the population.
The figure below shows an example with `n_fittest = 10` and `t_size = 3`.

![fig_EA_tournament](/images/EA/EA_tournament.svg?width=20vw)


## How it works
1. A fixed number of individuals (`t_size`) are randomly selected from the candidate parents.
2. Among them, the individual with the highest fitness (i.e., lowest energy) is chosen as the parent.
3. This process is repeated until the required number of parents is selected.

## Advantages
- Simple and efficient
- Requires only one parameter (`t_size`)
- Can control selection pressure by adjusting `t_size`

## Notes
- The default value of `t_size` is 3.
- If `t_size` is small, diversity is promoted.
- If `t_size` is large, selection pressure increases, favoring the fittest individuals.
- Unlike roulette selection, tournament selection never chooses the bottom (`t_size` - 1 ) individuals from the candidate parents.