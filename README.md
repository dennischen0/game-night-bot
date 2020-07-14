# Discord Game Night Bot [![Build Status](https://travis-ci.com/dennischen0/game-night-bot.svg?branch=master)](https://travis-ci.com/dennischen0/game-night-bot) [![codecov](https://codecov.io/gh/dennischen0/game-night-bot/branch/master/graph/badge.svg)](https://codecov.io/gh/dennischen0/game-night-bot)

This bot does nothing useful right now.

## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [Scripts and Tasks](#-scripts-and-tasks)
- [Testing](#-testing)
- [Further Documentation](#-further-documentations)

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`

### Step 2: Create new Project

Fork or download this project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to change the `TOKEN` variable to be your bot's token.

Instructions on how to create a bot can be found on [Discord's developer website](https://discord.com/developers/applications).

Then setup your application environment.

```bash
npm install
```

> This installs all dependencies with npm.

### Step 3: Serve your App

Go to the project dir and start your app with this npm script.

```bash
npm run dev
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the sever according to these changes.

If you get an error regarding sodium, install the following dependencies:

```bash
brew install libtool autoconf automake
```

## ❯ Scripts and Tasks

### Install

- Install all dependencies with `npm install`

### Linting

This project conforms to StandardJS code style and will fail to build if you have any linter errors. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Visual Studio Code plugin to show errors.

- Run code quality analysis using `npm run lint`. This runs eslint.
- This is also run in the pre-test hook for npm.

### Tests

- Run the unit tests using `npm test`. This also runs eslint.

### Running in dev mode

- Run `npm run dev` to start nodemon to serve the app.

## ❯ Contributing

### Continuous Integration

This project uses Travis CI to perform continuous integration. When code gets merged into master, it is immediately deployed to Heroku. In order to maintain a working master branch, pull requests built and tested using Travis CI and must have passing build prior to merging.

## ❯ Testing:

Run the following script before making commits.

```
npm test
```

## ❯ Further Documentations

| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [DiscordJS](https://discord.js.org/) | discord.js is a powerful node.js module that allows you to interact with the Discord API. |
