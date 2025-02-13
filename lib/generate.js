// generate.js:

"use strict";

// load all required packages
const TopSecret = require("topsecret");
const clipboard = require("clipboard");

async function generate(options) {
  try {
    // create instance of topsecret class
    let topsecret = new TopSecret();

    // initialize unedfined key
    let key;

    // if password specified then use it to create encryption key
    if (options.password) {
      topsecret.password = options.password;
      key = topsecret.key;
    } else {
      // use randomly generated encryption key
      key = topsecret.randomKey;
    }

    // save 64 byte encryption key to text file
    if (options.keyFile) {
      fs.writeFileSync(options.keyFile, key, "utf8");
      console.log(`Wrote encryption key to "${options.keyFile}"`);
    } else if (options.clipboard) {
      await clipboard.write(key); // Use clipboardy to copy the key
      console.log("Copied encryption key to clipboard");
    } else {
      // output to console
      console.log("===");
      console.log(key);
      console.log("===");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// export the generate action handler
module.exports = generate;
