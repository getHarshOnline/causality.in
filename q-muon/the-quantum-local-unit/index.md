Title: The quantum local unit

[Read HTML](https://causality.in/q-muon/the-quantum-local-unit/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="the-quantum-local-unit"></a>

# The quantum local unit

Give a reasoning unit two sensor readings and ask how similar they are. [Q-MUON](https://causality.in/q-muon/) asks whether a quantum processor could do a task like this behind the same interface as a classical [MUON](https://causality.in/muon/) unit. [Q-HENA](https://causality.in/q-hena/) would connect multiple units into a quantum swarm.

<a id="a-local-unit-on-a-quantum-substrate"></a>

## A local unit on a quantum substrate

For the sensor task, a quantum feature map could encode each reading as a state. A circuit could estimate the overlap between those states through repeated measurements, giving a classical learner a similarity score. A fair comparison counts preparing both states, running the circuit and repeating the measurements.

That example uses a [kernel method](https://docs.pennylane.ai/en/stable/code/api/pennylane.kernels.kernel_matrix.html). Other tasks could use a circuit with adjustable gates. [Training](https://docs.pennylane.ai/en/stable/introduction/interfaces.html) would tune those gates against an objective measured from the circuit’s outputs. Quantum communication could let units exchange quantum states. Each is a candidate for research.

<a id="why-a-quantum-unit-keeps-muon-s-interface"></a>

## Why a quantum unit keeps MUON's interface

MUON’s draft interface covers inference, state, ordered records, resources and lifecycle operations. Keeping that interface would let a caller use a quantum unit without managing its gates. The developer manual in the [MUON repository](https://github.com/getHarshOnline/MUON) explains the five responsibilities.

A caller could receive the same kind of similarity score from either unit. It still needs to know whether that score helps on the task and whether it can swap in the new unit without disrupting its work. [Conformance, adequacy and substitution](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/) explains those checks.

<a id="what-would-make-a-quantum-unit-worth-using"></a>

## What would make a quantum unit worth using?

Compare a quantum candidate with a relevant classical alternative on the same task and at the same error tolerance. Count preparation, training, repeated measurement, noise, communication and recovery. A faster circuit can still produce a slower or more expensive answer.

For the sensor example, test whether the measured similarity helps the learner answer its task. If the candidate instead uses adjustable gates, first establish whether it can learn from the task objective. Then compare results and costs with a classical implementation. [The substrate comparison](https://causality.in/collections/composition-and-learning/quantum-comparison/) develops those alternatives.

<a id="state-and-recovery-need-their-own-meaning"></a>

## State and recovery need their own meaning

Suppose the sensor comparison stops halfway through. What would restarting the unit let you recover: its state, equivalent behaviour on the questions you can test, or only a new attempt? The proposed modes name those possibilities `exact`, `semantic` and `restart_only`.

A saved state format cannot answer that question alone. The backend and device topology matter, as do its calibration or noise model. So do the way the circuit was compiled and measured, the seed, the number of repeated measurements (shots) and the kind of replay being promised. A unit’s compatibility profile would identify these choices and the recovery mode it supports.

**Note**

**The recovery modes’ precise guarantees, schema and tests remain undefined.** A classical checkpoint cannot become a quantum checkpoint because its API has the same shape. A calibration change or new backend can also invalidate a recovery promise.

Q-HENA would need to respect each unit’s mode when recovering the swarm. [Recovery across a changing world](https://causality.in/collections/composition-and-learning/recovery-across-a-changing-world/) explains that collective problem.

<a id="muon-and-q-muon-stay-side-by-side"></a>

## MUON and Q-MUON stay side by side

MUON remains the classical path and owns the shared interface. Q-MUON would start from the corresponding MUON work before adapting it to a quantum backend. The programme keeps both paths for comparison.

<a id="availability"></a>

## Inspect the source

With source access, a developer can check the Rust crate, which re-exports [MONAD](https://causality.in/monad/) because the quantum unit is not implemented yet. The developer manual in the [Q-MUON repository](https://github.com/getHarshOnline/Q-MUON) explains the check and the proposed interface.


Reading path: [Q-MUON](https://causality.in/q-muon/) > [The quantum local unit](https://causality.in/q-muon/the-quantum-local-unit/)
