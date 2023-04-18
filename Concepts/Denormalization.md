---
Aliases: [database denormalization, data denormalization]
Tags: [incubating]
publish: true
---

Denormalization is the process of combining data into a "wide" tables that are optimized for read workloads. Denormalized tables are best suited for [[Online Analytical Processing|OLAP]] systems where you need to analyze historical data, as updates are not required and data redundancy is not an issue.

## Denormalization Advantages

- Faster reads of historical/analytical data because fewer joins needed

## Denormalization Disadvantages

- Duplicate data

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Denormalization.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Denormalization.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Denormalization) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Denormalization)</span>
