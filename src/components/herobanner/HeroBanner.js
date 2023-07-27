import React, { useRef, useState } from 'react'
import "./heroBanner.css"
import { Button } from '@mui/material'
import Lottie from "lottie-react";
import AnimationTv from "../../assets/animation_lkfhr4ag.json"
import Jump from 'react-reveal/Jump';
import { Fade } from 'react-reveal';

const HeroBanner = () => {
  const animationRef = useRef();
  return (
    <div className='heroBanner'>
       {/* <div className='heroBanner_content'>
       </div> */}
       <div className='heroBanner_content'>
        <Fade top>
          <h1 className='heroBanner_content-title'>Experience Visual & Audio Excellence with AVAE LED TVs.</h1>
        </Fade>
          
        {/* <p className='heroBanner_content-desc'>Welcome to AVAE, your gateway to extraordinary visual experiences! Immerse yourself in the pinnacle of technological brilliance with our stunning range of LED TVs. </p> */}
       <Jump>
        <a href="#explore">
          <Button 
            variant="contained" 
            sx={{
              color: '#EEE', 
              background: "rgb(rgb(255, 250, 212), green, blue)",
              fontWeight: '700',
              letterSpacing: "2px",
              marginTop: "30px"
            }}
          >
            Explore
          </Button>
        </a>
          
       </Jump>
        
       </div>
         <Lottie animationData={AnimationTv} onSuspendCapture={0.50} id="lottie-tv" />
       {/* <img className='heroBanner_content-image' src={Pic10} alt="Banner" width="850px" height="850px" /> */}
    </div>
  )
}

export default HeroBanner