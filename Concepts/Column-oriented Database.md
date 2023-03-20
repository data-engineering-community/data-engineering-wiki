---
Aliases: [columnar database]
Tags: [incubating]
publish: true
---

![[Assets/row_oriented_vs_column_oriented_database.jpeg|500]]

In a column-oriented or columnar database, the data for each column in a datatable is stored together. Because of their characteristics, they are a popular option for building a [[Data Warehouse|data warehouse]].

## Column-oriented Database Example
In a datatable like this:

EmpId | Lastname | FirstnameSalary
----- | ----- | -----
10 | Smith | Joe | 60000
12 | Jones | Mary | 80000
11 | Johnson | Cathy | 94000
22 | Jones | Bob | 55000

The data would be stored like this (simplified example):

```
10,12,11,22;
Smith,Jones,Johnson,Jones;
Joe,Mary,Cathy,Bob;
60000,80000,94000,55000;
```

## Column-oriented Database Advantages

- More efficient querying when querying a subset of columns because the database doesn't need to read columns that aren't relevant.
- Data can be compressed further which translates into storage and query improvements.

## Column-oriented Database Disadvantages

- Typically less efficient when inserting data.

## When to use a column-oriented database

- When you tend to only query a subset of columns in your data.
- When you often run analytical queries or [[Online Analytical Processing|OLAP]] workloads such as metrics and aggregations.

## Column-oriented Database Use Cases

- Reporting
- Big Data Analytics
- Business Intelligence

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Column-oriented%20Database.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Column-oriented%20Database.md "git-hub-copy-note") </span>
