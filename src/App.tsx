import { useState, useContext } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErorrText } from './components/ErorrText';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {

  const { loading, error, products, addProduct } = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErorrText error={error} />}

      {products.map(p => <Product product={p} key={p.id} />)}
      {/* {products.map((p, index) => <Product product = {p} key={index} />)} */} {/* another way to add key - using index*/}

      {modal && <Modal title="Create new product" onClose={close} >
        <CreateProduct onCreate={createHandler} />

      </Modal>}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >+</button>
    </div>
  )
}


export default App;
