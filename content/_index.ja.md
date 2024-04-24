***

{{< figure src="/images/logo/cryspy_fix-03.png">}}

***

<a href="https://badge.fury.io/py/csp-cryspy" target=”_blank”><img src="https://badge.fury.io/py/csp-cryspy.svg" alt="PyPI version" height="18"></a>
<a href="https://pepy.tech/project/csp-cryspy" target=”_blank”><img src="https://static.pepy.tech/badge/csp-cryspy" alt="PyPI version" height="18"></a>

# ドキュメント

CrySPY（クリスピー）は機械学習を利用したPython製の結晶構造探索ツールであり，クリスピーと読む．
難しい操作を必要とせず，入力ファイルを準備するだけで以下の事が自動で行える．

- 構造生成
- 構造最適化のジョブの実行
- 構造最適化データの収集
- 機械学習による候補の選択


## 最新バージョン
CrySPY 1.2.3 （2023年10月21日）

## ニュース
+ [2023 October 21] CrySPY 1.2.3 released. [Version information/version 1.2.3]({{< ref "version_info/ver_1.2.3.md" >}})
  - Bug fix for MPI
+ [2023 October 18] CrySPY 1.2.2 released. [Version information/version 1.2.2]({{< ref "version_info/ver_1.2.2.md" >}})
  - Enthalpy
+ [2023 September 27] CrySPY 1.2.1 released. [Version information/version 1.2.1]({{< ref "version_info/ver_1.2.1.md" >}})
  - Bug fix for ASE interface
+ [2023 August 8] (Document, Utility) Upload the example of CHGNET
+ [2023 July 10] CrySPY 1.2.0 released. [Version information/version 1.2.0]({{< ref "version_info/ver_1.2.0.md" >}})
  - ASEインターフェース
  - loggingの採用
+ [2023 June 14] CrySPY 1.1.1 released. [Version information/version 1.1.1]({{< ref "version_info/ver_1.1.1.md" >}})
  - バグ修正
+ [2023 May 16] CrySPY 1.1.0 released. [Version information/version 1.1.0]({{< ref "version_info/ver_1.1.0.md" >}})
  - MPI並列 (optional)
  - 新しいLAQAスコア
+ [2023 March 16] CrySPY 1.0.0 released. [Version information/version 1.0.0]({{< ref "version_info/ver_1.0.0.md" >}})
  - CrySPYがPyPIに登録されたので，pipでダウンロード可能に．

## Discussions
[Discussions in GitHub](https://github.com/Tomoki-YAMASHITA/CrySPY/discussions)<i class="fas fa-external-link-alt"></i> (質問やコメント)

## ライセンス

CrySPY is distributed under the [MIT License](https://opensource.org/licenses/mit-license.php)<i class="fas fa-external-link-alt"></i>  
Copyright (c) 2018 CrySPY Development Team


## コード開発貢献者

- 山下 智樹および[研究室メンバー](http://owl.nagaokaut.ac.jp)<i class="fas fa-external-link-alt"></i> (長岡技術科学大学)
- 佐藤 暢哉 (東京工業大学)
- 木野 日織 (物質・材料研究機構)
- 寺山 慧 (横浜市立大学)
- 澤端 日華瑠 (金沢大学)
- 兼平 慎一 (大阪大学)




## 関連文献
+ CrySPY（ソフトウェア）
  - T. Yamashita, S. Kanehira, N. Sato, H. Kino, H. Sawahata, T. Sato, F. Utsuno, K. Tsuda, T. Miyake, and T. Oguchi,  
    "CrySPY: a crystal structure prediction tool accelerated by machine learning",  
    Sci. Technol. Adv. Mater. Meth. **1**, 87 (2021). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2021.1943171)<i class="fas fa-external-link-alt"></i>

+ ベイズ最適化
  - T. Yamashita, N. Sato, H. Kino, T. Miyake, K. Tsuda, and T. Oguchi,  
    "Crystal structure prediction accelerated by Bayesian optimization",  
    Phys. Rev. Mater. **2**, 013803 (2018). [Link](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.2.013803)<i class="fas fa-external-link-alt"></i>
  - N. Sato, T. Yamashita, T. Oguchi, K. Hukushima, and T. Miyake,  
    "Adjusting the descriptor for a crystal structure search using Bayesian optimization",  
    Phys. Rev. Mater. **4**, 033801 (2020). [Link](https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.4.033801)<i class="fas fa-external-link-alt"></i>
+ ベイズ最適化と進化的アルゴリズム
  - T. Yamashita, H. Kino, K. Tsuda, T. Miyake, and T. Oguchi,  
    "Hybrid algorithm of Bayesian optimization and evolutionary algorithm in crystal structure prediction",  
    Sci. Technol. Adv. Mater. Meth. **2**, 67 (2022). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2055987)<i class="fas fa-external-link-alt"></i>
+ LAQA
  - K.Terayama, T. Yamashita, T. Oguchi, and K. Tsuda,  
    Fine-grained optimization method for crystal structure prediction",  
    npj Comput. Mater. **4**, 32 (2018). [Link](https://www.nature.com/articles/s41524-018-0090-y)<i class="fas fa-external-link-alt"></i>
  - T. Yamashita and H. Sekine,  
    "Improvement of look ahead based on quadratic approximation for crystal structure prediction",  
    Sci. Technol. Adv. Mater. Meth. **2**, 84 (2022). [Link](https://www.tandfonline.com/doi/full/10.1080/27660400.2022.2059335)<i class="fas fa-external-link-alt"></i>



## Link
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY" icon="fab fa-github" %}} GitHub repo{{% /button %}}
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY/discussions" icon="fas fa-comments" %}} GitHub discussions {{% /button %}}
{{% button href="https://github.com/Tomoki-YAMASHITA/CrySPY_utility" icon="fab fa-github" %}} CrySPY utility{{% /button %}}

