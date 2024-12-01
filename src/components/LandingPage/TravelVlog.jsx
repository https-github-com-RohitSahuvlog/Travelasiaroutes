import React from "react";
import "../../css/TravelVlog.css";
import SliderComponent from "./SliderComponent";
export default function TravelVlog() {
  return (
    <div className="travel-vlog">

      <div className="main-title text-center">
        <h2 className="title">Why Travel with us? </h2>
        <p className="paragraph">
          MidAsiaRoutes - a platform for adventure, luxury, and authenticity from experts and explorers around the continent.
        </p>
      </div>
      <SliderComponent />
    </div>
  );
}
