"use strict";

// handlebars

const dotenv = require("dotenv")
    .config({
        //symlink git = /Users/macos_highsierra_ss/git
        path: "git/.env"
    });
// dotenv error handling
if (dotenv.error) throw dotenv.error

const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

//app.engine("handlebars") ???
//app.set("???")

app.get("/", function (request, response){

});