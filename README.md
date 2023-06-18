# Hunty technical test
# Table of Contents

1. [Introduction](#introduction)
2. [Project Objectives](#project-objectives)
3. [Project Overview](#project-overview)
4. [Tech Stack](#tech-stack)
    - [Core Technologies](#core-technologies)
    - [Design Patterns and Best Practices](#design-patterns-and-best-practices)
    - [Version Control](#version-control)
    - [Text Editor](#text-editor)
5. [Page Object Model (POM)](#page-object-model-pom)
6. [Prerequisites](#prerequisites)
7. [Running Automated Tests](#running-automated-tests)

# Introduction

This project is an automation testing suite designed for the [UI Testing Playground](http://uitestingplayground.com/home) website. The suite was created to demonstrate proficiency in automation testing of various user interface elements and interactions, using modern tools and practices. The primary technologies used in this project are Node.js and Cypress, with a focus on maintainability and reusability provided by the Page Object Model design pattern.

# Project Objectives

The main objectives for this project are as follows:

1. **Comprehensive Coverage:** To cover a wide range of user interactions with the website, including but not limited to form submissions, dynamic loading, and client-side delays.

2. **Demonstration of Proficiency:** To effectively demonstrate proficiency in the use of Cypress and Node.js for automation testing, as well as the application of best practices such as the Page Object Model design pattern.

3. **Robustness:** To create a robust suite of tests that can handle a variety of scenarios and edge cases, providing assurance of the functionality of the UI Testing Playground website.

4. **Scalability:** To build a scalable testing suite that can easily be expanded to include more tests as needed, and can be adapted to test other websites with minimal modification.

5. **Knowledge Sharing:** To provide a clear and concise documentation of the entire process of setting up, designing, and running the test suite, so that others may learn from this project and use it as a reference for their own testing needs.

By achieving these objectives, this project aims to provide a valuable resource for learning and applying automation testing in practical scenarios.

# Project Overview

In the process of choosing a site to automate for this technical test, I decided on [UI Testing Playground](http://uitestingplayground.com/home) for several key reasons. This site offers a broad variety of common user interactions and UI elements, providing ample opportunity to create diverse and robust test cases.

UI Testing Playground is also explicitly designed to test different aspects of user interface behavior, making it an excellent choice for demonstrating the capabilities of modern testing tools like Cypress. The challenges presented by this site range from simple tasks, such as clicking a button or filling a form, to more complex tasks that require handling asynchronous behavior or dynamic elements. These complexities enabled me to create test cases of varying levels of complexity, which helped to demonstrate my ability to handle a wide array of testing scenarios.

# Tech Stack

This project has been built using a variety of modern tools and technologies in order to achieve high-quality, maintainable, and scalable automated tests.

## Core Technologies

- **Node.js:** An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It was used as the main runtime environment for the project.

- **Cypress:** A next-generation front end testing tool built for the modern web. It provides a complete end-to-end testing experience and was used as the main testing framework in the project.

## Design Patterns and Best Practices

- **Page Object Model (POM):** A design pattern used to create an object repository for web UI elements. In this project, POM was used to improve maintainability and reduce code duplication. More details about how POM was implemented in this project can be found [here](#page-object-model-pom).

## Version Control

- **Git:** A free and open-source distributed version control system. Git was used for source code management, allowing for robust version control and collaboration.

- **GitHub:** A provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, along with its own features. This project will be hosted on GitHub, allowing for better collaboration and version control.

## Text Editor

- **Visual Studio Code (VS Code):** A lightweight but powerful source code editor developed by Microsoft. VS Code was used as the main code editor for the project due to its robust support for JavaScript and numerous helpful features.

Remember to install all the necessary tools in order to run the tests correctly.


## Page Object Model (POM)
In this project, we've implemented the Page Object Model (POM) pattern for our automated tests. The Page Object Model is a design pattern that allows us to create an abstraction of the application's user interface and to write our tests in a way that simulates the manner in which end-users would interact with our application.

The main benefits of using POM are:

- Maintainability: By encapsulating the page structure and possible interactions with specific page objects, we make our tests easier to update and maintain. If UI elements change in the future, we only have to update the corresponding page object, not all individual tests.

- Readability: Tests written using POM are easier to understand because they more closely mirror the user's perspective. This makes them more intuitive for both technical and non-technical stakeholders.

- Reusability: Page objects are reusable across different test cases and can even be used for different test suites.

- Reliability: By modelling the interactions at a higher level of abstraction, we can write more robust tests that are less likely to break due to minor changes in the UI.

In summary, using the Page Object Model allows us to create more robust, maintainable, and reusable tests, which ultimately helps us to ensure the reliability of our application's user interface.

# Prerequisites

Before you can run the automated tests, you'll need to have the following installed on your machine:

1. **Text Editor**

    A text editor is essential for viewing and editing the codebase. Visual Studio Code is highly recommended due to its extensive support for JavaScript and its integration with Node.js and npm. If you haven't already installed it, you can download it [here](https://code.visualstudio.com/Download).

2. **Node.js & npm**

    Node.js is a JavaScript runtime that's required to run Cypress. Npm (Node Package Manager), installed automatically with Node.js, is necessary for managing project dependencies. If you haven't already installed these, you can download them [here](https://nodejs.org/en/download/).

3. **Cypress**

    The Cypress Test Runner is needed to run the automated tests. It's listed as a project dependency, so running `npm install` in the project root directory will install Cypress.

4. **Git**

    Git is a free and open-source distributed version control system. It's necessary for cloning the repository to your local machine. If you don't have Git installed, you can download it [here](https://git-scm.com/downloads).

Please ensure you have these installed before attempting to run the tests. If you have any issues with installation, please refer to the respective documentation for Visual Studio Code, Node.js, Cypress, or Git.

# Running Automated Tests

This project uses Cypress, an end-to-end testing framework, for automated testing. To run these tests, you'll need to have Node.js and npm installed on your machine. If you haven't installed these yet, you can download them [here](https://nodejs.org/en/download/).

## Steps to Run Tests:

1. **Install Project Dependencies**

    After cloning the repository to your local machine, navigate to the project root directory in your terminal and run the following command to install the required dependencies:

    ```shell
    npm install
    ```

2. **Run Cypress Tests**

    This project is configured with a script to start the Cypress Test Runner using npm. To start the Cypress tests, run the following command in your terminal:

    ```shell
    npm run cypress:open
    ```

    This command opens the Cypress Test Runner, a graphical user interface that allows you to see commands as they execute while also viewing the application under test.

    If you prefer to run the tests in headless mode (i.e., without the GUI), use the following command instead:

    ```shell
    npx cypress run
    ```

    This command runs the Cypress tests in the terminal output.

3. **View Test Results**

    After running the tests, the results will display in your terminal. For failed tests, Cypress provides an explanation about the failure and a stack trace to help you debug the issue.

4. **Test Artifacts**

    Screenshots for failed tests and videos of your entire test suite when run from the `cypress run` command are stored in the `cypress/screenshots` and `cypress/videos` directories, respectively.

Remember, any changes you make to the tests will be automatically reflected in the Test Runner. There's no need to manually restart Cypress.
