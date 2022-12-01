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
    ping            Health check on all Openline services
    rm              Remove openline app or service
    start           Start the openline development server
    status          View the current status of all services deployed on development server
    stop            Stop and tear down the Openline development server
```

## `openline dev ping`

Health check across all Openline services.  You must have started a local dev server instance via the `openline dev start` command for ping to work.

```terminal
USAGE:
    openline dev ping [flag(s)]

FLAGS
    -v, --verbose   Show all output of the command in the terminal
```

## `openline dev rm`

Remove an Openline app or service from the dev server.

```terminal
USAGE:
    openline dev rm [APP] [flag(s)]

ARGUMENTS:
    APP             The application you would like to remove. 
                    Options: 
                        customer-os 
                        contacts 
                        oasis 
                        auth 
                        db
                        customer-os-api 
                        message-store
                        channels-api
                        oasis-api
                        oasis-gui
                        contacts-gui

FLAGS
  --all             Remove all Openline apps & services
  -v, --verbose
```

## `openline dev start`

Start an Openline development server instance on your local environment.

```terminal
USAGE:
    openline dev start [APP] [flag(s)]

ARGUMENTS:
    APP                     The application you would like to start. 
                             Default: customer-os
                             Options: 
                                customer-os 
                                contacts 
                                oasis 
                                auth 
                                db
                                customer-os-api 
                                message-store
                                channels-api
                                oasis-api
                                oasis-gui
                                contacts-gui

FLAGS
  -a, --all                 Start all Openline apps & services
  -l, --location=<value>    Path to the local cloned repo you would like to 
                            build an image from.
  -t, --tag=<value>         Version tag of the image you would like to deploy.
                            Default: latest
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

Save current dev server config and spin down all services.

```terminal
USAGE:
    openline dev stop [APP] [flag(s)]

FLAGS
    -v, --verbose   Show all output of the command in the terminal
```

<!--- References ---->
[release]: https://github.com/openline-ai/openline-customer-os/tags
