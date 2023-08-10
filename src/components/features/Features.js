import React from 'react'
import "./features.css"
import ProductCard from '../productcard/ProductCard'
import Castor from "../../assets/Castor.png"
import Cosmo from "../../assets/Cosmo.png"
import Nova from "../../assets/Nova.png"
import Polaris from "../../assets/Polaris.png"
import Spica from "../../assets/Spica.png"
import Supernova from "../../assets/Supernova.png"
import Vega from "../../assets/Vega.png"


export const tvs = [
  {
    id: 1,
    name: 'POLARIS LCD TV SERIES',
    imageSrc: Polaris,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 2,
    name: 'CASTOR LED TV SERIES',
    imageSrc: Castor,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 3,
    name: 'COSMO SMART TV SERIES',
    imageSrc: Cosmo,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 4,
    name: 'NOVA ANDROID TV SERIES',
    imageSrc: Nova,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 5,
    name: 'VEGA 4K ANDROID TV SERIES',
    imageSrc: Vega,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 6,
    name: 'SPICA 4K TV SERIES',
    imageSrc: Spica,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
  {
    id: 7,
    name: 'SUPER NOVA WEB OS SERIES',
    imageSrc: Supernova,
    videoUrl: 'URL_OF_TV_1_YOUTUBE_VIDEO',
  },
]

const Features = () => {

  return (
    <div id='features'>
      <h1>Top Sellers</h1>
      <div className='features_container'>
        {tvs.map((tv) => <ProductCard {...tv} />)}
      </div>
    </div>
    
  )
}

export default Features