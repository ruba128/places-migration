const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('dotenv').config()

var corsOptions = {
  origin: process.env.ORIGIN
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('../models/index.js')

// db.sequelize.sync().then(() => {
//   console.log("sync completed");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./routes/place.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});