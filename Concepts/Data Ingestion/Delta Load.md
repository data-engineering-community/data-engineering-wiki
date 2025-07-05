---
Aliases:
  - incremental load
  - query-based CDC
  - Concepts/Delta Load
Tags:
  - evergreen
publish: true
---

A delta load (or incremental load) refers to extracting only the data that has changed since the last time the extract process has run. This process is typically query-based and requires an incrementing id or timestamp column that can be used to determine new records. ^overview-delta-load

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph TD
    subgraph S1 [Initial Load]
    direction LR
    A1[(Source<br/>100,000 records)] -->|Extract all records| B1[Ingestion Process]
    B1 -->|Load all records| C1[(Destination<br/>100,000 records)]
    end

    subgraph S2 [Subsequent Runs]
    direction LR
    A2[(Destination<br/> 100,000 records)] -->|"Query for MAX(modified_at)<br/>from Destination"| D[Latest Timestamp]
    D -->|"Query source using timestamp to filter"|A[(Source<br/>100,500 records)] 
    A -->|Load 500 new/changed records| B[Ingestion Process]
    B --> C[(Destination<br/>100,500 records)]
    end

    S1 --> S2
```
^overview-delta-load-diagram

The most commonly used steps to perform a delta load are:
1. Ensure there is a `modified_at` timestamp or incremental id column such as a primary key on the data source. 
2. On the initial run of the pipeline, do a full load of the dataset.
3. On following runs of the pipeline, query the target dataset using `MAX(column_name)`.
4. Query the source dataset and filter records where values are greater than the value from step 3.

## Delta Load Advantages

- More resource efficient
- Easy to implement and maintain
- Only requires read permissions to perform

## Delta Load Disadvantages

- Does not capture deleted records
- Requires extra metadata on the source (commonly a unique id or updated timestamp)
- Does not capture multiple changes between the polling interval. If a row changes multiple times, you may only capture the latest state.
- Querying the database for changes may impact the database performance.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Ingestion/Delta%20Load.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Ingestion/Delta%20Load.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Ingestion/Delta%20Load) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Ingestion/Delta%20Load)</span>
