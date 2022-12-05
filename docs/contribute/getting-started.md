---
id: getting-started-code
title: Getting Started
displayed_sidebar: contribute
---

This guide will get you up and running with a local Openline development environment in **less than 5 minutes**.

## The Openline CLI

The easiest way to get started is by downloading and installing the Openline Command Line Interface (CLI).  The Openline CLI is an open source NodeJS app that makes it easy to setup and manage your development environment directly from the terminal.  It's an essential part of developing on Openline.

### What you'll need

- [Node.js][node] version 16.14 or above

Note:  The Openline CLI is currently supports macOS and Debian/Ubuntu distros.

### Install the Openline CLI

```shell
npm i openline -g
```

You can check that the Openline CLI is installed by running:

```shell
openline --version
```

If everything has been installed correctly, you'll see an output that looks like `openline/x.y.z`

## Starting up Openline customerOS on your local machine

Open your terminal and enter:

```shell
openline dev start
```

This will spin up the customerOS dev server locally.

### Health check

To verify that everything has been installed correctly and customerOS is ready to accept requests, enter the command:

```shell
openline dev ping
```

### Start building!

That's it, you are ready to start building with Openline!

Next checkout

- our [github worflow][github]
- the [CLI quick reference][cli-guide] to check out all the commands



<!---References---->

[api-reference]: <docs/reference>
[cli-guide]: <guides/cli-overview>
[github]: <github-workflow>
[node]: https://nodejs.org/en/download/
