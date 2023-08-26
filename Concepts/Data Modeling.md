---
Aliases: []
Tags: [incubating]
publish: true
---
Data Modeling is the process of mapping out an information system and how multiple parts are connected. Data models are typically illustrated in an entity-relationship diagram for relational databases like the picture below.

![[Assets/data_model_example.png|500]]

## Benefits of data modeling
Data modeling makes it easier for developers and other stakeholders to view and understand the relationships between data in a database or data warehouse. A good data model can also have the following benefits:
- Reduce errors in software and database development.
- Increase consistency in documentation and system design across the enterprise.
- Improve application and database performance.
- Ease data mapping throughout the organization.
- Improve communication between developers and business intelligence teams.
- Ease and speed the process of database design at the conceptual, logical and physical levels.

## Types of Data Models

### Conceptual
Offers a big-picture view of what the system will contain, how it will be organized, and which business rules are involved. Conceptual models are usually created as part of the process of gathering initial project requirements. Typically, they include entity classes (defining the types of things that are important for the business to represent in the data model), their characteristics and constraints, the relationships between them and relevant security and data integrity requirements

### Logical
They are less abstract and provide greater detail about the concepts and relationships in the domain under consideration. One of several formal data modeling notation systems is followed. These indicate data attributes, such as data types and their corresponding lengths, and show the relationships among entities. Logical data models don’t specify any technical system requirements. This stage is frequently omitted in agile or DevOps practices. Logical data models can be useful in highly procedural implementation environments, or for projects that are data-oriented by nature, such as data warehouse design or reporting system development.

### Physical
They provide a schema for how the data will be physically stored within a database. As such, they’re the least abstract of all. They offer a finalized design that can be implemented as a relational database, including associative tables that illustrate the relationships among entities as well as the primary keys and foreign keys that will be used to maintain those relationships. Physical data models can include database management system (DBMS)-specific properties, including performance tuning.

## Data Modeling Techniques

[[Relational Modeling]]
[[Dimensional Modeling]]
[[Data Vault Modeling]]
[[One Big Table]]
[[Activity Schema]]
[[Unified Star Schema]]


![[Learning Resources#Data Modeling Learning Resources]]


## Data Modeling Tools

- [Oracle Data Modeler](https://www.oracle.com/database/sqldeveloper/technologies/sql-data-modeler/download/)
- [dbdiagram.io](https://dbdiagram.io/home)
    - This is not a full fledged modeling tool like Oracle Data modeler but supports the modeling using DBML which you can view and then convert DBML to DDL using the [dbml cli](https://www.npmjs.com/package/@dbml/cli)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Data%20Modeling.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Data%20Modeling.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Data%20Modeling) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Data%20Modeling)</span>
