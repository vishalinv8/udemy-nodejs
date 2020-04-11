const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    var ViewData = {
        path:"/admin/add-product",
        pageTitle:"Add Product Form",
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    };
    res.render("add-product", ViewData);
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    const products = Product.fetchAll();
    var ViewData = {
        path:"/",
        prods: products,
        pageTitle:"My Shop",
        hasProducts: products.length > 0 ? true:false,
        activeShop: true,
        productCSS: true
    };
    res.render("shop", ViewData);
};

