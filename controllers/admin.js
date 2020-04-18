const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then((results)=>{
    console.log("Product Added!");
    res.redirect('/');
  }).catch((error)=>{
    console.log(error);
  }); 
  // Product.create({
  //   title: title,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  //   userId: req.user.id
  // }).then((results)=>{
  //   console.log("Product Added!");
  //   res.redirect('/');
  // }).catch((error)=>{
  //   console.log(error);
  // });  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts({where:{id:prodId}})
  .then((products)=>{
      if (!products[0]) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: products[0]
    });
  }).catch((error)=>{console.log(error)});

  // Product.findByPk(prodId).then((product) => {
  //   if (!product) {
  //     return res.redirect('/');
  //   }
  //   res.render('admin/edit-product', {
  //     pageTitle: 'Edit Product',
  //     path: '/admin/edit-product',
  //     editing: editMode,
  //     product: product
  //   });
  // }).catch((error)=>{
  //   console.log(error);
  // });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId).then((product)=>{
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.imageUrl = updatedImageUrl;
    product.description = updatedDesc;
    return product.save();
  }).then(()=>{
    console.log("Product Updated!");
    res.redirect('/admin/products');    
  }).catch((error)=>{console.log(error)});
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts()
  .then((products) => {
    console.log("Admin products with seq relation");
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch((error)=>{
    console.log(error);
  });

  // Product.findAll().then((products) => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // }).catch((error)=>{
  //   console.log(error);
  // });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findByPk(prodId).then((product)=>{
    return product.destroy();
  }).then((results)=>{
    console.log("Product Deleted!");
    res.redirect('/admin/products');
  }).catch((error)=>{
    console.log(error);
  });

  // Product.destroy({where:{id:prodId}}).then((results)=>{
  //   res.redirect('/admin/products');
  // }).catch((error)=>{
  //   console.log(error);
  // });
};
