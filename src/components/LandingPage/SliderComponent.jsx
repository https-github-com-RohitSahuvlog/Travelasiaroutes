import React, { useEffect, useState } from "react";
import "../../css/SliderComponent.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const Frame = styled.div`
   background-color: #f7f7f7;
  border-radius: 16px;
  position: relative;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Soft box shadow */
`;

export default function SliderComponent() {

  const text = [
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
  const [counter, setCounter] = useState(0);
  const [myText, setMyText] = useState(text[counter]);
  const previousSlide = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(text.length - 1);
    }
    setMyText(text[counter]);
  };
  const nextSlide = () => {
    if (counter < text.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    setMyText(text[counter]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    setMyText(text[counter]);
  }, [counter]);

  return (
    <Frame className="slider-component">
      <div className="previous-btn" onClick={previousSlide}>
        <FaChevronLeft />
      </div>
      <div className="slides">
        <div className="slidesimage">
          <img src={myText.image} alt={myText.imageTitle} />
        </div>
        <div className="slides-text">
          <h2>{myText.heading}</h2>
          <h4>{myText.job}</h4>
          <p>{myText.para}</p>
        </div>
      </div>
      <div className="next-btn" onClick={nextSlide}>
        <FaChevronRight />
      </div>
    </Frame>
  );
}
