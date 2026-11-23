Title: How tolerances accumulate

[Read HTML](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/how-tolerances-accumulate/)

Author: Harsh Joshi

<a id="how-tolerances-accumulate"></a>

# How tolerances accumulate

Each replacement is close enough to the component it replaces. After several replacements, the result is no longer close enough to the component we started with. Nothing had to fail a local check. What travelled through the chain was permission to vary, not a guarantee that the whole chain stayed within the first allowance.

Choose a positive tolerance $\varepsilon$. Let three values be $0$, $0.75\varepsilon$ and $1.5\varepsilon$. The first two are within tolerance; so are the last two. The endpoints are not. If “close enough” is treated as an equivalence relation, grouping through the middle value merges a pair the original rule meant to distinguish. The calculation is small, but it changes what a sequence of individually acceptable edits can promise.

For Bernoulli laws, total-variation distance is the absolute difference between success probabilities. With tolerance $0.1$, the same construction becomes:

![The rolling comparison accepts both changes of 0.075, while the fixed-reference comparison rejects the final drift of 0.15 against tolerance 0.1.](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/how-tolerances-accumulate/fixed-and-rolling-reference.svg)

The rolling comparison passes both replacements. The fixed comparison passes the first and rejects the second. At step zero there has been no replacement; both distances start at zero.

This is the ordinary difference between a distance threshold and a transitive relation, now expressed for observable probability laws rather than positions on a line.

<a id="local-acceptance-does-not-settle-accumulated-drift"></a>

## Local acceptance does not settle accumulated drift

Imagine replacing one component repeatedly. Each candidate is accepted because it differs from its immediate predecessor by less than a tolerance. After enough replacements, the final component can be far from the initial reference. Comparing every candidate to that fixed reference would answer a different question, as would allocating a cumulative error budget and charging each change against it. Deliberately establishing a new reference is another legitimate policy, but it changes the comparison being promised. The error is to run the predecessor-only policy while claiming the guarantee of the fixed-reference policy.

If a distance obeys the triangle inequality and two steps have bounds $\delta_1$ and $\delta_2$, then

$$
d(P_0,P_2)\leq d(P_0,P_1)+d(P_1,P_2)\leq\delta_1+\delta_2.
$$

The generic bound is the sum, not the larger allowance. Additional structure may improve it, but it has to be shown.

<a id="the-loss-the-distance-controls"></a>

## The loss the distance controls

A representation can be close in one sense and poor in another. Two probability laws can be close under a declared measure while a chosen rare-event decision remains sensitive. Two models can agree on average accuracy while disagreeing on a protected task. A small reconstruction error need not mean low decision regret, and neither is a measurement of repair cost.

For a concrete total-variation statement, take a loss $\ell$ with $0\leq\ell\leq1$. Then

$$
\left|\mathbb E_P[\ell]-\mathbb E_Q[\ell]\right|\leq\operatorname{TV}(P,Q).
$$

This controls the change in expected loss across the declared observation laws. The loss range matters: multiplying the loss by a thousand multiplies the possible difference too.

A [common simulator](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/one-experiment-through-another/) lets one experiment supply observations for a decision rule designed for another. Its uniform error buys a bounded-loss transfer guarantee. That is another use of total variation, with its own condition: the simulator must work without knowing the hidden answer.

<a id="exact-classes-and-approximate-neighbourhoods-serve-different-jobs"></a>

## Exact classes and approximate neighbourhoods serve different jobs

An exact quotient groups states on which every question the description must answer agrees. That gives genuine classes, and each such answer is a function of the class. Approximate neighbourhoods instead carry tolerances and comparison procedures. Their overlap is not a licence to merge them into exact classes.

[MONAD](https://causality.in/monad/) keeps these branches separate. Its research question needs approximation, but adding approximation does not merely decorate the exact definitions with a small epsilon. It changes what can compose and what a downstream caller may conclude.

A tolerance lets a system accept variation instead of demanding an exact copy. Its usefulness depends on carrying the comparison through subsequent changes: the reference, observation family and cumulative allowance determine what remains promised. Approximation gains that flexibility by keeping the error visible, rather than by turning overlapping neighbourhoods into identities.


Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [Preservation under uncertainty](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/) > [How tolerances accumulate](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/how-tolerances-accumulate/)
