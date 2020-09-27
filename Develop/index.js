const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list the steps required for installation.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe your app/web page usage.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select your license.',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any guidelines for interested contributors.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    },

];

// function to write README file
function writeToFile(README,) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
