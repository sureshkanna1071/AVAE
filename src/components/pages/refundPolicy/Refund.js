import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import "./refund.css"

const Refund = () => {
  return (
    <>
     <Header />
     <div className='refund'>
        <h2>REFUND POLICY</h2>
        <div className='refund_details'>
            <h4>1. Refund Eligibility:</h4>
            <p>We want you to have a satisfying experience with <em>AVAE</em>. If you are not entirely satisfied with your purchase, you may be eligible for a refund under the conditions outlined in this policy.</p>

            <h4>2. Valid Reasons for Refunds:</h4>
            <p>a. Defective or Damaged Product: If the product you receive is damaged, defective, or materially different from what you ordered, you may request a refund.<br />
            b. Order Error: If we make an error in processing your order, such as sending the wrong product or incorrect quantity, you may request a refund.<br />
            c. Dissatisfaction: If you are dissatisfied with the product quality or it does not meet your reasonable expectations, you may be eligible for a refund. Please note that this does not cover minor variations in appearance that do not affect product functionality.<br />
            d. Non-Delivery: If you do not receive your order within the specified delivery time frame, you may request a refund.</p>

            <h4>3. Refund Process:</h4>
            <p>a. Contact Customer Support: To initiate a refund request, please contact our customer support team within 2 days of receiving your order. Provide your order details and a clear explanation of the issue.<br />
            b. Return Approval: In some cases, we may require photographic evidence or further information to assess the issue. If a return is deemed necessary, we will provide you with return instructions.<br />
            c. Return Shipping: If a return is required, you will be responsible for returning the product in its original condition and packaging. We may provide a prepaid shipping label for returns related to defects, damages, or order errors.<br />
            d. Refund Approval: Once we receive and inspect the returned item, we will assess its eligibility for a refund. If approved, we will initiate the refund process.<br />
            e. Refund Options: Depending on the circumstances, you may be eligible for a monetary refund, store credit, or exchange for a similar product. The refund will be processed using the same method of payment used for the original purchase.</p>

            <h4>4. Refund Timeframe:</h4>
            <p>a. Defective, Damaged, or Order Error: Refunds for defective, damaged, or order error situations will typically be processed within 5 - 7 days after we receive the returned item.<br />
            b. Dissatisfaction: Refunds for dissatisfaction will be processed within 5 - 7 days after the returned item is received and inspected.</p>

            <h4>5. Exclusions:</h4>
            <p>a. Items damaged due to customer misuse, negligence, or improper care are not eligible for refunds.<br />
            b. Refunds will not be issued for minor variations in product appearance that do not impact functionality.<br />
            c. Products with a specific no-refund policy mentioned in the product description are excluded.</p>

            <h4>6. Contact Information:</h4>
            <p>For refund inquiries or to initiate a refund request, please contact our customer support team at <a href='mailto:matha.agenc@gmail.com'>matha.agenc@gmail.com</a> or call us at <a href="tel:8098845333">918098845333</a>. We are here to assist you and ensure your satisfaction.</p>

            <p>By making a purchase on our website, you acknowledge that you have read and agreed to comply with the terms and conditions of this refund policy.</p>
        </div>
     </div>
     <Footer />
    </>
  )
}

export default Refund