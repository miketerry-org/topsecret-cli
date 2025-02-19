// setup.js:

"use strict";

// load all necessary modules
const path = require("path");
const fs = require("fs");

async function setup(topsecret, clipboard, options) {
  if (options.key) {
    topsecret.key = options.key;
  } else if (options.keyFile) {
    topsecret.key = fs.readFileSync(path.resolve(options.keyFile), "utf8");
  } else if (options.keyenvvar) {
    topsecret.key = process.env[options.keyenvvar];
  } else if (options.password) {
    topsecret.password = options.password;
  } else if (options.passwordenvvar) {
    topsecret.password = process.env[options.passwordenvvar];
  } else if (options.clipboard) {
    topsecret.key = await clipboard.paste();
  } else {
    throw new Error("No encryption key or password was specified!");
  }
}

// export function to csetup topsecret instance
module.exports = setup;
