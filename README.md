# playwright-test-project

Autotests for the site https://the-internet.herokuapp.com/ written in Typescript using Playwright

## Install Playwright (yarn)
https://playwright.dev/docs/intro#installing-playwright

## Create env file for the tests

`cp .env.example .env`

## Run all e2e tests

`yarn playwright test`

## Run tests from the file

`yarn playwright test main.spec.ts`

## Inside that directory, you can run several commands:

## Runs the end-to-end tests.
  yarn playwright test

## Starts the interactive UI mode.
  yarn playwright test --ui

## Runs the tests only on Desktop Chrome.
  yarn playwright test --project=chromium

## Runs the tests in a specific file.
  yarn playwright test example

## Runs the tests in debug mode.
  yarn playwright test --debug

## Auto generate tests with Codegen.
  yarn playwright codegen
