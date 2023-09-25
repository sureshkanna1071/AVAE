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
import { Button, Chip, CircularProgress, Snackbar } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../header/Header';
import ShopIcon from '@mui/icons-material/Shop';
import Footer from '../../footer/Footer';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextProvider';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const DetailsPage = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState();
  const sizes = ["30\"", "40\"","50\"","60\"","70\""];
  const [selectedSize, setSelectedSize] = useState();
  const {cartItems, setCartItems} = useContext(CartContext);
  const { series } = useParams();
  const [itemData, setItemData] = useState([]);
  const [currentItem, setCurrentItem] = useState({})
  const [loading, setLoading] = useState(true);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    axios.get(`https://avaeserver.onrender.com/${series}`)
         .then((res) => {
            setItemData(res.data);
            setCurrentItem(res.data[0]);
            setSelectedSize(res.data[0].size);
            setImageSrc(res.data[0].image_urls[0]);
            setLoading(false);
         })
         .catch((err) => {
          console.log(err);
          setLoading(false);
         })
  }, [])

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  console.log("currentItem", currentItem.highlights)

  return (
    <>
        <Header />
        {loading 
         ? <div style={{height: "90vh", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
           </div>
         : 
         <>
          <div className='details'> 
            <div className='details_imgcontainer'>
              <div className='details_imgcontainer-small'>
                {currentItem && currentItem?.image_urls.map((img, i) => 
                  <div style={{border: imageSrc === img && "1.5px solid black", height: '70px', width: "70px", padding: "5px"}} onClick={() => setImageSrc(img)}><img src={img} width="60px" style={{maxHeight: "60px",}} /></div>
                )}
                {/* <div style={{border: imageSrc === Cas01 && "1.5px solid black"}} onClick={() => setImageSrc(Cas01)}><img src={Cas01} width="65px" style={{maxHeight: "250px"}} /></div>
                <div style={{border: imageSrc === Cas03 && "1.5px solid black"}} onClick={() => setImageSrc(Cas03)}><img src={Cas03} width="65px" style={{maxHeight: "250px"}} /></div>
                <div style={{border: imageSrc === Cas02 && "1.5px solid black"}} onClick={() => setImageSrc(Cas02)}><img src={Cas02} width="65px" style={{maxHeight: "250px"}} /></div>
                <div style={{border: imageSrc === Cas05 && "1.5px solid black"}} onClick={() => setImageSrc(Cas05)}><img src={Cas05} width="65px" style={{maxHeight: "250px"}} /></div>
                <div style={{border: imageSrc === Remote && "1.5px solid black"}} onClick={() => setImageSrc(Remote)}><img src={Remote} style={{maxHeight: "65px"}} /></div> */}
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
                <h4>{currentItem.title}</h4>
                <h4 style={{color: '#cc2643'}}>{`₹ ${currentItem.price}`}</h4>
              </div>
              <div className='details_content-desc'>
                <p>{currentItem.description}</p>
              </div>
              <hr />
              <div className='details_content-sizeinfo'>
                <h4>Screen Size <span style={{fontSize: 'x-small'}}>(in inches)</span> </h4>
                <div className='details_content-sizes'>
                  {itemData.map((itemData, i) => 
                    <Chip 
                      onClick={() => {
                        setSelectedSize(itemData.size);
                        setCurrentItem(itemData);
                        setImageSrc(itemData.image_urls[0]);
                      }} 
                      key={i} 
                      sx={
                        selectedSize === itemData.size 
                        ? {backgroundColor: "black", 
                            color: "white", 
                            "&:hover": {backgroundColor: "black", color: "white",}
                        }
                        : null
                      } 
                      label={itemData.size}
                    />
                  )}
                </div>
              </div>
              <hr />
              <div className='details_content-specs'>
                <h4 style={{fontSize: 'large'}}>Specifications</h4>
                {Object.keys(currentItem.highlights).map((key) => 
                  <p>
                    <strong>{`${key}:`}</strong> {currentItem.highlights[key]}
                  </p>
                )}
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
                    Cookies.set("cart", JSON.stringify(currentItem), {expires: 7});
                    setCartItems(currentItem);
                  }}
                >
                  Add item to cart
                </Button>
              </div>
              {/* <hr /> */}
              <div className='details_content-shipdetails'>
                <p>Shipping to the Tamil Nadu, Kerela & Pondicherry only.</p>
                <p>Delivery time: 5-10 days.</p>
              </div>
            </div>
          </div>
          <div className='details_info'>
            <div>
              <h4 style={{ margin: "20px 50px"}}>DETAILED INFORMATION</h4>
              <div
                className='details_info-detailedinfo'
              >
                {Object.keys(currentItem.details).map((key) => 
                      <p>
                        <strong>{`${key}:`}</strong> {currentItem.details[key]}
                      </p>
                )}
              </div>
            </div>
            <hr />
            <div>
              <h4 style={{ margin: "20px 50px"}}>WARRANTY</h4>
              <div
                className='details_info-warranty'
              >
                <p>Our 1-year replacement warranty covers any manufacturing defects or malfunctions that may occur with your LED TV within the first year of purchase. This includes issues related to the display, audio, internal components, or any other part of the TV that affects its normal operation.Our customer support team is here to assist you throughout the warranty period. Feel free to reach out to us for any questions, concerns, or assistance you may need regarding your LED TV. Your satisfaction is our top priority, and we are dedicated to providing the support you deserve.
                </p>
              </div>
            </div>
          </div>
        </>
        }
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