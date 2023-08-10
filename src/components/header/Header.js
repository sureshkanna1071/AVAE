import React, { useState } from 'react'
import "./header.css"
import {Button, Menu, MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewLogo from "../../assets/NewLogo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setOpen(!open);
  }

  return (
    <div className='header'>
       <a href='/'><img src={NewLogo} alt='Madha Agencies Logo' height="auto" width="160px" /></a>
       <div className='header_nav'>
          <p onClick={() => navigate("/")} className='header_nav-items'>Home</p>
          <a href='#explore' style={{textDecoration: 'none'}}><p className='header_nav-items'>Top Sellers</p></a>
          <a href='/projects' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Projects</p></a>
          <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
       </div>
       <button 
           className='header_menu-button'
           onClick={() => navigate("/maintenance")}
       >
         <p>SHOP</p>
        </button>
        <div className='header_menu'>
          {open ? <CloseIcon sx={{color: "#CF0A0A"}} onClick={handleClick} /> :  <MenuIcon sx={{color: "#CF0A0A"}} onClick={handleClick} />}
            {open && 
              <div className='header_menu-links scale-up-center'>
                <p onClick={() => navigate("/")} className='header_nav-items'>Home</p>
                <a href='#explore' style={{textDecoration: 'none'}}><p className='header_nav-items'>Features</p></a>
                <a href='/projects' style={{textDecoration: 'none'}}><p className='header_nav-items'>Future Projects</p></a>
                <p onClick={() => navigate("/aboutus")} className='header_nav-items'>About</p>
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