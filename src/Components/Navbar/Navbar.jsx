import "./Navbar.css";

import logo from "../Assets/main-icon.png";
import cartIcon from "../Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const { getTotalCartQuantity } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SLICK DRESS</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          {menu === "home" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">
          {getTotalCartQuantity() ? getTotalCartQuantity() : 0}
        </div>
      </div>
    </div>
  );
}
