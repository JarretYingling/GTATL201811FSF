"use strict";
const log = console.log;

const orm = require("./orm.js");

const dotenv = require("dotenv").config({path: "git/.env"});
if (dotenv.error) throw dotenv.error;

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "parties_db"
})

connection.connect(function (err){
    if (err) {
        console.error(`mysql connection error: ${err.stack}`)
        return;
    }
    log(`mysql id: ${connection.threadId}`)
});


module.exports = connection;