const Product = require("../models/product");

const Cart = require('../models/cart');

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

exports.getCart = (req, res, next) => {
    Cart.getCart(allCarts => {
        //console.log("allCarts", JSON.stringify(allCarts));
        Product.fetchAll(allProducts => {
            //console.log("allProducts", JSON.stringify(allProducts));
            let cartProducts = [];
            for(let productItem of allProducts){
                let cartProductData = allCarts.products.find(cartProd => cartProd.id === productItem.id);
                if(cartProductData){
                    cartProducts.push({product:productItem, qty: cartProductData.qty, totalPrice: allCarts.totalPrice});
                }
            }
            res.render('shop/cart', {
                path:"/cart",
                pageTitle:"Your cart",
                cartItems:cartProducts
            }); 
            //console.log("cartProducts", JSON.stringify(cartProducts));
        });
    });
       
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
  };

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path:"/checkout",
        pageTitle:"Your checkout"
    });
};

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path:"/orders",
        pageTitle:"Your orders"
    });
};

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, (prodInfo) => {
        if(typeof prodInfo !== 'undefined'){
            res.render("shop/product-detail", {
                path:"/products",
                product:prodInfo,
                pageTitle:prodInfo.title + "  Product",
                extra:""
            });
        }
    });
};