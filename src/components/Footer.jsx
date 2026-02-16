import "./Footer.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-column">
          <h3>Tidy Digital Printing</h3>
          <p>
            Tamil Nadu’s trusted choice for UV Sunpack and LED Signage.
            We deliver premium quality printing solutions across all districts.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li>UV Sunpack Sheets</li>
            <li>LED Sign Boards</li>
            <li>Offset & Digital Print</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Delivery Areas</h4>
          <ul>
            <li>Salem (HQ)</li>
            <li>Chennai</li>
            <li>Coimbatore</li>
            <li>All TN Districts</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="footer-contact-item">
            <FiPhone  />
            <span>+91 93603 54050</span>
          </div>

          <div className="footer-contact-item">
            <FiMail  />
            <span>tidydigitalprinting@gmail.com</span>
          </div>

          <div className="footer-contact-item">
            <FiMapPin />
            <span>
              No.7/85-1, JCB Back Side,<br />
              Chinnasiragapadi, Salem,<br />
              TN – 636308
            </span>
          </div>

          <div className="footer-social">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Tidy Digital Printing. All rights reserved.
      </div>
    </footer>
  );
}
