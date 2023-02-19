import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  const [isLogOut, setIsLogOut] = useState(false);
  const onClickLogout = () => {
    setIsLogOut(true);
  };
  const onclickYes = () => {
    Cookies.remove("jwtToken");
    navigate("/login", { replace: true });
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (isLogOut) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }
  }, [isLogOut]);
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
        <div>
          <NavLink to="/" className="home-navlink">
            Home
          </NavLink>
        </div>
        <div className="cart-navlink-container">
          <NavLink to="/cart" className="home-navlink">
            Cart
          </NavLink>
        </div>
        <div className="logout-button-container">
          <button className="logout-button" onClick={onClickLogout}>
            logout
          </button>
        </div>
        {isLogOut && (
          <div className="logout-popup-container">
            <div>
              <p>Are you sure to want to exit</p>
              <div>
                <button onClick={onclickYes}>Yes</button>
                <button
                  onClick={() => {
                    setIsLogOut(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
