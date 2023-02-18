import React from "react";
const CartContext = React.createContext({
  cartList: [],
  updatedArray: [],
  addTocart: () => {},
  deleteCartItem: () => {},
});
export default CartContext;
