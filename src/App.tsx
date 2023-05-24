import { ErorrText } from './components/ErorrText';
import { Loader } from './components/Loader';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';

function App() {

  const { loading, error, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErorrText error = {error}/>}

      {products.map(p => <Product product={p} key={p.id} />)}
      {/* {products.map((p, index) => <Product product = {p} key={index} />)} */} {/* another way to add key - using index*/}
    </div>
  )
}

export default App;
