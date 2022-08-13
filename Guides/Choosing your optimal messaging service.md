---
Aliases: []
Tags: [seedling]
publish: true
---

## Overview

A short guide on choosing which messaging service(s) to use.

## AWS

```mermaid
graph TD

A((Start)) --> B{Fan-out}

B -->|Yes| C{Rate limit}
C -->|Yes| D[SNS + SQS]
C -->|No| E[SNS]

B -->|No| F{Rate limit}
F -->|Yes| G[SQS]
F -->|No| H[Lambda Direct Invoke]

class B internal-link;
```

Source: [AWS re:Invent 2020: Scalable serverless event-driven architectures with SNS, SQS & Lambda](https://www.youtube.com/watch?v=8zysQqxgj0I&t=1887s)

## Azure

#placeholder/description 

## GCP

#placeholder/description 

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/Choosing%20your%20optimal%20messaging%20service.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tutorials/Choosing%20your%20optimal%20messaging%20service.md "git-hub-copy-note") </span>
