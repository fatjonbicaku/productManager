import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function ProductDetails() {
  
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + id)
      .then((res) => {
        setProduct(res.data.product)
        console.log(res.data.product)
      })
      .catch((error) => console.log(error))
  }, [])

  const deleteProduct = () => {
    axios.delete('http://localhost:8000/api/product/' + id)
      .then(res => {
        navigate("/home")
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Name: {product.title}</h2>
      <h2>Description: {product.description}</h2>
      <h2>Price: {product.price}</h2>
      <Link style={{ margin: "20px" }} to={`/product/edit/${id}`}>Edit</Link>
      <Link onClick={deleteProduct}>Delete</Link>
    </div>
  )
}

export default ProductDetails
