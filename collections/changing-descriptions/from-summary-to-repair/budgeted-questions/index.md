Title: What can you distinguish with one more move?

[Read HTML](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/)

Author: Harsh Joshi

<a id="what-can-you-distinguish-with-one-more-move"></a>

# What can you distinguish with one more move?

What does looking again add? An object may reveal nothing new from the same position, but one allowed move can bring another feature into view. Two states indistinguishable at a glance can separate during a short investigation. The observer's resources now belong inside the description of what it can know: the next view costs something, and paying for it changes which views remain possible.

Consider three bits `(a,b,c)`. The observer can read only the first position. It can also rotate the state to `(b,c,a)`, paying one unit per rotation. Reading is free in this toy model, and doing nothing is allowed.

With each affordable rotation, another coordinate becomes observable:

![Successive reads reveal a, then b, then c, dividing the same eight states into two, four and eight classes; each question mark denotes an unread coordinate.](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/observation-tree.svg)

Read the tree from left to right. The first column uses no rotation and reveals $a$; one rotation reveals $b$, and a second reveals $c$. The edge label is the newly read bit. The resulting two, four and eight classes divide the same eight states.

The state space did not grow. The accessible question family grew. At budget one, states $000$ and $001$ remain indistinguishable even though their third bits differ. After one rotation, the third bit sits one more paid move away.

<a id="spending-the-budget-changes-what-remains-possible"></a>

## Spending the budget changes what remains possible

Suppose two states agree on every observation reachable with budget two. After one rotation they must still agree on every observation reachable with the remaining budget one. Any such observation can be prefixed with the rotation to form a question already covered by the original budget.

Write $x\sim_B y$ when all observations affordable with budget $B$ agree. If an action $u$ costs $k\leq B$, then the residual-budget law is

$$
x\sim_B y\quad\Longrightarrow\quad u(x)\sim_{B-k}u(y).
$$

A separating continuation of cost at most $B-k$ would, when prefixed by $u$, separate the original states within budget $B$. That contradicts the premise. Reusing the full original budget after the move would smuggle in an extra resource allocation.

The example assumes deterministic total actions, state-independent non-negative costs and a declared set of observations. If an action sometimes fails, costs depend on the state or measurements disturb it, those features have to enter the model.

<a id="accessibility-is-different-from-retention"></a>

## Accessibility is different from retention

The observer might have access to the full three-bit state but currently lack the budget to inspect it. The bits are hidden from that observer's present protocol, not erased. Alternatively, a store might have retained only `a` and discarded `b` and `c`. Rotating that one-bit summary does not recreate the original state.

An archive or a fresh measurement could make the missing bits available. Its storage, access permission, transfer and latency are part of the repair. The distinction between “I have not looked” and “I no longer have it” is as important for a retrieval system as it is for this finite model.

<a id="more-resources-do-not-necessarily-mean-one-scalar"></a>

## More resources do not necessarily mean one scalar

Three-bit rotation uses one simple cost. Real investigations may be limited by memory, compute, bandwidth, trials and elapsed time. A procedure using less memory but more communication is not automatically cheaper. A larger allowance can bring another query within reach, but only if its source remains accessible.

A useful comparison first names which resources can substitute for one another, which are hard ceilings and which measurements actually require them. Otherwise a claim of greater distinguishability may merely have changed the accounting unit.

The broader [MONAD question](https://causality.in/monad/) asks how descriptions remain adequate as their admissible questions change. This example makes one part tractable: future questions can be indexed by a finite cost, and spending that cost changes the remaining comparison. The observer's representation is now tied to a protocol with an allowance, rather than to a glance treated as the whole investigation. Choosing among those reads introduces [repair cost](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/): an affordable first question may leave an expensive distinction unresolved.


## Article notes

<a id="gazette-notes-the-residual-budget-argument"></a>

## The residual-budget argument

Let $X$ be a finite state space. Each admitted action $a$ is a total deterministic map $T_a:X\to X$ with a state-independent cost $c(a)\geq0$. A word $w$ is a finite sequence of actions, $T_w$ applies them in sequence, and $c(w)$ is the sum of their costs. Include the empty word, with identity action and zero cost. Let $P$ be the set of observations the observer may make, its probes.

For a budget $b\geq0$, define

$$x\sim_b y\quad\Longleftrightarrow\quad p(T_wx)=p(T_wy)\text{ for every }p\in P\text{ and }w\text{ with }c(w)\leq b.$$

This is an equivalence relation: it is agreement on a family of functions. If $b'\leq b$, then $x\sim_b y$ implies $x\sim_{b'}y$, because every word admitted by the smaller budget is also admitted by the larger one.

Now apply an action $a$ with $c(a)\leq b$. Any word $w$ affordable afterwards has $c(w)\leq b-c(a)$. Applying $a$ first and then $w$ costs at most $b$, so the original equivalence gives

$$p(T_w(T_ax))=p(T_w(T_ay)).$$

Thus $T_ax\sim_{b-c(a)}T_ay$. If $q_b$ maps a state to its equivalence class, this defines a well-defined map between two different quotients:

$$\bar T_{a,b}([x]_b)=[T_ax]_{b-c(a)},\qquad q_{b-c(a)}\circ T_a=\bar T_{a,b}\circ q_b.$$

The change of quotient is essential. In the rotation example, `000` and `001` agree at budget one: both expose `a=0` and `b=0`. Rotate them to `000` and `010`. At a fresh budget one, the states differ because the next rotation exposes the original third bit. At the correct remaining budget zero, both still expose zero. Keeping budget one on the right side would grant a second paid rotation.

State-dependent costs require a model that carries the remaining resource state. Partial actions also require an explicit account of admission and failure. The proof above uses totality and a common cost bound to ensure that the same prefixed word is available in both states; it cannot simply discard those hypotheses.



Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [From summary to repair](https://causality.in/collections/changing-descriptions/from-summary-to-repair/) > [What can you distinguish with one more move?](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/)

Previous in journey: [Compression is a promise about questions](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/)

Next in journey: [The price of another question](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/)
