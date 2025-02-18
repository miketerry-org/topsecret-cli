// encrypt.js:

"use strict";

// load all necessary packages
const TopSecret = require("topsecret");
const clipboard = require("copy-paste");
const setup = require("./setup.js");

async function encrypt(sourceFile, destFile, options) {
  try {
    // create new instance of TopSecret class
    let secret = new TopSecret();

    // use options to initialize either key or password
    await setup(secret, clipboard, options);

    // encrypt the source file
    secret.encryptFile(sourceFile, destFile);
    console.log(`Encrypted "${sourceFile}" into "${destFile}"`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the encrypt action handler
module.exports = encrypt;
