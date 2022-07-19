---
Aliases: []
Tags: [seedling]
publish: false
---

With a full load, the entire dataset is dumped, or loaded, and is then completely replaced (i.e., deleted and replaced) with the new, updated dataset. No additional information, such as timestamps, is required.

Also known as "destructive load".

## Full Load Advantages

- Easy to build and maintain
	- It's a straightforward process that simply deletes all of the old datasets and are replaced with entirely new, updated datasets.
- Low Maintenance
	- A full load won't require you to manage the keys and even if some data is up to date or not, it won't matter since **all** the data will be updated.

## Full Load Disadvantages

- Resource and time inefficient
	- Deciding to do a full load on larger datasets will take a great amount of time and other server resources. Ideally, all the data loads are performed overnight with the exception of completing them before users can see the data the next day. There might not be enough time during the overnight window for the full load to complete.
- Preserving history
	- When dealing with a OLTP source that is not designed to keep history, a full load will remove history from the destination as well, since a full load removes all the records first. 
- Unsustainable
	- It can be an inconvenience to load data when only a handful of records need to be updated but millions of records have to be loaded due to the nature of a full load having to update **all** the records each time.

%% wiki footer: Please don't edit anything below this line %%

## This note in GitHub

<span class="git-footer">[Edit In GitHub](https://github.dev/data-engineering-community/data-engineering-wiki/blob/main/Concepts/Full%20Load.md "git-hub-edit-note") | [Copy this note](https://raw.githubusercontent.com/data-engineering-community/data-engineering-wiki/main/Concepts/Full%20Load.md "git-hub-copy-note") </span>
