import "./Services.css";
import { FaPrint, FaLightbulb, FaLayerGroup, FaBolt } from "react-icons/fa";

 function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-left">
           <span className="slash">//</span>
           <span className="title">   Our Services</span>
          <h2>Complete Printing & Signage Solutions</h2>
          <p>
            From UV sunpack sheets to LED signboards and commercial printing,
            we offer comprehensive solutions.
          </p>
          <button>Get Quote</button>
        </div>

        <div className="services-right">

        <div className="service-card">
          <div className="service-icon">
            <FaLayerGroup />
          </div>
          <h3>UV Sunpack Sheets</h3>
          <p>High-quality UV printed sunpack sheets.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaPrint />
          </div>
          <h3>Offset Printing</h3>
          <p>Professional offset printing services.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaLightbulb />
          </div>
          <h3>LED Sign Boards</h3>
          <p>Custom LED signage with premium finish.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBolt />
          </div>
          <h3>Digital Printing</h3>
          <p>Fast turnaround digital printing.</p>
        </div>

      </div>

      </div>
    </section>
  );
}

export default Services;
