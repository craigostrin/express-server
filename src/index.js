import express from "express";
//* This is an object that gives you access to lots of props and methods
// const express = require("express");

//* We want to use it as a function to create our Express application
const app = express();

app.get("/", () => (request, response) => {
  console.log("here");
  response.send("Hello, World");
});

//* Without this, 'yarn start' will run the code once and finish
//* But we want an active server that's listening for requests
app.listen(3000, () => {
  console.log("🤖 Server running and listening on http://localhost:3000/");
});

//* Cool Express features
//  - Returns 404 by default
//  - Instead of large If statements based on URL endpoints, you can just
//    declare app.\method\
//    - app.get(endpoint, callback(request, response) )
//    - app.post(endpoint, (request, response) => {} ) etc
