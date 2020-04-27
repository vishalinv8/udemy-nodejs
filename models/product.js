const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class Product{
  constructor(title, imageUrl, price, description){
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save(){
    const db = getDb();
    return db.collection("products")
      .insertOne(this)
      .then((results)=>{
        console.log(results);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  static fetchAll(){
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static findById(productId){
    const db = getDb();
    console.log("findById123", productId);
    return db
      .collection('products')
      .find({_id:new mongodb.ObjectId(productId)})
      .next()
      .then(product => {
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }
}


module.exports = Product;