import React, { useEffect, useRef, useState } from 'react'
import "./about.css"
import NewLogo from "../../assets/NewBlackLogo.png";
import { Button, IconButton, Modal } from '@mui/material';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HikingIcon from '@mui/icons-material/Hiking';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VideoModal from '../VideoModal';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Customer01 from "../../assets/customer01.jpg";
import Customer02 from "../../assets/customer02.jpg";
import Customer03 from "../../assets/customer03.jpg";
import Thumpnail from "../../assets/Thump01.webp"
import AboutVideo from "../../assets/AboutVideo.mp4"

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
    {review: 
    'Highly recommended for affordable, reliable household appliances. I recently bought a refrigerator from them and was delighted with their excellent customer service. Every team member is dedicated to helping clients.',
     image: Customer01,
    },
    {review: "With Madha Agencies, I had an excellent experience! They are really professional and client-friendly. They assisted me and provided simple EMI alternatives for the washing machine I had just purchased from them. A huge thank you to the entire team for their tireless effort and help!",
     image: Customer02,
    },
    {review: "Madha Agencies deserves a solid 5-star review because they consistently provide their clients with their undivided attention and effort. Throughout my purchasing journey, they excelled in explaining every detail, from the initial steps to the final ones. ",
     image: Customer03,
    }
  ]

  const Page = ({ offset, gradient, onClick }) => (
    <>
      <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
        <div className="about_parallax-slopeBegin"/>
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
        <div className={`about_parallax-slopeEnd `} />
      </ParallaxLayer>
  
      <ParallaxLayer className={`about_parallax-text`} offset={offset} speed={1}>
        <div
          className='about_testimonial'
        >
         <img className='about_testimonial-image' src={testimonials[offset].image} />
         <p className='about_testimonial-review'>{`" ${testimonials[offset].review} "`}<span>{offset === 2 ? "BACK" : "NEXT"}<NavigateNextIcon className='about_testimonial-nextIcon' /></span></p>
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
          color: "white",
          paddingBottom: "50px"
        }}
      >
        <ParallaxLayer offset={0} speed={0.01} style={{ display: "flex", alignItems: "center", justifyContent: 'center', height: "calc(100vh - 100px)" }}>
        {/* <div
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
          startIcon={<SmartDisplayIcon sx={{color: "cyan"}} />}
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
      </div> */}
      <video poster={Thumpnail} width="100%" controls>
        <source src={AboutVideo} type='video/mp4' />
      </video>
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
                  backgroundColor: "white",
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
              }}
            >
              AVAE is proudly owned by Matha Agency, based in Tamil Nadu, serves as a distributor for their proprietary line of LED TVs, household appliances, and various other consumer electronics. The establishment, established in 2016 and helmed by Mr. George Wilson, has successfully orchestrated the distribution of its offerings through a network of dealers and distributors across Southern Tamil Nadu, Pondicherry, and Kerala.
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
        <div className='about_details-description about_parallax-pink'>
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
                  backgroundColor: "white"
                }} 
              />
            </div>
            <p
              style={{
                lineHeight: 2,
              }}
            >
              Our foremost focus lies in cultivating a corporate culture that fosters efficient strategy implementation, ensures customer contentment, and delivers exceptional service. Our aim is to foster a brand identity and boost sales by harnessing the power of cutting-edge technologies.
            </p>
            <p
              style={{
                lineHeight: 2,
              }}
            >
              At the heart of our mission is the drive to innovate. We leverage state-of-the-art technologies to propel our brand to new heights, fostering engagement and resonance in an ever-evolving marketplace. This approach not only empowers us to stay ahead of the curve but also to create unique experiences that resonate with our clientele.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
      : <>
      {/* <div
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
          startIcon={<SmartDisplayIcon sx={{color: "cyan"}} />}
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
      </div> */}
      <video style={{minHeight: '90vh'}} poster={Thumpnail} width="100%" controls>
        <source src={AboutVideo} type='video/mp4' />
      </video>
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
                style={{
                  width: "70%",
                  height: "5px",
                  borderStyle: 'none',
                  border: "none",
                  backgroundColor: "#222831",
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
                color: "white"
              }}
            >
              AVAE is proudly owned by Matha Agency, based in Tamil Nadu, serves as a distributor for their proprietary line of LED TVs, household appliances, and various other consumer electronics. The establishment, established in 2016 and helmed by Mr. George Wilson, has successfully orchestrated the distribution of its offerings through a network of dealers and distributors across Southern Tamil Nadu, Pondicherry, and Kerala.
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
                  backgroundColor: "#222831"
                }} 
              />
            </div>
            
            <p
              style={{
                lineHeight: 2,
                color: "white"
              }}
            >
              At AVAE, our mission is to transform the way you experience entertainment and information through the power of cutting-edge LED technology. We are driven by a passion for redefining visual excellence, setting new standards for immersive viewing, and enhancing your everyday moments.
            </p>
          </div>
      </>}
    </div>
    <>
      <h1 style={{ backgroundColor: '#20232f', color: 'white', textAlign: "center", padding: "15px", width: "100%", letterSpacing: 3 }}><AutoAwesomeIcon sx={{color: 'orange'}} /> Words from Our Satisfied Customers <AutoAwesomeIcon sx={{color: 'orange'}} /></h1>
      <div style={{ backgroundColor: '#dfdfdf', minHeight: '100vh' }}>
        
        <Parallax className="about_parallax-container" ref={parallax} pages={3} horizontal>
          <Page offset={0} gradient="teal" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="teal" onClick={() => scroll(0)} />
        </Parallax>
      </div>
    </>
        <VideoModal openVideo={openVideo} setOpenVideo={setOpenVideo} />
    </>
  )
}

export default About