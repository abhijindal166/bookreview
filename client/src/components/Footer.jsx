import React from "react";

import img from "../assets/newsletter.png";
import Flip from "react-reveal/Flip";
import HeadShake from "react-reveal/HeadShake";
import Bounce from "react-reveal/Bounce";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row footer-cont justify-content-around">
        <Flip top>
          <div className="col-4 newsletter-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="white"
              viewBox="0 0 24 24"
              className="plane-svg"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>

            <h1 className="newsletter-h">Signup for our</h1>
            <h1 className="newsletter-h">Newsletter!</h1>
          </div>
        </Flip>
        <Bounce bottom>
          <div className="col-2 footer-img-cont">
            <img src={img} alt="newsletter img" className="newsletter-img" />
          </div>
        </Bounce>
        <div className="col-4 newsletter-form-cont">
          <form className="newsletter-form">
            <p>Just fill out this form to receive weekly roundups!</p>
            <input
              type="text"
              name="nws-name"
              className="nws-name form-inp"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="nws-email"
              className="nws-email form-inp"
              placeholder="Enter your email"
            />
            <HeadShake>
              <input type="submit" className="newsletter-btn" value="Submit" />
            </HeadShake>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
