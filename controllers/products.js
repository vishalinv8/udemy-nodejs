const products = [];

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
    products.push({title:req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
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

exports.aboutus = (req, res)=>{
    var ViewData = {
        path:"/aboutus",
        pageTitle:"About Us",
        activeAboutus:true
    };
    res.render("aboutus", ViewData);
};

exports.contactus = (req, res) =>{ 
    var ViewData = {
        path:"/contactus",
        pageTitle:"Contact Us",
        activeAboutus:true
    };
    res.render("contactus",ViewData);
};