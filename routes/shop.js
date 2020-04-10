const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const adminData = require("./admin");

const router = express.Router();

router.get('/', (req, res, next)=>{
    const products = adminData.products;
    /*res.sendFile(path.join(rootDir, "views", "shop.html"));*/
    var ViewData = {
        path:"/",
        prods: products,
        pageTitle:"My Shop hbs",
        hasProducts: products.length > 0 ? true:false,
        activeShop: true,
        productCSS: true
    };
    res.render("shop", ViewData);
});

router.get("/aboutus", (req, res)=>{
    var ViewData = {
        path:"/aboutus",
        pageTitle:"About Us",
        activeAboutus:true
    };
    res.render("aboutus", ViewData);
});

router.get("/contactus", (req, res) =>{
    var ViewData = {
        path:"/contactus",
        pageTitle:"Contact Us",
        activeAboutus:true
    };
    res.render("contactus",ViewData);
});

module.exports = router;