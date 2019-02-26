"use strict";

// require dotenv for local environemnt variables
const dotenv = require("dotenv")
  .config({
    //symlink git = /Users/macos_highsierra_ss/git
    path: "git/.env"
  });
// dotenv error handling
if (dotenv.error) throw dotenv.error

var express = require("express");

var app = express();
var PORT = 3000;

// convert to domain alias
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("mysql id: " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  console.log("successful get");
  res.send("successful get");
});

/*
// validate user access permission
function verifyId(req, res, next){
  const id = parseInt(req.params.id);
  if (id ===1) {
    res.json({message: "failed user validation"});
  } else {
    next();
  }
}

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", verifyId, function (req, res) {

});
*/

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {

});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {

});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {

});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("express listener: http://localhost:" + PORT);
});
