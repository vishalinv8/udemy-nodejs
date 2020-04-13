const fs = require('fs');
const path = require('path');

const cartStorage = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {

  static addProduct(id, productPrice) {
    fs.readFile(cartStorage, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } 
      else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(cartStorage, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static getCart(callback){
    fs.readFile(cartStorage, (err, fileContent) => {
      if(err){
        return;
      }
      let cartItems = {...JSON.parse(fileContent)};
      callback(cartItems);
    });
  }

};
