import React from "react";
const CartContext = React.createContext({
  cartList: [],
  updatedArray: [],
  addTocart: () => {},
  onClickDelete: () => {},
});
export default CartContext;
