const router = require("express").Router();

const NestedSubCategoryModel = require("../../models/NestedSubCategoryModel");
const { ObjectId } = require("mongoose").Types;
const getNestedSubCategoryDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    const getNestedData = await NestedSubCategoryModel.find({
      subCategoryId: ObjectId(id),
    });

    res.json({
      message: "Fetched Successfully",
      getNestedData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getNestedSubCategoryDetails;
