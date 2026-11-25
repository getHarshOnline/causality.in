Title: Reckon

[Read HTML](https://causality.in/reckon/)

<a id="reckon"></a>

# Reckon

What should an agent keep when it has room for only a few records? Reckon measures what changes outcomes for what it costs, with the uncertainty shown. The laboratory runs locally for Causality’s research. The problem in front is serving RawThoughts’ agent tools with the same comparison, so a proposed improvement can be compared before anyone decides to use it. The cases for that comparison come from [Pale](https://rawthoughts.in/pale/) (on RawThoughts)'s genealogy, its history of what each agent was given, what it did and what followed; the laboratory here runs without it.

Use the local laboratory to [compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/) or [inspect a saved run](https://causality.in/reckon/inspect-an-exported-run/).

<a id="keep-useful-experience-understand-what-it-changed"></a>

## Keep useful experience. Understand what it changed.

An early clue can matter several steps later. Run the same task with different memory rules or limits, then follow the surviving records into the outcome.

To find out whether one record helped, compare runs with that instance present and absent. Report the cost of finding out alongside the outcome difference. The comparison tests one change under stated conditions; a causal claim also needs the assumptions that support that interpretation.

- [Docs](https://docs.causality.in/reckon/overview "Developer documentation") 

- [Learn](https://causality.in/reckon/understand-the-memory-laboratory/ "Use-case guide and practical applications") 

- [GitHub](https://github.com/getHarshOnline/reckon "Explore on GitHub") 

- [Mentions](https://causality.in/reckon/mentions/ "Writing that discusses or references this product") 

<a id="follow-what-a-memory-changes"></a>

## Follow what a memory changes

Give the same classifier room for 2 examples or 16. [Compare its accuracy](https://causality.in/reckon/compare-replay-budgets/) on earlier tasks, then investigate which memory choices made a difference.

1. 
   
   <a id="follow-the-record"></a>
   
   ### Follow the record
   
   Follow a record from when it was written to when it was read, scored or removed. Use the saved result to see how the task performed.

2. 
   
   <a id="change-the-memory"></a>
   
   ### Change the memory
   
   Change the space available, the retention rule or the presence of one record. Keep the other conditions fixed so the comparison answers the question you chose.

3. 
   
   <a id="compare-the-useful-result"></a>
   
   ### Compare the useful result
   
   Compare accuracy or reward for each pair. When you test a policy or a record, report the uncertainty and what it cost to measure the difference, as well as the task's memory use.

## Collection contents

- Use the lab
  - [Understand the memory laboratory](https://causality.in/reckon/understand-the-memory-laboratory/)
  - [Compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/)
  - [Inspect an exported run](https://causality.in/reckon/inspect-an-exported-run/)
- Beyond the laboratory
  - [Cases, evaluations and decisions](https://causality.in/reckon/cases-evaluations-and-decisions/)

<a id="questions-about-reckon"></a>

## Questions about Reckon

**How do Reckon’s wider roles relate to the laboratory?**

A correction can become a case for testing a better method. Reckon connects the case, comparison and owner's decision while keeping ordinary evaluation useful on its own. [Cases, evaluations and decisions](https://causality.in/reckon/cases-evaluations-and-decisions/) follows that wider use.

**What does the laboratory show?**

It is for finding which retained records mattered and what keeping them cost: the saved result gives accuracy or reward, and the log shows which memory operations wrote, read or dropped records. The [laboratory guide](https://causality.in/reckon/understand-the-memory-laboratory/) explains how to follow those records and test a particular contribution.

**Is every contribution score causal?**

A causal claim needs a test that changes the record as intended, states the assumptions and keeps the other conditions fixed. Use a score to help choose what to keep, and use an outcome comparison to test what a record did. [The cache example](https://causality.in/collections/evidence-and-evaluation/from-observation-to-evaluation/causal-inference-primer/) works through that reasoning.

**Does Reckon own HENA’s or Scope’s memory?**

[HENA](https://causality.in/hena/) keeps its own swarm store and decides what to keep; [Scope](https://rawthoughts.in/scope/) (on RawThoughts) keeps only context derived from what Pale and Weave hold. Reckon runs a separate lab. Its wider services concern experiment inputs, results and decisions.

**How do I run the laboratory?**

The lab runs on your own machine. Start with [the laboratory guide](https://causality.in/reckon/understand-the-memory-laboratory/), then [compare two replay budgets](https://causality.in/reckon/compare-replay-budgets/).


Source code for [Reckon](https://github.com/getHarshOnline/reckon) is credited to [Harsh Joshi](https://getharsh.in/about/).
