import "./Banners.css";
import womenLogo from "../Assets/women-logo.png";
import arrowIcon from "../Assets/arrow.png";
import { Link } from "react-router-dom";

export default function WomensBanner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>WOMENS COLLECTION</h2>
        <div>
          <div className="banner-hand-icon">
            <p>
              Upto <span className="baanner-discount">30%</span> Off
            </p>
          </div>
          <p>On First Order</p>
        </div>

        <Link className="banner-latest-btn" to="/">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="arrow icon" />
        </Link>
      </div>
      <div className="banner-right">
        <img className="women-logo" src={womenLogo} alt="banner image" />
      </div>
    </div>
  );
}
