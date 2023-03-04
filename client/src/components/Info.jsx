import React from "react";
// import "./style.css";
import img from "../assets/read2.png";
import Fade from "react-reveal/Fade";

const Info = () => {
  return (
    <div className="info">
      <Fade left>
        <img src={img} alt="info img" className="info-img" />
      </Fade>
      <div className="info-content">
        <Fade right>
          <h2 className="question">What is BookRev?</h2>
        </Fade>
        <div className="points">
          <Fade right>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="green"
                class="bi bi-check pts-ic"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <p className="pts">A book review website and much more</p>
            </div>
          </Fade>
         
          <Fade right>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="green"
                class="bi bi-check pts-ic"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <p className="pts">Get rewarded based on activity</p>
            </div>
          </Fade>
          <Fade right>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="green"
                class="bi bi-check pts-ic"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <p className="pts">
                Earn $REV tokens for free and use them to avail offers
              </p>
            </div>
          </Fade>
         
         
        </div>
      </div>
    </div>
  );
};

export default Info;
