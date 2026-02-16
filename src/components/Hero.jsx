import "./Hero.css";
import {FiZap,FiClock,FiStar,FiCheckCircle} from "react-icons/fi";

 function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">

        <div className="hero-content">
          <h1>
            Your Vision , Our Expertise
          </h1>
          <p>
            Specialists in UV SunPAck Sheets, LED Sign Boards , Offset & Digital Printing. <br />
            Tranform Your Brand visibility with our cutting-edge printing and signage solution.
          </p>
        <div className="hero-buttons">
            <button className="primary">Get Quote</button>
            <button className="secondary">View Our Work</button>
        </div>
        <div className="hero-features">
            <span ><FiZap/> Fast Turnaround</span>
            <span ><FiClock/>On-Time Delivery</span>
            <span ><FiStar/>Premium Quality</span>
            <span ><FiCheckCircle/>Satisfaction Guaranteed</span>
        </div>
        </div>
{/* 
        <div className="hero-right">
          <img src="" alt="Printing" />
        </div> */}

       </div>
    </section>
  );
}

export default Hero;
