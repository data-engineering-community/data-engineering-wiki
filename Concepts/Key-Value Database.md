---
Aliases: []
Tags: []
---
A Key/Value database is a type of [[Non-relational Database|NoSQL]] database that stores data as a table where you have a unique key for each data value.

![[key_value_database_example.png]]
*"Key/Value data store" by Microsoft.com*

# Popular Key/Value Databases
[Redis](https://redis.io/)
[[Amazon DynamoDB|DynamoDB]]
[Riak](http://docs.basho.com/riak/kv/)
[IonDB](https://github.com/iondbproject/iondb)

# Advantages
- Optimized for simple lookups using the key or a range of keys on a single table.
- Can be very scalable because data can be distributed across multiple machines.

# Disadvantages
- Not great if you need to query or filter by non-key values.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Key-Value%20Database.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Key-Value%20Database.md "git-hub-copy-note") </span>
