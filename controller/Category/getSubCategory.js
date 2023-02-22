const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const SubCategory = require("../../models/SubCategoryModel");
const { ObjectId } = require("mongoose").Types;
const getSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await SubCategory.find({ categoryId: ObjectId(id) });

    res.json({
      message: "Fetched succesfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSubCategory;
