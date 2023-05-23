import React, { useState } from 'react'
import {Product} from './components/Product'
import { products } from './components/data/products';


function App() {
  return (
  <div className="container mx-auto max-w-2xl pt-5">

<Product product = {products[0]}  />
<Product product = {products[1]}  />

  </div>
  )
}   

export default App;
