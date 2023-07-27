import React from 'react'
import "./footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_icons'>
        <a href='https://api.whatsapp.com/send?phone=918098845333' target='_blank'><WhatsAppIcon sx={{color: "white", "&:hover": {color: "#cf0a0a"}, fontSize: "30px", margin: "0 10px"}} /></a>
        <a href='https://instagram.com/madha_agencies?igshid=MzRlODBiNWFlZA==' target='_blank'><InstagramIcon sx={{color: "white", "&:hover": {color: "#cf0a0a"}, fontSize: "30px", margin: "0 10px"}} /></a>
        <a href='mailto:matha.agenc@gmail.com'><EmailIcon sx={{color: "white", fontSize: "30px", "&:hover": {color: "#cf0a0a"}, margin: "0 10px"}} /></a>
        <a href='tel:8098845333' target='_blank'><LocalPhoneIcon sx={{color: "white", "&:hover": {color: "#cf0a0a"}, fontSize: "30px", margin: "0 10px"}} /></a>
      </div>
      <p>All Rights Reserved 2023</p>
    </div>
  )
}

export default Footer