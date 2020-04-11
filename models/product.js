const products = [];

module.exports = class Product{
    
    constructor(prodTitle){
        this.title = prodTitle;
    }
    
    save(){
        products.push(this);
    }
    
    static fetchAll(){
        return products;
    }
    
};