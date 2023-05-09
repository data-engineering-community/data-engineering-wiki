---
Aliases: []
Tags: [evergreen]
publish: true
---

A document database is a type of [[Non-relational Database|NoSQL]] database that is designed to store and query data as JSON-like documents. Document databases make it easier to store an query data in a way that can evolve with an application's needs. The document model works well with use cases such as catalogs, user profiles, and content management systems where each document is unique and evolves over time.

![[document_database_example.png]]
*"Document data stores" by Microsoft.com*

## Popular Document Databases

[[MongoDB]]
[[Couchbase]]
[[Amazon DynamoDB]]
[[RavenDB]]
[Azure Cosmos DB](https://azure.microsoft.com/services/cosmos-db/)

## Document Database Advantages

- Create documents without needing to define their structure upfront.
- Add new fields to the database without changing the fields of existing documents.
- Can scale horizontally very easily.

## Document Database Disadvantages

- Query performance can be less efficient compared to a [[Relational Database]] because the data isn't necessarily structured or organized for queries.
- Generally requires more technical knowledge to query which means usage is typically limited to technical staff vs other non-technical business people.
- Updating data can be a slow process because the data can be distributed between machines and can be duplicated.
- Atomic transactions are not inherently supported.

## When to use a Document Database

- Storing article content, social media posts, sensor data, and other unstructured data.
- You need to develop and iterate rapidly when building a product.

## Document Database Use Cases

- Content management
- Catalogs. For example, in an e-commerce application, storing different products with different attributes.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Document%20Database.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Document%20Database.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Document%20Database) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Document%20Database)</span>
