Title: A noisy answer is not an exact repair

[Read HTML](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/recovering-a-distinction-from-a-noisy-answer/)

Author: Harsh Joshi

<a id="a-noisy-answer-is-not-an-exact-repair"></a>

# A noisy answer is not an exact repair

A summary may preserve one part of a state and discard another. If a new question needs the discarded bit, a fresh report can help without making the answer certain. That difference is easy to miss when the report and an exact supplement both occupy one binary symbol.

<a id="one-report-two-possible-original-states"></a>

## One report, two possible original states

Suppose that within each retained-summary class the missing bit is equally likely to be zero or one, and a source reports it incorrectly with probability $0.1$ in either case. Reading the report supplies useful evidence. It cannot supply an exact supplement that recovers the bit in every state: either received value remains possible under either original bit.

For this symmetric source and equal prior, using the reported bit is the best decision, with error probability $0.1$. Three reads with conditionally independent errors let a majority vote reduce that error to

$$
3(0.1)^2(0.9)+(0.1)^3=0.028.
$$

The improvement comes from new source observations, not further processing of the first report. Copying that report three times leaves the error at $0.1$. Even genuinely independent repetition cannot give a perfect finite guarantee here: every finite sequence of reports has positive probability under either original bit.

Alphabet size, channel information and acquisition cost now answer different questions. Two supplement symbols can represent the exact missing answer when the encoder knows it and delivery preserves it. A noisy report carries information while leaving a chance of the wrong answer. Asking again spends access or measurement resources to change that chance. A repair can trade those costs against an acceptable error, but it has changed the promise from answering every state correctly to controlling a declared risk. The smallest [exact repair tree](https://causality.in/collections/changing-descriptions/from-summary-to-repair/the-price-of-another-question/) and the best statistical test consequently solve different problems.

[MONAD](https://causality.in/monad/) studies the distinction between exact preservation and comparison under uncertainty. An [exact summary](https://causality.in/collections/changing-descriptions/from-summary-to-repair/compression-is-a-promise/) is sufficient for a family of questions. A statistical observation instead gives a decision some attainable risk under a declared law. Both accounts can be precise, but their hypotheses determine what the word ‘repair’ can mean.


## Article notes

<a id="gazette-notes-information-and-error-in-the-same-report"></a>

## Information and error in the same report

Fix a retained-summary class in which the missing bit $B$ is fair, and let $Y$ be its report through an independent flip with probability $p=0.1$. All probabilities here are conditional on that retained summary. The joint masses are $0.45$ for each matching pair and $0.05$ for each mismatching pair. Both marginals are fair. Using natural logarithms, their mutual information is

$$
I(B;Y)=\sum_{b,y}P(b,y)\log\frac{P(b,y)}{P(b)P(y)}
=0.9\log(1.8)+0.1\log(0.2)
\approx0.3681\text{ nats}.
$$

Dividing by $\log2$ gives approximately $0.5310$ bits. This is the information in one use under the declared fair input law, not a count of exact answers recovered or a repeated-use coding result. The alphabet still has two symbols.

The minimum binary error can be computed from the overlap of the prior-weighted report laws. Write $P_0(y)$ and $P_1(y)$ for the conditional masses given the two original bits. For a fair prior,

$$
R^*=\sum_y\min\{\tfrac12P_0(y),\tfrac12P_1(y)\}
=0.05+0.05=0.1.
$$

At either report, choosing the more probable original bit attains that value. Randomising between answers cannot lower it. The positive information and positive minimum error describe the same channel without contradicting one another.

For three independent uses conditional on the original bit, majority error is the probability of two or three flips, $3p^2(1-p)+p^3=0.028$. The repeated evidence changes the observation law. Processing one fixed report, by contrast, cannot increase its information about the bit or beat the best decision already available from it. With $0<p<1$, every finite report sequence has positive probability under both original bits, so exact recovery in every case remains impossible. A zero-error supplement uses a different delivery assumption, not a different name for the same risk.



Reading path: [Changing descriptions](https://causality.in/collections/changing-descriptions/) > [Preservation under uncertainty](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/) > [A noisy answer is not an exact repair](https://causality.in/collections/changing-descriptions/preservation-under-uncertainty/recovering-a-distinction-from-a-noisy-answer/)
