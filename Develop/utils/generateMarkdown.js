// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   // if (license == "MIT") {
//   //   return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
//   // }
// }
// TODO: Create a function to generate markdown for README
// choices: ["Apache", "Creative Commons", "Eclipse", "MIT", "None of the above"],
// RESOURCE FOR LICENSE BADGES: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function generateMarkdown(data) {
  console.log(data);
  let badgeCreated = "";
  if (data.repoLicense == "Apache") {
    badgeCreated =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-red.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.repoLicense == "Creative Commons") {
    badgeCreated =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (data.repoLicense == "Eclipse") {
    badgeCreated =
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (data.repoLicense == "MIT") {
    badgeCreated =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
  }
  //data."name: ' ' from the index.js "
  return `# ${data.titlePrompt}
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  ${data.descriptionPrompt}
  ## Installation:
  ${data.installationPrompt}
  ## Usage:
  ${data.usagePrompt}
  ## License:
  ${badgeCreated}
  ## Contribution:
  ${data.contributePrompt}
  ## Testing:
  ${data.testPrompt}
  ## Questions:
  - ${data.github}
  - ${data.email}
`;
}
module.exports = generateMarkdown;
