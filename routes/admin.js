const path = require("path");

const fs = require("fs");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    /*res.sendFile(path.join(rootDir, "views", "add-product.html"));*/
    var ViewData = {
        path:"/admin/add-product",
        pageTitle:"Add Product Form",
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    };
    res.render("add-product", ViewData);

});
router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title});
    res.redirect('/');
});
module.exports.adminRoutes = router;
module.exports.products = products;




