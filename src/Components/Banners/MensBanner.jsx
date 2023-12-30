import "./Banners.css";
import menLogo from "../Assets/mens-logo.png";
import arrowIcon from "../Assets/arrow.png";
import { Link } from "react-router-dom";

export default function MensBanner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>MENS COLLECTION</h2>
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
        <img className="men-logo" src={menLogo} alt="banner image" />
      </div>
    </div>
  );
}
