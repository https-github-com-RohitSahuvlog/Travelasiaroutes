import React from "react";
import "../../css/JetExpeditions.css";
import ExpeditionCrousal from "./ExpeditionCrousal";
export default function JetExpeditions() {
  return (
    <div className="jet-expeditions-section">
      <h2 className="jetheading">Our Jet Expeditions</h2>
      <span className="about-us-section-underline"></span>
      <p>
        You are invited to Remote Lands’ signature Aman Jet Expeditions, in
        partnership with our friends at Aman. These are small group journeys
        designed for people who usually travel independently.
      </p>
      <ExpeditionCrousal />
    </div>
  );
}
