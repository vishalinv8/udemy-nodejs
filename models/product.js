const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class Product{

  constructor(title, imageUrl, price, description, id, userId){
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  save(){
    const db = getDb();
    let dbOperation;
    if(this._id){
      console.log('updating product...');
      dbOperation = db.collection("products").updateOne( {_id: this._id}, {$set: this} );
    }
    else{
      console.log('adding product...');
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

  static deleteById(Id){
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({_id: new mongodb.ObjectId(Id)})
      .then( results =>{
        console.log('Product Deleted Successfully!');
      })
      .catch(err=>{
        console.log('Error while delete product');
      });
  }
}


module.exports = Product;