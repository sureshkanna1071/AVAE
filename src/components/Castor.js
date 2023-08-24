import React from 'react'
import Cas01 from '../assets/castor/Cas01.png';
import Cas02 from '../assets/castor/Cas02.png';
import Cas03 from '../assets/castor/Cas03.png';
import Cas04 from '../assets/castor/Cas04.png';
import Cas05 from '../assets/castor/Cas05.png';
import { tvs } from './features/Features'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Castor = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div 
          style={{
            height: "90vh", 
          }}
        > 
          <div>
            
          </div>
          <h1 style={{textAlign: 'center'}}>Castor Series</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            flexWrap: 'wrap',
            alignItems: "center",
            gap: "50px"
          }}
        >
          <img src={Cas01} width="250px" style={{maxHeight: "250px"}} />
          <img src={Cas03} width="250px" style={{maxHeight: "250px"}} />
          <img src={Cas02} width="250px" style={{maxHeight: "250px"}} />
          <img src={Cas05} width="250px" style={{maxHeight: "250px"}} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "100px",
            margin: "25px 0",
            padding: "25px"
          }}
        >
          <div>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
          </div>
          <div>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
          </div>
          <div>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
          </div>
          <div>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
            <h3>HDMI</h3>
          </div>
        </div>
        <div
         style={{
          textAlign: 'center',
          margin: "25px"
         }}
        >
          <Button onClick={() => navigate("/maintenance")} variant="contained" sx={{backgroundColor: "#cf0a0a"}}>Buy Now</Button>
        </div>
    </div>
  )
}

export default Castor