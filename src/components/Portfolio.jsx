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

            <div className="portfolio-card img-1">
              <div className="overlay">
                  <span>Offset Print</span>
                  <h4>Commercial Offset Press</h4>
              </div>
            </div>

            <div className="portfolio-card img-2">
              <div className="overlay">
                <span>LED Signage</span>
                <h4>LED Storefront Sign</h4>
              </div>
            </div> 
            <div className="portfolio-card img-3">
              <div className="overlay">
                <span>Digital Print</span>
                <h4>Digital Printing</h4>
              </div>
            </div>

            </div>


      </div>
    </section>
  );
}
