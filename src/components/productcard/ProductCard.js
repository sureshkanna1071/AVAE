import React from 'react'
import "./productCard.css"
import { Button } from '@mui/material'

const ProductCard = () => {
  return (
    <div className='card'>
        <img width="250px" src='https://instorestatic.tcl.com/media/catalog/product/cache/18cc94b972099367f0cf9bad2913b738/s/5/s53_front-1_3.png' alt='tv' />
        <hr width="90%" />
        <h4>LuminaVision 40X [40 inches]</h4>
        <p> ₹ 29,999 </p>
    </div>
  )
}

export default ProductCard