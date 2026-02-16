import "./WhyChooseUs.css";

 function WhyChooseUs() {






  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <div className="why-heading">
            <span className="slash">//</span>
            <span className="title"> Why Choose Us</span>
          </div>

          <h2>Industry-Leading Expertise</h2>

          <p className="why-desc">
            With years of experience in the printing and signage industry,
            we bring unmatched expertise and state-of-the-art technology
            to every project.
          </p>

          {/* STATS */}
          <div className="why-stats">
            <div className="stat-circle">
              <div className="circle">98%</div>
              <div className="stat-label">Satisfied Customers</div>
            </div>

            <div className="stat-circle">
              <div className="circle">24hr</div>
              <div className="stat-label">Fast Turnaround</div>
            </div>
          </div>

          {/* CHECKLIST */}
          <ul className="why-list">
            <li>Advanced UV printing technology</li>
            <li>Custom LED signage solutions</li>
            <li>High-volume offset printing</li>
            <li>Quick turnaround for urgent jobs</li>
          </ul>
        </div>
      

        {/* RIGHT IMAGES */}
        <div className="why-right">
          <div className="img img-1"></div>
          <div className="img img-2"></div>
          <div className="img img-3 large"></div>
                  
        </div>

      </div>
    </section>
  );
}


export default WhyChooseUs;
