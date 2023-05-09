---
Aliases: []
Tags: [evergreen]
publish: true
---

Sargable, short for Search ARGument ABLE, is a definition in relational database management systems for queries that can take advantage of indexes to speed up the query. A query that fails this definition is known as a non-sargable query and usually has a negative effect on query performance. So, simply making a query sargable CAN increase its performance alone, but in concert with the right indexes the results can be dramatic.

A common non-sargable query is one that includes a function call in the `WHERE` clause. Below I’ll go through some concrete examples. However, sargability is not limited to just the where clause. It can effect the `ORDER BY`, `GROUP BY` and `HAVING` clauses.

The `SELECT` clause is the only one that can contain non-sargable expressions without negative effects on performance.

> [!NOTE]
> Please note that these are general rules and sargability can depend on the type of database you use.

## Sargable Expressions Advantages
-   consuming less system resources
-   speeding up query performance
-   using indexes more effectively

## Sargable Expressions Examples

Sargable operators: `=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `LIKE`, `IS [NOT] NULL`, `EXISTS`

Sargable operators that rarely improve performance: `<>`, `IN`, `OR`, `NOT IN`, `NOT EXISTS`, `NOT LIKE`

### Not including field in a function

> [!FAIL] Bad
> ```SQL
> SELECT ... 
> FROM ...
> WHERE Year(my_date) = 2008
> ```

The query optimizer can't use an index on `my_date` because it will have to evaluate the function year for every row causing a table scan. A sargable approach would be to use `BETWEEN` or `>=` and `<=`.

> [!SUCCESS] Good
> ```SQL
> WHERE my_date >= '01-01-2018' AND my_date <= '12-31-2018'
> 
> OR
> 
> WHERE my_date BETWEEN '01-01-2018' AND '12-31-2018'
> ```

Other common examples:

```SQL
Bad: WHERE isNull(FullName, 'Tom') = 'Tom'
Good: WHERE ((FullName = 'Tom') OR FullName IS NULL)

Bad: WHERE SUBSTRING(DealerName, 4) = 'Ford'
Good: WHERE DealerName LIKE 'Ford%'

Bad: WHERE DateDiff(mm, OrderDate, GetDate()) >= 30
Good: WHERE OrderDate < DateAdd(mm, -30, GetDate())
```

### LIKE value not beginning with a wildcard

When using the `LIKE` operator, if you use a wildcard value at the beginning it causes a table scan.

> [!FAIL] Bad
> ```SQL
> WHERE Field LIKE '%value%'
> ```

> [!SUCCESS] Good
> ```SQL
> WHERE Field LIKE 'value%'
> ```

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Sargable%20Expressions.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Sargable%20Expressions.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Sargable%20Expressions) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Sargable%20Expressions)</span>
