---
Aliases: [Data Quality Test]
Tags: [incubating]
publish: true
---

A data unit test is an automated test you can create which ensures that the data coming through your data pipeline is what you expect it to be. Data unit tests are most useful for knowing when upstream data changes, when data is stale/cached, and preventing bad data from ruining machine learning models or public-facing reports and dashboards.

Creating data unit tests are also a good way of documenting what the data set should look like which you can then show a teammate or stakeholder and get on the same page quickly.

## Data Unit Testing Tools

Some commonly used tools for data unit testing are [[Great Expectations|great expectations]] if you are using Python and [dbt tests](https://docs.getdbt.com/docs/building-a-dbt-project/tests) if you are using SQL and dbt. You can also write your own tests using Python pytest or SQL depending on your [[data pipeline]].

## Data Unit Test Examples

One of the most common tests to incorporate in your data pipeline is a check to see if there is recently created data by looking at a created date column. This is known as a stale data check or data freshness check. The reason why it's common is that your data pipeline can run successfully, but the data inside it might have been old or malformed which is considered a "silent failure."

Other commonly used tests for data are checking to make sure all values in a column are unique, checking for null values, and checking to make sure all the values in a column are within a certain expected range.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Unit%20Test.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Unit%20Test.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Unit%20Test) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Unit%20Test)</span>
