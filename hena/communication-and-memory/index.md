Title: Why communication and memory are computation

[Read HTML](https://causality.in/hena/communication-and-memory/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="why-communication-and-memory-are-computation"></a>

# Why communication and memory are computation

One unit reads about a changed connector. Another later gets a request to repair the machine. HENA would give each unit part of the input, messages from a few neighbours and reads from limited memory. The proposed swarm would have to get the warning to the unit that answers.

<a id="a-local-view-can-miss-a-joint-fact"></a>

## A local view can miss a joint fact

Each unit's information can be accurate and still be insufficient. The relation between the part, the machine and the repair must reach the unit that forms the answer.

Broadcasting everything might solve the information gap, but spends the communication HENA seeks to save. Sending every question through a central unit creates a different bottleneck. The research asks whether learned routes can deliver the relevant contribution without every unit reconstructing the complete problem.

<a id="messages-change-who-can-contribute"></a>

## Messages change who can contribute

In each round, the proposed incoming message combines contributions from a set of neighbouring units:

$$m_i^t=\sum_{j\in N_i^t}a_{ij}^t\,g(h_j^t).$$

$N_i^t$ determines which units can contribute in that round. The weights $a_{ij}^t$ determine how their messages combine; $g(h_j^t)$ produces a message from a neighbour's state. Changing those routes or weights changes what the next update can use, even with the same external input.

More rounds can carry the cue further, but add latency and communication. A denser route may preserve the connector relation or bury it among redundant messages. The useful route must help the task within compute, communication and memory limits together.

<a id="memory-limits-make-time-part-of-the-choice"></a>

## Memory limits make time part of the choice

The early note must survive until the repair question arrives. In a fixed-size store, keeping it can displace something else. Retrieval must then put it where it can affect the answer. A saved note or a retrieval hit alone does not show that the answer used it correctly.

A text store could support the first stock-model swarm. The longer-term [trainable memory target](https://causality.in/hena/how-units-form-a-collective/#memory-can-learn-from-the-task) would let task errors guide memory access itself. HENA would keep this store and its history; [Reckon's](https://causality.in/reckon/) proposed record interface would let an evaluator examine them. The developer manual in the [HENA repository](https://github.com/getHarshOnline/HENA) explains these store responsibilities.

<a id="learned-hierarchy-needs-a-useful-collective-effect"></a>

## Learned hierarchy needs a useful collective effect

Repeated complementary routes could produce specialisation and larger structures. Test whether those structures improve what the collective can answer, what it remembers and the complete cost of its work. Compare a single stronger unit, a flat collective, an imposed hierarchy and a central coordinator.

The result might show that a route helps, that communication costs consume the gain or that the apparent hierarchy adds nothing beyond stronger units. [The emergence inquiry](https://causality.in/collections/composition-and-learning/from-unit-to-swarm/emergence-needs-a-comparison/) follows those comparisons through an example.

[How units form a collective](https://causality.in/hena/how-units-form-a-collective/) connects these choices to local unit learning, evolution and HENA's broader aim.


Reading path: [HENA](https://causality.in/hena/) > [Why communication and memory are computation](https://causality.in/hena/communication-and-memory/)
