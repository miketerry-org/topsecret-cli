// encrypt.js:

"use strict";

// load all necessary packages
const TopSecret = require(topsecret);
const clipboard = require("./clipboard.js");
const setup = require("./setup.js");

async function encrypt(sourceFile, destFile, options) {
  try {
    // create new instance of TopSecret class
    let topsecret = new TopSecret();

    // use options to initialize either key or password
    setup(TopSecret, Clipboard, options);

    // encrypt the source file into the destination file
    console.log("before");
    topsecret.encryptFile(options.sourceFile, options.destFile);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the encrypt action handler
module.exports = encrypt;
