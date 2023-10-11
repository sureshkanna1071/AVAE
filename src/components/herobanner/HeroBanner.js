import React, { useEffect, useState } from 'react'
import "./heroBanner.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Banner01 from "../../assets/Banner01.jpg"
import Banner02 from "../../assets/Banner02.jpg"
import Banner03 from "../../assets/Banner03.jpg"
import Banner04 from "../../assets/Banner04.jpg"
import Banner05 from "../../assets/Banner05.jpg"
import Banner06 from "../../assets/Banner06.jpg"

import Mobile1 from "../../assets/Mobile1.jpg"
import Mobile2 from "../../assets/Mobile2.jpg"
import Mobile3 from "../../assets/Mobile3.jpg"
import Mobile4 from "../../assets/Mobile4.jpg"
import Mobile5 from "../../assets/Mobile5.jpg"
import Mobile6 from "../../assets/Mobile6.jpg"
import axios from 'axios';

const HeroBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios.get("/")
         .then((res) => {
          console.log("server started")
         })
         .catch((err) => {
          console.log(err);
         })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className="heroBanner">
       {width > 950 ? <Slider {...settings}>
       <div>
          <img src={Banner06} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner01} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner05} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner03} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner04} alt="banner" className='heroBanner-images' />
        </div>
        <div>
          <img src={Banner02} alt="banner" className='heroBanner-images' />
        </div>
      </Slider>
      : <Slider {...settings}>
      <div>
        <img src={Mobile6} alt="banner" className='heroBanner-images' />
      </div>
      <div>
        <img src={Mobile2} alt="banner" className='heroBanner-images' />
      </div>
      <div>
        <img src={Mobile4} alt="banner" className='heroBanner-images' />
      </div>
      <div>
        <img src={Mobile1} alt="banner" className='heroBanner-images' />
      </div>
      <div>
        <img src={Mobile5} alt="banner" className='heroBanner-images' />
      </div>
      <div>
        <img src={Mobile3} alt="banner" className='heroBanner-images' />
      </div>
    </Slider> }
       {/* <img className='' src={NewOne} alt="Banner" width="100%" height="100%" /> */}
    </div>
  )
}

export default HeroBanner