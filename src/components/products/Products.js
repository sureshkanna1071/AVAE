import React from 'react'
import { tvs } from '../features/Features'
import { Box, Typography } from '@mui/material'
import { Fade } from 'react-reveal'
import Slide from 'react-reveal/Slide';
import Remote from "../../assets/Remote.png"
import Remotee from "../../assets/Remotee.png"
import Roll from 'react-reveal/Roll';
import { useNavigate } from 'react-router-dom';
import "./products.css"
import Bg from "../../assets/Bg.jpg"
import Bg2 from '../../assets/Bg2.jpg'
import Bg3 from "../../assets/Bg3.jpg"
import Bg4 from "../../assets/bg4.jpg"
import Bg5 from "../../assets/Bg5.jpg"

const Products = () => {
  const navigate = useNavigate();
  const bgs = [Bg, Bg2, Bg3, Bg4, Bg5];
  const colors = ["deepskyblue", "#f73a02", "#1e65a4", "#53a49e", "#fca85c"];
  return (
    <>
      <div
        style={{
          backgroundColor: 'black'
        }}
        id="explore"
      >
          <h1
            style={{
              textAlign: "center",
              padding: "50px 0 25px",
              letterSpacing: '2px',
              color: 'white',
              textShadow: "0 0 10px #5a5a5a"
            }}
          >
            LED TVs Unleashed: Uncover the Ultimate Selection for Your Entertainment!
          </h1>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '25px', backgroundColor: 'black'}}>
        {tvs.map((tv, index) => (
        <Fade bottom delay={250}>
          <Box key={tv.id} xs={12} 
          sx={{
            minHeight: "90vh",
            display: "flex", 
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "25px",
            backgroundColor: "#e7e9eb",
            padding: "100px 0",
            backgroundImage: `url(${bgs[index]})`,
            backgroundSize: "cover"
         }}
        >   {index % 2 === 0 
            ?  <Fade left delay={275}>
                  <div className='products_image-container'>
                    <img src={tv.imageSrc} alt={tv.name} style={{ width: '100%', height: 'auto' }} />
                    <Roll right>
                      <img 
                      src={Remote} 
                      alt={tv.name} 
                      className='products_remote'
                    />
                    </Roll>
                  </div>
                  
                </Fade>
            : <Fade right delay={275}>
                <div className='products_image-container'>
                    <img src={tv.imageSrc} alt={tv.name} className='products_image' />
                    <Roll left>
                      <img 
                      src={Remotee} 
                      alt={tv.name} 
                      className='products_remote left-remote'
                    />
                    </Roll>
                  </div>
              </Fade>
            }
            <div
              className='products_contents'
            >
             {/* <Lottie animationData={AnimationBg} id="lottie-tv" /> */}
              {tv.titleImg ? 
              <img src={tv.titleImg} />
              :
              <h1
               align="center" 
               style={{
                   textAlign: 'center',
                   letterSpacing: '3px',
                   fontSize: '50px',
                   fontFamily: "abril fatface",
                   color: "#fff", /* Text color */
                   textShadow: `0 0 10px ${colors[index]}, 0 0 20px ${colors[index]}, 0 0 30px ${colors[index]}`
               }}
              >
                {tv.name}
              </h1>}
              <p
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                width: "80%",
                margin: "0 auto",
                color: "#fff", /* Text color */
                textShadow: `0 0 10px ${colors[index]}, 0 0 20px ${colors[index]}, 0 0 30px ${colors[index]}`
            }}
              >
               {tv.description}
              </p>
            </div>
        </Box>
        </Fade>
        
      ))}
      </div>
      
    </>
  )
}

export default Products