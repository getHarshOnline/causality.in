Title: HENA

[Read HTML](https://causality.in/hena/)

<a id="hena"></a>

# HENA

Can a warning read by one small unit reach another unit’s later decision? HENA asks whether a collective can learn which messages to send, what experience to keep and how to organise around a task.

[Follow a connector warning through the design](https://causality.in/hena/communication-and-memory/#a-local-view-can-miss-a-joint-fact). One unit reads that a replacement part has a different connector. Another gets the repair request much later. The experiment asks whether that warning survives the gap and changes the repair decision, through learned communication and memory rather than a route declared for every case.

<a id="from-arranging-a-system-to-learning-its-arrangement"></a>

## From arranging a system to learning its arrangement

[Pale](https://rawthoughts.in/pale/) (on RawThoughts) coordinates work through declared responsibilities and capabilities, while HENA asks how a division of work and a hierarchy could arise as units learn to solve tasks together, as [Causality’s About page](https://causality.in/about/) sets out.

- [Docs](https://docs.causality.in/hena/overview "Developer documentation") 

- [Learn](https://causality.in/hena/how-units-form-a-collective/ "Use-case guide and practical applications") 

- [GitHub](https://github.com/getHarshOnline/HENA "Explore on GitHub") 

- [Mentions](https://causality.in/hena/mentions/ "Writing that discusses or references this product") 

- [Licence](https://github.com/getHarshOnline/HENA/blob/main/LICENSE "Read the source licence") 

<a id="a-whole-answer-from-local-views"></a>

## A whole answer from local views

A long input can exceed what any one unit holds. In HENA’s design, each sees part of the input. Messages and memory carry a useful detail beyond the unit that first saw it. The design has to work within limits on compute, communication and memory.

1. 
   
   <a id="give-each-unit-a-local-view"></a>
   
   ### Give each unit a local view
   
   The input is streamed or encoded in parts. One unit receives the maintenance note while another sees the later repair request. Each begins with its own state and a partial view of the task.

2. 
   
   <a id="connect-what-the-task-needs"></a>
   
   ### Connect what the task needs
   
   Over several rounds, the units send messages, read from fixed-size memory and update their own state. The connector warning has to reach the right unit before it answers.

3. 
   
   <a id="form-the-collective-answer"></a>
   
   ### Form the collective answer
   
   A subset of units or the shared memory supplies the answer. Training judges its quality and counts the messages and time it took to produce it. The question is whether useful routes and a hierarchy emerge under those conditions.

<a id="questions-about-a-learned-organisation"></a>

## Questions about a learned organisation

Broadcasting the connector warning to every unit might get the right answer while spending the communication HENA hopes to save. Keeping it in memory helps only if the repair unit retrieves it in time and uses it correctly. The experiment needs to follow the warning all the way into the decision.

Compare the learned arrangement with a flat collective, a central coordinator, an imposed hierarchy and a single stronger unit under matched resources. A useful hierarchy should improve the complete task after communication and memory costs are counted. [What would count as emergent hierarchy?](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/) develops that comparison, including the possibility that the organisation adds no benefit.

## Collection contents

- [Why communication and memory are computation](https://causality.in/hena/communication-and-memory/)
- [How units form a collective](https://causality.in/hena/how-units-form-a-collective/)

<a id="questions-about-hena"></a>

## Questions about HENA

**What makes HENA different from orchestrating agents?**

Orchestration scripts who does what; HENA tests whether the units can learn that organisation themselves, deciding whom to message, sharing limited memory and forming a hierarchy that helps them solve a task. The first swarm coordinates existing open-weight models as its baseline.

**Would HENA replace Pale?**

HENA is Pale’s research successor in one limited sense: its learned organisation could take over some of the coordination Pale describes explicitly. Pale sits around the tools people already use; should HENA prove itself, Pale would stand to it as a harness stands to the model it runs, more guardrail than organiser, still governing permissions and resources and observing its work. In Harsh’s account HENA is an evolving swarm of MUONs that reasons about what could have happened, the third rung of the ACI framework in [Beyond the Mirage](https://causality.in/blog/beyond-the-mirage/); today’s products come first because they let agents see what a change would affect before they make it. HENA is a hypothesis under study, and how that would work remains open. HENA also stands on its own. [Causality’s wider question](https://causality.in/about/) explains that direction.

**Could it serve as a model behind a coding harness?**

A coding harness such as Claude Code or Codex could use a HENA-backed model as its model provider. The harness still decides which actions to allow and carries them out.


Source code for [HENA](https://github.com/getHarshOnline/HENA) is credited to [Harsh Joshi](https://getharsh.in/about/).
