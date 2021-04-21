const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");

//bring all routes
const auth = require("./routes/api/auth");
const questions = require("./routes/api/questions");
const profile = require("./routes/api/profile");

const app = express();

//Middleware for bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database
mongoose
  .connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy")(passport);

//just for testing  -> route
app.get("/", (req, res) => {
  res.send("Hey there This is small version of stack overflow app .. Sorry for UI");
});

//actual routes
app.use("/api/auth", auth);
app.use("/api/questions", questions);
app.use("/api/profile", profile);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is running at ${port}`));