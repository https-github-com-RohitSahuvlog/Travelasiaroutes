import React from "react";
import "../css/ExpeditionCrousal.css";
import testImg from "../images/whyusbg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
function ExpeditionCrousal() {
  const crousalCard = [
    {
      url: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693202538/wv3lcnzfsenqss5l8rfp.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693202416/fljvku9bhstxi2ut62du.jpg",
      title: "Journey to the World",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693202451/hxufcettbr4xuf0nwjb9.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693203192/mlopgsl39ddjfrkrdf2s.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    duration: 500,
    arrowsBlock: false,
    prevArrow: <FaChevronLeft className="custom-arrow prev-arrow" />,
    nextArrow: <FaChevronRight className="custom-arrow next-arrow" />,
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      className="expedition-crousal"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="custom-arrow prev-arrow"
          >
            <FaChevronLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="custom-arrow next-arrow"
          >
            <FaChevronRight />
          </button>
        )
      }
    >
      {crousalCard.map((data, index) => (
        <div key={index} className="expedtion-crousal-box">
          <img src={data.url} className="carousel-image" />
          <div className="expedtion-crousal-inner-box">
            <h3>{data.title}</h3>
            <p>{data.places}</p>
            <p>{data.date}</p>
            <a href={data.link} className="btn-a btn-a-outline">
              See More
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default ExpeditionCrousal;
