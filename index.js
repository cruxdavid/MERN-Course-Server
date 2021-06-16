const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./src/config/keys");
require("./src/models/User");
require("./src/services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Init express
const app = express();

// Cookies usage
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Connect routes with express
require("./src/routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
