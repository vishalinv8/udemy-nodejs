const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://mongodb_nodejs:OBkbw5XStRbCQef4@cluster0-shqot.mongodb.net/test?retryWrites=true&w=majority")
    .then((client)=>{
        console.log("MongoDB connected!");
        callback(client);
    })
    .catch((err)=>{
        console.log("Mongodb connection err", err);
    });    
};
module.exports = mongoConnect;