import React from "react";
// import "./style.css";
import img from "../assets/read1.png";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <Fade left>
          <h3 className="welcome">Welcome to</h3>
        </Fade>
        <Fade left>
          <h1 className="bookrev">BookRev.</h1>
        </Fade>
        <Fade left>
          <p className="description">
            A decentralised fair playground for all bookworms!
          </p>
        </Fade>
        <Fade left>
          <div className="o-box"></div>
        </Fade>
      </div>
      <Fade right>
        <img src={img} alt="hero img1" className="hero-img" />
      </Fade>
    </div>
  );
};

export default Hero;
