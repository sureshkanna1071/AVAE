import React, { useState } from 'react'
import "./header.css"
import {Button, IconButton, Menu, MenuItem, Modal, Tooltip} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewLogo from "../../assets/NewLogo.png";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContextProvider';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();
  const {cartItems, setCartItems} = useContext(CartContext);

  const handleClick = (e) => {
    setOpen(!open);
  }

  console.log(cartItems)

  return (
    <div className='header'>
       <a href='/'><img src={NewLogo} alt='Madha Agencies Logo' height="auto" width="160px" /></a>
       <div className='header_nav'>
          <p onClick={() => navigate("/")} className='header_nav-items'>Home</p>
          <a href='/products' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Products</p></a>
          <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
       </div>
       <button 
           className='header_menu-button'
           onClick={() => navigate("/shop")}
       >
         <p>SHOP</p>
        </button>
        <Tooltip title="Cart"><IconButton onClick={() => setOpenCart(true)}><ShoppingCartIcon /></IconButton></Tooltip>
        <div className='header_menu'>
          {open ? <CloseIcon sx={{color: "#CF0A0A"}} onClick={handleClick} /> :  <MenuIcon sx={{color: "#CF0A0A"}} onClick={handleClick} />}
            {open && 
              <div className='header_menu-links scale-up-center'>
                <p onClick={() => navigate("/")} className='header_nav-items'>Home</p>
                <a href='/products' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Products</p></a>
                <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
              </div>
            }
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
                      <img src={cartItems.image} alt="" height="75px" width="75px" />
                      <p style={{width: "90%"}}>{cartItems.name}</p>
                      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
                        <p>{cartItems.price}</p>
                        <Button onClick={() => setCartItems(null)} size='small' variant='outlined' color="error">Remove</Button>
                      </div>
                    </>
                  : <p className='cart_items-empty'>Your cart is empty.</p>}
              </div>
            </div>
            <hr />
            <div className='cart_checkout'>
              <Button disabled={!cartItems} sx={{backgroundColor: "black", color: "white", "&:hover": {backgroundColor: "black", color: "white",}}} fullWidth variant="contained">CHECKOUT</Button>
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