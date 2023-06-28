import {products as initialProducts} from '../mocks/products.json'
import {Products} from '../components/productos'
import { useState } from 'react'
import { Filters } from '../components/Filters';
import { Carousel } from '../components/carrusel';


function Home() {

  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && 
        (
          filters.category == 'all' || 
          product.category == filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
    <Carousel/>
    <Filters/>
    <Products products={filteredProducts} />
    </>
    
  )
}

export default Home
