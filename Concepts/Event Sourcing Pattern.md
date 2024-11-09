---
Aliases: []
Tags: [seedling]
publish: true
---

The event sourcing pattern captures all changes to an application as a sequence of event objects. This pattern creates a ledger of changes that can be used to replay events and view application state at any point in time.

![Event Sourcing|500](event-sourcing.png)
*Image source: [Event Sourcing and Event-Driven Architecture - In Under 5 Minutes!](https://ercin.medium.com/event-sourcing-and-event-driven-architecture-in-under-5-minutes-927f4e88351a)*

## Event Sourcing Pattern Advantages

- Provides an audit trail which is useful for auditing and compliance.
- You can rebuild the state of any entity to any point in time by replaying events.
- Aligns well with event-driven architectures and microservices where services communicate via events.

## Event Sourcing Pattern Disadvantages

- Managing the event store can be complex as the number of events grow and schema changes happen.
- Leads to an eventually consistent system (which is fine if that's acceptable) but should be noted it can introduce latency.
- Rebuilding an entity's current state by replaying all past events can resource intensive. Snapshotting can help mitigate this.

[^1]: https://martinfowler.com/eaaDev/EventSourcing.html

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Event%20Sourcing%20Pattern.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Event%20Sourcing%20Pattern.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Event%20Sourcing%20Pattern) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Event%20Sourcing%20Pattern)</span>
