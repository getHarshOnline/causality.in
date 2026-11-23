Title: Inspect an exported run

[Read HTML](https://causality.in/reckon/inspect-an-exported-run/)

Rights holder: RawThoughts Enterprises Private Limited

<a id="inspect-an-exported-run"></a>

# Inspect an exported run

Pick one record in a saved run and see where it was written, read or removed. You can do this from the saved files without running the task again. The debugger can show more when the export contains full record snapshots.

<a id="choose-an-actual-event-log-export"></a>

## Choose a run

Find the run folder that contains `logs/events.jsonl`. Notebook runs normally live under `notebooks/runs/`. If you followed [Compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/), use `replay-s2-seed41` from your results. The importer needs the event file, even if you already have figures and scores. It copies the run into the debugger's local storage. Keep the original files for checking what the debugger shows.

<a id="follow-one-record-rather-than-a-score-alone"></a>

## Follow a record

In the replay example, pick one stored example. Open `logs/events.jsonl` in a text editor, find a `write` and copy its `record_id`. Search below it for that ID in a later read's `details`, a score update or a removal.

Use richer exports to see what a record contained and how it relates to other records. A read tells you that a record was returned. Showing that it helped requires a separate outcome comparison. For a measured connection between two records, supply the probe result for that pair. The debugger displays the result after you run the probe elsewhere.

<a id="the-key-and-door-example"></a>

### The key-and-door example

The built-in key-and-door task gives a small example to follow. Its grid has a start (`S`), a place to see the key colour (`K`), two doors (`L` and `R`) and a goal (`G`). The `#` cells are walls:

```text
S . . . .
. . K . .
. . . . .
# L # R #
. . G . .
```

At `K`, the controller writes the observed colour as a cue record. Before choosing a door, it asks for that episode's record by ID.

The saved example in `notebooks/runs/2026-11-16/keydoor_export_demo/95585cb0799e/` ran three episodes on 16 November 2026 with seed 42, FIFO, one slot and 50,000 bytes. It kept memory between episodes and enabled utility learning. Its `result.json` records a green-cue failure followed by two blue-cue successes. Each episode wrote and retrieved its cue once. The log contains 11 events: three writes, three reads, three utility updates and two removals.

Follow the first blue cue, in `keydoor_ep1`, by searching for record `b4b5c6bb-df57-4f6f-ac60-da08406783e8`:

| Event ID | Logical step | What the log records |
| --- | --- | --- |
| 4 | 24 | The cue is written |
| 5 | 26 | A read returns its ID in `details` |
| 6 | 29 | Utility changes from 0 to 0.1 after the successful episode |
| 7 | 33 | FIFO removes it when the next episode writes its cue |

These steps are logical positions, not elapsed times. Read the cue colour and outcome from `result.json`: the raw log contains neither payloads nor a grid trajectory.

The controller chooses right for a retrieved blue cue and otherwise guesses left, without trying a second door. Red opens the left door, so it can succeed without retrieval. Green opens a seeded random door: in this run the right door was open, but remembering green still led to the left-hand guess. A stored and retrieved cue therefore need not produce success; success alone does not show that a cue helped.

This task writes one cue and reads it before the next write. With enough bytes for that cue, one slot is sufficient for this controller's memory path. It does not create competing records before the choice, so it cannot by itself show which retention ranking handles that competition better. The [task contract](https://docs.causality.in/reckon/tasks-and-benchmarks) explains those limits; the replay comparison exercises a different workload.

<a id="open-the-backend-and-interface"></a>

## Start the debugger

This step is optional. Importing the replay example exposes its recorded writes, reads, removals and score updates on the timeline. Numeric event IDs remain distinct, including operations at the same logical step. A raw log supplies activity rather than full record snapshots; the [timeline reference](https://docs.causality.in/reckon/debugger#a-timeline-view-per-episode) explains what each export can show.

Use the reckon checkout, a [working Python environment with the Rust extension](https://docs.causality.in/reckon/installation#set-up-the-environment), Node.js 18 or later and pnpm 9. With that environment active, run this from the reckon root to add the Python debugger dependencies:

```sh
python -m pip install ".[viz]"
```

Start both servers from the reckon checkout. Keep the project Python environment active in the first and third terminals.

1. In the first terminal, start the backend:
   
   ```sh
   python -m reckon.viz.server
   ```

2. In a second terminal, install the interface dependencies, build the shared components and start the interface. If the dependencies and build are already current, run just `pnpm dev` from `viz-ui`:
   
   ```sh
   cd viz-ui
   pnpm install
   pnpm build:components
   pnpm dev
   ```

3. In a third terminal, import the run using its full path. Use the results folder you actually chose, even if it is outside the checkout:
   
   ```sh
   reckon viz import "/absolute/path/to/your-run"
   ```

4. Open `http://localhost:5173` in your browser and select the imported run. The interface on port 5173 uses the backend on port 8000. If no runs appear, check that both terminals are still running.

To follow the key-and-door example in the interface, import its saved directory instead and select that run. The heading shows **3 episodes | 67% success**. Start at event 0 and use **Next event** to reach the blue cue’s four events above; operations sharing a logical step remain separately selectable. Open **Source operation** to compare each complete log entry with `logs/events.jsonl`.

A successful import prints `Imported run:` and an event count. If it fails:

| Message or situation | What to check |
| --- | --- |
| `Path not found` | Check the full path and folder name. If you used a relative path, check the terminal's working directory too |
| `No events.jsonl found` | The producer actually saved an event log |
| Run identity already exists | Inspect the existing import, or choose a new identity |
| `Cannot display run` | Read the reported format or identity error and correct the export; keep its original bytes for diagnosis |

The default run ID is the last part of the directory path. To keep another copy, give it a new ID:

```sh
reckon viz import "/absolute/path/to/your-run" --run-id inspected-copy
```

<a id="interpret-the-result-within-the-run"></a>

## Compare outcomes, not just activity

**Note**

**Activity is not accuracy.** The debugger's default performance axis divides writes by writes plus removals and labels that as an operation proxy. It describes memory activity, not task success. Open the saved task result for accuracy or reward. Missing measurements remain unavailable; the event log alone cannot supply probe cost or accuracy.

When measured points are supplied, the frontier retains a point unless another uses no more cost and achieves at least as much performance, with one strict improvement. Exact duplicates remain visible, and overruns expand the budget axis beyond 100%. The plot does not choose a policy or calculate uncertainty across repeated trials. For adding measured points and declaring their units, see the [frontier reference](https://docs.causality.in/reckon/debugger#c-budget-vs-performance-frontier).

The [laboratory guide](https://causality.in/reckon/understand-the-memory-laboratory/) explains what you can infer from a write, a read or an outcome difference.

<a id="stop-the-debugger"></a>

## Stop the debugger

Press Ctrl+C in each server terminal when finished. Closing the browser tab does not stop either process. Your saved export and imported copy remain available.


Reading path: [Reckon](https://causality.in/reckon/) > [Inspect an exported run](https://causality.in/reckon/inspect-an-exported-run/)
