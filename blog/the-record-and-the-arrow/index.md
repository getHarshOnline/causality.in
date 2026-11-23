Title: The record and the arrow

[Read HTML](https://causality.in/blog/the-record-and-the-arrow/)

Author: Harsh Joshi

<a id="the-record-and-the-arrow"></a>

# The record and the arrow

The trace is still there: a sensor value, an image, a stored summary. Following it backwards seems like a matter of undoing what happened. Yet a perfectly reversible motion can leave a record compatible with several different beginnings. Where did the ambiguity enter if the motion itself lost nothing? The answer lies in the whole route from the state to the record, including what the observer could see and keep.

This is one reason the observer belongs inside a description of the problem. Not because attention changes physical law, but because resolution, noise, preparation and permitted operations change which questions a record can answer. [A finite budget](https://causality.in/collections/changing-descriptions/from-summary-to-repair/budgeted-questions/) can make a distinction unreachable even when it still exists in the underlying system.

The record-and-observer account began in [Reckon's](https://causality.in/reckon/) February 2026 framework. Its [retrodiction chapter](https://docs.causality.in/reckon/retrodiction) separates identifiability, inverse sensitivity and noise before deriving the logarithmic horizon. The calculation here develops that distinction for a reader who need not run the laboratory.

<a id="reversing-the-dynamics-does-not-reverse-the-channel"></a>

## Reversing the dynamics does not reverse the channel

Write an effective observation as

$$
O_{\tau,R,s}=C_R\circ\Pi_s\circ\Phi_\tau\circ U.
$$

Here $U$ is an allowed preparation, $\Phi_\tau$ the evolution over time $\tau$, $\Pi_s$ the observation scale and $C_R$ the record channel available under resources $R$. Reconstructing an earlier state requires the relevant information to survive the whole composition. Inverting $\Phi_\tau$ alone cannot undo distinctions that $\Pi_s$ erased.

A finite example makes this exact. Rotate a three-bit state so that `(a,b,c)` becomes `(b,c,a)`, then record only its first bit. The rotation is reversible, but the record `0` has four possible earlier states because it tells us only that `b=0`. With all three output bits, the past is uniquely recoverable. With one bit, it is not. Extra precision in that one bit cannot recover `a` or `c`; another observation is needed. Non-identifiability is not merely a difficult numerical inversion.

<a id="a-unique-inverse-can-still-amplify-error"></a>

## A unique inverse can still amplify error

Now consider $y_\tau=e^{-\lambda\tau}x_0$, with $\lambda>0$ and bounded observation error $|\xi|\leq\sigma$. The map is injective at every finite $\tau$, but its inverse amplifies error:

$$
\hat x_0=e^{\lambda\tau}(y_\tau+\xi),
\qquad |\hat x_0-x_0|\leq e^{\lambda\tau}\sigma.
$$

For a fixed noise bound and required error $\varepsilon\geq\sigma$, the worst-case guarantee holds only while

$$
\tau\leq\frac{\log(\varepsilon/\sigma)}{\lambda}.
$$

This horizon comes from conditioning of the inverse, not from a many-to-one evolution.

Take `λ=1` per unit of time, `σ=0.001` and an allowed reconstruction error of `0.1`. The worst-case guarantee reaches about `4.605` time units. Reducing the noise bound tenfold adds about `2.303` units; it does not multiply the horizon tenfold. A noiseless channel, a differently conditioned map or a different observable changes the result. The useful distinction is between information that never survived the record and information that survived but becomes increasingly expensive to recover accurately.

![A tenfold smaller noise bound shifts the error-bound curve, adding 2.303 time units before it reaches the same tolerance of 0.1.](https://causality.in/blog/the-record-and-the-arrow/retrodiction-horizon.svg)

The logarithmic vertical scale makes exponential error growth a straight line. Both curves use the same inverse and tolerance; reducing the record's noise shifts when the guarantee ends.

That makes a record design a question about future use. More stored detail is valuable when it preserves a distinction the later reconstruction needs. Repeated measurements can help only under an appropriate noise model; correlated errors need not average away. A log with perfect byte retention can still omit the preparation, the observation scale or the event needed to interpret its values.

<a id="entropy-depends-on-the-description-being-counted"></a>

## Entropy depends on the description being counted

For a closed system evolving by a measure-preserving reversible map, the fine-grained entropy of the transported distribution is unchanged, when that entropy is well defined. A macrostate instead groups many microstates. Its Boltzmann entropy is

$$
S_B(m)=k_B\log\mu(\Gamma_m),
$$

where $\Gamma_m$ is the set of microstates in macrostate $m$, $\mu$ is the measure the map preserves and $k_B$ is Boltzmann's constant. These are different objects. A macrostate can become more typical without the fine-grained distribution acquiring or destroying information in the same sense.

[Lebowitz's account of Boltzmann's entropy and time's arrow](https://physicstoday.aip.org/features/boltzmanns-entropy-and-times-arrow) explains how macroscopic irreversibility can coexist with reversible microscopic dynamics. Coarse and fine descriptions, a low-entropy past and typicality matter to that explanation. Reversibility by itself does not supply a theorem that every observation has an arrow, nor does naming a learning loss “entropy” make it a thermodynamic quantity.

The observer-relative question is consequently more precise than “is the past lost?” Which distinction was recorded, through which channel, at what scale, and which inverse problem is being attempted? [Given endpoint data](https://causality.in/blog/future-without-retrocausation/) can constrain a path because the information is part of the problem. A trace has to preserve the information from which the path might be recovered. The past can remain unique in the dynamics while several pasts remain compatible with the record.
