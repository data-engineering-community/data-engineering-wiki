---
Aliases: [Tools/Mage]
Tags: [seedling]
publish: true
---

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
  }}
>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
    }}
    href="https://pypi.org/project/mage-ai/"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://img.shields.io/pypi/v/mage-ai?color=orange"
      alt="Python package version"
    />
  </a>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
      marginLeft: "0.25rem",
    }}
    href="https://opensource.org/licenses/Apache-2.0"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://img.shields.io/github/license/mage-ai/mage-ai?color=red"
      alt="Apache version"
    />
  </a>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
      marginLeft: "0.25rem",
    }}
    href="https://join.slack.com/t/mageai/shared_invite/zt-1adn34w4m-t~TcnPTlo3~5~d_0raOp6A"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://img.shields.io/badge/Slack-Join%20Slack-blueviolet?logo=slack"
      alt="Slack community"
    />
  </a>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
      marginLeft: "0.25rem",
    }}
    href="https://github.com/mage-ai/mage-ai"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://img.shields.io/github/stars/mage-ai/mage-ai?logo=github"
      alt="GitHub Stars"
    />
  </a>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
      marginLeft: "0.25rem",
    }}
    href="https://hub.docker.com/r/mageai/mageai"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://img.shields.io/docker/pulls/mageai/mageai.svg"
      alt="Docker pulls"
    />
  </a>
  <a
    style={{
      borderStyle: "none",
      marginTop: "0.125rem",
      marginBottom: "0.125rem",
      marginLeft: "0.25rem",
    }}
    href="https://pepy.tech/project/mage-ai"
  >
    <img
      style={{
        margin: 0,
        cursor: "pointer",
      }}
      src="https://static.pepy.tech/personalized-badge/mage-ai?period=total&units=international_system&left_color=grey&right_color=blue&left_text=pip%20installs"
      alt="pip installs"
    />
  </a>
</div>

## Overview

[Mage](https://www.mage.ai/) is an open-source data pipeline tool for transforming and integrating data. Mage features a GUI and pre-built assets for data extraction, transformation, and storage.

<center>
<div style="margin:0 auto;">
 <a href="https://mage.ai/">
      <img src="https://raw.githubusercontent.com/mage-ai/assets/main/mage-build.gif" width=75%>
 </a>
<div>
</center>

Mage is built around the following core abstractions: projects, pipelines, and blocks. Each project houses one or many pipelines, which can perform batch processing, streaming, or data integration.

Each pipeline is comprised of discrete blocks. Blocks allow users to load, export, and transform data. Mage's built-in testing framework allows data engineers to check outputs at every step of the way.

These outputs can be previewed and analyzed via Mage's GUI. This reduces friction in the developer feedback loop, allowing for faster editing and troubleshooting.

## 🔮 [Features](https://docs.mage.ai/introduction/overview#features)

| 🎶  | [Orchestration](https://docs.mage.ai/design/data-pipeline-management)                | Schedule and manage data pipelines with observability.                 |
| --- | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 📓  | [Notebook](https://docs.mage.ai/about/features#notebook-for-building-data-pipelines) | Interactive Python, SQL, & R editor for coding data pipelines.         |
| 🏗️  | [Data integrations](https://docs.mage.ai/integrations/data-integrations)             | Synchronize data from 3rd party sources to your internal destinations. |
| 🚰  | [Streaming pipelines](https://docs.mage.ai/guides/streaming-pipeline)                | Ingest and transform real-time data.                                   |
| ❎  | [DBT](https://docs.mage.ai/dbt/overview)                                             | Build, run, and manage your dbt models with Mage.                      |

## 🏔️ [Core design principles](https://docs.mage.ai/design/core-design-principles)

Every user experience and technical design decision adheres to these principles.

| 💻  | [Easy developer experience](https://docs.mage.ai/design/core-design-principles#easy-developer-experience) | Open-source engine that comes with a custom notebook UI for building data pipelines.                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🚢  | [Engineering best practices built-in](https://docs.mage.ai/design/core-design-principles#engineering-best-practices-built-in)                                                                 | Build and deploy data pipelines using modular code. No more writing throwaway code or trying to turn notebooks into scripts. |
| 💳  | [Data is a first-class citizen](https://docs.mage.ai/design/core-design-principles#data-is-a-first-class-citizen)                                                                       | Designed from the ground up specifically for running data-intensive workflows.                                               |
| 🪐  | [Scaling is made simple](https://docs.mage.ai/design/core-design-principles#scaling-is-made-simple)                                                                              | Analyze and process large data quickly for rapid iteration.                                                                  |

## 🛸 [Core abstractions](https://docs.mage.ai/design/core-abstractions)

These are the fundamental concepts that Mage uses to operate.

| [Project](https://docs.mage.ai/design/core-abstractions#project)           | Like a repository on GitHub; this is where you write all your code.                                                                                         |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Pipeline](https://docs.mage.ai/design/core-abstractions#pipeline)         | Contains references to all the blocks of code you want to run, charts for visualizing data, and organizes the dependency between each block of code.        |
| [Block](https://docs.mage.ai/design/core-abstractions#block)               | A file with code that can be executed independently or within a pipeline.                                                                                   |
| [Data product](https://docs.mage.ai/design/core-abstractions#data-product) | Every block produces data after it's been executed. These are called data products in Mage.                                                                 |
| [Trigger](https://docs.mage.ai/design/core-abstractions#trigger)           | A set of instructions that determine when or how a pipeline should run.                                                                                     |
| [Run](https://docs.mage.ai/design/core-abstractions#run)                   | Stores information about when it was started, its status, when it was completed, any runtime variables used in the execution of the pipeline or block, etc. |

## Advantages

- **Hybrid GUI/Code Tool:** design-driven GUI for building and editing pipelines while still allowing the flexibility of code.
- **Easy developer experience:** start developing locally with a single command or launch a dev environment in the cloud.
- **Engineering best practices built-in:** each step in your pipeline is a standalone file containing modular code that’s reusable and testable with data validations.
- **Interactive code**: Immediately see results from your code’s output with an interactive notebook UI.
- **Data is a first-class citizen**: Each block of code in your pipeline produces data that can be versioned, partitioned, and cataloged for future use.
- **Collaborate on cloud**: Develop collaboratively on cloud resources, version control with Git, and test pipelines without waiting for an available shared staging environment.
- **Scaling made simple**: Transform very large datasets directly in your data warehouse or through a native integration with Spark.
- **Observability**: Operationalize your pipelines with built-in monitoring, alerting, and observability through an intuitive UI.
- **Rapidly growing community**: Mage has a vibrant community of over 2.5k data professionals as of 07/23.
- **Data integration**: Use existing connectors or build your own with the Singer-spec for a free alternative to paid tools, like Fivetran. Full table and incremental via CDC (change data capture) support.
- **Native integration with dbt**: preview dbt results, orchestrate dbt model runs, schedule dbt models to depend on non-dbt tasks (e.g. ETL/ELT pipelines).

## Disadvantages

- **Requires frequent patches**: Frequent releases/version upgrades mean that some maintenance is required.
- **Work in progress**: version 0.9.3 as of 07/23— this is not yet a v1 tool.
- **No managed offering**: there is only a self-hosted option, currently.
- **Compliance**: At this time, Mage only supports SOC-2 security standards.
- **SLAs**: Since Mage is self-hosted, no support service-level agreements are available.

## Learning Resources

- [~1.5 minute video](https://www.youtube.com/watch?v=hrsErfPDits)
- [Live interactive demo](http://demo.mage.ai/)
- [Documentation](https://docs.mage.ai/)
- [Community chat](https://www.mage.ai/chat)

## [Recent Posts](https://www.reddit.com/r/dataengineering/search/?q=Mage&restrict_sr=1&sr_nsfw=&sort=new)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/Workflow%20Orchestrators/Mage.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/Workflow%20Orchestrators/Mage.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tools/Workflow%20Orchestrators/Mage) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tools/Workflow%20Orchestrators/Mage)</span>
