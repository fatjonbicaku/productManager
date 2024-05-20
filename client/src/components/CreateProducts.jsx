import React, {useState} from 'react'
import styles from './styles.module.css'
import axios from 'axios'

function CreateProducts() {
  const [title, setTitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new', {
      title,
      price,
      description
    }) .then(res=>{
      console.log(res); 
      console.log(res.data);
      setMessage("Product is addedd to database.")
  })
  .catch(err=>console.log(err))

  setTitle('')
  setprice('')
  setDescription('')

  }

  //console.log(title, price,description);
  return (
    <div className={styles.form}>
    <h1>Product Manager</h1>
    <form onSubmit={submitForm}>
    <div>
      <label htmlFor="title">Title</label>
      <input value={title} type="text" name="title" id="" onChange={e=> setTitle(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="price">Price</label>
      <input value={price} type="text"name='price' onChange={e=>setprice(e.target.value)} />
    </div>
    <div>
      <label htmlFor="desc">Descripton</label>
      <input value={description} type="text" name="desc" id="" onChange={e=>setDescription(e.target.value)}/>
    </div>
    <button type="submit">Create</button>
    </form>
    <p>{message}</p>
    </div>
  )
}

export default CreateProducts
