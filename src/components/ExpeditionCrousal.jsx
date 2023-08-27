import React from "react";
import "../css/ExpeditionCrousal.css";
import testImg from "../images/whyusbg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function ExpeditionCrousal() {
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
    <Carousel className="expedtion-crousal">
      {/* <div className="expedtion-crousal-box">
        <img src={testImg} />
        <div className="expedtion-crousal-inner-box">
          <h3>A Mindful Cultural Journey</h3>
          <p>Nepal-Bhutan-Indian-Sri Lanka</p>
          <p>September 29 - October 30</p>
          <a href="#" className="btn-a btn-a-outline">
            See More
          </a>
        </div>
      </div>*/}
      {crousalCard.map((data, index) => (
        <div key={index} className="expedtion-crousal-box">
          <img src={require(`../images/${data.url}`)} />
          {/* <img src={data.url} alt="" /> */}
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
