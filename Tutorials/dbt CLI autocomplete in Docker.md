---
aliases: 
tags:
  - seedling
publish: true
---

## Overview

By the end of this tutorial you will have autocompletion available with the dbt CLI (using bash) while running dbt locally via [Docker Compose](https://docs.docker.com/compose/). With the autocomplete you can tab-complete model, tag, source, and package selectors to node selection flags like `--select` and `--exclude`.

**Example usage (using the [redshift package](https://github.com/dbt-labs/redshift)):**
```
$ dbt run --model red<TAB>
redshift.*                                  redshift_admin_queries                      redshift_constraints
redshift.base.*                             redshift_admin_table_stats                  redshift_cost
redshift.introspection.*                    redshift_admin_users_schema_privileges      redshift_sort_dist_keys
redshift.views.*                            redshift_admin_users_table_view_privileges  redshift_tables
redshift_admin_dependencies                 redshift_columns
```

For other command line instructions, please read the [dbt-completion.bash README](https://github.com/dbt-labs/dbt-completion.bash/).

Note that the dbt resources **must be compiled** before it will be available for tab completion. Please see [notes and caveats](https://github.com/dbt-labs/dbt-completion.bash/?tab=readme-ov-file#notes-and-caveats) for full details.

This tutorial will not cover the basics of Docker or dbt-core. It is assumed you already have a dbt-core project and want to add autocomplete functionality.

## Requirements

- [Docker Desktop](https://www.docker.com/get-started/)
- A dbt core project

## 1. Create dbt Dockerfile

Inside your dbt project folder, add a **Dockerfile** if one doesn't exist. In this tutorial, we have our dbt project in a top level folder named dbt.

Project structure:

```text
. 
└── my_project/ 
	├── dbt/ 
	│ ├── ... 
	│ ├── Dockerfile
	│ └── requirements.txt 
	├── airflow/ 
	│ └── ... 
	└── docker-compose.yaml
```

Dockerfile:

```bash
FROM public.ecr.aws/docker/library/python:3.10-slim-buster

COPY . /dbt

# Update and install system packages
RUN apt-get update -y && \
  apt-get install --no-install-recommends -y -q \
  git libpq-dev python-dev curl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# dbt cli autocomplete
RUN curl https://raw.githubusercontent.com/dbt-labs/dbt-completion.bash/master/dbt-completion.bash > ~/.dbt-completion.bash
RUN echo 'source ~/.dbt-completion.bash' >> ~/.bash_profile

# Install dbt
RUN pip install -U pip
RUN pip install -r dbt/requirements.txt

# Install dbt dependencies
WORKDIR /dbt
RUN dbt deps

# Specify profiles directory
ENV DBT_PROFILES_DIR=.dbt
```

Note line 8 installing curl and lines 13-14 that download the dbt-completion.bash script. You can also build your Dockerfile on top of the [official dbt-core docker images](https://github.com/dbt-labs/dbt-core/blob/main/docker/Dockerfile) if you're familiar with Docker but that will be out of scope for this tutorial.

## 2. Create Docker Compose file

Next, we will be using Docker Compose to orchestrate the dbt service. It's likely you're already using Docker compose for local development like running airflow and a local db.

docker-compose.yaml:

```bash
version: '3'

services:
  dbt:
    build:
      context: ./dbt
      dockerfile: Dockerfile
    container_name: dbt
    tty: true
    volumes:
      - ./dbt:/dbt
    env_file: ./dbt/.env
    ports:
      - 8080:8080
```

## 3. Run dbt service and compile

Now you can start the dbt service and enter the dbt CLI. When attaching to the dbt service, it's important to use the `-l` command because it sources the .bash_profile.

Docker compose commands:

```bash
# Build & start docker detached
docker compose up -d

# Enter dbt CLI
docker exec -it dbt bash -l

# Inside dbt service run
dbt compile
```

And now you should be able to use tab-complete with dbt!

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/dbt%20CLI%20autocomplete%20in%20Docker.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tutorials/dbt%20CLI%20autocomplete%20in%20Docker.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Tutorials/dbt%20CLI%20autocomplete%20in%20Docker) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Tutorials/dbt%20CLI%20autocomplete%20in%20Docker)</span>
