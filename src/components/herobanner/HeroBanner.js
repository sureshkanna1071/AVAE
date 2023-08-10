import React from 'react'
import "./heroBanner.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Banner1 from "../../assets/Banner1.jpg"
import Banner2 from "../../assets/Banner2.jpg"
import Banner3 from "../../assets/Banner3.jpg"
import Banner4 from "../../assets/Banner4.jpg"
import Banner5 from "../../assets/Banner5.jpg"

const HeroBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className="heroBanner">
       {/* <div className='heroBanner_content'>
       </div> */}
       {/* <div className='heroBanner_content'>
        <Fade top>
          <h1 className='heroBanner_content-title'>Experience Visual & Audio Excellence with AVAE LED TVs.</h1>
        </Fade>
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
        
       </div> */}
         {/* <Lottie animationData={AnimationTv} onSuspendCapture={0.50} id="lottie-tv" /> */}
         {/* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}
    {/* <Carousel autoPlay={true} >
                <div>
                <iframe style={{borderRadius: "10px", margin: '0 auto'}} height="700px" width="90%" src="https://www.youtube.com/embed/UC26n0Ol99g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                  <img className='' src={NewOne} alt="Banner" width="100%" height="100%" />
                </div>
                <div>
                  <img className='' src={NewOne} alt="Banner" width="100%" height="100%" />
                </div>
            </Carousel> */}
       <Slider {...settings}>
        <div>
          <img src={Banner1} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner2} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner3} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner4} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner5} alt="banner" className='heroBanner-images' />
        </div>
      </Slider>
       {/* <img className='' src={NewOne} alt="Banner" width="100%" height="100%" /> */}
    </div>
  )
}

export default HeroBanner