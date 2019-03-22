"use strict";

const mongojs = require("mongojs");
const db = mongojs("zoo", ["animals"]);

const express = require("express");
const app = express();

/*
db.animals.insert({
  name: "Panda"
}, function (err, data) {
  if (err) {
    console.log("Error: ", err);
  }

  console.log("data: ", data);
});
*/

// routes

app.get("/", (req, res) => {
  res.send("express app listening on 8080");
})

app.get("/find/:name", (req, res) => {
  const name = req.params.name;

  db.animals.find({
      name
    },
    function (err, data) {
      if (err) {
        return res.status(500).json({
          errorMessage: "internal server error"
        });
      }

      return res.json(data);
    });
});

app.get("/insert/:name", (req, res) => {
  const name = req.params.name;

  db.animals.insert({
      name
    },
    function (err, data) {
      if (err) {
        return res.status(500).json({
          errorMessage: "internal server error"
        });
      }

      return res.json(data);
    });
});

app.listen(8080, () => {
  console.log("express app listening on 8080")
});