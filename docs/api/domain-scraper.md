---
id: domain-scraper
title: Domain Scraper API
displayed_sidebar: api
order: 3
---

# Openline Domain Scraper API

:::caution work in progress

We're busy building, and this is one of those things that is a work in progress!

:::


```bash
curl \
-X POST \
-H "X-OPENLINE-TENANT-KEY: your-api-key" \
-H "Content-Type: application/json" \
-d '{"scrape":"WEBSITE-TO-BE-SCRAPED"}' \
https://api.openline.ai/scrape
```

will return:

```json
{
    "companyName":"Openline",
    "website":"openline.ai",
    "market":"XXX",
    "industry":"YYY",
    "industryGroup":"ZZZ",
    "subIndustry":"AAA",
    "targetAudience":"BBB",
    "valueProposition":"CCC"
}
```