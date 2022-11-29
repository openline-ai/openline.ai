---
sidebar_position: 2
sidebar_label: openline dev
displayed_sidebar: guides
---

# `openline dev`

Start and manage a local Openline development instance.

```terminal
USAGE:
    openline dev [COMMAND]

COMMANDS:
    ping            Health check to determine if an openline service is reachable
    start           Start the openline development server
    status          View the current status of all services deployed on development server
    stop            Stop and tear down the Openline development server
```

## `openline dev ping`

Health check command to determine if an openline service is reachable.  You must have started a local dev server instance via the `openline dev start` command for ping to work.

```terminal
USAGE:
    openline dev ping [APP] [flag(s)]

ARGUMENTS:
    APP             The application you would like to ping. 
                    Default: customer-os
                    Options: [customer-os]

FLAGS
    -v, --verbose   Show all output of the command in the terminal
```

## `openline dev start`

Start an Openline development server instance on your local environment.

```terminal
USAGE:
    openline dev start [APP] [flag(s)]

ARGUMENTS:
    APP             The application you would like to start. 
                    Default: customer-os
                    Options: [customer-os]

FLAGS
  -a, --all               start all Openline apps & services
  -l, --location=<value>  location for the source code to be used in the
                          installation
  -t, --tag=<value>       [default: latest] version tag of the image you would
                          like to deploy
  -v, --verbose
```

Release tag options:

- Default is to deploy the latest release build using `--tag latest`
- If you'd like the bleeding edge, you can run `--tag otter` which includes all the latest pull requests
- If you'd like to run a previous release version, check out all [release tags][release]


## `openline dev status`

View the current status of all Openline services deployed on the local development server.

```terminal
USAGE:
    openline dev start [flag(s)]

FLAGS
    -v, --verbose   Show all output of the command in the terminal
```

## `openline dev stop`

Stop the Openline development server and tear down the local instance.

```terminal
USAGE:
    openline dev stop [APP] [flag(s)]

ARGUMENTS:
    APP             The application you would like to stop. 
                    Default: customer-os
                    Options: [customer-os]

FLAGS
    -a, --all       Stop all Openline applications
    -v, --verbose   Show all output of the command in the terminal
```

<!--- References ---->
[release]: https://github.com/openline-ai/openline-customer-os/tags
