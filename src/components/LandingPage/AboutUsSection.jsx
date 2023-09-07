import React, { useState } from "react";
import "../../css/AboutUsSection.css";
export default function AboutUsSection() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="about-us-section">
      <div className="about-us-sectionright">
        <h2>Mid Asia Journey</h2>
        <span className="about-us-section-underline"></span>
        <div className="about-us-section-para-portion">
          <div className="about-us-section-para-portion-left">
            <p>
              Midasia Routes, born from the adventurous spirit of Sumit Pruthi,
              a true traveler with a Middle Eastern soul.
            </p>
            <p>
              Since 2006, we've crafted heart-pounding journeys that transcend
              tourism, weaving dreams into expeditions.
            </p>
          </div>
          <div className="about-us-section-para-portion-right">
            <p>
              Unveil hidden wonders: yacht-explored archipelagos, breathtaking
              chopper vistas, and secluded wildlife realms. Embrace palatial
              sanctuaries on secret shores, connect with ancient communities,
              and discover an unseen part of the world led by those who know its
              essence. Your journey, your pace, your connection—etched in 15
              years of expertise. Unveil your travel DNA with Midasia Routes.
            </p>
          </div>
        </div>
        <button className="btn-a btn-a-outline">About Us</button>
      </div>
      <div
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
      </div>
    </div>
  );
}
