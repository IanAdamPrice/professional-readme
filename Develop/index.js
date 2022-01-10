// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project? (Required)',
  //validate to make sure there is a value there
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your project title.');
      return false;
    }
  }
},
 // Description of project
{
  type: 'input',
  name: 'description',
  message: 'Provide a description of the project (Required)',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
        console.log('You need to provide a project description!');
        return false;
    }
  }
 },
// Installation Instructions
{
  type: 'input',
  name: 'installation',
  message: 'How do you install your project? (Required)',
  validate: installationInput => {
    if (installationInput) {
      return true;
    } else {
        console.log('You need to provide installation info to continue!');
        return false;
    }
  }
},
// Usage Information
{
  type: 'input',
  name: 'usage',
  message: 'How do you use this project? (Required)',
  validate: usageInput => {
    if (usageInput) {
      return true;
    } else {
      console.log('You need to provide information on how to use project!');
      return false;
    }
  }
},
// Contribution Guidlines
{
  type: 'input',
  name: 'contribution',
  message: 'How should people contribute to this project? (Required)',
  validate: contributionInput => {
    if (contributionInput) {
      return true;
    } else {
      console.log('You need to provide information on how to contribute to the project!');
      return false;
    }
  }
},
// Test Instructions 
{
  type: 'input',
  name: 'testing',
  message: 'How do you test this project? (Required)',
  validate: testingInput => {
    if (testingInput) {
      return true;
    } else {
      console.log('You need to describe how to test this project!');
      return false;
    }
  }
},
// License Options
{
  type: 'checkbox',
  name: 'license',
  message: 'Choose a license for your project (Required)',
  choices: [
    "MIT",
    "Apache 2.0",
    "GNU AGPL v3",
    "Boost Software License 1.0",
    "None",
],
  validate: licenseInput => {
    if (licenseInput) {
      return true;
    } else {
      console.log('You must pick a license for the project!');
      return false;
    }
  }
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
      throw err;
      console.log('Success! README was succesfully created!')
    });
};
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();

