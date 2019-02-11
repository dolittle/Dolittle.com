# How to use
This is a permanent way of running dolittle.com, and it's not been added any magic button on how to build and deploy the site without getting your hands  dirty.

## Developing

### Prerequisites

- You need to install npm and if you like yarn, you should install that as well. (Actually, at the moment, npm throws some nasty errors, but it works either way.)
- You need to install Kubectl and log in with some company credentials in terminal.

In a shell:

`$ npm install`
or
`$ yarn`

To run a local site in development modus:

`$ npm run start`
or
`$ yarn start`

## Deploy

1. run `dockerize.sh` from a shell.
2. Then run `deploy.sh` from a shell.

You're done.