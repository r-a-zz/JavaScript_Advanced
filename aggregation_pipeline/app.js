const express = require('express');
const app =express();
const {connectToDb,getDb} = require("./db.js");

let db;
connectToDb((err)=>{ //behaves Asynchronously , so it returns a promise instantly.

    if(!err){

        console.log( "Succesfull Connection");

        db = getDb();  // this should be inside the if CALLBACK BECAUSE IF KEPT OUTSIDETHE CALLBACK the Undefined value will get stored in it due to asynchronous behavior of the connectToDb(); Calling Function.

        app.listen(3000,()=>{   // same reason as above, for keeping it inside the CALLBACK.
            console.log("Listening to port 3000");

        })
    }
    else
        console.log("Error Establishing connection");
});    

app.get('/',(req,res)=>{                       //Health Check
    console.log("Health Check Route");
    res.send("Server is running");
})


app.get('/orders',(req,res)=>{          //get all orders.
    db.collection("orders")
    .find()    //gives a cursor object stores referance to the Documents from the MONGODB server. It stores it in batch to use memory efficiently .
    .toArray()   //used to convert the recieved documents in an Array form. toArray autmatically loads for documents once the 101 document batch is loaded to the memory .
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
});


app.get('/order/:id',(req,res)=>{
    
    db.collection("orders")
    .findOne({id: req.params.id})           //findOne isn't a cursor, it just return as single document.
    .then((data)=>{
        res.status(200).json(data);
    });
    
})