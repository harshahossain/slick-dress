import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pintesterIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="footer logo" />
        <p>SLICK DRESS</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="Instagram Logo" />
        </div>
        <div className="footer-icons-container">
          <img src={pintesterIcon} alt="Pintester Logo" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="Whatsapp Logo" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
}
