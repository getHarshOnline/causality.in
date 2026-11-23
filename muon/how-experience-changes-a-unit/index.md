Title: How experience can change a unit

[Read HTML](https://causality.in/muon/how-experience-changes-a-unit/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="how-experience-can-change-a-unit"></a>

# How experience can change a unit

At noon a road notice should change the next route. At four the road might reopen. A useful unit would need to use the first notice when it matters and stop relying on it once conditions change. MUON studies four ways a proposed unit might respond, from updating its current state to trying a different structure.

<a id="remembering-a-closure-is-different-from-learning-a-rule"></a>

## Remembering a closure is different from learning a rule

Ask for the same route with and without the noon notice. If the route changes when it should, the earlier observation has affected this answer. Sending the question to a different expert helps only if that expert’s computation can use the notice.

Storing the observation solves another part of the problem: making it available later. It still needs to be retrieved at the right time and used well. Keeping a closure after the road reopens could make the answer worse. The useful question is what retaining it contributes to later work, including the cost of keeping and retrieving it.

Learning across episodes changes how the unit behaves on future tasks. Repeated errors might motivate an update to its parameters so it handles similar notices differently later. If the unit’s structure cannot connect a notice to the affected route, changing parameters may be insufficient. A different structure becomes a candidate to test.

| Change | What changes | How to tell whether it helps |
| --- | --- | --- |
| Temporal update | The state used for the current computation | Check whether an earlier cue changes the later answer appropriately |
| Retention choice | Which observations remain available | Compare later performance and storage or retrieval cost |
| Parameter learning | Learned behaviour across episodes | Check lasting improvement and effects on existing capabilities |
| Structural hypothesis | The unit’s proposed sparse organisation | Compare the candidate with the existing structure on the failure it should address |

Use a separate comparison for each change. Saving the noon notice can help an afternoon request even if the model’s parameters stay the same. To test learning, try new cases after the update and check whether the unit still handles the ones it already got right.

<a id="surprise-can-direct-attention-without-explaining-the-cause"></a>

## Surprise can direct attention without explaining the cause

An observation that differs from a prediction may deserve attention. The disagreement could come from noise, changed conditions, too few resources or a poor representation. Its size alone cannot distinguish those causes.

MUON gives surprise three possible jobs: adjust a learning rate, contribute to a retention score, or trigger a structural hypothesis for separate evaluation. Learning rates and scores would have finite limits. The store would choose what to retain, and a proposed structure would not replace the current one until it had been tested.

The signals need interpretation before they can do any of this. A gradient describes how an error score changes when a component’s representation changes; its magnitude is one possible measure of sensitivity. A distributional divergence measures a difference between probability distributions, such as predicted activity with and without earlier context. The two measures answer different questions and can have very different numerical scales. Adding their raw values could let the larger-numbered one dominate for no useful reason.

The design therefore calls for calibrating each signal to a finite value on a common scale between zero and one. The calibration must specify its reference data, weights and limits, including what happens outside the conditions used to set it. Otherwise changing numerical representation could look like changing importance.

The [surprise inquiry](https://causality.in/collections/composition-and-learning/what-should-a-surprise-change/) develops these mechanisms and their limits. [Computation, state and learning](https://causality.in/muon/computation-state-and-learning/) places them within the broader unit design; the developer manual in the [MUON repository](https://github.com/getHarshOnline/MUON) explains the interface that would let a surrounding system use such a unit.


Reading path: [MUON](https://causality.in/muon/) > [How experience can change a unit](https://causality.in/muon/how-experience-changes-a-unit/)
