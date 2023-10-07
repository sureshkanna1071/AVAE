import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import WashingMachine01 from "../../../assets/WashingMachine01.png"
import WashingMachine02 from "../../../assets/WashingMachine02.png"
import Phone from "../../../assets/Phone.png"
import Phone2 from "../../../assets/Phone02.png"
import Frige from "../../../assets/Fridge.png"
import AC from "../../../assets/AC.png"
import "./upcoming.css"
import { Button, Chip, Paper } from '@mui/material'
import Background from "../../../assets/Background.jpg"
import ArcaneTv from "../../../assets/ArcaneTv.png"
import ShopIcon from '@mui/icons-material/Shop';
import { useNavigate } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Marquee from 'react-fast-marquee'

const Upcoming = () => {
  const navigate = useNavigate();
  
  const productsData = [
    {
      id: 1,
      name: 'WASHING MACHINE',
      image: WashingMachine01,
      price: 'Expected Price Range: ₹20,000 - ₹50,000',
      description: 'Discover the ultimate laundry solution with our high-performance washing machine! Boasting exceptional cleaning power, a variety of wash programs, and energy-efficient operation, this washing machine is designed to make your laundry day a breeze. Its large capacity, quiet operation, and durable construction ensure long-lasting, reliable performance, while the user-friendly controls make it accessible to everyone in your household. With a sleek design and top-notch safety features, it not only enhances your laundry area but also prioritizes your peace of mind. ',
    },
    {
      id: 1,
      name: 'ANDROID PHONE',
      image: Phone,
      price: 'Expected Price Range: ₹20,000 - ₹50,000',
      description: 'Elevate your mobile experience with our cutting-edge Android smartphone. This sleek device offers a perfect blend of power and style, delivering top-tier performance that keeps up with your dynamic lifestyle. Its key features include a high-resolution display that brings your content to life with vibrant colors and crisp details. Capture stunning moments with the exceptional camera system, equipped with AI enhancements and low-light capabilities. Plus, enjoy all-day connectivity thanks to the reliable, long-lasting battery. With a user-friendly interface and access to the latest Android updates, this smartphone is your ticket to staying at the forefront of mobile innovation.',
    },
    {
      id: 1,
      name: 'REFRIGERATOR',
      image: Frige,
      price: 'Expected Price Range: ₹20,000 - ₹50,000',
      description: 'Upgrade your kitchen and elevate your food storage game with our top-of-the-line refrigerator. Crafted for the modern household, this refrigerator is the epitome of sophistication and functionality. With its spacious interior, you will never worry about running out of storage space for your groceries, fresh produce, and beverages. Beyond its roomy design, it is an eco-conscious choice, boasting energy-efficient technology that not only saves you money but also reduces your carbon footprint.',
    },
    {
      id: 1,
      name: 'AIR CONDITIONER',
      image: AC,
      price: 'Expected Price Range: ₹20,000 - ₹50,000',
      description: 'Beat the heat and create an oasis of cool comfort in your home with our exceptional air conditioning unit. Designed to deliver outstanding performance, this AC unit is your ticket to a serene indoor environment during scorching summers. Experience rapid cooling and precise temperature control, allowing you to customize your climate to perfection. Not only does it keep you cool, but it also operates with impressive energy efficiency, keeping your utility bills in check. Its sleek and modern design seamlessly blends into any room, adding a touch of sophistication to your decor.',
    },
  ];

  return (
    <>
      <Header />
      <div>
        <h1
          style={{
            letterSpacing: "2px",
            color: "#222831",
            textAlign: "center"
          }}
        >
          <AutoAwesomeIcon fontSize='small' /> Unveiling Madha Agencies' Upcoming Innovation <AutoAwesomeIcon fontSize='small' />
        </h1>
        <Marquee>
          <img className='marquee-image' src={WashingMachine01} />
          <img className='marquee-image' src={WashingMachine02} />
          <img className='marquee-image' src={Phone} />
          <img className='marquee-image' src={Phone2} />
          <img className='marquee-image' src={Frige} />
          <img className='marquee-image' src={AC} />
        </Marquee>
      </div>
      
      {/* <div className='upcomings_slider'>
        <div className='upcomings_slider-container'>
          <span style={{"--i": 1}}><img src={WashingMachine01} /></span>
          <span style={{"--i": 2}}><img src={WashingMachine02} /></span>
          <span style={{"--i": 3}}><img src={Phone} /></span>
          <span style={{"--i": 4}}><img src={Phone2} /></span>
          <span style={{"--i": 5}}><img src={Frige} /></span>
          <span style={{"--i": 6}}><img src={AC} /></span>
        </div>
      </div> */}
      
      <div className="upcoming-products-container">
        <div className="product-list">
          {productsData.map((product, i) => (
            <Paper key={i} elevation={3} className="product-card">
              <div className='product-card-image-container'>
                <img src={product.image} alt={product.name} />
              </div>
              <h2 style={{textAlign: 'center'}} >{product.name}</h2>
              <Chip className="product-price" color="success" variant='outlined' label={product.price} />
              <p className="product-description">{product.description}</p>
            </Paper>
          ))}
        </div>
      </div>
      <div style={{ overflow: "hidden", width: "100%", backgroundImage: `url(${Background})`, backgroundSize: "cover",}}>
       <div
         className='shopnow_container'
       >
          <img className='moving-content shopnow_container-image' src={ArcaneTv} alt="tv" />
        <div
         className='shopnow_container-content'
        >
        <h1 style={{ fontSize: "50px", padding: "10px", textAlign: 'center'}}>SHOP NOW</h1>
        <p style={{textAlign: 'center'}}>Do you like what you see? Step into a world of shopping excellence and explore our collection now.</p>
        <Button 
          className='moving-content'
          onClick={() => navigate("/shop")}
          startIcon={<ShopIcon sx={{color: "cyan"}} />}
          sx={{backgroundColor: "black", color: "white", width: "50%", marginTop: "15px", "&:hover": {backgroundColor: "black", color: "white",}}}
        >
          Shop Now
        </Button>
        </div>
       </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Upcoming