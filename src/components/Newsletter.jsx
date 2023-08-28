import React from "react";
import "../css/Newsletter.css";
export default function Newsletter() {
  return (
    <div className="newsletter-section">
      <h3>
        STAY INFORMED : <span>NEWSLETTER</span>
      </h3>
      {/* <span className="about-us-section-underline"></span> */}
      <input type="text" className="input-box" placeholder="Enter Your Email" />
      <p>I am Travel Advisor</p>
      <button className="btn-a btn-a-solid">Subscribe</button>
    </div>
  );
}
