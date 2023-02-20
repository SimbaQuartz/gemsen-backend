const router = require("express").Router();

const Category = require("../../models/CategoryModel");
const { ObjectId } = require("mongoose").Types;
const getMainCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.aggregate([
      {
        $match: { _id: ObjectId(id) },
      },
      {
        $lookup: {
          from: "subCategory",
          // localField: "_id",
          // foreignField: "categoryId",
          let: { abc: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$categoryId", "$$abc"],
                },
              },
            },
            {
              $lookup: {
                from: "nestedSubCategory",
                // localField: "_id",
                // foreignField: "subCategoryId",
                let: { id: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$subCategoryId", "$$id"],
                      },
                    },
                  },
                  {
                    $lookup: {
                      from: "lastCategory",
                      localField: "_id",
                      foreignField: "nestedCategoryId",
                      as: "lastCategoryData",
                    },
                  },
                ],
                as: "nestedSubCategory",
              },
            },
          ],
          as: "subCategoryDetails",
        },
      },
    ]);

    res.json({
      message: "Fetched Successfully",
      category: category[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getMainCategory;
