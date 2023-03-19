---
Aliases: [batch processing]
Tags: [incubating]
publish: true
---

Batch processing is a term used to describe collecting, modifying, or exporting multiple data records at a regular cadence with downtime in between batches. Because large amounts of data can be processed all at once in these batches it can be a very efficient approach and is best suited for handling frequent, repetitive tasks. It is the most common form of data processing that fits many businesses data needs.

A key point to remember about batch processing is that it was originally designed to handle non-continuous data. [[Stream Data Processing|Stream processing]] is typically used for continuous data, though there are ways to configure the architecture behind batch processing to enable quasi-continuous workflows. (See [Concurrent Batch Processing](#Concurrent+Batch+Processing) below)

Many businesses face increasingly complicated and diverse data challenges due to the sheer magnitude of data available. Batch processing has increased in sophistication, and is also often used in conjunction with other processing techniques for modern analysis. While batch processing used to be by far the most common and widely used method of data processing, recently real-time or near real-time [[Stream Data Processing|stream processing]] has proven to be a worthy competitor. As traditional batch systems run overnight to process data accumulated during the day, there is naturally a delta between the real world versus what the data is actually describing. [Advanced Batch Processing](#Advanced+Batch+Processing) partially solves this issue, but even the most advanced systems cannot compete with [[Stream Data Processing|stream processing]] for real-time continuous data.

## Batch Data Processing Advantages

### Efficiency

Batch processing allows a company to process data when computing or other resources are available. For example, a common schedule is to process data overnight when the database and servers aren't being used by employees. If data isn't frequently updated, one can simply change the batch processing schedule to make it less frequent as well.

### Simplicity

Compared to [[Stream Data Processing|stream processing]], batch processing is usually less complex and doesn't require special hardware or system support for incoming data. Batch processing systems typically require less maintenance than stream processing.

### Processing Speed

Because batch processing allows companies to process large amounts of data quickly, this speeds up processing time and delivers data that companies can use in a timely fashion.

## Advanced Batch Processing

Traditionally, batch processing was usually configured to run sequentially. Each job was processed one after another on a single machine. The need for more sophistication led to the rise of concurrent and parallel batch processing.

### Concurrent Batch Processing 

Concurrent batch processing typically refers to jobs that run batches partially overlapping in time. This overlap allows for a piece of the data to always be analyzed at a given time. Concurrent batch processing gives the illusion of parallelism without requiring more than a single CPU core. Due to this concurrent "multi-threading" behavior, the architecture for concurrent batch processing must have fault tolerance in mind. As batches are not run one after another, a single batch failure could cause a domino effect on other batches should the architecture be configured poorly.

### Parallel Batch Processing 

Parallel batch processing takes a similar approach as concurrent batch processing, however instead of overlapping parts of batches over time, entire batches are scheduled in parallel. By taking advantage of the relative cheapness of multicore machines in the modern age, parallel batch processing can multitask effectively.

### Modern Batch Processing

Modern day batch processing methods often use a combination of both concurrent and parallel batch processing. Also called parallel concurrent batch processing, by finding the right balance of parameter tunings to optimize how each CPU core handles multiple tasks and how each worker system handles a single task, when properly configured, parallel concurrent batch processing is a state of the art solution. Institutions that require greater stability and security such as the financial sector most commonly use parallel concurrent batch processing. For the most important data, often multiple redundant batches are run so that even if one batch fails, other batches can cover for the mistakes of the failure.

As mentioned above, live data streaming is a challenge for batch processing traditionally. While attempts have been made to use concurrent and parallel batch processing methods to analyze "microbatches" stacked on top of each other on extremely powerful machines, the use case for complex architectures like this is niche. For the majority of live data cases, [[Stream Data Processing|stream processing]] is still preferred. The main business use case for batch processing for this application is when such large quantities of data needs to be analyzed that stream data processing is not a viable option.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Batch%20Data%20Processing.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Batch%20Data%20Processing.md "git-hub-copy-note") </span>
