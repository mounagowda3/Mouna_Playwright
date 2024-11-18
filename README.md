# Playwright Automation Framework for UI and API Tests
# Introduction
This project contains two parts:
1. UI Testing for the Sauce Demo Web Application 
2. API Testing for the Petstore API 

# Overview
The goal of this project is to automate critical features of the Sauce Demo Web Application using Playwright and TypeScript:
1. Login functionality: User can successfully log in and be redirected to the products page.
2. Product Checkout: Verifying that users can add products to their cart and proceed to checkout.
   
API tests for the Petstore API:
1. POST: create new pet to the pet store.
2. GET: Retrieves pet information.

# Project Structure and Design
This project uses the Page Object Model (POM) design pattern for UI testing, and the structure is tailored to work with Playwright and TypeScript.
1. Login product test file: Contains the test cases for the UI and API
2. Login Product page action file : This file contains methods that handle interactions with the UI page.
3. locators.js: Defines the locators for the elements used in the tests.
4. Playwrite.config.js - Configures settings for compilation and test execution.
5. package.json - Lists npm packages and project dependencies.
6. package-lock.json - Automatically generated to lock dependencies versions.
7. Nodejs - Cypress built on Node.js and comes packaged as an npm module.
8. tsconfig.json - Configuration file which specifies the compiler options and settings for how TypeScript code should be compiled into JavaScript. 

# Installation
1. Download and install Node.js.
2. Download and install Visual Studio Code.
3. Install Playwright, Run in the terminal: npm install Playwright
5. Run with the command - npx Playwright test
