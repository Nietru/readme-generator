// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //data."name: ' ' from the index.js "
  return `# ${data.titlePrompt}
  ## Table of Contents:
  - [Description](#descriptionPrompt)
  - [Installation](#installationPrompt)
  - [Usage](#usagePrompt)
  - [Contribution](#contributePrompt)
  - [Testing](#testPrompt)
  - Contact/Other Info: (#github)(#email)

  ## Description:
  ${data.descriptionPrompt}
  ## Installation:
  ${data.installationPrompt}
  ## Usage:
  ${data.usagePrompt}
  ## License:
  ${data.repoLicense}
  ## Contribution:
  ${data.contributePrompt}
  ## Testing:
  ${data.testPrompt}
  ## Contact/Other Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)
`;
}

module.exports = generateMarkdown;
