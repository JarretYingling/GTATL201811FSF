"use strict";

const npmGlobal = require("config.js").npmGlobal;
const connection = require("mysql.js").connection;

// express
const express = require(`${npmGlobal}express`);
const app = express();

// express-handlebars
const exphbs = require(`${npmGlobal}express-handlebars`);

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