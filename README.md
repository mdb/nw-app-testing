[![Build Status](https://travis-ci.org/mdb/nw-app-testing.svg?branch=master)](https://travis-ci.org/mdb/nw-app-testing)

# nw-app-testing

A very basic NW.js application and corresponding tests.

Somewhat based on [https://github.com/nadavsinai/node-wekbit-testing](node-wekbit-testing).

## Technologies

* NW.js
* Gulp
* Karma
* Jasmine
* Protractor

## Setup

1. Install [Node.js](https://nodejs.org).
2. Install the NW.js [chromedriver](http://dl.nwjs.io/); put its executable in `/usr/local/bin/`
3. `npm install -g gulp` to install [gulp](http://gulpjs.com/) globally
3. `npm install` to install nw-app-testing dependencies

## Run the application

`gulp run`

## Run the tests

Unit tests:

`gulp test`

End-to-end functional tests:

`gulp e2e`
