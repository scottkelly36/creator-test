exports.handleCustom = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({
      msg: "Sorry incorrect input",
    });
  } else {
    next(err);
  }
};

exports.handleNotFound = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({
      msg: err.msg,
    });
  } else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    err,
  });
};
