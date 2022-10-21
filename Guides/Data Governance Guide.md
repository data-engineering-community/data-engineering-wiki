---
Aliases: []
Tags: [incubating]
publish: true
---

The emergence of [[data governance]] directly correlated with massively increased quantities of data that is now considered standard. Only a few decades ago, many companies managed a quantity of data that was reasonable to organize by a database administrator. But with the increased popularity of using different data sources and streaming data as well as the sheer quantity of data that is available nowadays, it is dangerous to leave data to a single person and expect them to properly handle everything.

Data governance is a philosophy of data management that focuses on establishing responsibility for data throughout the complete lifecycle of data. The important part here is that data governance is unfortunately not a "set it and forget it" system for managing data, at least during the beginning stages of implementation. Contrary to most of the philosophical cores of data engineering, completely automating data governance is not recommended. A quality data governance framework involves a system of rules, processes, procedures, and enforcement strategies to ensure that data is properly accounted for.

Different kinds of data may require fine-tuned guidelines. For example, how one would manage HIPAA compliant data is very different than how one would handle a spreadsheet keeping track of lunch expenses for a team bowling party. Additionally, different teams and sub-organizations may have different cultures that necessitate the tweaking of any framework to ensure a customized fit. These challenges necessitate some manual guidance and buy-in from policymakers at the top of an organization. Without actual enforcement, data governance tends to be difficult to implement due to the natural high friction it tends to create.

Data use and management are particularly difficult when coordinating within and between different units to allow for better delivery on the business side and more accountability on the security side. There are typically multiple steps required to implement data governance effectively. A common five-pronged approach involves the following stages: inventory/mapping, planning, education, implementation, and enforcement.

Whenever data governance is mentioned, a key piece that is misunderstood is what engaging in data governance entails. Even logging onto a computer or sending a work email is technically an example of data governance. The key is identifying what the end state of data governance looks like for a particular organization and then setting a formal practice for managing organizational information with consistency.

## Inventory

When compiling an inventory of assets, there are two pieces to keep in mind. A standard data inventory tends to be a completely documented repository of information resources that are owned by an organization, including the associated metadata. A data inventory is focused on understanding data and identifying risks that are posed due to any missing/broken dependencies or gaps. When tailoring an inventory for data governance, it can be helpful to have explicit data mappings associated with databases and data owners/subject matter experts. This allows for an open communication line between policymakers and gatekeepers of important data sets.

There are many use cases where data governance is being embraced by organizations of all different kinds. Larger companies often have different teams with completely different views on data. The analytics team might view it as a secret weapon while the security team might view it as a liability. This can lead to conflicts when it comes to how to best manage and assign ownership of data. Government institutions on the other hand traditionally deal with a high level of employee turnover, leading to entire databases and key institutional knowledge being lost in the offboarding process.

Detailing, documenting, and accounting for risks and opportunities is a key piece of data inventory when preparing it for data governance.

## Planning

Once the data assets and personnel are identified for an organization, building trust with database owners, subject matter experts, and policymakers within the organization is key. Since this is the planning stage it is difficult to actually enforce data governance, and as such getting buy-in at this stage is crucial.

A comprehensive plan requires interviews and meetings with key stakeholders and database owners/subject matter experts to understand what the needs and wants of all the sub-organizations require and how to reconcile these demands.

Specific processes that need to be ironed out should be included in this phase as well. For example, for a State level organization, data trusts tend to be very important. IT teams like to consolidate databases and implement uniform security.

## Education

In order for people in organizations to fully embrace data governance, a training and education program is necessary. Typically classroom-style lectures tend to not be effective. Instead, convincing business owners how data governance can bring value to the company and security admins that data governance increases the security and stability of the work.

## Implementation

Actually implementing the process tends to be more of a practice of execution. As long as there's been a quality plan and strategy produced and a training program that has started tackling some of the silos that have been built, progress will eventually be made. The biggest indicator of success for the implementation stage will be how interested and engaged key stakeholders are.

The main processes for data governance are the query engine, data catalog, and policy engine. Policymakers create a policy that is applied to the data catalog which is consumed through the query engine.

## Enforcement

Enforcement is relatively simple if the infrastructure for the implementation is thorough. By applying the correct policies that restrict user roles, minimal enforcement is necessary. The main enforcement that is required during the process is making sure subject matter experts, policymakers, and stakeholders are all engaged. This is largely the job of Chief policymakers to create a plan of accountability.

## Summary

Data governance is the practice of making data more of an asset rather than a liability. The ability to know and be able to search through all data assets an organization owns is transformative.

Data governance in modern architecture is centered around policymakers, data consumers, and subject matter experts. Subject matter experts own data resources, which must be mapped and consolidated under a data catalog with the associated metadata.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Tutorials/Data%20Governance%20Guide.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Tutorials/Data%20Governance%20Guide.md "git-hub-copy-note") </span>
