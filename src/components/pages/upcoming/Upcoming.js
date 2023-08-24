import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import WashingMachine01 from "../../../assets/WashingMachine01.png"
import WashingMachine02 from "../../../assets/WashingMachine02.png"
import WashingMachine03 from "../../../assets/WashingMachine03.png"
import NewLogo from "../../../assets/Castor.png"
import Phone from "../../../assets/Phone.png"
import Phone02 from "../../../assets/Phone02.png"
import "./upcoming.css"
import { Button, Chip, Paper } from '@mui/material'
import Background from "../../../assets/Background.jpg"
import ArcaneTv from "../../../assets/ArcaneTv.png"
import ShopIcon from '@mui/icons-material/Shop';
import { useNavigate } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Upcoming = () => {
  const navigate = useNavigate();
  
  const productsData = [
    {
      id: 1,
      name: 'Product A',
      image: NewLogo,
      price: 'Expected Price Range: 10,000rs - 20,000rs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 1,
      name: 'Product A',
      image: NewLogo,
      price: 'Expected Price Range: 10,000rs - 20,000rs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 1,
      name: 'Product A',
      image: NewLogo,
      price: 'Expected Price Range: 10,000rs - 20,000rs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    // Add more product data here
  ];

  return (
    <>
      <Header />
      <div className='upcomings_slider'>
        <h1
          style={{
            height: "90vh",
            position: "absolute",
            letterSpacing: "2px",
            color: "darkblue"
          }}
        ><AutoAwesomeIcon />  Unveiling Madha Agencies' Upcoming Innovation <AutoAwesomeIcon /></h1>
        <div className='upcomings_slider-container'>
          <span style={{"--i": 1}}><img src={WashingMachine02} /></span>
          <span style={{"--i": 2}}><img src={WashingMachine03} /></span>
          <span style={{"--i": 3}}><img src={Phone} /></span>
          <span style={{"--i": 4}}><img src={WashingMachine02} /></span>
          <span style={{"--i": 5}}><img src={WashingMachine03} /></span>
          <span style={{"--i": 6}}><img src={Phone02} /></span>
        </div>
      </div>
      <div className="upcoming-products-container">
        <div className="product-list">
          {productsData.map(product => (
            <Paper elevation={3} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <Chip className="product-price" color="primary"  size='large' label={product.name} />
              <Chip className="product-price" color="success" variant='outlined' label={product.price} />
              <p className="product-description">{product.description}</p>
            </Paper>
          ))}
        </div>
      </div>
      <div style={{height: "90vh", overflow: "hidden", width: "100%", backgroundImage: `url(${Background})`, backgroundSize: "cover", borderRadius: "35px 35px 0 0"}}>
       <div
         className='shopnow_container'
       >
          <img className='moving-content shopnow_container-image' src={ArcaneTv} alt="tv" />
        <div
         className='shopnow_container-content'
        >
        <h1 style={{ fontSize: "50px", padding: "10px"}}>SHOP NOW</h1>
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