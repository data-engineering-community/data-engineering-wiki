---
Aliases: [Brewer's theorem]
Tags: []
---

The CAP theorem in computer science states that it's impossible for a distributed data store to provide more than two out of the three following guarantees:
- [**Consistency**](https://en.wikipedia.org/wiki/Consistency_model): Every read receives the most recent write or an error
- [**Availability**](https://en.wikipedia.org/wiki/Availability): Every request receives a (non-error) response, without the guarantee that it contains the most recent write
- [**Partition tolerance**](https://en.wikipedia.org/wiki/Network_partition): The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes