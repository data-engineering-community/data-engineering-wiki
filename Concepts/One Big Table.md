---
Aliases: [Wide Tables, OBT]
Tags: [seedling]
publish: true
---

The main idea behind one big table (OBT) is to join all of the data necessary for analytics into wide [[Denormalization|denormalized]] tables. One big table is a popular approach to serving analytics at larger scales and takes advantage of the benefits of [[Column-oriented Database|columnar databases]]. It's usually combined with/built on top of other techniques such as a [[Dimensional Modeling|Dimensional Model]] or [[Data Vault Modeling|Data Vault]].

> [!tip]
> You can use OBT when starting new data warehouse to provide value immediately while another longer-term approach is worked on like a [[Dimensional Modeling|Dimensional Model]] or a [[Data Vault Modeling|Data Vault]].

## One Big Table Advantages

- Increases query performance by removing the need for joins.
- Simple to query.

## One Big Table Disadvantages

- Very wide tables can get messy to read and maintain.
- Does not adapt to changes well. Adding new data sources will require rebuilding the table.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/One%20Big%20Table.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/One%20Big%20Table.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/One%20Big%20Table) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/One%20Big%20Table)</span>
