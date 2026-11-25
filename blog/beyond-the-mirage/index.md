Title: Beyond the Mirage: a framework for AGI classification and controllable progress

[Read HTML](https://causality.in/blog/beyond-the-mirage/)

Author: Harsh Joshi

<a id="beyond-the-mirage-a-framework-for-agi-classification-and-controllable-progress"></a>

# Beyond the Mirage: a framework for AGI classification and controllable progress

An AI can give an impressive answer about the world without knowing what would happen if it changed that world. It can also act through tools without understanding the consequences of its actions. These are different gaps. Counting parameters does not tell us which one has been crossed.

This framework proposes judging progress towards AGI by verifiable changes in capability: from recognising associations to reasoning about interventions and counterfactuals, and from answering a prompt to pursuing a goal. The **Agentic Causal Intelligence framework**, or ACI, puts those two dimensions on separate axes. The safety roadmap alongside it asks how our ability to verify and constrain a system can keep pace with what it can do.

The central claim is that we face a **Causal Barrier**. Robust causal understanding requires more than fluent reproduction of statistical relationships. The gap is a difference in kind, and crossing it calls for a qualitative change in what a system can represent and reason about. Scaling alone is an inadequate account of that change.

**Note**

**This research proposal dates from September 2025; its examples and judgments about models belong to that setting.** The strong architectural thesis, ACI classifications and safety roadmap are hypotheses to test; the reported experiments retain the narrower scope stated beside them.

<a id="why-bigger-isn-t-necessarily-smarter"></a>

## Why bigger isn't necessarily smarter

Large language models learn from enormous bodies of text. They are remarkable navigators of its patterns and correlations. That is mastery of statistical entropy: finding a path through a vast landscape of possible language. But reasoning about the world asks which relationships survive an intervention. A convincing continuation of a sentence and a reliable answer about a changed world are different achievements.<sup><a id="fnref-note-656e74726f70792d696d616765"></a>[1](#fn-note-656e74726f70792d696d616765)</sup>

Two lines of work make parameter count an inadequate answer. The first asks how to spend a training budget. The second asks what a score actually measures.

<a id="chinchilla-size-and-data-must-be-considered-together"></a>

### Chinchilla: size and data must be considered together

DeepMind's 2022 Chinchilla study compared more than 400 training runs. Its compute-optimal analysis found that model size and training tokens should grow in roughly equal proportions. The resulting 70-billion-parameter Chinchilla used 1.4 trillion tokens and the same training compute as the 280-billion-parameter Gopher. It outperformed Gopher on the reported evaluations; its MMLU accuracy was 67.5%, more than seven percentage points higher.<sup><a id="fnref-note-6368696e6368696c6c61"></a>[2](#fn-note-6368696e6368696c6c61)</sup>

Parameter count had concealed how the budget was allocated. Training efficiency, data and the cost of using the resulting model belonged in the comparison. The result makes progress an engineering question: what does this allocation of resources actually buy? Its compute-optimal training relation still has to be distinguished from an optimum for a particular inference workload.

That is a useful correction to the spectacle of the ever-larger number. Better engineering can change what the same resources buy. For how that possibility reaches an ordinary business, [Evolution of AI, and its future in B2B](https://daostudio.in/blog/evolution-of-ai-and-its-future-in-b2b/) (on DAO Studio) follows the interface through to the work behind it.

<a id="the-mirage-of-emergence"></a>

### The mirage of emergence

Schaeffer, Miranda and Koyejo's 2023 study offered a measurement explanation for apparently abrupt abilities. A strict all-correct score can stay near zero even while the probability of getting each part right improves. Change the metric, and the same outputs can reveal a smoother progression. They examined arithmetic in the GPT-3/InstructGPT family, metric choices in BIG-Bench, and artificial examples of apparent emergence in vision models.<sup><a id="fnref-note-656d657267656e6365"></a>[3](#fn-note-656d657267656e6365)</sup>

Imagine a task with ten independently correct steps, each succeeding with probability $p$. Success on the whole task is $p^{10}$. That curve can make a steady improvement in the parts look like a sudden arrival of useful whole-task performance. The example is a calculation under an independence assumption, not a model of every reasoning process.

Before declaring a new kind of intelligence, inspect the metric. The same model outputs can support a story about a sudden leap or a story about steady improvement, depending on how success is counted. That makes measurement part of the explanation, rather than a neutral window onto it.<sup><a id="fnref-note-656d657267656e63652d6c696d6974"></a>[4](#fn-note-656d657267656e63652d6c696d6974)</sup>

<a id="two-axes-rather-than-one-ladder-of-model-sizes"></a>

## Two axes, rather than one ladder of model sizes

The first ACI axis asks what kind of causal question the system can answer. It borrows the distinction between association, intervention and counterfactuals from the causal hierarchy.<sup><a id="fnref-note-706561726c"></a>[5](#fn-note-706561726c)</sup>

**Level 1, association: seeing.** What does observing $X=x$ tell us about $Y$? The expression $P(Y\mid X=x)$ describes this question. An observation can be informative without being a cause. Seeing an umbrella may predict rain; making someone carry an umbrella does not thereby make it rain.

**Level 2, intervention: doing.** What happens if $X$ is deliberately set to $x$? Write this as $P(Y\mid\operatorname{do}(X=x))$. An intervention changes the mechanism determining $X$. Recovering its effect needs appropriate causal assumptions or experimental information; an observational distribution alone does not generally determine it.

**Level 3, counterfactuals: imagining otherwise.** Given what actually happened, what would have happened under a different action? This combines evidence about the actual situation with a model of the alternative. It asks more than an unconditioned prediction about a new intervention.

Those are classes of questions and information. Turning them into an assessment of a deployed AI requires named tasks, assumptions and tests. Producing text containing a causal equation does not establish that the system has solved the corresponding problem.

The second axis asks how the system acts.

**Grade A, passive or oracle.** A system receives an input and returns an answer. In the proposed classification, a base model used for a single response is the straightforward example. Planning described in an answer is different from authority to execute the plan.

**Grade B, reactive or tool-using.** The system chooses and uses an external tool within the task. Toolformer is an early research example: it learned when to call APIs, what arguments to supply and how to incorporate the results into subsequent prediction.<sup><a id="fnref-note-746f6f6c666f726d6572"></a>[6](#fn-note-746f6f6c666f726d6572)</sup> Retrieval and calculators expand what an answer can use. Their availability does not establish causal understanding of the task.

**Grade C, proactive or agentic.** A system pursues a goal through several steps, maintaining context, planning, inspecting results and revising its approach. AutoGPT-like arrangements illustrate this direction. The unit being classified is the whole arrangement, including memory, tools and permissions, rather than its underlying model in isolation.

<a id="the-proposed-aci-matrix"></a>

### The proposed ACI matrix

Cross the axes and the landscape becomes easier to read. A system can move right by gaining tools and autonomy without moving upwards in causal reasoning. The labels below are proposed placements, with the upper cells describing the capabilities we would need to demonstrate.

| Causal depth | A: passive / oracle | B: reactive / tool-using | C: proactive / agentic |
| --- | --- | --- | --- |
| 3: counterfactual | Counterfactual oracle | Reactive counterfactual agent | Proactive counterfactual agent: the proposal's AGI target |
| 2: interventional | Interventional oracle; JEPA was suggested as a research direction | Reactive interventional agent | Proactive interventional agent |
| 1: associative | Standard base LLM, illustrated by GPT-3-era use | Tool-using LLM, illustrated by Toolformer or RAG | Agentic framework, illustrated by AutoGPT-like use |

The ACI matrix places these language-model examples on the associative row. Tool use and a planning loop make them more capable agents, but do not by themselves show that their reasoning has crossed into intervention. That upward move is the immediate frontier the framework asks us to confront.

Predictive world models are one promising route. LeCun's JEPA proposal asks how a system could learn representations useful for reasoning and planning.<sup><a id="fnref-note-6a657061"></a>[7](#fn-note-6a657061)</sup> It belongs here as a research direction towards an interventional oracle, rather than a certified Level 2 result. A model earns that classification through the questions it can answer.

The notional ACI-3C destination is a proactive agent that can reason counterfactually in pursuit of its objectives. That is the framework's AGI target: autonomy joined to a deeper understanding of what could have happened and what an action would change.

<a id="what-the-causal-benchmarks-actually-test"></a>

## What the causal benchmarks actually test

Fluent models can stumble when a causal question becomes unfamiliar, logically constrained or demanding across several perspectives. These failures motivate the Causal Barrier thesis. We need a scorecard that exposes them, rather than one that lets a persuasive answer stand in for understanding.

| Study | Evaluated task and population | Relevant finding |
| --- | --- | --- |
| CausalProbe-2024 | Fresh-news causal questions; studied models include LLaMA 2 7B, LLaMA 3 8B, GPT-3.5 Turbo and Claude 3 Opus | Performance fell relative to older causal QA benchmarks; the authors also tested a knowledge- and goal-assisted method that improved results. |
| Corr2Cause | More than 200,000 examples generated to test causal inference from correlational statements; seventeen evaluated LLMs | The authors report near-random performance and limited out-of-distribution generalisation after fine-tuning. |
| CausalBench, mathematics | GPT-4 Turbo, as named in Table 2 of the paper | 88.7% of individual questions correct; 61.4% of scenario groups had all four question types correct. |

CausalProbe drew news from the BBC and the Guardian dated 1 January–29 April 2024. Its freshness checks reduce a memorisation concern; they do not make every training exposure independently inspectable. Its “level-1” and “level-2” terminology distinguishes recalled associations from the authors' notion of more genuine reasoning, and must not be substituted automatically for the three Pearl rungs.<sup><a id="fnref-note-63617573616c70726f6265"></a>[8](#fn-note-63617573616c70726f6265)</sup>

Corr2Cause is a test of reasoning under a constructed set of conditions. Its result does not establish that arbitrary real-world correlations identify a causal relationship. The conditions that make a conclusion follow are part of the problem.<sup><a id="fnref-note-636f7272326361757365"></a>[9](#fn-note-636f7272326361757365)</sup>

CausalBench's two percentages use different denominators. The lower score counts success on all four perspectives together: cause to effect, effect to cause, and each with intervention. This is a stricter consistency requirement, not a before-and-after decline on the same measure. The paper separately compares causal scores with a summarisation hallucination leaderboard, including Mistral; that association is not an experiment showing causal skill reduces hallucination.<sup><a id="fnref-note-63617573616c62656e6368"></a>[10](#fn-note-63617573616c62656e6368)</sup>

These are concrete failures to explain and concrete tests for future systems to improve. The architectural interpretation is that crossing from association to reliable intervention requires a deeper change than another headline model size. The benchmark results locate weaknesses in the tested systems; the architectural interpretation remains the stronger thesis being advanced here.

<a id="a-roadmap-for-verification-and-control"></a>

## A roadmap for verification and control

Why make the classification at all? Because an answer, an action and a self-directed sequence of actions create different problems of control. A system that can model consequences more deeply may also find ways around a restriction. The proposal therefore asks that capability and verification develop together.

Yampolskiy's argument about the limits of controlling advanced AI brings the concern into focus: a less capable controller may fail to anticipate or constrain a more capable system.<sup><a id="fnref-note-636f6e74726f6c"></a>[11](#fn-note-636f6e74726f6c)</sup> We cannot assume that an output filter suitable for an oracle will also control an agent able to plan around it.

The roadmap proposes three layers of work: **bounded alignment** for associative systems, **verifiable process** as systems acquire interventional capabilities, and **constrained agency** for the hypothetical counterfactual agents beyond them. Each layer adds a demand on what we can demonstrate. The roadmap is a research programme, not permission to give a lower-ranked model unchecked tools.<sup><a id="fnref-note-6167656e63792d73636f7065"></a>[12](#fn-note-6167656e63792d73636f7065)</sup>

<a id="bounded-alignment"></a>

### Bounded alignment

The first layer tries to keep prompts and responses within stated requirements. Constitutional AI's training approach uses principles to guide critique, revision and preference feedback. Llama Guard 3 is a separate example of a model trained to classify input and output content against a safety taxonomy.<sup><a id="fnref-note-636f6e737469747574696f6e616c"></a>[13](#fn-note-636f6e737469747574696f6e616c)</sup><sup><a id="fnref-note-6775617264"></a>[14](#fn-note-6775617264)</sup>

These techniques can be evaluated against particular unwanted outputs. They do not turn a policy into a guarantee that every output, downstream interpretation or tool action is safe. Their usefulness depends on the requirements, test population and ways they can fail.

The governance side matters too. NIST's AI Risk Management Framework and its July 2024 Generative AI Profile organise risks and responses across a system's lifecycle, including confabulation, harmful bias and information integrity.<sup><a id="fnref-note-6e697374"></a>[15](#fn-note-6e697374)</sup> They give an organisation questions to manage and evidence to maintain, rather than certifying a model's ACI level. The EU AI Act is another governance example, with its own risk-based legal categories and duties; those categories are not the ACI matrix.<sup><a id="fnref-note-65752d616374"></a>[16](#fn-note-65752d616374)</sup>

<a id="verifiable-process"></a>

### Verifiable process

Checking only the final answer is insufficient when the system uses tools or handles protected information. Which program ran? What input did it receive? Which outside action occurred? Was the process altered? Hardware isolation, cryptographic proofs and formal verification can each make a different part of that account inspectable.

Trusted execution environments can isolate a computation from parts of the host under a specified threat model. Intel SGX is one example. Its protections do not cover every side channel, and the application still has to handle vulnerable code, exposed inputs and recovery.<sup><a id="fnref-note-746565"></a>[17](#fn-note-746565)</sup> Protecting a program from alteration is not the same as proving that its decisions are correct.

Zero-knowledge machine learning proposes proofs that a stated computation was carried out without revealing all the underlying private information. A proof of inference can establish execution of the represented model and operation; it does not establish that the model's answer is true or that the chosen objective is acceptable. Proof generation and the faithful representation of the computation introduce costs and assumptions of their own.<sup><a id="fnref-note-7a6b6d6c"></a>[18](#fn-note-7a6b6d6c)</sup>

The earlier blockchain essay, [A precognition court for AI](https://daostudio.in/collections/protocols-and-reuse/a-court-before-the-consequence/a-precognition-court-for-ai/) (on DAO Studio), explores a related intuition: make relevant operations inspectable and constrain what a system can do through the surrounding arrangement. It is a deliberately abstract argument, not a claim that a ledger solves intelligence or control. The useful question remains what is verified, by whom, and what the verification leaves outside its scope.

<a id="constrained-agency"></a>

### Constrained agency

For hypothetical systems with greater autonomy and counterfactual planning, we need to look beyond response filters to constraints on what can be done. Containment, interpretability, corrigibility and limits on resources belong in the research, alongside the physical and computational conditions under which an agent operates. The challenge is to find constraints that remain effective when a system can reason about the constraints themselves.

Energy gives the idea a concrete example. Computation needs infrastructure and power; deployment cannot be detached from those resources. Comparisons with Bitcoin or a country's electricity use make the scale imaginable, but only if the population, period and projected or observed status match. The IEA's April 2025 report estimated 415 TWh for all data centres in 2024 and projected about 945 TWh in its 2030 base case; neither number measures AI alone.<sup><a id="fnref-note-656e65726779"></a>[19](#fn-note-656e65726779)</sup> Energy is a physical constraint any deployed intelligence must face. Turning it into a reliable means of control would require a further argument.

Throughput supplies another analogy. Ethereum has a constrained base layer and a roadmap for scaling through other layers. Its account of danksharding describes a target above 100,000 transactions per second across the scaled system.<sup><a id="fnref-note-657468657265756d"></a>[20](#fn-note-657468657265756d)</sup> A globally operating intelligence would also need communication, data movement and infrastructure. Those can become bottlenecks even when local computation improves. The Ethereum number is a roadmap target for that network, not a calculated AGI requirement.

<a id="what-each-layer-has-to-establish"></a>

### What each layer has to establish

| Proposed layer | Risks motivating the layer | Main question | Candidate mechanisms and governance work |
| --- | --- | --- | --- |
| Bounded alignment, associated with ACI-1 | Misinformation, bias, harmful content, confabulation and intellectual-property infringement | Do inputs and outputs meet the requirements, and where do they fail? | Constitutional training, content classifiers, red teaming, risk assessment and accountable organisational review. |
| Verifiable process, associated with ACI-2 | Unverifiable tool use, process manipulation, data leakage, adversarial attacks and emergent harmful strategies | Did the stated computation and permitted actions occur under the declared conditions? | Trusted execution, proofs of computation, formal verification, auditable tools, hardware certification and secure APIs. |
| Constrained agency, associated with ACI-3 | Uncontrollability, goal misalignment, instrumental convergence and existential risk | What can the system do, resist or circumvent, and which limits remain effective? | Containment, interpretability, corrigibility, resource controls, monitoring and research on coordination between institutions. |

The policy proposal is to make permission to advance and deploy depend on evidence of appropriate controls. Controls cannot remain something we promise to add after capability. That puts regulatory frameworks, hardware certification and secure APIs alongside possible international arrangements over compute and energy, moratoriums and risk monitoring. These are governance proposals to examine; the benchmark studies do not decide the institutional choices for us.

<a id="the-transition-the-framework-asks-us-to-measure"></a>

## The transition the framework asks us to measure

AGI dates that leave the definition moving miss this distinction. An increasingly useful tool-using or autonomous assistant may be called AGI while leaving the causal threshold unanswered. Conversely, a narrow system can answer a difficult causal question without having general agency. A date means little until the capability and the test are stated.

The proposed path is a sequence of demanding phase transitions in what can be explained, predicted and done. The phrase expresses a qualitative change in capability; deriving a mathematical phase transition would need a specified model and parameter. The immediate challenge is to master intervention verifiably, alongside the separate growth of autonomy, and to build the corresponding means of control.

The measure of progress should therefore be more than model size or fluent prose. The ambition is robust causal reasoning, demonstrable alignment with the task and control over consequential action. Each needs evidence of its own. A matrix helps only if it makes those demands clearer.

The economic question continues in [One Yardstick, One Clock](https://post-agi-economics.org/blog/one-yardstick-one-clock/) (on Post-AGI Economics) and [The Red Pill](https://post-agi-economics.org/blog/the-red-pill/) (on Post-AGI Economics): even when an agent can do the work, how does the economy adapt, and who can buy what it produces? The mathematical question continues through [changing descriptions](https://causality.in/collections/changing-descriptions/): which distinctions must a model retain to answer the next question? [The ineffable geometry](https://causality.in/blog/the-ineffable-geometry/) and [Entropy and a learning mind](https://causality.in/blog/entropy-and-a-learning-mind/) approach that question from the earlier geometric and learning intuitions.

Yay, you made it to the end. Congratulations.

1. 
   
   <a id="fn-note-656e74726f70792d696d616765"></a>
   
   “Statistical entropy” expresses the opening intuition. This argument does not define an entropy measure that ranks causal understanding against language modelling. [↩](#fnref-note-656e74726f70792d696d616765)

2. 
   
   <a id="fn-note-6368696e6368696c6c61"></a>
   
   Hoffmann et al., [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556), 2022, and [DeepMind's account of the experiment](https://deepmind.google/blog/an-empirical-analysis-of-compute-optimal-large-language-model-training/). [↩](#fnref-note-6368696e6368696c6c61)

3. 
   
   <a id="fn-note-656d657267656e6365"></a>
   
   Schaeffer, Miranda and Koyejo, [Are Emergent Abilities of Large Language Models a Mirage?](https://rylanschaeffer.github.io/content/research/2023_neurips_llm_emergent_abilities_mirage/paper.pdf), NeurIPS 2023. [↩](#fnref-note-656d657267656e6365)

4. 
   
   <a id="fn-note-656d657267656e63652d6c696d6974"></a>
   
   The metric result concerns the studied tasks and model families. It does not prove that every future capability is predictable. A smoothly crossed threshold can still change which complete tasks a system can perform. [↩](#fnref-note-656d657267656e63652d6c696d6974)

5. 
   
   <a id="fn-note-706561726c"></a>
   
   Shpitser and Pearl, [Complete Identification Methods for the Causal Hierarchy](https://ftp.cs.ucla.edu/pub/stat_ser/r336-published.pdf), JMLR 9, 2008. [↩](#fnref-note-706561726c)

6. 
   
   <a id="fn-note-746f6f6c666f726d6572"></a>
   
   Schick et al., [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761), 2023. [↩](#fnref-note-746f6f6c666f726d6572)

7. 
   
   <a id="fn-note-6a657061"></a>
   
   LeCun, [A Path Towards Autonomous Machine Intelligence](https://openreview.net/pdf?id=BZ5a1r-kVsf), position paper, 27 June 2022. [↩](#fnref-note-6a657061)

8. 
   
   <a id="fn-note-63617573616c70726f6265"></a>
   
   Chi et al., [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://arxiv.org/html/2506.21215v1), preprint v1, 26 June 2025, especially sections 6.1–6.3 and the limitations. [↩](#fnref-note-63617573616c70726f6265)

9. 
   
   <a id="fn-note-636f7272326361757365"></a>
   
   Jin et al., [Can Large Language Models Infer Causation from Correlation?](https://proceedings.iclr.cc/paper_files/paper/2024/file/7b75a7339dfb256ee4b4bec028a6890b-Paper-Conference.pdf), ICLR 2024. [↩](#fnref-note-636f7272326361757365)

10. 
    
    <a id="fn-note-63617573616c62656e6368"></a>
    
    Wang, [CausalBench: A Comprehensive Benchmark for Evaluating Causal Reasoning Capabilities of Large Language Models](https://aclanthology.org/2024.sighan-1.17.pdf), SIGHAN-10, 16 August 2024; mathematics Table 2 and the separate hallucination comparison in section 4. [↩](#fnref-note-63617573616c62656e6368)

11. 
    
    <a id="fn-note-636f6e74726f6c"></a>
    
    Yampolskiy, [On Controllability of AI](https://arxiv.org/abs/2008.04071), 2020. [↩](#fnref-note-636f6e74726f6c)

12. 
    
    <a id="fn-note-6167656e63792d73636f7065"></a>
    
    Causal depth and access to act are separate in the matrix. A tool-using ACI-1B or proactive ACI-1C arrangement can already have consequential effects. The three research layers therefore do not supply a sufficient control policy for each deployment merely from its causal row. [↩](#fnref-note-6167656e63792d73636f7065)

13. 
    
    <a id="fn-note-636f6e737469747574696f6e616c"></a>
    
    Bai et al., [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073), 2022. [↩](#fnref-note-636f6e737469747574696f6e616c)

14. 
    
    <a id="fn-note-6775617264"></a>
    
    Meta, [Llama Guard 3 8B model card](https://huggingface.co/meta-llama/Llama-Guard-3-8B), describing the 2024 model. [↩](#fnref-note-6775617264)

15. 
    
    <a id="fn-note-6e697374"></a>
    
    NIST, [Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://doi.org/10.6028/NIST.AI.600-1), July 2024. [↩](#fnref-note-6e697374)

16. 
    
    <a id="fn-note-65752d616374"></a>
    
    European Commission, [AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai). The law supplies its own classification and application timetable; this proposal does not infer a legal category from an ACI cell. [↩](#fnref-note-65752d616374)

17. 
    
    <a id="fn-note-746565"></a>
    
    Intel, [Intel SGX SDK for Linux overview](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/linux-overview.html), including its stated side-channel limitation; consulted 16 November 2026. [↩](#fnref-note-746565)

18. 
    
    <a id="fn-note-7a6b6d6c"></a>
    
    [A Survey of Zero-Knowledge Proof Based Verifiable Machine Learning](https://arxiv.org/abs/2502.18535), 2025, reviewing work through December 2024. [↩](#fnref-note-7a6b6d6c)

19. 
    
    <a id="fn-note-656e65726779"></a>
    
    IEA, [Energy and AI: executive summary](https://www.iea.org/reports/energy-and-ai/executive-summary), April 2025. The population is all data centres; the 2030 value is a projection. [↩](#fnref-note-656e65726779)

20. 
    
    <a id="fn-note-657468657265756d"></a>
    
    Ethereum, [Danksharding](https://ethereum.org/roadmap/danksharding), consulted 16 November 2026; the quoted capacity is a roadmap goal. [↩](#fnref-note-657468657265756d)
