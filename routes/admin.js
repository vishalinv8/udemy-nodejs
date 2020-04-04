const express = require("express");
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<html>
        <head>
            <title>Add Product</title>
        </head>
        <body>
            <form action="/products" method="POST">
                <input type="text" name="title">
                <button type="submit" name="addProduct" value="addProduct"> Add Product </button>
            </form>
        </body>
    </html>`);
});

router.post('/products', (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.addProduct);
    res.redirect('/');
});

module.exports = router;


