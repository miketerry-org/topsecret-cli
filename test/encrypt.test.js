// encrypt.test.js:

// loadd all necessary modules
const encrypt = require("../lib/encrypt");

// file names for testing
const originalFilename = "original.txt";
const encryptedFilename = "encrypted.txt";
const decryptedFilename = "decrypted.txt";

test("test1", async () => {
  encrypt(originalFilename, encryptedFilename, {
    key: `52871de4d5ad497194962a789ac6c3ac4239831bfce0ff7c657c8d4a30e1b847`,
  });
});
