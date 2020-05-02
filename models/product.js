const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class Product{
  constructor(title, imageUrl, price, description, id){
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this._id = id;
  }

  save(){
    const db = getDb();
    let dbOperation;
    if(this._id){
      dbOperation = db.collection("products").updateOne( {_id: new mongodb.ObjectId(this._id)}, {$set: this} );
    }
    else{
      dbOperation = db.collection("products").insertOne(this);
    }
    return dbOperation
      .then(results => {
        console.log(results);
      })
      .catch( err =>{
        console.log("dbOperation", err);
      });
  }

  static fetchAll(){
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static findById(productId){
    const db = getDb();
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