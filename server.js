//create express app
const exp = require("express");
const mclient = require("mongodb").MongoClient;
const app = exp();

//importing dotenv
require("dotenv").config();

//import path module
const path = require("path");

//connect build of react with NodeJS
app.use(exp.static(path.join(__dirname, './build')))

//database connection using mongoose
const DBurl = process.env.DATABASE_CONNECTION_URL;

//connect with mongodb server
mclient.connect(DBurl).then((client) => {
    //get the database object
    let dbObj = client.db("vnr2022db");
    //create a collection
    let userCollectionObject = dbObj.collection("usercollection");
    let productCollectionObject = dbObj.collection("productcollection");

    //sharing collection object to api
    app.set("userCollectionObject", userCollectionObject);
    app.set("productCollectionObject", productCollectionObject);

    console.log("Connected to mongodb server");
}).catch(err => {
    console.log("error in db connection", err);
})

//import userApp and productApp
const userApp = require("./API/userApi");
const productApp = require("./API/productApi");
const { response } = require("express");


//execute specific middleware based on path
app.use('/user', userApp);
app.use('/product', productApp);

//dealing with page refresh
app.use('*', (request, response) => {
    response.sendFile(path.join(__dirname, './build/index.html'));
})

//handling Invalid path
app.use((req, res) => {
    res.send({ message: "Invalid path" });
})

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send({ message: "Something went wrong", error: err.message });
})


//assign port number
app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}...`));