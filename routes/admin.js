const path = require("path");

const fs = require("fs");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product");
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    products.push({title:req.body.title});
    res.redirect('/');
});
module.exports.adminRoutes = router;
module.exports.products = products;




