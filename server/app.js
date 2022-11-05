const express = require("express");
const app = express();
const cors = require("cors");

//properties Controller import
const {
  getProperties,
  getProperty,
} = require("./controllers/properties.controller");

app.use(express.json());
app.use(cors());

app.get("/properties", getProperties);
app.get("/properties/:property_id", getProperty);

module.exports = app;
