import React from "react";
import "../css/TestimonialSection.css";
import Card from "./Card";
import card1 from "../images/america.jfif";
import card2 from "../images/china.jfif";
import card3 from "../images/japan.jfif";
import card4 from "../images/india.jfif";
import card5 from "../images/kailash.jfif";
import card6 from "../images/nepal.jfif";
export default function TestimonailSection() {
  return (
    <div className="testimonial-section">
      <h2>What Others Says</h2>
      <span className="about-us-section-underline"></span>
      <p>
        Here is a small selection of the kind words our clients have said about
        us recently.
      </p>
      <div className="scrollable-section">
        <Card
          image={card1}
          name="Customer Name"
          para="Exemplary service! The travel agency meticulously planned every detail, ensuring a seamless and unforgettable journey. Highly recommended for hassle-free travel!"
        />
        <Card
          image={card2}
          name="Customer Name"
          para="Exemplary service! The travel agency meticulously planned every detail, ensuring a seamless and unforgettable journey. Highly recommended for hassle-free travel!"
        />
        <Card
          image={card3}
          name="Customer Name"
          para="Exemplary service! The travel agency meticulously planned every detail, ensuring a seamless and unforgettable journey. Highly recommended for hassle-free travel!"
        />
        <Card
          image={card4}
          name="Customer Name"
          para="Exemplary service! The travel agency meticulously planned every detail, ensuring a seamless and unforgettable journey. Highly recommended for hassle-free travel!"
        />
        <Card
          image={card5}
          name="Customer Name"
          para="Exemplary service! The travel agency meticulously planned every detail, ensuring a seamless and unforgettable journey. Highly recommended for hassle-free travel!"
        />
      </div>
    </div>
  );
}
