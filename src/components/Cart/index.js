import "./index.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import Header from "../Header";
const Cart = () => {
  const value = useContext(CartContext);
  const { cartList } = value;
  return (
    <div>
      <div>
        <Header />
      </div>
      {cartList.map((eachItem) => {
        return (
          <div key={eachItem.id}>
            <img src={eachItem.imageUrl} alt="img" className="img" />
            <p>{eachItem.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
