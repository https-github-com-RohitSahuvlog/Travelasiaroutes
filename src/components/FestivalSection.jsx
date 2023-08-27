import React from "react";
import "../css/FestivalSection.css";
import festivalSectionVideo from "../videos/festivalSectionVideo.mp4";
export default function FestivalSection() {
  return (
    <div className="festival-section">
      <h2>Festival</h2>
      <span className="about-us-section-underline"></span>
      <p>
        Timing your visit to Asia to coincide with a cultural event can
        profoundly transform your experience. Follow the link below to browse
        festivals by destination or month..
      </p>
      <video src={festivalSectionVideo} autoPlay loop muted></video>
      <button className="btn-a btn-a-outline">See All Festivals</button>
    </div>
  );
}
