---
sidebar_label: Hubspot
displayed_sidebar: guides
---

# Hubspot

This guide will take you through how to connect your customer data living in [Hubspot][hubspot] with Openline customerOS. Openline will load all of the selected data using a Hubspot Private App, which is Hubspot's replacement for providing an API key.
 
:::danger proceed with care

All standard security protocols should be followed when sharing your Hubspot Private App key with others. Never share it without permission from your company's Hubspot administrator.

Always follow the principles of least possible permission. Only create Private Apps with the minimum permissions for them to do what you need.

:::

### Guide to linking your Hubspot account

1. Log into your Hubspot account that has Hubspot Admin permissions (if you don't have this find out who does and ask them to help nicely!)
2. Click on `Profile & Preferences` found under the top right user menu (make sure the account you want to link is selected first)

![hubspot-account](@site/static/img/guides/hubspot/hubspot-account.png)

3. Select `Private Apps` in the left hand menu under Integrations

![guide](@site/static/img/guides/hubspot/hubspot-preferences.png)

4. Select `Create a Private App` to create an app to link to Openline

![guide](@site/static/img/guides/hubspot/hubspot-private-apps.png)

5. Setup the Private App as follows:

![guide](@site/static/img/guides/hubspot/hubspot-basic-info.png)

![guide](@site/static/img/guides/hubspot/hubspot-scopes.png)

![guide](@site/static/img/guides/hubspot/hubspot-approval.png)

:::info Minimum permissions

Openline only requires read permissions as we don't push data back into Hubspot, so you can rest assured your data will remain safe and sound within Hubspot.

:::

Scopes:
- `crm.objects.contacts.read`
- `crm.objects.companies.read`
- `crm.objects.deals.read`
- `crm.objects.owners.read`
- `sales-email-read`
- `files`
- `files.ui_hidden.read`

6. Once the Private App has been created, share the key via a secure method (we recommend a Single Use sharing website like [One Time Secret][onetimesecret] with confirmation that the share has been consumed by the other party) with the Openline team in order for us to configure customerOS for you!

![guide](@site/static/img/guides/hubspot/hubspot-key.png)

7. Once configured, Openline can also continuously sync your data from Hubspot to customerOS, from 1 to 24 hours from Hubspot into customerOS to make sure you always are up to date.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects the raw Hubspot data and stores this within its customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[hubspot]: https://www.hubspot.com/
[onetimesecret]: https://onetimesecret.com/
