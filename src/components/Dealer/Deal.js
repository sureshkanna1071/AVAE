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
      <img src={Flash} alt='dealers' />
      <div className='deal-content'>
        <h1>DEALERS AND DISTRIBUTORS</h1>
        <p>Join our network of valued dealers and distributors. We offer competitive pricing, extensive product support, and a collaborative partnership that drives mutual success. Benefit from our top-quality products and tap into a growing market. Let's grow together. Contact us today to explore partnership opportunities!</p>
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