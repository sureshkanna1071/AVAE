import { TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CartContext } from '../../contexts/CartContextProvider';
import { useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./order.css"
import "../../header/header.css"
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';
import { BsBank2, BsQrCodeScan } from 'react-icons/bs';
import Cookies from 'js-cookie';
import { LoadingButton } from '@mui/lab';

const Order = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  const {cartItems, setCartItems} = useContext(CartContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);
  let userData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        deliveryAddress,
        city,
        postalCode,
        state,
      };
  const states = ['Tamil Nadu', 'Kerala', 'Puducherry'];

  useEffect(() => {
    if(!cartItems) {
      navigate(-1);
    } 
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://avaeserver.onrender.com/orders', {
        amount: cartItems.amount || 400000,
        receipt: 'order_rcptid_' + Date.now(),
        product_data: cartItems,
        user_data: userData
      });
      if(response.status === 200) {
        handlePayment(response.data);
        setLoading(false);
      }
      
    } catch (error) {
      console.error('Error creating order:', error);
      setLoading(false);
    }
  };

  const handlePayment = (order) => {
    if (!order) {
      return;
    }

    // Proceed with payment handling using Razorpay SDK
    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY,
      amount: order.amount,
      currency: 'INR',
      name: 'AVAE',
      description: 'Test Payment',
      order_id: order.id,
      handler: function (response) {
        let previousOrders = Cookies.get('orders') ? JSON.parse(Cookies.get('orders')) : [];
        Cookies.set('orders', JSON.stringify([...previousOrders, {
          series: cartItems.series,
          title: cartItems.title,
          description: cartItems.description,
          price: cartItems.price,
          image_urls: [cartItems.image_urls[0]]
        }]), {expires: 15})
        axios.post('https://avaeserver.onrender.com/order', {
                  ...response, 
                  ...order, 
                  ...userData, 
                  title: cartItems.title, 
                  price: cartItems.price, 
                  size: cartItems.size
                })
             .then((res) => {
             })
             .catch((err) => {
              console.log(err);
             });
        setCartItems(null);
        navigate("/thankyou");
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
        <div>
          <div className='order_header'>
            <p onClick={() => navigate(-1)} style={{display: "flex", alignItems: 'center', gap: '5px', zIndex: 2}}><ArrowBackIcon /> <span>continue shopping</span></p>
            <h3>CHECKOUT</h3>
          </div>
          <div className='order_details'>
            <div className='order_summary'>
                <h3>Order Summary</h3>
                <hr style={{height: "1px", backgroundColor: "#f5f5f5"}} />
                <div style={{height: 'auto'}} className='cart_items' >
                    <div className='order_items-box' style={{padding: "25px 0"}}>
                      {cartItems 
                        ? <>
                            <img src={cartItems.image_urls[0]} alt=""  />
                            <div style={{width: "80%", display: "flex", flexDirection: "column", gap: "10px"}}>
                              <h4>{cartItems?.title}</h4> 
                              <p style={{fontSize: 'small'}}>{cartItems?.description}</p>
                            </div>
                            
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: "75px"}} >
                              <p style={{textAlign: 'end'}}>₹ {cartItems?.price}</p>
                            </div>
                          </>
                        : <p className='cart_items-empty'>Your cart is empty.</p>}
                    </div>
                    <hr style={{height: "1px", backgroundColor: "#f5f5f5"}} />
                    <div className='cart_summary'>
                      <div className='cart_summary-price'><p>Item Price: </p> <p>₹ {cartItems?.price}</p></div>
                      <div className='cart_summary-price'><p>Delivery Charge: </p> <p style={{color: 'green'}}>-₹ 0</p></div>
                      <div className='cart_summary-price'><p>Taxes: </p> <p style={{color: 'green'}}>-₹ 0</p></div>
                      <div className='cart_summary-price'><strong>Total Amount: </strong> <strong>₹ {cartItems?.price}</strong></div>
                    </div>
                    <hr style={{height: "1px", backgroundColor: "#f5f5f5"}} />
                </div>
                <h3>Available Payment Methods</h3>
                <div className='order_payments'>
                  <div className='order_option'>
                    <FaCreditCard className='order_option-icons' />
                    <p>Cards</p>
                  </div>
                  <div className='order_option'>
                    <BsQrCodeScan className='order_option-icons' /> 
                    <p>UPI / QR </p>
                  </div>
                  <div className='order_option'>
                    <BsBank2 className='order_option-icons' />
                    <p>Netbanking</p>
                  </div>
                </div> 
            </div>
            <div className='order_ship'>
              <h3>Delivery Information</h3>
              <form className='order_form' onSubmit={handleSubmit}>
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="Phone Number"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="Delivery Address"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  size='small'
                  fullWidth
                  required
                  label="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
                <FormControl required sx={{width: "100%"}}>
                  <TextField
                    select
                    required
                    size='small'
                    fullWidth
                    label='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    {states.map((stateName) => (
                      <MenuItem key={stateName} value={stateName}>
                        {stateName}
                      </MenuItem>
                    ))}
                  </TextField>
                  <FormHelperText sx={{color: "red"}}>Do not proceed with the order if your current state is not among the following: Tamil Nadu, Kerala, or Puducherry.</FormHelperText>
                </FormControl>
                <hr style={{height: "1px", width: "100%", backgroundColor: "#5a5a5a"}} />
                <LoadingButton loading={loading} sx={{backgroundColor: "#0046bf", color: "aliceblue", "&:hover": {backgroundColor: "#0046bf", color: "aliceblue",}}} disabled={!cartItems} fullWidth variant="contained" color="primary" type="submit">
                  Place Order
                </LoadingButton>
                <FormHelperText >
                  By clicking 'PLACE ORDER', you acknowledge that you have reviewed and consent to be bound by all the terms and conditions outlined in the agreement.
                </FormHelperText>
              </form>
            </div>
          </div>
        </div>
        {/* <Button onClick={createOrder}>create order</Button> 
        <Button onClick={handlePayment}>Pay Now</Button> */}
    </>
  )
}

export default Order