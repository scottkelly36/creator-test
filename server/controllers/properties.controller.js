const {
  selectProperties,
  selectProperty,
} = require("../models/properties.model");

exports.getProperties = (req, res, next) => {
  selectProperties().then((properties) => {
    res.status(200).send({ properties });
  });
};

exports.getProperty = (req, res, next) => {
  const { property_id } = req.params;

  selectProperty(property_id).then((property) => {
    res.status(200).send({ property });
  });
};
