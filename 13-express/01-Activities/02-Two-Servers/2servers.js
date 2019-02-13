"use strict";

function getQuote(port){
  let quotes = [`You just got served on port: ${port}`, `Yo don't look like you belong on port: ${port}`];
  let min = 0;
  min = Math.ceil(min);
  let max = Math.floor(quotes.length);
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return quotes[random];
}

// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT01 = 7000;
const PORT02 = 7500;

// Create a generic function to handle requests and responses
function handleRequest01(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}
function handleRequest02(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server01 = http.createServer(handleRequest01);
const server02 = http.createServer(handleRequest02);

// Start our server so that it can begin listening to client requests.
server01.listen(PORT01, function() {
  // Log (server-side) when our server has started
  console.log(getQuote(PORT01));
});
server02.listen(PORT02, function () {
  // Log (server-side) when our server has started
  console.log(getQuote(PORT02));
});
