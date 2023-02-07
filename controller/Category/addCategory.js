const router = require("express").Router();

//const User = require("../../models/UserModel");
const Category = require("../../models/CategoryModel");

const AddCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = new Category({
      name,
    });
    await category.save();

    res.json({
      message: "saved successfully",
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = AddCategory;
