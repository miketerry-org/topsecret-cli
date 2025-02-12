#!/usr/bin/env node

// load all required modules
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const commander = require("commander");
const TopSecret = require("topsecret");

// initialize commander program instance
const program = new commander.Command();

// create instance of top secret class
const topsecret = new TopSecret();

// need to use async function because clipboardy module is an ES6 module
async function main() {
  let clipboard;
  try {
    clipboard = (await import("clipboardy")).default;
  } catch (err) {
    console.error("Error loading clipboardy:", err);
    process.exit(1);
  }

  program
    .command("encrypt <sourceFile> <destFile>")
    .description("Encrypt a file using AES-256")
    .option("--key <key>", "Encryption key (hex string)")
    .option("--key-file <file>", "File containing the hex key")
    .option("--key-envvar <envVar>", "Environment variable containing hex key")
    .option("--password <password>", "Password to derive the key")
    .option(
      "--password-envvar <envVar>",
      "Environment variable containing password"
    )
    .option("--clipboard", "Use clipboard content as the key")
    .action(async (sourceFile, destFile, options) => {
      try {
        // Your action logic here
      } catch (error) {
        console.error("Error:", error.message);
      }
    });

  program
    .command("decrypt <sourceFile> <destFile>")
    .description("Decrypt a file using AES-256")
    .option("--key <key>", "Encryption key (hex string)")
    .option("--key-file <file>", "File containing the hex key")
    .option("--key-envvar <envVar>", "Environment variable containing hex key")
    .option("--password <password>", "Password to derive the key")
    .option(
      "--password-envvar <envVar>",
      "Environment variable containing password"
    )
    .option("--clipboard", "Use clipboard content as the password")
    .action(async (sourceFile, destFile, options) => {
      try {
        // Your action logic here
      } catch (error) {
        console.error("Error:", error.message);
      }
    });

  program
    .command("generate")
    .description("Generate encryption key using AES-256")
    .option("--key-file <file>", "File to save the hex key")
    .option("--password <password>", "Password to derive the key")
    .option("--clipboard", "Copy hex encryption key to clipboard")
    .action(async (options) => {
      try {
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
          clipboard.writeSync(key); // Use clipboardy to copy the key
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
    });

  program.parse(process.argv);
}

main(); // Run the async function to load clipboardy and handle the program logic
