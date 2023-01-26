# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process.

## Before Contributing

Before sending your pull requests, make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to reach out.

## Contribution

Try as much as possible to place files in the relevant folders.

### Steps to Contribute

Following are the steps to guide you:

- Step 1: **Fork the repo** and Go to your Git terminal and clone your own fork of the repo to your machine.
- Step 2: Add a upstream link to main branch in your cloned repo
  ```
  git remote add upstream https://github.com/IEdiong/roxy-v1.git
  ```
- Step 3: Keep your cloned repo upto date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
  ```
  git pull upstream main https://github.com/IEdiong/roxy-v1.git
  ```
- Step 4: Create your feature branch (This is a necessary step, so don't skip it)
  ```
  git checkout -b <feature-name>
  ```
- Step 5: Commit all the changes (Write commit message as "Small Message")
  ```
  git commit -m "Write a meaningfull but small commit message"
  ```
- Step 6: Push the changes for review
  ```
  git push origin <branch-name>
  ```
- Step 7: Create a PR on Github. (Don't just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing)

### Note:

> - Do not edit/delete someone else's script in this repository. You can only insert new files/folder in this repository.

> - Give a meaningful name to whatever file or folder you are adding.

## Need more help?

You can refer to the following articles on basics of Git and Github and also contact me, in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)
