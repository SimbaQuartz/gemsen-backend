const router = require("express").Router();

const addOrder = require("../../controller/Order/AddOrder");

router.post("/addorder", addOrder);

module.exports = router;
