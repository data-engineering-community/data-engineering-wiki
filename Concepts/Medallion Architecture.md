---
Aliases: []
Tags: [seedling]
publish: true
---

A medallion architecture is a data design pattern, coined by Databricks, used to logically organize data in a lakehouse, with the goal of incrementally improving the quality of data as it flows through various layers. 

This architecture consists of three distinct layers – bronze (raw), silver (validated) and gold (enriched) – each representing progressively higher levels of quality. Medallion architectures are sometimes referred to as "multi-hop" architectures.

![[Assets/lakehouse-medallion-architecture.jpeg|800]]
*"Delta Lake Medallion Architecture" by Databricks"*

## Medallion Stages

### 🥉 Bronze

The bronze stage serves as the initial point for data ingestion and storage. Data is saved without processing or transformation. This might be saving logs from an application to a distributed file system or streaming events from Kafka.

### 🥈 Silver

The silver layer is where tables are cleaned, filtered, or transformed into a more usable format. Note that the transformations here should be light modifications, not aggregations or enrichments. From our first example, those logs might be parsed slightly to extract useful information— like unnesting structs or eliminating abbreviations. Our events might be standardized to coalesce naming conventions or split a single stream into multiple tables.

### 🥇 Gold

Finally, in the gold stage, data is refined to meet specific business and analytics requirements. This might mean aggregating data to a certain grain, like daily/hourly, or enriching data with information from external sources. After the gold stage, data should be ready for consumption by downstream teams, like analytics, data science, or ML ops.

## Medallion Architecture Advantages

- **Simple data model**: Medallion architectures are familiar to many who have used dbt or warehouse data staging techniques like source ➡️ stage ➡️ curated.
- **Logical progression of data cleanliness**: Each stage in a medallion architecture follows a logical pattern that makes it easy for new members to understand. The final stage (gold) used for analytics is entirely separate than the raw stage (bronze) used for ingestion.
- **Allows you to recreate _any_ downstream tables from raw sources.**: Since _all_ captured data exists in raw tables, it's possible to recreate downstream tables to add additional columns, rebuild incremental models, or recover data from a disaster.

## Medallion Architecture Disadvantages

- **Does not replace dimensional modeling techniques**: schemas and tables within each layer must still be modeled. Medallion architecture provides a framework for data cleaning, not data architecture.
- **Uses large amounts of storage**: though, as many have proclaimed, "storage is cheap," a medallion architecture effectively triples the amount of storage used in a data lake. For that reason, it might not be practical for data teams with intensive storage demands.
- **Often requires additional downstream processing**: If data engineers are maintaining the medallion architecture, there needs to be a place for analysts/analytics engineers to build business-focused transformations that power BI. Some teams might prefer those processes remain separate, rather than having analysts develop in the gold layer. As such, a medallion architecture is not a drop-in replacement for existing data transformation solutions.
- **Implies a data lakehouse architecture**: The medallion architecture is built on the premise of a data lakehouse. If a lakehouse is impractical for your team, this architecture might not make sense. Nonetheless, medallion architectures _can_ be used effectively in hybrid data lake/warehouse implementations.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Medallion%20Architecture.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Medallion%20Architecture.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Medallion%20Architecture) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Medallion%20Architecture)</span>
