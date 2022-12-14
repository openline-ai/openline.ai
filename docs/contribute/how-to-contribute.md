---
id: how-to-contribute
title: How to contribute
displayed_sidebar: contribute
---

Welcome to Openline. This document is a guide for how to contribute to the code base. Please read and observe our [Code of Conduct][code_of_conduct].

Browse the [open issues][open_issues] and file new ones, all feedback welcome!

## Before you get started

Follow the [getting started guide][getting_started] to install, setup and get going.

## Community Expectations

Openline is a community project. Please review the [Community Expectations][expectations] for an understanding of code and review expectations.

## Your First Contribution

We will help you understand the organization of the Openline project and direct you to the best places to get started.

You'll be able to pick up issues, write code to fix them, and get your work reviewed and merged.

If you have questions about the development process, join our [community slack][slack].  The Openline team responds regularly and will usually answer quickly.

## Find Something to Work On

Help is always welcome! For example, [documentation] can always use improvement.

If you do not know what to start on, look at the [open issues][open_issues] or ask in our [community slack][slack] to see who is looking for help or what's being worked on.

### Non-Code Contributions

Those interested in contributing without writing code may also find ideas in the Non-Code Contributions Guide.

### Code Contributions

There are always clarifications to code, or renaming of functions/variables. There's always a need for more test coverage.

You get the idea * if you ever see something you fix or improve, own it. The community appreciates it.

### Find a Good First Topic

There are [multiple repositories][repos] in the Openline organization.

Taking [openline/openline-customer-os](https://github.com/openline-ai/openline-customer-os) as an example, you can head to the [good first issue](https://github.com/openline-ai/openline-customer-os/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels for issues that should not need in-depth knowledge of the system.

The `good first issue` label shows that members have committed to providing extra help for new contributors.

Please note that while several of the repositories in the Openline community have `good first issue` labels already, they are still being applied throughout the community.

Another good approach is to find a documentation improvement, such as a missing/broken link, which will give you exposure to the code submission/review process without the added complication of technical depth.

Please see Contributing for the workflow. When you take on an issue, you can assign it to yourself.

### It's Easy to File an Issue

Not ready to contribute code, but see something that needs work?

The community encourages everyone to contribute code, but we also appreciate when someone reports an issue (AKA a problem).

Raise issues under the appropriate Openline sub-repository. 

Adhere to the prompted guidelines while opening an issue and fill out as much as you can. This will help the community fix it.

## Contributing

Openline is an open source project, but many of the people working on it do so as their day job. To avoid forcing people to be "at work" effectively 24/7, we want to establish some semi-formal protocols around development. Hopefully, these guidelines make things go more smoothly. If you find that this is not the case, please complain loudly.

As a potential contributor, your changes and ideas are welcome at any hour of the day or night, weekdays, weekends, and holidays. Please never hesitate to ask a question or send a pull request.

Beginners can find focused information below in Open a Pull Request and Code Review.

## GitHub workflow

To check out the code to work on, please refer to the GitHub Workflow Guide.

## Open a Pull Request

Pull requests (PR) follow the standard [Github pull request](https://help.github.com/articles/about-pull-requests/) process. We need to build our integration tests there as several components that need building first.

## Code Review

For a brief description of the importance of code review, please read Code Review.  

There are two aspects of code review: giving and receiving.
To make it easier for your PR to receive reviews, consider the reviewers will need you to:

* follow the project coding conventions
* write [good commit messages](https://chris.beams.io/posts/git-commit/)
* break large changes into a logical series of smaller patches which individually make easily understandable changes, and in aggregate solve a broader issue

Reviewers are highly encouraged the people giving the review to revisit the [Code of Conduct][code_of_conduct] and community expectations and must go above and beyond to promote a collaborative, respectful community.

When reviewing a pull request from others [The Gentle Art of Patch Review](http://sage.thesharps.us/2014/09/01/the-gentle-art-of-patch-review/) suggests an iterative series of focuses which leads new contributors to positive collaboration without inundating them initially with nuances:

* Is the idea behind the contribution sound?
* Is the contribution architected correctly?
* Is the contribution polished?

Note: if your pull request isn't getting enough attention, you can use the [community slack][slack] to get help to find reviewers.

## Testing

Testing is the responsibility of all contributors, run unit tests before opening a pull request, and an perform an end to end test run before requesting us to merge a pull request.

## Documentation

If you pull request requires and changes to the documentation open a pull request for the docs.

## Community

If you haven't noticed by now, we are building a lively, and friendly open-source community.

We depend on new people becoming members and regular code contributors, so we would like you to come join us!

<!--- References -->

[code_of_conduct]: <code-of-conduct>
[communication_discord]: <./>
[expectations]: <./>
[getting_started]: <./>
[open_issues]: https://github.com/openline-ai/openline-customer-os/issues
[slack]: https://join.slack.com/t/openline-ai/shared_invite/zt-1i6umaw6c-aaap4VwvGHeoJ1zz~ngCKQ
[repos]: https://github.com/openline-ai/
