const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;
const ObjectId = mongodb.ObjectId;

class User{

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    static save(){



    }

    static findUserById(userId){
        const db = getDb();
        return db
        .collection('users')
        .findOne({_id: new ObjectId(userId)})
        .then(userDetail =>{
            return userDetail;
        })
        .catch(err =>{
            console.log(err);
        });
    }

}

module.exports = User;
