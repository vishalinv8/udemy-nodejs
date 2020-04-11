const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        path:"/admin/add-product",
        pageTitle:"Add Product"
    });
};

exports.postAddProduct = (req, res, next) => {
    let title = req.body.title;
    let imageUrl = req.body.imageUrl;
    let price = req.body.price;
    let description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
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


