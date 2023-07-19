import React from 'react'
import "./productCard.css"
import { Button } from '@mui/material'
import Pic02 from "../../assets/Pic02.png"

const ProductCard = ({id, name, imageSrc, videoUrl}) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img width="250px" src={imageSrc} alt='tv'  />
      </div>
      <hr width="90%" />
      <div className='card-details'>
          <h4>{name}</h4>
          <p> ₹50,000  </p>
      </div>
        
    </div>
  )
}

export default ProductCard