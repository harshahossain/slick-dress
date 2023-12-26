import "./Navbar.css";

import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
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
          Home {menu === "home" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          Kids {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cartIcon} alt="Cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
