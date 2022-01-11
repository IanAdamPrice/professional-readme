// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // console.log(license)
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)';
      case 'Boost Software License 1.0':
        return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      case 'GNU AGPL v3':
        return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      default:
        return '';
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return "![LicenseLink](#license)";
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'License \n [MIT](https://choosealicense.com/licenses/mit/)';
    case 'Apache 2.0':
      return 'License \n [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'Boost Software License 1.0':
      return 'License \n [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
    case 'GNU AGPL v3':
      return 'License \n [GNU AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)'
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  # ${renderLicenseBadge(data.license[0])}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#question)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  * This project is licensed under the ${renderLicenseSection(data.license[0])} 

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing} 
  
  ## Questions:
  * If you have any questions about the rep, open an issue or contact me directly at <${data.email}></a>
  * You can find more of my work on Github [${data.Username}](http://github.com/${data.Username})`;
}

module.exports = generateMarkdown;
