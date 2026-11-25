Title: MONAD

[Read HTML](https://causality.in/monad/)

<a id="monad"></a>

# MONAD

An inventory says a part is in stock. Can it tell you whether the part fits the machine? MONAD studies which answers survive a change of description and what you need to recover a missing answer. It asks what would let a fixed frame become something a system can change without losing account of its meaning.

<a id="when-a-better-answer-needs-a-different-language"></a>

## When a better answer needs a different language

[Work through the stock-and-fit example](https://causality.in/monad/what-a-summary-preserves/) to see which questions an inventory can answer. A Lean library and paper develop the mathematics. A small Rust kernel supplies types and numerical operations for research code.

- [Docs](https://docs.causality.in/monad/overview "Developer documentation") 

- [Learn](https://causality.in/monad/descriptions-and-repair/ "Use-case guide and practical applications") 

- [GitHub](https://github.com/getHarshOnline/MONAD "Explore on GitHub") 

- [Mentions](https://causality.in/monad/mentions/ "Writing that discusses or references this product") 

<a id="follow-what-a-description-can-answer"></a>

## Follow what a description can answer

Start with the answer you need. Try to reconstruct it from the shorter description, then work out which information a new observation could supply.

1. 
   
   <a id="state-the-questions"></a>
   
   ### State the questions
   
   Decide which questions you need to answer now and after any changes you plan to make. An inventory for ordering parts and one for repairing a machine can need different information.

2. 
   
   <a id="examine-the-transformation"></a>
   
   ### Examine the transformation
   
   Compare cases that the summary treats alike. In the example below, the stock summary gives the same answer for both parts even though only one fits.

3. 
   
   <a id="repair-or-enrich-the-account"></a>
   
   ### Repair or enrich the account
   
   Recover the missing distinction from an available source, or enrich a description whose objects, questions or rules cannot express what is needed. The longer-term calculus also asks how the rules of change can themselves become objects of change.

<a id="questions-a-description-must-answer"></a>

## Questions a description must answer

The stock summary cannot tell the two parts apart, but a compatibility record might supply the missing answer. Finding that record repairs an omission. If the description has no way to represent machines or their compatibility with parts, it needs a richer language before it can even ask the question. [Descriptions and repair](https://causality.in/monad/descriptions-and-repair/#the-representation-can-become-the-problem) follows that distinction from an available observation to a change in what the description can express.

<table>&#10;    <thead><tr><th scope="col">Available, fits</th><th scope="col">Stock summary</th><th scope="col">Can repair?</th></tr></thead>&#10;    <tbody>&#10;    &#10;      <tr>&#10;        <th scope="row"><code>(1,0)</code></th>&#10;        <td class="research-comparison__shared" rowspan="2"><code>a = 1</code></td>&#10;        <td class="research-comparison__answer">No</td>&#10;      </tr>&#10;    &#10;      <tr>&#10;        <th scope="row"><code>(1,1)</code></th>&#10;        &#10;        <td class="research-comparison__answer">Yes</td>&#10;      </tr>&#10;    &#10;    </tbody>&#10;  </table>

In this illustrative two-bit model, a records availability and b records fit. Both states are in stock; repair requires both.

## Collection contents

- [Descriptions and repair](https://causality.in/monad/descriptions-and-repair/)
- [What a summary preserves](https://causality.in/monad/what-a-summary-preserves/)

<a id="questions-about-monad"></a>

## Questions about MONAD

**What does MONAD let researchers do?**

State which distinctions a representation must preserve, examine a transformation or compression, and reason about the information and cost needed to repair an inadequate account. The Lean library makes parts of that mathematics exact, and the Rust kernel brings its types and numerical operations into research code.

**Is MONAD only about AI?**

MONAD is a pure mathematical programme, and AI is one source of its examples. Adaptive models, changing scientific descriptions and other systems supply examples and tests; they do not define its axioms.

**How does the stock-and-fit example relate to the larger aim?**

It shows a summary preserving availability while losing the distinction needed for repair. Moving from that fixed example to descriptions whose objects, questions and rules can change is the broader research task.

**Do I need software to follow MONAD?**

You can read the worked example without software. [Descriptions and repair](https://causality.in/monad/descriptions-and-repair/) then follows the same question into the Lean library and the Rust kernel.


Source code for [MONAD](https://github.com/getHarshOnline/MONAD) is credited to [Harsh Joshi](https://getharsh.in/about/).
