const express = require("express");
const keys = require("./src/config/keys");
const mongoose = require("mongoose");
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
require("./src/models/User");
require("./src/services/passport");

// Init express
const app = express();

//Connect routes with express
require("./src/routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
