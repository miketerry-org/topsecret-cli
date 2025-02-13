// setup.js:

"use strict";

function setup(topsecret, clipboard, options) {
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
    topsecret.key = clipboard.readSync;
  }
}

// export function to csetup topsecret instance
module.exports = setup;
