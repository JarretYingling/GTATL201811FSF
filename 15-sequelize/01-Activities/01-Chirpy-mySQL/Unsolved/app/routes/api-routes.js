// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", (req, res) => {
    console.log(req.body)
    connection.query("SELECT * FROM chirps",
      function (mysqlError, mysqlResponse) {
        res.status(200).json(mysqlResponse)
      })
  })

  // Add a chirp
  app.post("/api/new", (req, res) => {
    console.log(req.body)
    connection.query("INSERT INTO chirps (author, chirp, timedate) VALUES (?, ?, ?)",
      [req.body.author, req.body.chirp, req.body.timedate],
      function (mysqlError) {
        if (mysqlError) {
          res.status(500).end()
        }
        res.status(201).end()
      })
  })
}