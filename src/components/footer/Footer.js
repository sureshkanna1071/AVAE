import React from 'react'
import "./footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_icons'>
        <WhatsAppIcon sx={{color: "white", fontSize: "30px", margin: "0 10px"}} />
        <FacebookIcon sx={{color: "white", fontSize: "30px", margin: "0 10px"}} />
        <EmailIcon sx={{color: "white", fontSize: "30px", margin: "0 10px"}} />
        <LocalPhoneIcon sx={{color: "white", fontSize: "30px", margin: "0 10px"}} />
      </div>
      <p>ALL Rights Reserved 2023</p>
    </div>
  )
}

export default Footer