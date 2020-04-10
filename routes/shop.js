const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const adminData = require("./admin");

const router = express.Router();

router.get('/', (req, res, next)=>{
    /*res.sendFile(path.join(rootDir, "views", "shop.html"));*/
    const products = adminData.products;
    res.render("shop", {prods: products, pageTitle:"My Shop Home", path:"/"});
});

router.get("/aboutus", (req, res)=>{
    res.render("aboutus", {pageTitle:"About Us", path:"/aboutus"});
});

router.get("/contactus", (req, res) =>{
    res.render("contactus", {pageTitle:"Contact Us", path:"/contactus"});
});

module.exports = router;