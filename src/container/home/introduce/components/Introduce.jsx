import React from "react";
import "../css/Introduce.css";

const Introduce = () => {
  return (
    <div className="introduce-container">
      <div className="introduce-main">
        {/* introduce resume */}
        <div
          className="introduce-resume"
          // data-aos={"fade-right"}
          // data-aos-duration={"1000"}
          // data-aos-once={"true"}
        >
          <div className="introduce-resume-header">
            <p>Hello, I'm</p>
            <h1>Quang Minh</h1>
            <p>Student of FPT Aptech academy</p>
          </div>
          <div className="introduce-resume-footer-container">
            <div className="introduce-resume-footer-main">
              <input
                className="introduce-download-btn"
                type="button"
                value="download resume"
              />
              <div className="introduce-resume-icon">
                <i className="bi bi-github"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>

        {/* introduce code */}
        <div
          className="introduce-code"
          // data-aos={"fade-left"}
          // data-aos-duration={"1000"}
          // data-aos-once={"true"}
        ></div>
      </div>
    </div>
  );
};

export default Introduce;
