---
Aliases: [AWS RDS]
Tags: [seedling]
publish: true
---

AWS RDS (Amazon Web Services Relational Database Service) is a collection of AWS managed services. Featuring several different popular relational database engines, including Aurora, Postgres, and MySQL, RDS is a popular choice for spinning up databases.

One of the key features of RDS is that it is a cloud distributed product. This simplifies the setup of the databases and allows for easier scalability. There are a few features in particular that RDS is known for:

1.  Read Replicas

Read replicas create multiple “replica” copies of data. This allows high-volume applications to have enhanced performance for read-heavy operations. Read replica can be turned into standalone database instances, and elastically scale.

1.  Multi-AZ

AWS is well known for their availability zone architecture, which separates traffic from physical geographic regions. Multi-AZ settings allow for the creation of standby replicas in different regions to allow for enhanced performance.

## Amazon RDS Official Documentation

https://aws.amazon.com/rds/