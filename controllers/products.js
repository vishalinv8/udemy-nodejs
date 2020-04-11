const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    var ViewData = {
        path:"/admin/add-product",
        pageTitle:"Add Product",
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    };
    res.render("admin/add-product", ViewData);
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        var ViewData = {
            path:"/",
            prods: products,
            pageTitle:"My Shop",
            hasProducts: products.length > 0 ? true:false,
            activeShop: true,
            productCSS: true
        };
        res.render("shop/shop", ViewData);
    });
};

