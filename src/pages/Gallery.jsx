import Portfolio from "../components/Portfolio";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-overlay">
          <h1>Gallery</h1>
          <p>Home » Gallery</p>
        </div>
      </section>

      <Portfolio />
    </>
  );
}

export default Gallery;
