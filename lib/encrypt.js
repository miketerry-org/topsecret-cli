// encrypt.js:

"use strict";

// load all necessary packages
const TopSecret = require(topsecret);
const createClibpoard = require("./createClipboard.js");
const setup = require("./setup.js");

async function encrypt(sourceFile, destFile, options) {
  try {
    // create clipboard instance
    let clipboard = createClibpoard();

    // create new instance of TopSecret class
    let topsecret = new TopSecret();

    // use options to initialize either key or password
    setup(TopSecret, Clipboard, options);

    // encrypt the source file into the destination file
    topsecret.encryptFile(options.sourceFile, options.destFile);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the encrypt action handler
module.exports = encrypt;
