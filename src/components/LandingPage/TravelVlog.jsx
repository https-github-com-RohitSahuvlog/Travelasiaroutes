import React from "react";
import "../../css/TravelVlog.css";
import SliderComponent from "./SliderComponent";
export default function TravelVlog() {
  return (
    <div className="travel-vlog">
      <h2 style={{ borderBottom: "3px solid   #e4bd5a" }}>Why Travel with us?</h2>
      {/* <span className="about-us-section-underline"></span> */}
      <p>
        MidAsiaRoutes - a platform for adventure, luxury, and authenticity from experts and explorers around the continent.
      </p>
      <SliderComponent />
    </div>
  );
}
