const ProductController = require("../controllers/product.controller");


module.exports = (app) =>{
  app.get('/api/products', ProductController.listAllProducts);
  app.get('/api/product/:id' , ProductController.productbyId)
  app.post('/api/product/new', ProductController.createProduct);
  app.put('/api/product/:id', ProductController.editproduct);
  app.delete('/api/product/:id', ProductController.deleteProduct)
}