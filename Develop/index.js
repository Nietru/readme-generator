// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  // Title/Project Name, #
  {
    type: "input",
    message: "What is the name/title of your project?",
    name: "titlePrompt",
    validate: (yourInput) => {
      if (yourInput) {
        return true;
      } else {
        console.log("Please enter a title to continue..");
        return false;
      }
    },
  },
  // Project/App description, ##
  {
    type: "input",
    message: "Description of your project:",
    name: "descriptionPrompt",
    validate: (yourDescription) => {
      if (yourDescription) {
        return true;
      } else {
        console.log("Please describe your project to continue..");
        return false;
      }
    },
  },
  // Installation, ##
  {
    type: "input",
    message: "How does a user install your app?",
    name: "installationPrompt",
    // not required, no validation:
  },
  // Usage, ##
  {
    type: "input",
    message: "Project Usage: How would someone use this app?",
    name: "usagePrompt",
    validate: (yourUsage) => {
      if (yourUsage) {
        return true;
      } else {
        console.log("Please enter how this app is utilized to continue..");
        return false;
      }
    },
  },
  // A checkbox section for license selection
  {
    type: "checkbox",
    message: "Repository License:",
    name: "repoLicense",
    choices: ["Apache", "creative commons", "GNU", "MIT", "None of the above"],
    validate: (yourLicense) => {
      if (yourLicense) {
        return true;
      } else {
        console.log("Please select a license for the project to continue..");
        return false;
      }
    },
  },
  // How to contribute, ##
  {
    type: "input",
    message: "Project contributions: how to contribute",
    name: "creditsPrompt",
    // not required, no validate:
  },
  // testing, ##
  {
    type: "input",
    message: "How will the user test this project?",
    name: "testsPrompt",
    // not required, no validate:
  },
  // Github Username:
  {
    type: "input",
    message: "Github Username:",
    name: "github",
    validate: (yourGithub) => {
      if (yourGithub) {
        return true;
      } else {
        console.log("Enter your Github Username to continue..");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Email Address:",
    name: "email",
    validate: (yourEmail) => {
      if (yourEmail) {
        return true;
      } else {
        console.log("Enter your email address to continue..");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("Success! Your Readme file has been generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
