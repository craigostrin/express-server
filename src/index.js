//* This is an object that gives you access to lots of props and methods
import express from "express";
//* logger
import morgan from "morgan";

//* We want to use it as a function to create our Express application
const app = express();

//*** INSTALL EXPRESS MIDDLEWARE ***

//* JSON preprocessor
//  - Preprocesses the request data and writes it into 'request.body'
app.use(express.json());
//* morgan logger
//  - Logs request data to the terminal ('format' arg)
app.use(morgan("dev"));

// *********************************

app.get("/", (request, response) => {
  response.send("Hello, World");
});

app.get("/users", (req, res) => {
  res.json([{ name: "Goku" }, { name: "Gohan" }, { name: "Vegeta" }]);
});

app.post("/users", (req, res) => {
  let newUser = req.body;
  res.status(201).json({
    message: "User created.",
    entry: newUser,
  });
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
//  - Send JSON by using response.json()
