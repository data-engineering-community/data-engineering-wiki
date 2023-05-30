---
Aliases: [incremental load, query-based CDC]
Tags: [seedling]
publish: true
---

A delta load refers to extracting only the data that has changed since the last time the extract process has run. The most commonly used steps to perform a delta load are:

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

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Delta%20Load.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Delta%20Load.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Delta%20Load) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Delta%20Load)</span>
