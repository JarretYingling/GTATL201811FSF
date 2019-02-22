"use strict";

const npmGlobal = require("config.js").npmGlobal;

const dotenv = require("config.js").dotenv

dotenv.config({
    //symlink git = /Users/macos_highsierra_ss/git
    path: 'git/.env'
});

// mysql
const mysql = require(`${npmGlobal}mysql`);
const connection = mysql.createConnection({
    host: process.env.MYSQL_LOCALHOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "moviePlanner_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(`mysql connected as id: ${connection.threadId}`);
});

exports.modules.connection = connection;