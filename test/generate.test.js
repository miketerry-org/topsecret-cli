// generate.test.js:

const generate = require("../lib/generate.js");

test("generate: random to console", async () => {
  const options = {};
  generate(options);
});

test("generate: random to clipboard", async () => {
  const options = { clipboard: true };
  generate(options);
});

test("generate: random to key file", async () => {
  const options = { keyFile: "secret.key" };
  generate(options);
});

test("generate: password to console", async () => {
  const options = { password: "abcd-1234" };
  generate(options);
});

test("generate: password to clipboard", async () => {
  const options = { clipboard: true, password: "abcd-1234" };
  generate(options);
});

test("generate: password to key file", async () => {
  const options = { keyFile: "secret.key", password: "abcd-1234" };
  generate(options);
});
