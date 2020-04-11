const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        path:"/admin/add-product",
        pageTitle:"Add Product"
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render("admin/allproducts", {
            path:"/admin/products",
            prods: products,
            pageTitle:"Admin Products",
            hasProducts: products.length > 0 ? true:false,
        });
    });
};


