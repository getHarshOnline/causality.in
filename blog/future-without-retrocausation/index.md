Title: The future can constrain a model without sending a message back

[Read HTML](https://causality.in/blog/future-without-retrocausation/)

Author: Harsh Joshi

<a id="the-future-can-constrain-a-model-without-sending-a-message-back"></a>

# The future can constrain a model without sending a message back

A destination changes how we plan a journey. A terminal condition can also change a mathematical path everywhere along its course. Both invite a question: what happens when we describe a stretch of history together with the futures it admits, rather than describing only an isolated present state?

The answer depends on what the future contributes to the construction. Planning uses predictions to choose an action now. A boundary-value problem specifies conditions at more than one point and asks for a whole path consistent with them. An advanced equation explicitly contains the state at a later time. These give three different ways to formulate a temporal question. They require different data and support different conclusions.

<a id="an-endpoint-is-a-constraint-not-an-observation-from-tomorrow"></a>

## An endpoint is a constraint, not an observation from tomorrow

Consider continuously differentiable paths $x$ on $[0,1]$ with $x(0)=0$ and $x(1)=1$. Minimise $E[x]=\int_0^1(x'(t))^2\,dt$. Write $x(t)=t+u(t)$ with $u(0)=u(1)=0$. Then

$$
E[x]=\int_0^1(1+u')^2\,dt
=1+2\bigl(u(1)-u(0)\bigr)+\int_0^1(u')^2\,dt
=1+\int_0^1(u')^2\,dt.
$$

The remaining integral is non-negative. Equality requires $u'=0$ throughout; the endpoints then force $u=0$. Thus $x(t)=t$ is the unique minimiser in this class. The proof identifies both the solution and why no bent path can tie it.

![The straight path minimises energy among three curves that share the same two endpoints.](https://causality.in/blog/future-without-retrocausation/admissible-paths.svg)

The plotted family is $x(t)=t+a\sin(\pi t)$, with $a=0,0.2,-0.2$. Every path satisfies the same endpoint data, while $E=1+a^2\pi^2/2$. The bent paths remain admissible; the energy criterion selects the straight one.

The terminal condition affects the solution everywhere. We supplied both endpoints as part of the problem, rather than obtaining tomorrow's measured endpoint today. Different endpoint data define a different problem. What is solved together is the path: each local value belongs to a trajectory satisfying the given conditions and minimising the stated energy.

That makes the elementary example useful beyond its simplicity. It shows how a whole-path question can constrain local behaviour through consistency, without a mechanism that sends information backwards. The future enters as a condition on the admissible solution, and its role is explicit enough to examine.

<a id="predicting-is-another-construction"></a>

## Predicting is another construction

A planner can simulate candidate actions, score their predicted consequences and choose one. Its predictions may be mistaken because the action at the present time depends on an available model of the future, not an observation of the actual future. The prediction and objective are the information available for that choice. Comparing the actions they select and the outcomes that follow tests their usefulness; the actual future remains something the planner will encounter, including the consequences its model missed.

An equation containing $x(t+\tau)$ makes a different commitment. One must specify a domain, admissible solution class and boundary data, and establish whether a solution exists or is unique. Inconsistency or non-uniqueness is a possible mathematical outcome. Physical realisation would be a further question about that particular model.

<a id="the-boundary-changes-the-representation-of-a-local-state"></a>

## The boundary changes the representation of a local state

A linear example exposes where the supplied information sits. For $y'(t)=-\lambda y(t)+f(t)$ with $\lambda>0$ and initial data at $t_0$, the solution is

$$
y(t)=e^{-\lambda(t-t_0)}y(t_0)+\int_{t_0}^t e^{-\lambda(t-s)}f(s)\,ds.
$$

The current value is written in terms of an initial state and a weighted history of forcing. Specify the terminal value at $T$ instead, and the same equation can be written

$$
y(t)=e^{\lambda(T-t)}y(T)-\int_t^T e^{\lambda(s-t)}f(s)\,ds.
$$

This second representation uses future forcing and a terminal condition because those are the data we supplied. It has not made them available to a real-time observer. The growing coefficient also exposes the instability of [reconstructing an earlier state through a noisy record](https://causality.in/blog/the-record-and-the-arrow/): a small terminal error is magnified as the reconstructed interval lengthens. A formula for a path and a procedure that can reliably obtain it from available observations are different achievements.

Eliminating an unobserved linear component from a larger model can leave a history integral or a future-conditioned integral in the remaining variables, depending on how that component was anchored. That is a mathematical route to temporal nonlocality in a reduced description. It still requires the larger equations and their data. Conversely, an equation that mixes delayed and advanced states cannot be justified by the existence of either representation above: its well-posedness is its own question, and resonant or inconsistent boundary data can prevent a solution in the declared class.

<a id="a-description-along-a-path"></a>

## A description along a path

The wider ambition is to understand how the path taken changes what a description needs to preserve. Two states may answer the same questions now and give different answers after an allowed continuation. A terminal condition may rule out a path that otherwise looks locally admissible. A model adequate for one predicted future may fail when another becomes relevant. These are connected intuitions, but they are not the same mathematical relation.

[MONAD](https://causality.in/monad/) investigates descriptions, probes and the continuations a description permits; its temporal branch asks how planning, whole-trajectory constraints and literal advanced states fit into that inquiry. How the three connect remains research work. The endpoint calculation supplies one exact construction, not a theory of every temporal dependence or a physical demonstration of retrocausation.

What makes the question promising is the possibility of following a local description through a larger stretch of permitted change. Instead of giving the future a mysterious influence, we can ask which paths remain possible, which information their selection requires, and where a present description ceases to be enough.
