const router = require("express").Router();

const addProduct = require("../../controller/Product/AddProduct");
const getProduct = require("../../controller/Product/getProduct");
const getSingleProduct = require("../../controller/Product/getSingleProduct");

router.post("/addproduct", addProduct);
router.get("/:categoryId", getProduct);
router.get("/singleProduct/:id", getSingleProduct);

module.exports = router;
