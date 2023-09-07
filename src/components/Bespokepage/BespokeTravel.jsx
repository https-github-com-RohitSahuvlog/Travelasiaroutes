import React from "react";
import "./BespokeTravel.css"; // Import the CSS file
import BespokeForm from "../Testing/BespokeForm";

const BespokeTravel = () => {
  return (
    <>
      <div className="bespoke-travel-container">
        <div className="bespoke-travel-content">
          <h3 className="bespoke-travel-title">
            Travel With Friends &amp; Family
          </h3>
          <p className="bespoke-travel-description">
            Bespoke Travel lets you imagine all the possibilities, and then we
            bring them to life. It's travel that lets you call the
            shots-inviting who you’d like, deciding how and when to travel,
            wherever takes your fancy. We’ll provide the amazing Experience
            Designer to pull it all together, adding a generous sprinkle of
            insider knowledge, awesome local contacts and a touch of magic, for
            a tailored trip that fits like a glove. Ready to get started? We
            just have a few questions first. You can let us know what you're
            after by filling out the form below or peruse our blog for more
            inspiration.
          </p>
        </div>
      </div>

      <BespokeForm />
    </>
  );
};

export default BespokeTravel;
