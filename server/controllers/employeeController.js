const employees = require("../models/employee");

exports.getAll = async (req, res, next) => {
  if (req.query.price) {
    res.json(await employees.filterByPrice(req.query.price));
  } else {
    res.json(await employees.find());
  }
};

exports.save = async (req, res, next) => {
  const cate = new employees(req.body).save();
  res.json(cate);
};

exports.deleteById = async (req, res) => {
  await employees.findByIdAndDelete(req.params.id);
  res.json({ _id: req.params.id });
};
