import React from "react";
const CartContext = React.createContext({
  cartList: [],
  updatedArray: [],
  addTocart: () => {},
  onClickDelete: () => {},
  deletecartList: () => {},
});
export default CartContext;
