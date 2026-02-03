import "./Testimonials.css";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}
        <div className="testimonials-head">
          <div>
            <h4>// Get inspired by these stories.</h4>
            <h2>Real Stories from Real Customers</h2>
          </div>

          <div className="nav-arrows">
            <button><FaArrowLeft /></button>
            <button className="active"><FaArrowRight /></button>
          </div>
        </div>

        {/* CARDS */}
        <div className="testimonials-grid">

          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p>
              Excellent print quality with vibrant colors and neat finishing.
              The delivery was quick and the service was very professional.
            </p>
            <strong>This team rocks!</strong>

            <div className="user">
              <img src="" alt="" />
              <span> <small></small></span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p>
              Affordable pricing, fast turnaround, and premium-quality prints.
              Very satisfied with the overall service.
            </p>
            <strong>Remarkable!</strong>

            <div className="user">
              <img src="" alt="" />
              <span> <small></small></span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p>
              Reliable digital printing service with great attention to detail.
              They delivered exactly what we expected, on time.
            </p>
            <strong>I really love it!</strong>

            <div className="user">
              <img src="" alt="" />
              <span> <small></small></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
