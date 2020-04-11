const fs = require("fs");

const path = require("path");

const products = [];

module.exports = class Product{
    
    constructor(prodTitle){
        this.title = prodTitle;
    }
    
    save(){
        const storagePath = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(storagePath, (error, fileContent)=>{
            let products = [];
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(storagePath, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }
    
    static fetchAll(callback){
        const storagePath = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(storagePath, (error, fileContent)=>{
            if(error){
                callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }
};