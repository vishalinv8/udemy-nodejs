const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("shop/index", {
            path:"/",
            prods: products,
            pageTitle:"Shop Home",
            hasProducts: products.length > 0 ? true:false
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("shop/product-list", {
            path:"/products",
            prods: products,
            pageTitle:"Products",
            hasProducts: products.length > 0 ? true:false,
        });
    });
};

exports.getCart = (req, res, next)=>{
    res.render('shop/cart', {
        path:"/cart",
        pageTitle:"Your cart"
    });
};

exports.getCheckout = (req, res, next)=>{
    res.render("shop/checkout", {
        path:"/checkout",
        pageTitle:"Your checkout"
    });
};

exports.getOrders = (req, res, next)=>{
    res.render("shop/orders", {
        path:"/orders",
        pageTitle:"Your orders"
    });
};

exports.getProduct = (req, res, next)=>{
    const productId = req.params.productId;
    console.log(productId);
    Product.findById(productId, (prodInfo) => {
        console.log(prodInfo);
    });
    res.redirect('/');
};