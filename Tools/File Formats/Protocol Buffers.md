---
Aliases: [protobuf]
Tags: [seedling]
publish: true
---

![GitHub Repo stars](https://img.shields.io/github/stars/protocolbuffers/protobuf?style=social) ![GitHub last commit](https://img.shields.io/github/last-commit/protocolbuffers/protobuf) ![GitHub](https://img.shields.io/github/license/protocolbuffers/protobuf)

Protocol buffers provide a serialization format for packets of typed, structured data that are up to a few megabytes in size. The format is suitable for both ephemeral network traffic and long-term data storage. Protocol buffers can be extended with new information without invalidating existing data or requiring code to be updated. They are the most commonly-used data format at Google.

**Extension:** `.proto`

## Protocol Buffers Official Documentation

https://developers.google.com/protocol-buffers/docs/overview

## Protocol Buffers Advantages

- Compact data storage
- Fast parsing
- Available in [several programming languages](https://developers.google.com/protocol-buffers/docs/overview#cross-lang)

## Protocol Buffers Disadvantages

- Not suitable for data larger than a few megabytes
- Messages are not compressed. You can compress them but sometimes special-purpose compression algorithms (JPEG, PNG) will produce more optimal results.
- Not optimal for scientific and engineering use cases involving multi-dimensional arrays of floating point numbers.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tools/File%20Formats/Protocol%20Buffers.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tools/File%20Formats/Protocol%20Buffers.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tools/File+Formats/Protocol+Buffers) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tools/File+Formats/Protocol+Buffers)</span>
