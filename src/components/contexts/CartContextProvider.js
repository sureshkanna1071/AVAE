import React, { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    let [cartItems, setCartItems] = useState();
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider