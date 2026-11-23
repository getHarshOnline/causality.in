Title: Change the rule without moving the finish line

[Read HTML](https://causality.in/collections/composition-and-learning/changing-the-rule/)

Author: Harsh Joshi

<a id="change-the-rule-without-moving-the-finish-line"></a>

# Change the rule without moving the finish line

Imagine a search discovering a routing rule with a better score. Looking closer, the improvement came from no longer counting missed deadlines. The rule has changed the answer to an easier question, while the original jobs still wait. What kind of variation would let a system improve its way of working without losing the problem it was meant to solve?

Consider a toy search for a rule that routes jobs between two workers. One worker is faster for short jobs; the other handles long jobs more reliably. The objective combines completed work with a penalty for missed deadlines. A candidate which changes the routing threshold is a legitimate variation. One which drops missed jobs from the denominator changes the meaning of success. Both edits might increase the visible score, but only one addresses the declared problem. Protecting the denominator and the measurement procedure from anything the candidate may edit keeps that difference observable.

![A fixed workload passes through an editable routing candidate to a protected evaluator, with run feedback updating only permitted state.](https://causality.in/collections/composition-and-learning/changing-the-rule/what-can-change.svg)

The routing rule can change; the workload and the way success is measured stay outside the candidate's control.

The threshold may change which worker receives a job. Queue estimates may change within the state budget, and messages within the communication ceiling. The generator cannot supply easier jobs to a favoured candidate, and the evaluator continues counting every missed deadline. These boundaries make the candidate's extra expressiveness testable.

<a id="a-local-rule-has-a-collective-expression"></a>

## A local rule has a collective expression

One way to make the search concrete is to let a candidate specify a local update rule: how a unit responds to its inputs, which messages it sends and which bounded internal state it retains. The candidate is the rule; the pattern produced by many units interacting is its collective expression. Changing the rule may change traffic concentration, specialisation or recovery after a unit disappears, even when every unit runs the same code. A topology drawn in advance and a topology shaped by those interactions therefore answer different questions.

For the two-worker example, a richer candidate could use a small local state for recent queue pressure and send a bounded message when its own deadline risk rises. The behaviour emerges over a workload rather than existing entirely in the threshold's source text. It could reduce missed deadlines, oscillate between workers or turn communication into the bottleneck. Evaluating only the local rule on isolated jobs would miss those effects; evaluating its collective behaviour under one workload would miss its sensitivity to another.

One illustrative rule keeps an exponentially smoothed queue estimate $q_i$ at worker $i$:

$$
q_i(t+1)=(1-\alpha)q_i(t)+\alpha n_i(t),\qquad 0\leq\alpha\leq1,
$$

where $n_i$ is its current queue length. The worker sends a pressure alert when $q_i$ crosses a threshold $\kappa$. A short job normally goes to the faster worker, but a pressure difference exceeding $\tau$ sends it to the other one, subject to that worker's availability. The candidate $(\alpha,\kappa,\tau)$ changes the local response without changing what counts as a completed job. Queue state, alert size and alert frequency still consume the declared budgets. A stale neighbour estimate can make the rule oscillate, so message timing is part of its expression, not an incidental transport detail.

The genome in this small construction is the update and its parameters. Its phenotype includes the resulting routes, queues, alerts and deadline failures across a workload. A threshold that works on isolated arrivals may produce a burst of redirects when both workers receive congestion alerts together. That failure gives the next mutation a specific object to change: smoothing, alert timing or rerouting, rather than an undifferentiated demand for a higher score.

The research proposal limits what a candidate may edit. A mutation can vary a local update, a message decision or a parameter the experiment exposes, while the workload generator, resource accounting and outcome definition stay out of its reach. The first question is whether such variation discovers useful collective behaviour at all. Allowing the search to rewrite its own mutation machinery is another level of change, with another evaluator problem, rather than a free extension of the first experiment.

<a id="improving-one-niche-and-selecting-across-niches-are-different-operations"></a>

## Improving one niche and selecting across niches are different operations

Local improvement asks whether a small edit improves a particular rule under its existing conditions. Population selection asks which rules deserve further attention across different conditions. A diverse archive can preserve a rule that is excellent for long jobs even if another dominates the common short-job workload, but keeping specialists also changes what a leaderboard can mean. Incomparable niche scales make global ranking arbitrary; a single global score can instead erase the specialists the archive was meant to preserve. Local improvement and population selection therefore need different comparisons.

Causality proposes separating validation-gated edits inside a niche from selection across a population. The experiment would start with frozen mutation and evaluation machinery, candidates held within fixed limits and recorded ancestry, making it possible to compare local improvement with the population’s ability to keep useful specialists.

This mechanism has a place in the architectural programme. [MUON](https://causality.in/muon/) supplies the unit boundary against which a local rule is defined; [HENA](https://causality.in/hena/) would execute the rules and population dynamics. The aim is to discover useful organisation, including specialisation and routes that a designer did not prescribe for every case. What the search edits is the local rule inside a fixed experiment, not a live model’s architecture.

There is a nearby practical comparison in [changing an agent's procedure while keeping its model fixed](https://rawthoughts.in/collections/systems/making-a-working-world-intelligible/improving-the-system-between-runs/). SkillOpt uses trajectory feedback and validation to search in that text space. Its target helps locate the difference here: the proposed routing experiment varies a collective update rule, not just a procedure executed by one agent. A validation-gated search can supply a useful pattern without transferring its results to the new candidate or workload.

<a id="the-safety-control-is-also-a-research-variable"></a>

## The safety control is also a research variable

A frozen evaluator and an editable one create different experiments. In the routing example, allowing a candidate to drop missed jobs from its score exposes the temptation to improve the mark without improving the work. An independent count of completed jobs and missed deadlines can then reveal the exploit. That count must stay out of the candidate's reach, or the comparison loses the means to distinguish improvement from tampering.

Local selection adds another question. It can preserve useful specialists that a global average would discard, but a niche can also develop a locally convenient deception. The relation between locality and reward hacking is therefore an experimental variable, not a safety property conferred by distributing the population.

<a id="what-a-rejected-change-contributes"></a>

## What a rejected change contributes

A candidate's ancestry explains how it arrived, including revisions that made performance worse. A rejected routing rule can make a later search less wasteful when its workload, evaluator and failure remain identifiable. Its value is the specific contrast: this routing rule, under this evaluator and workload, performed worse. Remembering only that it lost says little about the next candidate, while an explanation of why it failed remains another hypothesis. Retaining both the result and that distinction lets a later search reuse the evidence without turning one failed proposal into a universal prohibition.

An ancestry record would distinguish a child that lowers $\tau$ from one that changes the alert policy, and keep the parent, edit, niche and comparison attached to each. If the first child improves short-job throughput but worsens long-job deadlines, it may be rejected in one niche and worth testing in another. If a later child also changes $\alpha$, the earlier result cannot be attributed to that new pair of edits. Rejected siblings are consequently part of the search history, not missing rungs on a straight ladder of winners. Search cost includes their trials too.

<a id="search-and-use-have-different-boundaries"></a>

## Search and use have different boundaries

A sandbox can let candidates vary aggressively without allowing each variation to replace a live component. The protected evaluator and its [separate evaluation coordinates](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/) give those variations something stable to answer to. A live change also needs the operator's decision; generating it is a different operation from using it.

The routing example makes the boundary concrete. A better completion rate can come from allocating work more effectively or from dropping missed jobs out of the denominator. Only the first improves the work. Letting the rule evolve is useful precisely because the independent count can still tell those outcomes apart.


Reading path: [Composition and learning](https://causality.in/collections/composition-and-learning/) > [Change the rule without moving the finish line](https://causality.in/collections/composition-and-learning/changing-the-rule/)
