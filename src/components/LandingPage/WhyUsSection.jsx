import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "../../css/WhyUsSection.css"; // Import your custom CSS file

const carousalData = [
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693201416/nzn8rg4b0nj9iwhowjio.jpg",
    heading: "Trail-blaze Uncharted Discoveries",
    para: "Venture beyond the ordinary. Uncover hidden gems that remain a secret from most. Embrace both iconic highlights and off-the-radar treasures, creating a truly enriched and unparalleled journey.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693226848/dqpl5twt3coxnvtw0jmi.jpg",
    heading: "Seamless Luxury",
    para: "Elevate Your Experience with All-Inclusive Comfort. Indulge in Top-Rated Restaurants and Hotels, Unlocking Unsurpassed Value on Your Journey.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227339/fdtqeymwpgsyd942h8ly.jpg",
    heading: "Our Hand-Crafted Experiences",
    para: "Crafting bespoke journeys is our artistry. Our local travel experts meticulously weave unique itineraries, painting your desires into travel reality for an extraordinary, personalized adventure of a lifetime",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227344/zz5xxvshl55l9bajajbj.jpg",
    heading: "Guided by Excellence",
    para: "Our Local Experts and Tour Leaders. Immerse in authentic culture with seasoned guides who epitomize professionalism, knowledge, and boundless enthusiasm for unparalleled experiences.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227351/siedbybinrwwwekhmats.jpg",
    heading: "Keep you Safe",
    para: "Backed by the World Travel and Tourism Council’s Safe Travels Stamp. Your Health and Well-being Are Our Priority.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227358/qk42o8hw9wwxwnokxonf.jpg",
    heading: "Intimate Group Experience",
    para: "Connect with fellow explorers in groups of a dozen, with a maximum of 8. Enjoy personalized attention and shared journeys that forge lasting connections.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227123/dh7opvs3eyfxynutxegb.jpg",
    heading: "Give Back",
    para: "Every destination, a chance to give back. Our local expertise and ground teams empower us to select impactful community and conservation projects that truly matter",
  },
];

const WhyUsSection = () => {
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
    <div className="my-carousel">
      {carousalData.map((slide, index) => (
        <div
          key={index}
          className={`my-slide ${index === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" my-content">
            <h2>{slide.heading}</h2>
            <p className="color-[#222]">{slide.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsSection;
