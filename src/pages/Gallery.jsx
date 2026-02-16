import Portfolio from "../components/Portfolio";
import "./Gallery.css";
import Footer from "../components/Footer";


function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-overlay">
          <h1>Gallery</h1>
          <p>Home » Gallery</p>
        </div>
      </section>

      
      <Portfolio showAll={true} />
      <Footer/>
    </>
  );
}

export default Gallery;
