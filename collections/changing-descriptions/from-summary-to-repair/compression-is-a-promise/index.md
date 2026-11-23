Title: Compression is a promise about questions

[Read HTML](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/)

Author: Harsh Joshi

<a id="compression-is-a-promise-about-questions"></a>

# Compression is a promise about questions

Yesterday's summary answered every question we asked of it. Today we need one more answer, and the summary gives two different situations the same name. It has not necessarily become inaccurate. Its earlier success concealed a choice about which differences were worth keeping. Can we locate that choice precisely enough to know what the new question needs?

Take four states, represented by two bits. Suppose the only question is whether the first bit is one. The summary $q(a,b)=a$ answers it perfectly:

| Original state | Summary $q$ | First-bit answer | Second-bit answer |
| --- | --: | --: | --: |
| $00$ | $0$ | $0$ | $0$ |
| $01$ | $0$ | $0$ | $1$ |
| $10$ | $1$ | $1$ | $0$ |
| $11$ | $1$ | $1$ | $1$ |

It keeps two classes, $\{00,01\}$ and $\{10,11\}$, instead of four states. Nothing relevant to the first question has been lost. The final column shows exactly what the summary cannot recover.

Now ask whether the second bit is one. The old summary cannot answer. Both `00` and `01` became `0`, but their answers differ. There is no function of that single retained bit which returns both answers correctly. More computation, a more persuasive explanation and a larger language model cannot repair this exact ambiguity from the same input alone.

<a id="the-question-family-defines-the-summary"></a>

## The question family defines the summary

Write a question as a function $f$ on the original states. It can be answered from a summary $q$ when some function $g$ satisfies

$$
f=g\circ q.
$$

For a surjective summary, this is equivalent to $f$ being constant on every group of states that $q$ merged. Necessity follows because equal summaries give $g$ the same input. For sufficiency, choose any representative of a summary class and return its answer; constancy makes the choice irrelevant. This is the small proof behind the promise.

The second bit existed before anybody asked about it. Making it relevant changed the question family, not the state space. A richer language capable of representing previously unavailable objects would pose a further problem; the two-bit example isolates the simpler change so that its consequence can be calculated exactly.

An agent's notes have the same vulnerability. They can be excellent for the task that produced them and inadequate for a new task. Understanding which answers they preserve lets the agent recognise that inadequacy before it turns an ambiguous record into a confident response. The missing distinction points towards what another read or measurement would need to supply.

A publication gives this a practical form. A listing can keep an article's title, description and address while leaving out its argument. That is enough to choose something to read. It is not enough to check a proof: two revisions can keep the same listing while one changes the crucial step. [Gazette](https://rawthoughts.in/gazette/) keeps the authored article as the source and derives the listing from it, so the reader can follow the address to the reasoning. The short description serves discovery; the retained article makes a deeper question answerable. If only the listing survived, no amount of searching those three fields would recover the missing step.

<a id="repair-needs-an-information-source"></a>

## Repair needs an information source

Several repairs are possible, and they have different costs. Retaining the original two bits preserves both answers directly; a supplement containing the second bit restores just the missing distinction. Measuring the original object again can supply that bit if the object still exists and the measurement is permitted. Without one of these sources, declining to answer preserves the boundary between an unresolved question and a guess presented as reconstruction.

In this example, preserving the ability to answer both coordinate questions requires distinguishing all four states. A binary supplement with two values suffices because each old summary class contains two states. This is finite alphabet accounting, not a coding theorem about an arbitrary stream, and it assumes the supplement's encoder had access to the original state.

The question sits near established mathematics of abstraction. [Cousot and Cousot's abstract interpretation](https://www.di.ens.fr/~cousot/COUSOTpapers/POPL77.shtml) studies computation through abstractions; an exact correspondence would locate which existing constructions a changing-question account can reuse and where its additional obligations begin.

An exact supplement and [a noisy observation](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/recovering-a-distinction-from-a-noisy-answer/) make different promises. A report can be informative while leaving both original states possible. Repeated measurements may reduce a decision's error, but improving the chance of being right is not the same as restoring the answer in every state.

<a id="the-future-cannot-be-unrestricted-for-free"></a>

## The future cannot be unrestricted for free

If every possible question separating every pair of states must remain answerable, a sufficient summary cannot merge any two states. Perfect future safety then removes nontrivial compression. A useful system must choose a restricted family, tolerate an explicit approximation, retain a repair source or accept that some later questions will remain unanswered.

The two-bit construction gives [the changing-description problem](https://causality.in/monad/) a small but useful starting point: a summary's failure can be identified as a particular unanswered question, and a repair can be specified by the distinction it must restore. With [budgeted continuations](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/), the future family also depends on what the observer can afford to do next. The summary and the remaining access together determine which promise can still be kept.


## Article notes

<a id="gazette-notes-the-missing-distinctions-inside-a-summary-class"></a>

## The missing distinctions inside a summary class

The essay's factorisation criterion identifies which answers survive a summary. For a family of questions, the relevant distinction is their joint answer signature, not necessarily the complete original state.

For a finite family of questions $F$, collect their answers into one signature:

$$s_F(x)=(f(x))_{f\in F}.$$

The coarsest sufficient summary identifies exactly the states with the same signature. A summary sufficient for $F$ must distinguish different signatures, but it need not distinguish states on which every question in $F$ agrees. Enlarging $F$ can split these classes without changing $X$.

<a id="gazette-notes-one-record-two-possible-exchanges"></a>

### One record, two possible exchanges

Imagine two requests, A and B, sent at times 0 and 1, followed by replies X and Y at times 2 and 3. The replies' contents do not identify their requests.

| Retained event times | History $h_1$ | History $h_2$ |
| --- | --- | --- |
| A at 0; B at 1; X at 2; Y at 3 | X answers A; Y answers B | X answers B; Y answers A |
| Did X answer A? | Yes | No |

The timestamp-only record is identical in both histories, while the answer to the relation question differs.

Write the retained record as $q(h)$ and the answer to that question as $f(h)$. Here

$$
q(h_1)=q(h_2),\qquad f(h_1)\ne f(h_2).
$$

No function of the retained timestamps alone can recover the answer for both histories. Increasing timestamp precision does not supply the missing reply relation. Adding a trustworthy relation can distinguish the histories without changing the measured intervals. In the essay's terms, the reply relation does not factor through the timestamp summary.

**Note**

**Drawing the dependency diagram cannot supply a fact omitted by the record.** The relation must come from somewhere: a protocol's reply identifier, retained contents that resolve the association, or an explicitly uncertain interpretation. A clearer picture can reveal what we need to learn before it can represent the exchange correctly.

<a id="gazette-notes-the-size-of-a-supplement"></a>

### The size of a supplement

Suppose the old summary $q:X\to Y$ is retained and an encoder, with access to $x$, may also retain a supplement $z(x)$ from a finite alphabet $Z$. To recover the complete original state, the pair $(q(x),z(x))$ must be injective. Within any one fibre of $q$, the set of states sharing a summary value (the essay's summary class), different states therefore need different supplement symbols. Consequently

$$|Z|\geq\max_{y\in Y}|q^{-1}(y)|.$$

For finite $X$, that bound is attained: enumerate each fibre and reuse the same supplement labels across fibres. The retained value of $q$ identifies the fibre, so labels need only be unique within it. A fixed-length binary supplement needs $k$ bits where $2^k$ reaches the largest fibre size.

For example, suppose seven original states have been grouped into fibres of sizes two and five. Five supplement symbols suffice to recover the original state: the two-state fibre uses labels 0 and 1, and the five-state fibre uses labels 0 through 4. The summary says which fibre those labels describe. Fewer than five symbols force a collision in the larger fibre. A fixed-length binary supplement therefore needs three bits, even though no fibre has eight states.

Recovering the full state is a stronger demand than answering one additional question $f$. For that narrower demand, states in the same fibre that give the same answer may share a supplement symbol. The minimum alphabet size becomes

$$\max_{y\in Y}|\{f(x):q(x)=y\}|.$$

If the new question is binary and both answers occur in each of those fibres, two symbols now suffice. Within a fibre, all states answering zero share one label and all states answering one share the other. For several new questions, replace $f$ by their joint signature. The maximum number of distinct signatures within a fibre determines the supplement alphabet. Adding each question's separate requirement can overcount, because their answers may be related.

**Note**

**What the count measures.** This is an exact finite alphabet count. It prices neither the acquisition of the original state nor a variable-length code under a probability law. If the encoder never had access to the distinction, allocating a larger alphabet cannot encode it.



Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [From summary to repair](https://causality.in/collections/changing-descriptions/from-summary-to-repair/) > [Compression is a promise about questions](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/)

Next in journey: [What can you distinguish with one more move?](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/)
