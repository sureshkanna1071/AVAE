import React from 'react'
import "./productCard.css"
import { Button } from '@mui/material'
import Pic02 from "../../assets/Pic02.png"

const ProductCard = () => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img width="250px" src={Pic02} alt='tv'  />
      </div>
      <hr width="90%" />
      <div className='card-details'>
          <h4>LuminaVision 40X [40 inches]</h4>
          <p> ₹ 29,999 </p>
      </div>
        
    </div>
  )
}

export default ProductCard