const router = require("express").Router();
// const createError = require("http-errors");
const User = require("../models/userModel");

const { ObjectId } = require("mongoose").Types;

// const apiRoutes = require("./api");

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

router.post("/api/saved", async (req, res, next) => {
  try {
    const { name1, email, password, phone1 } = req.body;
    const user = new User({
      name: name1,
      email,
      password,
      phone: phone1,
      data: {
        name: name1,
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
    const user = await User.find({});
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

    const user = await User.findOne({
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
router.put("/api/updatedata/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name1 } = req.body;

    const user = await User.findOne({
      _id: ObjectId(id),
    });

    user.name = name1;

    await user.save();

    // const user = await User.findOneAndUpdate(
    //   {
    //     _id: ObjectId(id),
    //   },
    //   {
    //     name: name1,
    //     email: "11@11.com",
    //     phone: 37982734983423,
    //   },
    //   {
    //     new: true,
    //   }
    // );

    res.json({
      message: "Updated succesfully",
      user,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/api/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOneAndDelete({
      name: "Areeb",
    });

    res.json({
      message: "Deleted succesfully",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// pathParams,query

//CRUD
//create
//read
