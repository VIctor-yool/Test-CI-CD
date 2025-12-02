// Compatibility entrypoint for hosts that expect `src/run`
// This simply imports the project root `index.js` which starts the server.
import "../index.js";

// Export nothing; importing this file runs the server side-effects in index.js
