import React, { useState } from "react";
import "../../css/SliderComponent.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function SliderComponent() {
  const text = [
    {
      name: "Welcome To ASIA",
      job: "Trail-blaze Uncharted Discoveries",
      image:
        "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693203064/ur7ojbulglflxats58hq.jpg",
      para: "Venture beyond the ordinary. Uncover hidden gems that remain a secret from most. Embrace both iconic highlights and off-the-radar treasures, creating a truly enriched and unparalleled journey",
      imageTitle: "Trail-blaze",
      link: "#",
    },
    {
      name: "Seamless Luxury",
      job: "Travelling Vlog",
      image:
        "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693203721/zjjp96rjeb3ruvf7kurl.jpg",
      para: "Elevate Your Experience with All-Inclusive Comfort. Indulge in Top-Rated Restaurants and Hotels, Unlocking Unsurpassed Value on Your Journey.",
      imageTitle: "Seamless Image",
      link: "#",
    },
    {
      name: "Our Hand-Crafted Experiences",
      job: "Travelling Vlog",
      image:
        "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693202574/aj91ctoqjmdsiu9lu1pe.jpg",
      para: "Crafting bespoke journeys is our artistry. Our local travel experts meticulously weave unique itineraries, painting your desires into travel reality for an extraordinary, personalized adventure of a lifetime.",
      imageTitle: "Hand-Crafted Image",
      link: "#",
    },
    {
      name: "Guided by Excellence",
      job: "Travelling Vlog",
      image:
        "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693203725/dqmzvmgtvhejvsvolkqi.jpg",
      para: "Our Local Experts and Tour Leaders. Immerse in authentic culture with seasoned guides who epitomize professionalism, knowledge, and boundless enthusiasm for unparalleled experiences.",
      imageTitle: "Guided Image",
      link: "#",
    },
    {
      name: "Keep you Safe",
      job: "Travelling Vlog",
      image:
        "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693203724/rbo3elex8chg3r21gwup.jpg",
      para: "Backed by the World Travel and Tourism Council’s Safe Travels Stamp. Your Health and Well-being Are Our Priority",
      imageTitle: "Sameer Image",
      link: "#",
    },
  ];
  let i = 0;
  const [counter, setCounter] = useState(0);
  const [myText, setMyText] = useState(text[counter]);
  const previousSlide = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(text.length - 1);
    }
    setMyText(text[counter]);
    console.log(myText);
  };
  const nextSlide = () => {
    if (counter < text.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    setMyText(text[counter]);
    console.log(myText);
  };

  return (
    <div className="slider-component">
      <div className="previous-btn" onClick={previousSlide}>
        <FaChevronLeft />
      </div>
      <div className="slides">
        <div className="slidesimage">
          <img src={myText.image} alt={myText.imageTitle} />
        </div>
        <div className="slides-text">
          <h2>{myText.name}</h2>
          <h4>{myText.job}</h4>
          <p>{myText.para}</p>
          <a href={myText.link} className="btn-a btn-a-solid">
            Read Article
          </a>
        </div>
      </div>
      <div className="next-btn" onClick={nextSlide}>
        <FaChevronRight />
      </div>
    </div>
  );
}
