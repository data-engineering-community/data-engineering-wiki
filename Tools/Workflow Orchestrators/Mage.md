---
Aliases: [Tools/Mage]
Tags: [seedling]
publish: true
---
## Official Links
- [~1.5 minute video](https://www.youtube.com/watch?v=hrsErfPDits)
- [Live interactive demo](http://demo.mage.ai/)
- [Documentation](https://docs.mage.ai/)
- [Community chat](https://www.mage.ai/chat)

## Overview
[Mage](https://www.mage.ai/) is an open-source data pipeline tool for transforming and integrating data. Mage features a GUI and pre-built assets for data extraction, transformation, and storage.

<center>
<a href="https://dataengjobs.com/">
     <img src="https://raw.githubusercontent.com/mage-ai/assets/main/mage-build.gif" width=600>
</a>
</center>

Mage is built around the following core abstractions: projects, pipelines, and blocks.

Each project houses one or many pipelines, which can perform batch processing, streaming, or data integration.

Each pipeline is comprised of discrete blocks. Blocks allow users to load, export, and transform data. Mage's built-in testing framework allows data engineers to check outputs at every step of the way.

These outputs can be previewed and analyzed via Mage's GUI. This reduces friction in the developer feedback loop, allowing for faster editing and troubleshooting.

## 🔮 [Features](https://docs.mage.ai/about/features)

| 🎶  | [Orchestration](https://docs.mage.ai/design/data-pipeline-management)                | Schedule and manage data pipelines with observability.                 |
| --- | ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 📓  | [Notebook](https://docs.mage.ai/about/features#notebook-for-building-data-pipelines) | Interactive Python, SQL, & R editor for coding data pipelines.         |
| 🏗️  | [Data integrations](https://docs.mage.ai/integrations/data-integrations)             | Synchronize data from 3rd party sources to your internal destinations. |
| 🚰  | [Streaming pipelines](https://docs.mage.ai/guides/streaming-pipeline)                | Ingest and transform real-time data.                                   |
| ❎  | [DBT](https://docs.mage.ai/dbt/overview)                                             | Build, run, and manage your DBT models with Mage.                      |

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

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/Workflow%20Orchestrators/Mage.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/Workflow%20Orchestrators/Mage.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tools/Workflow%20Orchestrators/Mage) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tools/Workflow%20Orchestrators/Mage)</span>
