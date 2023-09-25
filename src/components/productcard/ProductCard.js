import React from 'react'
import "./productCard.css"
import { Button, Chip, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, name, series, image_url, price_range, size, videoUrl}) => {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`/tv/${series}`)}>
      <div className='card-image'>
        <img width="100%" height="auto" src={image_url} alt='tv'  />
      </div>
      <hr width="90%" />
      <div className='card-details'>
          <h5>{name}</h5>
          <Chip color='success' variant='outlined' size='small' label={`Range: ${price_range}`}/>
          <Chip color='primary' variant='outlined' size='small' label={`Size: ${size}`}/>
      </div>
    </div>
  )
}

export default ProductCard