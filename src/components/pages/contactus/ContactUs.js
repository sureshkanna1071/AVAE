import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ContactForm from '../../contactform/ContactForm';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import "./contactus.css"

const ContactUs = () => {
  return (
    <>
        <Header />
        <Box sx={{height: "90vh",}}>
        <Typography variant="h4" sx={{textAlign: "center"}}>
            Contact Us
        </Typography>
        <Box className='contactus'>
            <Box className='contactus-address'>
            <Typography variant="h6">Contact Information:</Typography>
            <Typography>
                Address: No.1, Dolphin complex, Aathumedu, Vedasandur.
            </Typography>
            <Typography>
                Phone: 8098845333
            </Typography>
            <Typography>
                Email: matha.agenc@gmail.com
            </Typography>
            </Box>
            <Grid item xs={12} md={6}>
            <ContactForm />
            </Grid>
        </Box>
        </Box>
        <Footer />
    </>
    
  );
};

export default ContactUs;
