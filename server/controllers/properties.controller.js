const {
  selectProperties,
  selectProperty,
  patchProperty,
} = require("../models/properties.model");

exports.getProperties = (req, res, next) => {
  selectProperties()
    .then((properties) => {
      res.status(200).send({ properties });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getProperty = (req, res, next) => {
  const { property_id } = req.params;

  selectProperty(property_id)
    .then((property) => {
      res.status(200).send({ property });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateProperty = (req, res, next) => {
  const { property_id } = req.params;
  const newUrl = req.body;
  patchProperty(property_id, newUrl)
    .then((property) => {
      res.status(200).send({ msg: "Book now link updated" });
    })
    .catch((err) => {
      next(err);
    });
};
