import React from 'react'
import { tvs } from '../features/Features'
import { Box, Typography } from '@mui/material'

const Products = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#000'
        }}
      >
        <h2
          style={{
            textAlign: "center",
            padding: "50px 0 25px",
            letterSpacing: '2px',
            background: 'linear-gradient(to right, #ff3366, orange)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          LED TVs Unleashed: Uncover the Ultimate Selection for Your Entertainment!
        </h2>
      </div>
        
      {tvs.map((tv, index) => (
        <Box key={tv.id} item xs={12} 
          sx={{
            display: "flex", 
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "25px",
            backgroundColor: "#000000",
            padding: "50px 0"
         }}
        >
            <img src={tv.imageSrc} alt={tv.name} style={{ width: '60%', height: 'auto' }} />
            <Typography 
            variant="h5" 
            align="center" 
            sx={{
                textAlign: 'center',
                letterSpacing: '2px',
                background: 'linear-gradient(to right, #ff3366, orange)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}
            >
                {tv.name}
            </Typography>
        </Box>
      ))}
    </>
  )
}

export default Products