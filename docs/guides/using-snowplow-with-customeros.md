---
sidebar_position: 2
sidebar_label: Using Snowplow with customerOS
displayed_sidebar: guides
---

# Integrating Snowplow trackers

:::caution work in progress

We're busy building, and this is one of those things that is a work in progress!

:::

This guide will take you through how to collect customer data from your website using some tools from another great open source project [Snowplow][snowplow], specifically their web behaviour trackers. Openline uses these trackers to ingest clickstream data (such as page opens, clicks and other events) such that you can actively and securely load customer interaction data into customerOS.

customerOS should be compatible with all 3 types of Snowplow trackers:
- Browser tracker v3 ✅
- Javascript Tracker (v2 ❓ and v3 ❓)
- Node.js Tracker v3 ❓

(Emoji indicates whether compatibility has been established)

## Snowplow Browser Tracker v3 on React

To get started, follow the instructions [here][snowplow-browser-tracker] to install the browser tracker onto your React application.

Install the ```@snowplow/browser-tracker``` package using your preferred package manager:

```terminal
npm install @snowplow/browser-tracker
```
```terminal
yarn add @snowplow/browser-tracker
```
```terminal
pnpm add @snowplow/browser-tracker
```

Once installed, add the component to your code, Openline's implementation to it's React-based Docusaurus site can be found [here][openline-snowplow] and as follows:

```javascript
newTracker(openline-help-widget-dev, https://lzdyxrxc-uat-ninja.openline.ai, {
    appId: openline-help-widget,
    discoverRootDomain: true,
    cookieSecure: true,
    cookieSameSite: "None",
    eventMethod: "post",
    postPath: "/ai.openline.sp/tp2",
    platform: "web",
    bufferSize: 1,
    contexts: {
        webPage: true
    },
});
```

<!--- TODO Update here with code for inserting on React App ---->

## Cloud Deployment

Of the fields above, the following settings should be created by Openline (this will be self-managed soon via Openline Settings).

- trackerId
  - e.g. openline-website-tracker-production-9h8yztcjr4kvitsu
- appId
  - e.g. openline-website-f6k4o8zqz7b1lpas
- Url
  - https://events.openline.ai

### Proxying

:::caution proxying

We recommend using a proxy to prevent events getting blocked by ad-blockers and browsers.

:::

<!--- TODO Update here with proxy info (Vercel proxying) ---->

## Self-hosted

If you are self-hosting customerOS, the following should be updated specfically to your deployment:

- trackerId
  - Name of the tracker
- appId
  - Name of the application you are tracking users on
- Url
  - The root URL to send your user events to
- postPath
  - The path of the URL to send your user events to

<!--- TODO Update here with info on words not to include in Url or postPath ---->

# Now we're collecting, now what?

What are we collecting by default

- page views
- clicks

What else can we collect?

- custom events

What happens to this data?

- Atomic events
  - Sessions, pages, visitors(?)
- Modelled tables
  - We process this high fidelity data and collate it into more usable tables that are queryable via customerOS's GraphQL

What can I do with this data?

- GraphQL
- Openline Contacts
  - Enriched application user data visible alongside your contact data
- Openline Oasis
  - Enriched application user data visible alongside your conversations
- Openline Analytics (soon)


<!--- References ---->
[release]: https://github.com/openline-ai/openline-customer-os/tags
[snowplow]: https://github.com/snowplow/snowplow
[snowplow-browser-tracker]: https://docs.snowplow.io/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/
[openline-snowplow]: https://github.com/openline-ai/openline.ai/blob/otter/src/components/Tracker/index.tsx