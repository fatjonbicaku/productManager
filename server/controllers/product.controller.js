const Product = require('../models/product.model')


module.exports.createProduct = (req,res) =>{
Product.create(req.body)
.then((newProduct)=>{
  res.json(newProduct)
})
.catch(error=> {
  res.json(error)
})
}

module.exports.listAllProducts = (req,res) =>{
  Product.find()
  .then((allProducts)=>{
    res.json(allProducts)
  })
  .catch(error=> {
    res.json(error)
  })
}

module.exports.productbyId = (req,res) =>{
  Product.findOne({_id: req.params.id})
  .then((product)=>{
    res.json({product: product})
  })
  .catch((error)=> {
    res.json(error)
  })
}

module.exports.editproduct = (req,res) =>{
  Product.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
  .then((editedProduct)=>{
    res.json({message:"Product edited sucessfully", product: editedProduct})
  })
  .catch((error)=> {
    console.log(`Error editing product ${error}`)
    res.json(error)
  })
}

module.exports.deleteProduct = (req,res) =>{
  Product.deleteOne({_id: req.params.id})
  .then(()=>{
    res.json({message:"Product deleted sucessfully"})
  })
  .catch((error)=> {
    console.log(`Error deleting product ${error}`)
    res.json(error)
  })
}
