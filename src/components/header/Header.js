import React, { useState } from 'react'
import "./header.css"
import {Badge, Button, IconButton, Popover, Modal, Tooltip, Hidden} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewLogo from "../../assets/NewLogo.png";
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContextProvider';
import { TbTruckDelivery } from 'react-icons/tb';
import Cookies from 'js-cookie';
import StoreIcon from '@mui/icons-material/Store';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const navigate = useNavigate();
  const {cartItems, setCartItems} = useContext(CartContext);
  const location = useLocation();
  const pathname = location.pathname;
  const [orders, setOrders] = useState(Cookies.get('orders') ? JSON.parse(Cookies.get('orders')) : null);

  const handleClick = (e) => {
    setOpen(!open);
  }

  const handleCheckout = () => {
    navigate("/order");
    setOpenCart(false);
  }

  return (
    <div className='header'>
       <a href='/'><img src={NewLogo} alt='Madha Agencies Logo' height="auto" width="160px" /></a>
       <div className='header_nav'>
          <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
          <a href='/products' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Products</p></a>
          <a style={{textDecoration: "none"}} href='/dealers'><p className='header_nav-items'>Dealers Enquiry</p></a>
          <p onClick={() => navigate("/contact")} className='header_nav-items'>Contact Us</p>
       </div>
       <Hidden smDown>
        <Button
           variant='contained'
           startIcon={<StoreIcon />}
           className='header_menu-button'
           onClick={() => navigate("/shop")}
        >
          STORE
        </Button>
       </Hidden>
       
      <div style={{height: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: "10px", padding: "0 10px", }}>
        <div>
          <Badge sx={{marginRight: '8px'}} badgeContent={cartItems ? 1 : 0} color="primary" overlap="circular">
            <Tooltip title="Cart"><IconButton onClick={() => setOpenCart(true)}><ShoppingCartIcon /></IconButton></Tooltip>
          </Badge>
          {orders 
            && <Badge sx={{marginRight: '8px'}} badgeContent={orders && orders.length} color="primary" overlap="circular">
                <Tooltip title="My Orders"><IconButton onClick={() => setOpenOrders(true)}><TbTruckDelivery /></IconButton></Tooltip>
              </Badge>
          }
        </div>
        <div className='header_menu'>
            {open ? <CloseIcon sx={{color: "#CF0A0A"}} onClick={handleClick} /> :  <MenuIcon sx={{color: "#CF0A0A"}} onClick={handleClick} />}
              {open && 
                <div className='header_menu-links scale-up-center'>
                  <p onClick={() => navigate("/")} className='header_nav-items'>Home</p>
                  <a href='/products' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Products</p></a>
                  <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
                  <p onClick={() => navigate("/contact")} className='header_nav-items'>Contact Us</p>
                  <p onClick={() => navigate("/shop")} className='header_nav-items'>Store</p>
                </div>
              }
          </div>
        </div>
        <Modal
          open={openCart}
          onClose={() => setOpenCart(false)}
          sx={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div
            className='cart'
          >
            <div className='cart_header'>
              <h4 style={{letterSpacing: 2}}>CART</h4>
              <IconButton onClick={() => setOpenCart(false)}><CloseIcon fontSize='small' /></IconButton>
            </div>
            <hr />
            <div className='cart_items'>
              <div className='cart_items-box'>
                {cartItems 
                  ? <>
                      <img src={cartItems.image_urls[0]} alt="" width="75px" />
                      <p style={{width: "60%"}}>{cartItems.title}</p>
                      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
                        <p>₹ {cartItems.price}</p>
                        <Button 
                          onClick={() => {
                            setCartItems(null);
                            Cookies.remove("cart");
                          }} 
                          sx={{fontSize: '10px'}}
                          size='small' 
                          variant='outlined' 
                          color="error"
                        >
                            Remove
                        </Button>
                      </div>
                    </>
                  : <p className='cart_items-empty'>Your cart is empty.</p>}
              </div>
              <hr />
            </div>
            <hr />
            <div className='cart_checkout'>
              <Button onClick={handleCheckout} disabled={!cartItems} sx={{backgroundColor: "black", color: "white", "&:hover": {backgroundColor: "black", color: "white",}}} fullWidth variant="contained">CHECKOUT</Button>
            </div>
          </div>
        </Modal>
        <Modal
          open={openOrders}
          onClose={() => setOpenOrders(false)}
          sx={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div
            className='cart'
          >
            <div className='cart_header'>
              <h4 style={{letterSpacing: 2}}>My Orders</h4>
              <IconButton onClick={() => setOpenOrders(false)}><CloseIcon fontSize='small' /></IconButton>
            </div>
            <hr />
            <div className='cart_items'>
            {orders && orders?.map((order, i) =>
              <>
                <div className='cart_items-box'>
                  <img src={order?.image_urls[0]} alt="" width="75px" />
                  <p style={{width: "60%"}}>{order?.title}</p>
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
                    <p>₹ {order?.price}</p>
                  </div>
                </div>
                <hr />
              </>
            )}
            </div>
          </div>
        </Modal>

        {/* <Menu
          open={open}
          anchorEl={anchor}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableScrollLock
        >
          <MenuItem><p className='header_nav-items'>Features</p></MenuItem>
          <MenuItem><a href='#features' style={{textDecoration: 'none'}}><p className='header_nav-items'>Top Sellers</p></a></MenuItem>
          <MenuItem><p className='header_nav-items'>About</p></MenuItem>
        </Menu> */}
    </div>
  )
}

export default Header