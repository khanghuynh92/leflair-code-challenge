## Full-Stack Code Challenge

This test is designed to assess your skills as a full-stack Javascript developer.


## 1. Mission

The goal of this test is to create a simple calculator in which can add, subtract, multiply and divide. There are some special requirements that will make this seemingly simple task more complex.

# <img src="/images/calculator.png?raw=true" width="260">


## 2. Requirements


### 2.1. The Client

The visual design of the client app does not matter for the purposes of this test, however you should demonstrate a strong understanding of semantic HTML5 and CSS.

The design should be similar to a standard calculator layout.


### 2.2. The Server

The addition, subtraction, multiplication and division operations should be exposed as an API.

The client app should consume the API, POSTing the two values and operand the user supplied and displaying the answer received in response.

These API endpoints should be production-ready and must handle errors gracefully.

The user should be able to store one calculation result in memory (on the server), and recall it later.

Choose one endpoint on your API and write a full suite of unit tests for it.

Log the calculation result to the database. A simple record should have the following props: id (auto generated), action (addition, subtraction, multiplication and division), value1, value2, result & useragent data.


### 2.3. Project Scope

Documentation: description of the architecture/database designs and an installation guide

Javascript: ES6/TypeScript

Frontend: ReactJS, HTML, CSS (Preferably create-react-app & Bootstrap 4 SASS)

Backend: NodeJS (Preferably ExpressJS)

Database: MySQL/MongoDB (Preferably MongoDB)

DevOps: use CI/CD tool for running automated tests & deployment (Preferably Travis-ci)

A live running version of the app (Preferably Heroku)


## 3. Extra Credit

The web app should be server-side rendered (i.e. selecting “view source” when viewing the project should show the rendered HTML of the calculator)

Write a full suite of unit tests for the calculator input/results display field

Apply microservices architecture for the app with a proxy at the front and 3 services (app, api & database) at the back (Preferably Docker & Docker Compose)
