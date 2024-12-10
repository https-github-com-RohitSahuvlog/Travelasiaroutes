import React, { useState } from "react";
import "../../css/AboutUsSection.css";
import { Link } from "react-router-dom";
export default function AboutUsSection() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="about-us-section">
      <div className="about-us-sectionright">
        <h2 style={{ borderBottom: "3px solid  #e4bd5a", textAlign: "center", justifyContent: "center", fontSize: "2rem", marginBottom: "1rem" }}>Whispers of the Caravan: Tales of Lost and Found</h2>
        <div className="about-us-section-para-portion">
          <div className="about-us-section-para-portion-left">
            At Midasia Routes, we invite you to step into the footsteps of wanderers past—those who dared to tread the unknown, guided only by whispers of the Silk Road winds. Our journeys are not mere itineraries but poetic odysseys, unearthing stories of fear, freedom, and transformation.
          </div>
          <div className="about-us-section-para-portion-right">
            Each expedition is a tapestry woven with ancient rituals, untold secrets, and the vibrant pulse of cultures untouched by time. Here, your path is not just a trail on a map—it’s a bridge to the extraordinary, where the echoes of the past meet the promises of tomorrow.
            <br />
            <p style={{ width: "100%", textAlign: "center" }}>
              Are you ready to write your own tale on the ever-unfolding road?
            </p>

          </div>
        </div>

        {/* <button className="btn-a btn-a-outline" style={{ zIndex: 5 }}>
          <Link to="/aboutus" >About Us</Link>
        </button> */}
      </div>
      {/* <div
        className={`about-us-sectionleft ${isImageHovered ? "rotate" : ""}`}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693333123/xzafx2fd1toloh9b9wif.jpg"
          }
          alt="Sumit Travel"
        />
      </div> */}
    </div >
  );
}
