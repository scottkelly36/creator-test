const axios = require("axios");

exports.selectProperties = () => {
  return axios.get("https://crtr.dev/api.json").then((result) => {
    return result.data.properties;
  });
};

exports.selectProperty = (id) => {
  return axios.get("https://crtr.dev/api.json").then((result) => {
    return result.data.properties.filter(
      (property) => property.property_id === id
    );
  });
};
