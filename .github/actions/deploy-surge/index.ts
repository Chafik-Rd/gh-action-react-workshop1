import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function main() {
  // npx surge --token f60f449680f24eea36e4a3d5e58f1fee --login fikkyrd123@gmail.com dist work-shop2.surge.sh

  //1 token
  const token = core.getInput("token", {
    required: true,
    trimWhitespace: true,
  });
  // 2 email
  const email = core.getInput("email", {
    required: true,
    trimWhitespace: true,
  });
  // 3 dist folder
  const distFolder = core.getInput("dist-folder", {
    required: true,
    trimWhitespace: true,
  });
  // 4 domain .surge.sh
  const domain = core.getInput("domain", {
    required: true,
    trimWhitespace: true,
  });
  const command = `npx surge --token ${token} --login ${email} ${distFolder} ${domain}`;
  return exec.exec(command);
}
main();
