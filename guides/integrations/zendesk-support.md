---
sidebar_label: Zendesk Support
displayed_sidebar: guides
---

# Zendesk Support

This guide will take you through how to connect your customer data living in [Zendesk Support][zendesk] with Openline customerOS. Openline will load all of the selected data using a Zendesk API key, which we will run through generating and providing to customerOS in this guide.
 
:::info 

To create an API key in Zendesk, you'll need Zendesk admin privileges and make sure that your API Access tokens are enabled. 

:::

### Guide to linking your Zendesk account

1. As a Zendesk Admin locate your Zendesk subdomain found in your account URL. 
For example, if your account URL is `https://openline.zendesk.com/`, then `openline` is your subdomain.
2. Next we need to generate a Zendesk API key. You can do this by following [Zendesk's guide][zendesk-api-guide] to create an API key.
3. Once you have your Zendesk subdomain, the email address of the account used to generate the API key and the API key itself, you're good to go!
4. Log into you [Openline account][openline], click on the `Settings` button and paste your Zendesk API key into the `Zendesk API key` field.  Press save.

![guide-small](@site/static/img/guides/zendesk/openline-settings.png)

5. Once configured, Openline can also continuously sync your data from Zendesk to customerOS, from 1 to 24 hours from Zendesk into customerOS to make sure you always are up to date.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects your Zendesk data and stores this within your customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[zendesk]: https://www.zendesk.co.uk/service/
[zendesk-api-guide]: https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token
[openline]: https://spaces.openline.ai