const router = require("express").Router();

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
