---
Aliases: []
Tags: [seedling]
publish: true
---

## Overview

This guide is intended to be a general [[SQL]] reference for data engineers. It is not specific to any particular [[SQL#[SQL Variants](http://troels.arvin.dk/db/rdbms/)|variant of SQL]]. It also does not cover every concept or feature of SQL - only the most important or commonly used ones in data engineering.

> [!info]- ### SQL Learning Resources
> ![[Learning Resources#SQL Learning Resources]]

---
## 1. Beginner SQL

### Order of Operations
> SQL executes each clause in a query in a defined order.

1. FROM, including JOINs
2. WHERE
3. GROUP BY
4. HAVING
5. WINDOW functions
6. SELECT
7. DISTINCT
8. UNION
9. ORDER BY
10. LIMIT and OFFSET

---
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

---
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

---
### UNION vs UNION ALL
> `UNION` and `UNION ALL` are both used to retrieve records from multiple tables. Both `UNION` and `UNION ALL` are known as set operators. In SQL, set operators combine the results of two or more queries into a single result. 

There is one major difference:

* `UNION` only returns unique
* `UNION ALL` returns all records, including duplicates.

**Example:**
*The columns in both SELECT statements are of the same or matching data types.*
```SQL
SELECT column_1, column_2
FROM table_1
[WHERE condition]
 
UNION [ALL]
 
SELECT column_1, column_2
FROM table_2
[WHERE condition]
```

---
### Filtering Data

> Filtering data with SQL is useful for returning desired reults from a dataset or table. Filtering can be accomplsihed with the `WHERE` clause.

**Examples:**

* Filter with logical operators

**AND** operator
```SQL
# this will return rows where the City column has a value of "London" and the Country column has a value of "UK"

SELECT *
FROM Customers
WHERE City = "London" AND Country = "UK"
```
**OR** operator
```SQL
# this will return rows where the City column has a value of either "London" or "Paris"

SELECT *
FROM Customers
WHERE City = "London" OR City = "Paris"
```
**BETWEEN** operator
```SQL
# this will return rows where the Price column has values that are between 50 and 60

SELECT *
FROM Products
WHERE Price BETWEEN 50 AND 60
```
**LIKE** operator
```SQL
# this will return rows where the City column has values that start with 'S' with no character limit

SELECT *
FROM Customers
WHERE City LIKE 'S%'

>> Santiago, Sydney, San Antonio

# the '%' wildcard can placed any where in a string to try and find a match

SELECT *
FROM Customers
WHERE City LIKE '%ar%'

>> Paris, Barcelona, Jakarta

# the '_' wildcard can also be used in conjuction with '%' to find a single value
# this will return rows where 'a' has to be the second character and the rest of the characters can be anything

SELECT *
FROM Customers
WHERE City LIKE '_a%'

>> Lagos, Manila, Cairo
```



---
### Limit

Used to specify the number of records to return. Different database systems use their own syntax:
* SQL Server = `SELECT TOP 3 * FROM Customers;`
* MySQL = `SELECT * FROM Customers LIMIT 3;`
* Oracle = `SELECT * FROM Customers WHERE ROWNUM <= 3`

#### Where vs Having

* `WHERE`
    * Introduces a condition on *individual* rows.
    * Use **before** `GROUP BY` clause.
* `HAVING`
    * Introduces a condition on *aggregations*, i.e. results of selection where a single result, such as `COUNT()`, `SUM()`, `MAX()`, `MIN()` has been produced from multiple rows.
    * Use **after** `GROUP BY` clause.

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

| Table | View | Materialized View |
|------------ | ------------| ------------|
| A **table** contains records (rows) with data values for specified columns (fields) and is stored physically in a database. Tables can be joined together to create reports, manipulated through SQL queries, and changed directly by updating or deleting individual rows or columns. | A **view** is a virtual table based on the results of a SQL statement. It does not physically exist in the database and the fields in the view are fields from one or more real tables in the database. | A **materialized view** is a snapshot of a query saved as a physical object within the database. Materialized views can be used instead of tables and support all operations available to real tables with some drawbacks such as maintenance costs. |
| Data physically stored in database | Data not physically stored | Data physically stored in database |
| Faster to query | Slower to query | Faster to query |
|  | If underlying table is dropped then view will no longer work | Materialized view will continue to work if underlying table is dropped |
| No additional maintenance required | No additional maintenance required | Needs to be updated as new/updated data arrive in underlying table |

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

**DML**

DML is short name of Data Manipulation Language which deals with data manipulation, and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE etc, and it is used to store, modify, retrieve, delete and update data in database.

-   SELECT – retrieve data from one or more tables.
-   INSERT – insert data into a table.
-   UPDATE – updates existing data within a table.
-   DELETE – delete all records from a table.
-   MERGE – UPSERT operation (insert or update)
-   CALL – call a PL/SQL or Java subprogram.
-   EXPLAIN PLAN – interpretation of the data access path.
-   LOCK TABLE – concurrency control.

**DDL**

DDL is short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.

-   CREATE – to create database and its objects like (table, index, views, store procedure, function and triggers).
-   ALTER – alters the structure of the existing database.
-   DROP – delete objects from the database.
-   TRUNCATE – remove all records from a table; also, all spaces allocated for the records are removed.
-   COMMENT – add comments to the data dictionary.
-   RENAME – rename an object.

(*Source: [StackOverflow](https://stackoverflow.com/questions/2578194/what-are-ddl-and-dml)*)

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

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Guides/SQL%20Guide.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Guides/SQL%20Guide.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Guides/SQL+Guide) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Guides/SQL+Guide)</span>
