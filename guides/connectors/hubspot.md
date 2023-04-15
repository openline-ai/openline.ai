---
sidebar_label: Hubspot
displayed_sidebar: guides
---

# Hubspot

This guide will walk you through how to sync your [Hubspot][hubspot] data with Openline customerOS. 

### Connecting your Hubspot account

Openline connects to Hubspot via a Hubspot Private App.  

:::info 

To create a private app in Hubspot, you'll need Hubspot admin privileges. 

:::

1.  As the Hubspot admin, log into your [Hubspot][login] account and click on `Profile & Preferences` found under the top right user menu

![guide-small](@site/static/img/guides/hubspot/hubspot-account.png)

2. Click on `Private Apps` in the left hand menu under Integrations

![guide](@site/static/img/guides/hubspot/hubspot-preferences.png)

3. Click on `Create a Private App` to create a new app

![guide](@site/static/img/guides/hubspot/hubspot-private-apps.png)

4. Setup the Private App as follows:

- Name: openline-connector
- Description:  This private app is used to sync data with Openline customerOS

![guide](@site/static/img/guides/hubspot/hubspot-basic-info.png)

- Scopes:
  - `crm.objects.contacts.read`
  - `crm.objects.companies.read`
  - `crm.objects.deals.read`
  - `crm.objects.owners.read`
  - `sales-email-read`
  - `files`
  - `files.ui_hidden.read`

![guide](@site/static/img/guides/hubspot/hubspot-scopes.png)

:::info

Openline only requires read permissions as we don't push data back into Hubspot, so you can rest assured your data will remain unaltered within Hubspot.

:::

![guide](@site/static/img/guides/hubspot/hubspot-approval.png)

5. Once the Private App has been created, copy the app token.

![guide](@site/static/img/guides/hubspot/hubspot-key.png)

6. Log into your [Openline account][openline], click on the `Settings` button and paste your Hubspot app token into the `Hubspot Private App token` field.  Press save.

![guide-small](@site/static/img/guides/hubspot/openline-settings.png)

7. That's it!  Openline will now continuously monitor your Hubspot account for data changes and automatically sync them to customerOS.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects your Hubspot data and stores this within your customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[hubspot]: https://www.hubspot.com/
[login]: https://app.hubspot.com/login
[openline]: https://spaces.openline.ai/
