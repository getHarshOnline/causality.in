Title: Four questions behind a benchmark result

[Read HTML](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/)

Author: Harsh Joshi

<a id="four-questions-behind-a-benchmark-result"></a>

# Four questions behind a benchmark result

Measured retention improved a classifier's accuracy by 2.448 percentage points over learned utility. It also lost 1.580 points against no memory. Measured retention is the policy that ranks a memory record partly by what happens when that record is removed; [learned utility](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/) ranks it by a score updated from credited outcomes. Both comparisons came from the same completed Reckon experiment, and both declared intervals excluded zero. Calling the candidate “better” without naming its comparator would hide the more useful result: measurement improved one policy while a simpler control still did better.

[Reckon](https://causality.in/reckon/) separates four coordinates in its intended evaluation contract: repeatability, independence, grounding and coverage. They are not ingredients to average into a prettier score. Each asks a question the others cannot answer.

<a id="can-the-result-be-repeated"></a>

## Can the result be repeated?

A single favourable run cannot show how an improvement varies. Reckon's Tutor confirmation fixed 256 fresh seeds before inspecting their outcomes, with each seed contributing a mean over five carried-memory episodes. Measured retention beat utility at two slots in fifty seeds, tied in 180 and lost in 26. Its average gain was 0.339 percentage points, with a declared 97.5% interval of 0.037–0.640 points. The average and paired trace carry different parts of the result.

Repetitions and their variability become informative alongside the changing seed, runtime, model and configuration. Replaying the same seed checks reproduction; fresh seeds test variation within the declared generator. Even deterministic reproduction answers only part of the question: a leaking test can reproduce its mistake perfectly. Repeatability characterises the measurement procedure without establishing the validity of its interpretation. The [complete memory comparison](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/) gives the protocols, other controls, uncertainty and measurement cost.

<a id="who-made-the-answer-and-who-judged-it"></a>

## Who made the answer and who judged it?

If the same model generated a candidate, produced its preferred rubric and judged its output, agreement may reflect shared assumptions. Separate code, data, models or human review can reduce particular dependencies, but the actual overlap determines which independence matters. A second evaluator sharing the training examples may not supply an independent test of generalisation; a separate model with the same source assumptions may repeat the same blind spot. Opening another chat changes the session without necessarily changing either dependency. Independence has to concern the particular failure the comparison is meant to expose.

The distinction also applies when an agent improves its own procedure. Feedback can help propose an edit, validation can select it, and a held-out comparison can examine the selected result. Reusing the last comparison as search feedback changes its role. [Pale's procedure-and-model example](https://rawthoughts.in/collections/systems/making-a-working-world-intelligible/improving-the-system-between-runs/) develops that separation around SkillOpt and a four-arm comparison; the procedure that wins validation still has to face cases it did not help select.

<a id="what-supports-the-interpretation"></a>

## What supports the interpretation?

Removing a memory record changes an outcome. That is an intervention contrast within the tested system. Calling it causal requires the treatment and control, experimental unit, estimand, identification assumptions and contamination checks to be specified. [Ablation alone](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/) does not provide all of them.

A measured contrast and a proxy such as gradient magnitude contribute different information. The proxy can help choose what to examine; normalising it into the same numeric range does not make it evidence of the mechanism.

<a id="what-was-not-tested"></a>

## What was not tested?

A candidate may improve the declared workload while omitting refusal cases, long inputs, resource exhaustion or recovery after interruption. An omitted case supplies no result. Tests cut short by a budget limit are particularly revealing: the comparison's coverage has become entangled with the resources needed to complete it.

Many comparisons also change the statistical problem. At a nominal five-percent false-positive rate, one hundred independent tests under the null would produce five false positives in expectation. Declaring a multiple-testing policy is part of the experiment; choosing only the favourable pairs afterwards changes the meaning of the reported evidence.

<a id="a-worked-report-for-the-memory-comparison"></a>

## A worked report for the memory comparison

The Tutor result makes the four coordinates concrete. It presents six questions about six initially misunderstood concepts, with two- and four-slot memory conditions. Each seed's five episodes carry memory forward; the independent analysis unit is the seed mean, not each of the 1,280 main episodes in a policy row and certainly not every probe.

Repeatability names the fixed generator, retention formula, source and runtime, all 256 seeds, and the complete paired differences. At four slots, measured retention gains 0.755 percentage points over utility, with a 97.5% interval of 0.421–1.089. Both slot comparisons use the declared two-test correction. Their intervals are positive but lie below the five-point effect used for sample planning. That planning assumption is not an acceptance threshold for a useful system.

Independence distinguishes the confirmation's fresh seeds from the exploratory cases used to develop the comparison. Starting students and response randomness are paired independently of action choices, so a changed hint decision does not silently give one policy a different random stream. The outcome is scored by the simulation's cleared misconceptions, rather than by a language model judging its own teaching. These choices address particular dependencies; they do not make a small simulation representative of every learner.

Grounding keeps the question narrow: does this implemented retention mixture improve the declared Tutor outcome over utility? Its record-removal probes copy memory into fresh FIFO-reference episodes. They do not continue the live student's state, and the policy-level gain does not establish the causal contribution of every record that received credit. The ranking uses utility and positive measured effects together, so the experiment also does not isolate which ingredient produced the gain.

Coverage includes all nine policies and both limited budgets, including null and adverse outcomes. It does not include arbitrary students, larger curricula, different continuation rules or a common total-compute allowance. The measured arms consume 5,790,720 extra probe episodes. At two slots, measured retention's inclusive time is about 2,087 seconds against utility's 0.772; at four, about 4,254 against 0.846. These are the recorded machine times, with probe time already inside the totals. An accuracy comparison that omits that price has left out part of what the candidate did.

Each coordinate points to a different next question. Fresh cases examine variation; a different reference intervention examines attribution; a changed curriculum examines transfer; a common compute allowance examines practical value. Combining the four into one quality score would make those distinctions harder to see.

<a id="what-the-difference-supports"></a>

## What the difference supports

The laboratory's [memory update](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/) is itself a subject for this kind of comparison. Its score may be cheap and responsive; whether that response helps retention is another question. Repeatability, independence, grounding and coverage describe different ways the answer can remain uncertain.

A small positive difference can survive this examination while its adoption case remains weak. A negative comparison can reveal a simpler way to do the task. An evaluation earns its value by keeping those answers visible, with the question and cost that give each one meaning.


Reading path: [What does the measurement establish?](https://causality.in/collections/evidence-and-evaluation/) > [From observation to evaluation](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/) > [Four questions behind a benchmark result](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/four-questions-for-an-evaluation/)

Previous in journey: [EMA and Bayesian updates for online scoring](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/)

Next in journey: [What did selective memory buy?](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/what-did-selective-memory-buy/)
