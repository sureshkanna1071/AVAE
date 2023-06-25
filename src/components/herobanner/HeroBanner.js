import React from 'react'
import "./heroBanner.css"
import { Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <div className='heroBanner'>
       <div className='heroBanner_content'>
        <h1 className='heroBanner_content-title'>Experience Visual Excellence with AVAE LED TVs.</h1>
        <p className='heroBanner_content-desc'>Welcome to AVAE, your gateway to extraordinary visual experiences! Immerse yourself in the pinnacle of technological brilliance with our stunning range of LED TVs. </p>
        <Button 
          variant="contained" 
          sx={{
            color: '#0a0a3f', 
            "&:hover": {backgroundColor: "white"}, 
            backgroundColor: "white",
            fontWeight: '700',
            letterSpacing: "2px",
            marginTop: "30px"
           }}
         >Explore</Button>
       </div>
    </div>
  )
}

export default HeroBanner