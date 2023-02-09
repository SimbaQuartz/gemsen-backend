const router = require("express").Router();

//const User = require("../../models/UserModel");
const Category = require("../../models/CategoryModel");

const AddCategory = async (req, res, next) => {
  try {
    const { name, userId } = req.body;
    const category = new Category({
      name,
      userId,
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
