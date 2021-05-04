// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const menuRoutes = require("./routes/menu");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const restaurantRoutes = require("./routes/orders");
const historyRoutes = require("./routes/history");
const categoryRoutes = require("./routes/category")
const logOutRoutes = require("./routes/logout")
const userRoutes = require("./routes/users")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: mount other resources here, using the same pattern above
// app.use("/",menuRoutes(db)); // ---------
app.use("/foods", menuRoutes(db));
app.use("/categories", categoryRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/orders", restaurantRoutes(db));
app.use("/history", historyRoutes(db));
app.use("/logout", logOutRoutes(db));
app.use("/users", userRoutes(db));
app.use(function(req, res, next) {
  if(req.session.userName){
    res.locals.users = req.session.userName;
  } else{
    res.locals.users = "";
  }
  next();
});

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  db.query(`SELECT * FROM users;`)
    .then(data => {
      const users = data.rows;
      let username = res.locals.users;
      res.render("index", {users, username})
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
