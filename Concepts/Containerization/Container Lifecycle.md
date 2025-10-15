---
aliases:
  - Concepts/Container Lifecycle
  - Container Lifecycle
tags:
  - seedling
publish: false
---

The container lifecycle describes the stages a container goes through—from image creation, initialization, running, pausing, stopping, and ultimately removal. 
*All example code below user Docker as the runtime environment*
## Creation

`docker create --name my-container my-image:latest`

The container has been defined from an image and assigned resources but is not yet running. Docker (or another runtime) initializes the container metadata, filesystem, and environment.

## Running

`docker start` or `docker run` (create and start at the same time)

The container is executing the application or command. To monitor running containers: 

`docker ps -a`

## Paused

`docker pause my_container`

The container process is temporarily suspended. To unpause a container: 

`docker unpause my_container`

## Exit

To manually stop/kill a container:  `docker kill my_container` or `docker stop my_container`

The container has completed execution or has been manually stopped. Alternatively, you can use:

`docker rm -f my_container` to remove the container 

Documentation for these command can be read at [Dockerdocs - CLI commands](https://docs.docker.com/reference/cli/docker/)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Container%20Lifecycle.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Container%20Lifecycle.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Container%20Lifecycle) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Container%20Lifecycle)</span>
