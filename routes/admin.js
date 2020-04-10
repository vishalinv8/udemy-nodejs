const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log(path.join(rootDir, "views", "add-product.html"));
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});
module.exports = router;


