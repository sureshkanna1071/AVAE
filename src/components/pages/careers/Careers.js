import React from 'react'
import "./careers.css"
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Lottie from "lottie-react";
import AnimationData from "../../../assets/Animation - 1696150656722.json"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const positions = [
  {
    image: "https://img.freepik.com/free-photo/looking-through-online-statistics_1098-16208.jpg?size=626&ext=jpg&ga=GA1.1.2066944063.1696226486&semt=ais",
    title: "Area Sales Manager",
    salary: "30,000 - 70,000",
    content: 'As an Area Sales Manager at AVAE LED TV Company, you will play a pivotal role in driving sales and revenue growth within your designated region. We are looking for a motivated and experienced professional with a proven track record in electronics or LED TV sales. You will be responsible for developing and executing sales strategies, managing a team of sales representatives, and fostering strong relationships with key clients.',
    qualification: [
      "Bachelor's degree in Business, Marketing, or a related field (preferred).",
      "Minimum of 2 years of experience in electronics or LED TV sales, with a proven track record of achieving and exceeding sales targets.",
      "Strong leadership and team management skills.",
      "Excellent communication, negotiation, and interpersonal abilities.",
      "Ability to analyze data and market trends to drive decision-making.",
    ]
  },
  {
    image: "https://img.freepik.com/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop_627829-4983.jpg?size=626&ext=jpg&ga=GA1.1.2066944063.1696226486&semt=ais",
    title: "Retail Sales Officer",
    salary: "30,000 - 70,000",
    content: 'As a Retail Sales Officer, you will be an integral part of our retail team, responsible for delivering exceptional customer service and driving sales in our store. You will play a crucial role in assisting customers, providing product information, and ensuring a positive shopping experience. Your primary goal will be to meet and exceed sales targets while maintaining a high level of customer satisfaction.',
    qualification: [
      "Bachelor's degree in Business, Marketing, or a related field (preferred).",
      "Minimum of 2 years of Previous retail or customer service experience is a plus.",
      "Positive attitude and willingness to learn.",
      "Excellent communication, negotiation, and interpersonal abilities.",
      "Basic computer skills for transaction processing.",
      "Reliable and punctual.",
      "Self-motivated, results-oriented, and able to work independently."
    ]
  },
  {
    image: "https://img.freepik.com/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1401.jpg?size=626&ext=jpg&ga=GA1.2.2066944063.1696226486&semt=ais",
    title: "District Supply Officer",
    salary: "30,000 - 70,000",
    content: 'As a District Supply Officer, you will be responsible for overseeing the procurement, storage, and distribution of essential goods and supplies within a designated district or region. Your role is crucial in ensuring the efficient and effective management of resources to meet the needs of government agencies, departments, and other stakeholders. You will play a pivotal role in maintaining inventory accuracy, optimizing procurement processes, and ensuring timely delivery of supplies.',
    qualification: [
      "Bachelor's degree in Supply Chain Management, Business Administration, or a related field (preferred).",
      "Proven experience in procurement and supply chain management, preferably in a public sector setting.",
      "Proficiency in computer software, including inventory management and procurement systems.",
      "Knowledge of procurement regulations and guidelines applicable to public agencies.",
    ]
  },
  {
    image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg&ga=GA1.1.2066944063.1696226486&semt=ais",
    title: "Marketing Manager",
    salary: "30,000 - 70,000",
    content: 'As a Marketing Manager, you will play a pivotal role in planning, executing, and overseeing marketing initiatives to drive brand awareness, customer engagement, and revenue growth. You will be responsible for developing and implementing marketing strategies, managing a team of marketing professionals, and collaborating with various departments to achieve company goals.',
    qualification: [
      "Bachelor's degree in Business, Marketing, or a related field (preferred).",
      "Proven experience in marketing management, with a track record of successfully developing and implementing marketing strategies.",
      "Strong leadership and team management skills.",
      "Excellent communication, negotiation, and interpersonal abilities.",
      "Proficiency in digital marketing tools and analytics platforms."
    ]
  },
]
 
const Careers = () => {
  
  const handleEmailButtonClick = (position) => {
    const subject = encodeURIComponent(`Application for ${position} role`);
    const mailtoLink = `mailto:matha.agenc@gmail.com?subject=${subject}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header />
      <div className='careers'>
        <div className='careers_banner-content'>
          <h1 style={{letterSpacing: '2px', margin: '0'}}>Build Your Future Here.</h1>
          <p style={{fontSize: 'medium',}}>Join AVAE - where careers thrive. We're on the lookout for passionate, talented individuals to join our dynamic team. Explore our job openings and start your journey towards a fulfilling career with us today!</p>
        </div>
        <Lottie animationData={AnimationData} className='careers_banner-anime' /> 
      </div>
      <div className='careers_positions'>
        <h1 style={{textAlign: "center"}}>Open Positions</h1>
        <div className='careers_positions-container'>
          {positions && positions.map((position, i) => 
          <Card key={i} className='careers_positions-card'>
            <CardMedia
              component="img"
              alt={position.title}
              height="140"
              image={position.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {position.title}
              </Typography>
              <Box sx={{fontSize: "small", display: "flex", flexDirection: "column", gap: '10px', lineHeight: "1.2"}} variant="body2" color="text.secondary">
                <p><strong>Location:</strong> Vedasandur, Dindigul.</p>

                <p style={{color: "green"}}><strong>Salary: </strong>{`₹ ${position.salary}`}</p>

                <h3>Job Description:</h3>
                <p>{position.content}</p>

                <h3>Qualifications:</h3>
                <ul style={{paddingLeft: '15px'}}>
                    {position.qualification.map((qualification, i) => 
                    <li key={i}>{qualification}</li>)}
                </ul>
              </Box>
            </CardContent>
            <CardActions >
              <Button variant='outlined' onClick={() => handleEmailButtonClick(position.title)} fullWidth size="small">Apply</Button>
            </CardActions>
          </Card>)}
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Careers