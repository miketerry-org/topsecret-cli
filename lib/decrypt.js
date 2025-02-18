// decrypt.js:

"use strict";

// load all necessary packages
const TopSecret = require("topsecret");
const clipboard = require("copy-paste");
const setup = require("./setup.js");

async function decrypt(sourceFile, destFile, options) {
  try {
    // create instance of TopSecret class
    let secret = new TopSecret();

    // initialize topsecret for decription
    await setup(secret, clipboard, options);

    // decrypt the source file into the destination file
    secret.decryptFile(sourceFile, destFile);
    console.log(`Decrypted "${sourceFile}" into "${destFile}"`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the decrypt action handler
module.exports = decrypt;
