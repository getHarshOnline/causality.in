Title: When one experiment can stand in for another

[Read HTML](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/one-experiment-through-another/)

Author: Harsh Joshi

<a id="when-one-experiment-can-stand-in-for-another"></a>

# When one experiment can stand in for another

A decision rule expects observations from one experiment, but we can run another. To reuse the rule, we need a way to turn the available observations into the kind it expects. Matching an average output is too weak: the transformation has to work across the unknown conditions the decision is meant to distinguish.

<a id="one-transformation-across-the-unknown-conditions"></a>

## One transformation across the unknown conditions

Comparing observations from two experiments introduces another promise. Let $E_\theta$ and $F_\theta$ be their observation laws under an unknown condition $\theta$. A simulator $K$ processes an observation from $E$ to resemble one from $F$. It must be the same Markov kernel for every condition: a simulator given the hidden answer could manufacture precisely the evidence a decision needs.

Suppose its uniform error is

$$
\sup_\theta\operatorname{TV}(KE_\theta,F_\theta)\leq\delta.
$$

Any decision rule $D$ designed for $F$ can then run after $K$ on $E$. With a loss in $[0,1]$, its expected loss changes by at most $\delta$ in each condition. The reason is concrete: the decision and its loss together are another bounded test of the simulated law. The guarantee concerns using that rule through that simulator, not a claim that the two experiments are identical.

Take two stipulated binary sensors for a condition $\theta\in\{0,1\}$. The first reports the correct bit with probability $0.9$; the second with probability $0.8$. Flip the first report independently with probability $1/8$. Its probability of remaining correct becomes

$$
0.9(1-1/8)+0.1(1/8)=0.8.
$$

This one kernel simulates the second sensor exactly in both conditions. A decision rule expecting the second sensor therefore has exactly its old risk after the simulation. If the target instead reports correctly with probability $0.82$, the same simulated output is within total variation $0.02$ of it in either condition. Guessing the reported bit has risk $0.2$ after simulation and $0.18$ under the target: a difference of $0.02$, meeting the bound. The numbers describe a constructed comparison, not a sensor experiment.

The smallest attainable error raises a further mathematical question. Simulation deficiency is the infimum of the uniform errors over common kernels. It follows the deficiency Lucien Le Cam introduced for comparing statistical experiments. An infimum need not have a minimising kernel, so the general transfer uses a kernel within a positive tolerance of it rather than assuming an exact best simulator exists. [MONAD](https://causality.in/monad/) formalises that forward guarantee. It does not turn a small decision difference into a converse construction of an affordable simulator; feasibility and resource cost need their own account.

<a id="composing-simulators-also-spends-an-error-allowance"></a>

## Composing simulators also spends an error allowance

Suppose $K$ simulates $F$ from $E$ within uniform total variation $\delta_1$, and $L$ simulates $G$ from $F$ within $\delta_2$. Their composition obeys

$$
\operatorname{TV}(LKE_\theta,G_\theta)
\leq \operatorname{TV}(LKE_\theta,LF_\theta)+\operatorname{TV}(LF_\theta,G_\theta)
\leq\delta_1+\delta_2.
$$

The second inequality uses contraction of total variation under the same Markov kernel $L$. It does not let the two tolerances collapse into one. [Accumulated drift](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/how-tolerances-accumulate/) asks why overlapping neighbourhoods fail to give exact classes; simulation asks whether a single admissible transformation can carry evidence into another decision problem. Keeping both the transformation and its error explicit makes the forward promise useful.


Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [Preservation under uncertainty](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/) > [When one experiment can stand in for another](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/one-experiment-through-another/)
