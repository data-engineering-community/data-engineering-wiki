---
Aliases: []
Tags: [seedling]
publish: true
---

## Overview

This guide provides general guidance for strategies to optimize various assets in the cloud. When talking about the cloud we will be using the most popular cloud providers as examples ([[Amazon Web Services|AWS]], [[Google Cloud Platform|GCP]], and [[Microsoft Azure|Azure]]). 

## General Compute

General compute refers to servers that can be used to handle a large variety of general purpose work in the cloud. Typically, this kind of compute is used for transforming data or hosting a service. General compute services range from fully customizable to managed services where you have less control over the environment and settings.

Examples of general compute services:

- **AWS:** EC2, Fargate, Batch
- **Azure:** Virtual Machine, Container Instances, Batch
- **GCP:** Compute Engine, Cloud Run, Batch on GKE

### Turn on metrics monitoring

Before you can optimize anything, you need to turn on metrics to monitor the performance of your service. This monitoring is usually an additional expense but reasonable. If you don't believe you'll need it long term you can turn it on while you optimize and then turn it off later.

Examples of metrics monitoring services:

- AWS: [CloudWatch](https://aws.amazon.com/cloudwatch/)
- Azure: [Azure Monitor](https://azure.microsoft.com/en-us/products/monitor/)
- GCP: [Cloud Monitoring](https://cloud.google.com/monitoring/?hl=en)
- [Datadog](https://www.datadoghq.com/)

Once monitoring is turned on, focus on understanding your workload patterns and assessing whether your current usage is over-provisioned or under-provisioned. If you realize at this point that your workload is **unpredictable**, you may want to consider switching to a [serverless service](https://en.wikipedia.org/wiki/Serverless_computing).

### Rightsize resources

Rightsizing is a term that means identifying and adjusting specific resources to increase resource utilization and potentially save costs. This adjustment usually happens when there's an over-provisioning situation. Now that you've activated metric monitoring and gathered data on your resource usage, ensure that your instance size is suitable. This is the point where you'll fine-tune the instance size to match the CPU and memory requirements of your workload.

### Enable Autoscaling

After rightsizing your compute service, you can typically enable autoscaling to dynamically adjust resources up and down based on demand in your workload. This means that if demand is low, autoscaling will reduce the amount of resources provisioned allowing you to save money. Along with autoscaling, you will typically set high and low thresholds which should be based around your typical workload.

### Using spot instances

This is a type of VM instance that can be terminated at any time when resources need to be reallocated for other tasks. Because of this, spot VMs are offered at a much lower price with cost reductions of up to 90% as they make use of unused compute capacity. Spot VMs are suitable for fault-tolerant, stateless and flexible workloads that can handle interruptions but don't need to be completed at a specific time. Examples of these types of workloads include CI/CD jobs or batch processing jobs and more but it's not recommended for other types of workloads. 

Examples of different spot VMs:

- AWS: [AWS ECS Spot Instances](https://aws.amazon.com/ec2/spot/)
- Azure: [Azure Spot VMs](https://azure.microsoft.com/en-us/products/virtual-machines/spot)
- GCP: [GCP Spot VMs](https://cloud.google.com/spot-vms)
- IBM: [Transient virtual servers](https://cloud.ibm.com/docs/virtual-servers?topic=virtual-servers-about-vs-transient)

### Savings plans

Finally, after exploring the above options, you can usually get significant savings by purchasing savings plans which are typically longer range commitments to use a predetermined amount of a resource. These are great when you know that your workload is relatively steady and predictable. Savings plans are a great high impact and low effort option for saving money.

- [AWS Savings plans](https://aws.amazon.com/savingsplans/)
- [Azure savings plans for compute](https://azure.microsoft.com/en-us/pricing/offers/savings-plan-compute/#benefits-and-features)
- [GCP Committed use discounts](https://cloud.google.com/docs/cuds)

## Databases

#placeholder

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Guides/Cost%20Optimization%20in%20the%20Cloud.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Guides/Cost%20Optimization%20in%20the%20Cloud.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Guides/Cost%20Optimization%20in%20the%20Cloud) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Guides/Cost%20Optimization%20in%20the%20Cloud)</span>
