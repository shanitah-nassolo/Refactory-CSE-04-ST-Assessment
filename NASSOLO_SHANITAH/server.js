//dependecies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');






const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",// used to sign IDs
  resave: false,
  saveUninitialized: false
});


require('dotenv').config();




//import models
const Form= require('./models/form');





//importing routes
const formRoutes = require('./routes/formRoutes');





//instatiations
const app = express();
exports.app = app;
const port = 5700;


//configurations

// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });




//set view engine to pug
app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));// specify the view directory

//middleware


app.use(express.static(path.join(__dirname, "public")));//specify a folder for static files
app.use(express.urlencoded({ extended: true })); //helps to parse data from forms
app.use(express.json());//helps to capture data in json format



//added
//express session configs
app.use(expressSession);//express session
app.use(passport.initialize());//initialise passport
app.use(passport.session());//use passport session


// //passport configs
// passport.use(Signup.createStrategy());//us the local strategy
// passport.serializeUser(Signup.serializeUser());//assign a serial number to a user in the system
// passport.deserializeUser(Signup.deserializeUser());//the serial number is destroyed on logout





















//middleware


app.use(express.static(path.join(__dirname, "public")));//specify a folder for static files
app.use(express.urlencoded({ extended: true })); //helps to parse data from forms
app.use(express.json());//helps to capture data in json format



//added
//express session configs
app.use(expressSession);//express session
app.use(passport.initialize());//initialise passport
app.use(passport.session());//use passport session


passport.use(Signup.createStrategy());//us the local strategy
passport.serializeUser(Signup.serializeUser());//assign a serial number to a user in the system
passport.deserializeUser(Signup.deserializeUser());//the serial number is destroyed on logout








app.use('/', formRoutes)







app.get("*", (req, res) => {
  res.send("error page does not exist)");
});

//Bootstrapping the server
// server
app.listen(port, () => console.log(`listening on port ${port}`));//string interporation