import React from "react";
import "../../css/BespokeTravel.css"; // Import the CSS file
import BespokeForm from "./BespokeForm";

const BespokeTravel = () => {
  return (
    <>
      <div className="bespoke-travel-container">
        <div className="bespoke-travel-content">
          <h3 className="bespoke-travel-title">
            Your Bespoke Journey Awaits! "Dreams Turned into Journeys."
          </h3>
          <p className="bespoke-travel-description">
            In a world where the ordinary is all too familiar, Bespoke Travel invites you to break free from the mundane and embark on a journey that's uniquely yours. We specialize in creating handcrafted journeys that align perfectly with your travel DNA, catering to both those who seek adventure with friends and family and those who crave the thrill of solo exploration. With Bespoke Travel, your travel experience is not just a trip; it's a meticulously designed masterpiece, where you are the artist, and we are the canvas upon which your dreams come to life.
            Are you ready to turn your travel dreams into reality? Getting started with Bespoke Travel is easy. You can let us know what you're after by filling out a simple form, sharing your preferences, and outlining your vision.
            In a world of travel options, Bespoke Travel stands apart as a beacon of personalized excellence. It's time to embark on a journey that suits your travel DNA, where every moment is crafted with care and consideration, and every destination is a canvas for your dreams. Your bespoke journey awaits—let's create something extraordinary together.
          </p>
        </div>
      </div>

      <BespokeForm />
    </>
  );
};

export default BespokeTravel;
