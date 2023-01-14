---
Aliases: []
Tags: [seedling]
publish: false
---

## Overview

This guide is intended to be a general SQL reference for data engineers. It is not specific to any particular [[SQL#[SQL Variants](http://troels.arvin.dk/db/rdbms/)|variant of SQL]]. It also does not cover every concept or feature of SQL - only the most important or commonly used ones in data engineering.

![[SQL#^e63bc3]]

> [!info]- ### SQL Learning Resources
> ![[Learning Resources#SQL Learning Resources]]

---
## 1. Beginner SQL

### Basic Commands
**SELECT**
* Used to select data from a database
* The data returned is stored in a result table, called the result-set.
> [!tip] Avoid using `SELECT *` in data pipelines - only select the data you need.

**FROM**
* Used to specify which table to select or delete data from.

**WHERE**
* Used to filter records.
* It is used to extract only those records that fulfill a specified condition.

**ORDER BY**
* Used to sort the result set in ascending or descending order.
* Sorts the result set in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

### Joins

**INNER JOIN**
* Returns only those records or rows that have matching values and is used to retrieve data that appears in both tables.

**LEFT JOIN** 
* Gives the output of the matching rows between both tables. In case, no records match from the **left** table, it shows those records with null values.

**RIGHT JOIN**
* Gives the output of the matching rows between both tables. In case, no records match from the **right** table, it shows those records with null values.

**FULL (OUTER) JOIN**
* Will retrieve not only the matching rows but also the unmatched rows as well.

**CROSS (CARTESIAN) JOIN**
* Joins every row from the first table with every row from the second table and its result comprises all combinations of records in two tables.

**SELF JOIN**
* Joins a table to itself.

### Filtering Data

#placeholder

#### Limit

#placeholder

#### Where vs Having

#placeholder 

---

## 2. Intermediate SQL

### CTE vs Subquery

#placeholder

### Table vs View vs Materialized View

#placeholder 

### Case statements

#placeholder 

### DML vs DDL

#placeholder

### Aggregate functions

#placeholder 

---

## 3. Advanced SQL

### Window Functions
[Online Reference](https://www.sqltutorial.org/sql-window-functions/)

Window functions perform calculations on a set of rows that are related together, but, unlike aggregate functions, windowing functions do not collapse the result of the rows into a single value. Instead, all the rows maintain their original identity and the calculated result is returned for every row.


### Correlated Subqueries

![[Correlated Subquery]]


%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Guides/SQL%20%Guide.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Guides/SQL%20Guide.md "git-hub-copy-note") </span>
