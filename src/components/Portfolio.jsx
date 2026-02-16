import "./Portfolio.css";

export default function Portfolio({showAll = false}) {
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

        {/* Button only in Home */}
          {!showAll && (

          <button className="portfolio-btn">View Our Work</button>

           )}
        </div>

        <div className="portfolio-grid">

             {/* CARD 1 */}
            <div className="portfolio-card img-1">
              <div className="overlay">
                  <span>Offset Print</span>
                  <h4>Commercial Offset Press</h4>
              </div>
            </div>

             {/* CARD 2 */}
            <div className="portfolio-card img-2">
              <div className="overlay">
                <span>LED Signage</span>
                <h4>LED Storefront Sign</h4>
              </div>
            </div> 

              {/* CARD 3 */}
            <div className="portfolio-card img-3">
              <div className="overlay">
                <span>Digital Print</span>
                <h4>Digital Printing</h4>
              </div>
            </div>

             {/* 👇 EXTRA CARDS – ONLY FOR GALLERY PAGE */}
          {showAll && (
            <>

             <div className="portfolio-card img-4">
                <div className="overlay">
                  <span>Digital Print</span>
                  <h4>Exhibition Display </h4>
                </div>
              </div>

              <div className="portfolio-card img-5">
                <div className="overlay">
                  <span>UV SunPack</span>
                  <h4>OutDoor Flex Banner</h4>
                </div>
              </div>

              <div className="portfolio-card img-6">
                <div className="overlay">
                  <span>Digital Print</span>
                  <h4>Flyer Collection</h4>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
