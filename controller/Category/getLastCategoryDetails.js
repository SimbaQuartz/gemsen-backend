const router = require("express").Router();

const LastCategoryModel = require("../../models/LastCategoryModel");
const { ObjectId } = require("mongoose").Types;
const getLastCategoryDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    const lastCategoryData = await LastCategoryModel.find({
      nestedCategoryId: ObjectId(id),
    });

    res.json({
      message: "Fetched Successfully",
      lastCategoryData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getLastCategoryDetails;
