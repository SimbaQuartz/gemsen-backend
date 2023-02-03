const router = require("express").Router();

const User = require("../../models/UserModel");

router.post("/saved", async (req, res, next) => {
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

router.get("/get", async (req, res, next) => {
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
router.get("/getSingleData/:id", async (req, res, next) => {
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
router.put("/updatedata/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name1 } = req.body;

    // const user = await User.findOne({
    //   _id: ObjectId(id),
    // });

    // console.log(user);

    // user.name = name1;
    // user.data.name = name1;

    // await user.save();

    const user = await User.findOneAndUpdate(
      { _id: ObjectId(id) },
      { name: name1, "data.name": name1 },
      { new: true }
    );

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

    await User.findOneAndDelete({
      _id: ObjectId(id),
    });

    res.json({
      message: "Deleted succesfully",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
