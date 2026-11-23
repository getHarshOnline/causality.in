Title: Q-HENA

[Read HTML](https://causality.in/q-hena/)

Author: Harsh Joshi

<a id="q-hena"></a>

# Q-HENA

What happens to a shared computation when one quantum unit has to start again? Q-HENA investigates how quantum units communicate, share memory and organise their work. [Follow two units through recovery](https://causality.in/q-hena/quantum-collective-computation/#recovery-is-collective-too).

<a id="quantum-units-learning-to-work-as-a-whole"></a>

## Quantum units learning to work as a whole

[Q-MUON](https://causality.in/q-muon/) studies what one quantum unit can do. Q-HENA asks how several of those units route contributions, share memory through entanglement and learn how to divide a task. It carries forward [HENA’s](https://causality.in/hena/) work on classical coordination and recovery while exploring different ways for units to interact.

- [Docs](https://docs.causality.in/q-hena/overview "Developer documentation") 

- [Learn](https://causality.in/q-hena/quantum-collective-computation/ "Use-case guide and practical applications") 

- [GitHub](https://github.com/getHarshOnline/Q-HENA "Explore on GitHub") 

- [Mentions](https://causality.in/q-hena/mentions/ "Writing that discusses or references this product") 

<a id="quantum-interaction-carrying-a-collective-task"></a>

## Quantum interaction carrying a collective task

Imagine a task that needs one joint operation from two units. The design has to account for what each unit prepares, when both can act and which measurements help answer the task.

1. 
   
   <a id="prepare-local-contributions"></a>
   
   ### Prepare local contributions
   
   Each Q-MUON unit prepares its local input and state. A joint operation also needs enough capacity for both units at the same time.

2. 
   
   <a id="connect-the-quantum-units"></a>
   
   ### Connect the quantum units
   
   The collective chooses a route and specifies how the units interact. If one unit has to restart, the collective needs to determine which preparation or interaction to repeat.

3. 
   
   <a id="read-the-collective-result"></a>
   
   ### Read the collective result
   
   The measurements have to contribute to the answer. A comparison counts preparation, communication, measurement and repeated work alongside local computation.

<a id="questions-about-a-quantum-collective"></a>

## Questions about a quantum collective

An improved answer could come from the quantum computation, from a better division of work, or from both. The comparison needs to distinguish them:

| Question | Keep the same | Compare |
| --- | --- | --- |
| What does quantum computation contribute? | Task and organisation | Relevant classical and quantum units |
| What does the organisation contribute? | Task and substrate | Learned routes, an imposed hierarchy and simpler arrangements |

Follow each contribution through the units, channels and memory, counting preparation, measurement and repeated work. [The collective-computation guide](https://causality.in/q-hena/quantum-collective-computation/#two-contributions-to-examine) explains these comparisons alongside recovery. The classical architecture remains part of the programme.

## Collection contents

- [Quantum collective computation](https://causality.in/q-hena/quantum-collective-computation/)

<a id="questions-about-q-hena"></a>

## Questions about Q-HENA

**How do Q-MUON and Q-HENA differ?**

Q-MUON’s design concerns one quantum unit. Q-HENA’s design concerns how a group routes work, communicates, remembers and organises itself.

**Why retain both HENA and Q-HENA?**

They investigate collective intelligence on different substrates. HENA remains the classical architecture; Q-HENA explores what quantum channels, state and memory change without discarding the classical work. Q-HENA has not demonstrated a quantum advantage.

**Why does recovery matter to the architecture?**

Units may restore an exact state, return to behaviour equivalent under declared observations, or restart. A collective has to preserve the relationships its task needs across those differences, including preparation and work that must be repeated.

**Where should I start?**

[Quantum collective computation](https://causality.in/q-hena/quantum-collective-computation/) follows a joint operation between two units and what changes when one must restart. Developers can check the Rust crate in the [Q-HENA repository](https://github.com/getHarshOnline/Q-HENA), which re-exports its dependencies because quantum swarm coordination is not implemented yet.
