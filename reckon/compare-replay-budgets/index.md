Title: Compare two replay budgets

[Read HTML](https://causality.in/reckon/compare-replay-budgets/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="compare-two-replay-budgets"></a>

# Compare two replay budgets

Does a classifier remember earlier tasks better when it can keep 16 examples for replay instead of 2? Run both allowances on the same starting data for each of three seeds. The script prints an accuracy difference for each pair and saves the results and memory activity from all six runs.

**Important**

**Prepare the local environment.** Use the reckon checkout and a Python environment with the Rust extension installed. If you need one, follow [Set up the environment](https://docs.causality.in/reckon/installation#set-up-the-environment). You can run the comparison without a model service, notebook runner or daemon.

<a id="choose-what-changes-and-what-stays-fixed"></a>

## Set up the comparison

The classifier learns three two-dimensional problems in sequence. The line that divides the classes rotates from task to task. The classifier stores examples it gets wrong and sometimes uses a stored example for an extra update as training continues.

| Setting | Value |
| --- | --- |
| Training and test data | 60 training and 60 test samples per task |
| Learner | Two features; learning rate 0.1; replay probability 0.2 |
| Memory | 2 or 16 slots, both with 50,000 bytes |
| Seeds | 41, 42 and 43, paired across allowances |
| Run length | One episode per saved run |
| Retention | Explicit FIFO in both runs of each pair |

The task generates training and test data before learning starts. That makes the data match within each seed. Later replay can differ because the buffers hold different examples. FIFO removes the oldest retained examples when either allowance is exceeded. Keep that policy and the byte limit fixed to compare slot allowances.

One episode here means one complete sequence of three classification tasks. Reckon can carry records, scores and retained events into later episodes; this small example uses one sequence so each accuracy matrix describes the same three problems. The larger [memory-policy comparison](https://docs.causality.in/reckon/tasks-and-benchmarks) also varies the retention rule and reports the cost of measuring record effects.

<a id="save-the-inputs-results-and-log-together"></a>

## Save and run the script

With the Python environment active, save this as `compare_replay_budgets.py` in a folder for your results. Run it from that folder. If `replay-budget-comparison` already exists there, use a new folder or change the output name in the script.

```python
import csv
from dataclasses import asdict
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
from time import perf_counter

from reckon import CausalMemoryManager, MemoryBudget
from reckon.memory.policies import FIFOPolicy
from reckon.tasks.task_c_continual import ContinualConfig, ContinualTask

output = Path("replay-budget-comparison")
output.mkdir()
task_config = ContinualConfig(
    num_tasks=3,
    samples_per_task=60,
    test_samples_per_task=60,
    feature_dim=2,
    replay_fraction=0.2,
    learning_rate=0.1,
)
rows = []

for seed in (41, 42, 43):
    accuracy_by_slots = {}
    for slots in (2, 16):
        run = output / f"replay-s{slots}-seed{seed}"
        (run / "logs").mkdir(parents=True)
        budget = MemoryBudget(max_slots=slots, max_bytes=50_000)
        memory = CausalMemoryManager(budget, retention_policy=FIFOPolicy())
        config = {
            "task_name": "continual",
            "task": asdict(task_config),
            "budget": asdict(budget),
            "policy_name": type(memory.retention_policy).__name__,
            "seed": seed,
            "num_episodes": 1,
            "reset_memory": False,
            "learn_utility": True,
        }
        config_text = json.dumps(config, sort_keys=True, indent=2)
        (run / "config.json").write_text(config_text + "\n")
        started_at = datetime.now(timezone.utc)
        started = perf_counter()
        result = ContinualTask(task_config).run(
            memory, num_episodes=1, seed=seed,
            reset_memory=False, learn_utility=True,
        )
        wall_time_ms = (perf_counter() - started) * 1000
        result_data = result.to_dict()
        (run / "result.json").write_text(json.dumps(result_data, indent=2) + "\n")
        (run / "logs" / "events.jsonl").write_text(memory.get_event_log_jsonl())
        episode = result_data["raw_data"]["episodes"][0]
        metrics = {
            "mean_accuracy": result_data["performance"]["mean_accuracy"],
            "forgetting": result_data["performance"]["forgetting"],
            "total_writes": episode["total_writes"],
            "total_reads": episode["total_reads"],
        }
        summary = {
            "config_id": hashlib.sha256(config_text.encode()).hexdigest(),
            "notebook_name": "replay-budget-comparison",
            "task_name": "continual",
            "started_at_ms": int(started_at.timestamp() * 1000),
            "policy_name": config["policy_name"],
            "num_episodes": 1,
            "budget_slots": slots,
            "config": config,
            "metrics": metrics,
            "wall_time_ms": wall_time_ms,
        }
        (run / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
        rows.append({"seed": seed, "slots": slots, **metrics})
        accuracy_by_slots[slots] = metrics["mean_accuracy"]
        print(run)
    difference = accuracy_by_slots[16] - accuracy_by_slots[2]
    print(f"Seed {seed}: 16 minus 2 slots = {100 * difference:+.2f} percentage points")

with (output / "comparison.csv").open("w", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
    writer.writeheader()
    writer.writerows(rows)
```

Run the script:

```sh
python compare_replay_budgets.py
```

Look for six run directories, three paired differences and `comparison.csv`, which has one row per run. Open any run to find:

| File | Contents |
| --- | --- |
| `config.json` | Task settings, budget, policy and seed |
| `result.json` | Accuracy matrix and task results |
| `logs/events.jsonl` | Recorded memory operations |
| `summary.json` | Metadata used by the debugger importer |

If the script stops early, treat the comparison as incomplete and start again in a fresh folder. A missing row does not count as zero accuracy.

To repeat a run later, record the Reckon revision, dependency lockfiles, local edits, Python packages, Rust toolchain and extension build with the results. Seeds tell you which data to generate; they do not identify the implementation that uses it. The [reproducibility guide](https://docs.causality.in/reckon/reproducibility) covers the rest. `wall_time_ms` measures the task call, excluding setup, imports and file writes.

<a id="read-the-accuracy-matrix-before-choosing-a-winner"></a>

## Read the accuracy matrix

Start with the paired differences. A positive number means 16 slots had higher final mean accuracy for that seed. Running this example on 15 November 2026 with Reckon revision `3d3aea6` gave:

| Seed | 2 slots | 16 slots | Difference in percentage points |
| --- | --- | --- | --- |
| 41 | 81.11% | 82.78% | +1.67 |
| 42 | 82.22% | 80.00% | −2.22 |
| 43 | 81.11% | 83.89% | +2.78 |

The current runner uses separate random streams for task data and replay, and gives each training position a replay opportunity. Your results may therefore differ from these saved numbers. Read each pair in your `comparison.csv` before combining them. In the saved comparison, the larger buffer improved two seeds and worsened one. Three seeds describe this example; they do not establish which allowance generally performs better.

Open `result.json`. In `raw_data.episodes[0].accuracy_matrix[i][j]`, the row tells you which training task just finished and the column tells you which task was tested:

- A diagonal entry shows accuracy just after learning that task.
- The final row shows accuracy after learning all three tasks.
- Zeros above the diagonal mean “not evaluated yet.”

`mean_accuracy` averages the final row. Compare the final rows from your two runs to see which tasks gained or lost accuracy. In the saved seed 42 run above, most of the drop came from the first task.

`forgetting` compares each earlier task's first score on the diagonal with its score in the final row. Count drops only, treating gains as zero, and leave out the last task. An intermediate score higher than the diagonal score does not enter this calculation.

Two fields in the saved example have older names. In those original runs, `causal_precision` is one minus forgetting and `reward_per_slot` is final mean accuracy divided by counted writes, with a denominator of at least one. Current runs name these `diagnostics.one_minus_mean_forgetting` and `diagnostics.mean_episode_accuracy_per_write`; the latter averages each episode’s accuracy divided by its write count, with the same minimum denominator. This example runs one episode per configuration, so that average has one term. See the [metrics reference](https://docs.causality.in/reckon/evaluation-metrics) for definitions. The three seeds give an exploratory comparison of this task and learner. To measure one record's contribution, run a separate comparison that changes whether that record is available.

<a id="inspect-the-saved-activity"></a>

## Follow the memory activity

Open a run's `logs/events.jsonl` beside its result. Find `op_type` to see what happened. Copy a record ID from a write and look for it in a later read's `details` or in a pruning entry. For a write, `bytes_after` shows how many stored bytes counted toward the budget after that write. Use the result matrix for accuracy and the log for when those operations happened.

The log lacks full record payloads, classifier state and accuracy at each step.

**Caution**

**A full log buffer discards earlier events.** Its buffer holds at most 10,000 events. Carried episodes keep the retained events; an explicit memory reset starts a new buffer. For a longer study, consume the manager's event subscription while it runs so a full buffer does not discard the beginning. Those diagnostic copies consume memory outside the task's allowance.

<a id="optional-open-the-saved-run-in-the-current-debugger"></a>

## Open a saved run in the debugger

You can read the results without a debugger. To view the activity there, follow [Inspect an exported run](https://causality.in/reckon/inspect-an-exported-run/) to start the two servers. Run these commands from the folder that contains `replay-budget-comparison`:

```sh
reckon viz import "replay-budget-comparison/replay-s2-seed41"
reckon viz import "replay-budget-comparison/replay-s16-seed41"
```

The importer checks that the events can be projected for display before saving the run. The timeline preserves numeric event identities and their sequence, so operations at the same logical step remain distinct. Use it to compare writes, reads and removals; the raw log cannot supply full record snapshots or reconstruct the classifier.

**Note**

**Success unavailable is not zero accuracy.** The run list's `success_rate` is a separate field that this task does not supply. Current imports keep it unavailable (`null`), and the debugger shows “Success unavailable.” Read `mean_accuracy` from `result.json` for this classification task.

If import is refused, keep the original files and correct the reported format or identity problem; a missing display does not change the measured result. Stop both servers when you finish.


Reading path: [Reckon](https://causality.in/reckon/) > [Compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/)


Source code for [Reckon](https://github.com/getHarshOnline/reckon) is credited to [Harsh Joshi](https://getharsh.in/about/).
