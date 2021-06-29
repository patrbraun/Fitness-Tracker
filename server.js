/* eslint-disable prettier/prettier */
// Requiring necessary npm packages
const express = require("express");
const routes = require("./controllers");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Requiring our routes
app.use(routes);

//logging a message to the user upon success
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
})
