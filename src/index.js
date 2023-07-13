//* This is an object that gives you access to lots of props and methods
import express from "express"
//* logger
import morgan from "morgan"

//* We want to use it as a function to create our Express application
const app = express()

//*** INSTALL EXPRESS MIDDLEWARE ***
//? Install order matters
// morgan is special: you have to install it first (for correct time calculation),
// but it makes sure to print to the terminal last

//* morgan logger
//  - Logs request data to the terminal ('format' arg)
app.use(morgan("dev"))
app.use(myHelloMiddleware)
app.use(myDateMiddleware)
//* JSON preprocessor
//  - Preprocesses the request data and writes it into 'request.body'
//  - express.json() isn't technically middleware, it's a middleware creator
//    (note that we're calling a function, which returns the callback we need)
//* app.use(express.json())
app.use(customBodyParser) //our own 'express.json()'

function myDateMiddleware(req, res, next) {
  console.log(new Date())
  next()
}

function myHelloMiddleware(req, res, next) {
  console.log("Hello!")
  next()
}

// Let's make our own version of 'express.json()'
function customBodyParser(req, res, next) {
  let body = []
  req
    .on("data", (chunk) => {
      body.push(chunk)
    })
    .on("end", () => {
      body = Buffer.concat(body).toString()
      // the req continues getting passed on to the other middlewares, and
      // then finally to the .gets, .posts, etc
      req.body = JSON.parse(body)
      //console.log(req.body)
      next()
    })
}

// *********************************

app.get("/", (request, response) => {
  response.send("Hello, World")
})

app.get("/users", (req, res) => {
  res.json([{ name: "Goku" }, { name: "Gohan" }, { name: "Vegeta" }])
})

app.post("/users", (req, res) => {
  let newUser = req.body
  res.status(201).json({
    message: "User created.",
    entry: newUser,
  })
})

//* Without this, 'yarn start' will run the code once and finish
//* But we want an active server that's listening for requests
app.listen(3000, () => {
  console.log("🤖 Server running and listening on http://localhost:3000/")
})

//* Cool Express features
//  - Returns 404 by default
//  - Instead of large If statements based on URL endpoints, you can just
//    declare app.\method\
//    - app.get(endpoint, callback(request, response) )
//    - app.post(endpoint, (request, response) => {} ) etc
//  - Send JSON by using response.json()
