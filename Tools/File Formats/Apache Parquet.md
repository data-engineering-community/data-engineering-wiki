---
Aliases: [Parquet]
Tags: [seedling]
publish: true
---

![GitHub Repo stars](https://img.shields.io/github/stars/apache/parquet-mr?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/parquet-mr) ![GitHub](https://img.shields.io/github/license/apache/parquet-mr)

Apache Parquet is an open source data file format that was designed to improve performance when handling [[Column-oriented Database|column-oriented data]] in bulk. Apache Parquet is able to provide efficient compression and encoding schemes with enhanced performance due to its design. This makes it a common interchange format for both batch and interactive workloads, similar to other available columnar-storage file formats in Hadoop like RCFile and ORC.

**Extension:** `.parquet`

## Apache Parquet Official Documentation

https://parquet.apache.org/docs/

## Apache Parquet Advantages

- Reduces IO operations.
- Column-based format makes it more efficient in terms of storage space but also speeds up analytics queries.
- Highly efficient data compression and decompression.
- Support type-specific encoding.
- Supports several data types and nested data structures.

## Apache Parquet Disadvantages

- Not human readable (binary).
- More memory required to read data vs row-based format.
- Can be slower to write than row-based file formats because of the metadata overhead.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/File%20Formats/Apache%20Parquet.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/File%20Formats/Apache%20Parquet.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tools/File+Formats/Apache+Parquet) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tools/File+Formats/Apache+Parquet)</span>
