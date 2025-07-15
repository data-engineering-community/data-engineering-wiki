---
aliases:
  - Concepts/Containerization
tags:
  - incubating
publish: false
---

Containerization is a special form of **virtualization** that packages the software code with its operating system libraries and dependencies into a light-weight executable unit called a [[Container]].
![[containerization.png| 550]]

## Containerization Advantages

- **Portability**: By packaging the code, its dependencies and OS, it solves the problem of "But it works on my machine", allowing the containerized software to run uniformly and consistently on various platforms.
- **Efficiency**: The software running in the containerized environment utilizes the host machine's OS kernel. Hence, it comes with a smaller size and requires less time to start up.
- **Faster deployment**: An application running from a container can be deployed easily and rapidly scaled due to their portability and efficiency.
- **Security**: The usage of containerization reduces the risk of the application being negatively impacted by security threats or exploits.
- **Microservices architecture**: Enables the development of modular, independently deployable services by using [[Container]] as deployment method.
- **Automation workflow**: Containerization can be integrated with **CI/CD** workflows, collaborating with various tools to create an automatic and consistent pipeline for building, testing, and deploying applications.

## Containerization Disadvantages

- **OS kernel**: Containerization use the OS kernel to operate so if there are any vulnerability in the kernel can potentially lead to errors on the application.
- **More security concerns**: Containerization require many components to function such as [[Container]], [[Container Image]], services,... These could the target for exploits and attacks.
- **Increase Complexity**: The process of creating and managing [[Container]] is a thorny task that require deep and wide system knowledge. 
- **Compatibility**: Containerized applications may face compatibility issues when interacting with legacy systems.
- **Steep learning curve**: Adopting Containerization require significant amount of time and effort to master and apply into real-world system.

## When to use Containerization

### Do's

- **Working with a Microservices architecture**: If you're working with microservices, containerization is a great fit. Containers allow you to deploy, scale, and manage each microservice independently making your application more scalable and resilient. 
- **DevOps workflow**: This combined with containerization delivers consistency and speed to the process of CI/CD, enables efficient development, testing, deployment pipelines.
- **Complex dependencies**: By encapsulating dependencies within a [[Container]], this allow applications to run consistently regardless of infrastructure.

### Don'ts

- **Simple application**: Using containerization for simple apps is overkill, straight deployment might be better regarding management complexity and speed.
- **Legacy system adoption**: "If it works, leave it be", refactor a working legacy system to newer technology might contain potential risks and tradeoffs that need consideration.
- **Fear of missing out**: "Everyone is using containerization so we need to use it too", this a false understanding of containerization usage. It is true that it provides many benefits to the development and deployment process, but when deciding to use a technology, you need to consider many aspects of a bigger picture. Everything has a tradeoff and containerization is not doing everything by itself, it needs to cooperate with its surroundings.

## Containerization Tools

- [[Docker]]: 
- [[Podman]]:
- [[Kubernetes]]
- [[Skopeo]]:
- [[Buildah]]: 

## Best Practices

- [Containerization best practices - Simform](https://www.simform.com/blog/containerization-best-practices)
- [Containerization best practices - Dev Communities](https://dev.to/aws-builders/the-art-of-creating-container-images-and-best-practices-3p9d)

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Containerization/Containerization.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Containerization/Containerization.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Containerization/Containerization) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Containerization/Containerization)</span>
