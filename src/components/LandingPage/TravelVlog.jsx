import React from "react";
import "../../css/TravelVlog.css";
import SliderComponent from "./SliderComponent";
export default function TravelVlog() {
  return (
    <div className="travel-vlog">
      <h2>Travel Vlog</h2>
      <span className="about-us-section-underline"></span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolor
        nobis in magni id excepturi placeat. Rerum id, aspernatur repudiandae
        incidunt neque sunt voluptate possimus?
      </p>
      <SliderComponent />
    </div>
  );
}
