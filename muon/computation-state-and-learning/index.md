Title: Computation, state and learning

[Read HTML](https://causality.in/muon/computation-state-and-learning/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="computation-state-and-learning"></a>

# Computation, state and learning

A unit learns that a road has closed. The next question asks for a route. Does the closure change the answer? [MUON](https://causality.in/muon/) uses questions like this to design how one unit could carry information forward and how a caller could compare two models doing the same work.

<a id="one-unit-and-a-collective-ask-different-questions"></a>

## One unit and a collective ask different questions

MUON asks what one unit needs to compute, remember and learn. If another unit received the notice, the question becomes how it would reach the unit making the decision. [HENA](https://causality.in/hena/) studies that kind of coordination. Test the unit’s answer and the way units work together separately.

<a id="local-computation-with-useful-temporal-state"></a>

## Local computation with useful temporal state

The long-term design is a micro-transformer unit: small enough to run in numbers, working from its own inputs and state. Units would exchange sparse messages rather than send everything through a central hub. Memory would be spread across units and their hosts’ stores, using a shared record protocol; each store would decide what to keep.

The road notice must have a path into the later answer. One candidate ingredient, selective state-space processing, updates a compact state as inputs arrive. Another, routed expert computation, chooses which expert computations to run. Combining them leaves a question: does the earlier state only choose an expert, or can it also change what that expert predicts?

Compare two designs that combine those ingredients. In the first, the state carrying the road notice affects only expert selection. In the second, it also has a direct path to the prediction. Give both the same notice, route question and available routes. If selecting a different expert still sends the traveller down the closed road, test whether the direct path changes that answer. This is a proposed comparison of the path information takes, not a choice between memory and routing.

Routing also needs a comparison of its own. Several learned transformations may depend on each other. Shared routing chooses experts for that group together; independent routing makes each choice separately. The design tests both rather than assuming that separately chosen parts will cooperate.

<a id="surprise-can-change-different-things"></a>

## Surprise can change different things

An unexpected observation could change the state used for the next answer, deserve storage for later retrieval, or contribute to learning across episodes. Repeated failures might also suggest a different structure. [How experience can change a unit](https://causality.in/muon/how-experience-changes-a-unit/) follows those possibilities through the road-closure example.

A surprising route answer tells you where to look. It could come from an old notice, a missed message or a model error. MUON would put its candidate [surprise signals](https://causality.in/muon/how-experience-changes-a-unit/#surprise-can-direct-attention-without-explaining-the-cause) on a common finite scale before using them to adjust a learning rate or score an observation for storage. A proposed structural change would need its own comparison. The [surprise inquiry](https://causality.in/collections/composition-and-learning/what-should-a-surprise-change/) works through how to test the cause.

<a id="one-interface-so-a-better-unit-can-replace-a-stock-model"></a>

## One interface, so a better unit can replace a stock model

The caller should be able to compare a new unit on the route task without rebuilding the application around that model. Stock open-weight models would fill the role first, through adapters for MLX, GGUF/llama.cpp, Ollama and Hugging Face. The later micro-transformer would answer through the same interface.

A common inference call is only part of what the caller needs:

| What the caller needs to do | What the unit would expose |
| --- | --- |
| Ask the route question and receive an answer as it is produced | Inference, including streaming |
| Inspect the state being carried forward or recover a snapshot | Declared state and snapshots |
| Follow the notice, answer and resource use through the run | Ordered records |
| Check whether the work fits and obtain capacity for it | Resource estimates, reservations and refusal when capacity is unavailable |
| Start the unit, advance it, recover or stop it | Lifecycle operations and checkpoints |

The caller also needs to know which model revision, tokenizer, quantisation and backend produced the answer, and which behaviours that version supports. The developer manual in the [MUON repository](https://github.com/getHarshOnline/MUON) explains how an adapter would report those choices and expose the interface.

Estimating the resources a request needs does not reserve them. An allocation example in that manual follows two requests that each fit a shared budget but cannot both spend it. Stock models would remain available as controls and fallbacks when another unit is tested.

<a id="why-many-small-units-are-worth-testing"></a>

## Why many small units are worth testing

The hope is that useful organisation can accomplish work otherwise done by a larger model. The comparison includes many identical units, one stronger unit, a mixture and no swarm, using the same tasks and resource ceilings. Model inference, routing, memory, verification, failed proposals and communication all count toward cost. A cheaper answer cannot win by missing the task’s minimum performance.

If the many-unit design loses, the system can keep the strongest single or mixed alternative behind the same interface. [Three tests for a reasoning unit](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/) explains why meeting an interface, being adequate for a task and replacing another model are separate claims. [Q-MUON](https://causality.in/q-muon/) takes the one-unit question to a quantum substrate.

<a id="a-possible-place-in-a-working-system"></a>

## A possible place in a working system

[Counsel](https://rawthoughts.in/counsel/) (on RawThoughts) is designed for local judgment within [Pale’s](https://rawthoughts.in/pale/) (on RawThoughts) compiled organisation, and a future MUON unit might serve a judgment role if it improves that work; [Causality’s About page](https://causality.in/about/) sets out the architecture MUON and HENA explore at those two scales.

<a id="availability"></a>

## Inspect the source

With the source checkouts, developers can compile the kernel crate in the [MUON repository](https://github.com/getHarshOnline/MUON). It re-exports [MONAD’s](https://causality.in/monad/) kernel, since the unit itself is not implemented yet.


Reading path: [MUON](https://causality.in/muon/) > [Computation, state and learning](https://causality.in/muon/computation-state-and-learning/)


Source code for [MUON](https://github.com/getHarshOnline/MUON) is credited to [Harsh Joshi](https://getharsh.in/about/).
