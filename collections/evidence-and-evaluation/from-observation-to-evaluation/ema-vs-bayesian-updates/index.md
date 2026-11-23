Title: EMA and Bayesian updates for online scoring

[Read HTML](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/)

Author: Harsh Joshi

<a id="ema-and-bayesian-updates-for-online-scoring"></a>

# EMA and Bayesian updates for online scoring

A cue arrives before it is useful. Many observations later, it helps an agent choose the right door. The memory budget was too small to keep everything in between, so a retention policy had to make its choice before that outcome arrived. How should experience change the score attached to the cue, and how quickly should an old score lose its hold?

[Reckon's](https://causality.in/reckon/) laboratory uses an exponential moving average in particular utility-update paths. One scalar absorbs each credited observation with little work or storage. Following that update into the delayed-cue problem lets us examine both its attraction and the decisions hidden inside the credit it receives.

<a id="an-ema-decides-how-quickly-the-past-fades"></a>

## An EMA decides how quickly the past fades

The implemented form is

$$
u_{t+1}=(1-\eta)u_t+\eta c_t o_t,
$$

where $u$ is the stored utility estimate, $\eta$ the learning rate, $c$ the assigned credit and $o$ the outcome. The implementation clamps the resulting utility to configured lower and upper bounds; the first arithmetic illustration below remains inside zero and one, so clipping does not change its arithmetic. For a fixed scalar, this update uses constant work and storage. The laboratory’s default is $\eta=0.1$, with utility clamped to $[0,1]$. For the first arithmetic illustration, deliberately choose $u_0=0.4$ and the faster rate $\eta=0.25$:

| Credited observation $co$ | Old score | New score |
| --: | --: | --: |
| $1$ | $0.4$ | $0.75(0.4)+0.25=0.55$ |
| $0$ | $0.55$ | $0.75(0.55)=0.4125$ |

The arithmetic makes the estimate's response concrete, while leaving the origin of its credit unresolved: it does not show that the record caused the outcome.

Credit matters as much as decay. Giving a record credit in proportion to its existing score feeds the estimate back into itself. A smooth transformation may improve numerical behaviour without removing that circularity. The useful test is a matched comparison against alternatives, not the elegance of the recurrence.

<a id="delayed-usefulness-makes-credit-difficult"></a>

## Delayed usefulness makes credit difficult

Consider a constructed key-and-door task. An early observation says which of two doors will open later. Several irrelevant observations arrive between the cue and the door. The agent can retain only one record. Keeping the cue can improve the eventual choice even though nothing immediately rewards the write; retaining the latest vivid observation can destroy the only useful distinction. First-in-first-out and recency are informative controls precisely because delayed usefulness can disagree with both.

Credit assigned after success is still ambiguous. Suppose the agent retrieved both a key cue and a general navigation hint. Equal credit gives each half the outcome. Weighting credit in proportion to existing utility gives the already favoured record more evidence for being favoured. If utilities are `0.9` and `0.1`, the successful episode reinforces a nine-to-one allocation before the episode has shown which record mattered. The current laboratory’s SHAPED rule instead normalises $\log(1+e^{u_i/s})$ across retrieved records, with default scale $s=1$ and utility $0.5$ when a record’s utility is missing. For utilities $0.9$ and $0.1$, this gives shares of about $0.625$ and $0.375$, rather than nine to one. It softens the preference without establishing that either record caused the success. The [credit and memory-manager guide](https://docs.causality.in/reckon/memory-manager) explains the implemented rules and update path. Matched omission or substitution runs can supply a more informative contrast, provided they keep the task and alternative information access comparable.

The [completed Tutor, Continual, Conversation and TextWorld comparisons](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/) put the current policies beside their controls and full probe price. They test retention outcomes; the softplus credit transformation still needs its own matched comparison against equal credit.

The task also separates storing, retrieving and using. A cue kept in memory but never reached cannot help the answer. A cue retrieved and quoted may still be ignored by the policy. A successful answer might come from guessing. Measuring those events separately lets the outcome challenge the score rather than merely reward activity around the record.

<a id="a-calculator-result-keeps-receiving-credit"></a>

## A calculator result keeps receiving credit

An actual simulated conversation makes the distinction visible. In a recorded Reckon episode, the agent calculates $81 \times 35$ and stores the result, `2835`. The conversation moves on to a length requirement, a tone requirement and searches for information. The calculator result remains among the retrieved records, so it continues to receive a share of each turn’s reward.

This episode used first-in-first-out retention with 100 slots and finished with thirteen records, without pruning. It lets us examine scoring under ample memory; it does not establish that a selective policy kept the right things. The saved notebook follows one record through all seven updates and checks the episode’s full set of seventeen score updates against the recorded reads and rewards.<sup><a id="fnref-note-6f627365727665642d7472616365"></a>[1](#fn-note-6f627365727665642d7472616365)</sup>

| Step | Records retrieved | Recorded reward | Equal credit | Old utility | New utility |
| --- | --: | --: | --: | --: | --: |
| 1 | 1 | 0 | 1 | 1.500000 | 1.000000 |
| 2 | 1 | 0 | 1 | 1.000000 | 0.900000 |
| 3 | 1 | 0.5 | 1 | 0.900000 | 0.860000 |
| 4 | 2 | 0.5 | 1/2 | 0.860000 | 0.799000 |
| 5 | 3 | 0.5 | 1/3 | 0.799000 | 0.735767 |
| 6 | 4 | 0.5 | 1/4 | 0.735767 | 0.674690 |
| 7 | 5 | 3 | 1/5 | 0.674690 | 0.667221 |

The retrieved IDs, rewards and old and new utilities are saved observations. Equal credit is calculated from the source’s rule of dividing one among the retrieved records; the table rounds utilities to six decimal places. The notebook keeps the original precision and recomputes each update with $\eta=0.1$ and bounds $[0,1]$.

The first row shows the clamp at work. This adapter writes tool results with an initial utility of $1.5$. With a zero reward, the next value before clamping is $0.9(1.5)=1.35$, which becomes $1$ at the upper bound. The following rows carry that new value forward.

The final row is more surprising. The turn earns a reward of $3$, but five retrieved records share it. This record’s target is therefore $3/5=0.6$, below its previous utility of $0.67469$. Its score falls to $0.667221$ even after a positive reward. The simulator’s reward is a task score, not a probability of success.

The arithmetic is doing what the rule asks. What it has not established is whether the old calculation helped satisfy the later tone or length requirement. Retrieval membership gave it credit. A causal comparison would have to ask what changed when that record was unavailable, under a suitable alternative. The trace makes the scoring mechanism inspectable without resolving that harder question.

<a id="a-posterior-adds-a-model-not-automatic-certainty"></a>

## A posterior adds a model, not automatic certainty

A Bayesian alternative would specify what is being estimated, how observations arise and what prior assumptions apply, then update a posterior. A suitable model can carry uncertainty that a single moving average does not. A misspecified model can also produce confident answers about the wrong quantity.

For an elementary candidate, suppose $p$ is the probability of success when a particular cue is available under a fixed task policy. A $\operatorname{Beta}(1,1)$ prior and conditionally independent Bernoulli observations give

$$
p\mid s,f\sim\operatorname{Beta}(s+1,f+1),
\qquad\mathbb E[p\mid s,f]=\frac{s+1}{s+f+2}.
$$

Three successes and one failure give a posterior mean of $4/6$, rather than the raw fraction $3/4$.

**Note**

**This Bayesian comparison model is not an implemented scorer.** The model’s uncertainty concerns that availability-conditioned success probability, not the cue's causal contribution. Policy selection and an easier set of trials can bias the observations without violating the posterior arithmetic.

We can follow the same four binary observations through simple estimates. Let the sequence be $1,1,0,1$, take $u_0=0.5$, $\eta=0.25$ and full credit $c_t=1$ for the EMA, and retain the uniform Beta prior. A running mean supplies a baseline that uses no decay or prior:

| Observation | EMA | Running mean | Beta posterior mean |
| --: | --: | --: | --: |
| 1 | 0.625 | 1 | $2/3$ |
| 1 | 0.71875 | 1 | $3/4$ |
| 0 | 0.5390625 | $2/3$ | $3/5$ |
| 1 | 0.654296875 | $3/4$ | $4/6$ |

These methods are processing an availability-conditioned success trace here, not receiving causal credit. The comparison isolates their arithmetic before introducing a retention decision. Two records can have the same posterior mean and different numbers of observations, which changes posterior concentration; an EMA's current scalar does not supply that count. Conversely, a late zero immediately changes the EMA's weighting of all earlier observations. Neither behaviour establishes which estimate will keep the useful cue under a memory ceiling.

That simple model also treats the success probability as stationary. An EMA deliberately fades old observations; an undiscounted posterior accumulates them. When a hidden task mode changes, a score can remain confident in a cue that belonged to the old mode. A fair comparison must therefore declare whether adaptation comes from a fixed decay, a change model or another reset rule, and count the observations each needs to recognise the change.

<a id="the-budget-belongs-inside-the-test"></a>

## The budget belongs inside the test

The value of a retention policy depends on what it keeps within the memory and compute budget, including the cost of probing a record's usefulness. First-in-first-out, least recently used, random retention and simple importance rules are meaningful baselines. A delayed cue tests whether a record survives until needed; an occasionally observed hidden mode tests detection lag; a bounded replay buffer tests forgetting across tasks. A small tutoring simulation can ask whether retaining a student's specific misconception helps a later hint more than retaining a generic summary. These are different uses of memory, not interchangeable points on one leaderboard.

Storage cost changes the decision too. Ranking utility per byte can favour a small cue over a large history record, but a ratio-based greedy rule is only a heuristic when useful records interact or costs are indivisible. Two fragments might matter only together. And a probe that consumes another trial or model call spends part of the same budget whose allocation it is supposed to improve. A better estimate earns its place only when the decisions it supports repay that expense.

A removal contrast depends on [assignment, alternatives and measurement](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/) for its causal interpretation. If a run without the cue also changes the task or gives the agent another source of the answer, the contrast has changed more than the retained record. A responsive score cannot disentangle those changes on its own.

Reckon's completed retention comparisons now connect the implemented policies to measured outcomes and their probe price. Comparing shaped credit with equal credit, or a moving average with a separately specified posterior-based retention rule, remains another experiment. Those comparisons would ask whether a better account of a record's usefulness and uncertainty changes what the agent keeps enough to repay the work of estimating it.

1. 
   
   <a id="fn-note-6f627365727665642d7472616365"></a>
   
   Reckon, context-control episode recorded 15 November 2026, run `045229537dbf`, source `2f74405`, seed 42, simulated backend. The attached notebook retains the scoring fields from the first complete episode in `context_controls.jsonl`, with its source hash and the same-record joins. The [notebook guide](https://docs.causality.in/reckon/notebooks) explains the distinction between context controls and policy comparisons. [↩](#fnref-note-6f627365727665642d7472616365)


## Article notes



<a id="gazette-notebook-d64728721724a1bc2376d670cf5ba4fb76e837348b83456760598d3a4c24a87d--cell-0-one-record-through-seven-observed-updates"></a>

## One record through seven observed updates

A calculator result in Reckon’s simulated conversation was retrieved and scored seven times. Its utility moved from 1.5 to 0.667221. Following the actual reads, rewards and score updates makes the clamp and equal-credit rule visible.

This is the first complete episode in `context_controls.jsonl` from run `045229537dbf`, recorded on 15 November 2026 at source `2f74405`. The file’s SHA-256 is `f2bdee7009b1e7e7b40c108802489a3ef082f74431a1332d37af3f855c635d96`. It contains both the transcript and event stream for the same record IDs. This notebook embeds their scoring fields; it does not rerun the conversation.

The episode used FIFO, 100 record slots, seed 42 and the simulated backend with no fallback. It finished eight steps with 13 records and no pruning. It demonstrates scoring under ample memory, not a benefit from selective retention. Notebook source cell 27 fixes that control; the separate inspection episode and policy-comparison transcripts are not used here.

The adapter writes tool results with utility 1.5. On observation, `SIMPLE` credit divides one equally among the retrieved records, and the kernel applies `clip(0.9 * old + 0.1 * credit * reward, 0, 1)`. Rewards and retrieved IDs below are saved observations. Credit and the predicted next utility are calculated from the source rule.

Execution count: 1

```python
# Scoring fields selected from one complete retained episode.
# All 17 score updates are retained, not only the record shown in the table.
turns = {0: {'retrieved_ids': [], 'reward': 0.5}, 1: {'retrieved_ids': ['68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.0}, 2: {'retrieved_ids': ['68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.0}, 3: {'retrieved_ids': ['68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.5}, 4: {'retrieved_ids': ['e8983037-0b93-4df0-bdee-0ce15b9646c1', '68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.5}, 5: {'retrieved_ids': ['bea89efd-645d-434d-bd55-a72b56322a37', 'e8983037-0b93-4df0-bdee-0ce15b9646c1', '68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.5}, 6: {'retrieved_ids': ['b2056658-f826-4fe5-af0d-1e446f22963e', 'bea89efd-645d-434d-bd55-a72b56322a37', 'e8983037-0b93-4df0-bdee-0ce15b9646c1', '68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 0.5}, 7: {'retrieved_ids': ['29b5edb9-5e24-4ec2-a7d6-3b560e5c7360', 'b2056658-f826-4fe5-af0d-1e446f22963e', 'bea89efd-645d-434d-bd55-a72b56322a37', 'e8983037-0b93-4df0-bdee-0ce15b9646c1', '68849b1d-8ecc-41c3-8578-ab1008812ea7'], 'reward': 3.0}}
# Each update: event ID, step, sequence, record ID, old utility, new utility.
updates = [[5, 1, 2, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 1.5, 1], [8, 2, 2, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 1, 0.9], [12, 3, 3, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 0.9, 0.8600000000000001], [16, 4, 3, 'e8983037-0b93-4df0-bdee-0ce15b9646c1', 1, 0.925], [17, 4, 4, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 0.8600000000000001, 0.7990000000000002], [20, 5, 2, 'bea89efd-645d-434d-bd55-a72b56322a37', 1, 0.9166666666666667], [21, 5, 3, 'e8983037-0b93-4df0-bdee-0ce15b9646c1', 0.925, 0.8491666666666667], [22, 5, 4, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 0.7990000000000002, 0.7357666666666669], [26, 6, 2, 'b2056658-f826-4fe5-af0d-1e446f22963e', 1.5, 1], [27, 6, 3, 'bea89efd-645d-434d-bd55-a72b56322a37', 0.9166666666666667, 0.8375], [28, 6, 4, 'e8983037-0b93-4df0-bdee-0ce15b9646c1', 0.8491666666666667, 0.77675], [29, 6, 5, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 0.7357666666666669, 0.6746900000000002], [33, 7, 2, '29b5edb9-5e24-4ec2-a7d6-3b560e5c7360', 1.5, 1], [34, 7, 3, 'b2056658-f826-4fe5-af0d-1e446f22963e', 1, 0.9600000000000001], [35, 7, 4, 'bea89efd-645d-434d-bd55-a72b56322a37', 0.8375, 0.8137500000000001], [36, 7, 5, 'e8983037-0b93-4df0-bdee-0ce15b9646c1', 0.77675, 0.7590750000000002], [37, 7, 6, '68849b1d-8ecc-41c3-8578-ab1008812ea7', 0.6746900000000002, 0.6672210000000003]]
selected_record = "68849b1d-8ecc-41c3-8578-ab1008812ea7"
eta, lower, upper = 0.1, 0.0, 1.0
```

Execution count: 2

```python
import math
rows = []
for event, step, sequence, record_id, old, observed in updates:
    turn = turns[step]
    assert record_id in turn["retrieved_ids"]
    count = len(turn["retrieved_ids"])
    assert count == len(set(turn["retrieved_ids"]))
    credit = 1 / count
    reward = turn["reward"]
    before_clamp = (1 - eta) * old + eta * credit * reward
    expected = min(upper, max(lower, before_clamp))
    assert math.isclose(expected, observed, rel_tol=0, abs_tol=1e-14)
    if record_id == selected_record:
        rows.append((step, count, reward, credit, old, observed, before_clamp))
assert len(updates) == 17 and len(rows) == 7
assert [r[0] for r in rows] == list(range(1, 8))
assert all(math.isclose(a[5], b[4], rel_tol=0, abs_tol=1e-14)
           for a, b in zip(rows, rows[1:]))
print("All 17 recorded score updates match the same episode’s reads and rewards.")
print("The selected record has seven consecutive updates.")
```

stdout

```
All 17 recorded score updates match the same episode’s reads and rewards.
The selected record has seven consecutive updates.
```

Execution count: 3

```python
print("Step  Read  Reward  Credit    Old       New")
for step, count, reward, credit, old, new, before_clamp in rows:
    print(f"{step:>4}  {count:>4}  {reward:>6.1f}  {credit:>6.3f}  {old:>8.6f}  {new:>8.6f}")
print(f"First update before clamp: {rows[0][6]:.2f}; saved value: {rows[0][5]:.2f}.")
print(f"Last credited target: {rows[-1][2] * rows[-1][3]:.2f}.")
```

stdout

```
Step  Read  Reward  Credit    Old       New
   1     1     0.0   1.000  1.500000  1.000000
   2     1     0.0   1.000  1.000000  0.900000
   3     1     0.5   1.000  0.900000  0.860000
   4     2     0.5   0.500  0.860000  0.799000
   5     3     0.5   0.333  0.799000  0.735767
   6     4     0.5   0.250  0.735767  0.674690
   7     5     3.0   0.200  0.674690  0.667221
First update before clamp: 1.35; saved value: 1.00.
Last credited target: 0.60.
```

<a id="gazette-notebook-d64728721724a1bc2376d670cf5ba4fb76e837348b83456760598d3a4c24a87d--cell-4-what-changed-the-score"></a>

### What changed the score?

At the first update, the saved reward is zero. Multiplying the old utility of 1.5 by 0.9 gives 1.35; the upper bound makes the saved result 1.0. The clamp is doing real work here.

Later, more records share the outcome. The final turn records a task reward of 3, shared among five retrieved records. This record’s target is therefore 0.6, below its previous utility of 0.67469, so its score falls again to 0.667221. A positive reward need not raise every retrieved record’s utility. The reward is the simulator’s task score, not a probability of success; the utility is not a measured causal effect.

The record being followed contains the calculator result `2835` from `81 × 35`. It remains among the retrieved records while the conversation adds a length constraint, a tone constraint and search results. Equal credit is assigned by retrieval membership, not by a demonstration that the calculation helped satisfy a later constraint. That is precisely why a scorer trace and a causal evaluation answer different questions.

<a id="gazette-notebook-d64728721724a1bc2376d670cf5ba4fb76e837348b83456760598d3a4c24a87d--cell-4-source-and-reproduction"></a>

### Source and reproduction

The [memory-manager guide](https://docs.causality.in/reckon/memory-manager) explains retrieval and observation; the [notebook guide](https://docs.causality.in/reckon/notebooks) distinguishes controls and policy comparisons. At source `2f74405`, notebook cell 27 runs the FIFO 100-slot context controls and cell 33 saves them as complete results. The adapter calls `observe` with that turn’s reward and retrieval context; its default credit policy is SIMPLE. The kernel constants fix the learning rate at 0.1 and output bounds at zero and one.

The original notebook `04_agentic_conversation_simulator.ipynb` has SHA-256 `5cdc3f1f4189f441f658ac7df05a7aed8c2052f2e23be951ab8f4737b435203f`; its adapter `conversation.py` has SHA-256 `fd21368189b1e907139a0ecde40e8801b03a4a5fdd9368883c7ec55872b00c97`. Both match the saved source record. The saved rows allow the arithmetic to be checked without the laboratory or a model call. Agreement with those rows establishes this numerical reconstruction; it does not independently identify the binary loaded by the original process.





Reading path: [What does the measurement establish?](https://causality.in/collections/evidence-and-evaluation/) > [From observation to evaluation](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/) > [EMA and Bayesian updates for online scoring](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/)

Previous in journey: [Did the cache make it faster?](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/)

Next in journey: [Four questions behind a benchmark result](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/)
