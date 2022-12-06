---
id: github-workflow
title: Github workflow
displayed_sidebar: contribute
---

## Initialize local project repo

To start development on an Openline project, the first thing you need to do is setup and initialize your local project repo.  This consists of three steps:

1. Fork the Openline project repo to your personal account
2. Clone your fork to your local environment
3. Add the Openline project as upstream repository

:::note
These three steps only need to be followed the first time you fork an Openline project.
:::
 
### Fork the repo on GitHub to your personal account

First, go to the GitHub repo of the Openline project you'd like to work on.  The Openline CLI makes this super easy.  In your terminal, simply enter

```shell
openline repo <openline-project>
```

This will return the repo URL and attempt to open your web browser directing you to the specified GitHub repo.

Once there, click on the `Fork` button in the upper right.  If you are presented with a list of organizations, be sure to click on your personal GitHub username.  This will create a copy of the Openline codebase in your personal GitHub account.
### Clone your fork

Next, it's time to create a local copy of forked repo on your local machine.  To do this, enter

```shell
git clone https://github.com/<your-github-username>/<forked-project-name>
```

### Add the Openline project repo as upstream repository

Navigate into your local project directory.

```shell
cd <forked-project-name>
```

And then run the following command

```shell
git remote add upstream https://github.com/openline-ai/<project-name>
```

The GitHub URL in the command above should be the same URL returned in the output of step 1.

## Writing code

Now comes the work loop that you'll use when working with forked projects. This consists of 5 steps:

1. Sync your local forked repo with the original project
2. Create a new branch
3. Write code
4. Push the changes to your fork
5. Submit a pull request to the Openline project

### Sync local forked repo with original project

Before starting your work, always make sure the master branch of your forked repo is synchronized with the `otter` branch of the Openline repo.  To do this, run the following commands:

```shell
cd <forked-project-name>
git fetch upstream
git merge upstream/master
git push origin master
```

### Create a new branch

New development should always occur on a new branch.  To create a branch, run:

```shell
git checkout -b <my-branch>
```

where "my-branch" is the name of the branch you would like to create.  This command automatically creates the branch and switches to it.  **Make sure the branch name is unique and does not already exist**.

### Write code

Now the fun part!  Open up your favorite IDE and start coding.  When you're ready to save your local changes to your forked repo, use the command

```shell
git commit -a -m "Description of my changes"
```
### Push the changes to your fork

Often times, you'll find that while you were working on your code changes the original project repo has changed as other contributors are actively contributing code.  So before you can push the changes to your forked repo, you'll want to make sure the code you wrote is compatible with the latest verion of the original project.  To do that, run:

```shell
git checkout <my-branch>
git pull --rebase upstream otter
```

This pulls in all the changes from the original project and replays your changes on top.  **This can result in conflicts--this is normal!** Fixing conflicts are part of the process.

### Submit a pull request to the Openline project

After fixing any conflicts, you're ready to publish your code to your forked repository.  Since Openline pull requests are initiated from your forked repository, you'll run:

```shell
git checkout <my-branch>
git push origin <my-branch> -f
```

Now you're ready to do to the original Openline project on GitHub (URL from step 1), and click on "Pull Request".  Make sure you shoose upstream repo `otter` as the destination branch and your forked repo `my-branch` as the source branch.

Submit the pull request.

Generally we review pull requests within 24 hours.  If we have any questions or comments, we'll add them directly to the pull request, which will trigger a notification to you.  Once accepted, the Openline team will merge in your changes.

Congrats, you're officially an Openline contributor!