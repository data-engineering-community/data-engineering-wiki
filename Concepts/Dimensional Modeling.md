---
Aliases: [Dimensional Model, Kimball Modeling]
Tags: [seedling]
publish: true
---

Developed by [Ralph Kimball](https://en.wikipedia.org/wiki/Ralph_Kimball), dimensional modeling is a popular technique used to model data for analytics. At it's core, dimensional modeling revolves around organizing data into two types of datasets: fact tables and dimension tables. Facts are usually comprised of numerical values that can be aggregated while dimensions hold descriptive attributes of entities/objects. A key tradeoff the dimensional model makes is it [[Denormalization|denormalizes]] data (increases data redundancy) in order to speed up queries.

Within dimensional modeling there are a few different schema design patterns: [star schema](https://en.wikipedia.org/wiki/Star_schema) (recommended in most cases), [snowflake schema](https://en.wikipedia.org/wiki/Snowflake_schema), and [galaxy schema](https://en.wikipedia.org/wiki/Fact_constellation).

## Dimensional Modeling Advantages

- Intuitive to understand.
- Good query performance for analytics.
- Keeps track of historical changes easily.

## Dimensional Modeling Disadvantages

- Can be complicated to query sometimes.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Dimensional%20Modeling.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Dimensional%20Modeling.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Dimensional%20Modeling) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Dimensional%20Modeling)</span>
