import React from 'react'
import "./productCard.css"
import { Button, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, name, imageSrc, videoUrl}) => {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate("/maintenance")}>
      <div className='card-image'>
        <img width="300px" src={imageSrc} alt='tv'  />
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