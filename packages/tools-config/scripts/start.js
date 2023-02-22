// const inquirer = require("inquirer");

const PACKAEG_NAME = 'tools-config'

async function getAnswer() {
  return {};
}

function getShellStr(conf) {
  let res = `cd packages/${PACKAEG_NAME} && pnpm run build`;

  // if (conf.analasy) {
  //   res += ` ANALASY=1 `;
  // }

  // if (conf.node_env === "development") {
  //   res += ` pnpm dev`;
  // } else if (conf.node_env === "production") {
  //   res += ` pnpm build`;
  // }

  // if (conf.upload) {
  //   res += " && node ./upload.js";
  // }

  return res;
}

module.exports = {
  getAnswer,
  getShellStr,
};
