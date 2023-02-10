---
Aliases: [delta lake]
Tags: [seedling]
publish: true
---

![GitHub Repo stars](https://img.shields.io/github/stars/delta-io/delta?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/delta-io/delta) ![GitHub](https://img.shields.io/github/license/delta-io/delta)

[Delta Lake](https://databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf) is an open-source storage framework that enables building a  
[Lakehouse architecture](http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf) with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs for Scala, Java, Rust, Ruby, and Python.

Delta Lake is essentially a metadata layer on top of Parquet.

The file layout looks like:

![source](https://www.databricks.com/wp-content/uploads/2019/08/image6-1.png)

Delta Lake Official Documentation

https://docs.delta.io/latest/index.html

## Delta Lake Advantages over plain [[Apache Parquet|Parquet]]

- ACID transactions with optimistic concurrency control.
- Efficient streaming I/O.
- Caching.
- Time travel.
- Data layout optimization, e.g. Z-ordering.
- Schema enforcement & evolution.
- UPSERT & MERGE statements.
- Audit logging.

## Apache Parquet Disadvantages

- Same Parquet disadvantages.
- Maintenance processes _are_ required to maintain its performance, e.g. `OPTIMIZE`.
- There is a learning curve when using advanced features, e.g. `VACUUM`.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/File%20Formats/Delta%20Lake.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/File%20Formats/Delta%20Lake.md "git-hub-copy-note") </span>
