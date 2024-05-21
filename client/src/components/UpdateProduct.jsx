import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import styles from './styles.module.css'


const UpdateProduct = (props) => {

    const { id } = useParams(); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
              console.log(res.data);
                setTitle(res.data.product.title);
                setDescription(res.data.product.description);
                setPrice(res.data.product.price)
            })
            .catch(err => console.log(err))
    }, [])

    
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,    
            description,
            price   
        })
            .then(res => {
               // console.log(res);
                navigate("/home"); 
            })
            .catch(err => console.log(err))
    }
  return (
    <div className={styles.form}>
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
        <div>
          <label htmlFor="title">Title</label>
          <input value={title} type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input value={price} type="text" name='price' onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="desc">Descripton</label>
          <input value={description} type="text" name="desc" id="" onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateProduct
