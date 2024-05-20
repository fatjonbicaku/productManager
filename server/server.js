const express = require("express");
const app = express();
const port = 8000;
var cors = require('cors')
require('./configs/mongoose.config')
const appRoutes = require('./routes/product.route')

app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors())

appRoutes(app)

app.get("/", (req,res) =>{
  res.send("Products Api")
})

app.listen(port , () => console.log(`Server is running on port: ${port}`));