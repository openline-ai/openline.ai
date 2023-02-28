---
sidebar_label: Installing
displayed_sidebar: guides
---

# Installing customerOS

Setting up customerOS is pretty simple via the Openline CLI.  If you haven't yet installed the Openline CLI, check out our guide to [getting started][getting-started].

## customerOS Overview

Openline customerOS is comprised of the Features and Services:

| Feature           | Service                        |
|-------------------|--------------------------------|
| customer-db       | customer-db-prostreql          |
|                   | customer-db-neo4j              |
| customer-os-api   | customer-os-api-service        |
|                   | customer-os-api-loadbalancer   |
| message-store-api | message-store-api-service      |
|                   | message-store-api-loadbalancer |
| ory-tunnel        | ory-tunnel-service             |
|                   | ory-tunnel-loadbalancer        |

We use kubernetes to orchestrate everything.  The Openline CLI manages the setup and provisioning of the kubernetes cluster for you.

## Installing customerOS via the Openline CLI

The Openline CLI is a powerful tool, giving you the ability to control installation at the Product or Feature level.  If you'd like to install all of customerOS (recommended), run:

```shell
openline dev start customer-os
```

If you'd only like to install a customerOS feature, you can do that by running:

```shell
openline dev start <feature name>
```

as specified above.

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

### Verifying the status of the local development server

Occassionally you might want to check on the status of the local development server.  You can do that by running:

```shell
openline dev status
```

You'll be presented with a full view of what's currently installed and their current status.

### Setting up social auth

Our front end applications use social auth for a login system, in order to have this working you need to do the following steps

1. Create an account at <ory.sh>
2. If you created your account via social login, be sure to set a password
3. create a project for social login
4. run the following command on the openline cli

```shell
openline dev ory tunnel
```
you will be prompted to specify your ory login/password as well as name of your ory project, the redirect url you can probaby it enter if spaces is the app you intend to test

<!--- References --->

[getting-started]: </docs>
[tags]: https://github.com/openline-ai/openline-customer-os/tags
