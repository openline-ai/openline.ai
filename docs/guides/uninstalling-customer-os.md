---
sidebar_label: Uninstalling
displayed_sidebar: guides
---

# Uninstalling customerOS

The Openline CLI allows you to uninstall customerOS with three degrees of granularity:

- Uninstall all Openline services
- Uninstall all customerOS services
- Uninstall a specific customerOS service

## Uninstall all Openline services

To uninstall all Openline services and tear down the local development server, run:

```shell
openline dev rm --all
openline dev stop
```

## Uninstall all customerOS services

To uninstall all services specific to the customerOS product, run:

```shell
openline dev rm customer-os
```

## Uninstall a specific customerOS service

If you'd like to uninstall a specific customerOS service, you can do that by running:

```shell
openline dev rm <service-name>
```

For example, if you ran:

```shell
openline dev rm message-store-api
```

The Message Store API would be removed from the development server without touching any of the other customerOS services.
