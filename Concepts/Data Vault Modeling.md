---
Aliases: [Data Vault]
Tags: [seedling]
publish: true
---

Developed by [Dan Linstedt](https://en.wikipedia.org/wiki/Dan_Linstedt), data vault modeling aims to be the most flexible modeling technique, adapting to changes and new datasets easily while storing all historical data by default. There are 3 core types of tables in data vault: hubs, links, and satellites.

1. **Hubs:** tables that contain a list of unique business keys (natural keys), surrogate keys, and metadata describing the data source for each hub item.
2. **Links:** tables that associate hubs and satellites via the business key.
3. **Satellites:** tables that hold the descriptive data about the entities being modeled as well as start and end date columns to track historical changes.

## Data Vault Modeling Advantages

- Tracks historical changes by default (good for auditing/tracing)
- Extremely resilient to changing data
- Enables parallel loading

## Data Vault Modeling Disadvantages

- Considered an advanced technique that requires more experience to implement
- Querying data vault is more complex compared to other techniques

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Vault%20Modeling.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Vault%20Modeling.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Vault%20Modeling) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Vault%20Modeling)</span>
