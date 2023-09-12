import React from "react";
import "../../css/TravelVlog.css";
import SliderComponent from "./SliderComponent";
export default function TravelVlog() {
  return (
    <div className="travel-vlog">
      <h2>Why Travel with us?</h2>
      <span className="about-us-section-underline"></span>
      <p>
        An Asia-focused magazine brought to you by MidAsiaRoutes - a platform for adventure, luxury, and authenticity from experts and explorers around the continent.
      </p>
      <SliderComponent />
    </div>
  );
}
