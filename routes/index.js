const router = require("express").Router();
// const createError = require("http-errors");
const UserModel = require("../models/userModel");
const { ObjectId } = require("mongoose").Types;

// const apiRoutes = require("./api");

router.post("/api/saved", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new UserModel({
      name,
      email,
      password,
      data: {
        name,
        email,
      },
    });
    await user.save();
    res.json({
      message: "Saved",
      user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/api/get", async (req, res, next) => {
  try {
    const user = await UserModel.find({});
    res.json({
      message: "fetched succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
});
router.get("/api/getSingleData/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findOne({
      _id: ObjectId(id),
    });
    res.json({
      message: "fetched succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
