---
Aliases: [correlated subquery, synchronized subquery]
Tags: [incubating]
publish: true
---

A [[SQL]] query nested inside another query that uses the values from the outer/parent query. Because the correlated subquery can be evaluated once for each row in the outer query, it can be slow.

Example:
```sql
 SELECT employee_number, name
   FROM employees emp
   WHERE salary > (
     SELECT AVG(salary)
       FROM employees
       WHERE department = emp.department);
```

Outer query:
```sql
 SELECT employee_number, name
   FROM employees emp
   WHERE salary > ...
```

Correlated Subquery:
```sql
 SELECT AVG(salary)
   FROM employees
   WHERE department = emp.department
```

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Correlated%20Subquery.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Correlated%20Subquery.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Correlated%20Subquery) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Correlated%20Subquery)</span>
