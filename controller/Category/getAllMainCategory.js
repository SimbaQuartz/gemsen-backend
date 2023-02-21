const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const { ObjectId } = require("mongoose").Types;
const getAllMainCategory = async (req, res, next) => {
  try {
    const category = await Category.find({});

    res.json({
      message: "Fetched Successfully",
      category: category,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllMainCategory;
