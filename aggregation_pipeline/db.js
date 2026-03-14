const {MongoClient} = require('mongodb');

let dbConnection;

module.exports={

    connectToDb: (cb)=>{

        MongoClient.connect("mongodb://localhost:27017/Dummy")

        .then((client)=>{
            dbConnection = client.db();
            return cb();   //cb() runs and returns back to the connectToDb function in the app.js file. 

        })
        .catch((err)=>{

            return cb(err);   //same thing happen just as above , Only that it passes a callback.

        });
    },
    getDb: ()=> dbConnection

};