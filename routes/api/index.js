const router = require("express").Router();

const authRoutes = require("./AuthRouter");

router.use("/auth", authRoutes);

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;