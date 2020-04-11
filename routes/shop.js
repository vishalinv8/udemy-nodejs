const path = require("path");

const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

router.get('/', productsController.getProducts);

router.get("/aboutus", productsController.aboutus);

router.get("/contactus", productsController.contactus);

module.exports = router;