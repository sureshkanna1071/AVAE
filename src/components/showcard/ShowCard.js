import React from 'react'
import "./showCard.css"
import { Button, Chip, IconButton, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShowCard = ({id, name, imageSrc, videoUrl}) => {
  const navigate = useNavigate();
  
  return (
    <div className='showcard' onClick={() => navigate("/castor")}>
      <div className='showcard-image'>
        <img width="100%" src={imageSrc} alt='tv'  />
      </div>
      <hr width="100%" />
      <div className='showcard-details'>
          <h4>{name}</h4>
          <h4>₹ 50,000</h4>
      </div>
      <div className='showcard-details'>
        <p>This is the discription of the product, This is the discription of the product</p>
        <Button size='small' color='success' startIcon={<ShoppingCartIcon />} variant='contained' sx={{backgroundColor: "black"}}> BUY</Button>
      </div>
    </div>
  )
}

export default ShowCard