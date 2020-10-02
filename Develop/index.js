const inquirer = require('inquirer');
const fs = require('fs');

// this function inserts the user input into the ToC via the inquirer prompt
function insertToc() {
    return `
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)`
};

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
        choices: ['MIT', 'GPL', 'Mozilla']
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

inquirer.prompt(questions)
    .then((readMe) => {
        const {
            github, title, description, installation, usage, credits, license, contributing, email} = readMe;

        fs.appendFile('ReadMe.md',
            '# ' + title +
            '## Description' + '\n\n' + description + '\n\n' +
            insertToc() + '\n\n' + 
            '## Installation' + '\n\n' + installation + '\n\n' +
            '## Usage' + '\n\n' + usage + '\n\n' + 
            '## License' + '\n\n' + license + '\n\n' +
            '## Credits' + '\n\n' + credits + '\n\n' +
            '## Contributing' + '\n\n' + contributing + '\n\n' +
            '## Questions' + '\n\n' +
            '### Please Contact: ' + github + ' Email: ' + email, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
    });
