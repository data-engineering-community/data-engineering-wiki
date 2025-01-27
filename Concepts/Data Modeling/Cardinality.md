---
Aliases: [Concepts/Cardinality]
Tags: [seedling]
publish: true
---
Cardinality has different meanings depending on the context of what's being discussed. In data engineering, we mainly use cardinality when talking about a data model's relationships and when talking about the statistics of a particular column in a database table.

## Cardinality (Data Modeling)

The number of rows in one table that relate to rows in another table. Common types include one-to-one, one-to-many, and many-to-many. It's used to define and analyze relationships in data models.[^1]

## Cardinality (SQL Statements)

The number of distinct values in a column/expression. Low cardinality means many repeated values, while high cardinality means most values are unique.[^2] Database engines can use this information to optimize SQL queries.

[^1]: https://en.wikipedia.org/wiki/Cardinality_%28data_modeling%29
[^2]: https://en.wikipedia.org/wiki/Cardinality_%28SQL_statements%29

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Modeling/Cardinality.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Modeling/Cardinality.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Modeling/Cardinality) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Modeling/Cardinality)</span>
