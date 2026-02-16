import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";



 function Home() {


  
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <WhyChooseUs/>
      <Portfolio/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default Home;
