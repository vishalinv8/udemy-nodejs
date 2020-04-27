const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let mongoUri = 'mongodb+srv://mongodb_nodejs:OBkbw5XStRbCQef4@cluster0-shqot.mongodb.net/shop?retryWrites=true&w=majority';
let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(mongoUri, {useUnifiedTopology: true})
    .then((client)=>{
        console.log("MongoDB connected!");
        _db = client.db();
        callback(client);
    })
    .catch((err)=>{
        console.log("Mongodb connection err", err);
        throw err;
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;