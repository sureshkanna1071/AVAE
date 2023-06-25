import React from 'react'
import "./heroBanner.css"
import { Button } from '@mui/material'
import Pic10 from "../../assets/Pic10.png"

const HeroBanner = () => {
  return (
    <div className='heroBanner'>
       {/* <div className='heroBanner_content'>
       </div> */}
       <div className='heroBanner_content'>
       <h1 className='heroBanner_content-title'>Experience Visual & Audio Excellence with AVAE LED TVs.</h1>
        {/* <p className='heroBanner_content-desc'>Welcome to AVAE, your gateway to extraordinary visual experiences! Immerse yourself in the pinnacle of technological brilliance with our stunning range of LED TVs. </p> */}

        <Button 
          variant="contained" 
          sx={{
            color: '#0a0a3f', 
            background: "linear-gradient(to right, #fde371, #d49d35)",
            fontWeight: '700',
            letterSpacing: "2px",
            marginTop: "30px"
           }}
         >Explore</Button>
       </div>
       
         
       <img className='heroBanner_content-image' src={Pic10} alt="Banner" width="850px" height="850px" />
    </div>
  )
}

export default HeroBanner