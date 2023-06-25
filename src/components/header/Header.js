import React from 'react'
import "./header.css"
import {Button} from "@mui/material"

const Header = () => {
  return (
    <div className='header'>
       <img src='' alt='Madha Agencies Logo' />
       <div className='header_nav'>
          <p className='header_nav-items'>Features</p>
          <p className='header_nav-items'>New Arrivals</p>
          <p className='header_nav-items'>About</p>
       </div>
       <Button 
           variant="contained" 
           sx={{
             color: '#0a0a3f', 
             "&:hover": {backgroundColor: "white"}, 
             backgroundColor: "white",
             fontWeight: '700',
             letterSpacing: "2px",
            }}
         >
          shop
        </Button>
    </div>
  )
}

export default Header