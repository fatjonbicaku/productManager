const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/productmanager")
.then(()=> console.log("Database is working!"))
.catch((error)=> console.log(`Error connecting DB: ${error}`))