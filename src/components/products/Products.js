import React from 'react'
import { tvs } from '../features/Features'
import { Box, Typography } from '@mui/material'

const Products = () => {
  return (
    <>
      {tvs.map((tv, index) => (
        <Box key={tv.id} item xs={12} 
          sx={{
            display: "flex", 
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "25px",
            backgroundColor: "#0a0a3f",
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