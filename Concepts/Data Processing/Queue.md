---
Title: Queue
Aliases:
  - Message Queue
  - Work Queue
  - SQS
  - Kafka
Tags:
  - concepts
  - data-processing
  - messaging
  - event-driven
---

# Queue

A **queue** is a messaging pattern where producers put messages into a buffer, and consumers pull messages out to process them. The main point is **decoupling**: the producer and consumer don’t need to run at the same speed (or even be online at the same time).

In data engineering, “queue” sometimes gets mixed up with tools like Kafka. They both move messages, but they are built for **different goals**.

---

# Queue (SQS) vs Message Broker / Log (Kafka) — Beginner Friendly

A simple way to remember it:

- **Queue (SQS)** = a **to-do list** for workers  
- **Kafka** = a **shared activity journal** that many teams can read (and re-read)

## 1) What problem does each one solve?

### ✅ SQS-style Queue (work distribution)
SQS is designed to help you **get work done** by distributing tasks to workers.

Examples of “work” messages:
- “Process this CSV file”
- “Resize these images”
- “Run enrichment for customer 42”
- “Send a notification email”

You push tasks into SQS, and a pool of workers pulls tasks and executes them.

### ✅ Kafka-style Broker / Log (event streaming)
Kafka is designed to store **events** so that **many consumers** can read them and you can **replay history**.

Examples of “event” messages:
- “OrderPlaced”
- “PaymentSucceeded”
- “InventoryUpdated”
- “CustomerProfileChanged”

Kafka stores these events like an **append-only log**.

---

## 2) What happens to a message after it is consumed?

### SQS (Queue)
- A worker reads a message.
- If the worker **ACKs** (deletes) it, the message is **gone**.
- If the worker crashes before ACK, the message becomes visible again and can be retried.

**Mental model:** one task → one worker should do it.

### Kafka (Log)
- Messages are **not removed** when consumed.
- Kafka keeps messages for a **retention period** (hours/days/weeks).
- Consumers track their **offset** (how far they’ve read).
- You can reset offsets and **replay** old events.

**Mental model:** events are stored so multiple teams can read them whenever they want.

---

## 3) Who gets the message?

### SQS
- Typically, **one consumer** processes a message.
- If you have 10 workers, they “share” the queue; each message goes to **one** worker.
- Great for scaling a worker pool.

### Kafka
Kafka supports both:
1. **Consumer groups:** within a group, each message goes to one consumer (work distribution).
2. **Multiple groups:** different systems can independently consume the same events.

Example: the same “OrderPlaced” event can be consumed by:
- analytics
- fraud detection
- email service
- inventory service

Each system reads the stream without interfering with the others.

---

## 4) Ordering and scaling

### SQS
- **Standard SQS** does not guarantee strict ordering.
- **FIFO SQS** provides ordering, but can reduce throughput compared to Standard.

### Kafka
- Kafka guarantees ordering **within a partition**.
- Scaling is done via **partitions** (more partitions = more parallelism).
- You pick a partition key (like `order_id`) to keep ordering for related events.

---

## 5) Replay / backfill (super important for data engineering)

### SQS
- Once processed and deleted, the message is usually gone.
- Replaying history is not what it’s designed for.
- If you need reprocessing, you typically store raw data elsewhere (S3/GCS) and re-run.

### Kafka
- Replay is a core feature.
- You can reprocess from the beginning of a topic or from a time-based offset.
- Very useful for:
  - rebuilding a table after a bug fix
  - backfilling analytics
  - adding a new downstream consumer later

---

## 6) Typical use cases

### Use SQS when:
- you have **tasks/jobs** to process
- you want a **worker pool** that scales up/down
- you want built-in **retries + DLQ**
- you don’t need many independent consumers for the same message

Examples:
- file processing jobs
- async API jobs
- ETL triggers like “process file X now”
- sending notifications (task-based)

### Use Kafka when:
- you are building **event-driven** systems
- multiple downstream systems need the same events
- you need **replay/backfill**
- you want streaming pipelines and real-time analytics

Examples:
- CDC event stream from a database
- clickstream / app telemetry
- order/payment events powering multiple services
- near real-time monitoring pipelines

---

## 7) One-line decision rule

- If it’s **work to do once** → start with **SQS (queue)**
- If it’s an **event you want to keep and replay** → start with **Kafka (log/broker)**

---

## 8) Tiny real-world example: “A customer places an order”

### Kafka approach (event first)
- Produce: `OrderPlaced(order_id=123, user=...)`
- Multiple consumers read it:
  - inventory reduces stock
  - email sends receipt
  - analytics updates dashboards
  - fraud checks patterns
- If analytics is down for a day, it can replay the topic and catch up.

### SQS approach (task first)
- Put task: “Send receipt for order 123”
- One worker picks it and sends the email.
- Great for the email task — but SQS is not ideal as the main system-of-record for all order events.

---

## Quick glossary
- **ACK:** confirming a message was processed successfully.
- **DLQ (Dead Letter Queue):** messages go here after failing too many times.
- **Offset (Kafka):** pointer to where a consumer is in the log.
- **Retention (Kafka):** how long Kafka keeps messages.

%% wiki footer: Please don't edit anything below this line %%
## This note in GitHub
<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Processing/Queue.md "git-hub-edit-note") |
[Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Processing/Queue.md "git-hub-copy-note")</span>
<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Processing/Queue) or
[👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Processing/Queue)</span>
