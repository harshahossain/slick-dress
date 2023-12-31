import "./Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";
export default function Breadcrum({ product }) {
  return (
    <div className="breadcrum">
      <Link to="/">
        <span>HOME</span> <img src={arrowIcon} alt="arrow pointing right" />
      </Link>
      <Link to="/">
        <span>SHOP</span>
        <img src={arrowIcon} alt="arrow pointing right" />{" "}
      </Link>
      <Link to={`/${product.category}s`}>
        <span>{product.category}</span>
        <img src={arrowIcon} alt="arrow pointing right" />
      </Link>
      {product.name}
    </div>
  );
}
