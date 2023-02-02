import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login", { replace: true });
  };
  return (
    <div className="header-background-container">
      <div className="header-logo-and-heading-container">
        <img
          src="https://res.cloudinary.com/dndtkpqk5/image/upload/v1664029743/Group_7420_r0ezka.svg"
          alt="img"
        />
        <p className="header-heading-text">Tasty Kitchen</p>
      </div>
      <div className="header-buttons-container">
        <p>Home</p>

        <p className="cart-link">Cart</p>
        <button onClick={onClickLogout}>logout</button>
      </div>
    </div>
  );
};
export default Header;
