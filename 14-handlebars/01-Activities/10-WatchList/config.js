"use strict";

// npm global install directory
const npmGlobal = "/usr/local/lib/node_modules/";

// dotenv
const dotenv = require(`${npmGlobal}dotenv`);

exports.modules.npmGlobal = npmGlobal;
exports.modules.dotenv = dotenv;