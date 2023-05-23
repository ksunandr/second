import React, { useEffect, useState } from 'react'
import { Product } from './components/Product'
// import { products } from './components/data/products';
import axios from 'axios';
import { IProduct } from './models';


function App() {

  const [products, setProducts] = useState<IProduct[]>([])
  async function fetchProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=6')
    setProducts((response).data)
    console.log(response)
  }

  useEffect(() => {
    fetchProducts()
    console.log("useEffect")
  }, [])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map(p => <Product product={p} key={p.id} />)}
      {/* {products.map((p, index) => <Product product = {p} key={index} />)} */}
    </div>
  )
}

export default App;
