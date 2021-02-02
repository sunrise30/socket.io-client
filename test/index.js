const { browser } = require("./support/env");

// whitelist some globals to avoid warnings
if (browser) {
  window.mocha.globals(["___eio", "eio_iframe_*"]);
}

require("./url.ts");

// browser only tests
require("./connection.ts");
require("./socket.ts");
