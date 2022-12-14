---
sidebar_position: 1
sidebar_label: Installing
displayed_sidebar: guides
---

# Installing customerOS

Setting up customerOS is pretty simple via the Openline CLI.  If you haven't yet installed the Openline CLI, check out our guide to [getting started][getting-started].

## Installing customerOS via the Openline CLI

Open your terminal and enter:

```shell
openline dev start customer-os
```

This will spin up the customerOS dev server and install the following services in a kubernetes cluster on your local machine:

- customer-os-api
- message-store-api
- auth-fusionauth
- customer-db-neo4j
- customer-db-postgresql

### Running a different version

The default installation will install the `latest` tagged version for the above services.  If you would like to run a different version, you can add the `-t` flag with the name of the version you'd like to install:

```shell
openline dev start customer-os -t otter
```

Check out our list of [supported versions][tags].

### Building from source

If you've cloned the repo locally, you can also build and install the images directly from source.  This is especially helpful if you are modifying or improving the code and want to test locally before submitting a pull request.  

To build from source, run:

```shell
openline dev start customer-os -l /path/to/local/project
```

This command will navigate to the top level path of the customerOS repo, build all the customerOS images locally, and install them in the kubernetes cluster.

### Verifying the installation

To verify that everything has been installed correctly, run:

```shell
openline dev ping
```

That's it!

<!--- References --->

[getting-started]: </docs>
[tags]: https://github.com/openline-ai/openline-customer-os/tags
