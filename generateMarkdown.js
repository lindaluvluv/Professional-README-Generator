const badges = require (`./licenseBadges`)
function generateMarkdown(data) {
    return `# ${data.title}
    
${badges(data.licensing)}    
    
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
  
