---
sidebar_label: Smartsheet
displayed_sidebar: guides
---

# Smartsheet

This guide will take you through how to connect your customer data living in [Smartsheet][smartsheet] with Openline customerOS. Openline will sync all of the selected data using a Smartsheet API key, which we will run through generating and providing to customerOS in this guide.
 
:::info 

To create an API key in Smartsheet, you'll need Smartsheet admin privileges. 

:::

### Guide to linking your Smartsheet account

1. As a Smartsheet Admin log into your account to generate a Smartsheet API key. You can do this by following [Smartsheet's guide][smartsheet-api-guide] to create an API key.
3. You then need to select which speadsheet you want to sync data from, and get the ID of the spreadsheet. you can do this by following [Smartsheet's guide][smartsheet-id-guide] to get the spreadsheet ID (found under `File > Properties` in the spreadsheet you want to sync data from).
**Note:** Currently you can only sync data from one spreadsheet at a time, if you want to sync more than one let us know!
4. Log into you [Openline account][openline], click on the `Settings` button and paste your Smartsheet API key into the `Smartsheet API key` field.  Press save.

![guide-small](@site/static/img/guides/smartsheet/smartsheet-settings.png)

5. Once configured, Openline can also continuously sync your data from Smartsheet to customerOS, from 1 to 24 hours from Smartsheet into customerOS to make sure you always are up to date.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects your Smartsheet data and stores this within your customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[smartsheet]: https://www.smartsheet.com/
[smartsheet-api-guide]: https://help.smartsheet.com/articles/2482389-generate-API-key
[smartsheet-id-guide]: https://help.smartsheet.com/articles/2482711-get-smartsheet-ids
[openline]: https://app.openline.ai

