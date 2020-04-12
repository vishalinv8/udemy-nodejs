const fs = require("fs");
const path = require("path");
const products = [];
const storagePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = (callback)=>{
    fs.readFile(storagePath, (error, fileContent)=>{
        if(error){
            callback([]);
        }
        else{
            callback(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product{   

    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }    

    save(){
        this.id = this.generateUniqueString();
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(storagePath, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }

    static findById(productId, callback){
        getProductsFromFile((products)=>{
            const productInfo = products.find((singleProd) => {
                return singleProd.id === productId;
            });
            callback(productInfo);
        });
    }

    updateProduct(productId, newProdData, callback) {
        fs.readFile(storagePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            else{
                return callback("error");
            }
            const existingProductIndex = products.findIndex(
              prod => prod.id === productId
            );
            const existingProduct = products[existingProductIndex];
            let updatedProduct;
            if(existingProduct) {
                updatedProduct = {...existingProduct};
                if(typeof newProdData.title != 'undefined' && updatedProduct.title !== newProdData.title){
                    updatedProduct.title = newProdData.title;
                }
                if(typeof newProdData.imageUrl != 'undefined'){
                    updatedProduct.imageUrl = newProdData.imageUrl;
                }
                if(typeof newProdData.price != 'undefined' && updatedProduct.price !== newProdData.price){
                    updatedProduct.price = newProdData.price;
                }
                if(typeof newProdData.description != 'undefined' && updatedProduct.description !== newProdData.description){
                    updatedProduct.description = newProdData.description;
                }               
                products[existingProductIndex] = updatedProduct;
            }
            fs.writeFile(storagePath, JSON.stringify(products), err => {
              console.log(err);
              if(!err){
                callback("success");
              }
              else{
                callback("error");
              }
            });
        });
    }

    generateUniqueString() {
        return '_' + Math.random().toString(36).substr(2, 15);
    }
};