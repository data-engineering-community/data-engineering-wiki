# Contributing Rules

1. Contributions are more than welcome but we ask that you avoid making minor changes unless you are fixing a grammatical issue. If you are editing an existing note then the changes should be significantly different.
2. Limit self-promotion. If you make money from a certain website, app, etc. please refrain from linking it as a source in your note.
3. We're happy for any contribution in any form, but if you're making more than one major change it would be super cool of you to make a separate pull request for each one so that someone can review them more effectively and/or individually.

## Style Guidelines

- **Add [YAML frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) to each note**
  - Every note should contain this at the top of the note.
  - You can use this to specify aliases as well as tags.
  - We currently aren't using any tags but that may change in the future.
- **Use templates when starting notes**
  - You can find templates for the most common types of notes under the templates folder.
  - If you are using Obisdian, you can use the [Templates plugin](https://help.obsidian.md/Plugins/Templates) for easy note creation.
- **Note naming conventions**
  - All note files should use the markdown format and end in the `.md` file extension.
  - File names should be title case and use spaces instead of hypens or plus symbols.

## Contribution Workflow

1.  [**Download the free obsidian desktop app**](https://obsidian.md/) and learn [how to format your notes](https://help.obsidian.md/How+to/Format+your+notes).
2.  [**Fork the repository**](https://guides.github.com/activities/forking/) and clone it locally. Connect your local to the original “upstream” repository by adding it as a remote. Pull in changes from “upstream” often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely. (See more detailed instructions [here](https://help.github.com/articles/syncing-a-fork/).)
3.  [**Create a branch**](https://guides.github.com/introduction/flow/) for your edits.
4.  **Open the repo** in Obsidian.
5.  **Make any changes** and save.
6.  **Push the changes** via git.
7.  **Make a pull request** on GitHub.
8.  **Reference any relevant issues** or supporting documentation in your PR (for example, “Closes #37.”)
9.  **Contribute in the style of the project** to the best of your abilities. This may mean using indents, semi-colons or comments differently than you would in your own repository, but makes it easier for the maintainer to merge, others to understand and maintain in the future.

## Tag glossary

We use tags mostly to indicate the status of a note:

-   #seedling - All new notes get this tag. If you want to contribute, notes with this tag are usually a great place to start! Might need a template applied to it or if it already has it, no placeholders have been filled out.
-   #incubating - Some preliminary work was done, it has a template with placeholders but it was only partially filled out. These notes still have incomplete information and need their placeholders filled out!
-   #evergreen - Notes that have been updated and no longer have placeholders in them. Usually these notes need corrections, updates or additions to existing knowledge. Before adding new content to these notes, please make sure you have read [[#Contributing Rules|how to contribute]].

We also have a #placeholder tag we use to signal the type of information that is missing on a note. Most of them are self-explanatory:

-   #placeholder/title
-   #placeholder/author - Information about the author is missing (can include their name, Discord handle, GitHub username, GitHub sponsors page or buy me a coffee links)
-   #placeholder/description
-   #placeholder/link
-   #placeholder/screenshot
-   #placeholder/tool - Similar to the author tag, any information about a tool

If this is your first pull request, check out [Make a Pull Request](http://makeapullrequest.com/), which [@kentcdodds](https://github.com/kentcdodds) created as a walkthrough video tutorial. You can also practice making a pull request in the [First Contributions](https://github.com/Roshanjossey/first-contributions) repository, created by [@Roshanjossey](https://github.com/Roshanjossey).
