Title: The price of another question

[Read HTML](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/)

Author: Harsh Joshi

<a id="the-price-of-another-question"></a>

# The price of another question

A summary can tell us that an answer is missing without supplying the answer. Repair becomes possible only when an available source can still distinguish the states that need different answers. Unlike [a distinction erased without a supplement](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/), the original source here remains available, and an observer can ask exact questions of it without changing it. The question is how much access that distinction costs. The available, nondestructive source is essential to the calculation: an experiment whose measurement alters its subject would need another model.

<a id="a-cheap-first-question-is-not-the-whole-cost"></a>

## A cheap first question is not the whole cost

Suppose the hidden state is one of `A`, `B` or `C`. The retained summary is identical in all three cases, so identifying the state requires another read. Three source queries are available: asking “Is it A?” costs one unit, asking “Is it B?” costs two, and reading the complete identity costs four. These costs are stipulated for a toy model, not observed retrieval prices.

Ask the first question. If its answer is yes, stop. Otherwise ask the second:

![The query tree identifies A for one unit and either B or C for three units.](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/query-tree.svg)

Each leaf carries the total paid along its path. Removing the second query leaves the cheap-first strategy with a cost-five branch, while a direct complete read still costs four.

The tree's worst-case cost is three, even though one branch finishes after a single read.

No tree can guarantee the answer within two. The first query leaves B and C unresolved, and the second alone leaves A and C unresolved. Distinguishing either remaining pair requires paying for another question. The direct identity read costs four. Three is consequently the minimum worst-case cost for this query set.

Now remove the second query. A cheap-first strategy costs five in its unresolved branch: one for the first question, then four for the full read. Reading the full identity immediately costs four. The cheaper individual query has become the worse first choice.

<a id="optimise-over-the-questions-that-actually-remain"></a>

## Optimise over the questions that actually remain

Let $S$ be the states still compatible with what is known. If the required answer is constant on $S$, set $V(S)=0$: no further query is needed. Otherwise choose an available question, pay its cost, and continue inside the subset compatible with its answer.

For finite states, queries and outcomes, the minimum worst-case value has the recurrence

$$
V(S)=\min_{j\,\text{productive on }S}\left[c_j+\max_{o:S_{j,o}\ne\varnothing}V(S_{j,o})\right],
\qquad S_{j,o}=\{x\in S:q_j(x)=o\},
$$

where the minimum considers productive queries: those that actually split S. A query that gives the same answer throughout S can be removed from an exact nondestructive tree without losing information. Each productive branch contains fewer compatible states, providing a finite recursion even when a useful query is free.

This is the Bellman principle in the declared query problem. Finding the best tree can still be computationally expensive for a large finite problem.

<a id="unavailable-information-cannot-be-purchased-with-more-reasoning"></a>

## Unavailable information cannot be purchased with more reasoning

If two compatible states give the same answer to every available query but require different final answers, adaptation cannot help. They follow the same branch after every query and reach the same leaf. No correct tree exists for both.

Conversely, zero repair cost need not mean the answer was stored. A free measurement of an accessible original bit can recover that bit from a constant summary. The result is free only within the declared access model; storage, latency, permission and real instrumentation have not vanished because the mathematical query cost is zero.

<a id="worst-case-and-expected-cost-serve-different-promises"></a>

## Worst-case and expected cost serve different promises

Our tree costs one for A and three for B or C. With equal probabilities,

$$
\mathbb E[\text{cost}]=\frac{1+3+3}{3}=\frac73,
\qquad\max_x\text{cost}(x)=3.
$$

Changing the probabilities changes the expectation without changing that guarantee. A hard deadline may need a worst-case allowance, while a repeated operation may also care about expected expenditure. A method can be cheaper under one promise without being cheaper under the other.

[MONAD's](https://causality.in/monad/) formal repair branch establishes feasibility and minimum-cost results within exact, available-source query models. The calculation changes what it means to preserve a useful record. A summary may deliberately omit a distinction if an admitted source can recover it at an acceptable cost. That promise belongs to the summary and the access path together. When the source or query set changes, the same retained bytes can support a different answer, a more expensive one, or none at all.


Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [From summary to repair](https://causality.in/collections/changing-descriptions/from-summary-to-repair/) > [The price of another question](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/)

Previous in journey: [What can you distinguish with one more move?](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/)
