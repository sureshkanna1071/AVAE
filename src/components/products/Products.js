import React from 'react'
import { tvs } from '../features/Features'
import { Box, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import Slide from 'react-reveal/Slide';
import Remote from "../../assets/Remote.png"
import Roll from 'react-reveal/Roll';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: '#000'
        }}
      >
        <Fade left>
          <h2
            style={{
              textAlign: "center",
              padding: "50px 0 25px",
              letterSpacing: '2px',
              background: 'linear-gradient(to right, #ff3366, orange)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            LED TVs Unleashed: Uncover the Ultimate Selection for Your Entertainment!
          </h2>
        </Fade>
        
      </div>
        
      {tvs.map((tv, index) => (
        <Box key={tv.id} item xs={12} 
          sx={{
            display: "flex", 
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "25px",
            backgroundColor: "#000000",
            padding: "100px 0"
         }}
        >   {index % 2 === 0 
            ?  <Fade left >
                  <div style={{width: "50%", height: 'auto', }}>
                    <img src={tv.imageSrc} alt={tv.name} style={{ width: '100%', height: 'auto' }} />
                    <Roll right>
                      <img 
                      src={Remote} 
                      alt={tv.name} 
                      style={{ 
                        width: '150px', 
                        height: 'auto',
                        position: "absolute",
                        rotate: "35deg",
                        bottom: "0",
                        right: "10px"
                      }} 
                    />
                    </Roll>
                  </div>
                  
                </Fade>
            : <Fade right >
                <img src={tv.imageSrc} alt={tv.name} style={{ width: '50%', height: 'auto' }} />
              </Fade>
            }
            <div>
             {/* <Lottie animationData={AnimationBg} id="lottie-tv" /> */}
              <h1 
              align="center" 
              style={{
                  textAlign: 'center',
                  letterSpacing: '2px',
                  background: 'linear-gradient(to right, #ff3366, orange)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
              }}
              onClick={() => navigate("/castor")}
              >
                {tv.name}
            </h1>
            </div>
            
        </Box>
      ))}
    </>
  )
}

export default Products