---
Aliases:
  - Concepts/Data Ingestion
Tags:
  - evergreen
publish: true
---

Data ingestion is the process of extracting and importing data from various sources into a destination system where it can be stored, transformed, and analyzed. It commonly involves moving data from operational systems, external sources, or real-time streams into data storage systems like data warehouses and data lakes.

Data ingestion can be categorized into two main approaches: [[Batch Data Processing|batch ingestion]] (processing data in scheduled intervals) and [[Stream Data Processing|real-time/streaming ingestion]] (processing data continuously as it arrives).

## Data Ingestion Components

Data ingestion consists of a few key components that work together to reliably move data from sources to destinations:

### 1. Data Sources

Common data sources include:

- **Databases**: Operational databases (PostgreSQL, MySQL, SQL Server)
- **Applications**: SaaS platforms, CRM systems (Hubspot, Salesforce), ERP systems
- **Files**: CSV, JSON, XML, Parquet files from SFTP/FTP servers or cloud storage
- **APIs**: REST APIs, GraphQL endpoints, webhooks
- **Message Queues**: Kafka, RabbitMQ, Amazon SQS
- **Streaming Sources**: IoT devices, clickstreams, social media feeds
- **Cloud Services**: AWS S3, Google Cloud Storage, Azure Blob Storage

### 2. Ingestion Patterns

#### Extract, Transform, Load (ETL)

ETL is a traditional ingestion pattern where data is extracted from a source, transformed (during the ingestion process), and then loaded into the destination.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[Data Source] 
    B[Extract]
    C[Transform<br/>Data Validation<br/>Business Rules<br/>Cleaning]
    D[Load]
    E[(Data Warehouse)]
    
    A -->|Raw data| B
    B -->|Extracted data| C
    C -->|Clean data| D
    D -->|Structured data| E
```

#### Extract, Load, Transform (ELT)

ELT is the modern ingestion pattern where raw data is extracted and loaded directly into the destination, then transformed within the destination system. ELT is the more popular pattern because storage is cheap and keeping the raw data allows for more flexibility in future data use cases.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[Data Source] 
    B[Extract]
    C[Load]
    D[Transform<br/>In destination]
    E[(Data Warehouse/Lake)]
    
    A -->|Raw data| B
    B -->|Extracted data| C
    C -->|Raw data| E
    E -->|Stored data| D
    D -->|Transformed data| E
```

#### [[Batch Data Processing|Batch Ingestion]]

Data is collected and processed in discrete chunks at scheduled intervals.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[Source System] 
    B["Scheduler (Airflow/Cron)"]
    C[Batch Extraction Script]
    D[(Staging Area)]
    E[(Data Warehouse/Data Lake)]
    
    B -->|Trigger at interval| C
    C -->|Extract data| A
    A -->|Data files| C
    C -->|Write batch| D
    D -->|Load batch| E
```

Characteristics:

- Higher latency (minutes to hours)
- More efficient for large volumes
- Easiest to implement and debug
- Lower infrastructure costs

#### [[Stream Data Processing|Streaming Ingestion]]

Data is processed continuously in real-time as it arrives.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[Source System] 
    B[Event Producer]
    C["Message Broker<br/>(Kafka/Kinesis/PubSub)"]
    D["Stream Processor<br/>(Flink/Spark Streaming)"]
    E[(Data Warehouse/Data Lake)]
    
    A -->|Generate events| B
    B -->|Send events| C
    C -->|Stream events| D
    D -->|Process & transform| E
```

Characteristics:

- Low latency (seconds to milliseconds)
- More complex to implement
- Higher infrastructure costs
- Enables real-time analytics

#### Micro-batch Ingestion

A hybrid approach that processes small batches of data at frequent intervals.

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[Source System]
    B["Scheduler (Airflow/Cron)"]
    C[Micro-batch Extraction Script]
    D[(Staging Area)]
    E[(Data Warehouse/Data Lake)]

    B -->|Trigger every few minutes| C
    C -->|Extract recent data| A
    A -->|New/changed data| C
    C -->|Write micro-batch| D
    D -->|Load micro-batch| E
```

Characteristics:

- **Near** real-time processing (typically 5-15 minutes)
- Balances latency and efficiency
- Easier than true streaming
- Good for most use cases

### 3. Data Ingestion Strategies

#### [[Full Load|Full Load]]

![[Full Load#^overview-full-load]]
![[Full Load#^overview-full-load-diagram]]

#### [[Delta Load|Incremental Load]]

![[Delta Load#^overview-delta-load]]
![[Delta Load#^overview-delta-load-diagram]]

#### [[Change Data Capture|Change Data Capture (CDC)]]

![[Change Data Capture#^overview-cdc]]
![[Change Data Capture#^overview-cdc-diagram]]

## Data Ingestion Examples

Common examples of data ingestion patterns.

### API Data Ingestion Example

Ingesting data from a REST API on a scheduled basis:

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[External API] 
    B[Scheduler: Airflow/Cron]
    C[Python Script]
    D[(Data Lake)]
    
    B -->|Trigger every hour| C
    C -->|HTTP Request| A
    A -->|JSON Response| C
    C -->|Store data| D
```

### Database Replication Example

Real-time replication from an operational database to an analytics database:

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    subgraph Production
        A[(PostgreSQL)]
        B[WAL Logs]
        A --> B
    end
    
    subgraph Ingestion
        C[Debezium Connector]
        D[Apache Kafka]
        B --> C
        C --> D
    end
    
    subgraph Analytics
        E[Kafka Connect]
        F[(Data Warehouse)]
        D --> E
        E --> F
    end
```

### File-Based Ingestion Example

Processing files dropped into cloud storage:

```mermaid
%%{init: { "flowchart": { "useMaxWidth": true } } }%%
graph LR
    A[External System] 
    B[(Cloud Storage<br/>S3/GCS)]
    C[Event Trigger]
    D[Processing Function]
    E[(Data Warehouse)]
    
    A -->|Upload files| B
    B -->|File arrival event| C
    C -->|Trigger| D
    D -->|Read and process| B
    D -->|Load processed data| E
```



%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Ingestion/Data%20Ingestion.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Ingestion/Data%20Ingestion.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Ingestion/Data%20Ingestion) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Ingestion/Data%20Ingestion)</span>
