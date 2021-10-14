
function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Licensing:
    [![License](https://img.shields.io/badge/License-${data.licensing}-blue.svg)](https://opensource.org/licenses/${data.licensing})
    
    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info](#additional-info)
   
    ## Description:
    ${data.description}
    
    ## Installation:
    ${data.installation}
    
    ## Usage:
    ${data.usage}
    
    
    ## Contribution:
    ${data.contribution}
   
    ## Testing:
    ${data.testing}

    ## License:
    ${data.licensing}

    ## Additional Info:
    - Github Profile: [${data.github}](https://github.com/${data.github})
    - Shoot Me an Email @ ${data.email} `;
  }
  
  module.exports = generateMarkdown;
  
  //_____________________________________________________________
//   const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
    
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "project_title",
//             message: "What is your project tittled?"
//           },
//           {
//             type: "input",
//             name: "description",
//             message: "Briefly describe your project"
//           },
//           {
//             type: "input",
//             name: "install",
//             message: "Are there any installations required?"
//           },
//           {
//             type: "input",
//             name: "use",
//             message: "What is the use of the application"
//           },
//           {
//             type: "input",
//             name: "contributions",
//             message: "Are there any contribution rules?"
//           },
//           {
//             type: "input",
//             name: "test",
//             message: "Please provide test instructions if applicable"
//           },
//           {
//             type: "checkbox",
//             message: "License?",
//             name: "license",
//             choices: [
//               "[MIT License](LICENSE.txt)", 
//               "[GNU GPLv3 License](COPYING.txt)", 
//             ]
//           },
//           {
//             type: "input",
//             name: "email",
//             message: "Enter your email account"
//           },
//           {
//             type: "input",
//             name: "github",
//             message: "Enter your github username"
//           }
//         ]);
//       }

// function generateREADME(answers) {
//   return `# ${answers.project_title}
    
// #### Table of Contents
// 1. [Project Description](#project-description)
// 2. [Installation Instructions](#installation-instructions)
// 3. [Usage Information](#usage-information)
// 4. [Contributor Guidelines](#contributor-guidelines)
// 5. [Code of Conduct](#code-of-conduct)
// 6. [Test Instructions](#test-instructions)
// 7. [License](#license)
// 8. [Questions](#questions)
// ## Project Description
// * ${answers.description}
// ## Installation Instructions
// * ${answers.install}
// ## Usage Information
// * ${answers.use}
// ## Contributor Guidelines
// * ${answers.contributions}
// ## Code of Conduct
// * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
// ## Test Instructions
// * ${answers.test}
// ## License
// * licensed under the ${answers.license}
// ## Questions
// * For additional help or questions about collaboration, please reach out to ${answers.email}
// * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
  
// }

// promptUser()
//   .then(function(answers) {
//     const readme = generateREADME(answers);

 
//     return writeFileAsync("README.md", readme);
//   })
//   .then(function() {
//     console.log(" README.md has been created!");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// const fs = require("fs");
// const util = require("util");
// const inquirer = require("inquirer");
// const generateReadme = require("./utils/generateReadme")
// const writeFileAsync = util.promisify(fs.writeFile);

// //Prompt the user questions to populate the README.md
// function promptUser(){
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "projectTitle",
//             message: "What is the project title?",
//         },
//         {
//             type: "input",
//             name: "description",
//             message: "Write a brief description of your project: "
//         },
//         {
//             type: "input",
//             name: "installation",
//             message: "Describe the installation process if any: ",
//         },
//         {
//             type: "input",
//             name: "usage",
//             message: "What is this project usage for?"
//         },
//         {
//             type: "list",
//             name: "license",
//             message: "Chose the appropriate license for this project: ",
//             choices: [
//                 "Apache",
//                 "Academic",
//                 "GNU",
//                 "ISC",
//                 "MIT",
//                 "Mozilla",
//                 "Open"
//             ]
//         },
//         {
//             type: "input",
//             name: "contributing",
//             message: "Who are the contributors of this projects?"
//         },
//         {
//             type: "input",
//             name: "tests",
//             message: "Is there a test included?"
//         },
//         {
//             type: "input",
//             name: "questions",
//             message: "What do I do if I have an issue? "
//         },
//         {
//             type: "input",
//             name: "username",
//             message: "Please enter your GitHub username: "
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Please enter your email: "
//         }
//     ]);
// } 

// // Async function using util.promisify 
//   async function init() {
//     try {
//         // Ask user questions and generate responses
//         const answers = await promptUser();
//         const generateContent = generateReadme(answers);
//         // Write new README.md to dist directory
//         await writeFileAsync('./dist/README.md', generateContent);
//         console.log('✔️  Successfully wrote to README.md');
//     }   catch(err) {
//         console.log(err);
//     }
//   }
  
//   init();