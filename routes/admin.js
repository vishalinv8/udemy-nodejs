const path = require("path");

const fs = require("fs");

const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

// admin/add-product
router.get('/add-product', adminController.getAddProduct);

// admin/add-roduct
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProductFrm);

router.post('/edit-product', adminController.updateProduct);

// admin/products
router.get('/products', adminController.getProducts);

module.exports = router;




