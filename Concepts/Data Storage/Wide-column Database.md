---
Aliases: [column-family database, Concepts/Wide-column Database]
Tags: [incubating]
publish: true
---

A wide column database organises data into flexible columns that can be spread across multiple servers or database nodes. They are also known as **column family databases**. They store data in rows based on the primary key of each record. Data is organised into **column families**, i.e. groups of columns that share same attributes. This means we can still access column data without reading entire rows. Each row in a wide column database is uniquely identified by a row key.

![[Assets/wide_column_database_example.jpg|500]]

While similar to the tabular format of [[Relational Database|relational databases]], the name and format of the column of a wide column database can be different across rows in the same table.

Some sources such as Google Cloud use the term "column-oriented database" and "wide-column database" [interchangeably](https://cloud.google.com/discover/what-is-nosql?hl=en). However, other sources draw a distinction, i.e. a wide column database is not technically a [[Column-oriented Database|column-oriented database]]. The key difference for column-oriented databases is that we store data as columns separately on disk, while for wide column databases we store them as rows, but with data organised as column families.

Sources:
- [SyllaDB: Wide column database](https://www.scylladb.com/glossary/wide-column-database/)
- [TinyBird: What are columnar databases?](https://www.tinybird.co/blog-posts/what-is-a-columnar-database)
- [AWS: Types of NoSQL database](https://docs.aws.amazon.com/whitepapers/latest/choosing-an-aws-nosql-database/types-of-nosql-databases.html)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Storage/Wide-column%20Database.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Storage/Wide-column%20Database.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Storage/Wide-column%20Database) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Storage/Wide-column%20Database)</span>