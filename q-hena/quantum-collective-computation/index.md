Title: Quantum collective computation

[Read HTML](https://causality.in/q-hena/quantum-collective-computation/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="quantum-collective-computation"></a>

# Quantum collective computation

Suppose two [Q-MUON](https://causality.in/q-muon/) units need to perform one joint operation. Both would need capacity at the same time. If one unit had to start again, the collective would have to determine what work to repeat and which earlier observations it could still use. This design case illustrates [Q-HENA](https://causality.in/q-hena/), the proposal to explore [HENA’s](https://causality.in/hena/) swarm question with quantum units.

<a id="q-hena-asks-about-the-group-not-one-quantum-unit"></a>

## Q-HENA asks about the group, not one quantum unit

Q-MUON concerns one unit’s computation. Q-HENA concerns which contributions reach each other, what the group remembers and how it organises a response. The joint operation illustrates why the group needs its own way to allocate resources and recover work.

[Pale](https://rawthoughts.in/pale/) declares an organisation’s coordination explicitly where HENA asks how more of it could arise from intent, and Q-HENA asks what changes when that interaction involves quantum state, correlations and measurement; [Causality’s About page](https://causality.in/about/) sets out the comparison.

<a id="quantum-communication-and-collective-memory"></a>

## Quantum communication and collective memory

Q-HENA proposes quantum routing and communication, with memory mediated by entanglement. To turn that proposal into a mechanism, it must specify how state is prepared, which interaction occurs, what another unit can receive or measure and how the result contributes to an answer. Entanglement alone does not specify communication or storage.

The swarm would also keep operational records through [Reckon’s](https://causality.in/reckon/) record protocol. Those records would describe work and observations. They would not be copies of quantum state or proof that the state could be restored.

<a id="two-contributions-to-examine"></a>

## Two contributions to examine

A comparison must separate the contribution of quantum computation from the contribution of organisation:

| Question | Hold fixed | Vary |
| --- | --- | --- |
| What does the substrate contribute? | Task and organisation | Relevant classical and quantum unit candidates |
| What does the organisation contribute? | Task and substrate | Learned routing, an imposed hierarchy and simpler arrangements |

Count preparation, communication, measurement, memory, repeated interaction and failed attempts alongside local computation. Adding units is useful only if their interaction helps the task after those costs are counted. No quantum advantage has been demonstrated. [The emergence inquiry](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/) develops that question.

<a id="recovery-is-collective-too"></a>

## Recovery is collective too

In the joint operation, suppose A can resume from a checkpoint and B must start again. Recovering A’s local state would still leave an open question about the relationship between A and B. They might need to repeat their joint preparation or interaction. A change in the hardware’s calibration could also make earlier measurements unsuitable for the resumed run.

Q-MUON’s proposed recovery modes distinguish restoring the declared state and results within stated tolerances, recovering equivalent behaviour under stated observations, and starting again. Their exact meanings and schema are still to be published. Q-HENA would need to establish which combinations can continue a collective task, and repeat preparation or interaction where necessary. Expired resource allocations must be obtained again.

The developer manual in the [Q-HENA repository](https://github.com/getHarshOnline/Q-HENA) follows this problem through a proposed two-unit interaction. [Recovery across a changing world](https://causality.in/collections/composition-and-learning/recovery-across-a-changing-world/) explores why saved state alone is insufficient.

<a id="q-hena-stays-alongside-hena"></a>

## Q-HENA stays alongside HENA

Q-HENA would receive HENA’s classical progress and adapt it alongside Q-MUON. Both paths remain part of the programme. A quantum mechanism might help a particular task, lose its benefit once its full cost is counted, or leave the comparison inconclusive. Each result would inform the architecture without replacing the classical question.

<a id="availability"></a>

## Inspect the source

The repository contains a Rust crate that re-exports the MONAD, Q-MUON and Reckon kernels, and a draft paper; quantum swarm coordination is not implemented yet. Developers with the required source checkouts can check the crate in the [Q-HENA repository](https://github.com/getHarshOnline/Q-HENA).


Reading path: [Q-HENA](https://causality.in/q-hena/) > [Quantum collective computation](https://causality.in/q-hena/quantum-collective-computation/)
