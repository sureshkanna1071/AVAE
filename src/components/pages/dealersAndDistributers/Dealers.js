import React from 'react'
import "./dealers.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import DealersEnquiry from "../../assets/Dealer.mp4"

const Dealers = () => {
  return (
    <>
      <Header />
      <div className='dealers'>
        <video width="100%" height="600px" controls controlsList='nodownload'>
          <source src={DealersEnquiry} type="video/mp4" />
        </video>
        <h2>DEALERS AND DISTRIBUTORS POLICY</h2>
        <div className='dealers_details'>
            <h4>1. Introduction:</h4>
            <p>Welcome to <em>AVAE</em> ! Our Dealers and Distributors Policy outlines the terms and conditions governing the relationship between our company and authorized dealers and distributors. By becoming an authorized dealer or distributor, you agree to comply with the terms stated in this policy.</p>

            <h4>2. Application Process:</h4>
            <p>a. Prospective dealers and distributors are required to submit an application for authorization.<br />
            b. The application will be evaluated based on criteria including location, business history, industry experience, and financial stability.<br />
            c. Submission of an application does not guarantee authorization.</p>

            <h4>3. Authorization:</h4>
            <p>a. Once an application is approved, the applicant will be notified and granted authorization as an official dealer or distributor.<br />
            b. Authorization is non-transferable and subject to ongoing compliance with the terms of this policy.</p>

            <h4>4. Product Ordering:</h4>
            <p>a. Authorized dealers and distributors may place orders for products listed in the authorized product list.<br />
            b. Orders are subject to availability, quantity restrictions, and pricing set by the Company.<br />
            c. All orders must be placed through approved channels as designated by the Company.</p>

            <h4>5. Pricing and Payment:</h4>
            <p>a. Pricing for authorized dealers and distributors will be outlined in a separate pricing agreement.<br />
            b. Payment terms and methods will be specified in the pricing agreement or purchase order terms.</p>

            <h4>6. Marketing and Branding:</h4>
            <p>a. Authorized dealers and distributors are allowed to use the Company's trademarks, logos, and branding materials solely for promotional and marketing purposes related to the Company's products.<br />
            b. Any use of the Company's branding must adhere to the Company's branding guidelines and receive prior approval.</p>

            <h4>7. Minimum Sales Commitment:</h4>
            <p>a. Authorized dealers and distributors may be required to meet minimum sales volume or revenue targets as outlined in the agreement.<br />
            b. Failure to meet minimum sales commitments may result in a review of the authorization status.</p>

            <h4>8. Product Support and Training:</h4>
            <p>a. The Company may provide training, product information, and support to authorized dealers and distributors to enhance their ability to represent and sell the products effectively.<br />
            b. Authorized dealers and distributors are responsible for adequately training their staff on product features, usage, and customer support.</p>

            <h4>9. Termination of Authorization:</h4>
            <p>a. The Company reserves the right to terminate authorization at its discretion if the authorized dealer or distributor violates any terms of this policy, engages in unethical practices, or negatively impacts the Company's reputation.<br />
            b. Termination may result in the revocation of authorization benefits and privileges.</p>

            <h4>10. Confidentiality:</h4>
            <p>Authorized dealers and distributors must maintain the confidentiality of any proprietary information, pricing, and business practices shared by the Company.</p>

            <h4>11. Modifications and Updates:</h4>
            <p>The Company reserves the right to modify, update, or revise this Dealers and Distributors Policy at any time. Authorized dealers and distributors will be notified of any changes.</p>

            <h4>12. Contact Information:</h4>
            <p>For inquiries or concerns related to becoming an authorized dealer or distributor, please contact our designated dealer support team at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>.</p>

            <p>By becoming an authorized dealer or distributor, you acknowledge that you have reviewed and agreed to comply with the terms and conditions stated in this policy.</p>
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Dealers