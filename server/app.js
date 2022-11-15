const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs/promises");
const axios = require("axios");

//properties Controller import
const {
  getProperties,
  getProperty,
  updateProperty,
} = require("./controllers/properties.controller");

app.use(express.json());
app.use(cors());

//write Api data to JSON file

const writeFile = () => {
  return axios
    .get("https://crtr.dev/api.json")
    .then((result) => {
      return result.data.properties;
    })
    .then((result) => {
      return fs
        .writeFile("./apiData.json", JSON.stringify(result), "utf8")
        .then((result) => {
          console.log("file made");
        });
    });
};

//writeFile();

app.get("/properties", getProperties);
app.get("/properties/:property_id", getProperty);
app.patch("/properties/:property_id", updateProperty);

module.exports = app;
