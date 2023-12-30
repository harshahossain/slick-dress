import "./ProductDetails.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";

export default function ProductDetails({ product }) {
  return (
    <div className="productdisplay">
      <div className="productdisplay-left"></div>
      <div className="productdisplay-img-list">
        <img src={product.image} alt="product image" />
        <img src={product.image} alt="product image" />
        <img src={product.image} alt="product image" />
        <img src={product.image} alt="product image" />
      </div>
      <div className="productdisplay-img">
        <img
          className="productdisplay-main-img"
          src={product.image}
          alt="product image"
        />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starDullIcon} alt="Star Icon dull" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            ${product.new_price}
          </div>
        </div>
      </div>
    </div>
  );
}
