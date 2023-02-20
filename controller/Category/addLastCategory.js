const router = require("express").Router();

const LastCategoryModel = require("../../models/LastCategoryModel");

const addLastCategory = async (req, res, next) => {
  try {
    const { name, nestedCategoryId } = req.body;

    const lastCategory = new LastCategoryModel({
      name,
      nestedCategoryId,
    });
    await lastCategory.save();

    res.json({
      message: "saved successfully",
      lastCategory,
    });
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = addLastCategory;
