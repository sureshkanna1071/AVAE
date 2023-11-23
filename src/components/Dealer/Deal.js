import React from 'react'
import "./deal.css"
import Flash from "../../assets/Flash.png"
import { Button } from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy';
import { useNavigate } from 'react-router-dom';

const Deal = () => {
    const navigate = useNavigate();
  return (
    <div className='deal' id='dealer'>
      {/* <img src={Flash} alt='dealers' /> */}
      <div className='deal-content'>
        <h1>Unlock the Power of Partnership in Oman!</h1>
        <p>AVAE, a renowned name in the world of LED TVs, is proud to announce its expedition into Oman, seeking dynamic partnerships with Dealers and Distributors. As we embark on this exciting journey, we invite you to join hands with us and be part of our success story.</p>
        <Button
          className='moving-content'
          variant="outlined"
          onClick={() => navigate("/dealers")}
          startIcon={<PolicyIcon sx={{color: "whitesmoke"}} />}
          sx={{borderColor: "whitesmoke", color: "whitesmoke", width: "50%", marginTop: "15px", "&:hover": {borderColor: "whitesmoke", color: "whitesmoke",}}}
        >
          learn more
        </Button>
      </div>
    </div>
  )
}

export default Deal