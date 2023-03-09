const router = require("express").Router();

const addOrder = require("../../controller/Order/AddOrder");
const validateAccessToken = require("../../services/jwtValidation");

router.post("/addorder", validateAccessToken, addOrder);

module.exports = router;
