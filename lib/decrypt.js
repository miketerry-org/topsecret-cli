// decrypt.js:

"use strict";

// load all necessary packages
const TopSecret = require(topsecret);
const clipboard = require("clipboard");
const setup = require("./setup.js");

async function decrypt(sourceFile, destFile, options) {
  try {
    // create instance of TopSecret class
    let topsecret = newTopSecret();

    // initialize topsecret for decription
    setup(topsecret, clipboard, options);

    // decrypt the source file into the destination file
    topsecret.decryptFile(options.sourceFile, options.destFile);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the decrypt action handler
module.exports = decrypt;
