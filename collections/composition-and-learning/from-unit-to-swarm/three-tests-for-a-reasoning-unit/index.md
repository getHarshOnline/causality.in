Title: Three tests for a reasoning unit

[Read HTML](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/)

Author: Harsh Joshi

<a id="three-tests-for-a-reasoning-unit"></a>

# Three tests for a reasoning unit

Replace the model behind an interface and the caller still receives a valid reply. On a harder task, the answer fails; under load, the successful answer arrives too late. What did the shared interface let us preserve? It made the replacement possible, but a valid reply is only part of what the caller needs. The new model also has to do the task within the available time and resources.

[MUON](https://causality.in/muon/) starts with a unit slot: inference, declared state, ordered records, resource behaviour and lifecycle operations. Behind that boundary, its longer-term micro-transformer design asks how temporal processing, routed computation and distributed records could form a small reasoning unit. The interface lets those internals change without making their differences disappear.

The native unit is intended to be a local building block of an intelligence, not only a wrapper around a larger model. Its smallness makes organisation among units necessary: useful computation, experience and specialisation must combine through [HENA](https://causality.in/hena/) rather than be assumed to exist inside every part. The contract is meant to let units work together while each unit's architecture develops.

The state a unit carries from earlier inputs can contribute in two quite different ways. It can choose which of the unit's routed computations, its experts, runs, or it can carry information into the prediction itself. When a cue arrives well before the request that needs it, those two paths need separate tests: knowing which computation to select is not the same as preserving the cue that computation needs. A direct path from that state to the output, compared with a control in which the state only routes, would expose the distinction; [MUON's guide follows that comparison through a road notice](https://causality.in/muon/computation-state-and-learning/#local-computation-with-useful-temporal-state). Whether several dependent transformations share one routing choice is another design decision, separate from the question of whether the final unit fits its caller.

<a id="one-request-through-muon-s-unit-slot"></a>

## One request through MUON's unit slot

The proposed slot makes a request inspectable before the model runs. The caller declares its requirements: input shape, streaming, deadline, state and replay needs. A capability report identifies the exact model, tokenizer and backend and describes what the filler supports. Its estimate of this request's demand is then compared with fixed capacity and current availability. Those are five different things: a requirement is not a capability, an estimated demand is not capacity, and reported availability is not a reservation.

Only an atomic reservation gives the request a live allocation. Two callers may both see enough free capacity; admitting both on that observation alone would overspend it. A lease binds the allocation and its lifetime. Expiry or a failed reservation leads to a typed refusal, rather than an inference that silently consumes another caller's budget.

After admission, inference produces an output and may change the declared state. Ordered records connect input, output and resource events within an episode, step and sequence. A checkpoint captures the state according to its opaque, summary or typed descriptor; restoration must honour that descriptor's promise. Shutdown also belongs to the lifecycle and leaves a final record. This is the proposed dataflow that a stock filler would have to implement before its benchmark result could be interpreted as a MUON-slot result.

![The MUON slot compares caller requirements and filler capabilities, estimates demand, reserves a lease or refuses, then records inference and lifecycle events in a host-owned store.](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/unit-slot-and-dataflow.svg)

Requirements, capabilities, estimated demand, capacity and availability remain distinct; the reservation is the step that allocates resources. Checkpoint, restore and shutdown contribute records alongside inference.

The record protocol and the store are separate again. A host can retain its own unit records using shared semantics without calling a research evaluator. That permits different local memory designs to be compared through a common record boundary, rather than requiring every unit to surrender its history to one central service.

<a id="three-claims-three-questions"></a>

## Three claims, three questions

Conformance asks whether the component honours the contract. Does it really stream when it says it does? Does its checkpoint restore the declared state? Does it refuse work it cannot reserve resources for, rather than silently truncating it?

Task adequacy asks whether it meets a floor for a particular workload. Correct message shape does not answer that question. Nor does an accurate model identifier.

Substitution asks whether one component can replace another in a named context, under specified observations, tasks and tolerances. Two units might both exceed an accuracy floor but differ so much in latency or error distribution that only one fits a caller's needs. Opacity hides internals; it does not hide capability or erase differences.

<a id="count-the-work-around-the-model"></a>

## Count the work around the model

Consider a hypothetical workload with a total compute allowance of 100 units. Ten small agents use six units each. Their router uses fifteen, memory and verification use ten, and failed attempts consume another fifteen. That uses the full hundred. Reporting only the sixty units spent inside agents makes the swarm look cheaper by excluding forty units of its own work. The same accounting has to apply to the single stronger model, which also needs orchestration and verification. Count rejected proposals in both systems.

| Work in the hypothetical composition | Compute units |
| --- | --: |
| Ten units, six each | $60$ |
| Routing | $15$ |
| Memory and verification | $10$ |
| Failed attempts | $15$ |
| Whole answer | $100$ |

The intended experiment has four arms: many identical units, one stronger unit, a mixture of units and a no-swarm control. Compare them on the same tasks, with the same capability floor and resource ceilings. Compute, latency, energy and communication may still move in different directions; keeping those costs visible would show what one arrangement saves and what it spends in exchange.

<a id="a-losing-thesis-can-leave-a-useful-architecture"></a>

## A losing thesis can leave a useful architecture

If the many-small-unit arm loses after coordination is charged, the strongest admissible filler can still serve the slot. The interface remains useful even if the swarm thesis fails, because its contract lets the experiment change implementations without rewriting success criteria to protect a preferred result. Stock models would provide the first working controls; a proposed micro-transformer unit would have to earn its place later. Conversely, a swarm victory on one task would establish a reason to use that composition there, not a universal replacement for larger models.

The same discipline applies to a [quantum counterpart](https://causality.in/collections/composition-and-learning/quantum-comparison/). Preserving the outer contract establishes a common comparison boundary, not equal behaviour or quantum advantage. An interface is the beginning of a fair test, not its conclusion.


Reading path: [Composition and learning](https://causality.in/collections/composition-and-learning/) > [From unit to swarm](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/) > [Three tests for a reasoning unit](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/)

Next in journey: [Every pair can agree while the whole differs](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/when-pairs-agree-and-the-whole-differs/)
