import React, { useState } from 'react'
import Cas01 from '../../../assets/castor/Cas01.png';
import Cas02 from '../../../assets/castor/Cas02.png';
import Cas03 from '../../../assets/castor/Cas03.png';
import Cas04 from '../../../assets/castor/Cas04.png';
import Cas05 from '../../../assets/castor/Cas05.png';
import Remote from "../../../assets/Remote.png"
import Hdmi from "../../../assets/Hdmi.png"
import Cast from '../../../assets/Cast.png';
import Dolby from '../../../assets/Dolby.png';
import Andriod from '../../../assets/Android.png';
import "./detailspage.css"
import { Button, Chip, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';
import ShopIcon from '@mui/icons-material/Shop';
import Footer from '../../footer/Footer';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';

const DetailsPage = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(Cas01);
  const sizes = ["30\"", "40\"","50\"","60\"","70\""];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const {cartItems, setCartItems} = useContext(CartContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
        <Header />
        <div className='details'> 
          <div className='details_imgcontainer'>
            <div className='details_imgcontainer-small'>
              <div style={{border: imageSrc === Cas01 && "1.5px solid black"}} onClick={() => setImageSrc(Cas01)}><img src={Cas01} width="65px" style={{maxHeight: "250px"}} /></div>
              <div style={{border: imageSrc === Cas03 && "1.5px solid black"}} onClick={() => setImageSrc(Cas03)}><img src={Cas03} width="65px" style={{maxHeight: "250px"}} /></div>
              <div style={{border: imageSrc === Cas02 && "1.5px solid black"}} onClick={() => setImageSrc(Cas02)}><img src={Cas02} width="65px" style={{maxHeight: "250px"}} /></div>
              <div style={{border: imageSrc === Cas05 && "1.5px solid black"}} onClick={() => setImageSrc(Cas05)}><img src={Cas05} width="65px" style={{maxHeight: "250px"}} /></div>
              <div style={{border: imageSrc === Remote && "1.5px solid black"}} onClick={() => setImageSrc(Remote)}><img src={Remote} style={{maxHeight: "65px"}} /></div>
            </div>
            <div className='details_imgcontainer-large'>
              <img src={imageSrc} />
            </div>
            <div className='details_imgcontainer-icons'>
              <img src={Hdmi} alt='Hdmi' />
              <img src={Cast} alt='Cast' />
              <img src={Andriod} alt='Andriod' />
              <img src={Dolby} alt='Dolby' />
            </div>
          </div>
          <div className='details_content'>
            <div className='details_content-name'>
              <p>Castor Series LED TV</p>
              <p>₹ 55000</p>
            </div>
            <hr />
            <div className='details_content-sizeinfo'>
              <p>Screen sizes (in inches)</p>
              <div className='details_content-sizes'>
                {sizes.map((size, i) => 
                  <Chip 
                     onClick={() => setSelectedSize(size)} 
                     key={i} 
                     sx={
                      selectedSize === size 
                      ? {backgroundColor: "black", 
                          color: "white", 
                          "&:hover": {backgroundColor: "black", color: "white",}
                      }
                      : null
                    } 
                     label={size}
                  />
                )}
              </div>
            </div>
            <hr />
            <div className='details_content-specs'>
              <p style={{fontSize: 'large'}}>Specifications</p>
              {/* <ul> */}
                <p>
                  <strong>Andriod version:</strong> 5.1
                </p>
                <p>
                  <strong>Refresh Rate:</strong> 120Hz
                </p>
                <p>
                  <strong>HDR (High Dynamic Range):</strong> HDR10, Dolby Vision
                </p>
                <p>
                  <strong>Connectivity:</strong> HDMI, USB
                </p>
                <p>
                  <strong>Accessories:</strong> Remote, Stand, User manual
                </p>
              {/* </ul> */}
            </div>
            <hr />
            <div className='details_content-buy'>
              <Button 
                fullWidth
                startIcon={<ShopIcon />}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: 'black',
                    color: 'white',
                  }
                }}
                onClick={() => {
                  setOpenSnackbar(true);
                  setCartItems({
                    name: "Castor LED TV",
                    price: "55,000",
                    description: "The Castor Full HD LED TV offers vibrant visuals and clear picture quality in a compact size. With its Full HD resolution, you can enjoy crisp images and realistic colors. ",
                    count: 1,
                    image: Cas01,
                  });
                }}
              >
                Buy now
              </Button>
            </div>
            <hr />
            <div className='details_content-shipdetails'>
              <p>Shipping to the Tamil Nadu, Kerela & Pondicherry only.</p>
              <p>Delivery time: 5-10 days</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            flexWrap: 'wrap',
            alignItems: "center",
            gap: "50px"
          }}
        >
        </div>
        <h4 style={{textAlign: "center", margin: "20px"}}>DETAILED INFORMATION</h4>
        <div
          className='details_detailedinfo'
        >
          <p><strong>Screen Format:</strong> 16:9</p>
          <p>Resolution: 1366 x 768</p>
          <p>Dynamic Contrast Ratio: 20,00,000</p>
          <p>Brightness: 250 cd/m2</p>
          <p>Display Colors: 16:7 M</p>
          <p>Minimum View Angle: 178° H/178° V</p>
          <p>Max Power Consumption: &it; 45w</p>
          <p>Response Time: 20ms</p>
          <p>Video Color System: PAL + SECAM</p>
          <p>HDMI: 1</p>
          <p>Power Requirement: 110 - 270v AV, 5060Hz</p>
          <p>OSD Language: English</p>
          <p>USB 2.0: 2</p>
          <p>PC VGA: yes</p>
          <p>PC Audio: yes</p>
          <p>AV in: 2</p>
          <p>RF in: 2</p>
          <p>Audio Output: 10W + 10W</p>
        </div>
      <Footer />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="Item Added To Cart!"
      />
    </>
  )
}

export default DetailsPage