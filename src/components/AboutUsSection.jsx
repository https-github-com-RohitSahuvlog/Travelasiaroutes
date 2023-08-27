import React from "react";
import "../css/AboutUsSection.css";
export default function AboutUsSection() {
  return (
    <div className="about-us-section">
      <h2>Mid Asia Journey</h2>
      <span className="about-us-section-underline"></span>
      <div className="about-us-section-para-portion">
        <div className="about-us-section-para-portion-left">
          <p>
            Seek the remarkable. Seek it in the world you know. But also in a
            world you don't: Asia.
          </p>
          <p>
            In distant, idyllic archipelagos, explored by luxury yacht, or
            unforgettable landscapes, witnessed from a private helicopter. In
            palatial hideaways on secret shores. In the natural habitats of the
            world's most cherished wildlife. In the welcome of remote mountain
            villages and ancient communities.
          </p>
        </div>
        <div className="about-us-section-para-portion-right">
          <p>
            Discover sides of Asia you never knew existed, revealed by people
            who know every facet. Find serenity in a journey that flows at your
            pace and follows your path, effortlessly accommodating any
            diversion.
          </p>
          <p>
            A journey not only of the body and mind but also of the soul; an
            opportunity for deeper, lasting connection with places and people,
            for you, for those you travel with and for those you meet.
          </p>
        </div>
      </div>
      <button className="btn-a btn-a-outline">About Us</button>
    </div>
  );
}
