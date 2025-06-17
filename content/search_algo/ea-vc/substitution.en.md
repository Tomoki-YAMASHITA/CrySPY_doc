---
title: "Substitution"
weight: 400
---

Substitution randomly selects two different atom types:
one whose current count is above the lower limit specified by `ll_nat`, and another whose current count is below the upper limit specified by `ul_nat`.
Then, one atom of the former type is replaced with an atom of the latter type.
Finally, the minimum interatomic distance defined by `mindist` is checked, and if no violations are found, the structure is accepted as an offspring.

![fig_EA-vc_substitution.svg](/images/EA-vc/EA-vc_substitution.svg?width=20vw)


