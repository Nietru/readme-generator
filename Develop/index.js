// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt = [
  {
    type: "input",
    message: "What is the name/title of your project?",
    name: "titlePrompt",
  },
  {
    type: "input",
    message: "Description of your project:",
    name: "descriptionPrompt",
  },
  {
    type: "input",
    message: "If necessary, provide a table of contents for your project:",
    name: "contentsPrompt",
  },
  {
    type: "input",
    message: "How does a user install your project app?",
    name: "installationPrompt",
  },
  {
    type: "input",
    message: "Project Usage:",
    name: "usagePrompt",
  },
  {
    type: "input",
    message: "Repository Liscence (if any):",
    name: "licensePrompt",
  },
  {
    type: "input",
    message: "Project contributors/credits:",
    name: "creditsPrompt",
  },
  {
    type: "input",
    message: "Project tests:",
    name: "testsPrompt",
  },
  {
    type: "input",
    message: "Project questions:",
    name: "questionsPrompt",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
