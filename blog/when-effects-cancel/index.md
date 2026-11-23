Title: When effects cancel along a path

[Read HTML](https://causality.in/blog/when-effects-cancel/)

Author: Harsh Joshi

<a id="when-effects-cancel-along-a-path"></a>

# When effects cancel along a path

An intervention on A changes B. An intervention on B changes C. It is tempting to conclude that intervening on A changes C. That conclusion need not hold. A path records relationships under particular interventions; it does not ensure that their effects compose without cancellation.

Take the binary structural model

$$
A\sim\operatorname{Bernoulli}(1/4),\qquad B=A,\qquad C=A\oplus B.
$$

The symbol $\oplus$ denotes xor. In the unmodified system $C$ is always zero.

Set A to zero or one by intervention and leave the other equations intact. B changes from zero to one. C remains zero, because its two inputs change together and cancel under xor. A therefore has a detectable effect on B but no distributional effect on C in this comparison.

Now intervene on B, replacing its equation while leaving A’s distribution unchanged. Setting B to zero makes C equal A, so C is one with probability one quarter. Setting B to one makes C the complement of A, so C is one with probability three quarters. B has a detectable effect on C, yet the earlier A-to-C conclusion still fails. The intervention on B breaks a dependency that the intervention on A preserved. That difference is enough to produce the failure in this constructed model.

<a id="what-each-intervention-does-to-c"></a>

## What each intervention does to C

| Intervention | Assignments A ⊕ B = C, with probability | Probability C = 1 |
| --- | --- | --- |
| Set A = 0 | 0 ⊕ 0 = 0 (100%) | 0% |
| Set A = 1 | 1 ⊕ 1 = 0 (100%) | 0% |
| Set B = 0 | 0 ⊕ 0 = 0 (75%); 1 ⊕ 0 = 1 (25%) | 25% |
| Set B = 1 | 0 ⊕ 1 = 1 (75%); 1 ⊕ 1 = 0 (25%) | 75% |

<a id="reachability-and-direct-evidence-are-different-relations"></a>

## Reachability and direct evidence are different relations

A graph algorithm can compute transitive reachability. That is a valid operation on graph structure. Reinterpreting every reachable pair as a directly detectable intervention effect is a separate operation requiring assumptions the graph alone does not contain.

A debugger can use inferred paths to choose which relationships to examine next, while retaining measured edges as a separate relation. Testing an implied edge costs trials and supplies its own comparison. The graph becomes an instrument for investigation when reachability directs attention without replacing the evidence that an intervention needs.

<a id="reliable-does-not-mean-detectable-at-every-threshold"></a>

## Reliable does not mean detectable at every threshold

Suppose a binary channel records a balanced input correctly with probability `0.8`. Under input zero it records one with probability `0.2`; under input one that probability is `0.8`. The total-variation distance between these two output laws is `0.6`.

A stipulated detection threshold of `0.9` is not met even though prediction through the channel succeeds eighty percent of the time. Reliability and detection refer to different criteria. Improving a record does not license every threshold or erase the conditions under which it was observed.

Joseph Halpern gives a finite counterexample to the transitivity of causation, alongside conditions that can restore it.<sup><a id="fnref-note-7472616e7369746976697479"></a>[1](#fn-note-7472616e7369746976697479)</sup> His counterexample prompted a separate check in MONAD’s own finite observer model.

The [MONAD programme](https://causality.in/monad/) includes a machine-checked failure of transitivity in its finite observer setting. Detectable influence in that setting cannot simply be treated as an order. Taking its transitive closure would add relationships whose intervention effects need to be examined separately.

The xor example shows what such a check can reveal. One intervention breaks a dependency that another preserves, so the two paths carry different evidence. An account of those intervention-specific relationships is more informative than a larger graph whose edges have silently changed meaning.

1. 
   
   <a id="fn-note-7472616e7369746976697479"></a>
   
   Joseph Y. Halpern, [Sufficient Conditions for Causality to Be Transitive](https://www.cs.cornell.edu/home/halpern/papers/transitivity.pdf), 2016. The check uses his displayed three-variable equations under hard interventions; it does not identify his definition of actual causation with MONAD’s detectable influence. The [checked MONAD example](https://github.com/getHarshOnline/MONAD) fixes the starting state at `(0,0,0)` and allows only the identity operation and four specified maps that set A or B, with noiseless records. This article instead uses Bernoulli-distributed A and interventions that replace a structural equation to illustrate the same cancellation. [↩](#fnref-note-7472616e7369746976697479)
