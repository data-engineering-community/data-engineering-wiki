---
Aliases: [database normalization, data normalization]
Tags: [incubating]
publish: true
---

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. This makes the database design simpler and faster, as well as more accurate and efficient. Since inserts, updates, and deletes occur rapidly in [[Online Transaction Processing|OLTP]] systems, normalization is particularly important for those types of systems. There are several steps to normalization: 

1. Divide the data into tables, based on how the data is related.
2. Make sure each table only contains related data. If data is not directly related, create a new table for that data.
3. Ensure that each column in a table has a specific purpose (e.g., to store a particular type of information).
4. Avoid repeating groups of information within columns (or tables).

## Normalization Advantages

- Minimized data redundancy (duplicate data) and null values
- A more compact database structure
- Simplified queries
- Faster searching, sorting, and indexing

## Normalization Disadvantages

- Complex queries can be slower due to the number of joins needed

## Normalization Examples

![[Assets/normalization_example.png|800]]

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Normalization.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Normalization.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Normalization) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Normalization)</span>
