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

exports.getEditProductFrm = (req, res, next) =>{
    const productId = req.params.productId;
    Product.findById(productId, (productInfo) => {
        res.render("admin/edit-product", {
            path:"/products",
            pageTitle:"Edit Product",
            product:productInfo
        });
    });
};

exports.updateProduct = (req, res, next) => {
    let productId = req.body.productId;
    let updateData = {
        price:req.body.price,
        imageUrl:req.body.imageUrl,
        description:req.body.description
    };
    
    Product.updateProduct(productId, updateData, (response) => {
        if(response === 'success'){
            res.redirect('/admin/edit-product/'+productId);
        }
        else{
            res.redirect("/");
        }
    });
    
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


