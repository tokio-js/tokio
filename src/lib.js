"use strict";
const init_1 = require("./runtime/init");
(0, init_1.init)(); // loads internals
// Exports the Tokio object
const tokio_1 = require("./tokio");
module.exports = tokio_1.Tokio;
