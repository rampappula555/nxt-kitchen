import "./index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import FoodItem from "../FoodItem";
const apiStatusConstants = {
  initial: "INITIAL",
  progress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
const FoodItemDetails = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [foodMenu, setFoodMenu] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getFoodItemsDetailView = async () => {
      setApiStatus(apiStatusConstants.progress);
      const jwtToken = Cookies.get("jwtToken");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(
        `https://apis.ccbp.in/restaurants-list/${id}`,
        options
      );
      const fetchedData = await response.json();

      if (response.ok) {
        const updatedRestaurantDetails = {
          rating: fetchedData.rating,
          id: fetchedData.id,
          imageUrl: fetchedData.image_url,
          name: fetchedData.name,
        };
        const updatedFoodMenu = fetchedData.food_items.map((eachFoodItem) => ({
          id: eachFoodItem.id,
          imageUrl: eachFoodItem.image_url,
          cost: eachFoodItem.cost,
          name: eachFoodItem.name,
        }));
        setRestaurantDetails(updatedRestaurantDetails);
        setFoodMenu(updatedFoodMenu);
        setApiStatus(apiStatusConstants.success);
      }
    };
    getFoodItemsDetailView();
  }, [id]);

  const getSuccessView = () => {
    const { name, imageUrl, rating } = restaurantDetails;
    return (
      <div>
        <img src={imageUrl} alt="img" />
        <p>{rating}</p>
        <p>{name}</p>
        <hr />
        <div>
          {foodMenu.map((eachFoodItem) => (
            <FoodItem key={eachFoodItem.id} eachFoodItem={eachFoodItem} />
          ))}
        </div>
      </div>
    );
  };

  const getMenu = () => {
    switch (apiStatus) {
      case apiStatusConstants.progress:
        return <h1>LOADING</h1>;
      case apiStatusConstants.success:
        return getSuccessView();
      case apiStatusConstants.failure:
        return <h1>FAILED</h1>;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div>{getMenu()}</div>
    </div>
  );
};
export default FoodItemDetails;
