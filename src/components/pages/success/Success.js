import React from 'react'
import "./success.css"
import AnimationData from "../../../assets/Animation - 1695368382192.json"
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Success = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        height: '90vh',
        width: '100%',
        gap: '15px'
      }}
    >
       <Lottie animationData={AnimationData} style={{width: "50vw"}}  />
       <p className='order_success-message'>Thank you for your order with AVAE. We're processing your order with care, and you can expect an email or sms with all the order details soon. If you have any questions or need assistance, please feel free to reach out to our customer support team at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>. We appreciate your patience and business!</p>
       <Button variant='contained' color='success' onClick={() => navigate("/")}>Go To Homepage</Button>
    </div>
  )
}

export default Success