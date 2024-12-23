import { allProducts } from './assets/data'
import CartItem from './components/CartItem'

const App = () => {
  return (
    <h1 className="grid place-items-center py-20">
      <h1 className="text-5xl italic text-gray-500 mb-16">
        Fashion Buzz: Top Trends to Elevate Your Look
      </h1>
      <div className='grid grid-cols-3 place-items-start gap-10'>
        {allProducts?.map((item) => {
          return (
            <CartItem key={item.id} item={item} />
          )
        })}
      </div>
    </h1>
  )
}

export default App