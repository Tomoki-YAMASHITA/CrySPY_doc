***

{{< figure src="/images/logo/cryspy_fix-03.png">}}

***

<a href="https://badge.fury.io/py/csp-cryspy" target=”_blank”><img src="https://badge.fury.io/py/csp-cryspy.svg" alt="PyPI version" height="18"></a>
<a href="https://pepy.tech/project/csp-cryspy" target=”_blank”><img src="https://static.pepy.tech/badge/csp-cryspy" alt="PyPI version" height="18"></a>

# Document

CrySPY (pronounced as crispy) is a crystal structure prediction tool written in Python.  
CrySPY automates the following:

- Structure generation
- Submitting jobs for structure optimization
- Collecting data for structure optimization
- Selecting candidates using machine learning

CrySPY can be install by `pip install csp-cryspy`.


## Latest version
CrySPY 1.2.5 (2024 May 10)

## News
+ [2024 May 10] CrySPY 1.2.5 released. [Version information/version 1.2.5]({{< ref "version_info/ver_1.2.5.md" >}})
  - Bug fix
+ [2024 May 7] (Document) [FAQ page]({{< ref "faq" >}})
+ [2024 May 7] CrySPY 1.2.4 released. [Version information/version 1.2.4]({{< ref "version_info/ver_1.2.4.md" >}})
  - Bug fix
+ [2024 April 24] (Document) [Tutorial > Random Search (RS) > VASP]({{< ref "tutorial/random/vasp" >}})
+ [2023 October 21] CrySPY 1.2.3 released. [Version information/version 1.2.3]({{< ref "version_info/ver_1.2.3.md" >}})
  - Bug fix for MPI
+ [2023 October 18] CrySPY 1.2.2 released. [Version information/version 1.2.2]({{< ref "version_info/ver_1.2.2.md" >}})
  - Enthalpy
+ [2023 September 27] CrySPY 1.2.1 released. [Version information/version 1.2.1]({{< ref "version_info/ver_1.2.1.md" >}})
  - Bug fix for ASE interface
+ [2023 August 8] (Document, Utility) Upload the example of CHGNET
+ [2023 July 10] CrySPY 1.2.0 released. [Version information/version 1.2.0]({{< ref "version_info/ver_1.2.0.md" >}})
  - Interface for ASE
  - Adoption of logging
+ [2023 June 14] CrySPY 1.1.1 released. [Version information/version 1.1.1]({{< ref "version_info/ver_1.1.1.md" >}})
  - bug fix
+ [2023 May 16] CrySPY 1.1.0 released. [Version information/version 1.1.0]({{< ref "version_info/ver_1.1.0.md" >}})
  - MPI parallelization (optional)
  - New score of LAQA
+ [2023 March 16] CrySPY 1.0.0 released. [Version information/version 1.0.0]({{< ref "version_info/ver_1.0.0.md" >}})
  - CrySPY is available in PyPI, so you can install by pip.

## Discussions
[Discussions in GitHub](https://github.com/Tomoki-YAMASHITA/CrySPY/discussions)<i class="fas fa-external-link-alt"></i> (questions and comments)

## License

CrySPY is distributed under the [MIT License](https://opensource.org/licenses/mit-license.php)<i class="fas fa-external-link-alt"></i>  
Copyright (c) 2018 CrySPY Development Team


## Code contributors

- Tomoki Yamashita and [Lab members](http://owl.nagaokaut.ac.jp/en)<i class="fas fa-external-link-alt"></i> (Nagaoka University of Technology)
- Nobuya Sato (National Institute of Advanced Industrial Science and Technology)
- Hiori Kino (National Institute for Materials Science)
- Kei Terayama (Yokohama City University)
- Hikaru Sawahata (Kanazawa University)
- Shinichi Kanehira (Osaka University)



## Reference
+ CrySPY（software）
  - T. Yamashita, S. Kanehira, N. Sato, H. Kino, H. Sawahata, T. Sato, F. Utsuno, K. Tsuda, T. Miyake, and T. Oguchi,  
    "CrySPY: a crystal structure prediction tool accelerated by machine learning",  
    Sci. Technol. Adv. Mater. Meth. **1**, 87 (2021). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2021.1943171)<i class="fas fa-external-link-alt"></i>
+ Bayesian optimization
  - T. Yamashita, N. Sato, H. Kino, T. Miyake, K. Tsuda, and T. Oguchi,  
    "Crystal structure prediction accelerated by Bayesian optimization",  
    Phys. Rev. Mater. **2**, 013803 (2018). [Link](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.2.013803)<i class="fas fa-external-link-alt"></i>
  - N. Sato, T. Yamashita, T. Oguchi, K. Hukushima, and T. Miyake,  
    "Adjusting the descriptor for a crystal structure search using Bayesian optimization",  
    Phys. Rev. Mater. **4**, 033801 (2020). [Link](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.4.033801)<i class="fas fa-external-link-alt"></i>
+ Bayesian optimization and evolutionary algorithm
  - T. Yamashita, H. Kino, K. Tsuda, T. Miyake, and T. Oguchi,  
    "Hybrid algorithm of Bayesian optimization and evolutionary algorithm in crystal structure prediction",  
    Sci. Technol. Adv. Mater. Meth. **2**, 67 (2022). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2055987)<i class="fas fa-external-link-alt"></i>
+ LAQA
  - K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda,  
    "Fine-grained optimization method for crystal structure prediction",  
    npj Comput. Mater. **4**, 32 (2018). [Link](https://www.nature.com/articles/s41524-018-0090-y)<i class="fas fa-external-link-alt"></i>
  - T. Yamashita and H. Sekine,  
    "Improvement of look ahead based on quadratic approximation for crystal structure prediction",  
    Sci. Technol. Adv. Mater. Meth. **2**, 84 (2022). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335)<i class="fas fa-external-link-alt"></i>



## Link
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY" icon="fab fa-github" %}} GitHub repo{{% /button %}}
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY/discussions" icon="fas fa-comments" %}} GitHub discussions {{% /button %}}
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY_utility" icon="fab fa-github" %}} CrySPY utility{{% /button %}}

