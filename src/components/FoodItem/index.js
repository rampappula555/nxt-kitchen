import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import CartContext from "../../context/CartContext";
import "./index.css";
const FoodItem = (props) => {
  const navigate = useNavigate();
  const value = useContext(CartContext);
  const { addTocart, cartList } = value;
  const [quantity, setQuantity] = useState(1);
  const [clickAddTocart, setClickAddToCart] = useState(false);
  const { eachFoodItem } = props;
  const { name, imageUrl, cost, id } = eachFoodItem;
  const onClickIncrease = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const onClickDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };
  const onClickAddToCart = () => {
    if (clickAddTocart === false) {
      addTocart({ ...eachFoodItem, quantity });
    }
    setClickAddToCart(true);
  };
  let z = false;
  const x = cartList.filter((each) => each.id === id);
  if (x.length !== 0) {
    if (x[0].id === id) {
      z = true;
    }
  }
  const onClickGoToCart = () => {
    navigate("/cart");
  };
  return (
    <div key={id}>
      <img src={imageUrl} alt="img" className="img" />
      <p>{name}</p>
      <p>{cost}</p>
      {clickAddTocart || z ? (
        <p>Added to cart</p>
      ) : (
        <div className="buttons-container">
          <button onClick={onClickDecrease}>d</button>
          <p>{quantity}</p>
          <button onClick={onClickIncrease}>i</button>
        </div>
      )}
      {clickAddTocart || z ? (
        <button onClick={onClickGoToCart}>go to cart</button>
      ) : (
        <button onClick={onClickAddToCart}>
          {clickAddTocart || z ? "go to cart" : "add to cart"}
        </button>
      )}
    </div>
  );
};

export default FoodItem;
