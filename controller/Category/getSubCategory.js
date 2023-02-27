const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const SubCategory = require("../../models/SubCategoryModel");
const { ObjectId } = require("mongoose").Types;
const getSubCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await SubCategory.aggregate([
      {
        $match: { categoryId: ObjectId(id) },
      },
      {
        $lookup: {
          from: "nestedSubCategory",
          localField: "_id",
          foreignField: "subCategoryId",
          as: "nestedSubCategory",
        },
      },
    ]);

    res.json({
      message: "Fetched succesfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSubCategory;
