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
          from: "category", // join from which model (mongodb schema name)
          localField: "categoryId", // jis model ke andar hain hmlog, uski ID jo jijn krni hai , foreign field se
          foreignField: "_id", // id from which we are joining
          as: "categoryDetails", // return data
        },
      },
      {
        $unwind: {
          path: "$categoryDetails",
        },
      },
    ]);

    res.json({
      message: "Delete succesfully",
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSubCategory;
