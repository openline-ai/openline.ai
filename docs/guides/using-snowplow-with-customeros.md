---
sidebar_position: 2
sidebar_label: Using Snowplow with customerOS
displayed_sidebar: guides
---

# Integrating Snowplow trackers

:::caution work in progress

We're busy building, and this is one of those things that is a work in progress!

:::

This guide will take you through how to collect customer data from your website using some tools from another great open source project [Snowplow][snowplow], specifically their web behaviour trackers. Openline can use these trackers to ingest clickstream data (such as page opens, clicks and other events) such that you can actively and securely load customer interaction data into customerOS.

Openline's customerOS should be compatible with all 3 types of Snowplow trackers:
- Browser tracker v3 ✅
- Javascript Tracker (v2 ❓ and v3 ❓)
- Node.js Tracker v3 ❓

(Emoji indicates whether compatibility has been established)

## Examples
### Snowplow Browser Tracker v3 on React (Docusaurus)

To get started, follow the instructions [here][snowplow-browser-tracker] to install the browser tracker onto your React application.

Install the `@snowplow/browser-tracker` package using your preferred package manager:

```terminal
npm install @snowplow/browser-tracker
```
```terminal
yarn add @snowplow/browser-tracker
```
```terminal
pnpm add @snowplow/browser-tracker
```

Once installed, add the component to your code, Openline's implementation to it's React-based Docusaurus site deployed on Vercel can be found [here][openline-snowplow] and as follows:

### Proxied Tracker with Vercel (Recommended)

:::tip Tip

We recommend using a proxy to prevent events getting blocked by ad-blockers and browsers.

:::

When implementing the `newTracker` function, it's recommended to proxy the domain to your server before sending to the collector. The reason for doing this is browsers and ad-blockers commonly prevent this traffic from being sent to a 3rd party location. To avoid this, we use Vercel Middleware to rewrite the internal URL of the domain and post path to the external URL and post path.

```javascript
newTracker(openline-help-widget-dev, {{internal_domain}}, {
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

In the above example, we use Docusaurus' siteConfig parameters to replace `{{internal_domain}}` with the root domain found at `siteConfig.url` which then takes the postpath and redirects it using the following `vercel.json` file to rewrite it to send it to the correct address from the server, avoiding both ad-blockers and browser blocks. You could also easily just provide a static URL of your website.

```json
{
    "rewrites": [
      {
        "source": "/ai.openline.sp/tp2",
        "destination": "https://lzdyxrxc-uat-ninja.openline.ai/ai.openline.sp/tp2"
      }
    ]
  }
```

What this achieves is all user tracking information will be sent to the Openline Vercel server before being proxied to the final destination outside of the site's root domain.

### Without Proxy (Not Recommended)

If you don't want to proxy via your server and are willing to run the risk of lost data, a basic non-proxied configuration would look like the following:

```javascript
newTracker(openline-help-widget-dev, https://events.openline.ai, {
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

- Openline collects this as atomic events, providing raw data to manipulate into useful aggregations and views
  - This data includes sessions, page views, clicks, visitors and metadata attached to these
- Once the atomic events are collected, customerOS then processes this high fidelity data and collates it into more usable modelled tables that are queryable via customerOS's GraphQL
  - This allows us to connect visitor and user session data to customerOS users

## What can I do with this data?

- Query it via customerOS's GraphQL API
- View in Openline Contacts
  - Enriched application user data visible alongside your contact data
- View in Openline Oasis
  - Enriched application user data visible alongside your conversations
- Openline Analytics (soon)


<!--- References ---->
[release]: https://github.com/openline-ai/openline-customer-os/tags
[snowplow]: https://github.com/snowplow/snowplow
[snowplow-browser-tracker]: https://docs.snowplow.io/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/
[openline-snowplow]: https://github.com/openline-ai/openline.ai/blob/otter/src/components/Tracker/index.tsx