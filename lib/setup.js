// setup.js:

"use strict";

async function setup(topsecret, clipboard, options) {
  if (options.key) {
    topsecret.key = options.key;
  } else if (options.keyFile) {
    topsecret.keyFile = options.keyFile;
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
