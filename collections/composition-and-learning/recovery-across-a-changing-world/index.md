Title: Recovery across a changing world

[Read HTML](https://causality.in/collections/composition-and-learning/recovery-across-a-changing-world/)

Author: Harsh Joshi

<a id="recovery-across-a-changing-world"></a>

# Recovery across a changing world

A saved process can remember what it believed. It cannot ensure that its resources, device or permissions still exist. Recovery has to reconcile the saved state with the current world, not simply deserialize the most convenient file.

Consider a hypothetical swarm that reserved eight units from a pool of ten and then crashed. Its checkpoint records the reservation. During the interruption the lease expires and those eight units are reassigned. Loading the file cannot revive the old lease: doing so would let two holders claim the same capacity. Resuming the work requires a new reservation from the current allocator. If none is available, the process cannot resume even though its saved state loaded correctly. The checkpoint preserves a belief about capacity, while the current allocator determines whether that capacity can be used.

<a id="three-restoration-promises"></a>

## Three restoration promises

A restore may aim at the same declared state, a state equivalent under specified observations, or merely a fresh start. These are different promises. Even exact restoration of one component does not establish exact recovery of the surrounding system.

For a quantum unit, compatibility also depends on the backend, circuit representation, topology, calibration or noise model and measurement procedure. A classical checkpoint does not acquire quantum meaning because the new unit preserves the old API. [Q-MUON's](https://causality.in/q-muon/) proposed profile separates exact, semantic and restart-only modes so that each candidate would declare which state and observations its restoration preserves.

If a swarm contains one restart-only unit, its saved internal state is not restored. A semantic unit needs its equivalence criterion checked. Combining these with exact units cannot produce an unqualified claim of exact whole-swarm recovery.

| Proposed mode | What carries across the interruption | What the task must tolerate |
| --- | --- | --- |
| Exact | The declared internal state | Changed external resources may still prevent resumption |
| Semantic | A possibly different state with the declared observable behaviour | Differences outside the declared observations |
| Restart only | No retained internal state | Repeating preparation and any lost work |

<a id="semantic-recovery-needs-declared-observations"></a>

## Semantic recovery needs declared observations

Suppose two restored components behave alike on three selected probes but differently on a fourth. Whether they are equivalent depends on whether that fourth probe belongs to the declared family. “Same enough” requires a named family and tolerance, for the same reason that [a summary preserves answers to particular questions](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/) rather than every possible future question. A changed calibration or capability profile can invalidate the promised comparison even when the checkpoint bytes themselves remain unchanged.

For a finite illustration, compare restored states $000$ and $001$. Reading the first bit gives zero in both; reading the second does too. A profile that declares only those reads can treat the states as equivalent. Declaring the third read separates them completely. For probabilistic probes, one possible comparison is

$$
\sup_{p\in\mathcal P}\operatorname{TV}\bigl(L_p(x),L_p(y)\bigr)\leq\varepsilon,
$$

where $L_p(x)$ is the output law of probe $p$ on state $x$. This illustrative comparison makes equivalence depend on the probe family $\mathcal P$ and a tolerance $\varepsilon$. A task using a probe outside $\mathcal P$ would ask for a guarantee the comparison never made.

<a id="recovery-of-the-collective-task"></a>

## Recovery of the collective task

[Q-HENA](https://causality.in/q-hena/) proposes adapting [HENA's](https://causality.in/hena/) swarm responsibilities on top of quantum units. A recovery experiment would have to follow the restored units into the collective task, identifying the candidate, profiles, budgets, repetitions and coverage. That makes it possible to ask whether the differences each unit's restore mode allows change the result the swarm was meant to produce.

In the reservation example, the bytes can restore exactly while the work still cannot resume. In a mixed swarm, one unit may resume from its exact state, another from a state that agrees only on selected observations, and another from a fresh start. The collective result depends on which of those changes the task can tolerate, not on the number of files that loaded successfully.

A useful recovery report tells us what was restored, what was restarted, what changed and what was refused. That makes partial recovery a visible state rather than a silent weakening of the promise. It also keeps rollback honest: returning to older bytes is not permission to return to older authority.


Reading path: [Composition and learning](https://causality.in/collections/composition-and-learning/) > [Recovery across a changing world](https://causality.in/collections/composition-and-learning/recovery-across-a-changing-world/)
