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
    generateUniqueString() {
        return '_' + Math.random().toString(36).substr(2, 15);
    }
};