Development Notes for Pinboard Pin
==================================

This extension downloads vidoe from Twitter.

The web extension has been created using [Angular](https://angular.io/) and the [Angular CLI](https://github.com/angular/angular-cli). Its the angular alternative to [TwitterVideoAssistChrome](https://github.com/Flkalas/TwitterVideoAssistChrome)

Installation
------------

Install the application for development:

    npm install
    
On Windows, use latest Node or Yarn if installation fails.

Building and testing
--------------------

Build extension for development:

    npm run build

Test extension with Firefox:

    npm run test

Build unsigned extension for production:

    npm run build:prod

Package unsigned extension as zip file:

    npm run build:zip
