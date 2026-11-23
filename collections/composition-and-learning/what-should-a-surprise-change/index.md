Title: What should a surprise change?

[Read HTML](https://causality.in/collections/composition-and-learning/what-should-a-surprise-change/)

Author: Harsh Joshi

<a id="what-should-a-surprise-change"></a>

# What should a surprise change?

A predictor expects a quiet road and observes heavy traffic. The mismatch deserves attention, but it does not tell us whether a sensor is broken, the model is poor, the distribution changed or an omitted event blocked the road. Surprise identifies a failure of expectation, not the mechanism behind it. That distinction matters when a system uses surprise to change itself: a signal that deserves a memory write does not automatically deserve a parameter update, and neither automatically warrants a new variable or a structural edit.

<a id="keeping-an-event-is-not-learning-a-rule"></a>

## Keeping an event is not learning a rule

Three operations can follow the same residual: retaining an event for later inspection, adjusting a learned parameter using evidence across episodes, or proposing a change to the model's structure. Keeping the event preserves a particular observation; learning attempts to improve predictions beyond that observation; a structural proposal changes what the model can represent. Their risks and time scales differ because they alter different parts of the unit.

The [Titans paper](https://arxiv.org/abs/2501.00663) gives a technical example of learning a neural memory at test time using a memory-loss gradient as a surprise signal. Its mechanism connects surprise to a particular memory objective. A useful adaptation would need to specify what the unit can change, which evidence triggers that change and how the change affects subsequent tasks.

[MUON](https://causality.in/muon/) proposes studying surprise-driven learning inside a reasoning unit. The candidate controller would need to use the unit's actual state, measurements and update operations. A retention rule and a parameter-learning rule can then be compared on their own terms, rather than treating every response to the same residual as one learning mechanism.

For a local construction, let $h_t$ be temporal state and $M_\phi$ a candidate adaptive memory. It predicts a target $v_t$ from a key $k_t$, using a memory loss

$$
L_t=\tfrac12\lVert M_\phi(k_t)-v_t\rVert^2.
$$

The gradient $\nabla_\phi L_t$ has a specific object to update. A candidate step $\phi_{t+1}=\phi_t-\eta_t\nabla_\phi L_t$ attempts to improve that key-to-target association. It is not a gradient of a global causal graph, and its norm measures sensitivity of this loss, not the event's importance to every later task. This illustrates a mechanism to compare, rather than an implemented MUON memory.

A prediction head would have to consume $h_t$, a memory read, or both for the stored distinction to reach the output. If a closure cue changes only which of the unit's routed computations, its experts, is selected, the unit can still forget which road is closed. A matched routing-only control keeps that choice while removing the direct state contribution; a frozen-memory control keeps the architecture while removing adaptation. Their errors reveal different parts of what the candidate memory does.

<a id="scale-can-masquerade-as-importance"></a>

## Scale can masquerade as importance

Suppose one proposed signal has two components: gradient magnitude and distributional divergence. Adding their raw values is arbitrary. Multiplying the loss by a constant can enlarge the gradient term without supplying stronger evidence that anything important changed.

A bounded controller can instead calibrate each component against a fixed reference, transform it into a finite dimensionless value between zero and one, and combine those values using non-negative weights summing to one. If the transformed values are `0.8` and `0.2`, equal weights give `0.5`; weights `0.25` and `0.75` give `0.35`. The weights express a policy, not a discovered truth about the event.

Calibration also needs an answer for inputs outside the reference distribution. Clipping limits numerical damage; it does not make an unfamiliar input understood. Rejecting non-finite values and bounding an update prevents one class of instability without proving the chosen update is useful.

<a id="three-responses-to-one-signal"></a>

## Three responses to one signal

Suppose the calibrated aggregate is $S=0.5$. A candidate learning-rate rule is

$$
\eta(S)=\operatorname{clamp}\!\left(\eta_{\mathrm{base}}[1+\alpha\tanh(\beta S)],\eta_{\min},\eta_{\max}\right).
$$

With $\eta_{\mathrm{base}}=0.01$, $\alpha=1$, $\beta=2$ and allowed rates from $0.005$ to $0.02$, it gives approximately $0.0176$. This is a larger step within a specified range. The parameter update still needs a loss, a gradient and a choice of parameters allowed to adapt. Saturation limits the rate; a sufficiently large or misdirected gradient can still make the update harmful.

A memory response answers another question. A clipped logit followed by a sigmoid can assign a bounded priority to the event using surprise, estimated usefulness and age. If the score passes a retention threshold, the owner of the record store may keep it. A road closure may be worth remembering for the next route even if one episode is insufficient evidence for changing a general traffic model. Forgetting the event and declining to learn a new rule are therefore different decisions.

A structural response is slower again. Persistent error might suggest a missing event variable, a different expert connection or a richer representation. Crossing a threshold nominates such a hypothesis for comparison; it does not make the edit true. These three time scales create a useful design: attention now, adaptation across observations, and structural search when the existing account keeps failing. They also give an experiment something to separate. Retention alone, bounded parameter adaptation and separately evaluated structural proposals can be tested against a fixed unit on the same changing stream.

| Response | What changes | What later observations can test |
| --- | --- | --- |
| Retain the closure report | Which event remains available | Whether another route decision uses it |
| Update traffic-model parameters | Predictions within the existing representation | Whether held-out traffic predictions improve |
| Propose a closure variable | What the model can express | Whether the richer account explains cases the old one cannot |

The same road event can justify examining all three without making them interchangeable updates.

<a id="different-explanations-predict-different-failures"></a>

## Different explanations predict different failures

A sensor fault should leave evidence in the consistency of the measurements, while a model fitted on newer data may respond differently to a changing traffic distribution. A residual that persists across matched conditions poses a different problem from one tied to a particular setting. An omitted event variable becomes a useful candidate when adding it improves the account on held-out cases, rather than merely explaining the surprising observation after the fact. These comparisons gather different evidence; the initial residual establishes none of their conclusions.

A structure-changing system therefore needs a proposal boundary. Crossing a surprise threshold may nominate a candidate edit. An independent comparison decides whether the edit improves the task without violating protected behaviour. The signal cannot both propose the explanation and certify it.

The sharper question is whether the failure arose inside an adequate representation or because [the representation cannot answer the required question](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/). Noise, model error, drift and lost information demand different repairs. Surprise keeps the inquiry open long enough to discover which one we have.


Reading path: [Composition and learning](https://causality.in/collections/composition-and-learning/) > [What should a surprise change?](https://causality.in/collections/composition-and-learning/what-should-a-surprise-change/)
