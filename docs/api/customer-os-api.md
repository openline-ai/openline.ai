---
id: customer-os-api
title: CustomerOS API
displayed_sidebar: api
order: 2
---

# CustomerOS APIs

:::caution work in progress

We're busy building, and this is one of those things that is a work in progress!

:::

## Admin

### Get all users

With information stored against that user

```bash
curl \
-X POST \
-H "X-OPENLINE-TENANT-KEY: your-api-key" \
-H "Content-Type: application/json" \
-d '{"query": "query { users { totalPages totalElements content { id firstName lastName calendars { link } jobRoles{ jobTitle description } emails { email } createdAt }}} "}' \
https://api.openline.ai/query
```

## Contacts

### Get all contacts

With email validation

```bash
curl \
-X POST \
-H "X-OPENLINE-TENANT-KEY: your-api-key" \
-H "Content-Type: application/json" \
-d '{"query":"query { contact(id: \"CONTACT-ID-HERE\") { id emails{id emailValidationDetails {validated isReachable isValidSyntax canConnectSmtp acceptsMail hasFullInbox isCatchAll isDeliverable isDisabled}}} "}' \
https://api.openline.ai/query
```

### Create contact with email validation

```bash
curl \
-X POST \
-H "X-OPENLINE-TENANT-KEY: your-api-key" \
-H "Content-Type: application/json" \
-d '{"query": "mutation { customer_contact_Create(input: {prefix: \"Ms.\", firstName: \"X\", lastName: \"Y\", appSource:\"YOUR-APP\", email: {primary:true, email:\"someone@somedomain.com\", label: WORK, appSource:\"YOUR-APP\"}}) { id, email {id}}}"}' \
https://api.openline.ai/query
```