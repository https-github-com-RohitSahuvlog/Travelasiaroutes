import React, { useState, useEffect } from "react";
import "../css/LandingCarousal.css";
import { CircularProgress } from "@mui/material";
const carousalData = [
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693201416/nzn8rg4b0nj9iwhowjio.jpg",
    heading: "Welcome to Our Website",
    para: "Trail-blaze Uncharted Discoveries.",
  },
  {
    image: require("../images/GuidedbyExcellence.jpeg"),
    heading: "Explore Our Services",
    para: "We offer a wide range of services.",
  },
  {
    image: require("../images/IntimateGroupExperience.jpeg"),
    heading: "Join Our Community",
    para: "Intimate Group Experience",
  },
  {
    image: require("../images/KeepyouSafe.jpeg"),
    heading: "Keep you Safe",
    para: "Discover amazing things with us.",
  },
  {
    image: require("../images/OurHand-Crafted.jpeg"),
    heading: "Our Hand-Crafted Experiences",
    para: "We offer a wide range of services.",
  },
  {
    image: require("../images/seamlessluxury.jpeg"),
    heading: "Seamless Luxury",
    para: "Connect with others who share your interests.",
  },
];

const LandingCarousal = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imagePromises = carousalData.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(false));
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carousalData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [imagesLoaded]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  if (!imagesLoaded) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="landing-carousal">
      {carousalData.map((slide, index) => (
        <div
          key={index}
          className={`slide-section ${index === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h2>{slide.heading}</h2>
            <p>{slide.para}</p>
          </div>
        </div>
      ))}
      <div className="dots">
        {carousalData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LandingCarousal;
