import React, { useEffect } from 'react'
import "./categories.css"
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { tvs } from '../../features/Features'
import { Button, Paper } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useState } from 'react'
import VideoModal from '../../VideoModal'
import ProductCard from '../../productcard/ProductCard'
import axios from 'axios'

const Categories = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://avaeserver.onrender.com/categories")
         .then((res) => {
          console.log(res);
          setCategories(res.data);
         })
         .catch((err) => {
          console.log(err);
         })
  }, []);

  return (
    <>
      <Header />
      <div className='shop_categories'>
        <h1 style={{color: 'darkblue', textAlign: 'center', letterSpacing: "3px"}}>Explore Our Range of Products</h1>
        <div className='shop_categories-tvs'>
          <h3 className='shop_categories-title'>LED TVS</h3>
          <div className='shop_categories-list'>
            {categories.map((tv, i) => <ProductCard key={i} {...tv} />)}
          </div>
        </div>
      </div>
      <div className='shopwithus'>
         <h1 style={{color: 'darkblue', letterSpacing: '2px'}}><AutoAwesomeIcon /> Why shop with us? <AutoAwesomeIcon /></h1>
         <p className='shopwithus-details'>
         Our primary goal is to offer unparalleled customer service and reliable guidance when selecting the finest home appliances for our clients' residences. Furthermore, we extend complimentary delivery services for all our products, ensuring secure transport right to your doorstep. For added convenience, we facilitate EMIs to make your purchases more manageable. We assure your contentment with our essential merchandise and commit to exceeding expectations through our dedicated customer support team, committed to providing top-notch assistance.
          </p>
          <div className='shopwithus_info'>
            <Paper
              className='teal'
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                padding: "5px",
                color: "white"
              }}
            >
              <h1 style={{display: 'flex', alignItems: 'flex-start', gap: "2px"}}>
                500 
               <span style={{fontSize: "large"}}>+</span>
              </h1>
              <p style={{fontSize: "small"}}>Happy Customers</p>
            </Paper>
            <Paper
              className='teal'
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                color: "white"
              }}
            >
              <h1 style={{display: 'flex', alignItems: 'flex-start', gap: "2px"}}>
                20 
               <span style={{fontSize: "large"}}>+</span>
              </h1>
              <p style={{fontSize: "small"}}>Unique Products</p>
            </Paper>
            <Paper
              className='teal'
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                color: "white"
              }}
            >
              <h1 style={{display: 'flex', alignItems: 'flex-start', gap: "2px"}}>
                1 
               <span style={{fontSize: "large"}}>yr</span>
              </h1>
              <p style={{fontSize: "small"}}>Replacement Warranty</p>
            </Paper>
          </div>
          <Button
            variant='contained'
            className='tomato shopwithus-learnMore'
            startIcon={<SmartDisplayIcon />}
            endIcon={<CelebrationIcon />}
            onClick={() => setOpenVideo(true)}
          >
            Get to Know Us Better
          </Button>
      </div>
      <VideoModal openVideo={openVideo} setOpenVideo={setOpenVideo} />
      <Footer />
    </>
    
  )
}

export default Categories