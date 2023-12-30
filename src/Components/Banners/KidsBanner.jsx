import "./Banners.css";

import arrowIcon from "../Assets/arrow.png";
import kidImg from "../Assets/kids-logo.png";
import { Link } from "react-router-dom";

export default function KidsBanner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>KIDS COLLECTION</h2>
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
        <img src={kidImg} alt="banner image" />
      </div>
    </div>
  );
}
