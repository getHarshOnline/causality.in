Title: What did selective memory buy?

[Read HTML](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/)

Author: Harsh Joshi

<a id="what-did-selective-memory-buy"></a>

# What did selective memory buy?

A memory policy can spend more time discovering which record to keep than the task spends using it. That is what makes the first completed [Reckon](https://causality.in/reckon/) comparisons interesting. Measuring record removal sometimes improved the outcome over learned utility. In one classification workload it still lost to using no memory. In a text-game diagnostic it matched the simpler first-in-first-out policy's wins while paying for thousands of extra replays.

The research question is whether a limited memory can retain what measurably changes an answer, at a price worth paying. A positive difference answers only part of that question. The outcome, the comparator, the measurement process and its cost have to travel together.

<a id="what-the-policies-were-allowed-to-remember"></a>

## What the policies were allowed to remember

These experiments compare nine policies. No memory discards each new admission before it can be retrieved; full memory has enough capacity to avoid pruning in the declared workload. The limited policies choose which record to discard by age (FIFO), last use (LRU), seeded randomness, an explicitly supplied importance score, learned utility, Diversity (which favours coverage across record types), or measured retention. Full capacity is a reference, not a claim that storing more always improves the answer.

Learned utility updates a record's score from credited outcomes. Measured retention mixes that utility with a bonus for a positive record-removal estimate, per byte. The experiments retain negative and zero estimates even though the ranking gives only positive estimates that bonus. A comparison between these policies therefore tests the implemented mixture; it does not isolate measurement from utility or establish that every useful record received the right score.

Tutor and Continual copy the current memory into fresh task episodes, then compare keeping it with removing a named record under a FIFO reference policy. Their probes do not continue the live student's or classifier's hidden state. Conversation and TextWorld instead reconstruct the actual episode prefix and earlier removals, compare FIFO at the pending write with removing a candidate first, then continue both under FIFO. The FIFO baseline may itself remove that candidate. These are different interventions, not interchangeable estimates of a record's universal value.

<a id="small-tutoring-gains-had-a-large-price"></a>

## Small tutoring gains had a large price

The Tutor workload starts with six misunderstood concepts and asks six questions in a session. Each of 256 fresh outer seeds supplies five episodes with carried memory. The outcome is the fraction of those misconceptions cleared, averaged within the seed. At two slots, measured retention clears 33.320% on average, versus utility's 32.982%; at four, the figures are 36.823% and 36.068%.<sup><a id="fnref-note-7475746f72"></a>[1](#fn-note-7475746f72)</sup>

The paired gains are 0.339 and 0.755 percentage points. Their declared 97.5% intervals are 0.037–0.640 and 0.421–1.089 points. Both exclude zero under the two-comparison correction, but lie wholly below the five-point effect used to plan the sample. That planning value was an analyst's detectability target, not an accepted threshold for adoption.

At two slots, fifty seeds improve, 180 tie and 26 worsen. At four, 74 improve, 157 tie and 25 worsen. The average preserves a small positive effect while the paired outcomes show how unevenly it occurs. Acquiring those measurements used 5,790,720 additional probe episodes across the two measured arms. A small gain can be statistically distinguishable and still leave its practical value unanswered. [Four questions behind a benchmark result](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/) reads this Tutor confirmation for what can be repeated, who judged it, what supports its interpretation and what it left untested.

<a id="classification-improved-against-utility-and-lost-against-no-memory"></a>

## Classification improved against utility and lost against no memory

The Continual workload trains a small classifier across three tasks, with replay opportunities for retained examples. The confirmation uses 64 fresh seeds, each averaged over three carried episodes. At two slots, measured retention reaches 85.556% accuracy, utility 83.108%, and no memory 87.135%.<sup><a id="fnref-note-636f6e74696e75616c"></a>[2](#fn-note-636f6e74696e75616c)</sup>

Measured retention gains 2.448 percentage points over utility, with a corrected interval of 1.739–3.156. Against no memory it loses 1.580 points, with interval −2.193 to −0.967. Both declared contrasts exclude zero, in opposite directions. Reporting only the first would turn an improvement over one weak comparator into a misleading account of the whole experiment.

All one-slot limited policies produce identical seed outcomes because a new admission leaves only one retained candidate to remove. The measured policy nevertheless pays for probing that sole candidate. At two slots it has a real choice, and its probes reach carried records, yet it takes about 1,408 times utility's inclusive elapsed time on this machine. The result points towards the representation, replay rule and comparison workload as objects to investigate, rather than making selective memory valuable by definition.

<a id="literal-recall-shows-a-gain-but-the-other-controls-still-matter"></a>

## Literal recall shows a gain, but the other controls still matter

Conversation uses an eight-step scripted controller whose final answer is scored for literal constraint recall. Across 256 fresh outer seeds, measured retention improves over utility by 6.185 points at two slots and 4.883 at four. The corresponding corrected intervals are 4.045–8.325 and 3.016–6.749 points.<sup><a id="fnref-note-636f6e766572736174696f6e"></a>[3](#fn-note-636f6e766572736174696f6e)</sup>

At two slots, however, LRU recalls 24.349% on average, compared with measured retention's 16.927%. At four, measured retention reaches 77.604%, utility 72.721%, and LRU 71.745%. Full memory recalls everything; no memory recalls nothing. The declared tests establish the two comparisons against utility. The other means describe the tested alternatives without supplying additional significance tests or a universal ranking.

The measured arms add 26,972 replay episodes and take about 74 and 117 times utility's inclusive time. The controller is scripted, and the endpoint is literal recall. A gain here does not measure the reasoning quality of an arbitrary language model.

<a id="a-text-game-diagnostic-exposes-another-limit"></a>

## A text-game diagnostic exposes another limit

The later TextWorld diagnostic uses sixteen fresh generated games and a repaired controller that follows visible instructions and retrieved action history. Full memory wins fifteen of sixteen. Measured retention wins one at two slots and three at four, matching FIFO's complete score vectors. Random retention wins four games at four slots; utility wins zero and two.<sup><a id="fnref-note-74657874776f726c64"></a>[4](#fn-note-74657874776f726c64)</sup>

These are descriptive outcomes, with no confirmation test or confidence interval. The measured policy improves over utility by one seed at each budget, adds 10,672 replays, and takes about 266 and 469 times utility's recorded inclusive time. Early timings overlapped other local work, so those ratios are observations of that run rather than an isolated hardware benchmark.

Capacity and language both matter. The normal third instruction needs the goal and two earlier action records; two slots cannot hold all three. Four slots can, but repeated descriptions and inventory compete for that allowance. Two generated quests need only two actions despite the three-command generation setting. In this diagnostic, even full memory failed one case because the controller misread an insertion instruction. Another full-memory win took seventeen commands after an earlier instruction-grounding failure. The parser now separates the requested action from clauses describing completed prerequisites. Regression checks cover those two parsing repairs.

Of 5,336 candidate-removal pairs, five have positive signed effects, three negative and 5,328 zero. The negative cases retain an especially useful distinction: removing a candidate lets the FIFO continuation win, but the main ranking removes a different record. The recorded effects expose something the default scoring rule does not exploit. A zero final-score effect also need not mean that intermediate actions were unchanged or that the record is irrelevant under every continuation.

A subsequent [four-game development](https://docs.causality.in/reckon/notebooks#select-a-live-prune-with-an-episode-replay) used the repaired parser to compare that default rule with an optional rule that selects a removal when its measured continuation improves on FIFO. At four slots the optional rule won one game; default measured retention, FIFO and utility won none. Seeded random won the same game. Every limited policy scored zero at two slots, while full memory won all four games in three actions each. The two measured rules together added 5,408 replays. The optional rule's one improving selection kept the goal for the next action, then lost it before the third; its eventual win came through a six-action fallback. This development compares selection rules under the repaired controller. It does not isolate the benefit of repairing the parser, and four games with the same wins as random do not confirm a general retention gain.

<a id="put-measurement-on-the-same-bill"></a>

## Put measurement on the same bill

The counts below belong to the measured arms. Each row's elapsed time already includes its probes or replays. Adding the two time columns would charge that work twice.

| Workload | Slots | Main episodes | Extra probe or replay episodes | Inclusive seconds | Probe or replay seconds |
| --- | --: | --: | --: | --: | --: |
| Tutor | 2 | 1,280 | 2,096,128 | 2,087.329 | 2,086.370 |
| Tutor | 4 | 1,280 | 3,694,592 | 4,253.775 | 4,252.780 |
| Continual | 1 | 192 | 113,792 | 301.467 | 301.022 |
| Continual | 2 | 192 | 246,528 | 618.282 | 617.819 |
| Conversation | 2 | 256 | 10,356 | 17.000 | 16.673 |
| Conversation | 4 | 256 | 16,616 | 30.840 | 30.464 |
| TextWorld | 2 | 16 | 3,912 | 1,028.318 | 1,024.377 |
| TextWorld | 4 | 16 | 6,760 | 1,803.517 | 1,799.584 |

Those are episode-execution timings. Saving and checking the result files adds work outside them; TextWorld's game preparation is also separate. Store byte and slot counts describe retained record payloads, not process memory or every probe's working storage. The full policy outcomes, seed spreads and costs are in the notes; the saved notebook recomputes the reported gain and cost comparisons from the retained summaries.

<a id="what-a-useful-next-comparison-has-to-preserve"></a>

## What a useful next comparison has to preserve

These findings give the laboratory a real answer to build on. Tutor and Conversation establish gains against their declared utility comparators. Continual establishes a gain against utility and a loss against no memory. TextWorld provides diagnostic cases where a simpler policy gets the same wins for far less work. Changing the workload, controller or retention rule can be worthwhile precisely because those differences now have identifiable causes to investigate.

A revised method needs a separately declared comparison on fresh cases, with the old adverse and null outcomes still visible. The [three-seed FIFO replay-budget example](https://causality.in/reckon/compare-replay-budgets/) asks a separate question about capacity; it is not a confirmation of these policy results. Nor do memory-path controls whose policies all retain the current cue establish useful ranking among those policies.

The stronger question is whether a policy improves the answer under a common total resource allowance, including the work spent deciding what to remember. Until that comparison is made useful, an expensive measurement is evidence to understand, not a reason to deploy its winner.

1. 
   
   <a id="fn-note-7475746f72"></a>
   
   Reckon, Tutor confirmation completed 15 November 2026, result `eef872b88357`, source `3d3aea6`. The [benchmark manual](https://docs.causality.in/reckon/tasks-and-benchmarks#confirm-the-declared-tutor-comparison) identifies the fixed protocol, all 256 seeds and retained results. The analysis unit is a seed's mean over five episodes; the inner probes use fresh FIFO-reference tasks. [↩](#fnref-note-7475746f72)

2. 
   
   <a id="fn-note-636f6e74696e75616c"></a>
   
   Reckon, Continual confirmation completed 16 November 2026, result `7e2728490cc1`, source `adad858`. The [benchmark manual](https://docs.causality.in/reckon/tasks-and-benchmarks#confirm-the-continual-comparison) preserves both primary contrasts, 64 seed means over three episodes, and full measurement cost. [↩](#fnref-note-636f6e74696e75616c)

3. 
   
   <a id="fn-note-636f6e766572736174696f6e"></a>
   
   Reckon, Conversation confirmation completed 16 November 2026, result `df3d0053c39f`, protocol source `e60a4a2`. The [notebook guide](https://docs.causality.in/reckon/notebooks#select-a-live-prune-with-an-episode-replay) distinguishes the 256-seed confirmation from calibration and earlier read-boundary ablations. Each candidate has one deterministic replay pair; inferential intervals concern outer-seed policy differences. [↩](#fnref-note-636f6e766572736174696f6e)

4. 
   
   <a id="fn-note-74657874776f726c64"></a>
   
   Reckon, TextWorld retention diagnostic completed 16 November 2026, result `6676e6a9ecd8`, source `dc90275`. The [notebook guide](https://docs.causality.in/reckon/notebooks#select-a-live-prune-with-an-episode-replay) preserves the sixteen cases, controller limits and complete costs. These games use live environments and a scripted controller, with no model call or hidden solution. [↩](#fnref-note-74657874776f726c64)


## Article notes

<a id="gazette-notes-how-to-read-the-complete-comparison"></a>

## How to read the complete comparison

Each table retains every policy and budget in that experiment. Means and sample standard deviations are fractions, so multiply by 100 for percentages. The independent unit is an outer seed: five-episode means for Tutor, three-episode means for Continual, and one episode per seed for Conversation and TextWorld. The no-memory and full-memory controls run once per seed, rather than once for each limited budget. A dash means the control has no two/four-slot label; it does not mean zero slots were measured after a transient write.

Inclusive time already contains probe or replay time. All times are seconds summed over that row's main episodes, observed on the experiment's machine. Artifact writing and verification lie outside the per-policy timers; TextWorld game preparation also lies outside these rows, and early TextWorld timings overlap other local work. Store peaks measure record accounting, not process RAM or the working memory of all probes.

The main article reports only the predeclared inferential comparisons. These full-policy tables are descriptive; ranking the means supplies no additional significance tests. The three confirmations use paired outer-seed t comparisons with two 97.5% intervals and Bonferroni-adjusted p-values per declared family. That relies on the stated independence and distributional approximation. TextWorld is a sixteen-game diagnostic with no inferential test. The five-percentage-point planning targets belong to sample design, not an adoption rule.

<a id="gazette-notes-tutor-fraction-of-misconceptions-cleared"></a>

## Tutor: fraction of misconceptions cleared

Result `eef872b88357`, completed 2026-11-15; 256 outer seeds.

| Policy | Slots | Mean | Seed SD | Extra episodes | Inclusive seconds | Probe or replay seconds |
| --- | --: | --: | --: | --: | --: | --: |
| none | — | 0.303385 | 0.080990 | 0 | 0.851647 | 0.000000 |
| full | — | 0.392708 | 0.104657 | 0 | 0.879167 | 0.000000 |
| fifo | 2 | 0.330208 | 0.079862 | 0 | 0.837373 | 0.000000 |
| fifo | 4 | 0.363281 | 0.086252 | 0 | 0.802140 | 0.000000 |
| lru | 2 | 0.332292 | 0.082175 | 0 | 0.779956 | 0.000000 |
| lru | 4 | 0.363021 | 0.089951 | 0 | 0.838830 | 0.000000 |
| random | 2 | 0.334245 | 0.080218 | 0 | 0.786722 | 0.000000 |
| random | 4 | 0.361458 | 0.086414 | 0 | 0.844231 | 0.000000 |
| importance | 2 | 0.331901 | 0.080698 | 0 | 0.814985 | 0.000000 |
| importance | 4 | 0.360026 | 0.089317 | 0 | 0.839667 | 0.000000 |
| utility | 2 | 0.329818 | 0.079982 | 0 | 0.771983 | 0.000000 |
| utility | 4 | 0.360677 | 0.088309 | 0 | 0.845557 | 0.000000 |
| diversity | 2 | 0.329818 | 0.079982 | 0 | 0.763506 | 0.000000 |
| diversity | 4 | 0.360677 | 0.088309 | 0 | 0.814638 | 0.000000 |
| measured | 2 | 0.333203 | 0.080602 | 2,096,128 | 2087.328619 | 2086.369952 |
| measured | 4 | 0.368229 | 0.091833 | 3,694,592 | 4253.775390 | 4252.780472 |

Each row has 1,280 main episodes. The measured rows use 256 paired fresh-task probes per candidate. Current memory is copied into each FIFO-reference task; the intervention removes the candidate only in one arm. The source keeps all signed effects. Its per-decision candidate correction is separate from the outer policy comparison and does not cover every adaptively reached decision simultaneously.

<a id="gazette-notes-continual-classification-accuracy"></a>

## Continual: classification accuracy

Result `7e2728490cc1`, completed 2026-11-16; 64 outer seeds.

| Policy | Slots | Mean | Seed SD | Extra episodes | Inclusive seconds | Probe or replay seconds |
| --- | --: | --: | --: | --: | --: | --: |
| none | — | 0.871354 | 0.022271 | 0 | 0.402589 | 0.000000 |
| full | — | 0.855990 | 0.025281 | 0 | 0.419738 | 0.000000 |
| fifo | 1 | 0.839063 | 0.020334 | 0 | 0.555552 | 0.000000 |
| fifo | 2 | 0.841406 | 0.022787 | 0 | 0.545188 | 0.000000 |
| lru | 1 | 0.839063 | 0.020334 | 0 | 0.446503 | 0.000000 |
| lru | 2 | 0.854948 | 0.025928 | 0 | 0.450970 | 0.000000 |
| random | 1 | 0.839063 | 0.020334 | 0 | 0.443248 | 0.000000 |
| random | 2 | 0.842448 | 0.021808 | 0 | 0.454111 | 0.000000 |
| importance | 1 | 0.839063 | 0.020334 | 0 | 0.455876 | 0.000000 |
| importance | 2 | 0.839844 | 0.024836 | 0 | 0.434000 | 0.000000 |
| utility | 1 | 0.839063 | 0.020334 | 0 | 0.392478 | 0.000000 |
| utility | 2 | 0.831076 | 0.022172 | 0 | 0.439060 | 0.000000 |
| diversity | 1 | 0.839063 | 0.020334 | 0 | 0.405353 | 0.000000 |
| diversity | 2 | 0.831076 | 0.022172 | 0 | 0.378157 | 0.000000 |
| measured | 1 | 0.839063 | 0.020334 | 113,792 | 301.467103 | 301.022178 |
| measured | 2 | 0.855556 | 0.024627 | 246,528 | 618.281687 | 617.818656 |

Each row has 192 main episodes. The one-slot arms cannot choose among retained records, explaining their identical outcomes despite different measurement costs. At two slots, full capacity and LRU have means close to measured retention, but no equivalence or extra superiority claim follows. The measured arms use 64 paired fresh-task probes per candidate, with carried records readable before a new write.

<a id="gazette-notes-conversation-literal-constraint-recall"></a>

## Conversation: literal constraint recall

Result `df3d0053c39f`, completed 2026-11-16; 256 outer seeds.

| Policy | Slots | Mean | Seed SD | Extra episodes | Inclusive seconds | Probe or replay seconds |
| --- | --: | --: | --: | --: | --: | --: |
| none | — | 0.000000 | 0.000000 | 0 | 0.229867 | 0.000000 |
| full | — | 1.000000 | 0.000000 | 0 | 0.210076 | 0.000000 |
| fifo | 2 | 0.126953 | 0.194271 | 0 | 0.224882 | 0.000000 |
| fifo | 4 | 0.298828 | 0.266509 | 0 | 0.246079 | 0.000000 |
| lru | 2 | 0.243490 | 0.216329 | 0 | 0.223493 | 0.000000 |
| lru | 4 | 0.717448 | 0.269397 | 0 | 0.260662 | 0.000000 |
| random | 2 | 0.085938 | 0.172745 | 0 | 0.232803 | 0.000000 |
| random | 4 | 0.318359 | 0.282560 | 0 | 0.260619 | 0.000000 |
| importance | 2 | 0.118490 | 0.194871 | 0 | 0.227007 | 0.000000 |
| importance | 4 | 0.734375 | 0.288439 | 0 | 0.262435 | 0.000000 |
| utility | 2 | 0.107422 | 0.187476 | 0 | 0.229388 | 0.000000 |
| utility | 4 | 0.727214 | 0.295429 | 0 | 0.263999 | 0.000000 |
| diversity | 2 | 0.000000 | 0.000000 | 0 | 0.209973 | 0.000000 |
| diversity | 4 | 0.218750 | 0.219179 | 0 | 0.248829 | 0.000000 |
| measured | 2 | 0.169271 | 0.211833 | 10,356 | 16.999988 | 16.672769 |
| measured | 4 | 0.776042 | 0.246490 | 16,616 | 30.840436 | 30.464010 |

Each row has 256 main episodes. The 13,486 deterministic candidate pairs contain 392 positive, 627 negative and 12,467 zero signed effects. A pair reconstructs the actual prefix and preceding removals, then compares FIFO at the pending write with candidate removal followed by FIFO. It supplies one fixed continuation per arm, not independent inner repetitions or an inner confidence interval. The outer policy result and a candidate-removal effect answer different questions.

<a id="gazette-notes-textworld-game-score-binary-in-these-observed-games"></a>

## TextWorld: game score, binary in these observed games

Result `6676e6a9ecd8`, completed 2026-11-16; 16 outer seeds.

| Policy | Slots | Mean | Seed SD | Extra episodes | Inclusive seconds | Probe or replay seconds |
| --- | --: | --: | --: | --: | --: | --: |
| none | — | 0.000000 | 0.000000 | 0 | 4.023858 | 0.000000 |
| full | — | 0.937500 | 0.250000 | 0 | 2.382703 | 0.000000 |
| fifo | 2 | 0.062500 | 0.250000 | 0 | 3.624216 | 0.000000 |
| fifo | 4 | 0.187500 | 0.403113 | 0 | 3.889698 | 0.000000 |
| lru | 2 | 0.000000 | 0.000000 | 0 | 3.860734 | 0.000000 |
| lru | 4 | 0.062500 | 0.250000 | 0 | 3.585131 | 0.000000 |
| random | 2 | 0.062500 | 0.250000 | 0 | 3.880234 | 0.000000 |
| random | 4 | 0.250000 | 0.447214 | 0 | 3.471407 | 0.000000 |
| importance | 2 | 0.000000 | 0.000000 | 0 | 3.788152 | 0.000000 |
| importance | 4 | 0.125000 | 0.341565 | 0 | 5.233292 | 0.000000 |
| utility | 2 | 0.000000 | 0.000000 | 0 | 3.867073 | 0.000000 |
| utility | 4 | 0.125000 | 0.341565 | 0 | 3.845218 | 0.000000 |
| diversity | 2 | 0.000000 | 0.000000 | 0 | 3.766342 | 0.000000 |
| diversity | 4 | 0.125000 | 0.341565 | 0 | 3.797014 | 0.000000 |
| measured | 2 | 0.062500 | 0.250000 | 3,912 | 1028.318478 | 1024.377187 |
| measured | 4 | 0.187500 | 0.403113 | 6,760 | 1803.517281 | 1799.583639 |

Each row has sixteen main episodes. Measured retention and FIFO have identical final score vectors, not necessarily identical command sequences or completion times. Five candidate pairs have positive effects, three negative and 5,328 zero. Full memory peaks at 7–65 slots; limited arms peak and finish at their two/four-slot allowance. There is no byte cap. A two-slot controller cannot normally retain the goal plus two earlier actions, while four slots can; descriptions and inventory still compete for that space. The full-memory failure and the seventeen-command fallback win remain in the result.

<a id="gazette-notes-what-the-retained-traces-can-and-cannot-answer"></a>

## What the retained traces can and cannot answer

Tutor and Continual probe fresh tasks with copied memory. Conversation and TextWorld replay the live episode prefix and then use a FIFO continuation. Neither experiment turns a positive record estimate into a causal claim independent of its intervention and reference policy. The measured ranking grants a bonus to positive effects, keeping adverse estimates in the saved results without using their magnitudes as removal preferences.

KeyDoor and Bandit serve as memory-path controls in the separate diagnostic: every positive-slot policy keeps the new cue until use, while fresh-task probes fail to read copied historical records. Equal outcomes there do not establish equivalence or useful ranking. MiniGrid's useful-memory calibration arms reach the ceiling, which similarly limits their value for comparing retention rules. Earlier exploratory results keep their original source and limits; later repaired controllers do not rewrite them.

The [benchmark manual](https://docs.causality.in/reckon/tasks-and-benchmarks) and [notebook guide](https://docs.causality.in/reckon/notebooks) connect the protocols, complete seed reports, configuration and source identities. The article's attached notebook uses the exact stored summary values underlying these rounded tables. Its arithmetic does not rerun the experiments or recompute the predeclared inferential analysis from raw seed outcomes.


<a id="gazette-notebook-8f86a9a877619b5f4c7354efd6f62f0de892beb739e61cb89b44a52b3a4c4aaf--cell-0-recalculate-the-outcome-and-measurement-price"></a>

## Recalculate the outcome and measurement price

Compare each retention policy’s outcome with the cost of measuring it. The inputs are aggregate results from four completed Reckon experiments.

Inputs: Tutor `eef872b88357` (15 November 2026), Continual `7e2728490cc1`, Conversation `df3d0053c39f`, and TextWorld diagnostic `6676e6a9ecd8` (16 November 2026). The [benchmark manual](https://docs.causality.in/reckon/tasks-and-benchmarks) and [notebook guide](https://docs.causality.in/reckon/notebooks) identify their protocols and retained evidence. Each tuple below comes from that result's `analysis.json` summary row; the notes explain each endpoint and sampling unit.

Time includes all probe or replay work. The measured ratios describe the recorded machine runs; early TextWorld cases overlapped other local work. An absent slot label denotes a control, not a measured zero. Figures in percentage points subtract two fractions and multiply by one hundred.

Execution count: 1

```python
# Columns: workload, policy, slots, outer seeds, mean, seed SD,
# main episodes, extra episodes, inclusive seconds, probe/replay seconds.
rows = [
    ('Tutor', 'none', None, 256, 0.30338541666666663, 0.08098950616550554, 1280, 0, 0.8516467495355755, 0.0),
    ('Tutor', 'full', None, 256, 0.3927083333333333, 0.1046573410774148, 1280, 0, 0.8791667007026263, 0.0),
    ('Tutor', 'fifo', 2, 256, 0.3302083333333333, 0.07986235435235756, 1280, 0, 0.8373730081948452, 0.0),
    ('Tutor', 'fifo', 4, 256, 0.36328125, 0.08625238779808625, 1280, 0, 0.8021396980620921, 0.0),
    ('Tutor', 'lru', 2, 256, 0.33229166666666665, 0.0821749555007293, 1280, 0, 0.779955590784084, 0.0),
    ('Tutor', 'lru', 4, 256, 0.3630208333333333, 0.0899512697899211, 1280, 0, 0.8388300815713592, 0.0),
    ('Tutor', 'random', 2, 256, 0.33424479166666665, 0.08021780247135503, 1280, 0, 0.7867223243229091, 0.0),
    ('Tutor', 'random', 4, 256, 0.3614583333333333, 0.08641365784086395, 1280, 0, 0.8442307919613086, 0.0),
    ('Tutor', 'importance', 2, 256, 0.3319010416666667, 0.08069759423728984, 1280, 0, 0.8149848671164364, 0.0),
    ('Tutor', 'importance', 4, 256, 0.36002604166666663, 0.08931693937345477, 1280, 0, 0.8396674101240933, 0.0),
    ('Tutor', 'utility', 2, 256, 0.3298177083333333, 0.07998236035782881, 1280, 0, 0.7719827577238902, 0.0),
    ('Tutor', 'utility', 4, 256, 0.3606770833333333, 0.08830858883905403, 1280, 0, 0.8455572515376844, 0.0),
    ('Tutor', 'diversity', 2, 256, 0.3298177083333333, 0.07998236035782881, 1280, 0, 0.7635057969018817, 0.0),
    ('Tutor', 'diversity', 4, 256, 0.3606770833333333, 0.08830858883905403, 1280, 0, 0.8146384582505561, 0.0),
    ('Tutor', 'measured', 2, 256, 0.333203125, 0.08060220223695269, 1280, 2096128, 2087.328619248059, 2086.369952175475),
    ('Tutor', 'measured', 4, 256, 0.36822916666666666, 0.09183288554272045, 1280, 3694592, 4253.775389586517, 4252.780472322018),
    ('Continual', 'none', None, 64, 0.8713541666666667, 0.022271082748446747, 192, 0, 0.4025892913341522, 0.0),
    ('Continual', 'full', None, 64, 0.8559895833333333, 0.02528118738754338, 192, 0, 0.41973816603422165, 0.0),
    ('Continual', 'fifo', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.5555519182235003, 0.0),
    ('Continual', 'fifo', 2, 64, 0.84140625, 0.022786695193822266, 192, 0, 0.5451883338391781, 0.0),
    ('Continual', 'lru', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.44650300429202616, 0.0),
    ('Continual', 'lru', 2, 64, 0.8549479166666667, 0.025928140258800473, 192, 0, 0.45096983428811654, 0.0),
    ('Continual', 'random', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.44324849493568763, 0.0),
    ('Continual', 'random', 2, 64, 0.8424479166666666, 0.02180757750205043, 192, 0, 0.45411124877864495, 0.0),
    ('Continual', 'importance', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.45587629498913884, 0.0),
    ('Continual', 'importance', 2, 64, 0.83984375, 0.024836417342206138, 192, 0, 0.4339998357463628, 0.0),
    ('Continual', 'utility', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.3924775362829678, 0.0),
    ('Continual', 'utility', 2, 64, 0.8310763888888889, 0.022171873076317346, 192, 0, 0.4390597860328853, 0.0),
    ('Continual', 'diversity', 1, 64, 0.8390625, 0.02033351042222014, 192, 0, 0.40535274829017, 0.0),
    ('Continual', 'diversity', 2, 64, 0.8310763888888889, 0.022171873076317346, 192, 0, 0.3781569160055369, 0.0),
    ('Continual', 'measured', 1, 64, 0.8390625, 0.02033351042222014, 192, 113792, 301.4671029591118, 301.02217808767455),
    ('Continual', 'measured', 2, 64, 0.8555555555555556, 0.024627342058702675, 192, 246528, 618.2816869550152, 617.8186556669534),
    ('Conversation', 'none', None, 256, 0.0, 0.0, 256, 0, 0.22986695216968656, 0),
    ('Conversation', 'full', None, 256, 1.0, 0.0, 256, 0, 0.2100760323810391, 0),
    ('Conversation', 'fifo', 2, 256, 0.126953125, 0.19427112081406475, 256, 0, 0.22488158527994528, 0),
    ('Conversation', 'fifo', 4, 256, 0.298828125, 0.26650880616523076, 256, 0, 0.24607934174127877, 0),
    ('Conversation', 'lru', 2, 256, 0.24348958333333331, 0.21632939435671958, 256, 0, 0.22349274705629796, 0),
    ('Conversation', 'lru', 4, 256, 0.7174479166666666, 0.2693966418751258, 256, 0, 0.2606617954443209, 0),
    ('Conversation', 'random', 2, 256, 0.0859375, 0.17274456945012714, 256, 0, 0.23280349909327924, 0),
    ('Conversation', 'random', 4, 256, 0.318359375, 0.2825601896182132, 256, 0, 0.26061883073998615, 0),
    ('Conversation', 'importance', 2, 256, 0.11848958333333333, 0.1948714382637445, 256, 0, 0.22700740688014776, 0),
    ('Conversation', 'importance', 4, 256, 0.734375, 0.2884391924756261, 256, 0, 0.26243539177812636, 0),
    ('Conversation', 'utility', 2, 256, 0.107421875, 0.18747616950958573, 256, 0, 0.22938841202994809, 0),
    ('Conversation', 'utility', 4, 256, 0.7272135416666666, 0.2954290192574013, 256, 0, 0.26399925141595304, 0),
    ('Conversation', 'diversity', 2, 256, 0.0, 0.0, 256, 0, 0.2099725343286991, 0),
    ('Conversation', 'diversity', 4, 256, 0.21875, 0.2191785018798023, 256, 0, 0.24882920843083411, 0),
    ('Conversation', 'measured', 2, 256, 0.16927083333333334, 0.21183334490365743, 256, 10356, 16.999988462484907, 16.672769474971574),
    ('Conversation', 'measured', 4, 256, 0.7760416666666666, 0.24648951419892448, 256, 16616, 30.840436458180193, 30.464010273339227),
    ('TextWorld', 'none', None, 16, 0.0, 0.0, 16, 0, 4.023857792082708, 0),
    ('TextWorld', 'full', None, 16, 0.9375, 0.25, 16, 0, 2.382702500966843, 0),
    ('TextWorld', 'fifo', 2, 16, 0.0625, 0.25, 16, 0, 3.624216122960206, 0),
    ('TextWorld', 'fifo', 4, 16, 0.1875, 0.40311288741492746, 16, 0, 3.88969821005594, 0),
    ('TextWorld', 'lru', 2, 16, 0.0, 0.0, 16, 0, 3.8607337530702353, 0),
    ('TextWorld', 'lru', 4, 16, 0.0625, 0.25, 16, 0, 3.585131041065324, 0),
    ('TextWorld', 'random', 2, 16, 0.0625, 0.25, 16, 0, 3.8802336249500513, 0),
    ('TextWorld', 'random', 4, 16, 0.25, 0.4472135954999579, 16, 0, 3.4714067070162855, 0),
    ('TextWorld', 'importance', 2, 16, 0.0, 0.0, 16, 0, 3.788152459077537, 0),
    ('TextWorld', 'importance', 4, 16, 0.125, 0.3415650255319866, 16, 0, 5.233291999902576, 0),
    ('TextWorld', 'utility', 2, 16, 0.0, 0.0, 16, 0, 3.867073167930357, 0),
    ('TextWorld', 'utility', 4, 16, 0.125, 0.3415650255319866, 16, 0, 3.8452183319604956, 0),
    ('TextWorld', 'diversity', 2, 16, 0.0, 0.0, 16, 0, 3.766341793932952, 0),
    ('TextWorld', 'diversity', 4, 16, 0.125, 0.3415650255319866, 16, 0, 3.7970136691001244, 0),
    ('TextWorld', 'measured', 2, 16, 0.0625, 0.25, 16, 3912, 1028.3184781248565, 1024.3771866660682),
    ('TextWorld', 'measured', 4, 16, 0.1875, 0.40311288741492746, 16, 6760, 1803.5172809599899, 1799.583639001241),
]
```

Execution count: 2

```python
print("Measured retention compared with utility at the same budget")
print("Workload       Slots  Gain (pp)   Extra episodes  Inclusive / utility")
for row in rows:
    task, policy, slots, n, mean, sd, main, probes, total, probe_time = row
    if policy != "measured":
        continue
    baseline = next(r for r in rows if r[0] == task and r[1] == "utility" and r[2] == slots)
    gain = 100 * (mean - baseline[4])
    ratio = total / baseline[8]
    assert 0 <= probe_time <= total
    print(f"{task:14} {slots:>3} {gain:>10.3f} {probes:>16,} {ratio:>18.2f}×")
print("\nContinual, two slots, measured minus no memory (percentage points):")
m = next(r for r in rows if r[0] == "Continual" and r[1] == "measured" and r[2] == 2)
b = next(r for r in rows if r[0] == "Continual" and r[1] == "none")
print(f"{100 * (m[4] - b[4]):.3f}")
print("\nTextWorld, four slots, observed wins out of 16:")
for policy in ["full", "fifo", "random", "utility", "measured"]:
    r = next(r for r in rows if r[0] == "TextWorld" and r[1] == policy and (r[2] == 4 or policy == "full"))
    print(f"{policy}: {round(r[4] * 16)}/16")
```

stdout

```
Measured retention compared with utility at the same budget
Workload       Slots  Gain (pp)   Extra episodes  Inclusive / utility
Tutor            2      0.339        2,096,128            2703.85×
Tutor            4      0.755        3,694,592            5030.74×
Continual        1      0.000          113,792             768.11×
Continual        2      2.448          246,528            1408.19×
Conversation     2      6.185           10,356              74.11×
Conversation     4      4.883           16,616             116.82×
TextWorld        2      6.250            3,912             265.92×
TextWorld        4      6.250            6,760             469.03×

Continual, two slots, measured minus no memory (percentage points):
-1.580

TextWorld, four slots, observed wins out of 16:
full: 15/16
fifo: 3/16
random: 4/16
utility: 2/16
measured: 3/16
```

<a id="gazette-notebook-8f86a9a877619b5f4c7354efd6f62f0de892beb739e61cb89b44a52b3a4c4aaf--cell-3-keep-the-comparison-s-question-attached"></a>

### Keep the comparison's question attached

The Continual gain over utility coexists with a loss against no memory. TextWorld's measured score matches FIFO without matching its expenditure. The three confirmation protocols' paired intervals concern their declared contrasts; the TextWorld diagnostic has none.





Reading path: [What does the measurement establish?](https://causality.in/collections/evidence-and-evaluation/) > [From observation to evaluation](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/) > [What did selective memory buy?](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/)

Previous in journey: [Four questions behind a benchmark result](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/)
