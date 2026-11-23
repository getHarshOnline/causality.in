Title: What would count as emergent hierarchy?

[Read HTML](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/)

Author: Harsh Joshi

<a id="what-would-count-as-emergent-hierarchy"></a>

# What would count as emergent hierarchy?

An early cue reaches one unit; a much later request reaches another. Neither sees the whole stream. Somewhere between them, the cue has to survive, find a route and become part of the answer. Can the units learn an organisation that makes that happen, rather than relying on a designer to place the right connection in advance?

That is the constructive question in [HENA](https://causality.in/hena/). Sparse communication, limited memory and local rules give the units a way to interact; useful hierarchy would have to emerge through what those interactions contribute. A nested arrangement is easy to draw. The harder problem is discovering an arrangement whose changes help the task, and understanding why it helps more than a simpler one.

<a id="from-an-explicit-organisation-to-a-learned-one"></a>

## From an explicit organisation to a learned one

[Pale](https://rawthoughts.in/pale/) makes an organisation explicit enough to operate: responsibilities, capabilities, context and coordination are described and compiled. HENA’s architectural direction goes further. Could more of that organisation arise and evolve from intent through interactions among local units? The intended result is a collective model whose learned organisation carries part of its intelligence, rather than a fixed workflow arranging otherwise unchanged models.

This is why hierarchy matters beyond an attractive arrangement of nodes. Specialisation, memory and routes would have to become useful responses to what the collective is trying to do. A future HENA could stand alone; a surrounding harness could retain its responsibilities for external effects and resources while less of the internal coordination needed to be specified by hand. The cue example gives one small demand on that larger architecture.

<a id="the-work-happens-between-units"></a>

## The work happens between units

A concrete candidate gives each unit a local slice of input $\tilde x_i$, state $h_i$, neighbour messages $m_i$ and reads $r_i$ from a limited record store:

$$
h_i(t+1)=f_\theta\bigl(h_i(t),\tilde x_i(t),m_i(t),r_i(t)\bigr),
\qquad
m_i(t)=\sum_{j\in\mathcal N_i(t)}a_{ij}(t)g_\theta\bigl(h_j(t)\bigr).
$$

The neighbourhood $\mathcal N_i(t)$ and weights $a_{ij}(t)$ are subject to a routing policy. These are candidate update rules, not a trained HENA model. Their interest is that each unit's access is local while the task may require a relation distributed across several units.

Imagine a long stream containing a machine's maintenance cue near its beginning and a repair request much later. One unit processes the cue; another receives the request. The first has to preserve an interpretable record, the second has to reach it, and the answer has to use the relation between them. Sending every input to every unit avoids part of the problem by abandoning locality. Having a powerful central unit read the full stream can solve it by abandoning the many-unit explanation. A useful sparse composition would have to carry the relevant distinction through its actual messages and memory operations.

Each round can read records, exchange messages, update local state and write selected records before a subset produces an answer. The proposed objective combines task loss with communication and latency costs, and a declared term controlling routing entropy. The direction of that last term matters: discouraging uncertainty can collapse traffic onto one route, while encouraging dispersion can send irrelevant messages everywhere. A sparse graph is not a substitute for specifying what routing is meant to learn.

Consider an illustrative three-unit trace with only two retained-record slots. Unit A receives “machine 7 requires inspection” and writes a record carrying the machine identity and requirement. Intervening events compete for the second slot; retaining them must not silently evict the first. When B later receives a request to repair machine 7, it needs more than a generic “maintenance happened” message. A route through C can carry the key needed to find A's record, after which B can combine that record with the current request. Sending a key, reading its record and applying the inspection rule are three separate operations, each observable in the trace.

This trace suggests distinct ablations. Erase the machine identity while retaining the same-sized record and the matching relation disappears. Keep the record but disable the learned route, and the information survives without reaching B. Deliver the record but remove its influence on the answer, and retrieval succeeds while the task fails. These are constructed failure modes, not HENA results. They give a collective experiment something more precise to explain than an attractive cluster diagram.

There is an established constructive precedent for local learned rules. In [Growing Neural Cellular Automata](https://distill.pub/2020/growing-ca/), cells perceive a local neighbourhood and share a learned state-update rule; training shapes the resulting pattern, and different training regimes affect persistence and regeneration. That experiment shows how a local update can participate in a global process. HENA asks a different task question about reasoning, adaptive communication and limited records. The analogy suggests mechanisms to study, not a transfer of the cellular automaton's result.

<a id="sparse-edges-do-not-make-the-whole-computation-cheap"></a>

## Sparse edges do not make the whole computation cheap

Suppose $N$ units each send at most $k$ messages per round and interact for $R$ rounds. Then the send count obeys

$$
M\leq NkR.
$$

For 64 units, four outgoing messages and eight rounds, the ceiling is 2,048 sends. All-to-all communication without self-messages over the same eight rounds would make $64\times63\times8=32{,}256$ sends. The comparison holds the round count fixed; it does not silently compare eight sparse rounds with one dense round. Nor is a send count a runtime measurement: payload size, routing, memory access and inference remain part of the cost. If the rounds grow with $N$, an apparent scaling benefit can disappear.

The intended experiment must measure the whole answer, not only the sparsity of one adjacency matrix. A system can save communication while spending more compute searching for routes. It can save memory by forgetting the very relation the task requires. [Joint facts](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/when-pairs-agree-and-the-whole-differs/) are a simple way to make that failure visible.

A per-unit store with $K$ vectors of width $d$ has $Kd$ scalar positions; across $N$ units the raw vector state has $NKd$, before keys, provenance and indexing. Sparse selected edges do not make edge selection sparse: a router that scores all $N$ destinations per unit still performs a dense search before sending its few messages. Record lookup can have the same hidden cost. Measuring destination candidates examined, payload bytes, reads, writes and rounds alongside inference exposes where a proposed saving actually occurs.

<a id="organisation-has-to-change-the-answer"></a>

## Organisation has to change the answer

An imposed hierarchy gives the adaptive organisation something concrete to improve on. At the same task and budgets, the designer's best fixed hierarchy may already carry the needed relation efficiently; a flat organisation or a single unit may do so with less coordination. Those comparisons can reveal a contribution that a changing graph alone leaves invisible: the organisation has learnt a useful route, rather than merely learnt to redraw itself.

One possible question is whether units specialise into stable roles and route information to the right place under a changing workload. A topology can look orderly while contributing nothing to the answer. Removing its learned routing while preserving compute supplies a sharper contrast: if performance remains unchanged, the apparent organisation may be incidental. If performance falls, the task, routing decisions and communication cost reveal what the organisation contributed. Removing a useful unit asks a different question about how that contribution survives disruption.

The criterion cannot be invented after seeing the prettiest run. Nor should every successful cluster count as a new level of description. A nested coarse-graining simply forgets distinctions at successive levels unless a separate argument establishes what new question became expressible.

<a id="when-the-swarm-becomes-a-costly-single-model"></a>

## When the swarm becomes a costly single model

Suppose most requests eventually reach one strong unit. The other units might be useful filters, or they might merely add delay before the same model answers. The distinction appears when the strong unit runs alone at the same total budget. Similarly, a sparse swarm that needs many rounds can spend its communication saving on repeated inference, while shared memory can circulate a mistaken premise until the whole group agrees with it. Each case changes the account of where the computation happens: filtering may help the answer, repeated inference may consume its saving, and shared agreement may preserve an error rather than useful knowledge.

HENA's proposed first stock-model swarm would make those comparisons possible as an orchestration experiment. [MUON's shared slot](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/) would allow its units to vary while the task and resource boundary stayed fixed. A later differentiable architecture would ask how the units can learn routing and organisation together, with the stock-model comparison supplying a baseline. Useful specialisation, information that reaches the right place, and the cost of making that happen are the contributions that would give the learned organisation its meaning.


Reading path: [Composition and learning](https://causality.in/collections/composition-and-learning/) > [From unit to swarm](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/) > [What would count as emergent hierarchy?](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/)

Previous in journey: [Every pair can agree while the whole differs](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/when-pairs-agree-and-the-whole-differs/)
