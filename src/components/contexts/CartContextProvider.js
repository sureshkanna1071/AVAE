import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    let [cartItems, setCartItems] = useState(Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : null);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider