import React from 'react'
import "./terms.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Terms = () => {
  return (
    <>
      <Header />
      <div className='terms'>
         <h2>TERMS AND CONDITIONS</h2>
          <div className='terms_details'>
            <h4>1. Acceptance of Terms:</h4>
            <p>By using or accessing <em>AVAE</em> &nbsp;website and services, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.</p>

            <h4>2. Product Information:</h4>
            <p>We strive to provide accurate and up-to-date product information, including specifications, pricing, and availability. However, we do not warrant that the information is error-free. The Company reserves the right to correct any inaccuracies or omissions without prior notice.</p>

            <h4>3. Orders and Payments:</h4>
            <p>a. Placing an order through our website constitutes an offer to purchase the selected products.<br />
                b. Orders are subject to availability and acceptance by the Company. We reserve the right to refuse or cancel orders at our discretion.<br />
                c. All prices displayed are in Indian Rupees (INR) and include applicable taxes, unless otherwise stated.<br />
                d. Payment processing will be handled securely through trusted payment gateways. The Company does not store or retain your payment information.</p>

            <h4>4. Shipping and Delivery:</h4>
            <p>Our shipment policy, outlined separately, governs the terms and conditions related to the shipping and delivery of products.</p>

            <h4>5. Returns and Refunds:</h4>
            <p>Our return and refund policy, outlined separately, outlines the terms and conditions regarding returns, exchanges, and refunds.</p>

            <h4>6. Intellectual Property:</h4>
            <p>a. All content on the Company's website, including text, graphics, logos, images, videos, and software, is protected by copyright and other applicable intellectual property laws.<br />
            b. You may not reproduce, distribute, modify, or create derivative works from our content without explicit permission.</p>

            <h4>7. Limitation of Liability:</h4>
            <p>a. The Company is not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the website or products.<br />
            b. The Company's liability for any claim, whether in contract, tort, or otherwise, is limited to the purchase price of the product.</p>

            <h4>8. Indemnity:</h4>
            <p>You agree to indemnify and hold the Company harmless from any claims, losses, liabilities, and expenses (including legal fees) arising from your use of the website or violation of these terms.</p>

            <h4>9. Governing Law and Jurisdiction:</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Tamil Nadu, India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu.</p>
            
            <h4>10. Product Images Disclaimer:</h4>
            <p>
              We strive to provide accurate representations of our products through images on our website. However, please note that in some cases, the images provided may not be the exact images of the product but are intended to closely resemble the product in question. These images are for illustrative purposes and are meant to give you a general idea of the product's appearance.
            </p>

            <h4>11. Variations and Deviations:</h4>
            <p>
              Product images on our website may occasionally differ slightly from the actual product you receive. Factors such as screen settings, lighting, and manufacturing variations can contribute to differences between the image and the product. We do our best to ensure that the product descriptions and specifications are accurate, even if the images may not be a perfect representation.
            </p>

            <h4>12. Modifications and Updates:</h4>
            <p>The Company reserves the right to modify, update, or revise these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically.</p>

            <h4>13. Contact Information:</h4>
            <p>For inquiries or concerns regarding these terms and conditions, please contact our customer support team at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>.</p>

            <p>By using our website and services, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
          </div>
      </div> 
      <Footer /> 
    </>
  )
}

export default Terms