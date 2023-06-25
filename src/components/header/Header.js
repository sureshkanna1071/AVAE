import React, { useState } from 'react'
import "./header.css"
import {Button, Menu, MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GoldLogo2 from "../../assets/GoldLogo2.png"

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  }

  return (
    <div className='header'>
       <a href='/'><img src={GoldLogo2} alt='Madha Agencies Logo' height="110px" width="200px" /></a>
       <div className='header_nav'>
          <p className='header_nav-items'>Features</p>
          <a href='#features' style={{textDecoration: 'none'}}><p className='header_nav-items'>Top Sellers</p></a>
          <p className='header_nav-items'>About</p>
       </div>
       <button 
           className='header_menu-button'
       >
          <p>SHOP</p>
        </button>
        <div className='header_menu'>
          {open ? <CloseIcon sx={{color: "#fde371"}} onClick={handleClick} /> :  <MenuIcon sx={{color: "#fde371"}} onClick={handleClick} />}
            {open && 
              <div className='header_menu-links scale-up-center'>
                <p className='header_nav-items'>Features</p>
                <a href='#features' style={{textDecoration: 'none'}}><p className='header_nav-items'>Top Sellers</p></a>
                <p className='header_nav-items'>About</p>
              </div>
            }
        </div>
        
          
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