"use strict";

// Dependencies
const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = 8080;

// Create our server
const server = http.createServer(handleRequest);

let errHTML = "";

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  let path = req.url;

  let filename = "";
  switch (path) {
    case "/":
      filename = `${__dirname}/index.html`
      return displayPage(path, req, res, filename);

    case "/favfoods":
      filename = `${__dirname}/favfoods.html`
      return displayPage(path, req, res, filename);

    case "/favmovies":
      filename = `${__dirname}/favmovies.html`
      return displayPage(path, req, res, filename);

    case "/favcss":
      filename = `${__dirname}/favcss.html`
      return displayPage(path, req, res, filename);

    default:
    errHTML = `
      <html>
        <body>
          <h1>404 Not Found </h1>
          <p>The page you were looking for: ${path} can not be found</p>
        </body>
      </html>
    `;
    res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.end(errHTML);
      break;
  }
}

function displayPage(path, req, res, filename) {
  // Here we use the fs package to read our index.html file
  return fs.readFile(filename, function (err, data) {
    if (err) throw err;
    // Respond to client with HTML page by specifically telling browser that we are delivering an html file
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});