import React from 'react'
import { tvs } from '../features/Features'
import { Box, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import Slide from 'react-reveal/Slide';
import Remote from "../../assets/Remote.png"
import Remotee from "../../assets/Remotee.png"
import Roll from 'react-reveal/Roll';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: '#e7e9eb'
        }}
        id="explore"
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
            backgroundColor: "#e7e9eb",
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
                        width: 'auto', 
                        height: '150px',
                        position: "absolute",
                        rotate: "35deg",
                        bottom: "0",
                        right: "10px",
                        // backgroundColor: "#353535"
                      }} 
                    />
                    </Roll>
                  </div>
                  
                </Fade>
            : <Fade right >
                <div style={{width: "50%", height: 'auto', }}>
                    <img src={tv.imageSrc} alt={tv.name} style={{ width: '100%', height: 'auto' }} />
                    <Roll left>
                      <img 
                      src={Remotee} 
                      alt={tv.name} 
                      style={{ 
                        width: 'auto', 
                        height: '150px',
                        position: "absolute",
                        rotate: "-35deg",
                        bottom: "0",
                        left: "10px",
                        // backgroundColor: "#353535"
                      }} 
                    />
                    </Roll>
                  </div>
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
              onClick={() => navigate("/maintenance")}
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