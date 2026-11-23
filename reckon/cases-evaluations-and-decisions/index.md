Title: Cases, evaluations and decisions

[Read HTML](https://causality.in/reckon/cases-evaluations-and-decisions/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="cases-evaluations-and-decisions"></a>

# Cases, evaluations and decisions

Imagine two teams testing whether a memory rule helps an agent remember an early clue. They need the same task inputs, results they can compare and a record of who decided whether to use the rule. The laboratory runs the comparison today; the repository holds no service yet for sharing cases, evaluations or decisions between teams, and Reckon's design gives each of those jobs its own service. For a worked comparison, [compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/) in the lab.

<a id="reuse-a-case-without-making-it-live-memory"></a>

## Reuse the same case

In the design, the two teams name one version of the clue sequence and its expected outcomes. The curator keeps where it came from and how it may be used. A correction gets a new version, leaving the earlier one available to explain past results. [HENA](https://causality.in/hena/) keeps its own live records and decides how to use them; [Scope](https://rawthoughts.in/scope/)'s context stays derived from what Pale and Weave hold, and a curated case changes none of it.

<a id="ask-an-evaluator-a-bounded-question"></a>

## Evaluate a specified comparison

The experiment owner asks which memory rule works better on the delayed-cue task, with the task, inputs and budget specified. The evaluator reports what changed, the uncertainty, the cost and what another team needs to repeat the comparison.

Use that result to judge the tested rule in that task. If the reward changes during a bandit task, test the rule on that task separately. If the evaluator changes between runs, account for that before comparing the numbers. The experiment owner decides whether to use the candidate.

<a id="keep-a-decision-already-made"></a>

## Preserve a decision

If the owner accepts, rejects or defers the candidate, the record identifies the version they decided on, confirms who decided and preserves the results they used. The artifact's owner still controls release, and the system running it still decides whether to activate it.

An ordinary evaluation can stand on its own. Promoting a learned change needs the case, comparison and owner's decision together, followed by the artifact owner's release checks and the caller's choice to use it. Applying a correction to today's work does not have to wait for that learning process.

A correction from everyday work can supply a case: what information was available, what the agent did, what the person changed and what happened later. Permission to reuse those sources matters. The correction tells us what someone wanted; the later outcome helps test whether it worked. The same cases can inform comparisons of tools, skills, policies or a successor to [Counsel's local judge](https://rawthoughts.in/counsel/).

The [developer manual](https://docs.causality.in/reckon/overview) covers the implemented lab.


Reading path: [Reckon](https://causality.in/reckon/) > [Cases, evaluations and decisions](https://causality.in/reckon/cases-evaluations-and-decisions/)
