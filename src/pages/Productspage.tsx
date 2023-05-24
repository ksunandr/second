import { useContext } from "react"
import { useProducts } from "../hooks/products"
import { IProduct } from "../models"
import { ModalContext } from "../context/ModalContext"
import { Product } from "../components/Product"
import { Loader } from "../components/Loader"
import { ErorrText } from "../components/ErorrText"
import { Modal } from "../components/Modal"
import { CreateProduct } from "../components/CreateProduct"

export function Productspage(){
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