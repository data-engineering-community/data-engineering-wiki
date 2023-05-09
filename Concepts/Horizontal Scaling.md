---
Aliases: [scaling out]
Tags: [seedling]
publish: true
---

A horizontally scalable system is one that can increase capacity by adding more computers to the system.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
flowchart LR

subgraph Before
A[(Computer 1)]
end

subgraph After
B[(Computer 1)]
C[(Computer 2)]
D[(Computer 3)]
end

Before --> After
```

## Horizontal Scaling Advantages

- Allows for parallel execution of workloads
- Increased fault tolerance
- Cheaper compared to [[Vertical Scaling|vertical scaling]]

## Horizontal Scaling Disadvantages

- Decreased consistency
- Joining data between nodes is more time consuming

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Horizontal%20Scaling.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Horizontal%20Scaling.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Horizontal%20Scaling) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Horizontal%20Scaling)</span>
