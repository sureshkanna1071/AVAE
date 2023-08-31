import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "./shipping.css"

const Shipping = () => {
  return (
    <>
      <Header />
      <div className='shipping'>
         <h2>SHIPPING POLICY</h2>
          <div className='shipping_details'>
            <h4>1. Introduction:</h4>
            <p>Welcome to <em>AVAE</em> ! Our shipment policy outlines the terms and conditions governing the shipping of LED TVs within Tamil Nadu, India. By placing an order on our website, you agree to comply with the terms and conditions stated in this policy.</p>

            <h4>2. Delivery Areas:</h4>
            <p>We offer shipping services exclusively within the state of Tamil Nadu, India. Unfortunately, we are unable to deliver to areas outside of this region at this time.</p>

            <h4>3. Shipping Methods and Timelines:</h4>
            <p>a. Standard Delivery: Our standard delivery time within Tamil Nadu is estimated to be 5-7 business days from the date of order confirmation and successful payment processing.<br />
            b. Express Delivery: For expedited shipping, we provide an express delivery option at an additional cost. Express delivery typically takes 2-3 business days within Tamil Nadu.</p>

            <h4>4. Shipping Charges:</h4>
            <p>a. Standard Delivery: Orders with a total value of Rs. 1000 or more qualify for free standard shipping. Orders below Rs. 1000 will incur a flat shipping fee of Rs. 50.<br />
            b. Express Delivery: The express delivery charges will be calculated based on the delivery location, size of the TV, and the chosen express shipping option. The exact amount will be displayed during the checkout process.</p>

            <h4>5. Order Tracking:</h4>
            <p>Upon successful order placement and shipment, we will provide you with a unique tracking ID and a link to track your package's status online. You can monitor the estimated delivery date and view the progress of your order in real time.</p>

            <h4>6. Delivery Process:</h4>
            <p>a. Our delivery partners will contact you via the provided contact details to confirm the delivery date and time window.<br />
            b. To ensure successful delivery, kindly ensure that someone is available to receive the package at the specified delivery address. In case of two failed delivery attempts, you may need to arrange for self-pickup from our local distribution center.</p>

            <h4>7. Damaged or Defective Items:</h4>
            <p>a. If you receive a damaged or defective LED TV, please contact our customer service team within 48 hours of receiving the delivery. We will initiate an investigation and, if necessary, arrange for a replacement or refund as per our Return and Refund Policy.<br />
            b. We kindly request that you retain the original packaging and all accompanying documents for our assessment process.</p>

            <h4>8. Cancellation and Refunds:</h4>
            <p>a. Cancellation requests must be submitted within 24 hours of placing the order. Refunds will be processed within 5 - 7 business days, subject to our Return and Refund Policy.<br />
            b. Refunded amounts will be credited back to the original payment method used during the purchase.</p>

            <h4>9. Change of Address:</h4>
            <p>Should you need to update the delivery address after placing an order, please contact us. Address changes can only be accommodated if the order has not yet been dispatched.</p>

            <h4>10. Contact Information:</h4>
            <p>For any inquiries regarding our shipment policy, delivery process, or other related matters, please feel free to contact our dedicated customer support team at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>.</p>

            <p>By proceeding with an order on our LED TV ecommerce website, you acknowledge that you have reviewed and agreed to abide by the terms and conditions stipulated in this shipment policy.</p>
          </div>
       </div>
       <Footer />
    </>
  )
}

export default Shipping