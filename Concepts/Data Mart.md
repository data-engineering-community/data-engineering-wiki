---
Aliases: []
Tags: [seedling]
publish: true
---

A data mart is a subject-specific database which acts as a partitioned segment of an enterprise data warehouse. The domain of a data mart aligns with a particular business unit - for instance there would be separate data marts created for finance, marketing, or supply chain departments within a company.
```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%

graph LR

  

A((Data Warehouse))

  

A --> B[Data Mart A]

A --> C[Data Mart B]

A --> D[Data Mart C]
```

## Data Mart Advantages

- In general, better performance due to querying only a subset of data rather than a whole data warehouse. Should also require less resources and maintenance than a monolithic data warehouse.
- The domain focus means data marts should be more flexible and grant bigger user empowerment and encouragement.
## Data Mart Disadvantages

- Data quality risk - the risk of arising discrepancies between a data mart and the original data warehouse.
- Implementation challenges - poor design may lead to extensive complexity and inconsistencies over time.
## Data Mart Learning Resources
[What is a Data Mart? - Data Mart Explained - AWS (amazon.com)](https://aws.amazon.com/what-is/data-mart/)

%% wiki footer: Please don't edit anything below this line %%
## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Mart.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Mart.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Mart) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Mart)</span>
