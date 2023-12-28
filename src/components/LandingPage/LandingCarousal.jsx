import React, { useState, useEffect, useRef } from "react";
import Slider from "../Carousal/slider.js"
// import tanjortemple from "../../images/tanjoretemple.jpg";
const carousalData = [
  // {
  //   image: `${tanjortemple}`,
  //   heading: "Pioneering Excellence Across Middle East and Asia",
  //   para: "Crafting Extraordinary Journeys",
  // },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693292014/ebbk0kkna8wvvm6ajysj.jpg",
    heading: "Unlocking Your Travel DNA",
    para: "Tailoring Experiences Just for You.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693288332/z9g7rpj8ddmmfuyurfwn.jpg",
    heading: "Once-in-a-Lifetime Memory",
    para: "A Symphony of Culture, Luxury and Discovery.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693288332/a1aleqataokwjnzp2ua2.jpg",
    heading: "Unleash Wanderlust",
    para: "Your Path to Untouched Destinations",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693288332/zn8fne4kchxjkmghai1l.jpg",
    heading: "Guiding Beyond Maps",
    para: "Authentic Encounters with Exceptional Local Leaders",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693288331/nvmspnna9rszpq4sq0ex.jpg",
    heading: "Native-Led Voyages",
    para: "Exclusive Itineraries Curated by Destination Natives",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693288334/hg3vbjtsbqqwxbra8cx6.jpg",
    heading: "Intimate Boutique Escapes",
    para: "Pioneering Excellence Across Middle East and Asia",
  },
];

const LandingCarousal = () => {

  return (
    <div className="landinglanding-carousal">
      <Slider carousalData={carousalData} />
    </div>
  );
};

export default LandingCarousal;