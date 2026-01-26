import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-head">
          <div>
            <h4>// Our Portfolio</h4>
            <h2>Our Work Gallery</h2>
            <p>
              Explore our diverse collection of UV printing, LED signage,
              and commercial printing projects.
            </p>
          </div>

          <button className="portfolio-btn">View Our Work</button>
        </div>

        <div className="portfolio-grid">
          {/* <div className="portfolio-card">
            <img src="" alt="" />
            <span>Commercial Offset Press</span>
          </div>

          <div className="portfolio-card">
            <img src="" alt="" />
            <span>LED Storefront Sign</span>
          </div> */}

          {/* <div className="portfolio-card">
            <img src="" alt="" />
            <span>Digital Printing</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}
