---
title: Importing Projects
---

## Upload From Your Computer

With your desired StackBlitz project open, simply drag and drop any files and folder you want to import:

<img src="https://i.imgur.com/7F9r1xw.gif" />

## Import from Github

You can run any public repo on Github by providing the username + repo name like so:

`stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}`

And you can also optionally specify a branch, tag, or commit:

`.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}`

### Automatically stays in sync with your repo
Whenever you push commits to Github, the corresponding StackBlitz project automatically updates with the latest changes — ensuring Github remains your code’s source of truth.

### Supported project types

We currently support projects using `@angular/cli` and `create-react-app`. Support for Ionic, Vue, and custom webpack configs is coming soon!

## StackBlitz API

You can create new StackBlitz projects programmatically from any data source using our [POST API](#post-api) or the [openProject](#sdk-openproject-project-opts) & [embedProject](#sdk-embedproject-elementorid-project-embedopts) methods in our [Javascript SDK](#javascript-sdk).