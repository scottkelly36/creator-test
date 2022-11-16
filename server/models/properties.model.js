const axios = require("axios");
const fs = require("fs/promises");
const path = require("path");
const propertyData = path.join(__dirname, "../apiData.json");

exports.selectProperties = () => {
  return fs.readFile(propertyData).then((result) => {
    if (JSON.parse(result).length === 0) {
      return Promise.reject({
        status: 404,
        msg: "No properties found",
      });
    } else {
      return JSON.parse(result);
    }
  });
};

exports.selectProperty = (id) => {
  return fs.readFile(propertyData).then((result) => {
    const property = JSON.parse(result).filter(
      (property) => property.property_id === id
    );
    if (property.length === 0) {
      return Promise.reject({ status: 404, msg: "Property cant be found" });
    } else {
      return property;
    }
  });
};

exports.patchProperty = (id, { book_now_url }) => {
  return fs
    .readFile(propertyData)
    .then((result) => {
      const properties = JSON.parse(result);
      return [
        properties.filter((property) => property.property_id === id),
        properties,
      ];
    })
    .then(([property, properties]) => {
      const newProperty = property;
      newProperty[0].contracts[0].book_now_url = book_now_url;

      for (let i = 0; i < properties.length; i++) {
        if (properties[i].property_id === newProperty[0].property_id) {
          properties.splice(i, 1);
        }
      }
      properties.push(newProperty[0]);
      return properties;
    })
    .then((properties) => {
      return fs.writeFile(propertyData, JSON.stringify(properties), "utf8");
    })
    .then(() => {
      return "success";
    });
};
