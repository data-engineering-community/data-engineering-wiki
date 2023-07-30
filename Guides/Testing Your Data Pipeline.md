---
Aliases: []
Tags: [evergreen]
publish: true
---

## Why Is Testing Important?

Writing tests have a few key benefits for data engineers. They can help you sleep better at night knowing you're less likely to get called into an emergency for a data issue. They can be used to help yourself and stakeholders get on the same page and understand the data you're working with. And one of the most important reasons is they help build stakeholders' trust in the data. If stakeholders can't trust the data they are using then they will likely stop using it and build their own solutions which may duplicate efforts or lead to more problems in the future.

## The Different Types of Tests

There are two main types of tests data engineers use to test their data pipelines: unit tests and data quality tests.

Unit tests are used to test **code**, such as the functions and classes that make up a data pipeline. Unit tests can help ensure that your code is doing what it should be doing and that any changes you make don't break existing functionality.

> [!example]
> Let's say you have a function that you use to transform some data in Python. You would write a unit test with various inputs and expected outputs to ensure that it would always transform data in the same way even if you make a change.


Data quality tests, on the other hand, are used to check the accuracy of **data** flowing through your pipeline. These types of tests can help identify potential issues with incoming or outgoing data before they become a problem for downstream systems. Data quality tests also provide an extra layer of assurance that all parts of the system are working together correctly and producing reliable results.

> [!example]
> A data quality test for a data pipeline might involve comparing the results of a SQL query against the expected results. For example, if you have a dataset containing customer orders and you want to make sure that each order contains at least one item, your data quality test could check that there are no orders with zero items.

> [!tip]
> Typically, data quality tests are used with a [Write-Audit-Publish](https://lakefs.io/blog/data-engineering-patterns-write-audit-publish/) pattern to make sure unexpected data doesn't interfere with stakeholder-facing tools and diminish their trust in the data.

## Creating a Testing Plan

### Step 1: Identify your most important pipelines

As a data engineer, you will constantly need to balance competing priorities which is why we first start by identifying pipelines to prioritize adding testing to. Here are a few questions you can ask yourself to identify these pipelines:

- Is it directly related to something that makes money or involves money (i.e. the Finance department)?
- Does it power a core feature of the business?
- Is the data used by high-level decision makers?

These are the pipelines that should be prioritized and tested the most rigorously.

### Step 2: Understand the architecture and decide what/how to test

Data pipelines can look very different depending on the company you're at. At some companies, they are entirely no-code, at others everything is built in-house, but most are a combination of code mixed with SaaS or open-source tools.

Generally speaking, if you have any custom code that extracts, loads, or transforms data you should write unit tests that run every time you make a change to this code. Priority should be given to any business logic and custom connectors to ensure data isn't corrupted early in the pipeline. Popular tools for this are [unittest for Python](https://docs.python.org/3/library/unittest.html) and [GitHub Actions](https://docs.github.com/en/actions) to automate running the tests.

> [!tip]
> New to unit testing? Here is a short guide for beginners: [https://www.dataquest.io/blog/unit-tests-python/](https://www.dataquest.io/blog/unit-tests-python/)

Now that you're testing your code, you also need to test your data quality to catch any "silent failures" and ensure the data arrives as expected. Silent failure in this case refers to when a data pipeline doesn't produce an error but the data output is wrong or missing. These data quality tests are run as part of your data pipeline. Here are several popular [[Data Unit Test#Data Unit Testing Tools|data quality testing tools]].

Data quality tests should be triggered early on in the pipeline and test core business logic. You'll need to work with the person/department who is the owner of the business logic to help you build appropriate tests. It would be a mistake to not talk to other departments and spend time writing tests that you later find out aren't valuable.

Some common data quality tests are:

- Check the count of rows
- Check if a column contains nulls
- Check if the unique values in a column are expected values
- Check if a number value falls into an expected range

Other kinds of tests may be more common depending on the use case. For example, if your pipeline feeds data into a machine learning model, then it's common to check and make sure the [data population hasn't drifted](https://towardsdatascience.com/checking-model-stability-and-population-shift-with-psi-and-csi-6d12af008783).

### Step 3: Planning for failure

When a unit test fails it usually fails before the code makes it to production. But what do you do if a data quality test fails?

Going back to the Write-Audit-Publish pattern mentioned earlier, you'll want to write the batch of data that failed your tests somewhere so you can inspect it and figure out what happened. This also prevents bad data from being used downstream in important dashboards or data products. In a batch pipeline, this may be just a separate table in your data warehouse or it could be written to object storage like an S3 bucket. For streaming pipelines, you might send this bad data to a [Dead-Letter Queue](https://aws.amazon.com/what-is/dead-letter-queue/). Again, you should be able to inspect, fix, and then re-run the data through the pipeline from wherever you temporarily store the failed data.

Another common practice for data engineering is to create a runbook for each pipeline. A runbook is simply documentation that outlines the steps to take to resolve an issue or perform a task. You can read more about runbooks [here](https://www.pagerduty.com/resources/learn/what-is-a-runbook/).

## Continuous Monitoring and Alerting

We won't get into the details of monitoring and alerting because it's a separate topic but it's worth mentioning here that you will need to make sure that if tests fail, the appropriate person is alerted and can fix it. If you're using a workflow orchestrator to run your pipeline then you can use the built-in email/alerting functionality to send an email if a data quality test fails.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Guides/Testing%20Your%20Data%20Pipeline.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Guides/Testing%20Your%20Data%20Pipeline.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Guides/Testing%20Your%20Data%20Pipeline) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Guides/Testing%20Your%20Data%20Pipeline)</span>
