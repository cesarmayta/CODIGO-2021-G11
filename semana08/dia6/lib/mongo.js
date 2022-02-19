const {MongoClient,ObjectId} = require('mongodb');
const {config} = require('../config/index');

class MongoLib{
    constructor(){
        this.client = new MongoClient(config.mongoUri,{UseNewUrlParser:true});
        this.dbName = config.dbName;
    }

    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve,reject)=>{
                this.client.connect(err =>{
                    if(err){
                        reject(err);
                    }
                    console.log('estas conectado a mongodb');
                    resolve(this.client.db(this.dbName));
                })
            })
        }
        return MongoLib.connection;
    }

    query(collection,query){
        return this.connect().then(db =>{
            return db
            .collection(collection)
            .find(query)
            .toArray();
        })
    }

    create(collection,data){
        return this.connect()
        .then(db =>{
            return db.collection(collection).insertOne(data);
        })
        .then(result => result.insertedId);
    }

    update(collection,id,data){
        return this.connect()
        .then(db=>{
            return db
            .collection(collection)
            .updateOne({_id:ObjectId(id)},{$set : data});
        })
        .then(result => id);
    }

    delete(collection,id){
        return this.connect()
        .then(db =>{
            return db
            .collection(collection)
            .deleteOne({_id: ObjectId(id)});
        })
        .then(() => id);
    }
}

module.exports = MongoLib;
