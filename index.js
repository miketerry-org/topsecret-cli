#!/usr/bin/env node

// load all required modules
const commander = require("commander");
const decrypt = require("./lib/decrypt");
const encrypt = require("./lib/encrypt");
const generate = require("./lib/generate.js");

// initialize commander program instance
const program = new commander.Command();

// need to use async function because clipboardy module is an ES6 module
async function main() {
  try {
    program
      .command("encrypt <sourceFile> <destFile>")
      .description("Encrypt a file using AES-256")
      .option("--key <key>", "Encryption key (hex string)")
      .option("--key-file <file>", "File containing the hex key")
      .option(
        "--key-envvar <envVar>",
        "Environment variable containing hex key"
      )
      .option("--password <password>", "Password to derive the key")
      .option(
        "--password-envvar <envVar>",
        "Environment variable containing password"
      )
      .option("--clipboard", "Use clipboard content as the key")
      .action(encrypt);

    program
      .command("decrypt <sourceFile> <destFile>")
      .description("Decrypt a file using AES-256")
      .option("--key <key>", "Encryption key (hex string)")
      .option("--key-file <file>", "File containing the hex key")
      .option(
        "--key-envvar <envVar>",
        "Environment variable containing hex key"
      )
      .option("--password <password>", "Password to derive the key")
      .option(
        "--password-envvar <envVar>",
        "Environment variable containing password"
      )
      .option("--clipboard", "Use clipboard content as the password")
      .action(decrypt);

    program
      .command("generate")
      .description("Generate encryption key using AES-256")
      .option("--key-file <file>", "File to save the hex key")
      .option("--password <password>", "Password to derive the key")
      .option("--clipboard", "Copy hex encryption key to clipboard")
      .action(generate);

    program.parse(process.argv);
  } catch (err) {
    console.error(err.message);
  }
}

main();
