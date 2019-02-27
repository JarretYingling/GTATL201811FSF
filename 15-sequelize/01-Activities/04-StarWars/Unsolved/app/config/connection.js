// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
// var mysql = require("mysql");

// Setting up our connection information
/*
var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "starwars"
  }
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);
*/

// require dotenv
const dotenv = require("dotenv").config({
  path: "git/.env"
})

var Sequelize = require("sequelize");

var connection = new Sequelize(
  "starwars",
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
)

/*
// Connecting to the database.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
*/

// Exporting our connection
module.exports = connection;