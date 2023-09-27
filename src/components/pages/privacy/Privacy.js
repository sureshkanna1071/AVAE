import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import "./privacy.css"

const Privacy = () => {
  return (
    <>
      <Header />
      <div className='privacy'>
        <h2>PRIVACY POLICY</h2>
        <div className='privacy_details'>
            <p>Last Updated: 01-09-2023</p>

            <p>At Avae, we prioritize the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data.</p>

            <h4>Information We Collect</h4>

            <p>We collect the following types of information:</p>

            <ul>
                <li>
                    <p><strong>Personal Information:</strong> This may include your name, email address, phone number, and billing information when you interact with our services or make a purchase.</p>
                </li>
                <li>
                    <p><strong>Usage Information:</strong> We collect data about how you use our website, including your browsing history, search queries, and interactions with our services.</p>
                </li>
                <li>
                    <p><strong>Device Information:</strong> Information about the device you use to access our services, such as your IP address, browser type, and operating system.</p>
                </li>
            </ul>

            <h4>How We Use Your Information</h4>

            <p>We use your information for the following purposes:</p>

            <ul>
                <li>
                    <p>To provide and enhance our services, respond to your requests, and process transactions.</p>
                </li>
                <li>
                    <p>To personalize your experience, including delivering tailored content and recommendations.</p>
                </li>
            </ul>

            <h4>Disclosure of Your Information</h4>

            <p>At Avae, we do not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers and partners who assist us in delivering our services, but they are bound by strict confidentiality agreements.</p>

            <h4>Security Measures</h4>

            <p>We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.</p>

            <h4>Your Choices</h4>

            <p>You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time.</p>

            <h4>Contact Us</h4>

            <p>If you have questions or concerns regarding our Privacy Policy, please contact us at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>.</p>

            <p>Thank you for trusting Avae with your data. Your privacy is essential to us, and we are committed to protecting it.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Privacy

