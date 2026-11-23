Title: What a summary preserves

[Read HTML](https://causality.in/monad/what-a-summary-preserves/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="what-a-summary-preserves"></a>

# What a summary preserves

A summary can discard details while keeping the answers you need. This four-state example shows how to check that claim, choose a sufficient summary, and identify the information a failed summary would need. No software is required.

<a id="fix-the-question-before-judging-the-summary"></a>

## Fix the question before judging the summary

Let a state be $(a,b)$, where $a$ says whether a part is available and $b$ whether it fits the machine. Both take values 0 or 1. The repair question is whether both conditions hold, so its answer is $f(a,b)=a\land b$.

Suppose the summary keeps only availability, so $q(a,b)=a$. Try to answer the repair question using only the middle column before checking the last one.

| State | Availability summary | Repair possible? |
| --- | --- | --- |
| $(0,0)$ | 0 | No |
| $(0,1)$ | 0 | No |
| $(1,0)$ | 1 | No |
| $(1,1)$ | 1 | Yes |

The first two states can share a summary for this question because their answers agree. The last two cannot: the same summary, 1, would need to yield both No and Yes. No rule using only that summary can answer correctly for every state.

In general, an answer $f:X\to Y$ survives a summary $q:X\to S$ when there is a rule $g:S\to Y$ with $f=g\circ q$. This says what has to remain possible after compression; it does not require retaining every detail of the original state.

<a id="keep-the-answer-rather-than-every-original-detail"></a>

## Keep the answer rather than every original detail

For the repair question alone, a sufficient summary is the repair answer itself: $r(a,b)=a\land b$. It has two possible values. Three states share the answer No, and only $(1,1)$ has the answer Yes:

$$\{(0,0),(0,1),(1,0)\},\qquad \{(1,1)\}.$$

These groups are the observational equivalence classes for this one question: states belong together exactly when the required answer agrees. The quotient is the set of those classes. Reading the class tells us the answer, so compression to these two classes is sufficient. Any sufficient summary must keep $(1,1)$ apart from the other three states, though it may retain additional distinctions.

Notice that $r$ cannot tell whether a part is available when repair is impossible. That was not part of its contract. If both availability and repair must remain answerable, the coarsest sufficient grouping has three classes:

$$\{(0,0),(0,1)\},\qquad \{(1,0)\},\qquad \{(1,1)\}.$$

The pair of answers $(a,a\land b)$ identifies these three classes. It still merges the two unavailable-part states because neither required question separates them. This is semantic minimality: the fewest distinctions needed for the declared answers. It does not yet minimise storage, computation or the cost of obtaining those answers.

<a id="a-different-question-changes-the-judgement"></a>

## A different question changes the judgement

If the only question were whether a part is available, the original summary $q=a$ would be sufficient. Its inadequacy appears when the repair question needs compatibility. A description can therefore be sufficient for one purpose and insufficient for another without either claim being contradictory.

That is why preserving every currently asked question is not the same as preserving every question a later language or task might admit. The [broader programme](https://causality.in/monad/descriptions-and-repair/) asks what happens as those descriptions, questions and change rules themselves grow.

Now admit the compatibility question $b$ independently of availability. The two coordinate questions $a$ and $b$ together separate all four states. Any summary preserving both must keep all four states apart. A different encoding is possible; a merger is not. The formal obstruction generalises this argument: if a family of questions separates every distinct pair and a compression preserves every question in that family exactly, the compression must be injective, meaning different states never share an output.

The assumptions matter. A restricted question family allowed the two- and three-class summaries above. Allowing error, limiting continuations, paying for later observations or revising the summary changes the problem. MONAD studies how to state and account for those choices, rather than treating perfect preservation under unrestricted future questions as a useful compression rule.

<a id="recover-information-or-enrich-the-description"></a>

## Recover information or enrich the description

If an accessible compatibility record exists, a permitted observation can supply what the summary omitted. Whether that repair is possible depends on the actual source and access, not only on the fact that another bit would be helpful.

Starting from $q=a$, no further observation is needed when $a=0$: the repair answer is already No. When $a=1$, asking for $b$ determines the answer. If that query is permitted and costs one unit, the strategy costs zero on the unavailable-part branch and one on the available-part branch. An average cost would also need a distribution over states. If no source of $b$ is accessible, noticing the collision between $(1,0)$ and $(1,1)$ cannot recover the missing value.

Keeping $b$ before discarding the original state would be a different operation. A supplement encoder with access to $(a,b)$ can save the missing information; a later procedure with access only to $a$ cannot manufacture it. Revealing this old coordinate also adds nothing to the original four-state carrier. It is not evidence that a new dimension has emerged.

A description with no objects for machines, parts or compatibility has a different problem. Another value in the old vocabulary cannot express the missing relation. The account needs a richer description before it can ask the repair question properly.

[Summary and repair](https://causality.in/collections/changing-descriptions/from-summary-to-repair/) develops the information-and-access problem, while [changing the description](https://causality.in/collections/changing-descriptions/when-the-description-must-change/) follows the need for a different representational frame. The wider calculus remains a research programme.

The formal guide in the [MONAD repository](https://github.com/getHarshOnline/MONAD) translates this example into Lean's existing definitions and results. The kernel's finite-distribution example addresses a separate, narrower task: computing a numerical distance between supplied probability laws. It does not implement the quotient or the repair strategy above.


Reading path: [MONAD](https://causality.in/monad/) > [What a summary preserves](https://causality.in/monad/what-a-summary-preserves/)
