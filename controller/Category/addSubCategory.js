const router = require("express").Router();

//const User = require("../../models/UserModel");
const SubCategory = require("../../models/SubCategoryModel");

const AddSubCategory = async (req, res, next) => {
  try {
    const { name, categoryId } = req.body;
    const subcategory = new SubCategory({
      name,
      categoryId,
    });
    await subcategory.save();

    res.json({
      message: "saved successfully",
      subcategory,
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = AddSubCategory;
