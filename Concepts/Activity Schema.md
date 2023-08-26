---
Aliases: []
Tags: [seedling]
publish: true
---

Created by [Ahmed Elsamadisi](https://www.activityschema.com/mission), the activity schema is a standard that is designed to make data modeling and analysis substantially simpler, faster, and more reliable by modeling all data as a single time series table, which makes it easier to answer any data question using a single query pattern.

Business concepts are represented as **entity** doing an **activity** ('a customer completed an order') instead of facts or nouns (orders, products). Activities are built directly from source tables, store only their own data, and are the single source of truth for each concept.

All queries run against an activity stream table to assemble data for analysis, BI, and reporting. Instead of traditional foreign key joins, queries combine activities using relationships in time (e.g. all customers who _completed an order_ and _submitted a support ticket_ before their next _completed order_).

![[Assets/activity-schema.png]]

## Activity Schema Advantages

- Simple to build, query, and maintain (only one table).
- Can improve query performance because no joins are required.

## Activity Schema Disadvantages

- Requires data platform to support JSON columns and for data analysts to be comfortable with SQL/JSON.
- Keeping all data in one table (even PII or financial data) may not be desirable for security reasons.
- Some BI tools might not be able to load a large activity schema table.

Sources:

- https://www.activityschema.com/
- https://github.com/ActivitySchema/ActivitySchema

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Activity%20Schema.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Activity%20Schema.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Activity%20Schema) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Activity%20Schema)</span>
