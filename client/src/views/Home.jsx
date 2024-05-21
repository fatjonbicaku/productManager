import React, {useState} from 'react'
import CreateProducts from '../components/CreateProducts'
import ListProducts from '../components/ListProducts'

function Home() {

  const [products, setProducts] = useState([]);
  return (

    <div>
      <CreateProducts products={products} setProducts={setProducts}/>
      <ListProducts products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Home