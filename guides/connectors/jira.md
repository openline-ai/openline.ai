---
sidebar_label: Jira
displayed_sidebar: guides
---

# Jira

This guide will take you through how to connect your customer data living in [Jira][jira] with Openline customerOS. Openline will sync all of the selected data using a Jira API key, which we will run through generating and providing to customerOS in this guide.
 
:::info 

To create an API key in Jira, you'll need Jira admin privileges. 

:::

### Guide to linking your Jira account

1. As a Jira Admin log into your account to generate a Jira API key. You can do this by following [Jira's guide][jira-api-guide] to create an API key. You should note the domain of your Jira Cloud instance, as this will be used in the next step.

2. Log into your [Openline account][openline], click on the `Settings` button in the sidebar and paste your Jira API key into the `Jira API key` field along with the email of the user you used to generate the API key and the domain of your Jira Cloud account.  Press save.

3. Once configured, Openline can also continuously sync your data from Jira to customerOS, from 1 to 24 hours from Jira into customerOS to make sure you always are up to date.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects your Jira data and stores this within your customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[jira]: https://www.atlassian.com/software/jira
[jira-api-guide]: https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/
[openline]: https://spaces.openline.ai

