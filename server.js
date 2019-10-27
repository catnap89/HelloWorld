const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

//Require the http module
const http = require("http").Server(app);

//Require the socket.io module
const io = require("socket.io")

//To listen to messages
const socket = io(http);
socket.on("connection", function(socket) {
  console.log("user connected");
});


// socket.on("connection", (socket) => {
//   console.log("user connected");
// });

const path = require("path");




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setup mongo connection
var db = process.env.MONGODB_URI || "mongodb://localhost/CommunityDB"

mongoose.connect(db, function(err) {
  if (err) {
    console.log(err);
  }

  else {
    console.log("mongoose connection is successful")
  }
});



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Require routes file
require("./routes/apiRoutes")(app);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  
});


//Listening to app port
app.listen(PORT, () => {
  console.log("API server now on port ${PORT}!");
});


//Listening to socket
socket.on("chat message", function(msg) {
  console.log("message: " + msg);

//broadcast message to everyone in port:5000 except yourself.
socket.broadcast.emit("received", { message: msg });
});