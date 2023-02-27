const router = require("express").Router();

const addProduct = require("../../controller/Product/AddProduct");

router.post("/addproduct", addProduct);

module.exports = router;
