---
aliases:
  - Message Broker
  - Concepts/Message Broker
tags:
  - seedling
publish: false
---
Message brokers are often used as middleware components to temporarily store data from the senders, often called producers, and will then deliver them to the receivers, which are often referred to as consumers.  We utilize message brokers in the data engineering space to ensure that a large stream of data doesn't crash or overload any given software. 

Message brokers mitigate that problem by enforcing rules and constraints to the data is received from the producer. These rules are adhered to by the message broker and enforced before it is passed along to the consumer. There are several advantages in using message brokers within a system.

## Message broker advantages

### Asynchronous communication

If a data source is sending stream of data at a given rate, a rate that is too frequent for a slower downstream service such as a data pipeline or a [[Data Lake]], then it may crash the slower downstream service by exhausting its resources or overloading its capabilities. 

A message broker can mitigate this issue by acting as an intermediary between the data source and the consumer. It holds the data temporarily and is able to wait until the downstream service is ready to process that data. This allows data from the stream to be processed by the downstream service without the need of both processes interacting with each other in real time. 

This entire process, where we are splitting the processing into different components such as the producers and the consumers, is known as decoupling.

### Scalability

Using multiple producers can allow us with horizontal scaling capabilities in our system architecture. The load of the system can match the future growth of data with ease and increases the capability of the system to deal with overloading and growth of data being processed.

New consumers can be added without disturbing the data flow between the already operating consumers and the producers.

### Resiliency

If a consumer service fails, the data can be stored within the message broker temporarily until the consumer is back online. This prevents the loss of valuable data if an unexpected downtime of the system happens. 

### Monitoring

More robust message brokers often have monitoring capabilities that allow you to check on the performance metrics of the services or what data is being processed. 

## Message broker disadvantages

### Increased complexity

Increased complexity in system architecture and increased resources used in deploying a message broker. A message broker is often times not needed for simple pi

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Processing/Message%20Broker.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Processing/Message%20Broker.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Processing/Message%20Broker) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Processing/Message%20Broker)</span>
