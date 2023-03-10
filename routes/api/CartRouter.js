const router = require("express").Router();

const addToCart = require("../../controller/AddToCart/addCart");
const getCart = require("../../controller/AddToCart/getCart");
const deleteCart = require("../../controller/AddToCart/deleteCart");

const validateAccessToken = require("../../services/jwtValidation");
router.post("/add", validateAccessToken, addToCart);
router.get("/", validateAccessToken, getCart);
router.delete("/:id", validateAccessToken, deleteCart);

module.exports = router;
