const router = require("express").Router();

const User = require("../../models/UserModel");

router.post("/saved", async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const userAlreadyExists = await User.findOne({ email: email });

    if (userAlreadyExists) {
      res.status(500).json({ message: "User already exists" });
    }
    const user = new User({
      name: name,
      email,
      password,
      phone: phone,
      data: {
        name: name,
        email,
      },
    });
    await user.save();

    const accessToken = "1111";
    res.status(200).json({
      message: "Saved",
      user,
      accessToken,
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
