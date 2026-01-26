import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Tidy Digital Printing</h3>
          <p>
            Tamil Nadu’s trusted choice for UV Sunpack and LED Signage.
            We deliver premium quality printing solutions across all districts.
          </p>
        </div>

        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li>UV Sunpack Sheets</li>
            <li>LED Sign Boards</li>
            <li>Offset Printing</li>
            <li>Digital Printing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Delivery Areas</h4>
          <ul>
            <li>Salem (HQ)</li>
            <li>Chennai</li>
            <li>Coimbatore</li>
            <li>All TN Districts</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📞 +91 93603 54050</p>
          <p>✉️ tidydigitalprinting@gmail.com</p>
          <p>📍 No.7/85-1, JCB Back Side,<br />
            Chinnasiragapadi, Salem – 636308
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Tidy Digital Printing. All rights reserved.
      </div>
    </footer>
  );
}
