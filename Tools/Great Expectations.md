---
Aliases: [great expectations]
Tags: [seedling]
publish: true
---

[Great Expectations](https://github.com/great-expectations/great_expectations) is a [[Python]] library for creating [[Data Unit Test|data unit tests]] that can be used in your [[Data Pipeline|data pipelines]].

# Summary
Great Expectations operates off of the principal that data engineering pipelines tend towards entropy over time, a term that they dub "pipeline debt". Great Expectations aims to provide a testing and evaluation suite to
help data engineering teams clean up their pipelines and increase their confidence in working on them in a collaborative setting.

Great Expectations calls each unit test segment an "Expectation", due to expecting the output of a test to be a certain value. Rather than other testing and evaluation suites, Great Expectations encourage testing
at batch time (when new data arrives). This is in contrast to compile or deploy times. By testing at batch time, teams can be confident that there is a safety net should code behave unexpectedly for new data, and pinpoint the root cause as soon as possible.

# Workflow
1) Introduce the expectation early into the process, perhaps even before you've built a pipeline.
2) Show it to the stakeholder and have them validate the assumptions.
3) Implement it into your pipeline.
4) Continuously update tests as data changes by iterating with the stakeholder.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/Great%20Expectations.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/Great%20Expectations.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tools/Great+Expectations) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tools/Great+Expectations)</span>
