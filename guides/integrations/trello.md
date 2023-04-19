---
sidebar_label: Trello
displayed_sidebar: guides
---

# Trello

This guide will take you through how to connect your customer data living in [Trello][trello] with Openline customerOS. Openline will sync all of the selected data using a Trello API key, which we will run through generating and providing to customerOS in this guide.
 
:::info 

To create an API key in Trello, you'll need Trello admin privileges. 

:::

### Guide to linking your Trello account

1. As a Trello Admin log into your account to generate a Trello API key and API token for each Trello workspace you want to connect to customerOS. You can do this by going to [Trello's API management page][trello-api-key-management] to create both of these.

2. Trello manages it's API keys via `Power Ups`, so you need to create an Openline Power Up first:

![guide](@site/static/img/guides/trello/trello-create-powerup.png)

3. Name your Power Up something memorable (we like Openline), you will need one Power Up per workspace you want to connect to customerOS.

![guide](@site/static/img/guides/trello/trello-link-powerup.png)

4. Next you need to create an API key:

![guide](@site/static/img/guides/trello/trello-generate-key.png)

5. However, as well as this key you have just generated, you also need to generate an API token to connect Trello to customerOS. To do this, click on the `Token` button:

![guide](@site/static/img/guides/trello/trello-api-key.png)

6. You will need to authorize the token, so click on the `Allow` button, and copy the token you are provided.

7. Log into your [Openline account][openline], click on the `Settings` button in the sidebar and paste your Trello API key and token into the `Trello API token` fields.  Press save.

8. Once configured, Openline can also continuously sync your data from Trello to customerOS, from 1 to 24 hours from Trello into customerOS to make sure you always are up to date. If you need to add more than one Trello workspace to customerOS, [get in touch][help] with the team so we can help you out.

<!--- TODO: update with sync details ---->

### What happens to this data?

- Openline collects your Trello data and stores this within your customer graph for easy manipulation into useful aggregations and views
  - This data includes contacts, interactions, companies, deals and more!
- Once stored in customerOS, this data is linked to all other customer data from other systems and inputs
  - This allows you to see the full picture about your customer without having to load data from one place to another!

<!--- References ---->

[trello]: https://trello.com/
[trello-api-key-management]: https://trello.com/app-key/
[openline]: https://spaces.openline.ai
[help]: mailto:help@openline.ai
