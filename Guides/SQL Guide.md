---
Aliases: []
Tags: [seedling]
publish: false
---

## Overview

This guide is intended to be a general [[SQL]] reference for data engineers. It is not specific to any particular [[SQL#[SQL Variants](http://troels.arvin.dk/db/rdbms/)|variant of SQL]]. It also does not cover every concept or feature of SQL - only the most important or commonly used ones in data engineering.

> [!info]- ### SQL Learning Resources
> ![[Learning Resources#SQL Learning Resources]]

---
## 1. Beginner SQL

### Basic Commands

**SELECT**
* Used to select data from a database
* The data returned is stored in a result table, called the result-set.

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

Used to specify the number of records to return. Different database systems use their own syntax:
* SQL Server = `SELECT TOP 3 * FROM Customers;`
* MySQL = `SELECT * FROM Customers LIMIT 3;`
* Oracle = `SELECT * FROM Customers WHERE ROWNUM <= 3`

#### Where vs Having

#placeholder 

---

## 2. Intermediate SQL

### CTE vs Subquery

**CTE**

* Can be used multiple times in the body of a query.
* Allows for recursive queries.
* Generally more readable.

**Subquery**

* Can only be used once in a query.
* Can be used to filter results in the `WHERE` clause.
* Can be used as a column in your query.

### Table vs View vs Materialized View

#placeholder 

### Case Statements

Case statements are SQL's version of an if-else logic. The `CASE` expression goes through conditions and returns a value when the first condition is met. Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the `ELSE` clause.

Example:
```SQL
--Sytanx
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;

--Example
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

### DML vs DDL

#placeholder

### Aggregate Functions

An SQL aggregate function calculates on a set of values and returns a single value. For example, the average function `(AVG)` takes a list of values and returns the average.

Other basic aggregate functions include:
* `COUNT()` – returns the number of items in a set.
* `MAX()` – returns the maximum value in a set.
* `MIN()` – returns the minimum value in a set
* `SUM()` – returns the sum of all or distinct values in a set

Note that aggregate functions do not work within in a `WHERE` clause due to the order of evaluation of clauses. Instead, `GROUP BY` and `HAVING` clases are used in place of a `WHERE` clause.

---

## 3. Advanced SQL

### Window Functions
[Online Reference](https://www.sqltutorial.org/sql-window-functions/)

Window functions perform calculations on a set of rows that are related together, but, unlike aggregate functions, windowing functions do not collapse the result of the rows into a single value. Instead, all the rows maintain their original identity and the calculated result is returned for every row.

![[Assets/window-vs-aggregate-function.png]]


### Correlated Subqueries

![[Correlated Subquery]]


%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Guides/SQL%20%Guide.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Guides/SQL%20Guide.md "git-hub-copy-note") </span>
