---
Aliases: []
Tags: [seedling]
publish: true
---

Lambda architecture is a data processing pattern designed to strike a balance between low latency, high throughput, and fault tolerance. This architecture type uses a combination of batch processing to create accurate views of large data sets and real-time stream processing to provide views of live data. The results from both sets can then be merged and presented together.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR

A((Data Source))

subgraph Batch Layer
B("Batch view(s)")
end
subgraph Speed Layer
C("Real-time view(s)")
end

A --> B
A --> C

subgraph Serving Layer
D("Combined view(s)")
end

B --> D
C --> D

```

## Lambda Architecture Advantages

- Efficiently serves batch and real-time workloads

## Lambda Architecture Disadvantages

- Duplicated code/logic for both batch and real-time views

## Lambda Architecture Learning Resources

- http://nathanmarz.com/blog/how-to-beat-the-cap-theorem.html
- http://radar.oreilly.com/2014/07/questioning-the-lambda-architecture.html

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Lambda%20Architecture.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Lambda%20Architecture.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Lambda%20Architecture) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Lambda%20Architecture)</span>
