const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setup mongo connection
var db = process.env.MONGODB_URI || "mongodb://localhost/CommunityDB"

mongoose.connect(db, function(err) {
  if (err) {
    console.log(error);
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

app.listen(PORT, () => {
  console.log("API server now on port ${PORT}!");
});
