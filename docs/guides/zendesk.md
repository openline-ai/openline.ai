---
sidebar_label: Zendesk Support
displayed_sidebar: guides
---

# Zendesk Support

This guide will take you through how to connect your customer data living in [Zendesk Support][zendesk] with Openline customerOS. Openline will load all of the selected data using a Zendesk API key, which we will run through generating and providing to customerOS in this guide.
 
:::danger proceed with care

All standard security protocols should be followed when sharing your Zendesk API key with others. Never share it without permission from your company's Zendesk administrator.

:::

### Connecting your Zendesk account

1. Log into your Zendesk account that has Zendesk Admin permissions and make sure that API Access tokens are enabled (if you don't have this find out who does and ask them to help nicely!)
2. Once logged in, locate your Zendesk subdomain found in your account URL. 
For example, if your account URL is `https://openline.zendesk.com/`, then `openline` is your subdomain.
3. Next we need to generate a Zendesk API key. You can do this by following [Zendesk's guide][zendesk-api-guide] to create an API Key.
4. Once you have your Zendesk subdomain, the email address of the account used to generate the API Key and the API Key itself, share this info via a secure method (we recommend a Single Use sharing website like [One Time Secret][onetimesecret] with confirmation that the share has been consumed by the other party) with the Openline team in order for us to configure customerOS for you!
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
[onetimesecret]: https://onetimesecret.com/
