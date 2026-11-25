Title: Entropy and a learning mind

[Read HTML](https://causality.in/blog/entropy-and-a-learning-mind/)

Author: Harsh Joshi

<a id="entropy-and-a-learning-mind"></a>

# Entropy and a learning mind

A coffee mug can shatter into pieces. We do not expect the pieces to jump back together and become a mug. You do not need to be a physics or mathematics nerd to carry that expectation. Nerds have tools and labels for describing what you already find intuitive.

That familiar asymmetry led to a question I wrote about in January 2024. Could a neural network begin with a useful intuition about the problem it faces, rather than having to discover every regularity from scratch? And if it kept learning from a stream of feedback, what would happen to the special arrangement that carried the intuition?

The question connects an image from thermodynamics with learning. It is an analogy to investigate, not a thermodynamic law for neural-network weights.

<a id="what-the-mug-helps-us-see"></a>

## What the mug helps us see

One way into entropy is to count the microscopic arrangements consistent with a macroscopic description. In the equal-probability setting, Boltzmann's expression is $S=k_B\log\Omega$, where $\Omega$ is that count. Many microscopic arrangements can fit what we describe as the shattered mug; the familiar intact arrangement is more constrained. The count depends on the state and description being considered, so “disorder” is an intuition rather than a definition sufficient for every use of entropy.<sup><a id="fnref-note-656e74726f7079"></a>[1](#fn-note-656e74726f7079)</sup>

Think of a low-entropy arrangement as a special state, then ask why a system tends to leave it. The picture needs a system boundary and assumptions about its dynamics. The second law concerns total entropy for an isolated system; local order can increase while energy and entropy are exchanged with an environment. A refrigerator and a living organism do not contradict it merely by maintaining an organised part.

Still, the mug makes the temporal intuition vivid. We expect some changes in one direction and regard their reversal as extraordinarily unlikely under ordinary conditions. That expectation informs how we read a cause and its aftermath. It does not, on its own, supply a complete theory of causation.

<a id="begin-with-an-intuition-then-keep-learning"></a>

## Begin with an intuition, then keep learning

Imagine a large model whose initial weights or architecture carry a useful regularity about the task. Perhaps it begins with a bias that helps it recognise the relevant structure, instead of treating every possible pattern alike. The training then continues, in real time, as the system receives new observations and feedback.

The weights are an arrangement that makes some responses possible and others unlikely. Will continued adaptation preserve the useful intuition, refine it or wash it out?

An aligned prior could make learning more efficient. A mistaken prior could send the model towards a poor solution or make new evidence harder to absorb. Neither consequence follows just from giving the system more information. The initial arrangement, the task and the update rule interact.

Continued learning could spread those weights into a less special state, perhaps making the model more general. That is a hypothesis about learning dynamics, not something the second law establishes. A weight distribution needs a defined measure before we can speak precisely about its entropy; performance and that measure need not move together. Training also supplies an objective and repeated interventions, rather than leaving an isolated physical system to evolve freely.

<a id="losing-a-bias-and-losing-a-capability-are-different-changes"></a>

## Losing a bias and losing a capability are different changes

Suppose the initial intuition is helpful for yesterday's task and wrong for today's. Relaxing it might be learning. Suppose it is still needed, but the latest feedback overwrites it. Then the same movement away from the initial state might be forgetting.

This makes the question more interesting than whether the weights changed. What did the change let the model do, and what could it no longer do? Can it retain a useful old response while adapting to a new one? Does the cost of preserving the old capability prevent the new learning?

Continual-learning research already studies this problem through catastrophic forgetting and the balance between stability and adaptation. One example, elastic weight consolidation, slows changes to weights estimated to matter for earlier tasks.<sup><a id="fnref-note-6c6561726e696e67"></a>[2](#fn-note-6c6561726e696e67)</sup> It gives a concrete mechanism to compare with the early intuition; it does not establish that all useful knowledge occupies a neatly extractable part of a model.

Then there is irreversibility. Once training leaves a useful arrangement, will the process naturally return to it? A saved checkpoint can restore parameters, but that is an external recovery procedure, not the learning dynamics reversing themselves. Reaching the same performance later is another claim again: a different internal arrangement might solve the same test.

<a id="a-continuously-adapting-system-needs-a-continuing-comparison"></a>

## A continuously adapting system needs a continuing comparison

Complexity adds to the difficulty. A change in one part of a network can affect several tasks, and a stream of new feedback can change which skills matter. The model may improve on its immediate objective while losing a property that was important to the larger system. Continuous adaptation is both the attraction and the problem.

That makes monitoring more than watching a training loss fall. The comparison needs the useful behaviour we wanted to retain, the new behaviour we wanted to acquire, the resources spent on each and the conditions under which either stops working. Otherwise “more general” becomes a description we apply after the change without a test that distinguishes improvement from drift.

[MUON's account of experience](https://causality.in/muon/how-experience-changes-a-unit/) separates a changed immediate state, a retained record and learning across episodes. [Reckon's local laboratory](https://causality.in/reckon/) supplies a narrower experiment: compare memory rules or budgets on a stated task and inspect what was kept and what happened. They give connected questions forms in which a result can be inspected.

The earlier [geometry thought experiment](https://causality.in/blog/the-ineffable-geometry/) asked whether a better language could make causal relationships intelligible. [Beyond the Mirage](https://causality.in/blog/beyond-the-mirage/) later asks what evidence would distinguish causal understanding from successful association. This essay sits between them with a simpler question: can we build a system around useful intuitions without losing what made them useful as the system changes?

A mug's fate seems obvious. A learning system is less obliging. We have to define the special state, observe the change and test the capability. That is where the analogy becomes an experiment worth doing.

[The autocorrect paradox](https://rawthoughts.in/blog/the-autocorrect-paradox/) (on RawThoughts) approaches the problem through a decade of building AI products: why does a model keep getting almost good enough, and what work remains before it fits the task?

1. 
   
   <a id="fn-note-656e74726f7079"></a>
   
   David Tong, [Statistical Physics](https://www.damtp.cam.ac.uk/user/tong/statphys.html), lecture notes on statistical mechanics and thermodynamics. The counting expression requires its stated statistical setting; the learning analogy supplies no independent entropy law. [↩](#fnref-note-656e74726f7079)

2. 
   
   <a id="fn-note-6c6561726e696e67"></a>
   
   Kirkpatrick et al., [Overcoming catastrophic forgetting in neural networks](https://arxiv.org/abs/1612.00796), 2016 preprint, published in *PNAS* in 2017. The work tests a particular retention method, not universal recovery of earlier knowledge. [↩](#fnref-note-6c6561726e696e67)
