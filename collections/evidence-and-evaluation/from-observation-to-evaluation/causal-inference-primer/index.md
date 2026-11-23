Title: Did the cache make it faster?

[Read HTML](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/)

Author: Harsh Joshi

<a id="did-the-cache-make-it-faster"></a>

# Did the cache make it faster?

Suppose a cache rollout coincides with lower request latency. The graph establishes a change in the measured requests. It does not yet establish how much the cache caused, because traffic, request mix, upstream behaviour and other releases may also have changed. Crediting the wrong mechanism has a practical consequence: the next rollout may repeat the change and fail to repeat the result.

<a id="the-comparison-behind-the-metric"></a>

## The comparison behind the metric

For an eligible population over a stated period, the question is what would change if requests used the cache rather than the previous path. The assignment unit and outcome give that comparison its meaning. Average latency, tail latency, error rate and resource cost answer different questions; an improvement in one can hide a loss in another.

For a request $i$, write $Y_i(1)$ for latency with the cache and $Y_i(0)$ for latency without it. The average treatment effect is

$$
\tau=\mathbb E\bigl[Y_i(1)-Y_i(0)\bigr].
$$

A negative value means lower average latency. We cannot serve the same request both ways in the same circumstances and observe both outcomes. The experiment therefore needs a defensible way to use different requests to estimate that missing comparison.

A before-and-after comparison leaves time and treatment tangled. Random assignment can make the comparison stronger, but only if assignment is followed, measurement is comparable and interference is understood. A shared cache can let one group's traffic change the other group's experience. Randomisation does not erase that mechanism.

| Mechanism | What changes in the experiment |
| --- | --- |
| Request mix changes | Compare eligible requests with comparable difficulty, not whichever traffic happens to arrive |
| Cache warm-up crosses groups | Assignment to independent cache pools may be needed instead of request-level assignment |
| A release changes both paths | Hold that release common across groups or model its separate effect |
| The cache changes resource contention | Include the shared load in the treatment definition rather than treating it as unrelated noise |

With interference, latency is better written $Y_i(z_i,s_i)$: it depends on the request's assignment $z_i$ and the cache state $s_i$ created by other traffic. A pool-level comparison then asks about the effect of a cache policy, not an isolated request switch.

<a id="an-experiment-with-paired-cache-pools"></a>

## An experiment with paired cache pools

One possible design uses paired, isolated cache pools and a common release. Within each time block, randomly assign one pool to the new cache policy and the other to the old path. Keep eligibility and traffic allocation fixed, and declare whether warm-up belongs inside the measurement window. Pool assignment prevents the same cache entries being warmed by both arms. Shared upstream capacity can still connect them; isolation has to concern the actual interference, not only two names in a configuration.

The causal picture explains why. Time and request difficulty can both affect latency; a rollout scheduled at a particular time can become associated with either. Assignment changes the cache policy, which changes cache state and upstream reads, which affect latency. Shared upstream load can also carry a path from one pool's policy into the other pool's result. Random assignment addresses the first association, while independent pools address one interference path. Neither automatically removes the shared-load path.

Suppose four paired blocks produce the following *invented* mean latencies. Each block has two newly prepared pools and the same stipulated eligible workload; these are arithmetic examples, not measurements of a deployment.

| Paired block | New-policy pool, ms | Old-path pool, ms | Paired difference, ms |
| --: | --: | --: | --: |
| 1 | 90 | 100 | -10 |
| 2 | 104 | 110 | -6 |
| 3 | 85 | 95 | -10 |
| 4 | 114 | 120 | -6 |

The average paired difference is $-8$ ms. Averaging all requests without retaining their blocks would discard part of the assignment design. Treating every request as an independent randomised unit would also overstate how many independent treatment allocations occurred: the policy was assigned to pools. Reusing a warm pool in another block would introduce carryover that this stipulated construction excludes.

A report of this experiment would keep the block-level differences and allocations, request counts and difficulty mix, warm-up interval, upstream-read counts, errors, tail latency and resource cost together. Four blocks are a small comparison, not grounds for a precise production guarantee. If average latency improves while timeouts rise, the experiment has found a trade-off rather than an unqualified victory. If an uncached negative-control workload improves similarly, shared load becomes a concrete competing explanation to examine.

<a id="a-useful-explanation-includes-its-strongest-alternative"></a>

## A useful explanation includes its strongest alternative

The proposed mechanism might be fewer upstream reads. A competing explanation might be lighter traffic. Their predictions differ: the cache hypothesis should relate improvement to the requests it can actually serve, while a general load reduction may affect uncached requests too. A negative control can expose an explanation that fits every movement too conveniently.

Repeated trials help distinguish a stable result from noise. They do not repair a biased assignment, a leaking comparison or a metric changed halfway through. Uncertainty belongs beside the effect and its assumptions, not in place of them.

<a id="retaining-a-useful-record-is-another-question"></a>

## Retaining a useful record is another question

[Reckon](https://causality.in/reckon/) studies which records an agent should keep under a budget. Removing a record and observing a performance drop is an informative contrast, but it still needs a design and assumptions before receiving a causal interpretation. A retention score can be useful without being causal proof.

Delayed contribution makes the memory problem harder. A record can matter well after its arrival, and other records may have intervened before the successful decision. An [updated estimate](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/) has to absorb some account of that credit. The update can faithfully process the observations while their attribution still needs the same care as the cache rollout.


Reading path: [What does the measurement establish?](https://causality.in/collections/evidence-and-evaluation/) > [From observation to evaluation](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/) > [Did the cache make it faster?](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/)

Next in journey: [EMA and Bayesian updates for online scoring](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/ema-vs-bayesian-updates/)
