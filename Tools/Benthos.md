---
Aliases: [benthos]
Tags: [seedling]
publish: true
---

![[Assets/benthos.svg]]

[Benthos](https://www.benthos.dev/) is a free and open source data streaming engine written entirely in Go and packaged as a static single-binary command line tool. It comes with a wide range of [connectors](https://www.benthos.dev/docs/about/#components) and is totally data agnostic.

Data transformations can be expressed using a high-level DSL called [Bloblang](https://www.benthos.dev/docs/guides/bloblang/about/), or blobl for short, which is a language designed for mapping data of a wide variety of forms.

It also exposes a [Go API](https://pkg.go.dev/github.com/benthosdev/benthos/v4) which allows users to import Benthos as a library and extend it through custom plugins.

[Benthos Studio](https://studio.benthos.dev/) is an application that provides visual editing and testing capabilities for Benthos pipelines.

The [Community](https://www.benthos.dev/community/) page contains links to various places where you can reach out and ask for help with Benthos.

## Benthos Advantages

- Can be used for both realtime and batch processing use cases
- Provides a unified framework for building data streaming pipelines
- Simple and easy to deploy
- Well-maintained and organised codebase written in pure Go
- Stateless

## Popular use cases

- Reading to / Writing from [[Apache Kafka|Kafka]] and similar event streaming platforms
- [Windowed Processing](https://www.benthos.dev/docs/configuration/windowed_processing)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/Benthos.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/Benthos.md "git-hub-copy-note") </span>
