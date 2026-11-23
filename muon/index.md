Title: MUON

[Read HTML](https://causality.in/muon/)

Author: Harsh Joshi

<a id="muon"></a>

# MUON

A road closes just before a route request arrives. Can a small reasoning unit carry the notice into its answer? MUON studies how a unit uses earlier information and learns from experience. [Follow the route example](https://causality.in/muon/computation-state-and-learning/#local-computation-with-useful-temporal-state).

<a id="a-building-block-that-can-keep-learning"></a>

## A building block that can keep learning

A common interface lets the caller try an existing model first and test a unit that learns through the same calls. [HENA](https://causality.in/hena/) studies how several units work together.

- [Docs](https://docs.causality.in/muon/overview "Developer documentation") 

- [Learn](https://causality.in/muon/computation-state-and-learning/ "Use-case guide and practical applications") 

- [GitHub](https://github.com/getHarshOnline/MUON "Explore on GitHub") 

- [Mentions](https://causality.in/muon/mentions/ "Writing that discusses or references this product") 

<a id="experience-that-changes-the-next-computation"></a>

## Experience that changes the next computation

The road notice can change the next route, help with a later request or reveal a recurring mistake. [Follow what the unit does with each kind of experience](https://causality.in/muon/how-experience-changes-a-unit/).

1. 
   
   <a id="temporal-state-that-reaches-the-answer"></a>
   
   ### Temporal state that reaches the answer
   
   The unit combines the current question, earlier state and messages. The route it suggests should change when the road closes.

2. 
   
   <a id="experience-worth-retaining"></a>
   
   ### Experience worth retaining
   
   A unit marks the notice as useful. The store decides whether to keep it within its memory budget so a later request can use it.

3. 
   
   <a id="learning-across-episodes"></a>
   
   ### Learning across episodes
   
   Repeated mistakes change how the unit weighs notices in future tasks. Surprise adjusts the rate of learning within a stated limit.

4. 
   
   <a id="proposals-for-a-richer-structure"></a>
   
   ### Proposals for a richer structure
   
   If the same kind of error persists, researchers can try a change to how the unit routes computation. A separate comparison shows whether the change helps.

## Collection contents

- [Computation, state and learning](https://causality.in/muon/computation-state-and-learning/)
- [How experience can change a unit](https://causality.in/muon/how-experience-changes-a-unit/)

<a id="questions-about-muon"></a>

## Questions about MUON

**What exists today?**

Today the repository holds the slot contract as a draft and a kernel that builds on MONAD. A conformance suite, then adapters for open-weight models, are in front, and no unit runs yet.

**Is MUON an adapter around an existing model?**

MUON starts with adapters for existing open-weight models. A smaller model designed for MUON later uses the same interface for inference, state, records, resources and lifecycle.

**How does MUON relate to Counsel and Pale?**

MUON studies a learning unit for the scale of work where [Counsel](https://rawthoughts.in/counsel/) supplies local judgments within [Pale’s](https://rawthoughts.in/pale/) explicit organisation, and HENA studies how such units learn to organise collectively; [Causality’s About page](https://causality.in/about/) sets out how those directions connect.

**Does the design require many small units to win?**

No. The comparison includes many identical units, one stronger unit, a mixture and no swarm, with the full resource cost counted. A negative result can leave a useful unit interface and a stronger baseline.

**Where should I start?**

Start with the road notice. [Computation, state and learning](https://causality.in/muon/computation-state-and-learning/) follows it into the next route answer and lays out the comparison between different reasoning units. [Three tests for a reasoning unit](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/three-tests-for-a-reasoning-unit/) then explains why meeting an interface, being adequate for a task and replacing another model are separate claims.
