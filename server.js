const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("bodyParser");
const db = require("./models/Users");
mongoose.Promise = global.Promise;

const PORT = process.env || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/improvements";
mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`Now listening to your favorite pirate radio station ${PORT}`);
});
