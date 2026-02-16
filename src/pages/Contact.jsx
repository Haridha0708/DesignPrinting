import "./Contact.css";
import Footer from "../components/Footer";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


 function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>Home  »  Contact Us</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Reach out to us for all your UV printing, LED signage,
              and commercial printing needs.
            </p>

            <div className="contact-box">
                  <span className="contact-icon">
                    <FiPhone />
                  </span>
                  <span className="contact-text">+91 93603 54050</span>
                </div>

                <div className="contact-box">
                  <span className="contact-icon">
                    <FiMail />
                  </span>
                  <span className="contact-text">tidydigitalprinting@gmail.com</span>
                </div>

                <div className="contact-box">
                  <span className="contact-icon">
                    <FiMapPin />
                  </span>
                  <span className="contact-text">
                    No.7/85-1, JCB Back Side,<br />
                    Chinnasiragapadi, Salem – 636308
                  </span>
                </div>
              </div>

          {/* RIGHT */}
          <div className="contact-form">
            <h2>Request a Quote</h2>

          <form>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="text" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="customer@gmail.com" />
              </div>

              <div className="form-group">
                <label>Service Required *</label>
                <input type="text" placeholder="UV Sunpack Sheets" />
              </div>

              <div className="form-group full-width">
                 <label>Project Details *</label>
                  <textarea placeholder="Tell us about your project requirements, quantities and any specific needs"></textarea>
              </div>

              <button type="submit">Request a Quote</button>
            </form>
           </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;