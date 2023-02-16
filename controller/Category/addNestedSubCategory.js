const router = require("express").Router();

//const User = require("../../models/UserModel");
const NestedSubCategory = require("../../models/NestedSubCategoryModel");

const addNestedSubCategory = async (req, res, next) => {
  try {
    const { name, subCategoryId } = req.body;
    const nestedSubCategory = new NestedSubCategory({
      name,
      subCategoryId,
    });
    await nestedSubCategory.save();
    res.json({ message: "Saved Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = addNestedSubCategory;
