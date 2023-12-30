import "./Breadcrum.css";
import arrowIcon from "../Assets/arrow.png";
export default function Breadcrum({ product }) {
  return (
    <div className="breadcrum">
      HOME <img src={arrowIcon} alt="arrow pointing right" />
      SHOP
      <img src={arrowIcon} alt="arrow pointing right" />
      {product.category}
      <img src={arrowIcon} alt="arrow pointing right" />
      {product.name}
    </div>
  );
}
