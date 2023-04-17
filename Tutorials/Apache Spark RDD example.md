---
Aliases: []
Tags: [seedling]
publish: true
---

# Overview

This tutorial will cover basic RDD operations that can be run on either Google Colab or Databricks Community Edition.

## Official Documentation

https://spark.apache.org/docs/latest/rdd-programming-guide.html

## Configuration

While Databricks has Spark installed as a native module, Google Colab needs some previous configuration to set the environment for the RDD operations.

We will first install PySpark, a Python library that let us use Apache Spark:

```
!pip install pyspark
```

After the module is installed, we will set up Spark Configuration so we can use **SparkContext**:

```
from pyspark import SparkContext, SparkConf

conf = SparkConf().setAppName('test').setMaster('local')
sc = SparkContext(conf=conf)
```

## First Steps

In order to work with RDDs we need to understand how an RDD is created. We will execute `sc.parallelize([your_data])` to create an RDD. By default, Spark admits *lists* and *dictionaries* on the parallelize argument. Now, if we want to see the content of an RDD, we must execute `.collect()`.

We can see here an easy example:

```
nums2 = sc.parallelize([3,2,1,4,5])
evens = nums2.filter(lambda elem: elem%2==0)
odds = nums2.filter(lambda elem: elem%2!=0)

order = pairs.union(impairs)
order.takeOrdered(5)
```
```
[1, 2, 3, 4, 5]
```

Let's explain this operation:
- We first create our rdd with `sc.parallelize()` under the variable name "nums2"
- We use a transformation operator (filter) and set up a lambda algorithm that will search for even numbers.
- We will do the same but searching for odd numbers.
- We execute an action operator (union) to join even and odds on a single list.
- To end this operation we will execute a TakeOrdered so we get an ordered list.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/Apache%20Spark%20RDD%20example.md "git-hub-edit-note") | [Copy this note](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/Apache%20Spark%20RDD%20example.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/3jZ8D4?rating=Yes&url=https://dataengineering.wiki/Tutorials/Apache+Spark+RDD+example) or [👎](https://tally.so/r/3jZ8D4?rating=No&url=https://dataengineering.wiki/Tutorials/Apache+Spark+RDD+example)</span>
