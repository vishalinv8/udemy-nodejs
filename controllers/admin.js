const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        path:"/admin/add-product",
        pageTitle:"Add Product",
        editing:false
    });
};
exports.postAddProduct = (req, res, next) => {
    let title = req.body.title;
    let price = req.body.price;
    let imageUrl = req.body.imageUrl;
    let description = req.body.description;
    const product = new Product(null, title, imageUrl, price, description);
    product.save();
    res.redirect('/admin/products');
};
exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/admin/products');
    }
    if(!productId){
        res.redirect('/admin/products');
    }
    Product.findById(productId, (productInfo) => {
        res.render("admin/edit-product", {
            path:"/products",
            pageTitle:"Edit Product",
            product:productInfo,
            editing:editMode
        });
    });
};
exports.postEditProduct = (req, res, next) => {
    let productId = req.body.productId;
    let updatedTitle = req.body.title;
    let updatedPrice = req.body.price;
    let updatedImageUrl = req.body.imageUrl;
    let updatedDescription = req.body.description;
    let updatedProduct = new Product(productId, updatedTitle, updatedImageUrl, updatedPrice, updatedDescription);
    updatedProduct.save();
    res.redirect('/admin/products');   
};
exports.getProducts = (req, res, next) => {
    Product.fetchAll( (products) => {
        res.render("admin/allproducts", {
            path:"/admin/products",
            prods: products,
            pageTitle:"Admin Products",
            hasProducts: products.length > 0 ? true:false,
        });
    });
};