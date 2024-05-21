import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import ProductDetails from "./components/ProductDetails"
import UpdateProduct from "./components/UpdateProduct"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} default />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/product/edit/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
