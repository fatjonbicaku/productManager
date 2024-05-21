import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import axios from 'axios'

function CreateProducts(props) {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  

  const submitForm = (e) => {
    e.preventDefault();

    if(title && price && description){

    axios.post('http://localhost:8000/api/product/new', {
      title,
      price,
      description
    })
    
    .then(res => {

     // console.log(res.data);
      setTitle('')
      setPrice('')
      setDescription('')

      props.setProducts([...props.products, res.data])
    })
      .catch(err => console.log(err))
  }
 
  }


  return (
    <div className={styles.form}>
      <h1>Product Manager</h1>
      <form onSubmit={submitForm}>
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
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateProducts
