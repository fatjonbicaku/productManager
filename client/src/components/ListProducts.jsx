import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListProducts = (props) => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => {
        props.setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const deleteProduct = (id) => {
    axios.delete('http://localhost:8000/api/product/' + id)
        .then(res => {
          props.setProducts(props.products.filter(product => product._id != id));
        })
        .catch(err => console.log(err))
}


  return (
    <div style={{
      width: "300px",
      margin: "0 auto"
    }}>
 { props.products.length > 0 ? <h2>All Products:</h2>: <h2>Please add a product</h2>}

      {props.products.map((product) => {
        return(
        <div style={{margin: "20px"}} key={product._id}>
          <Link style={{marginRight: "60px"}} to={`/products/${product._id}`}>{product.title}</Link>
          <Link style={{marginRight: "10px"}} to={`/product/edit/${product._id}`}>Edit</Link>
          <Link onClick={()=>{deleteProduct(product._id)}}>Delete</Link>

          <br />
        </div>
      )
      
      })}
    </div>
  );
}

export default ListProducts;
