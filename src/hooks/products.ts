import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios, { AxiosError } from "axios"

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

  async function fetchProducts() {
    try {
    setLoading(true)
    setError('')
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=20')
    setProducts((response).data)
    // console.log(response)
    setLoading(false)
    } catch(e: unknown) {
      setLoading(false)
      const error = e as AxiosError
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    console.log("useEffect")
  }, [])

  return { products, loading, error, addProduct }

}