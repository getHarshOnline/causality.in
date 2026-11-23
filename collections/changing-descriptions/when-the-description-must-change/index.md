Title: When the description must change

[Read HTML](https://causality.in/collections/changing-descriptions/when-the-description-must-change/)

Author: Harsh Joshi

<a id="when-the-description-must-change"></a>

# When the description must change

Suppose a model estimates every quantity available to it perfectly. We still cannot decide what to do. The missing answer concerns a relation its language never represented, so a better estimate has nowhere to put it. That failure asks more than another inaccurate prediction does: how can a system recognise that it needs another kind of description, rather than another value inside this one?

That is the larger question behind [MONAD](https://causality.in/monad/). Compression is one entry into it, because a summary makes an explicit choice about which distinctions survive. The programme asks how to follow that choice through changes in questions, allowed continuations and the description itself. It begins with sets and functions rather than assuming that every needed distinction is a coordinate in a vector space.

<a id="a-correct-answer-to-the-smaller-question"></a>

## A correct answer to the smaller question

Consider a small inventory system with two bits: `a` says whether a replacement part is available; `b` says whether it is compatible with a particular machine. A dashboard preserves only `a`. If the question is “is anything in stock?”, that is sufficient. A perfect predictor of `a` cannot answer “can this machine be repaired?” when repair requires both `a` and `b`. States `10` and `11` have the same dashboard answer and different repair answers.

There are several materially different ways this problem can arise. The compatibility information might still be in an accessible original record, so the dashboard hid it. The original might have been discarded, making repair impossible from the retained material. Compatibility might have existed in the old [carrier](https://causality.in/monad/descriptions-and-repair/#what-a-description-can-distinguish), the things the description represents, but never been an admitted question, one the summary was asked to keep answerable. Or the carrier might represent only stock counts, with no objects for machines, interfaces or compatibility relations at all. Asking for a new column in that last case actually asks for a different description of the situation. These failures should not all be called information loss.

The mathematical test is elementary and useful. Let $q:X\to S$ be the summary and $f:X\to Y$ a required question. The summary answers it exactly when there is a function $g:S\to Y$ such that

$$
f=g\circ q.
$$

If $f$ distinguishes two states that $q$ identifies, no such $g$ exists. That is the fixed-context [promise of compression](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/). Failure to factor establishes what this summary cannot answer; it does not yet tell us whether the remedy is another query, a refined summary or a richer carrier.

<a id="relevance-belongs-to-a-path"></a>

## Relevance belongs to a path

Two machines can have the same current stock and compatibility status but different maintenance histories. Suppose an overheating event leaves a required inspection before a replacement may be used. An inspection flag $i$ now matters:

| Description | What it can decide | What is still absent |
| --- | --- | --- |
| Stock bit $a$ | A part is available | Compatibility and inspection history |
| Pair $(a,b)$ | A compatible part is available | Whether an inspection is still required |
| Triple $(a,b,i)$ | Repair is allowed under this inspection rule | Which other historical consequences matter |
| Machine–part compatibility relation | Compatibility across several machines and parts | The rule for extending this relation as interfaces change |

The last row is not just another flag on the original dashboard. It introduces objects and a relation that a stock-only carrier did not express. Choosing which historical consequences deserve flags is also a modelling question, not an automatic consequence of adding storage.

Permitted continuations matter as well. A distinction irrelevant to a routine inspection may become decisive after an admitted upgrade. If a future question can separate states that the present summary merges, preservation must account for that possibility or state the limitation. “Future” here means the continuations considered in the problem, not tomorrow transmitting information into today. Restricting those continuations, allowing revision, retaining a recovery source or accepting a tolerance makes compression useful. Requiring exact answers to every separating future question would force an injective summary and leave no nontrivial collapse.

This joins four ambitions: admitting distinctions when the language is too small, compressing relative to meaningful continuations, accounting for preservation and recoverability, and following relevance along a trajectory. They constrain one another. A path cannot make a distinction relevant and then permit the account of preservation to ignore that the current representation cannot express it. The response may be refinement, a larger context or an explicit unresolved question; silently improving the score inside the old frame is not a response to that failure.

<a id="carrying-an-old-answer-into-a-new-description"></a>

## Carrying an old answer into a new description

A change of carrier needs a way to compare the two descriptions. Let $e:X\to X'$ transport an old state into a new carrier, and let $f':X'\to Y$ be a new question. On transported old states, the question is $f'\circ e$. An old summary $q:X\to S$ preserves that answer precisely when some $g:S\to Y$ satisfies

$$
f'\circ e=g\circ q.
$$

The obstruction is still concrete: find $x,y$ with $q(x)=q(y)$ but $f'(e(x))\ne f'(e(y))$. This detects where the old summary fails to carry the new question, relative to the chosen transport. It neither constructs $e$ nor justifies why those are the right states to compare.

For the two-bit inventory carrier, adding an inspection flag gives $X'=X\times\{0,1\}$. If a recorded history supplies the flag through $h:X\to\{0,1\}$, then $e(x)=(x,h(x))$ is a particular transport. But if the old state contains no history from which to determine inspection, $h$ is missing information, not a function we can recover by notation. Two extended states $(x,0)$ and $(x,1)$ have the same old projection and can give different repair answers. The added coordinate needs a source.

Introducing machines, parts and their compatibility relation goes further. A stock count does not specify which machine an item fits. There may be several richer descriptions above the same old count, with no preferred one. Here a relation between descriptions may be more appropriate than a single chosen map; answers and permitted continuations also need their own transport. Agreement after relabelling an answer is different from discovering a new distinction. The fixed-map criterion makes one comparison exact while leaving that larger choice of carriers, relations and changing question families open.

<a id="when-the-rules-of-change-become-objects"></a>

## When the rules of change become objects

A system can change a state, change the language describing that state, or change which transformations its descriptions permit. The third step makes the rules of change part of what the theory must describe. MONAD’s longer-term recursive goal lets transformations at one level become objects at another. The same problem then recurs: what does this higher-level description preserve, what can it no longer distinguish, and what would justify changing it?

That is more than adding another variable to an inventory record. It asks how a system can revise its representational possibilities while earlier judgments remain checkable or are explicitly marked as no longer portable. The theory does not become its own unrestricted judge. Each level still needs a stated comparison and a warrant for what it admits.

<a id="who-supplied-the-questions"></a>

## Who supplied the questions?

A preservation theorem is relative to its contract. It may establish that every admitted question survives and still leave out the question a person needed. This is why the origin and justification of the contract are part of the programme, alongside the mathematics of keeping it. A change to a description can propose a new question; it cannot establish the question's relevance simply by making itself answer it. The earlier [search for a vocabulary](https://getharsh.in/blog/an-analogy-can-start-an-argument/) began with that attraction to another way of seeing. The formal question gives the attraction a particular demand: which distinction became expressible, and what can we now do with it?

There is a further ambiguity even when a representation reconstructs every observation: [which factors did it recover?](https://causality.in/collections/changing-descriptions/which-factors-did-we-recover/) Different latent coordinates can explain the same observed distribution. A preservation contract needs a reason to call one coordinate compatibility, inspection or something else; reconstruction by itself cannot provide that meaning.

[Abstract interpretation](https://www.di.ens.fr/~cousot/AI/) supplies established ways to reason about sound approximation and completeness relative to properties of a system. MONAD's inquiry is not a replacement name for that machinery. The question is how such precisely understood fixed-context constructions behave when the carrier, question family and permitted changes themselves become objects of change. Where an existing construction answers the question, the useful outcome is an exact correspondence, not a claim of a new theory.

The challenge is to make inadequacy visible before it becomes a confident answer. A residual can prompt the question, but [surprise alone](https://causality.in/collections/composition-and-learning/what-should-a-surprise-change/) cannot distinguish noise from a missing variable or a language that has become too small. A calculus of changing descriptions would have to say what changed, where the new information came from, what earlier judgments still mean and which questions now demand another representation.


Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [When the description must change](https://causality.in/collections/changing-descriptions/when-the-description-must-change/)
