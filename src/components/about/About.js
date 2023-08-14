import React, { useEffect, useRef, useState } from 'react'
import "./about.css"
import NewLogo from "../../assets/NewBlackLogo.png";
import { Button, IconButton, Modal } from '@mui/material';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CloseIcon from '@mui/icons-material/Close';
import AboutVideo from "../../assets/AboutVideo.mp4"
import HikingIcon from '@mui/icons-material/Hiking';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Pattern from "../../assets/Pattern.jpg"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import zIndex from '@mui/material/styles/zIndex';

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const parallax = useRef(null)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldDisplay = viewportWidth > 1000;

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  const testimonials = [
    {review: "This is a test review 01, legit review will be updated soon",
     image: Pattern,
    },
    {review: "This is a test review 02, legit review will be updated soon",
     image: Pattern,
    },
    {review: "This is a test review 03, legit review will be updated soon",
     image: Pattern,
    }
  ]

  const Page = ({ offset, gradient, onClick }) => (
    <>
      <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
        <div className="about_parallax-slopeBegin"/>
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
        <div className={`about_parallax-slopeEnd about_parallax-${gradient}`} />
      </ParallaxLayer>
  
      <ParallaxLayer className={`about_parallax-text`} offset={offset} speed={1}>
        <div
          className='about_testimonial'
        >
         <img style={{height: "autopx", width: "40%", borderRadius: "10px", boxShadow: "0 0 10px white"}} src={testimonials[offset].image} />
         <p>{`" ${testimonials[offset].review} "`}</p>
        </div>
      </ParallaxLayer>
    </>
  )

  return (
    <>
      <div
       style={{
        height: "auto", 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      >
      {shouldDisplay ?
      <Parallax 
        pages={4}
        style={{
          backgroundColor: "whitesmoke",
          color: "001f3f",
          paddingBottom: "50px"
        }}
      >
        <ParallaxLayer offset={0} speed={0.01} style={{ display: "flex", alignItems: "center", justifyContent: 'center', height: "calc(100vh - 100px)" }}>
        <div
          className='about_container'
        >
          <img src={Pattern} alt="Pattern" height="auto" width="90%" style={{position: "absolute", borderRadius: '20px'}} />
          <h1 className='about_title' >Discover Our Story: Unveiling the Heart and Soul Behind AVAE</h1>
        <p
          style={{
            lineHeight: 2,
            textAlign: "justify",
            width: "60%",
            margin: "10px auto",
            zIndex: 1
          }}
        >
          At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
        </p>
        <Button
          startIcon={<SmartDisplayIcon sx={{color: "#00ffff"}} />}
          onClick={() => {
            setOpenVideo(true);
          }}
          variant='contained'
          sx={{marginBottom: "25px", color: 'white', backgroundColor: '#001f3f',  transition: "transform 0.3s ease-in-out", "&:hover": {color: 'white', backgroundColor: 'black', transform: "scale(1.1)", boxShadow: "0 0 7px #5a5a5a"}}}
        >
          <h4>Watch Video</h4>
        </Button>
        <p 
         style={{
          zIndex: 1
         }} 
        >
          Scroll down
        </p>
        <KeyboardDoubleArrowDownIcon className='scroll-icon' sx={{color: "#001f3f"}} />
      </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', padding: "25px" }}>
          <div >
            <img className='about-image' src={NewLogo} alt="Logo" width="550px" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.01} style={{ display: "flex", alignItems: "center", justifyContent: 'flex-end', padding: "25px"  }}>
          <div className='about_details-description about_parallax-teal'>
            <div>
              <h2
                style={{
                  letterSpacing: "2px",
                  marginBottom: '5px',
                  display: "flex",
                  alignItems: "center",
                  gap: '10px',
                  letterSpacing: 3,
                }}
              >
                <HikingIcon fontSize='large' />Our Story
              </h2>
              <hr 
                // className='about_parallax-tomato'
                style={{
                  width: "70%",
                  height: "5px",
                  borderStyle: 'none',
                  border: "none",
                  backgroundColor: "#20232f",
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              Madha Agencies, based in Tamil Nadu, serves as a distributor for their proprietary line of LED TVs, household appliances, and various other consumer electronics. The establishment, established in 2016 and helmed by Mr. George Wilson, has successfully orchestrated the distribution of its offerings through a network of dealers and distributors across Southern Tamil Nadu, Pondicherry, and Kerala.
            </p>
            <p
              style={{
                lineHeight: 2,
              }}
            >
              At the core of our identity lie hallmarks such as an extensive product portfolio, premium brand collaborations, unwavering customer contentment, and competitive pricing. Our expertise encompasses a diverse array of home appliances and television models. Moreover, augmenting our repertoire, we proudly introduce our very own branded television – AVAE – a product that has not only been unveiled but has also secured official trademark recognition.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.01} style={{ display: "flex", alignItems: "center", justifyContent: 'flex-end', padding: "25px"  }}>
        <div className='about_details-description about_parallax-tomato'>
            <div>
              <h2
                style={{
                  letterSpacing: "2px",
                  marginBottom: '5px',
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: 3,
                  gap: '10px'
                }}
              >
                <HikingIcon fontSize='large' />Our Mission 
              </h2>
              <hr 
                style={{
                  width: "70%",
                  height: "5px",
                  borderStyle: 'none',
                  border: "none",
                  backgroundColor: "#20232f"
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
      : <>
      <div
          className='about_container'
        >
        <h1 className='about_title'>Discover Our Story: Unveiling the Heart and Soul Behind AVAE</h1>
        <p
          style={{
            lineHeight: 2,
            textAlign: "justify",
            width: "60%",
            margin: "10px auto"
          }}
        >
          At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
        </p>
        <Button
          startIcon={<SmartDisplayIcon sx={{color: "#00ffff"}} />}
          onClick={() => {
            setOpenVideo(true);
          }}
          variant='contained'
          sx={{marginBottom: "25px", color: 'white', backgroundColor: '#001f3f',  transition: "transform 0.3s ease-in-out", "&:hover": {color: 'white', backgroundColor: 'black', transform: "scale(1.1)", boxShadow: "0 0 7px #5a5a5a"}}}
        >
          <h4>Watch Video</h4>
        </Button>
        <p >Scroll down</p>
        <KeyboardDoubleArrowDownIcon className='scroll-icon' sx={{color: "#001f3f"}} />
      </div>
      <div className='about_details-description about_parallax-teal'>
            <div>
              <h2
                style={{
                  letterSpacing: "2px",
                  marginBottom: '5px',
                  display: "flex",
                  alignItems: "center",
                  gap: '10px',
                  letterSpacing: 3,
                }}
              >
                <HikingIcon fontSize='large' />Our Story
              </h2>
              <hr 
                // className='about_parallax-tomato'
                style={{
                  width: "70%",
                  height: "5px",
                  borderStyle: 'none',
                  border: "none",
                  backgroundColor: "#20232f",
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              Madha Agencies, based in Tamil Nadu, serves as a distributor for their proprietary line of LED TVs, household appliances, and various other consumer electronics. The establishment, established in 2016 and helmed by Mr. George Wilson, has successfully orchestrated the distribution of its offerings through a network of dealers and distributors across Southern Tamil Nadu, Pondicherry, and Kerala.
              At the core of our identity lie hallmarks such as an extensive product portfolio, premium brand collaborations, unwavering customer contentment, and competitive pricing. Our expertise encompasses a diverse array of home appliances and television models. Moreover, augmenting our repertoire, we proudly introduce our very own branded television – AVAE – a product that has not only been unveiled but has also secured official trademark recognition.
            </p>
          </div>
        <div className='about_details-description about_parallax-tomato'>
            <div>
              <h2
                style={{
                  letterSpacing: "2px",
                  marginBottom: '5px',
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: 3,
                  gap: '10px'
                }}
              >
                <HikingIcon fontSize='large' />Our Mission 
              </h2>
              <hr 
                style={{
                  width: "70%",
                  height: "5px",
                  borderStyle: 'none',
                  border: "none",
                  backgroundColor: "#20232f"
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
            </p>
          </div>
      </>}
    </div>
    <>
      <h1 style={{ backgroundColor: '#20232f', color: 'white', textAlign: "center", padding: "15px", letterSpacing: 3 }}><AutoAwesomeIcon sx={{color: 'orange'}} /> Words from Our Satisfied Customers <AutoAwesomeIcon sx={{color: 'orange'}} /></h1>
      <div style={{ backgroundColor: '#dfdfdf', minHeight: '100vh' }}>
        
        <Parallax className="about_parallax-container" ref={parallax} pages={3} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
      </div>
    </>
   
        
        {/* <div className='about_details'>
          <img src={NewLogo} al="Logo" width="550px" />
          <div className='about_details-description'>
            <div>
              <h2
                style={{
                  letterSpacing: "2px",
                  marginBottom: '5px',
                  display: "flex",
                  alignItems: "center",
                  gap: '25px'
                }}
              >
                <HikingIcon fontSize='large' />Our Mission 
              </h2>
              <hr 
                style={{
                  width: "70%",
                  height: "5px",
                  backgroundColor: "#f50909",
                  borderStyle: 'none',
                  border: "none",
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
            </p>
            <Button
              startIcon={<SmartDisplayIcon sx={{color: "red"}} />}
              onClick={() => {
                setOpenVideo(true);
              }}
              variant='contained'
              sx={{color: 'black', backgroundColor: 'white',  transition: "transform 0.3s ease-in-out", "&:hover": {color: 'white', backgroundColor: 'black', transform: "scale(1.1)", boxShadow: "0 0 7px #5a5a5a"}}}
            >
              <h4>Watch Video</h4>
            </Button>
          </div>
        </div> */}
        <Modal
         open={openVideo}
         onClose={() => {
          setOpenVideo(false)
        }}
        >
          <div
           style={{
              height: "100%",
              width: '100%',
           }}
          >
           <div
            style={{
              textAlign: "end",
              backgroundColor: 'black'
            }}
           >
            <IconButton 
              sx={{backgroundColor: "whitesmoke", border: "1px solid #5a5a5a", "&:hover": {backgroundColor: "whitesmoke",}}}
              onClick={() => {
                setOpenVideo(false)
              }}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
           </div>
           <div
            style={{
              height: "95%",
              width: '100%',
              textAlign: "center",
              backgroundColor: 'black'
            }}
           >
            <video width="100%" height="100%" autoPlay controls>
              <source src={AboutVideo} type="video/mp4" />
            </video>
           </div>
          </div>
        </Modal>
    </>
  )
}

export default About