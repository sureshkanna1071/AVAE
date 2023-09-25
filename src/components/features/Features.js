import React, { useEffect, useState } from 'react'
import "./features.css"
import ProductCard from '../productcard/ProductCard'
import Fire from "../../assets/Castor.png"
import Space from "../../assets/Polaris.png"
import Wind from "../../assets/Wind.png"
import Sand from "../../assets/Sand.png"
import Water from "../../assets/Water.png"
import ShowCard from '../showcard/ShowCard'
import Slider from 'react-slick';
import TerraFont from "../../assets/TerraFont.png"
import FireFont from "../../assets/FireFont.png"
import AirFont from "../../assets/AirFont.png"
import WaterFont from "../../assets/WaterFont.png"
import SpaceFont from "../../assets/SpaceFont.png"

export const tvs = [
  {
    id: 1,
    name: 'AVAE ASTRAL SERIES',
    imageSrc: Space,
    titleImg: SpaceFont,
    description: 'The heart of this LED TV is its stunning display. With the latest in LED technology, it delivers unparalleled clarity and vibrant colors. Every scene comes to life with breathtaking detail and precision, making your favorite movies, shows, and sports events a feast for the eyes.',
  },
  {
    id: 2,
    name: 'AVAE PYRO SERIES',
    imageSrc: Fire,
    titleImg: FireFont,
    description: 'Behind the scenes, our LED TV houses powerful hardware that ensures seamless performance. Lightning-fast processors, ample storage, and top-tier graphics processing ensure that your TV runs smoothly, even with the most demanding applications and content.',
  },
  {
    id: 3,
    name: 'AVAE AQUAGEM SERIES',
    imageSrc: Water,
    titleImg: WaterFont,
    description: 'Dive into a sea of vibrant colors and crystal-clear clarity with AquaGem\'s cutting-edge LED technology. Its high-resolution display and dynamic contrast ratio make every frame come alive, from the deepest blues of the ocean to the brightest hues of a tropical sunset.',
  },
  {
    id: 4,
    name: 'AVAE AIRTRON SERIES',
    imageSrc: Wind,
    titleImg: AirFont,
    description: 'Elevate your TV experience with Airtron, where innovation meets entertainment. Enjoy stunning visuals and immersive sound that will transport you to new heights of entertainment, making every viewing moment a true pleasure.',
  },
  {
    id: 5,
    name: 'AVAE TERRA SERIES',
    titleImg: TerraFont,
    imageSrc: Sand,
    description: 'Immerse yourself in the natural world like never before with Terra. This TV series brings the beauty of the Earth to your living room, offering vivid imagery and captivating sound that will ground you in the heart of nature\'s wonders, making every scene come to life.',
  }
]

const Features = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(3);

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
    centerMode: true,
    slidesToShow: width > 800 ? 3 : 1,
    speed: 300,
    centerPadding: 0,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div id='features'>
      <h1>Top Sellers</h1>
      {/* <div className='features_container'>
        
      </div> */}
      <Slider {...settings}>
      {tvs.map((tv, idx) =>
        <div key={idx} className={idx === imageIndex ? 'slide activeSlide': 'slide'}>
         <ShowCard {...tv} />
        </div> 
      )}
      </Slider>
    </div>
  )
}

export default Features