---
title: "Analysis and visualization"
weight: 300
---

## Automatic convex hull plotting
In EA-vc simulations of binary and ternary systems, a convex hull plot is automatically generated at the end of each generation.
For further customization, you can edit the plot yourself using a Jupyter notebook.
For quaternary systems, visualization using Plotly with Jupyter is available (Plotly should already be installed automatically, as it is a dependency of pymatgen).
Below are some usage examples.


### Binary system

![conv_hull_gen_3_with_desc.svg](/images/tutorial/EA-vc/2d/conv_hull_gen_3_with_desc.svg?width=40vw)

The above figure shows an example after search up to the third generation, with red labels added for explanation.
The input file settings related to convex hull plotting are listed below (default values in parentheses).

- `show_max`: Upper limit of the y-axis (0.2)
- `label_stable`: Whether to display compositions of stable phases (True)
- `vmax`: Maximum value of the colorbar on the right (0.2)
- `bottom_margin`: Margin between the minimum value and the lower end of the y-axis (0.02)
- `fig_format`: File format of the output figure. Supported formats: svg, png, pdf. (svg)

Each marker corresponding to the latest generation is marked with a cross.

### Ternary system

![conv_hull_gen_3_with_desc.svg](/images/tutorial/EA-vc/3d/conv_hull_gen_3_with_desc.svg?width=40vw)

The above figure shows an example after search up to the third generation, with red labels added for explanation.
The input file settings related to convex hull plotting are listed below (default values in parentheses).

- `show_max`: Only entries with a hull distance less than or equal to show_max are plotted. (0.2)
- `label_stable`: Whether to display compositions of stable phases (True)
- `vmax`: Maximum value of the colorbar on the right (0.2)
- `bottom_margin`: Not applicable to ternary systems
- `fig_format`: File format of the output figure. Supported formats: svg, png, pdf. (svg)

Each marker corresponding to the latest generation is marked with a cross.


## Download data
It is assumed here that you analyze and visualize CrySPY data on your local PC.
If you use CrySPY on a supercomputer or workstation, download the data to your local machine.
You can delete the `work` and `backup` directories if they are not needed, as their file size can be very large.

## Jupyter notebook

Move to the data/ directory in the results you downloaded earlier.
Then, if the CrySPY utility has already been [downloaded]({{< ref "/installation/utility.md" >}}) locally, copy `cryspy_analyzer_EA-vc.ipynb`.
Alternatively, you can download it directly from GitHub ([CrySPY_utility/notebook/](https://github.com/Tomoki-YAMASHITA/CrySPY_utility/tree/master/notebook)).


The Jupyter notebook file includes the same functions as the CrySPY code, allowing you to freely customize the convex hull plots.
Execute the cells in order as appropriate, and choosing one of the following options will produce the same plot as the automatic output.

- Binary system, matplotlib
- Ternary system, matplotlib

In the section

- Interactive plot using Plotly,

interactive plots using Plotly are available for binary, ternary, and quaternary systems.
See [CrySPY > Tutorial > Interactive Mode (Jupyter Notebook) #Interactive plot using Plotly]({{< ref "tutorial/interactive#interactive-plot-using-plotly" >}}) for example plots.


