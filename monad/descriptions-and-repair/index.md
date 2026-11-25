Title: Descriptions and repair

[Read HTML](https://causality.in/monad/descriptions-and-repair/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="descriptions-and-repair"></a>

# Descriptions and repair

Two parts are in stock. One fits the machine you need to repair; the other does not. An inventory can be perfectly accurate about availability and still leave you unable to choose between them.

[MONAD](https://causality.in/monad/) starts from this difficulty: which answers does a description keep, and what happens when a later question needs a distinction it left out?

<a id="a-small-exact-example"></a>

## A small exact example

Write the state of a part as `(a,b)`. The first value says whether it is available; the second says whether it fits. Repair requires both. A summary that keeps only `a=1` gives the same answer for `(1,0)` and `(1,1)`, although only the second part permits repair. No amount of calculation on that summary can tell you which part fits.

Write the answer you need as $f:X\to Y$ and the summary as $q:X\to S$. The answer survives if there is a rule $g:S\to Y$ such that

$$f=g\circ q.$$

In other words, you can get the required answer from the summary alone. When two states share a summary but need different answers, no such rule exists. [What a summary preserves](https://causality.in/monad/what-a-summary-preserves/) works through all four states and shows how choosing a different question changes which summary is sufficient.

<a id="the-representation-can-become-the-problem"></a>

## The representation can become the problem

Perhaps a compatibility record can supply the missing answer. Then the problem is finding and reading that record, at whatever cost the observation requires. But suppose the description has no way to represent machines or the relation between a machine and a part. It needs more than another value: it needs a way to express compatibility.

[Summary and repair](https://causality.in/collections/changing-descriptions/from-summary-to-repair/) follows the first problem, recovering an answer from information we can reach. [Changing the description](https://causality.in/collections/changing-descriptions/when-the-description-must-change/) follows the second. MONAD asks how to reason about both, including which earlier answers a richer description should preserve.

That is the ambition behind a *calculus of endogenous distinguishability*: the descriptions, the questions they can express and the rules for changing them can themselves change. The eventual calculus must account for those changes without allowing a rule to justify its own replacement.

<a id="what-a-description-can-distinguish"></a>

## What a description can distinguish

The four part states form the **carrier**, the things this description represents. Asking whether a part is available is a **probe**. A description also declares **continuations**, the changes it permits. Two states may give the same answer now, yet become distinguishable after one of those changes.

To call two states indistinguishable now, every present probe must agree on them. To say they remain indistinguishable, every probe after every permitted continuation must agree too. The choice of questions and continuations therefore matters as much as the current values.

Changing availability from 0 to 1 leaves the four-state description intact. Adding the compatibility question separates states the availability question grouped together. Adding kinds of objects the carrier could not represent goes further still. These are different changes, with different information to account for.

<a id="what-the-calculus-needs-to-explain"></a>

## What the calculus needs to explain

Four working requirements follow from that question. They guide the research; they are not a finished set of axioms.

**Generative openness** asks how a description can express a distinction it could not previously support. Finding the old compatibility bit is different from introducing machines and compatibility into a language that had neither. Both can change the answers we can give, but they do not change the description in the same way.

**Anticipatory compression** asks what a summary must retain for the future changes we choose to allow. Keeping today's answers is not enough when tomorrow's question separates states the summary merged. The permitted changes, approximation and cost must be stated.

**Invariant accounting** asks what each transformation preserves, hides, loses or makes newly expressible. Information that can be recovered from an accessible record is in a different position from information no available source can supply.

**Trajectory-sensitive relevance** asks how the path taken, and the futures still possible, change which distinctions matter. Two descriptions can agree now without making the same information relevant along every later path.

<a id="three-principles-for-an-honest-comparison"></a>

## Three principles for an honest comparison

Looking the same through today's questions does not make two states identical under every later question. A system can also be optimal within an inadequate description: the best stock count still cannot decide whether a part fits.

A persistent error deserves the same care. It might be measurement noise or a poor fit inside the current model; it might also point to a missing distinction. MONAD has to investigate those possibilities, rather than assume every mismatch calls for a new language. Preserving answers, choosing an adequate description and explaining a residual are separate questions.

<a id="what-the-lean-library-already-makes-exact"></a>

## What the Lean library already makes exact

The Lean library makes parts of this question exact. It proves results about grouping states that give the same answers, limits on future-safe compression, residual budgets, repair from available sources and the size of a supplement. It also treats probabilistic comparison and gives counterexamples to treating detectable influence as an order. The wider calculus of changing carriers and transformation rules remains open.

The example above requires every declared answer to survive exactly. [Preservation under uncertainty](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/) asks what can be said when the descriptions instead produce probability laws. Under a stated simulation error, it bounds how much a decision loss can change. A small numerical distance alone does not establish that two descriptions are equivalent or that recovering an answer is affordable.

<a id="take-the-example-into-the-lean-library"></a>

## Take the example into the Lean library

Try [the four-state example](https://causality.in/monad/what-a-summary-preserves/) on paper first. In the [MONAD repository](https://github.com/getHarshOnline/MONAD), you can then read the same example in Lean and inspect the hypotheses behind the theorem. Its formal guide leads through the rest of the proof library.

For Rust integration, the repository's kernel guide compares two finite probability distributions.

**Note**

**The kernel's scope.** The kernel provides types and a few numerical operations for a fixed-context observer model. It does not implement the changing-description calculus or solve repair problems automatically.

<a id="where-monad-sits-beside-pale-muon-and-hena"></a>

## Where MONAD sits beside Pale, MUON and HENA

[Pale](https://rawthoughts.in/pale/) (on RawThoughts) works within an explicit world model. [MUON](https://causality.in/muon/) and [HENA](https://causality.in/hena/) investigate how adaptive units and their collective organisation might change. Their practical questions can test MONAD's usefulness, while its mathematical definitions remain independent of those applications. [Economic transitions](https://post-agi-economics.org/collections/thinking-gets-cheap/from-abundance-to-a-changed-description/transition-dynamics/) (on Post-AGI Economics) pose a related question: when is a changed parameter enough, and when do the actors or relations themselves need to change?

<a id="availability"></a>

## Working with the source

The Lean library and paper require source access. The existing proofs hold under their stated assumptions. A downstream adaptive system still needs tests of its own behaviour.


Reading path: [MONAD](https://causality.in/monad/) > [Descriptions and repair](https://causality.in/monad/descriptions-and-repair/)


Source code for [MONAD](https://github.com/getHarshOnline/MONAD) is credited to [Harsh Joshi](https://getharsh.in/about/).
