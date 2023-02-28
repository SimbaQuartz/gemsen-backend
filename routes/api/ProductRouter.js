const router = require("express").Router();

const addProduct = require("../../controller/Product/AddProduct");
const getProduct = require("../../controller/Product/getProduct");

router.post("/addproduct", addProduct);
router.get("/:id", getProduct);

module.exports = router;
