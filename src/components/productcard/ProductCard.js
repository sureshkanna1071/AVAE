import React from 'react'
import "./productCard.css"
import { Button, Chip, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, name, imageSrc, videoUrl}) => {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate("/castor")}>
      <div className='card-image'>
        <img width="100%" src={imageSrc} alt='tv'  />
      </div>
      <hr width="90%" />
      <div className='card-details'>
          <h5>{name}</h5>
          <Chip color='success' variant='outlined' size='small' label="Range: ₹30,000 - ₹50,000"/>
          <Chip color='primary' variant='outlined' size='small' label="Size: 30'' - 75''"/>
      </div>
        
    </div>
  )
}

export default ProductCard