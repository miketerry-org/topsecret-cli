"use strict";

const TopSecret = require("topsecret");
const clipboard = require("copy-paste");
const setup = require("./setup.js");
const glob = require("glob");
const path = require("path");
const fs = require("fs");

function hasWildcard(p) {
  return /[*?[\]]/.test(p);
}

async function encrypt(sourceFile, destFile, options) {
  try {
    const sourceHasWildcard = hasWildcard(sourceFile);
    const destHasWildcard = hasWildcard(destFile);

    // Enforce both or neither being wildcards
    if (sourceHasWildcard !== destHasWildcard) {
      throw new Error(
        "Both source and destination must use wildcards, or neither."
      );
    }

    let sources = [sourceFile];
    let destinations = [destFile];

    if (sourceHasWildcard) {
      sources = glob.sync(sourceFile);
      const srcPattern = path.basename(sourceFile);
      const destPattern = path.basename(destFile);
      const srcDir = path.dirname(sourceFile);
      const destDir = path.dirname(destFile);

      // Map destination filenames from source ones
      destinations = sources.map(srcPath => {
        const baseName = path
          .basename(srcPath)
          .replace(
            new RegExp(srcPattern.replace("*", "(.*)")),
            destPattern.replace("*", "$1")
          );
        return path.join(destDir, baseName);
      });
    }

    // setup encryption
    let secret = new TopSecret();
    await setup(secret, clipboard, options);

    // Encrypt files
    for (let i = 0; i < sources.length; i++) {
      secret.encryptFile(sources[i], destinations[i]);
      console.log(`Encrypted "${sources[i]}" into "${destinations[i]}"`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = encrypt;
