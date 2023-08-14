import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import NewLogo from "../../../assets/Castor.png"
import "./upcoming.css"
import { Button, Chip, Paper } from '@mui/material'
import Background from "../../../assets/Background.jpg"
import ArcaneTv from "../../../assets/ArcaneTv.png"
import ShopIcon from '@mui/icons-material/Shop';
import { Fade } from 'react-reveal'

const Upcoming = () => {
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
      <div className="upcoming-products-container">
        <h1>Upcoming Products</h1>
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
      <div style={{height: "90vh", width: "100%", backgroundImage: `url(${Background})`, backgroundSize: "cover", borderRadius: "35px 35px 0 0"}}>
       <div
         style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: "100%"}}
       > 
        <Fade left>
          <img className='moving-content' src={ArcaneTv} alt="tv" style={{ position: "inline", height: "auto", width: '80%'}} />
        </Fade>
        <div
         style={{
          position: "absolute",
          right: "50px",
          marginTop: "100px",
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          gap: "15px",
          maxWidth: "500px"
         }}
        >
        <h1 style={{ fontSize: "50px", padding: "10px"}}>SHOP NOW</h1>
        <p style={{textAlign: 'center'}}>Do you like what you see? Step into a world of shopping excellence and explore our collection now.</p>
        <Button 
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