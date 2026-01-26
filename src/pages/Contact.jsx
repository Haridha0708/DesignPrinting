import "./Contact.css";

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

            <div className="info-item">
              📞 <span>+91 93603 54050</span>
            </div>
            <div className="info-item">
              ✉️ <span>tidydigitalprinting@gmail.com</span>
            </div>
            <div className="info-item">
              📍 <span>No.7/85-1, JCB Back Side,<br />
              Chinnasiragapadi, Salem – 636308</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <h2>Request a Quote</h2>

            <form>
              <input placeholder="Full Name *" />
              <input placeholder="Phone Number *" />
              <input placeholder="Email Address *" />
              <input placeholder="Service Required *" />
              <textarea placeholder="Project Details *"></textarea>
              <button>Request a Quote</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
export default Contact;