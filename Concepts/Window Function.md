---
Aliases: [SQL window function]
Tags: [seedling]
publish: true
---

A [[SQL]] window function is a special syntax that allows aggregate functions to be performed over a set of rows that are related to the current row in the query. It's similar to using an aggregate function but, unlike regular aggregations, it doesn't collapse the result into one value; instead, each row retains its identity and the calculated result is returned for every row. Window functions are commonly used when creating running totals or ranking values within datasets.

![[Assets/sql-window-function.png|500]]

## Window Function Examples

```sql
SELECT Name, 
       SUM(Sales) OVER(PARTITION BY Name) AS TotalSales
  FROM my_table;
```

This statement will calculate a running total for each name listed in `my_table`.

## Window Function Advantages

- Perform complex calculations with less code than would otherwise be required

## Window Function Disadvantages

- Can be more complicated to understand and debug

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Window%20Function.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Window%20Function.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Window%20Function) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Window%20Function)</span>
