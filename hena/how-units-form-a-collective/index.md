Title: How units form a collective

[Read HTML](https://causality.in/hena/how-units-form-a-collective/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="how-units-form-a-collective"></a>

# How units form a collective

Imagine a maintenance note warning that a replacement part has a different connector. Much later, a repair request arrives. One small reasoning unit reads the warning; another gets the request. Can the first unit's experience change the second unit's answer?

[HENA](https://causality.in/hena/) is a proposed architecture for learning that coordination. Instead of one large model attending to the whole input, many small units would each see part of it, exchange a few messages and share limited memory.

<a id="memory-and-communication-are-the-architecture"></a>

## Memory and communication are the architecture

The connector warning has to survive the intervening input, stay associated with the right machine and reach the unit choosing the repair. Saving the note is only the beginning. A retrieved note might concern another machine; a correct message might arrive too late. The answer needs to account for the connector when deciding which work can proceed.

This gives us a path to investigate: where the cue enters, what keeps it available, how it reaches the later question and whether it changes the answer. Fixed-size memory means that keeping one item can displace another. Sparse communication means that every unit cannot receive every update. Learning what to keep and where to send it together could produce specialisation: some units perform particular computations, and recurring routes connect complementary work.

<a id="how-a-unit-updates-from-its-view-messages-and-memory"></a>

## How a unit updates from its view, messages and memory

Each unit would combine its local input with its current state, incoming messages and reads from memory. A candidate update is

$$h_i^{t+1}=f_\theta(h_i^t,\tilde x_i^t,m_i^t,r_i^t).$$

Here $h_i^t$ is the unit's current state, $\tilde x_i^t$ its local input, $m_i^t$ the messages it receives and $r_i^t$ what it reads from memory. The learned update $f_\theta$ produces its next state. The repair unit could therefore respond to the connector warning in a message or memory read even if the repair request itself says nothing about it.

Repeated rounds carry information beyond the first local view. A subset of units or the collective memory then supplies the answer. [MUON](https://causality.in/muon/) studies the individual unit; HENA studies how those units work together.

The target is to handle long sequences at less than quadratic cost while keeping or improving accuracy, context retention, compositional reasoning and adaptability. Compute, communication and memory each have a limit. Linear or near-linear processing and memory that does not grow with the whole input are targets to test.

<a id="memory-can-learn-from-the-task"></a>

### Memory can learn from the task

If the answer misses the connector warning, training should be able to improve how that relation survives and reaches the later decision. The longer-term target is **differentiable memory**: reads and writes that can learn from task errors alongside routing and unit updates. Saving and retrieving text alone does not provide that training path.

[Differentiable-memory research](https://deepmind.google/blog/differentiable-neural-computers/) demonstrates the general idea. HENA has not chosen a mechanism. An error at the answer may depend on several earlier messages, updates and memory operations; working out how it should change them remains open. [Communication and memory](https://causality.in/hena/communication-and-memory/) follows the cue through those choices in more detail.

<a id="evolving-local-rules"></a>

## Evolving local rules

The programme also asks whether changing local rules can produce better collective behaviour. Here a candidate is a set of local rules, kept as a rule document, edited and tested in separate trials. Its proposed evolution mechanism groups these candidates into *niches* according to a behaviour characteristic. Small edits improve candidates within a niche, while quality-diversity selection keeps useful alternatives across niches rather than reducing the whole population to one winner. Ancestry records retain the rejected candidates too.

Mutation and evaluation operators start fixed. That lets an experiment change a candidate without changing how it is judged at the same time. [Changing the rule](https://causality.in/collections/composition-and-learning/changing-the-rule/) develops this distinction.

<a id="what-would-establish-useful-hierarchy"></a>

## What would establish useful hierarchy?

The connector example needs a correct answer, delivered at an acceptable cost. A diagram of nested groups cannot tell us whether those groups learned to organise or whether they helped. Compare the learned arrangement with a single stronger unit, a flat collective, a central coordinator and an imposed hierarchy at matched resources.

HENA would keep its own swarm store and run history. [Reckon](https://causality.in/reckon/) would provide ways to inspect and evaluate records from that store.

The swarm might make correlated errors, lose a joint fact, route everything through one bottleneck, fill memory with noise, communicate too much or fail to train reliably. [Pairwise agreement](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/when-pairs-agree-and-the-whole-differs/) shows how units can agree in pairs while missing something that matters to the whole. [The emergence inquiry](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/) asks which interactions actually help.

<a id="from-a-working-baseline-to-the-native-architecture"></a>

## From a working baseline to the native architecture

The first planned swarm would coordinate stock open-weight models through MUON's unit interface. A unit built for MUON could later replace one of those models through the same interface. This gives the research a baseline against which to test learning from surprises, memory that learns from task errors and learned ways to divide the work.

The longer-term design would train the units, routes and memory together and test whether a useful hierarchy emerges. [Q-HENA](https://causality.in/q-hena/) explores the corresponding quantum architecture.

<a id="how-hena-relates-to-pale-s-explicit-coordination"></a>

## How HENA relates to Pale's explicit coordination

[Pale](https://rawthoughts.in/pale/) describes an organisation's responsibilities and coordination explicitly, and HENA asks how more of that organisation could be learned through local interactions; [Causality's About page](https://causality.in/about/) sets out how the two relate. HENA would need MUON's unit and [MONAD](https://causality.in/monad/)'s account of how a description can change, and that need grows as the system organises itself.

<a id="availability"></a>

## Inspect the source

With source access, developers can check the kernel crate in the [HENA repository](https://github.com/getHarshOnline/HENA), which re-exports the MONAD, MUON and Reckon kernels because swarm coordination is not implemented. They can also inspect what the kernel exposes; its developer manual covers the resource and recovery decisions an implementation would need to make.


Reading path: [HENA](https://causality.in/hena/) > [How units form a collective](https://causality.in/hena/how-units-form-a-collective/)
