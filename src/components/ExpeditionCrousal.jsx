import React from "react";
import "../css/ExpeditionCrousal.css";
import testImg from "../images/whyusbg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
function ExpeditionCrousal() {
  const crousalCard = [
    {
      url: "japan.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "nightBoat.jpg",
      title: "Jouney to the world",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "scubaDiving.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
    {
      url: "whyusbg.jpg",
      title: "A Mindful Cultural Journey",
      places: "Nepal-Bhutan-Indian-Sri Lanka",
      date: "September 29 - October 30",
      link: "",
    },
  ];
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
          <img src={require(`../images/${data.url}`)} />
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
