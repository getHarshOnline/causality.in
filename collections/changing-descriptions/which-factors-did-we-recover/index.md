Title: Which factors did we recover?

[Read HTML](https://causality.in/collections/changing-descriptions/which-factors-did-we-recover/)

Author: Harsh Joshi

<a id="which-factors-did-we-recover"></a>

# Which factors did we recover?

A model reconstructs the observations perfectly, and its learned coordinates are independent. We would like to call those coordinates the underlying factors. The difficulty is not necessarily that the fit is poor. Another set of coordinates may satisfy the same observational tests while mixing the quantities we intended to separate.

<a id="the-observed-distribution-leaves-a-choice"></a>

## The observed distribution leaves a choice

Even an unlimited collection of the same kind of observation may leave the intended factors unidentified. [Locatello and colleagues' 2019 result](https://proceedings.mlr.press/v97/locatello19a.html) concerns latent generative models with more than one factor and a factorised prior admitting a density. They construct invertible, entangling changes of latent coordinates which, with the corresponding change of decoder, preserve the observed distribution. A representation separating the original factors can mix the transformed ones. Identifying the intended factors therefore needs information beyond that observed distribution, such as explicit model and data biases or supervision. This is not an impossibility theorem for every representation-learning problem or for [MONAD](https://causality.in/monad/).

A finite illustration makes the ambiguity visible without reproducing that continuous construction. Let two independent fair bits be $U$ and $V$. Describe the same four states either by $(U,V)$ or by $(A,B)=(U\mathbin{\oplus}V,V)$, where $\oplus$ is exclusive-or:

| Original coordinates $(U,V)$ | Changed coordinates $(A,B)$ | Probability |
| --- | --- | --: |
| $(0,0)$ | $(0,0)$ | $1/4$ |
| $(0,1)$ | $(1,1)$ | $1/4$ |
| $(1,0)$ | $(1,0)$ | $1/4$ |
| $(1,1)$ | $(0,1)$ | $1/4$ |

Both coordinate pairs are uniform and independent. The inverse $U=A\oplus B$, $V=B$ lets a decoder reconstruct exactly the same observations. Independence and reconstruction therefore cannot tell us whether the first coordinate means $U$ or parity. Yet changing $V$ while holding $U$ fixed changes both $A$ and $B$. An observed, controlled change to the named factor supplies a comparison absent from the four observational frequencies.

For a modelling contract, that extra information has a concrete job. A label can associate a coordinate with a named quantity; a restricted model family can encode an assumption about how the quantities combine; an intervention witness can show what changes when one of them is altered. Each may exclude alternatives, under its own conditions. A useful test keeps an observation-preserving alternative beside the preferred account and asks which supplied evidence actually separates them. Choosing the questions after seeing the representation could otherwise make the representation pass a contract whose meaning it helped invent.

<a id="meaning-has-to-enter-somewhere"></a>

## Meaning has to enter somewhere

The inventory example behind [a change of description](https://causality.in/collections/changing-descriptions/when-the-description-must-change/) names stock, compatibility and inspection because the problem already tells us what those quantities mean. A representation learner does not inherit that interpretation merely by finding three coordinates. The source of the names and relevant interventions is part of the modelling problem.

This is a narrower question than whether a description needs another carrier. It can arise with two invertibly related descriptions of exactly the same states. Their observational adequacy agrees, while their response to a named intervention differs. A test of factor recovery therefore has to say what information fixes the intended factors, and whether that information actually excludes the alternative representation.


Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [Which factors did we recover?](https://causality.in/collections/changing-descriptions/which-factors-did-we-recover/)
