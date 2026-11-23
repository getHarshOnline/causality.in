Title: When the support moves

[Read HTML](https://causality.in/blog/when-the-support-moves/)

Author: Harsh Joshi

<a id="when-the-support-moves"></a>

# When the support moves

“With more samples, we can detect smaller changes.” But how much smaller? Suppose an instrument produces independent measurements uniformly between zero and an endpoint θ. Another setting moves that endpoint slightly. Most readings could have come from either setting; one reading beyond the old endpoint could not. That sharp edge gives another sample an opportunity unlike the one it has in a smooth shift of an average.

We can calculate what the opportunity is worth. Let the original law be uniform on `[0, θ]`, with θ positive, and compare it with a uniform law on a slightly longer interval. The endpoint changes which observations are possible. Following that change through a two-hypothesis test gives a detection scale that sample count alone would not tell us.

<a id="a-single-observation-can-rule-out-one-hypothesis"></a>

## A single observation can rule out one hypothesis

Call the original endpoint $\theta$ and the alternative endpoint $\theta+\delta$, with $\delta>0$. If any observation exceeds $\theta$, it is impossible under the original law. If every observation lies below $\theta$, both laws remain possible.

Under the alternative, one observation lies below $\theta$ with probability $\theta/(\theta+\delta)$. For $n$ independent observations, the probability that all remain below it is

$$
q_n=\left(\frac{\theta}{\theta+\delta}\right)^n.
$$

The support boundary is doing the work. Yibi Huang's [parameter-estimation lecture](https://www.stat.uchicago.edu/~yibi/teaching/stat244/L14.pdf) uses the uniform-endpoint family to show why a sample maximum constrains which endpoints have nonzero likelihood. Here we use that same boundary for a two-hypothesis test rather than estimate an unrestricted endpoint.

<a id="the-optimal-balanced-test-has-an-exact-error"></a>

## The optimal balanced test has an exact error

Give the two hypotheses equal prior probability and charge the same loss for either wrong answer. On the common region, the original law has the greater joint density: $\theta^{-n}$ rather than $(\theta+\delta)^{-n}$. Outside it, only the alternative can occur.

The optimal decision is therefore original when all observations are at most $\theta$, alternative otherwise. It never mistakes the original law for the alternative. Under the alternative, it is wrong with probability $q_n$. Averaging over the equal priors gives total error $q_n/2$.

This is a complete calculation for the declared test. It is not an empirical error estimate or a guarantee for an unknown population. Different priors or unequal losses would change the decision threshold.

<a id="an-inverse-sample-change-remains-detectable"></a>

## An inverse-sample change remains detectable

Now let the alternative depend on sample count: set $\delta=h/n$, for fixed $h>0$. Then

$$
q_n=\left(1+\frac{h}{n\theta}\right)^{-n}\longrightarrow e^{-h/\theta},
\qquad \text{balanced error}\longrightarrow\frac12e^{-h/\theta}.
$$

The limit lies strictly between zero and one half. Thus an endpoint difference on the $1/n$ scale retains nontrivial discrimination in this model.

For an arithmetic illustration, choose θ and h both equal to ten. With one hundred observations, the alternative endpoint is 10.1 and the error is about 0.185. As n grows, the error approaches `e⁻¹/2`, about 0.184, while the endpoint difference shrinks. These are model calculations, not measurements from an experiment.

At a larger difference $h/\sqrt n$, the same test's error instead tends to zero. The square-root scale is therefore not the smallest scale that retains discrimination here. That does not disprove square-root conclusions in models whose assumptions justify them. It disproves their unrestricted use across different experiments.

<a id="keep-local-and-fixed-alternatives-separate"></a>

## Keep local and fixed alternatives separate

If δ is fixed while n grows, q\_n decays exponentially. If δ changes with n, a different limiting problem is being asked. A theorem for fixed alternatives cannot be silently transferred to the second comparison.

![Exact test error tends to zero for a fixed endpoint gap and for a gap of 10 divided by square root n, but approaches about 0.184 for a gap of 10 divided by n.](https://causality.in/blog/when-the-support-moves/fixed-and-local-alternatives.svg)

All three curves use $\theta=10$ and the exact error $q_n/2$. The alternatives differ: a fixed gap of $0.1$, a local gap of $10/n$, and a gap of $10/\sqrt n$. At $n=100$ the first two compare the same endpoints and meet. Beyond that point, only one keeps moving the alternative closer.

Dependence, measurement noise, a different distribution family or a different decision can change the information in each observation. A noisy instrument may erase the sharp boundary that makes this calculation possible.

[MONAD's](https://causality.in/monad/) formal testing work includes this moving-support counterexample. Its particular resource consequence comes from the sharp boundary: each sample has an opportunity to enter a region the original hypothesis cannot produce. Changing that opportunity changes what another sample is worth. Sample count becomes informative through the observation model, and the model's support is part of the detection claim rather than a detail to omit from its reported rate.


## Article notes

<a id="gazette-notes-testing-two-uniform-endpoints"></a>

## Testing two uniform endpoints

Let $P$ be uniform on $[0,\theta]$ and $Q$ uniform on $[0,\theta+\delta]$, with $\theta,\delta>0$. Observe $n$ independent samples. On the common region $A=[0,\theta]^n$, their joint densities are

$$f_P=\theta^{-n},\qquad f_Q=(\theta+\delta)^{-n}.$$

Outside $A$, only $Q$ has positive density. The probability of $A$ under $Q$ is

$$q_n=\left(\frac{\theta}{\theta+\delta}\right)^n.$$

With equal priors and unit loss for either mistake, selecting $P$ on $A$ and $Q$ outside it minimises error pointwise. The resulting risk is $q_n/2$: the rule never errs under $P$, and errs under $Q$ exactly on $A$.

The same overlap calculation gives the normalised total-variation distance

$$\operatorname{TV}(P^{\otimes n},Q^{\otimes n})=1-q_n.$$

Indeed, the overlap integral $\int\min(f_P,f_Q)$ equals $q_n$, since the smaller density on $A$ is the constant $Q$ density and there is no overlap outside $A$.

<a id="gazette-notes-unequal-priors-change-the-decision"></a>

### Unequal priors change the decision

Let the priors be $a$ for $P$ and $b$ for $Q$, with $a+b=1$. On $A$, compare $af_P$ with $bf_Q$; outside it, choose $Q$. The optimal risk is

$$R_n=\int\min(af_P,bf_Q)=\min(a,bq_n).$$

If $a<bq_n$, even a sample entirely within the smaller interval does not outweigh the prior preference for $Q$, and always selecting $Q$ attains risk $a$. Otherwise the support-boundary rule attains risk $bq_n$.

For a local alternative $\delta=h/n$ with $h>0$ fixed,

$$q_n=\left(1+\frac{h}{n\theta}\right)^{-n}\longrightarrow e^{-h/\theta},\qquad R_n\longrightarrow\min(a,be^{-h/\theta}).$$

These are exact comparisons for known endpoints and independent uniform samples. They show why this experiment retains discrimination at an inverse-sample scale. Adding measurement noise, estimating the original endpoint or changing the distribution family produces another testing problem rather than an automatic extension of this calculation.

