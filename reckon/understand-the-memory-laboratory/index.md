Title: Understand the memory laboratory

[Read HTML](https://causality.in/reckon/understand-the-memory-laboratory/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="understand-the-memory-laboratory"></a>

# Understand the memory laboratory

A classifier can learn a new task and get worse at an earlier one. Keeping examples to practise again may help, but memory has a cost. How many examples should it keep, and which ones should it give up when it runs out of room?

[Reckon](https://causality.in/reckon/) lets you compare those choices. [Compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/) starts with one classifier, the same training data and room for either 2 or 16 examples. It takes you from running the comparison to reading the saved accuracy matrices. If you already have a run, [follow a record through its event log](https://causality.in/reckon/inspect-an-exported-run/) instead.

**Important**

**Local setup.** These guides use the local reckon source checkout and its Python environment. Follow [Set up the environment](https://docs.causality.in/reckon/installation#set-up-the-environment) if you need that prerequisite, then return to the comparison. The laboratory works locally.

<a id="a-memory-policy-should-earn-its-cost"></a>

## Choose what memory has to do

Remembering an early clue and practising an old skill put different demands on memory. Choose a task that presents the difficulty you want to study:

| Task | Memory challenge |
| --- | --- |
| Key and door | Remember an early cue until it becomes useful |
| Hidden-mode bandit | Respond when the reward-generating mode changes |
| Continual classification | Replay earlier examples while learning a new task |
| Tutoring simulation | Retain information about a simulated learner's misconceptions |

You can change how much memory the task receives, or change the rule that chooses what survives. Keep the other choice fixed when you want to understand its effect. In the replay example, both buffers discard the oldest retained example first, so the comparison asks about room for examples rather than which removal rule is better.

The [completed retention-policy comparison](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/) instead tests several rules on Tutor, Continual, scripted Conversation and TextWorld. It reports the controls and the cost of the extra experiments used to estimate record effects. Read those results when choosing a workload or deciding whether a more expensive rule is worth testing.

<a id="follow-a-record-through-the-laboratory"></a>

## Follow a record

The task decides what to remember. In the key-and-door task, it sees a colour near the start and writes that colour as a cue. At the door, it asks for the cue again. Reckon keeps the record's content and ID, its resource cost, where it came from and the scores a retention rule can use.

The saved log lets you follow the write and the later read. It can also show score updates and the removal that eventually makes room for another record. [Inspect an exported run](https://causality.in/reckon/inspect-an-exported-run/#follow-one-record-rather-than-a-score-alone) follows a real blue cue through those four events. The raw log does not contain everything about the record; richer exports can supply record details and relationships for the debugger.

Getting a record back is only part of the story. The task still has to use it to make a useful choice. To find out whether the record helped, compare the outcome with and without it. A write establishes that something was stored, a read that it was returned, and an outcome comparison tests what difference its availability made.

<a id="why-a-good-result-can-lower-a-score"></a>

## Why a good result can lower a score

After using retrieved records, the task reports an outcome through `observe()`. Reckon shares credit among those records and blends each share of the outcome into the record's previous utility. With the default update rate, the calculation is:

`new utility = 0.9 × old utility + 0.1 × credit × outcome`

The result stays within the configured bounds. Suppose a record's utility was 0.5, its credit is 0.33 and the outcome is 1. Its new utility is 0.483. The episode went well, but the record's assigned share was below its old estimate, so its score fell.

Python's `observe()` shares credit equally by default. Shaped credit instead turns the current utilities into positive weights and normalises them. Daemon callers choose their credit policy explicitly. These rules assign a share; they do not measure each record's individual effect. The [memory-manager guide](https://docs.causality.in/reckon/memory-manager) explains the alternatives and their inputs.

An early record may matter long after its last use, while a recent one contributes nothing. A score matters for survival only if the retention rule uses it. FIFO removes the oldest record and LRU the least recently accessed one. Importance uses a score supplied by the caller; learned utility ranks records by updated utility per byte. That remains a per-byte ranking even when a slot limit forces the removal.

The replay tutorial uses FIFO. It still updates utilities, but those updates do not change which examples FIFO removes. Its one episode ends after the utility update. When a run carries memory into later episodes, surviving records can be retrieved and scored again. To compare the removal rules themselves, use the [policy comparison](https://docs.causality.in/reckon/tasks-and-benchmarks) with matched tasks, limits and seeds.

<a id="what-a-measurement-means"></a>

## Test what made the difference

Start with the task's outcome: accuracy for the replay comparison, or reward for a task that reports reward. Keep the settings, results and activity log together. The log helps explain what happened during the run, but counting writes and removals does not tell you how well the task performed. The debugger's default frontier uses writes divided by writes plus removals and labels it as an operation proxy; read task accuracy from the saved result.

To find out whether remembering a cue helped the task, compare its outcome with and without that record. Reckon's evaluator waits until the first read that could return the chosen instance. It checks that both runs reached the same memory state and read boundary, then verifies that the record was actually removed in one of them. The task may later write the same fact again, so the comparison tests losing that instance rather than permanently forbidding the information. The [evaluation guide](https://docs.causality.in/reckon/evaluation-metrics#evaluation-protocol) explains how to set up the comparison and handle a target it cannot test.

Choosing what to discard raises another question: is it worth running extra trials to estimate which records matter? The measured retention policy copies the retained memory into fresh task episodes and compares outcomes with and without a candidate under a declared reference policy. Positive removal estimates contribute to the utility ranking; the report keeps the signed estimates, including zero and negative ones. Judge the resulting task performance alongside the extra trials and time needed to make those choices.

Those fresh episodes do not tell you what a different removal would do at the current write. For that comparison, the Conversation, MiniGrid and TextWorld notebooks can reconstruct the actual episode prefix and earlier removals, then compare removing a candidate with removing FIFO's choice. Both continuations use FIFO afterwards. The [notebook guide](https://docs.causality.in/reckon/notebooks) explains this path and the separate record-removal experiments, including how the controller and continuation rule limit the result.

Whichever comparison you choose, report the outcome difference, its uncertainty and the measurement cost. To call the difference causal, explain what changed, what stayed fixed and which assumptions make the comparison informative. [The cache example](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/) works through that reasoning.

<a id="four-roles-with-different-purposes"></a>

## Cases, evaluations and decisions beyond the laboratory

Reckon's wider [design for cases, evaluations and decisions](https://causality.in/reckon/cases-evaluations-and-decisions/) is the work in front: it preserves an experiment's inputs, compares a proposed change and keeps the decision its owner makes from the result, and none of it is built yet.

<a id="how-this-supports-adaptive-systems"></a>

### How Reckon relates to Scope and HENA

[Scope asks which permitted context helps a task](https://rawthoughts.in/collections/systems/context-that-helps-the-work/when-context-helps/). A passage being retrieved or quoted does not answer that question. Reckon tests a related one under a memory budget: what changes when a record or retention rule changes? A result on one workload can help Scope design a comparison for its own tasks; Scope still has to test what works there.

[HENA](https://causality.in/hena/) keeps its own swarm store and decides what to keep. It may keep it behind Reckon's record-store interface, designed and not yet published, so that Reckon can inspect and evaluate its records without HENA calling Reckon. Scope keeps only context derived from what Pale and Weave hold, and in the design requests evaluations through [Pale](https://rawthoughts.in/pale/understand-your-world/#use-connected-applications-for-their-own-strengths).

<a id="availability-and-local-operation"></a>

## Working with the code

The [developer manual](https://docs.causality.in/reckon/overview) covers building the Python/Rust library and extending the laboratory. The comparison and event-log guides do not need the daemon.

**Caution**

**The daemon has no caller authentication.** If you use it separately, keep it on a trusted local machine. It listens only on loopback and uses plaintext.

The daemon's `ExportRun` returns the latest record snapshots observed by a named run. For an event history in the debugger, use the logs saved by Python or a notebook: `ExportRun` does not include events, metrics or a complete evaluation bundle.


Reading path: [Reckon](https://causality.in/reckon/) > [Understand the memory laboratory](https://causality.in/reckon/understand-the-memory-laboratory/)
