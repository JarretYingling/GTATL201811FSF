"use strict";

// npm global install directory
const npmGlobal = "/usr/local/lib/node_modules/";

// express
const express = require(`${npmGlobal}express`);
const app = express();

// express-handlebars
const exphbs = require(`${npmGlobal}express-handlebars`);

// dotenv
const dotenv = require(`${npmGlobal}dotenv`)
    .config({
        //symlink git = /Users/macos_highsierra_ss/git
        path: 'git/.env'
    });
// dotenv error handling
if (dotenv.error) throw dotenv.error

// mysql
const mysql = require(`${npmGlobal}mysql`);
const connection = mysql.createConnection({
    host: process.env.MYSQL_LOCALHOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "wishes_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(`mysql connected as id: ${connection.threadId}`);
});

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.EXPRESS_PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    connection.query("SELECT * FROM wishes;", function (err, data) {
        if (err) throw err;
        console.log(data)
    });
});

app.post("/", function (req, res) {
    connection.query("SELECT * FROM wishes;", function (err, data) {
        if (err) throw err;
        console.log("POST")
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`express listening on: http://localhost: ${PORT}`);
});