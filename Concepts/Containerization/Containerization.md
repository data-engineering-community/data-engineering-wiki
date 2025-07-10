---
aliases:
  - Concepts/Containerization
tags:
  - incubating
publish: false
---

Containerization is a special form of **virtualization** that package the code of a software with its operating system libraries and dependencies into a light-weight executable unit called [[Container]].
![[containerization.png| 550]]
## Containerization Advantages
- **Portability**: By isolating the code from its dependencies from the OS and associate libraries, it solve the problem of "But it works on my machine", allowing the containerized software to run uniformly and consistently on various platform.  
- **Efficiency**: The software run on the containerized environment utilize the host machine's OS kernel. Hence, it comes with smaller size and require less time to start up.
- **Faster deployment**: Application running from container can be deployed easily and rapidly scaled due to their portability and efficiency.    
- **Security**: The usage of containerization reduce the risk of the application being negatively impacted by security threats or exploits.
- **Microservices architecture**: Enables the development of modular, independently deployable services by using [[Container]] as deployment method.
- **Automation workflow**: Containerization can be integrated with **CI/CD** workflow, collaborating with various tools to create an automatic and consistent pipeline for building, testing, and deploying applications.
## Containerization Disadvantages
- **OS kernel**: Containerization use the OS kernel to operate so if there are any vulnerability in the kernel can potentially lead to errors on the application.
- **More security concerns**: Containerization require many components to function such as [[Container]], [[Container Image]], services,... These could the target for exploits and attacks.
- **Increase Complexity**: The process of creating and managing [[Container]] is a thorny task that require deep and wide system knowledge. 
- **Compatibility**: Containerized applications may face compatibility issues when interacting with legacy systems.
- **Steep learning curve**: Adopting Containerization require significant amount of time and effort to master and apply into real-world system.
## When to use Containerization
It is well-known that containerization is a game-changing technology for modern process of development and deployment. However, there are still some requirements that need to be meet in order to use this technology. Here are some Do's and Don'ts:
### Do's
- **Familiar with Microservices architecture**: If you're working with microservices architectures, containerization is a must. Containers allow you to deploy, scale, and manage each microservice independently. This modularity makes your applications more scalable and resilient. By isolating services, you can update or fix one component without affecting the others, leading to faster development cycles.
- **DevOps workflow**: This combine with containerization deliver consistency and speed to the process of CI/CD, enable efficient error-free development, testing, deployment pipeline. Hence, the delivery process will not have any problems.
- **Complex dependencies**: By encapsulating dependencies within [[Container]], this allow applications to run consistently regardless of infrastructure.
- **Optimizing resource**: [[Container]] is light-weight and portable, they require minimal resource to operate. This is perfect for cost-effective deployment and scaling.
### Don'ts
- **Simple application**: Using containerization for simple apps is just overkill, straight deployment might be better regarding management complexity and speed.
- **Legacy system adoption**: "If it works, leave it be", refactor a working legacy system to newer technology might contain potential risks and tradeoffs that need intense consideration.
- **Fear of missing out**: "Everyone is using containerization so we need to use it too", this a false understanding of containerization usage. It is true that it provides many benefits to the development and deployment process, but when deciding to use a technology, you need to consider many aspects of a bigger picture. Everything has a tradeoff and containerization is not doing everything by itself, it need to cooperate with its surrounding.
## Containerization Tools
- [[Docker]]: 
- [[Podman]]:
- [[Kubernetes]]
- [[Skopeo]]:
- [[Buildah]]: 
## Best Practices
[Containerization best practices - Simform](https://www.simform.com/blog/containerization-best-practices)
[Containerization best practices - Dev Communities](https://dev.to/aws-builders/the-art-of-creating-container-images-and-best-practices-3p9d)
%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Containerization/Containerization.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Containerization/Containerization.md "git-hub-copy-note")</span>

<span class="git-footer">Was this page helpful?
[👍](https://tally.so/r/mOaxjk?rating=Yes&url=https://dataengineering.wiki/Concepts/Containerization/Containerization) or [👎](https://tally.so/r/mOaxjk?rating=No&url=https://dataengineering.wiki/Concepts/Containerization/Containerization)</span>
