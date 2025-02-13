// createClipboard.js:

"use strict";

async function createClipboard() {
  try {
    return (await import("clipboardy")).default;
  } catch (err) {
    console.error("Error loading clipboardy:", err);
    process.exit(1);
  }
}

module.exports = createClipboard;
// export function to import clipboardy
module.exports = createClipboard;
