import { useState } from "react";
import "./index.css";
const FoodItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [onClickAddTocart, setOnClickAddToCart] = useState(false);
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
    setOnClickAddToCart(true);
  };
  return (
    <div key={id}>
      <img src={imageUrl} alt="img" className="img" />
      <p>{name}</p>
      <p>{cost}</p>
      {onClickAddTocart ? (
        <p>Added to cart</p>
      ) : (
        <div className="buttons-container">
          <button onClick={onClickDecrease}>d</button>
          <p>{quantity}</p>
          <button onClick={onClickIncrease}>i</button>
        </div>
      )}
      <button onClick={onClickAddToCart}>
        {onClickAddTocart ? "go to cart" : "add to cart"}
      </button>
    </div>
  );
};
export default FoodItem;
