---
Aliases: []
Tags: [evergreen]
publish: true
---
A Key/Value database is a type of [[Non-relational Database|NoSQL]] database that stores data as a table where you have a unique key for each data value.

![[key_value_database_example.png]]
*"Key/Value data store" by Microsoft.com*

## Popular Key/Value Databases

[[Redis]]
[[Amazon DynamoDB|DynamoDB]]
[Riak](http://docs.basho.com/riak/kv/)
[IonDB](https://github.com/iondbproject/iondb)

## Key-Value Database Advantages

- Optimized for simple lookups using the key or a range of keys on a single table.
- Can be very scalable because data can be distributed across multiple machines.

## Key-Value Database Disadvantages

- Not great if you need to query or filter by non-key values.
- Often more expensive than other kinds of databases because they tend to run in-memory.

## When to use a Key-Value Database

A key-value database is mostly used when you need to cache data because it is very fast and doesn't require complex querying.

## Key-Value Database Use Cases

- Saving user session attributes
- Shopping cart

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Key-Value%20Database.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Key-Value%20Database.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Key-Value%20Database) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Key-Value%20Database)</span>
