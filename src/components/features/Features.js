import React from 'react'
import "./features.css"
import ProductCard from '../productcard/ProductCard'

const Features = () => {
  return (
    <div id='features'>
      <h1>Top Sellers</h1>
      <div className='features_container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    
  )
}

export default Features