---
title: "Addition"
weight: 200
---

An atom type whose current count does not exceed the limit specified by `ul_nat` is randomly selected, and one atom of that type is added at a random position.
- One atom is added, and if it does not violate the minimum interatomic distance defined by `mindist`, the structure is accepted.  
- If the distance condition is not satisfied, the atom is placed again at a different random position. This process is repeated up to `maxcnt_ea` times.  
- If no valid offspring is obtained, the volume is expanded by 10%, and the same procedure is retried up to `maxcnt_ea` times.  
- If that also fails, the volume is expanded up to 20% and the structure generation is attempted again. If it still fails, the parent is replaced.

![fig_EA-vc_addition.svg](/images/EA-vc/EA-vc_addition.svg?width=20vw)


