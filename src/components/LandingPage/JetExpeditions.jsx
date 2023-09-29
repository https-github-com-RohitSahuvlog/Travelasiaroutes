import React from "react";
import "../../css/JetExpeditions.css";
import ExpeditionCrousal from "./ExpeditionCrousal";
export default function JetExpeditions() {
  return (
    <div className="jet-expeditions-section">
      <h2 className="jetheading" style={{ borderBottom: "3px solid   #e4bd5a" }}>Our Signature Small Group Expeditions
      </h2>
      <span className="about-us-section-underline"></span>
      <p>
        Embark on a Once-in-a-Lifetime Journey – Highly Recommended for Passionate Travelers and Nature Lovers
      </p>
      <ExpeditionCrousal />
    </div>
  );
}
