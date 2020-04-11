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
    
    constructor(prodTitle){
        this.title = prodTitle;
        this.price = this.getRandomNumber(1,99);
    }
    
    save(){
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

    getRandomNumber(min, max) {
        return Math.floor(  Math.random() * (max - min + 1) + min );
    }

};